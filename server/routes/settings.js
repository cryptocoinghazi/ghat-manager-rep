import express from 'express';
import bcrypt from 'bcrypt';
import { getDB } from '../db.js';

const router = express.Router();

// Get all settings
router.get('/', async (req, res) => {
  try {
    const db = getDB();
    const settings = await db.all('SELECT * FROM settings ORDER BY category, key');
    
    // Return both structured and flat formats for compatibility
    const result = {
      categorized: {},
      flat: {}
    };
    
    settings.forEach(setting => {
      // Create categorized structure
      if (!result.categorized[setting.category]) {
        result.categorized[setting.category] = {};
      }
      result.categorized[setting.category][setting.key] = {
        value: setting.value,
        id: setting.id,
        updated_at: setting.updated_at
      };
      
      // Create flat key-value structure
      result.flat[setting.key] = setting.value;
    });
    
    res.json(result);
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

// Get settings by category
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const db = getDB();
    
    const settings = await db.all(
      'SELECT * FROM settings WHERE category = ? ORDER BY key',
      [category]
    );
    
    const categorySettings = {};
    settings.forEach(setting => {
      categorySettings[setting.key] = {
        value: setting.value,
        id: setting.id,
        updated_at: setting.updated_at
      };
    });
    
    res.json(categorySettings);
  } catch (error) {
    console.error('Error fetching category settings:', error);
    res.status(500).json({ error: 'Failed to fetch category settings' });
  }
});

// Update single setting
router.put('/:key', async (req, res) => {
  try {
    const { key } = req.params;
    const { value } = req.body;
    
    if (value === undefined) {
      return res.status(400).json({ error: 'Value is required' });
    }
    
    const db = getDB();
    const result = await db.run(
      'UPDATE settings SET value = ?, updated_at = CURRENT_TIMESTAMP WHERE key = ?',
      [value, key]
    );
    
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Setting not found' });
    }
    
    res.json({ message: 'Setting updated successfully' });
  } catch (error) {
    console.error('Error updating setting:', error);
    res.status(500).json({ error: 'Failed to update setting' });
  }
});

