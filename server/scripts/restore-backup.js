import mysql from 'mysql2/promise';
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const DB_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  multipleStatements: true
};

const DB_NAME = process.env.DB_NAME || 'sand_mining_db';
const BACKUP_FILE = path.resolve(__dirname, '../backup-1769936184852.sql');

async function restore() {
  let connection;
  try {
    console.log('Connecting to MySQL...');
    connection = await mysql.createConnection(DB_CONFIG);

    console.log(`Checking database: ${DB_NAME}...`);
    // Create DB if not exists
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
    await connection.query(`USE \`${DB_NAME}\``);

    console.log('Dropping existing tables...');
    await connection.query('SET FOREIGN_KEY_CHECKS = 0');
    
    const [rows] = await connection.query('SHOW TABLES');
    if (rows.length > 0) {
      const tables = rows.map(row => Object.values(row)[0]);
      for (const table of tables) {
        console.log(`Dropping table: ${table}`);
        await connection.query(`DROP TABLE IF EXISTS \`${table}\``);
      }
    }
    
    await connection.query('SET FOREIGN_KEY_CHECKS = 1');

    console.log(`Reading backup file: ${BACKUP_FILE}...`);
    const sql = await fs.readFile(BACKUP_FILE, 'utf8');

    console.log('Executing SQL script...');
    await connection.query(sql);

    console.log('Restore completed successfully.');
  } catch (error) {
    console.error('Restore failed:', error);
    process.exit(1);
  } finally {
    if (connection) await connection.end();
  }
}

restore();
