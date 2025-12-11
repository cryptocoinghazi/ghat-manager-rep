import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db = null;

export async function initializeDatabase() {
  try {
    const dbDir = path.join(__dirname, 'database');
    
    if (!fs.existsSync(dbDir)) {
      fs.mkdirSync(dbDir, { recursive: true });
      console.log('📁 Created database directory');
    }
    
    const dbPath = path.join(dbDir, 'ghatmanager.db');
    console.log('🔗 Database path:', dbPath);
    
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });

    console.log('✅ Database connected successfully');
    
    // Create tables if they don't exist
    await createTables();
    
    // Initialize default settings
    await initializeSettings();
    
    // Initialize default users
    await initializeUsers();
    
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
      payment_method TEXT DEFAULT 'cash',
      deposit_deducted DECIMAL(10,2) DEFAULT 0,
      owner_type TEXT DEFAULT 'regular',
      applied_rate DECIMAL(10,2) DEFAULT NULL,
      notes TEXT,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Migration: Add owner_type and applied_rate columns if missing
  try {
    await db.exec(`ALTER TABLE receipts ADD COLUMN owner_type TEXT DEFAULT 'regular'`);
  } catch (e) { /* column exists */ }
  try {
    await db.exec(`ALTER TABLE receipts ADD COLUMN applied_rate DECIMAL(10,2) DEFAULT NULL`);
  } catch (e) { /* column exists */ }
  // Migration: Add deposit/payment columns if missing
  try {
    await db.exec(`ALTER TABLE receipts ADD COLUMN payment_method TEXT DEFAULT 'cash'`);
  } catch (e) { /* column exists */ }
  try {
    await db.exec(`ALTER TABLE receipts ADD COLUMN deposit_deducted DECIMAL(10,2) DEFAULT 0`);
  } catch (e) { /* column exists */ }

  // Create truck_owners table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS truck_owners (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE NOT NULL,
      phone TEXT,
      address TEXT,
      credit_limit DECIMAL(10,2) DEFAULT 0,
      payment_type TEXT DEFAULT 'cash',
      is_partner INTEGER DEFAULT 0,
      partner_rate DECIMAL(10,2) DEFAULT NULL,
      deposit_balance DECIMAL(10,2) DEFAULT 0,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Migration: Add vehicle_number column if missing
  try {
    await db.exec(`ALTER TABLE truck_owners ADD COLUMN vehicle_number TEXT`);
  } catch (e) { /* column exists */ }
  
  // Migration: Add partner columns if missing
  try {
    await db.exec(`ALTER TABLE truck_owners ADD COLUMN is_partner INTEGER DEFAULT 0`);
  } catch (e) { /* column exists */ }
  try {
    await db.exec(`ALTER TABLE truck_owners ADD COLUMN partner_rate DECIMAL(10,2) DEFAULT NULL`);
  } catch (e) { /* column exists */ }
  try {
    await db.exec(`ALTER TABLE truck_owners ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP`);
  } catch (e) { /* column exists */ }
  try {
    await db.exec(`ALTER TABLE truck_owners ADD COLUMN updated_at DATETIME DEFAULT CURRENT_TIMESTAMP`);
  } catch (e) { /* column exists */ }
  // Migration: Add deposit_balance if missing
  try {
    await db.exec(`ALTER TABLE truck_owners ADD COLUMN deposit_balance DECIMAL(10,2) DEFAULT 0`);
  } catch (e) { /* column exists */ }

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

  // Create users table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      full_name TEXT,
      role TEXT DEFAULT 'user',
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create indexes for performance
  await db.exec(`
    CREATE INDEX IF NOT EXISTS idx_receipts_date ON receipts(date_time);
    CREATE INDEX IF NOT EXISTS idx_receipts_owner ON receipts(truck_owner);
    CREATE INDEX IF NOT EXISTS idx_receipts_vehicle ON receipts(vehicle_number);
    CREATE INDEX IF NOT EXISTS idx_receipts_status ON receipts(payment_status);
  `);

  // Create expenses table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL DEFAULT CURRENT_DATE,
      category TEXT NOT NULL,
      description TEXT NOT NULL,
      amount REAL NOT NULL,
      payment_mode TEXT DEFAULT 'CASH',
      receipt_number TEXT,
      vendor_name TEXT,
      ghat_location TEXT NOT NULL,
      approved_by TEXT,
      remarks TEXT,
      status TEXT DEFAULT 'APPROVED',
      created_by TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Add created_by column if it doesn't exist (migration for existing databases)
  try {
    await db.exec(`ALTER TABLE expenses ADD COLUMN created_by TEXT`);
    console.log('✅ Added created_by column to expenses table');
  } catch (error) {
    // Column already exists, ignore error
  }

  // Create expense categories table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS expense_categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create deposit transactions log table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS deposit_transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      owner_id INTEGER NOT NULL,
      type TEXT NOT NULL, -- add | deduct | set
      amount DECIMAL(10,2) NOT NULL,
      previous_balance DECIMAL(10,2) NOT NULL,
      new_balance DECIMAL(10,2) NOT NULL,
      receipt_no TEXT,
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (owner_id) REFERENCES truck_owners(id)
    )
  `);

  // Create expense indexes
  await db.exec(`
    CREATE INDEX IF NOT EXISTS idx_expenses_date ON expenses(date);
    CREATE INDEX IF NOT EXISTS idx_expenses_category ON expenses(category);
    CREATE INDEX IF NOT EXISTS idx_expenses_ghat_location ON expenses(ghat_location);
  `);

  // Initialize default expense categories
  await initializeExpenseCategories();

  console.log('✅ Tables created successfully');
}

async function initializeExpenseCategories() {
  const defaultCategories = [
    { name: 'LABOR', description: 'Worker wages and labor costs' },
    { name: 'FUEL', description: 'Diesel, petrol, gas' },
    { name: 'MAINTENANCE', description: 'Equipment and vehicle maintenance' },
    { name: 'OFFICE', description: 'Office supplies and expenses' },
    { name: 'TRANSPORT', description: 'Transportation costs' },
    { name: 'RENT', description: 'Rent and lease payments' },
    { name: 'UTILITIES', description: 'Electricity, water, internet' },
    { name: 'FOOD', description: 'Food and refreshments' },
    { name: 'OTHER', description: 'Miscellaneous expenses' }
  ];

  for (const category of defaultCategories) {
    await db.run(`
      INSERT OR IGNORE INTO expense_categories (name, description) 
      VALUES (?, ?)
    `, [category.name, category.description]);
  }
}

async function initializeSettings() {
  const defaultSettings = [
    { key: 'quarry_name', value: 'Mukindpur Sand Quarry', category: 'company' },
    { key: 'quarry_address', value: 'Mukindpur, District Office', category: 'company' },
    { key: 'default_rate', value: '1200', category: 'financial' },
    { key: 'default_partner_rate', value: '1000', category: 'financial' },
    { key: 'loading_charge', value: '150', category: 'financial' },
    { key: 'receipt_prefix', value: 'GM', category: 'receipt' },
    { key: 'receipt_start', value: '9001', category: 'receipt' },
    { key: 'currency', value: '₹', category: 'financial' },
    { key: 'unit', value: 'Brass', category: 'general' },
    { key: 'printer_width', value: '58mm', category: 'receipt' },
    { key: 'auto_print', value: 'true', category: 'receipt' },
    { key: 'print_duplicate', value: 'false', category: 'receipt' },
    { key: 'include_barcode', value: 'false', category: 'receipt' }
  ];

  for (const setting of defaultSettings) {
    await db.run(`
      INSERT OR IGNORE INTO settings (key, value, category) 
      VALUES (?, ?, ?)
    `, [setting.key, setting.value, setting.category]);
  }

  console.log('✅ Default settings initialized');
}

async function initializeUsers() {
  const defaultUsers = [
    { username: 'admin', password: 'admin123', full_name: 'Administrator', role: 'admin' },
    { username: 'user', password: 'user123', full_name: 'Standard User', role: 'user' }
  ];

  for (const user of defaultUsers) {
    const existingUser = await db.get('SELECT id FROM users WHERE username = ?', [user.username]);
    if (!existingUser) {
      const passwordHash = await bcrypt.hash(user.password, 10);
      await db.run(`
        INSERT INTO users (username, password_hash, full_name, role) 
        VALUES (?, ?, ?, ?)
      `, [user.username, passwordHash, user.full_name, user.role]);
    }
  }

  console.log('✅ Default users initialized');
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
