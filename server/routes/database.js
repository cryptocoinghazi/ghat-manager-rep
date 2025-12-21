import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import mysqldump from 'mysqldump';
import dotenv from 'dotenv';
import sequelize from '../mysql.js';
import { Sequelize } from 'sequelize';

dotenv.config();
const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const backupsDir = path.resolve(__dirname, '../backups');

if (!fs.existsSync(backupsDir)) {
  fs.mkdirSync(backupsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, backupsDir),
  filename: (_, file, cb) => cb(null, `restore-${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// Helper: Create a dedicated connection for restore operations with multipleStatements enabled
const createRestoreConnection = () => {
  return new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
      dialect: 'mysql',
      logging: false,
      dialectOptions: {
        multipleStatements: true // Critical for running dump files
      }
    }
  );
};

// Helper: Perform the restore process
const performRestore = async (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error('Backup file not found');
  }

  const sql = fs.readFileSync(filePath, 'utf8');
  
  // Basic integrity check
  if (!sql.trim() || (!sql.includes('CREATE TABLE') && !sql.includes('INSERT INTO'))) {
    throw new Error('Invalid backup file: No SQL structure found');
  }

  const restoreDb = createRestoreConnection();

  try {
    await restoreDb.authenticate();
    
    // 1. Disable FK checks
    await restoreDb.query('SET FOREIGN_KEY_CHECKS = 0');

    // 2. Drop all tables to ensure clean slate
    const [tables] = await restoreDb.query('SHOW TABLES');
    if (tables.length > 0) {
      const tableNames = tables.map(t => Object.values(t)[0]);
      for (const table of tableNames) {
        await restoreDb.query(`DROP TABLE IF EXISTS \`${table}\``);
      }
    }

    // 3. Execute the SQL dump
    await restoreDb.query(sql);

    // 4. Re-enable FK checks
    await restoreDb.query('SET FOREIGN_KEY_CHECKS = 1');

    return true;
  } catch (error) {
    console.error('Restore Logic Error:', error);
    throw error;
  } finally {
    await restoreDb.close();
  }
};

router.get('/backup', async (req, res) => {
  try {
    const filename = `backup-${Date.now()}.sql`;
    const file = path.join(backupsDir, filename);
    await mysqldump({
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306
      },
      dumpToFile: file
    });
    
    // Return file info so frontend can list it immediately
    res.json({ 
      message: 'Backup created successfully',
      file: filename, 
      size: fs.statSync(file).size 
    });
  } catch (e) {
    console.error('Backup error:', e);
    res.status(500).json({ error: 'Backup failed: ' + e.message });
  }
});

router.get('/backup/list', (req, res) => {
  try {
    const files = fs.readdirSync(backupsDir)
      .filter(f => f.endsWith('.sql'))
      .map(f => ({ 
        name: f, 
        path: path.join(backupsDir, f), 
        size: fs.statSync(path.join(backupsDir, f)).size,
        created: fs.statSync(path.join(backupsDir, f)).birthtime
      }))
      .sort((a, b) => b.created - a.created); // Newest first
    res.json(files);
  } catch (e) {
    res.status(500).json({ error: 'Failed to list backups' });
  }
});

// Restore from uploaded file
router.post('/restore', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    await performRestore(req.file.path);
    res.json({ message: 'Restore completed successfully' });
  } catch (e) {
    console.error('Restore failed:', e);
    res.status(500).json({ error: 'Restore failed: ' + e.message });
  }
});

// Restore from existing backup file (by filename)
router.post('/restore-file', async (req, res) => {
  try {
    const { filename } = req.body;
    if (!filename) {
      return res.status(400).json({ error: 'Filename is required' });
    }

    const filePath = path.join(backupsDir, filename);
    
    // Security check: prevent directory traversal
    if (!filePath.startsWith(backupsDir)) {
       return res.status(403).json({ error: 'Invalid file path' });
    }

    await performRestore(filePath);
    res.json({ message: 'Restore completed successfully' });
  } catch (e) {
    console.error('Restore failed:', e);
    res.status(500).json({ error: 'Restore failed: ' + e.message });
  }
});

router.delete('/backup/:id', (req, res) => {
  try {
    // Basic security to prevent traversal
    const safeName = path.basename(req.params.id);
    const file = path.join(backupsDir, safeName);
    
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      res.json({ message: 'Backup deleted' });
    } else {
      res.status(404).json({ error: 'File not found' });
    }
  } catch (e) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

router.post('/export', async (req, res) => {
  try {
    const [rows] = await sequelize.query('SHOW TABLES');
    const exportData = {};
    for (const row of rows) {
      const table = Object.values(row)[0];
      const [data] = await sequelize.query(`SELECT * FROM \`${table}\``);
      exportData[table] = data;
    }
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="export.json"');
    res.send(JSON.stringify({ timestamp: new Date().toISOString(), data: exportData }));
  } catch (e) {
    res.status(500).json({ error: 'Export failed' });
  }
});

export default router;
