import sequelize from '../mysql.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const migrationsDir = path.resolve(path.dirname(__filename), '../migrations');

async function runSpecificMigration() {
  const file = '20260206_fix_receipts_key_limit.sql';
  const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
  
  console.log(`Applying migration: ${file}`);
  try {
    await sequelize.query(sql);
    console.log('Migration applied successfully');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await sequelize.close();
  }
}

runSpecificMigration();
