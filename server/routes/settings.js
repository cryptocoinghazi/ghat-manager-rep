import express from 'express';
import bcrypt from 'bcrypt';
import { Op } from 'sequelize';
import { Settings, TruckOwners, DepositTransactions, sequelize, Users, Receipts, CreditPayments } from '../models/index.js';

const router = express.Router();

// Get all settings
router.get('/', async (req, res) => {
  try {
    const rows = await Settings.findAll({ order: [['category', 'ASC'], ['key', 'ASC']] });
    const result = { categorized: {}, flat: {} };
    rows.forEach(setting => {
      const s = setting.toJSON();
      if (!result.categorized[s.category]) result.categorized[s.category] = {};
      result.categorized[s.category][s.key] = { value: s.value, id: s.key, updated_at: s.updated_at };
      result.flat[s.key] = s.value;
    });
    return res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

// Get settings by category
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const rows = await Settings.findAll({ where: { category }, order: [['key', 'ASC']] });
    const result = {};
    rows.forEach(s => { const r = s.toJSON(); result[r.key] = { value: r.value, id: r.key, updated_at: r.updated_at }; });
    return res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch category settings' });
  }
});

// Update single setting
router.put('/:key', async (req, res) => {
  try {
    const { key } = req.params;
    const { value } = req.body;
    if (value === undefined) return res.status(400).json({ error: 'Value is required' });
    const existing = await Settings.findByPk(key);
    if (!existing) return res.status(404).json({ error: 'Setting not found' });
    await existing.update({ value, updated_at: new Date() });
    return res.json({ message: 'Setting updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update setting' });
  }
});

// Update multiple settings (upsert missing keys)
router.post('/batch-update', async (req, res) => {
  try {
    const updates = req.body;
    if (!updates || typeof updates !== 'object') return res.status(400).json({ error: 'Invalid updates format' });
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
      include_barcode: 'receipt',
      auto_backup_enabled: 'backup',
      auto_backup_time: 'backup',
      auto_backup_last_run: 'backup'
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
  } catch (error) {
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

// Get truck owners with error handling for missing table
router.get('/truck-owners', async (req, res) => {
  try {
    const { is_partner } = req.query;
    const where = { is_active: 1 };
    if (is_partner !== undefined) where.is_partner = (is_partner === 'true' || is_partner === '1') ? 1 : 0;
    const owners = await TruckOwners.findAll({ where, order: [['name','ASC']] });
    return res.json(owners);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch truck owners' });
  }
});

// Get single truck owner by name
router.get('/truck-owners/by-name/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const owner = await TruckOwners.findOne({ where: { name, is_active: 1 } });
    return res.json(owner || null);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch truck owner' });
  }
});

// Create or update truck owner
router.post('/truck-owners', async (req, res) => {
  try {
    const { name, contact, address, phone, vehicle_number, is_partner, partner_rate } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });
    if (!vehicle_number) return res.status(400).json({ error: 'Vehicle number is required' });
    const existing = await TruckOwners.findOne({ where: { name } });
    if (existing) {
      await existing.update({ phone: phone || contact || null, address: address || null, vehicle_number: vehicle_number || null, is_partner: is_partner ? 1 : 0, partner_rate: partner_rate || null });
      return res.json({ message: 'Truck owner updated successfully', owner: existing });
    } else {
      const created = await TruckOwners.create({ name, phone: phone || contact || null, address: address || null, vehicle_number: vehicle_number || null, is_partner: is_partner ? 1 : 0, partner_rate: partner_rate || null, is_active: 1 });
      return res.json({ message: 'Truck owner created successfully', owner: created });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to save truck owner' });
  }
});

// Deposit: add amount to owner's balance (admin)
router.post('/truck-owners/:id/deposit/add', async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;
    const addVal = parseFloat(amount);
    if (!addVal || addVal <= 0) return res.status(400).json({ error: 'Amount must be greater than 0' });
    const owner = await TruckOwners.findOne({ where: { id, is_active: 1 } });
    if (!owner) return res.status(404).json({ error: 'Truck owner not found' });
    const prev = parseFloat(owner.deposit_balance || 0);
    const newBalance = prev + addVal;
    await owner.update({ deposit_balance: newBalance });
    await DepositTransactions.create({ owner_id: owner.id, type: 'add', amount: addVal, previous_balance: prev, new_balance: newBalance, notes: 'Manual deposit add' });
    return res.json({ message: 'Deposit added successfully', owner });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add deposit' });
  }
});

// Deposit: deduct amount from owner's balance (admin/manual)
router.post('/truck-owners/:id/deposit/deduct', async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, receipt_id } = req.body;
    const deductVal = parseFloat(amount);
    if (!deductVal || deductVal <= 0) return res.status(400).json({ error: 'Amount must be greater than 0' });
    const owner = await TruckOwners.findOne({ where: { id, is_active: 1 } });
    if (!owner) return res.status(404).json({ error: 'Truck owner not found' });
    const available = parseFloat(owner.deposit_balance || 0);
    if (available < deductVal) return res.status(400).json({ error: 'Insufficient deposit balance' });
    await owner.update({ deposit_balance: available - deductVal });
    await DepositTransactions.create({ owner_id: owner.id, type: 'deduct', amount: deductVal, previous_balance: available, new_balance: available - deductVal, receipt_no: receipt_id || null, notes: 'Manual deposit deduct' });
    return res.json({ message: 'Deposit deducted successfully', owner, receipt_id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to deduct deposit' });
  }
});

