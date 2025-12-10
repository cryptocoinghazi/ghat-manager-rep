import express from 'express';
import { getDB } from '../db.js';

const router = express.Router();

// Get all expenses with optional filters
router.get('/', async (req, res) => {
  try {
    const db = getDB();
    const { startDate, endDate, category, ghatLocation } = req.query;
    
    let query = 'SELECT * FROM expenses WHERE 1=1';
    const params = [];
    
    if (startDate && endDate) {
      query += ' AND date BETWEEN ? AND ?';
      params.push(startDate, endDate);
    }
    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }
    if (ghatLocation) {
      query += ' AND ghat_location = ?';
      params.push(ghatLocation);
    }
    
    query += ' ORDER BY date DESC, created_at DESC';
    
    const expenses = await db.all(query, params);
    res.json(expenses);
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get expense categories
router.get('/categories', async (req, res) => {
  try {
    const db = getDB();
    const categories = await db.all('SELECT * FROM expense_categories ORDER BY name');
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get expense summary/dashboard
router.get('/summary', async (req, res) => {
  try {
    const db = getDB();
    const today = new Date().toISOString().split('T')[0];
    const firstDayOfMonth = new Date();
    firstDayOfMonth.setDate(1);
    const firstDayMonthStr = firstDayOfMonth.toISOString().split('T')[0];
    
    const todayResult = await db.get(
      'SELECT SUM(amount) as total FROM expenses WHERE date = ?',
      [today]
    );
    
    const monthResult = await db.get(
      'SELECT SUM(amount) as total FROM expenses WHERE date >= ?',
      [firstDayMonthStr]
    );
    
    const categories = await db.all(
      `SELECT category, SUM(amount) as total 
       FROM expenses WHERE date >= ? 
       GROUP BY category ORDER BY total DESC`,
      [firstDayMonthStr]
    );
    
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

// Get single expense
router.get('/:id', async (req, res) => {
  try {
    const db = getDB();
    const expense = await db.get('SELECT * FROM expenses WHERE id = ?', [req.params.id]);
    
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }
    res.json(expense);
  } catch (error) {
    console.error('Error fetching expense:', error);
    res.status(500).json({ error: error.message });
  }
});

// Create new expense
router.post('/', async (req, res) => {
  try {
    const db = getDB();
    const {
      date, category, description, amount, payment_mode,
      receipt_number, vendor_name, ghat_location, approved_by, remarks
    } = req.body;
    
    const sql = `
      INSERT INTO expenses 
      (date, category, description, amount, payment_mode, receipt_number, 
       vendor_name, ghat_location, approved_by, remarks)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const params = [
      date || new Date().toISOString().split('T')[0],
      category, description, amount, payment_mode || 'CASH',
      receipt_number || null, vendor_name || null, ghat_location, 
      approved_by || null, remarks || null
    ];
    
    const result = await db.run(sql, params);
    
    res.json({
      id: result.lastID,
      message: 'Expense added successfully'
    });
  } catch (error) {
    console.error('Error creating expense:', error);
    res.status(400).json({ error: error.message });
  }
});

// Update expense
router.put('/:id', async (req, res) => {
  try {
    const db = getDB();
    const {
      date, category, description, amount, payment_mode,
      receipt_number, vendor_name, ghat_location, approved_by, remarks, status
    } = req.body;
    
    const sql = `
      UPDATE expenses SET 
        date = ?, category = ?, description = ?, amount = ?,
        payment_mode = ?, receipt_number = ?, vendor_name = ?,
        ghat_location = ?, approved_by = ?, remarks = ?, status = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;
    
    const params = [
      date, category, description, amount, payment_mode,
      receipt_number, vendor_name, ghat_location, approved_by, remarks, 
      status || 'APPROVED', req.params.id
    ];
    
    const result = await db.run(sql, params);
    
    res.json({
      changes: result.changes,
      message: 'Expense updated successfully'
    });
  } catch (error) {
    console.error('Error updating expense:', error);
    res.status(400).json({ error: error.message });
  }
});

// Delete expense
router.delete('/:id', async (req, res) => {
  try {
    const db = getDB();
    const result = await db.run('DELETE FROM expenses WHERE id = ?', [req.params.id]);
    
    res.json({
      changes: result.changes,
      message: 'Expense deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting expense:', error);
    res.status(500).json({ error: error.message });
  }
});

// Daily expense report
router.get('/reports/daily', async (req, res) => {
  try {
    const db = getDB();
    const { date } = req.query;
    const targetDate = date || new Date().toISOString().split('T')[0];
    
    const expenses = await db.all(
      `SELECT * FROM expenses WHERE date = ? ORDER BY category, amount DESC`,
      [targetDate]
    );
    
    const summary = await db.all(
      `SELECT category, COUNT(*) as count, SUM(amount) as total
       FROM expenses WHERE date = ? GROUP BY category`,
      [targetDate]
    );
    
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

// Monthly expense report
router.get('/reports/monthly', async (req, res) => {
  try {
    const db = getDB();
    const { year, month } = req.query;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    
    const targetYear = year || currentYear;
    const targetMonth = month || currentMonth;
    
    const startDate = `${targetYear}-${String(targetMonth).padStart(2, '0')}-01`;
    const endDate = `${targetYear}-${String(targetMonth).padStart(2, '0')}-31`;
    
    const expenses = await db.all(
      `SELECT * FROM expenses WHERE date BETWEEN ? AND ? ORDER BY date, category`,
      [startDate, endDate]
    );
    
    const dailyTotals = await db.all(
      `SELECT date, COUNT(*) as count, SUM(amount) as total
       FROM expenses WHERE date BETWEEN ? AND ? GROUP BY date ORDER BY date`,
      [startDate, endDate]
    );
    
    const categoryTotals = await db.all(
      `SELECT category, SUM(amount) as total
       FROM expenses WHERE date BETWEEN ? AND ? GROUP BY category ORDER BY total DESC`,
      [startDate, endDate]
    );
    
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

export default router;
