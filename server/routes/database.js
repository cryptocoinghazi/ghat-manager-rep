import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import mysqldump from 'mysqldump';
import dotenv from 'dotenv';
import sequelize from '../mysql.js';

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

router.get('/backup', async (req, res) => {
  try {
    const file = path.join(backupsDir, `backup-${Date.now()}.sql`);
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
    res.json({ file, size: fs.statSync(file).size });
  } catch (e) {
    res.status(500).json({ error: 'Backup failed' });
  }
});

router.get('/backup/list', (req, res) => {
  const files = fs.readdirSync(backupsDir).filter(f => f.endsWith('.sql')).map(f => ({ name: f, path: path.join(backupsDir, f), size: fs.statSync(path.join(backupsDir, f)).size }));
  res.json(files);
});

router.post('/restore', upload.single('file'), async (req, res) => {
  try {
    const sql = fs.readFileSync(req.file.path, 'utf8');
    await sequelize.query('SET FOREIGN_KEY_CHECKS=0');
    await sequelize.query(sql);
    await sequelize.query('SET FOREIGN_KEY_CHECKS=1');
    res.json({ message: 'Restore completed' });
  } catch (e) {
    res.status(500).json({ error: 'Restore failed' });
  }
});

router.delete('/backup/:id', (req, res) => {
  try {
    const file = path.join(backupsDir, req.params.id);
    if (fs.existsSync(file)) fs.unlinkSync(file);
    res.json({ message: 'Deleted' });
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