router.put('/truck-owners/:id/deposit/set', async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;
    const newVal = parseFloat(amount);
    if (isNaN(newVal) || newVal < 0) {
      return res.status(400).json({ error: 'Amount must be a non-negative number' });
    }
    const owner = await TruckOwners.findOne({ where: { id, is_active: 1 } });
    if (!owner) return res.status(404).json({ error: 'Truck owner not found' });
    const prevSet = parseFloat(owner.deposit_balance || 0);
    await owner.update({ deposit_balance: newVal });
    await DepositTransactions.create({ owner_id: owner.id, type: 'set', amount: newVal, previous_balance: prevSet, new_balance: newVal, notes: 'Set balance' });
    return res.json({ message: 'Deposit balance updated', owner });
  } catch (error) {
    res.status(500).json({ error: 'Failed to set deposit balance' });
  }
});

// Update truck owner by ID
router.put('/truck-owners/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, address, vehicle_number, is_partner, partner_rate } = req.body;
    const owner = await TruckOwners.findByPk(id);
    if (!owner) return res.status(404).json({ error: 'Truck owner not found' });
    await owner.update({
      name: name ?? owner.name,
      phone: phone || null,
      address: address || null,
      vehicle_number: vehicle_number || null,
      is_partner: is_partner ? 1 : 0,
      partner_rate: partner_rate || null
    });
    res.json({ message: 'Truck owner updated successfully', owner });
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
    const owner = await TruckOwners.findByPk(id);
    if (!owner) return res.status(404).json({ error: 'Truck owner not found' });
    await owner.update({ is_partner: is_partner ? 1 : 0, partner_rate: partner_rate || null });
    res.json({ message: `Truck owner ${is_partner ? 'marked as partner' : 'marked as regular'}`, owner });
  } catch (error) {
    console.error('Error toggling partner status:', error);
    res.status(500).json({ error: 'Failed to toggle partner status' });
  }
});

// Delete truck owner
router.delete('/truck-owners/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await TruckOwners.findByPk(id);
    if (!owner) return res.status(404).json({ error: 'Truck owner not found' });
    await owner.destroy();
    res.json({ message: 'Truck owner deleted successfully' });
  } catch (error) {
    console.error('Error deleting truck owner:', error);
    res.status(500).json({ error: 'Failed to delete truck owner' });
  }
});

// Get partner stats
router.get('/partner-stats', async (req, res) => {
  try {
    const partnerCount = await TruckOwners.count({ where: { is_partner: 1, is_active: 1 } });
    const regularCount = await TruckOwners.count({ where: { is_partner: 0, is_active: 1 } });
    const [partnerSummary] = await sequelize.query(`SELECT COUNT(*) as transactions, SUM(total_amount) as total_amount, SUM(brass_qty) as total_brass FROM receipts WHERE owner_type = 'partner' AND is_active = 1`);
    const [regularSummary] = await sequelize.query(`SELECT COUNT(*) as transactions, SUM(total_amount) as total_amount, SUM(brass_qty) as total_brass FROM receipts WHERE owner_type = 'regular' AND is_active = 1`);
    const p = partnerSummary?.[0] || {};
    const r = regularSummary?.[0] || {};
    res.json({
      partners: {
        count: partnerCount || 0,
        transactions: p.transactions || 0,
        totalAmount: p.total_amount || 0,
        totalBrass: p.total_brass || 0
      },
      regular: {
        count: regularCount || 0,
        transactions: r.transactions || 0,
        totalAmount: r.total_amount || 0,
        totalBrass: r.total_brass || 0
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
    const backupData = {
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      data: {}
    };
    const tables = {
      receipts: Receipts,
      truck_owners: TruckOwners,
      settings: Settings,
      credit_payments: CreditPayments,
      users: Users,
      deposit_transactions: DepositTransactions
    };
    for (const [name, Model] of Object.entries(tables)) {
      try {
        const rows = await Model.findAll();
        backupData.data[name] = rows.map(r => r.toJSON());
      } catch (err) {
        console.warn(`Error backing up table ${name}:`, err);
        backupData.data[name] = [];
      }
    }
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
    const tables = {
      receipts: Receipts,
      truck_owners: TruckOwners,
      settings: Settings,
      credit_payments: CreditPayments,
      users: Users,
      deposit_transactions: DepositTransactions
    };
    const t = await sequelize.transaction();
    try {
      for (const [name, Model] of Object.entries(tables)) {
        if (!backupData.data[name]) continue;
        await Model.destroy({ where: {}, truncate: true, transaction: t });
        const rows = backupData.data[name];
        if (rows.length > 0) {
          await Model.bulkCreate(rows, { transaction: t, ignoreDuplicates: true });
        }
      }
      await t.commit();
      res.json({ message: 'Backup restored successfully' });
    } catch (error) {
      await t.rollback();
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
    const users = await Users.findAll({ order: [['id', 'DESC']], attributes: ['id','username','full_name','role','is_active'] });
    return res.json(users);
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
    const passwordHash = await bcrypt.hash(password, 10);
    const exists = await Users.findOne({ where: { username } });
    if (exists) return res.status(400).json({ error: 'Username already exists' });
    const created = await Users.create({ username, password_hash: passwordHash, full_name: full_name || username, role: role || 'user', is_active: 1 });
    return res.json({ message: 'User created successfully', id: created.id, username, full_name: created.full_name, role: created.role });
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
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Delete user (soft delete)
router.delete('/users/:id', checkAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.role === 'admin') {
      const adminCount = await Users.count({ where: { role: 'admin', is_active: 1 } });
      if (adminCount <= 1) return res.status(400).json({ error: 'Cannot delete the last admin user' });
    }
    await user.update({ is_active: 0 });
    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

export default router;
