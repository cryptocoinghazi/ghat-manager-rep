import fs from 'fs';
import path from 'path';
import sequelize from './mysql.js';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const migrationsDir = path.resolve(path.dirname(__filename), 'migrations');

export async function runMigrations() {
  const files = fs.readdirSync(migrationsDir)
    .filter(f => f.endsWith('.sql') && !f.includes('rollback'))
    .sort();
  for (const file of files) {
    const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
    console.log(`Applying migration: ${file}`);
    await sequelize.query(sql);
  }
  console.log('Migrations applied successfully');
}

export async function runRollback() {
  const files = fs.readdirSync(migrationsDir)
    .filter(f => f.endsWith('.sql') && f.includes('rollback'))
    .sort();
  for (const file of files) {
    const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
    console.log(`Running rollback: ${file}`);
    await sequelize.query(sql);
  }
  console.log('Rollback completed successfully');
}