// Update multiple settings
router.post('/batch-update', async (req, res) => {
  try {
    const updates = req.body;
    
    if (!updates || typeof updates !== 'object') {
      return res.status(400).json({ error: 'Invalid updates format' });
    }
    
    const db = getDB();
    
    // Start transaction for batch update
    await db.run('BEGIN TRANSACTION');
    
    try {
      for (const [key, value] of Object.entries(updates)) {
        await db.run(
          'UPDATE settings SET value = ?, updated_at = CURRENT_TIMESTAMP WHERE key = ?',
          [value, key]
        );
      }
      
      await db.run('COMMIT');
      res.json({ message: 'Settings updated successfully' });
    } catch (error) {
      await db.run('ROLLBACK');
      throw error;
    }
  } catch (error) {
    console.error('Error updating settings:', error);
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

// Get truck owners with error handling for missing table
router.get('/truck-owners', async (req, res) => {
  try {
    const db = getDB();
    const { is_partner } = req.query;
    
    // Check if table exists
    const tableExists = await db.get(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='truck_owners'"
    );
    
    if (!tableExists) {
      return res.json([]); // Return empty array if table doesn't exist
    }
    
    let query = 'SELECT * FROM truck_owners WHERE is_active = 1';
    const params = [];
    
    if (is_partner !== undefined) {
      query += ' AND is_partner = ?';
      params.push(is_partner === 'true' || is_partner === '1' ? 1 : 0);
    }
    
    query += ' ORDER BY name';
    
    const owners = await db.all(query, params);
    res.json(owners);
  } catch (error) {
    console.error('Error fetching truck owners:', error);
    res.status(500).json({ error: 'Failed to fetch truck owners' });
  }
});

// Get single truck owner by name
router.get('/truck-owners/by-name/:name', async (req, res) => {
  try {
    const db = getDB();
    const { name } = req.params;
    
    const owner = await db.get(
      'SELECT * FROM truck_owners WHERE name = ? AND is_active = 1',
      [name]
    );
    
    if (!owner) {
      return res.json(null);
    }
    
    res.json(owner);
  } catch (error) {
    console.error('Error fetching truck owner:', error);
    res.status(500).json({ error: 'Failed to fetch truck owner' });
  }
});

// Create or update truck owner
router.post('/truck-owners', async (req, res) => {
  try {
    const { name, contact, address, phone, vehicle_number, is_partner, partner_rate } = req.body;
    
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    
    if (!vehicle_number) {
      return res.status(400).json({ error: 'Vehicle number is required' });
    }
    
    const db = getDB();
    
    // Check if owner already exists
    const existing = await db.get('SELECT id FROM truck_owners WHERE name = ?', [name]);
    
    if (existing) {
      // Update existing owner
      await db.run(
        `UPDATE truck_owners SET 
          phone = COALESCE(?, phone),
          address = COALESCE(?, address),
          vehicle_number = COALESCE(?, vehicle_number),
          is_partner = COALESCE(?, is_partner),
          partner_rate = ?,
          updated_at = CURRENT_TIMESTAMP
        WHERE name = ?`,
        [phone || contact || null, address || null, vehicle_number || null, is_partner ? 1 : 0, partner_rate || null, name]
      );
      
      const updated = await db.get('SELECT * FROM truck_owners WHERE name = ?', [name]);
      res.json({ 
        message: 'Truck owner updated successfully',
        owner: updated
      });
    } else {
      // Create new owner
      const result = await db.run(
        `INSERT INTO truck_owners (name, phone, address, vehicle_number, is_partner, partner_rate, is_active) 
         VALUES (?, ?, ?, ?, ?, ?, 1)`,
        [name, phone || contact || null, address || null, vehicle_number || null, is_partner ? 1 : 0, partner_rate || null]
      );
      
      const newOwner = await db.get('SELECT * FROM truck_owners WHERE id = ?', [result.lastID]);
      res.json({ 
        message: 'Truck owner created successfully',
        owner: newOwner
      });
    }
  } catch (error) {
    console.error('Error saving truck owner:', error);
    res.status(500).json({ error: 'Failed to save truck owner' });
  }
});

// Deposit: add amount to owner's balance (admin)
router.post('/truck-owners/:id/deposit/add', async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;
    const db = getDB();
    const addVal = parseFloat(amount);
    if (!addVal || addVal <= 0) {
      return res.status(400).json({ error: 'Amount must be greater than 0' });
    }
    const owner = await db.get('SELECT * FROM truck_owners WHERE id = ? AND is_active = 1', [id]);
    if (!owner) {
      return res.status(404).json({ error: 'Truck owner not found' });
    }
    const newBalance = parseFloat(owner.deposit_balance || 0) + addVal;
    await db.run('UPDATE truck_owners SET deposit_balance = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [newBalance, id]);
    const updated = await db.get('SELECT * FROM truck_owners WHERE id = ?', [id]);
    res.json({ message: 'Deposit added successfully', owner: updated });
  } catch (error) {
    console.error('Error adding deposit:', error);
    res.status(500).json({ error: 'Failed to add deposit' });
  }
});

// Deposit: deduct amount from owner's balance (admin/manual)
router.post('/truck-owners/:id/deposit/deduct', async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, receipt_id } = req.body;
    const db = getDB();
    const deductVal = parseFloat(amount);
    if (!deductVal || deductVal <= 0) {
      return res.status(400).json({ error: 'Amount must be greater than 0' });
    }
    const owner = await db.get('SELECT * FROM truck_owners WHERE id = ? AND is_active = 1', [id]);
    if (!owner) {
      return res.status(404).json({ error: 'Truck owner not found' });
    }
    const available = parseFloat(owner.deposit_balance || 0);
    if (available < deductVal) {
      return res.status(400).json({ error: 'Insufficient deposit balance' });
    }
    await db.run('UPDATE truck_owners SET deposit_balance = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [available - deductVal, id]);
    const updated = await db.get('SELECT * FROM truck_owners WHERE id = ?', [id]);
    res.json({ message: 'Deposit deducted successfully', owner: updated, receipt_id });
  } catch (error) {
    console.error('Error deducting deposit:', error);
    res.status(500).json({ error: 'Failed to deduct deposit' });
  }
});

