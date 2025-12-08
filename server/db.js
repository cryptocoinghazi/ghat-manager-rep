import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db = null;

export async function initializeDatabase() {
  try {
    db = await open({
      filename: path.join(__dirname, 'database', 'ghatmanager.db'),
      driver: sqlite3.Database
    });

    console.log('✅ Database connected successfully');
    
    // Create tables if they don't exist
    await createTables();
    
    // Initialize default settings
    await initializeSettings();
    
    return db;
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    throw error;
  }
}

async function createTables() {
  // Create receipts table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS receipts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      receipt_no TEXT UNIQUE NOT NULL,
      truck_owner TEXT NOT NULL,
      vehicle_number TEXT NOT NULL,
      date_time DATETIME DEFAULT CURRENT_TIMESTAMP,
      brass_qty DECIMAL(10,2) NOT NULL,
      rate DECIMAL(10,2) NOT NULL,
      loading_charge DECIMAL(10,2) DEFAULT 0,
      cash_paid DECIMAL(10,2) DEFAULT 0,
      credit_amount DECIMAL(10,2) DEFAULT 0,
      total_amount DECIMAL(10,2) NOT NULL,
      payment_status TEXT DEFAULT 'pending',
      notes TEXT,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create truck_owners table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS truck_owners (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE NOT NULL,
      phone TEXT,
      address TEXT,
      credit_limit DECIMAL(10,2) DEFAULT 0,
      payment_type TEXT DEFAULT 'cash',
      is_active INTEGER DEFAULT 1
    )
  `);

  // Create settings table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT,
      category TEXT,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create credit_payments table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS credit_payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      receipt_id INTEGER,
      amount_paid DECIMAL(10,2) NOT NULL,
      payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      payment_mode TEXT,
      reference_no TEXT,
      FOREIGN KEY (receipt_id) REFERENCES receipts (id)
    )
  `);

  // Create indexes for performance
  await db.exec(`
    CREATE INDEX IF NOT EXISTS idx_receipts_date ON receipts(date_time);
    CREATE INDEX IF NOT EXISTS idx_receipts_owner ON receipts(truck_owner);
    CREATE INDEX IF NOT EXISTS idx_receipts_vehicle ON receipts(vehicle_number);
    CREATE INDEX IF NOT EXISTS idx_receipts_status ON receipts(payment_status);
  `);

  console.log('✅ Tables created successfully');
}

async function initializeSettings() {
  const defaultSettings = [
    { key: 'quarry_name', value: 'Mukindpur Sand Quarry', category: 'company' },
    { key: 'quarry_address', value: 'Mukindpur, District Office', category: 'company' },
    { key: 'default_rate', value: '1200', category: 'financial' },
    { key: 'loading_charge', value: '150', category: 'financial' },
    { key: 'receipt_prefix', value: 'GM', category: 'receipt' },
    { key: 'receipt_start', value: '9001', category: 'receipt' },
    { key: 'currency', value: '₹', category: 'financial' },
    { key: 'unit', value: 'Brass', category: 'general' }
  ];

  for (const setting of defaultSettings) {
    await db.run(`
      INSERT OR IGNORE INTO settings (key, value, category) 
      VALUES (?, ?, ?)
    `, [setting.key, setting.value, setting.category]);
  }

  console.log('✅ Default settings initialized');
}

export function getDB() {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDatabase first.');
  }
  return db;
}

// Run migrations
export async function runMigrations() {
  const migrations = [
    // Add future migrations here
  ];

  for (const migration of migrations) {
    try {
      await db.exec(migration);
      console.log(`✅ Migration executed: ${migration.substring(0, 50)}...`);
    } catch (error) {
      console.error('❌ Migration failed:', error);
    }
  }
}