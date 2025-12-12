import express from 'express';
import { authenticate, requireRole, requireOwnerOrAdmin } from '../auth/authMiddleware.js';
import { Expenses, ExpenseCategories, sequelize } from '../models/index.js';
import { Op } from 'sequelize';

const router = express.Router();

const getExpenseOwner = async (req) => {
  const expense = await Expenses.findByPk(req.params.id);
  return expense ? expense.created_by : null;
};

// Get all expenses with optional filters
router.get('/', async (req, res) => {
  try {
    const { startDate, endDate, category, ghatLocation } = req.query;
    const where = {};
    if (req.user && req.user.role !== 'admin') where[Op.or] = [{ created_by: req.user.username }, { created_by: 'admin' }];
    if (startDate && endDate) where.date = { [Op.between]: [startDate, endDate] };
    if (category) where.category = category;
    if (ghatLocation) where.ghat_location = ghatLocation;
    const expenses = await Expenses.findAll({ where, order: [['date','DESC'], ['created_at','DESC']] });
    return res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get expense categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await ExpenseCategories.findAll({ order: [['name','ASC']] });
    return res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get expense summary/dashboard
router.get('/summary', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const firstDayOfMonth = new Date();
    firstDayOfMonth.setDate(1);
    const firstDayMonthStr = firstDayOfMonth.toISOString().split('T')[0];
    
    const [todayRows] = await sequelize.query('SELECT SUM(amount) as total FROM expenses WHERE date = ?', { replacements: [today] });
    const todayResult = todayRows[0] || {};
    const [monthRows] = await sequelize.query('SELECT SUM(amount) as total FROM expenses WHERE date >= ?', { replacements: [firstDayMonthStr] });
    const monthResult = monthRows[0] || {};
    const [categories] = await sequelize.query('SELECT category, SUM(amount) as total FROM expenses WHERE date >= ? GROUP BY category ORDER BY total DESC', { replacements: [firstDayMonthStr] });
    
    res.json({
      todayTotal: todayResult?.total || 0,
      monthTotal: monthResult?.total || 0,
      categoryMonthly: categories,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching summary:', error);
    res.status(500).json({ error: error.message });
  }
});

// Daily expense report - MUST be before /:id route
router.get('/reports/daily', async (req, res) => {
  try {
    const { date } = req.query;
    const targetDate = date || new Date().toISOString().split('T')[0];
    
    // Apply role-based visibility: non-admin users see their own + admin expenses
    let dailyWhere = 'date = ?';
    const dailyParams = [targetDate];
    if (req.user && req.user.role !== 'admin') {
      dailyWhere += ' AND (created_by = ? OR created_by = "admin")';
      dailyParams.push(req.user.username);
    }

    const [expenses] = await sequelize.query(`SELECT * FROM expenses WHERE ${dailyWhere} ORDER BY category, amount DESC`, { replacements: dailyParams });
    const [summary] = await sequelize.query(`SELECT category, COUNT(*) as count, SUM(amount) as total FROM expenses WHERE ${dailyWhere} GROUP BY category`, { replacements: dailyParams });
    
    const totalAmount = summary.reduce((sum, item) => sum + (item.total || 0), 0);
    
    res.json({
      date: targetDate,
      expenses,
      summary: {
        totalCount: expenses.length,
        totalAmount,
        categoryBreakdown: summary
      }
    });
  } catch (error) {
    console.error('Error fetching daily report:', error);
    res.status(500).json({ error: error.message });
  }
});

// Monthly expense report - MUST be before /:id route
router.get('/reports/monthly', async (req, res) => {
  try {
    const { year, month } = req.query;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    
    const targetYear = year || currentYear;
    const targetMonth = month || currentMonth;
    
    const startDate = `${targetYear}-${String(targetMonth).padStart(2, '0')}-01`;
    const endDate = `${targetYear}-${String(targetMonth).padStart(2, '0')}-31`;
    
    // Apply role-based visibility for monthly range
    let monthWhere = 'date BETWEEN ? AND ?';
    const monthParams = [startDate, endDate];
    if (req.user && req.user.role !== 'admin') {
      monthWhere += ' AND (created_by = ? OR created_by = \"admin\")';
      monthParams.push(req.user.username);
    }

    const [expenses] = await sequelize.query(`SELECT * FROM expenses WHERE ${monthWhere} ORDER BY date, category`, { replacements: monthParams });
    const [dailyTotals] = await sequelize.query(`SELECT date, COUNT(*) as count, SUM(amount) as total FROM expenses WHERE ${monthWhere} GROUP BY date ORDER BY date`, { replacements: monthParams });
    const [categoryTotals] = await sequelize.query(`SELECT category, SUM(amount) as total FROM expenses WHERE ${monthWhere} GROUP BY category ORDER BY total DESC`, { replacements: monthParams });
    
    const monthlyTotal = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    
    res.json({
      period: `${targetYear}-${String(targetMonth).padStart(2, '0')}`,
      expenses,
      summary: {
        monthlyTotal,
        totalExpenses: expenses.length,
        dailyTotals,
        categoryTotals,
        averageDaily: dailyTotals.length > 0 ? monthlyTotal / dailyTotals.length : 0,
        startDate,
        endDate
      }
    });
  } catch (error) {
    console.error('Error fetching monthly report:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get single expense - MUST be after all specific routes
router.get('/:id', async (req, res) => {
  try {
    const expense = await Expenses.findByPk(req.params.id);
    if (!expense) return res.status(404).json({ error: 'Expense not found' });
    return res.json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new expense
router.post('/', async (req, res) => {
  try {
    const { date, category, description, amount, payment_mode, receipt_number, vendor_name, ghat_location, approved_by, remarks } = req.body;
    const created_by = req.user ? req.user.username : null;
    const created = await Expenses.create({
      date: date || new Date().toISOString().split('T')[0],
      category,
      description,
      amount,
      payment_mode: payment_mode || 'CASH',
      receipt_number: receipt_number || null,
      vendor_name: vendor_name || null,
      ghat_location,
      approved_by: approved_by || null,
      remarks: remarks || null,
      created_by
    });
    return res.json({ id: created.id, message: 'Expense added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update expense - users can only update their own, admin can update all
router.put('/:id', requireOwnerOrAdmin(getExpenseOwner), async (req, res) => {
  try {
    const { date, category, description, amount, payment_mode, receipt_number, vendor_name, ghat_location, approved_by, remarks, status } = req.body;
    const exp = await Expenses.findByPk(req.params.id);
    if (!exp) return res.status(404).json({ error: 'Expense not found' });
    await exp.update({ date, category, description, amount, payment_mode, receipt_number, vendor_name, ghat_location, approved_by, remarks, status: status || 'APPROVED' });
    return res.json({ changes: 1, message: 'Expense updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete expense - only admin can delete
router.delete('/:id', requireRole(['admin']), async (req, res) => {
  try {
    const exp = await Expenses.findByPk(req.params.id);
    if (!exp) return res.status(404).json({ error: 'Expense not found' });
    await exp.destroy();
    return res.json({ changes: 1, message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
