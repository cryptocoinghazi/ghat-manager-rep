import express from 'express';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { VehicleImages, TruckVehicles, TruckOwners, sequelize } from '../models/index.js';
import { ocrNumberPlate } from '../services/ocr.js';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.resolve(__dirname, '../uploads/vehicle_images');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, uploadsDir),
  filename: (_, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.createHash('sha256').update(`${Date.now()}-${file.originalname}-${salt}`).digest('hex');
    cb(null, `${hash}${ext}`);
  }
});

function fileFilter(req, file, cb) {
  const allowed = ['image/jpeg', 'image/png', 'image/jpg'];
  if (!allowed.includes(file.mimetype)) {
    return cb(new Error('Unsupported file type. Only JPEG and PNG allowed.'));
  }
  cb(null, true);
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

const queue = [];
let processing = false;

async function processJob(job) {
  const { filePath, meta } = job;
  try {
    const ocr = await ocrNumberPlate(filePath);
    const extracted = ocr.text?.toUpperCase() || null;
    let matchedVehicle = null;
    let matchedOwner = null;

    if (extracted) {
      // 1. Try exact match first
      matchedVehicle = await TruckVehicles.findOne({ where: { vehicle_number: extracted } });

      // 2. If no exact match, try normalized match (remove spaces, hyphens, non-alphanumeric)
      if (!matchedVehicle) {
        // Clean extracted text: remove spaces, hyphens, special chars
        const cleaned = extracted.replace(/[^a-zA-Z0-9]/g, '');
        
        // Try normalized match
        matchedVehicle = await TruckVehicles.findOne({
          where: sequelize.where(
            sequelize.fn('REPLACE', 
              sequelize.fn('REPLACE', sequelize.col('vehicle_number'), '-', ''), 
              ' ', ''
            ),
            cleaned
          )
        });
      }

      if (matchedVehicle) {
         console.log(`[OCR] Vehicle found in TruckVehicles: ${matchedVehicle.vehicle_number}, OwnerID: ${matchedVehicle.truck_owner_id}`);
         if (matchedVehicle.truck_owner_id) {
           matchedOwner = await TruckOwners.findByPk(matchedVehicle.truck_owner_id);
         }
      } else {
         console.log(`[OCR] Vehicle NOT found in TruckVehicles: ${extracted}`);
      }
      
      // Fallback: If no owner found yet (either vehicle not found, or vehicle found but no owner linked)
      if (!matchedOwner && extracted) {
        console.log(`[OCR] Attempting fallback search in TruckOwners for: ${extracted}`);
        
        // Check if the vehicle number exists directly on a TruckOwner record
        
        // 1. Try exact match on TruckOwners
        matchedOwner = await TruckOwners.findOne({ where: { vehicle_number: extracted } });
        
        // 2. Try normalized match on TruckOwners
        if (!matchedOwner) {
           const cleaned = extracted.replace(/[^a-zA-Z0-9]/g, '');
           matchedOwner = await TruckOwners.findOne({
             where: sequelize.where(
               sequelize.fn('REPLACE', 
                 sequelize.fn('REPLACE', sequelize.col('vehicle_number'), '-', ''), 
                 ' ', ''
               ),
               cleaned
             )
           });
        }
        
        if (matchedOwner) {
          console.log(`[OCR] Fallback match found in TruckOwners: ${matchedOwner.name}`);
        } else {
          console.log(`[OCR] No fallback match found.`);
        }
      }
    }

    const record = await VehicleImages.findByPk(meta.id);
    if (record) {
      await record.update({
        vehicle_number_extracted: extracted,
        ocr_confidence: ocr.confidence || 0,
        ocr_provider: ocr.provider || 'unknown',
        ocr_raw_json: ocr.raw ? JSON.stringify(ocr.raw) : null,
        processed_at: new Date(),
        truck_vehicle_id: matchedVehicle ? matchedVehicle.id : null
      });
    }
    job.resolve({
      status: 'completed',
      image: record,
      match: {
        vehicle: matchedVehicle || null,
        owner: matchedOwner || null
      }
    });
  } catch (err) {
    const record = await VehicleImages.findByPk(meta.id);
    job.reject(err);
    if (record) {
      await record.update({
        ocr_provider: (process.env.OCR_PROVIDER || 'unknown'),
        ocr_raw_json: JSON.stringify({ error: err.message }),
        processed_at: new Date()
      });
    }
  }
}

async function runQueue() {
  if (processing) return;
  processing = true;
  while (queue.length) {
    const job = queue.shift();
    await processJob(job);
  }
  processing = false;
}

router.post('/photo-recognition', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }
    const { originalname, mimetype, size, filename } = req.file;
    const filePath = path.join(uploadsDir, filename);
    const createdBy = req.user?.username || 'system';

    const imageRec = await VehicleImages.create({
      original_filename: originalname,
      filename_encrypted: filename,
      mime_type: mimetype,
      size_bytes: size,
      created_by: createdBy
    });

    const isAsync = String(req.query.async || 'false').toLowerCase() === 'true';
    if (isAsync) {
      const job = {};
      job.filePath = filePath;
      job.meta = { id: imageRec.id };
      job.resolve = (data) => { job._response = data; };
      job.reject = (err) => { job._error = err; };
      queue.push(job);
      setImmediate(runQueue);
      return res.json({ message: 'Queued for OCR', id: imageRec.id, status: 'queued' });
    }

    const start = Date.now();
    const ocr = await ocrNumberPlate(filePath);
    const extracted = ocr.text?.toUpperCase() || null;

    let matchedVehicle = null;
    let matchedOwner = null;

    if (extracted) {
      // 1. Try exact match first
      matchedVehicle = await TruckVehicles.findOne({ where: { vehicle_number: extracted } });

      // 2. If no exact match, try normalized match (remove spaces, hyphens, non-alphanumeric)
      if (!matchedVehicle) {
        // Clean extracted text: remove spaces, hyphens, special chars
        const cleaned = extracted.replace(/[^a-zA-Z0-9]/g, '');
        
        // Search in DB by normalizing stored vehicle_number on the fly
        matchedVehicle = await TruckVehicles.findOne({
          where: sequelize.where(
            sequelize.fn('REPLACE', 
              sequelize.fn('REPLACE', sequelize.col('vehicle_number'), '-', ''), 
              ' ', ''
            ),
            cleaned
          )
        });
      }

      if (matchedVehicle) {
        console.log(`[OCR Sync] Vehicle found in TruckVehicles: ${matchedVehicle.vehicle_number}, OwnerID: ${matchedVehicle.truck_owner_id}`);
        if (matchedVehicle.truck_owner_id) {
          matchedOwner = await TruckOwners.findByPk(matchedVehicle.truck_owner_id);
        }
      } else {
        console.log(`[OCR Sync] Vehicle NOT found in TruckVehicles: ${extracted}`);
      }
      
      // Fallback: If no owner found yet (either vehicle not found, or vehicle found but no owner linked)
      if (!matchedOwner && extracted) {
        console.log(`[OCR Sync] Attempting fallback search in TruckOwners for: ${extracted}`);
        
        // Check if the vehicle number exists directly on a TruckOwner record
        
        // 1. Try exact match on TruckOwners
        matchedOwner = await TruckOwners.findOne({ where: { vehicle_number: extracted } });
        
        // 2. Try normalized match on TruckOwners
        if (!matchedOwner) {
           const cleaned = extracted.replace(/[^a-zA-Z0-9]/g, '');
           matchedOwner = await TruckOwners.findOne({
             where: sequelize.where(
               sequelize.fn('REPLACE', 
                 sequelize.fn('REPLACE', sequelize.col('vehicle_number'), '-', ''), 
                 ' ', ''
               ),
               cleaned
             )
           });
        }

        if (matchedOwner) {
          console.log(`[OCR Sync] Fallback match found in TruckOwners: ${matchedOwner.name}`);
        } else {
          console.log(`[OCR Sync] No fallback match found.`);
        }
      }
    }

    await imageRec.update({
      vehicle_number_extracted: extracted,
      ocr_confidence: ocr.confidence || 0,
      ocr_provider: ocr.provider || 'unknown',
      ocr_raw_json: ocr.raw ? JSON.stringify(ocr.raw) : null,
      processed_at: new Date(),
      truck_vehicle_id: matchedVehicle ? matchedVehicle.id : null
    });

    const needsManual = !extracted || (ocr.confidence || 0) < 85;

    // Helper to trim owner name if present
    let ownerResponse = null;
    if (matchedOwner) {
      const ownerJson = matchedOwner.toJSON();
      // REMOVED trim to ensure exact match with DB string for frontend validation
      // if (ownerJson.name) ownerJson.name = ownerJson.name.trim(); 
      ownerResponse = ownerJson;
    }

    res.json({
      success: true,
      extracted_plate: extracted,
      confidence: ocr.confidence,
      needs_manual: needsManual,
      match: {
        vehicle: matchedVehicle || null,
        owner: ownerResponse
      }
    });
  } catch (error) {
    if (error.message && error.message.includes('Unsupported file type')) {
      return res.status(415).json({ error: error.message });
    }
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({ error: 'File too large. Max 5MB.' });
    }
    console.error('Photo recognition error:', error);
    res.status(500).json({ error: error.message || 'Photo recognition failed' });
  }
});

router.get('/photo-recognition/:id', async (req, res) => {
  try {
    const rec = await VehicleImages.findByPk(req.params.id);
    if (!rec) return res.status(404).json({ error: 'Not found' });
    res.json(rec);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recognition record' });
  }
});

export default router;