router.put('/truck-owners/:id/deposit/set', async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;
    const db = getDB();
    const newVal = parseFloat(amount);
    if (isNaN(newVal) || newVal < 0) {
      return res.status(400).json({ error: 'Amount must be a non-negative number' });
    }
    const owner = await db.get('SELECT * FROM truck_owners WHERE id = ? AND is_active = 1', [id]);
    if (!owner) {
      return res.status(404).json({ error: 'Truck owner not found' });
    }
    await db.run('UPDATE truck_owners SET deposit_balance = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [newVal, id]);
    const updated = await db.get('SELECT * FROM truck_owners WHERE id = ?', [id]);
    res.json({ message: 'Deposit balance updated', owner: updated });
  } catch (error) {
    console.error('Error setting deposit balance:', error);
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
    const db = getDB();
    const users = await db.all(
      'SELECT id, username, full_name, role, is_active, created_at FROM users ORDER BY created_at DESC'
    );
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
    
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
    
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }
    
    const validRoles = ['admin', 'user'];
    if (role && !validRoles.includes(role)) {
      return res.status(400).json({ error: 'Invalid role. Must be "admin" or "user"' });
    }
    
    const db = getDB();
    
    // Check if username already exists
    const existingUser = await db.get('SELECT id FROM users WHERE username = ?', [username]);
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    
    const passwordHash = await bcrypt.hash(password, 10);
    
    const result = await db.run(
      `INSERT INTO users (username, password_hash, full_name, role) 
       VALUES (?, ?, ?, ?)`,
      [username, passwordHash, full_name || username, role || 'user']
    );
    
    res.json({ 
      message: 'User created successfully',
      id: result.lastID,
      username,
      full_name: full_name || username,
      role: role || 'user'
    });
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
    
    const db = getDB();
    
    // Check if user exists
    const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Prevent deactivating the last admin
    if (is_active === 0 && user.role === 'admin') {
      const adminCount = await db.get('SELECT COUNT(*) as count FROM users WHERE role = ? AND is_active = 1', ['admin']);
      if (adminCount.count <= 1) {
        return res.status(400).json({ error: 'Cannot deactivate the last admin user' });
      }
    }
    
    // Build dynamic update query
    const updates = [];
    const values = [];
    
    if (full_name !== undefined) {
      updates.push('full_name = ?');
      values.push(full_name);
    }
    if (role !== undefined) {
      updates.push('role = ?');
      values.push(role);
    }
    if (password !== undefined && password.length >= 6) {
      const passwordHash = await bcrypt.hash(password, 10);
      updates.push('password_hash = ?');
      values.push(passwordHash);
    }
    if (is_active !== undefined) {
      updates.push('is_active = ?');
      values.push(is_active);
    }
    
    if (updates.length === 0) {
      return res.status(400).json({ error: 'No valid updates provided' });
    }
    
    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(id);
    
    await db.run(
      `UPDATE users SET ${updates.join(', ')} WHERE id = ?`,
      values
    );
    
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
    
    const db = getDB();
    
    // Check if user exists
    const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Prevent deleting the last admin
    if (user.role === 'admin') {
      const adminCount = await db.get('SELECT COUNT(*) as count FROM users WHERE role = ? AND is_active = 1', ['admin']);
      if (adminCount.count <= 1) {
        return res.status(400).json({ error: 'Cannot delete the last admin user' });
      }
    }
    
    // Soft delete by setting is_active to 0
    await db.run('UPDATE users SET is_active = 0, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [id]);
    
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

export default router;
