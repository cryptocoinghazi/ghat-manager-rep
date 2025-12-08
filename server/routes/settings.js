import express from 'express';
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
    
    // Check if table exists
    const tableExists = await db.get(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='truck_owners'"
    );
    
    if (!tableExists) {
      return res.json([]); // Return empty array if table doesn't exist
    }
    
    const owners = await db.all(
      'SELECT * FROM truck_owners WHERE is_active = 1 ORDER BY name'
    );
    res.json(owners);
  } catch (error) {
    console.error('Error fetching truck owners:', error);
    res.status(500).json({ error: 'Failed to fetch truck owners' });
  }
});

// Create or update truck owner
router.post('/truck-owners', async (req, res) => {
  try {
    const { name, contact, address } = req.body;
    
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    
    const db = getDB();
    const result = await db.run(
      `INSERT OR REPLACE INTO truck_owners (name, contact, address, is_active) 
       VALUES (?, ?, ?, 1)`,
      [name, contact || null, address || null]
    );
    
    res.json({ 
      message: 'Truck owner saved successfully',
      id: result.lastID 
    });
  } catch (error) {
    console.error('Error saving truck owner:', error);
    res.status(500).json({ error: 'Failed to save truck owner' });
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

// Add truck owner route (POST) that was missing
router.post('/truck-owners', async (req, res) => {
  try {
    const { name, contact, address } = req.body;
    
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    
    const db = getDB();
    const result = await db.run(
      `INSERT INTO truck_owners (name, contact, address, is_active) 
       VALUES (?, ?, ?, 1)`,
      [name, contact || null, address || null]
    );
    
    res.json({ 
      message: 'Truck owner created successfully',
      id: result.lastID 
    });
  } catch (error) {
    console.error('Error creating truck owner:', error);
    res.status(500).json({ error: 'Failed to create truck owner' });
  }
});

export default router;