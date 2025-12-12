import express from 'express';
import bcrypt from 'bcrypt';
import { getDB } from '../db.js';
import { Op } from 'sequelize';
import { Settings, TruckOwners, DepositTransactions, sequelize, Users } from '../models/index.js';

const router = express.Router();

// Get all settings
router.get('/', async (req, res) => {
  try {
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    if (useMySQL) {
      const rows = await Settings.findAll({ order: [['category', 'ASC'], ['key', 'ASC']] });
      const result = { categorized: {}, flat: {} };
      rows.forEach(setting => {
        const s = setting.toJSON();
        if (!result.categorized[s.category]) result.categorized[s.category] = {};
        result.categorized[s.category][s.key] = { value: s.value, id: s.key, updated_at: s.updated_at };
        result.flat[s.key] = s.value;
      });
      return res.json(result);
    }
    const db = getDB();
    const settings = await db.all('SELECT * FROM settings ORDER BY category, key');
    const result = { categorized: {}, flat: {} };
    settings.forEach(setting => {
      if (!result.categorized[setting.category]) result.categorized[setting.category] = {};
      result.categorized[setting.category][setting.key] = { value: setting.value, id: setting.id, updated_at: setting.updated_at };
      result.flat[setting.key] = setting.value;
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

// Get settings by category
router.get('/category/:category', async (req, res) => {
  try {
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    const { category } = req.params;
    if (useMySQL) {
      const rows = await Settings.findAll({ where: { category }, order: [['key', 'ASC']] });
      const result = {};
      rows.forEach(s => { const r = s.toJSON(); result[r.key] = { value: r.value, id: r.key, updated_at: r.updated_at }; });
      return res.json(result);
    }
    const db = getDB();
    const settings = await db.all('SELECT * FROM settings WHERE category = ? ORDER BY key', [category]);
    const categorySettings = {};
    settings.forEach(setting => { categorySettings[setting.key] = { value: setting.value, id: setting.id, updated_at: setting.updated_at }; });
    res.json(categorySettings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch category settings' });
  }
});

// Update single setting
router.put('/:key', async (req, res) => {
  try {
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    const { key } = req.params;
    const { value } = req.body;
    if (value === undefined) return res.status(400).json({ error: 'Value is required' });
    if (useMySQL) {
      const existing = await Settings.findByPk(key);
      if (!existing) return res.status(404).json({ error: 'Setting not found' });
      await existing.update({ value, updated_at: new Date() });
      return res.json({ message: 'Setting updated successfully' });
    }
    const db = getDB();
    const result = await db.run('UPDATE settings SET value = ?, updated_at = CURRENT_TIMESTAMP WHERE key = ?', [value, key]);
    if (result.changes === 0) return res.status(404).json({ error: 'Setting not found' });
    res.json({ message: 'Setting updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update setting' });
  }
});

// Update multiple settings (upsert missing keys)
router.post('/batch-update', async (req, res) => {
  try {
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    const updates = req.body;
    if (!updates || typeof updates !== 'object') return res.status(400).json({ error: 'Invalid updates format' });
    if (useMySQL) {
      const categoryMap = {
        quarry_name: 'company',
        quarry_address: 'company',
        default_rate: 'financial',
        default_partner_rate: 'financial',
        loading_charge: 'financial',
        receipt_prefix: 'receipt',
        receipt_start: 'receipt',
        currency: 'financial',
        unit: 'general',
        printer_width: 'receipt',
        auto_print: 'receipt',
        print_duplicate: 'receipt',
        include_barcode: 'receipt'
      };
      const t = await sequelize.transaction();
      try {
        for (const [key, value] of Object.entries(updates)) {
          const category = categoryMap[key] || 'general';
          const existing = await Settings.findByPk(key, { transaction: t });
          if (existing) {
            await existing.update({ value: String(value), category, updated_at: new Date() }, { transaction: t });
          } else {
            await Settings.create({ key, value: String(value), category, updated_at: new Date() }, { transaction: t });
          }
        }
        await t.commit();
        return res.json({ message: 'Settings updated successfully' });
      } catch (e) {
        await t.rollback();
        throw e;
      }
    }
    const db = getDB();
    await db.run('BEGIN TRANSACTION');
    try {
      const categoryMap = {
        quarry_name: 'company',
        quarry_address: 'company',
        default_rate: 'financial',
        default_partner_rate: 'financial',
        loading_charge: 'financial',
        receipt_prefix: 'receipt',
        receipt_start: 'receipt',
        currency: 'financial',
        unit: 'general',
        printer_width: 'receipt',
        auto_print: 'receipt',
        print_duplicate: 'receipt',
        include_barcode: 'receipt'
      };
      for (const [key, value] of Object.entries(updates)) {
        const result = await db.run('UPDATE settings SET value = ?, updated_at = CURRENT_TIMESTAMP WHERE key = ?', [value, key]);
        if (result.changes === 0) {
          const category = categoryMap[key] || 'general';
          await db.run('INSERT INTO settings (key, value, category, updated_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)', [key, String(value), category]);
        }
      }
      await db.run('COMMIT');
      res.json({ message: 'Settings updated successfully' });
    } catch (error) {
      await db.run('ROLLBACK');
      throw error;
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

// Get truck owners with error handling for missing table
router.get('/truck-owners', async (req, res) => {
  try {
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    const { is_partner } = req.query;
    if (useMySQL) {
      const where = { is_active: 1 };
      if (is_partner !== undefined) where.is_partner = (is_partner === 'true' || is_partner === '1') ? 1 : 0;
      const owners = await TruckOwners.findAll({ where, order: [['name','ASC']] });
      return res.json(owners);
    }
    const db = getDB();
    const tableExists = await db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='truck_owners'");
    if (!tableExists) return res.json([]);
    let query = 'SELECT * FROM truck_owners WHERE is_active = 1';
    const params = [];
    if (is_partner !== undefined) { query += ' AND is_partner = ?'; params.push(is_partner === 'true' || is_partner === '1' ? 1 : 0); }
    query += ' ORDER BY name';
    const owners = await db.all(query, params);
    res.json(owners);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch truck owners' });
  }
});

// Get single truck owner by name
router.get('/truck-owners/by-name/:name', async (req, res) => {
  try {
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    const { name } = req.params;
    if (useMySQL) {
      const owner = await TruckOwners.findOne({ where: { name, is_active: 1 } });
      return res.json(owner || null);
    }
    const db = getDB();
    const owner = await db.get('SELECT * FROM truck_owners WHERE name = ? AND is_active = 1', [name]);
    res.json(owner || null);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch truck owner' });
  }
});

// Create or update truck owner
router.post('/truck-owners', async (req, res) => {
  try {
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    const { name, contact, address, phone, vehicle_number, is_partner, partner_rate } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });
    if (!vehicle_number) return res.status(400).json({ error: 'Vehicle number is required' });
    if (useMySQL) {
      const existing = await TruckOwners.findOne({ where: { name } });
      if (existing) {
        await existing.update({ phone: phone || contact || null, address: address || null, vehicle_number: vehicle_number || null, is_partner: is_partner ? 1 : 0, partner_rate: partner_rate || null });
        return res.json({ message: 'Truck owner updated successfully', owner: existing });
      } else {
        const created = await TruckOwners.create({ name, phone: phone || contact || null, address: address || null, vehicle_number: vehicle_number || null, is_partner: is_partner ? 1 : 0, partner_rate: partner_rate || null, is_active: 1 });
        return res.json({ message: 'Truck owner created successfully', owner: created });
      }
    }
    const db = getDB();
    const existing = await db.get('SELECT id FROM truck_owners WHERE name = ?', [name]);
    if (existing) {
      await db.run(`UPDATE truck_owners SET 
          phone = COALESCE(?, phone),
          address = COALESCE(?, address),
          vehicle_number = COALESCE(?, vehicle_number),
          is_partner = COALESCE(?, is_partner),
          partner_rate = ?,
          updated_at = CURRENT_TIMESTAMP
        WHERE name = ?`, [phone || contact || null, address || null, vehicle_number || null, is_partner ? 1 : 0, partner_rate || null, name]);
      const updated = await db.get('SELECT * FROM truck_owners WHERE name = ?', [name]);
      return res.json({ message: 'Truck owner updated successfully', owner: updated });
    } else {
      const result = await db.run(`INSERT INTO truck_owners (name, phone, address, vehicle_number, is_partner, partner_rate, is_active) 
         VALUES (?, ?, ?, ?, ?, ?, 1)`, [name, phone || contact || null, address || null, vehicle_number || null, is_partner ? 1 : 0, partner_rate || null]);
      const newOwner = await db.get('SELECT * FROM truck_owners WHERE id = ?', [result.lastID]);
      return res.json({ message: 'Truck owner created successfully', owner: newOwner });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to save truck owner' });
  }
});

// Deposit: add amount to owner's balance (admin)
router.post('/truck-owners/:id/deposit/add', async (req, res) => {
  try {
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    const { id } = req.params;
    const { amount } = req.body;
    const addVal = parseFloat(amount);
    if (!addVal || addVal <= 0) return res.status(400).json({ error: 'Amount must be greater than 0' });
    if (useMySQL) {
      const owner = await TruckOwners.findOne({ where: { id, is_active: 1 } });
      if (!owner) return res.status(404).json({ error: 'Truck owner not found' });
      const prev = parseFloat(owner.deposit_balance || 0);
      const newBalance = prev + addVal;
      await owner.update({ deposit_balance: newBalance });
      await DepositTransactions.create({ owner_id: owner.id, type: 'add', amount: addVal, previous_balance: prev, new_balance: newBalance, notes: 'Manual deposit add' });
      return res.json({ message: 'Deposit added successfully', owner });
    }
    const db = getDB();
    const owner = await db.get('SELECT * FROM truck_owners WHERE id = ? AND is_active = 1', [id]);
    if (!owner) return res.status(404).json({ error: 'Truck owner not found' });
    const prev = parseFloat(owner.deposit_balance || 0);
    const newBalance = prev + addVal;
    await db.run('UPDATE truck_owners SET deposit_balance = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [newBalance, id]);
    await db.run(`INSERT INTO deposit_transactions (owner_id, type, amount, previous_balance, new_balance, notes)
       VALUES (?, 'add', ?, ?, ?, ?)`, [id, addVal, prev, newBalance, 'Manual deposit add']);
    const updated = await db.get('SELECT * FROM truck_owners WHERE id = ?', [id]);
    res.json({ message: 'Deposit added successfully', owner: updated });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add deposit' });
  }
});

// Deposit: deduct amount from owner's balance (admin/manual)
router.post('/truck-owners/:id/deposit/deduct', async (req, res) => {
  try {
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    const { id } = req.params;
    const { amount, receipt_id } = req.body;
    const deductVal = parseFloat(amount);
    if (!deductVal || deductVal <= 0) return res.status(400).json({ error: 'Amount must be greater than 0' });
    if (useMySQL) {
      const owner = await TruckOwners.findOne({ where: { id, is_active: 1 } });
      if (!owner) return res.status(404).json({ error: 'Truck owner not found' });
      const available = parseFloat(owner.deposit_balance || 0);
      if (available < deductVal) return res.status(400).json({ error: 'Insufficient deposit balance' });
      await owner.update({ deposit_balance: available - deductVal });
      await DepositTransactions.create({ owner_id: owner.id, type: 'deduct', amount: deductVal, previous_balance: available, new_balance: available - deductVal, receipt_no: receipt_id || null, notes: 'Manual deposit deduct' });
      return res.json({ message: 'Deposit deducted successfully', owner, receipt_id });
    }
    const db = getDB();
    const owner = await db.get('SELECT * FROM truck_owners WHERE id = ? AND is_active = 1', [id]);
    if (!owner) return res.status(404).json({ error: 'Truck owner not found' });
    const available = parseFloat(owner.deposit_balance || 0);
    if (available < deductVal) return res.status(400).json({ error: 'Insufficient deposit balance' });
    await db.run('UPDATE truck_owners SET deposit_balance = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [available - deductVal, id]);
    await db.run(`INSERT INTO deposit_transactions (owner_id, type, amount, previous_balance, new_balance, receipt_no, notes)
       VALUES (?, 'deduct', ?, ?, ?, ?, ?)`, [id, deductVal, available, available - deductVal, receipt_id || null, 'Manual deposit deduct']);
    const updated = await db.get('SELECT * FROM truck_owners WHERE id = ?', [id]);
    res.json({ message: 'Deposit deducted successfully', owner: updated, receipt_id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to deduct deposit' });
  }
});

router.put('/truck-owners/:id/deposit/set', async (req, res) => {
  try {
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    const { id } = req.params;
    const { amount } = req.body;
    const newVal = parseFloat(amount);
    if (isNaN(newVal) || newVal < 0) {
      return res.status(400).json({ error: 'Amount must be a non-negative number' });
    }
    if (useMySQL) {
      const owner = await TruckOwners.findOne({ where: { id, is_active: 1 } });
      if (!owner) return res.status(404).json({ error: 'Truck owner not found' });
      const prevSet = parseFloat(owner.deposit_balance || 0);
      await owner.update({ deposit_balance: newVal });
      await DepositTransactions.create({ owner_id: owner.id, type: 'set', amount: newVal, previous_balance: prevSet, new_balance: newVal, notes: 'Set balance' });
      return res.json({ message: 'Deposit balance updated', owner });
    }
    const db = getDB();
    const owner = await db.get('SELECT * FROM truck_owners WHERE id = ? AND is_active = 1', [id]);
    if (!owner) return res.status(404).json({ error: 'Truck owner not found' });
    const prevSet = parseFloat(owner.deposit_balance || 0);
    await db.run('UPDATE truck_owners SET deposit_balance = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [newVal, id]);
    await db.run(`INSERT INTO deposit_transactions (owner_id, type, amount, previous_balance, new_balance, notes)
       VALUES (?, 'set', ?, ?, ?, ?)`, [id, newVal, prevSet, newVal, 'Set balance']);
    const updated = await db.get('SELECT * FROM truck_owners WHERE id = ?', [id]);
    res.json({ message: 'Deposit balance updated', owner: updated });
  } catch (error) {
    res.status(500).json({ error: 'Failed to set deposit balance' });
  }
});

// Update truck owner by ID
router.put('/truck-owners/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, address, vehicle_number, is_partner, partner_rate } = req.body;
    
    const db = getDB();
    
    const existing = await db.get('SELECT * FROM truck_owners WHERE id = ?', [id]);
    if (!existing) {
      return res.status(404).json({ error: 'Truck owner not found' });
    }
    
    await db.run(
      `UPDATE truck_owners SET 
        name = COALESCE(?, name),
        phone = ?,
        address = ?,
        vehicle_number = ?,
        is_partner = ?,
        partner_rate = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?`,
      [name, phone || null, address || null, vehicle_number || null, is_partner ? 1 : 0, partner_rate || null, id]
    );
    
    const updated = await db.get('SELECT * FROM truck_owners WHERE id = ?', [id]);
    res.json({ 
      message: 'Truck owner updated successfully',
      owner: updated
    });
  } catch (error) {
    console.error('Error updating truck owner:', error);
    res.status(500).json({ error: 'Failed to update truck owner' });
  }
});

// Toggle partner status
router.put('/truck-owners/:id/toggle-partner', async (req, res) => {
  try {
    const { id } = req.params;
    const { is_partner, partner_rate } = req.body;
    
    const db = getDB();
    
    const existing = await db.get('SELECT * FROM truck_owners WHERE id = ?', [id]);
    if (!existing) {
      return res.status(404).json({ error: 'Truck owner not found' });
    }
    
    await db.run(
      `UPDATE truck_owners SET 
        is_partner = ?,
        partner_rate = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?`,
      [is_partner ? 1 : 0, partner_rate || null, id]
    );
    
    const updated = await db.get('SELECT * FROM truck_owners WHERE id = ?', [id]);
    res.json({ 
      message: `Truck owner ${is_partner ? 'marked as partner' : 'marked as regular'}`,
      owner: updated
    });
  } catch (error) {
    console.error('Error toggling partner status:', error);
    res.status(500).json({ error: 'Failed to toggle partner status' });
  }
});

// Delete truck owner
router.delete('/truck-owners/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const db = getDB();
    
    const existing = await db.get('SELECT * FROM truck_owners WHERE id = ?', [id]);
    if (!existing) {
      return res.status(404).json({ error: 'Truck owner not found' });
    }
    
    await db.run(
      'DELETE FROM truck_owners WHERE id = ?',
      [id]
    );
    
    res.json({ 
      message: 'Truck owner deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting truck owner:', error);
    res.status(500).json({ error: 'Failed to delete truck owner' });
  }
});

// Get partner stats
router.get('/partner-stats', async (req, res) => {
  try {
    const db = getDB();
    
    // Get partner count
    const partnerCount = await db.get(
      'SELECT COUNT(*) as count FROM truck_owners WHERE is_partner = 1 AND is_active = 1'
    );
    
    // Get regular count
    const regularCount = await db.get(
      'SELECT COUNT(*) as count FROM truck_owners WHERE is_partner = 0 AND is_active = 1'
    );
    
    // Get partner transactions summary
    const partnerTransactions = await db.get(`
      SELECT 
        COUNT(*) as transactions,
        SUM(total_amount) as total_amount,
        SUM(brass_qty) as total_brass
      FROM receipts 
      WHERE owner_type = 'partner' AND is_active = 1
    `);
    
    // Get regular transactions summary
    const regularTransactions = await db.get(`
      SELECT 
        COUNT(*) as transactions,
        SUM(total_amount) as total_amount,
        SUM(brass_qty) as total_brass
      FROM receipts 
      WHERE owner_type = 'regular' AND is_active = 1
    `);
    
    res.json({
      partners: {
        count: partnerCount?.count || 0,
        transactions: partnerTransactions?.transactions || 0,
        totalAmount: partnerTransactions?.total_amount || 0,
        totalBrass: partnerTransactions?.total_brass || 0
      },
      regular: {
        count: regularCount?.count || 0,
        transactions: regularTransactions?.transactions || 0,
        totalAmount: regularTransactions?.total_amount || 0,
        totalBrass: regularTransactions?.total_brass || 0
      }
    });
  } catch (error) {
    console.error('Error fetching partner stats:', error);
    res.status(500).json({ error: 'Failed to fetch partner stats' });
  }
});

// Backup database with improved error handling
router.get('/backup', async (req, res) => {
  try {
    const db = getDB();
    
    // Get all data from existing tables
    const backupData = {
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      data: {}
    };
    
    // List of tables to backup
    const tables = ['receipts', 'truck_owners', 'settings', 'credit_payments'];
    
    for (const table of tables) {
      try {
        const tableExists = await db.get(
          "SELECT name FROM sqlite_master WHERE type='table' AND name=?",
          [table]
        );
        
        if (tableExists) {
          const data = await db.all(`SELECT * FROM ${table}`);
          backupData.data[table] = data;
        } else {
          backupData.data[table] = [];
        }
      } catch (err) {
        console.warn(`Error backing up table ${table}:`, err);
        backupData.data[table] = [];
      }
    }
    
    // Set proper headers for JSON response
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="backup.json"');
    
    res.json(backupData);
  } catch (error) {
    console.error('Error creating backup:', error);
    res.status(500).json({ error: 'Failed to create backup' });
  }
});

// Restore from backup
router.post('/restore', async (req, res) => {
  try {
    const { backupData } = req.body;
    
    if (!backupData || !backupData.data) {
      return res.status(400).json({ error: 'Invalid backup data' });
    }
    
    const db = getDB();
    
    // Start transaction
    await db.run('BEGIN TRANSACTION');
    
    try {
      // Clear existing data
      const tables = Object.keys(backupData.data);
      
      for (const table of tables) {
        await db.run(`DELETE FROM ${table}`);
        
        // Insert backup data
        const rows = backupData.data[table];
        for (const row of rows) {
          // Dynamically create INSERT query
          const columns = Object.keys(row).join(', ');
          const placeholders = Object.keys(row).map(() => '?').join(', ');
          const values = Object.values(row);
          
          await db.run(
            `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`,
            values
          );
        }
      }
      
      await db.run('COMMIT');
      res.json({ message: 'Backup restored successfully' });
    } catch (error) {
      await db.run('ROLLBACK');
      throw error;
    }
  } catch (error) {
    console.error('Error restoring backup:', error);
    res.status(500).json({ error: 'Failed to restore backup' });
  }
});

// =====================
// USER MANAGEMENT ROUTES (Admin only)
// =====================

// Middleware to check admin role
const checkAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

// Get all users
router.get('/users', checkAdmin, async (req, res) => {
  try {
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    if (useMySQL) {
      const users = await Users.findAll({ order: [['id', 'DESC']], attributes: ['id','username','full_name','role','is_active'] });
      return res.json(users);
    }
    const db = getDB();
    const users = await db.all('SELECT id, username, full_name, role, is_active, created_at FROM users ORDER BY created_at DESC');
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Create new user
router.post('/users', checkAdmin, async (req, res) => {
  try {
    const { username, password, full_name, role } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Username and password are required' });
    if (password.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters' });
    const validRoles = ['admin', 'user'];
    if (role && !validRoles.includes(role)) return res.status(400).json({ error: 'Invalid role. Must be "admin" or "user"' });
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    const passwordHash = await bcrypt.hash(password, 10);
    if (useMySQL) {
      const exists = await Users.findOne({ where: { username } });
      if (exists) return res.status(400).json({ error: 'Username already exists' });
      const created = await Users.create({ username, password_hash: passwordHash, full_name: full_name || username, role: role || 'user', is_active: 1 });
      return res.json({ message: 'User created successfully', id: created.id, username, full_name: created.full_name, role: created.role });
    }
    const db = getDB();
    const existingUser = await db.get('SELECT id FROM users WHERE username = ?', [username]);
    if (existingUser) return res.status(400).json({ error: 'Username already exists' });
    const result = await db.run(`INSERT INTO users (username, password_hash, full_name, role) 
       VALUES (?, ?, ?, ?)`, [username, passwordHash, full_name || username, role || 'user']);
    res.json({ message: 'User created successfully', id: result.lastID, username, full_name: full_name || username, role: role || 'user' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Update user
router.put('/users/:id', checkAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { full_name, role, password, is_active } = req.body;
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    if (useMySQL) {
      const user = await Users.findByPk(id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      if (is_active === 0 && user.role === 'admin') {
        const adminCount = await Users.count({ where: { role: 'admin', is_active: 1 } });
        if (adminCount <= 1) return res.status(400).json({ error: 'Cannot deactivate the last admin user' });
      }
      const updates = {};
      if (full_name !== undefined) updates.full_name = full_name;
      if (role !== undefined) updates.role = role;
      if (password !== undefined && password.length >= 6) updates.password_hash = await bcrypt.hash(password, 10);
      if (is_active !== undefined) updates.is_active = is_active;
      if (Object.keys(updates).length === 0) return res.status(400).json({ error: 'No valid updates provided' });
      await user.update(updates);
      return res.json({ message: 'User updated successfully' });
    }
    const db = getDB();
    const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (is_active === 0 && user.role === 'admin') {
      const adminCount = await db.get('SELECT COUNT(*) as count FROM users WHERE role = ? AND is_active = 1', ['admin']);
      if (adminCount.count <= 1) return res.status(400).json({ error: 'Cannot deactivate the last admin user' });
    }
    const updates = [];
    const values = [];
    if (full_name !== undefined) { updates.push('full_name = ?'); values.push(full_name); }
    if (role !== undefined) { updates.push('role = ?'); values.push(role); }
    if (password !== undefined && password.length >= 6) { const passwordHash = await bcrypt.hash(password, 10); updates.push('password_hash = ?'); values.push(passwordHash); }
    if (is_active !== undefined) { updates.push('is_active = ?'); values.push(is_active); }
    if (updates.length === 0) return res.status(400).json({ error: 'No valid updates provided' });
    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(id);
    await db.run(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`, values);
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Delete user (soft delete)
router.delete('/users/:id', checkAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    if (useMySQL) {
      const user = await Users.findByPk(id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      if (user.role === 'admin') {
        const adminCount = await Users.count({ where: { role: 'admin', is_active: 1 } });
        if (adminCount <= 1) return res.status(400).json({ error: 'Cannot delete the last admin user' });
      }
      await user.update({ is_active: 0 });
      return res.json({ message: 'User deleted successfully' });
    }
    const db = getDB();
    const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.role === 'admin') {
      const adminCount = await db.get('SELECT COUNT(*) as count FROM users WHERE role = ? AND is_active = 1', ['admin']);
      if (adminCount.count <= 1) return res.status(400).json({ error: 'Cannot delete the last admin user' });
    }
    await db.run('UPDATE users SET is_active = 0, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [id]);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

export default router;
