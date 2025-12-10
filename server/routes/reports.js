import express from 'express';
import { getDB } from '../db.js';

const router = express.Router();

// Get credit report
router.get('/credit-report', async (req, res) => {
  try {
    const db = getDB();
    
    const creditReport = await db.all(`
      SELECT 
        truck_owner,
        COUNT(*) as pending_count,
        SUM(credit_amount) as total_credit,
        MIN(date_time) as oldest_credit,
        MAX(date_time) as latest_credit
      FROM receipts 
      WHERE credit_amount > 0
        AND is_active = 1
      GROUP BY truck_owner
      HAVING total_credit > 0
      ORDER BY total_credit DESC
    `);
    
    // Get credit aging
    const creditAging = await db.all(`
      SELECT 
        truck_owner,
        CASE 
          WHEN julianday('now') - julianday(date_time) <= 7 THEN '0-7 days'
          WHEN julianday('now') - julianday(date_time) <= 30 THEN '8-30 days'
          ELSE '30+ days'
        END as aging_bucket,
        SUM(credit_amount) as amount
      FROM receipts 
      WHERE credit_amount > 0
        AND is_active = 1
      GROUP BY truck_owner, aging_bucket
      ORDER BY truck_owner, aging_bucket
    `);
    
    res.json({
      creditReport,
      creditAging,
      totalCredit: creditReport.reduce((sum, item) => sum + (item.total_credit || 0), 0),
      totalCustomers: creditReport.length
    });
  } catch (error) {
    console.error('Error generating credit report:', error);
    res.status(500).json({ error: 'Failed to generate credit report' });
  }
});

// Get monthly report
router.get('/monthly-report', async (req, res) => {
  try {
    const db = getDB();
    const { year, month } = req.query;
    
    // Default to current month if not provided
    const currentDate = new Date();
    const yearMonth = year && month ? `${year}-${month.padStart(2, '0')}` : 
                     `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
    
    const dailyData = await db.all(`
      SELECT 
        date(date_time) as day,
        COUNT(*) as transactions,
        SUM(total_amount) as total_amount,
        SUM(cash_paid) as cash_collected,
        SUM(credit_amount) as credit_given,
        SUM(brass_qty) as total_brass
      FROM receipts 
      WHERE strftime('%Y-%m', date_time) = ?
        AND is_active = 1
      GROUP BY date(date_time)
      ORDER BY day
    `, [yearMonth]);
    
    const monthlySummary = await db.get(`
      SELECT 
        COUNT(*) as total_transactions,
        SUM(total_amount) as total_amount,
        SUM(cash_paid) as total_cash,
        SUM(credit_amount) as total_credit,
        SUM(brass_qty) as total_brass,
        AVG(total_amount) as avg_transaction
      FROM receipts 
      WHERE strftime('%Y-%m', date_time) = ?
        AND is_active = 1
    `, [yearMonth]);
    
    // Get payment distribution
    const paymentDistribution = await db.all(`
      SELECT 
        payment_status,
        COUNT(*) as count,
        SUM(total_amount) as amount
      FROM receipts 
      WHERE strftime('%Y-%m', date_time) = ?
        AND is_active = 1
      GROUP BY payment_status
    `, [yearMonth]);
    
    // Get top 5 customers for the month
    const topCustomers = await db.all(`
      SELECT 
        truck_owner,
        COUNT(*) as transactions,
        SUM(total_amount) as total_amount,
        SUM(cash_paid) as cash_paid,
        SUM(credit_amount) as credit_amount
      FROM receipts 
      WHERE strftime('%Y-%m', date_time) = ?
        AND is_active = 1
      GROUP BY truck_owner
      ORDER BY total_amount DESC
      LIMIT 5
    `, [yearMonth]);
    
    res.json({
      month: yearMonth,
      dailyData,
      summary: monthlySummary || {
        total_transactions: 0,
        total_amount: 0,
        total_cash: 0,
        total_credit: 0,
        total_brass: 0,
        avg_transaction: 0
      },
      paymentDistribution,
      topCustomers
    });
  } catch (error) {
    console.error('Error generating monthly report:', error);
    res.status(500).json({ error: 'Failed to generate monthly report' });
  }
});

// Get financial summary
router.get('/financial-summary', async (req, res) => {
  try {
    const db = getDB();
    const { startDate, endDate } = req.query;
    
    // Default to last 30 days if no dates provided
    const defaultEndDate = new Date().toISOString().split('T')[0];
    const defaultStartDate = new Date();
    defaultStartDate.setDate(defaultStartDate.getDate() - 30);
    const formattedDefaultStartDate = defaultStartDate.toISOString().split('T')[0];
    
    const start = startDate || formattedDefaultStartDate;
    const end = endDate || defaultEndDate;
    
    // Get overall summary for the period
    const summary = await db.get(`
      SELECT 
        COUNT(*) as total_transactions,
        SUM(total_amount) as total_amount,
        SUM(cash_paid) as total_cash,
        SUM(credit_amount) as total_credit,
        SUM(brass_qty) as total_brass,
        AVG(total_amount) as avg_transaction,
        MIN(date_time) as period_start,
        MAX(date_time) as period_end
      FROM receipts 
      WHERE date(date_time) BETWEEN date(?) AND date(?)
        AND is_active = 1
    `, [start, end]);
    
    // Get daily trends
    const dailyTrends = await db.all(`
      SELECT 
        date(date_time) as date,
        COUNT(*) as transactions,
        SUM(total_amount) as total_amount,
        SUM(cash_paid) as cash_collected,
        SUM(credit_amount) as credit_given
      FROM receipts 
      WHERE date(date_time) BETWEEN date(?) AND date(?)
        AND is_active = 1
      GROUP BY date(date_time)
      ORDER BY date
    `, [start, end]);
    
    // Get customer-wise summary
    const customerSummary = await db.all(`
      SELECT 
        truck_owner,
        COUNT(*) as transactions,
        SUM(total_amount) as total_amount,
        SUM(cash_paid) as cash_paid,
        SUM(credit_amount) as credit_amount
      FROM receipts 
      WHERE date(date_time) BETWEEN date(?) AND date(?)
        AND is_active = 1
      GROUP BY truck_owner
      ORDER BY total_amount DESC
      LIMIT 10
    `, [start, end]);
    
    // Get vehicle summary
    const vehicleSummary = await db.all(`
      SELECT 
        vehicle_number,
        COUNT(*) as trips,
        SUM(total_amount) as total_amount
      FROM receipts 
      WHERE date(date_time) BETWEEN date(?) AND date(?)
        AND is_active = 1
      GROUP BY vehicle_number
      ORDER BY trips DESC
      LIMIT 10
    `, [start, end]);
    
    // Get payment method trends
    const paymentTrends = await db.all(`
      SELECT 
        payment_status,
        COUNT(*) as count,
        SUM(total_amount) as amount,
        (COUNT(*) * 100.0 / (SELECT COUNT(*) FROM receipts WHERE date(date_time) BETWEEN date(?) AND date(?) AND is_active = 1)) as percentage
      FROM receipts 
      WHERE date(date_time) BETWEEN date(?) AND date(?)
        AND is_active = 1
      GROUP BY payment_status
    `, [start, end, start, end]);
    
    res.json({
      period: { startDate: start, endDate: end },
      summary: summary || {
        total_transactions: 0,
        total_amount: 0,
        total_cash: 0,
        total_credit: 0,
        total_brass: 0,
        avg_transaction: 0
      },
      dailyTrends,
      customerSummary,
      vehicleSummary,
      paymentTrends
    });
  } catch (error) {
    console.error('Error generating financial summary:', error);
    res.status(500).json({ error: 'Failed to generate financial summary' });
  }
});

// Get client report
router.get('/client-report', async (req, res) => {
  try {
    const db = getDB();
    const { startDate, endDate } = req.query;
    
    // Default to all time if no dates provided
    const start = startDate || '2024-01-01';
    const end = endDate || new Date().toISOString().split('T')[0];
    
    // Get client summary
    const clientSummary = await db.all(`
      SELECT 
        truck_owner,
        COUNT(*) as total_transactions,
        SUM(brass_qty) as total_brass,
        SUM(total_amount) as total_amount,
        SUM(cash_paid) as total_cash,
        SUM(credit_amount) as total_credit,
        MIN(date_time) as first_transaction,
        MAX(date_time) as last_transaction,
        ROUND(AVG(total_amount), 2) as avg_transaction_value
      FROM receipts 
      WHERE date(date_time) BETWEEN date(?) AND date(?)
        AND is_active = 1
      GROUP BY truck_owner
      ORDER BY total_amount DESC
    `, [start, end]);
    
    // Get client payment status summary
    const clientPaymentStatus = await db.all(`
      SELECT 
        truck_owner,
        payment_status,
        COUNT(*) as count,
        SUM(total_amount) as amount
      FROM receipts 
      WHERE date(date_time) BETWEEN date(?) AND date(?)
        AND is_active = 1
      GROUP BY truck_owner, payment_status
    `, [start, end]);
    
    // Get recent transactions for each client (latest 5)
    const recentTransactions = await db.all(`
      SELECT 
        r1.*
      FROM receipts r1
      WHERE date(r1.date_time) BETWEEN date(?) AND date(?)
        AND r1.is_active = 1
        AND (
          SELECT COUNT(*) 
          FROM receipts r2 
          WHERE r2.truck_owner = r1.truck_owner 
            AND date(r2.date_time) BETWEEN date(?) AND date(?)
            AND r2.is_active = 1
            AND r2.date_time >= r1.date_time
        ) <= 5
      ORDER BY r1.truck_owner, r1.date_time DESC
    `, [start, end, start, end]);
    
    res.json({
      period: { startDate: start, endDate: end },
      clientSummary,
      clientPaymentStatus,
      recentTransactions: recentTransactions || [],
      totalClients: clientSummary.length
    });
  } catch (error) {
    console.error('Error generating client report:', error);
    res.status(500).json({ error: 'Failed to generate client report' });
  }
});

// Get daily summary (existing route - enhanced)
router.get('/daily-summary', async (req, res) => {
  try {
    const db = getDB();
    const { date } = req.query;
    
    // Default to today if no date provided
    const targetDate = date || new Date().toISOString().split('T')[0];
    
    // Get daily totals
    const summary = await db.get(`
      SELECT 
        COUNT(*) as total_transactions,
        SUM(total_amount) as total_amount,
        SUM(cash_paid) as total_cash,
        SUM(credit_amount) as total_credit,
        SUM(brass_qty) as total_brass
      FROM receipts 
      WHERE date(date_time) = date(?)
        AND is_active = 1
    `, [targetDate]);
    
    // Get hourly distribution
    const hourly = await db.all(`
      SELECT 
        strftime('%H', date_time) as hour,
        COUNT(*) as transactions,
        SUM(total_amount) as amount
      FROM receipts 
      WHERE date(date_time) = date(?)
        AND is_active = 1
      GROUP BY strftime('%H', date_time)
      ORDER BY hour
    `, [targetDate]);
    
    // Get top customers of the day
    const topCustomers = await db.all(`
      SELECT 
        truck_owner,
        COUNT(*) as transactions,
        SUM(total_amount) as total_amount,
        SUM(cash_paid) as cash_paid,
        SUM(credit_amount) as credit_amount
      FROM receipts 
      WHERE date(date_time) = date(?)
        AND is_active = 1
      GROUP BY truck_owner
      ORDER BY total_amount DESC
      LIMIT 10
    `, [targetDate]);
    
    // Get payment method distribution
    const paymentDistribution = await db.all(`
      SELECT 
        payment_status,
        COUNT(*) as count,
        SUM(total_amount) as amount
      FROM receipts 
      WHERE date(date_time) = date(?)
        AND is_active = 1
      GROUP BY payment_status
    `, [targetDate]);
    
    // Get recent transactions for the day
    const recentTransactions = await db.all(`
      SELECT 
        receipt_no,
        truck_owner,
        vehicle_number,
        date_time,
        brass_qty,
        total_amount,
        cash_paid,
        credit_amount,
        payment_status
      FROM receipts 
      WHERE date(date_time) = date(?)
        AND is_active = 1
      ORDER BY date_time DESC
      LIMIT 20
    `, [targetDate]);
    
    res.json({
      date: targetDate,
      summary: summary || {
        total_transactions: 0,
        total_amount: 0,
        total_cash: 0,
        total_credit: 0,
        total_brass: 0
      },
      hourly,
      topCustomers,
      paymentDistribution,
      recentTransactions
    });
  } catch (error) {
    console.error('Error generating daily summary:', error);
    res.status(500).json({ error: 'Failed to generate daily summary' });
  }
});

// Export credit report to CSV
router.get('/export/credit-csv', async (req, res) => {
  try {
    const db = getDB();
    
    const creditReport = await db.all(`
      SELECT 
        truck_owner as "Customer Name",
        COUNT(*) as "Pending Receipts",
        SUM(credit_amount) as "Total Credit",
        MIN(date_time) as "Oldest Credit Date",
        MAX(date_time) as "Latest Credit Date"
      FROM receipts 
      WHERE credit_amount > 0
        AND is_active = 1
      GROUP BY truck_owner
      HAVING SUM(credit_amount) > 0
      ORDER BY SUM(credit_amount) DESC
    `);
    
    // Convert to CSV
    const headers = ['Customer Name', 'Pending Receipts', 'Total Credit (₹)', 'Oldest Credit Date', 'Latest Credit Date'];
    const csvData = [
      headers.join(','),
      ...creditReport.map(item => [
        `"${item['Customer Name']}"`,
        item['Pending Receipts'],
        item['Total Credit'],
        new Date(item['Oldest Credit Date']).toLocaleDateString('en-IN'),
        new Date(item['Latest Credit Date']).toLocaleDateString('en-IN')
      ].join(','))
    ].join('\n');
    
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=credit-report-${new Date().toISOString().split('T')[0]}.csv`);
    res.send(csvData);
  } catch (error) {
    console.error('Error exporting credit CSV:', error);
    res.status(500).json({ error: 'Failed to export credit report' });
  }
});

// Export monthly report to CSV
router.get('/export/monthly-csv', async (req, res) => {
  try {
    const db = getDB();
    const { month } = req.query;
    
    const currentDate = new Date();
    const yearMonth = month || `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
    
    const monthlyData = await db.all(`
      SELECT 
        date(date_time) as "Date",
        COUNT(*) as "Transactions",
        SUM(total_amount) as "Total Amount (₹)",
        SUM(cash_paid) as "Cash Collected (₹)",
        SUM(credit_amount) as "Credit Given (₹)",
        SUM(brass_qty) as "Total Brass"
      FROM receipts 
      WHERE strftime('%Y-%m', date_time) = ?
        AND is_active = 1
      GROUP BY date(date_time)
      ORDER BY date(date_time)
    `, [yearMonth]);
    
    // Get monthly summary
    const monthlySummary = await db.get(`
      SELECT 
        COUNT(*) as "Total Transactions",
        SUM(total_amount) as "Total Revenue (₹)",
        SUM(cash_paid) as "Total Cash (₹)",
        SUM(credit_amount) as "Total Credit (₹)",
        SUM(brass_qty) as "Total Brass",
        AVG(total_amount) as "Average Transaction (₹)"
      FROM receipts 
      WHERE strftime('%Y-%m', date_time) = ?
        AND is_active = 1
    `, [yearMonth]);
    
    // Create CSV with summary and daily data
    const summaryHeaders = ['Metric', 'Value'];
    const summaryRows = [
      ['Month', yearMonth],
      ['Total Transactions', monthlySummary?.['Total Transactions'] || 0],
      ['Total Revenue (₹)', monthlySummary?.['Total Revenue (₹)'] || 0],
      ['Total Cash (₹)', monthlySummary?.['Total Cash (₹)'] || 0],
      ['Total Credit (₹)', monthlySummary?.['Total Credit (₹)'] || 0],
      ['Total Brass', monthlySummary?.['Total Brass'] || 0],
      ['Average Transaction (₹)', monthlySummary?.['Average Transaction (₹)'] || 0]
    ];
    
    const csvData = [
      'MONTHLY SUMMARY',
      summaryHeaders.join(','),
      ...summaryRows.map(row => row.join(',')),
      '',
      'DAILY BREAKDOWN',
      Object.keys(monthlyData[0] || {}).join(','),
      ...monthlyData.map(item => Object.values(item).join(','))
    ].join('\n');
    
    const monthName = new Date(yearMonth + '-01').toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=monthly-report-${monthName.replace(/\s+/g, '-')}.csv`);
    res.send(csvData);
  } catch (error) {
    console.error('Error exporting monthly CSV:', error);
    res.status(500).json({ error: 'Failed to export monthly report' });
  }
});

// Export financial summary to CSV
router.get('/export/financial-csv', async (req, res) => {
  try {
    const db = getDB();
    const { startDate, endDate } = req.query;
    
    const start = startDate || new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0];
    const end = endDate || new Date().toISOString().split('T')[0];
    
    const dailyTrends = await db.all(`
      SELECT 
        date(date_time) as "Date",
        COUNT(*) as "Transactions",
        SUM(total_amount) as "Total Amount (₹)",
        SUM(cash_paid) as "Cash Collected (₹)",
        SUM(credit_amount) as "Credit Given (₹)"
      FROM receipts 
      WHERE date(date_time) BETWEEN date(?) AND date(?)
        AND is_active = 1
      GROUP BY date(date_time)
      ORDER BY date(date_time)
    `, [start, end]);
    
    const csvData = [
      'FINANCIAL SUMMARY',
      `Period: ${start} to ${end}`,
      '',
      'DAILY TRENDS',
      Object.keys(dailyTrends[0] || {}).join(','),
      ...dailyTrends.map(item => Object.values(item).join(','))
    ].join('\n');
    
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=financial-report-${start}-to-${end}.csv`);
    res.send(csvData);
  } catch (error) {
    console.error('Error exporting financial CSV:', error);
    res.status(500).json({ error: 'Failed to export financial report' });
  }
});

// Get expense summary
router.get('/expense-summary', async (req, res) => {
  try {
    const db = getDB();
    const { startDate, endDate } = req.query;
    
    const defaultEndDate = new Date().toISOString().split('T')[0];
    const defaultStartDate = new Date();
    defaultStartDate.setDate(defaultStartDate.getDate() - 30);
    const formattedDefaultStartDate = defaultStartDate.toISOString().split('T')[0];
    
    const start = startDate || formattedDefaultStartDate;
    const end = endDate || defaultEndDate;
    
    const totalExpenses = await db.get(`
      SELECT 
        COUNT(*) as total_count,
        SUM(amount) as total_amount
      FROM expenses 
      WHERE date BETWEEN ? AND ?
    `, [start, end]);
    
    const categoryBreakdown = await db.all(`
      SELECT 
        category,
        COUNT(*) as count,
        SUM(amount) as total,
        ROUND(SUM(amount) * 100.0 / (SELECT SUM(amount) FROM expenses WHERE date BETWEEN ? AND ?), 2) as percentage
      FROM expenses 
      WHERE date BETWEEN ? AND ?
      GROUP BY category
      ORDER BY total DESC
    `, [start, end, start, end]);
    
    const dailyTotals = await db.all(`
      SELECT 
        date,
        COUNT(*) as count,
        SUM(amount) as total
      FROM expenses 
      WHERE date BETWEEN ? AND ?
      GROUP BY date
      ORDER BY date DESC
    `, [start, end]);
    
    res.json({
      period: { startDate: start, endDate: end },
      summary: {
        totalCount: totalExpenses?.total_count || 0,
        totalAmount: totalExpenses?.total_amount || 0
      },
      categoryBreakdown,
      dailyTotals
    });
  } catch (error) {
    console.error('Error generating expense summary:', error);
    res.status(500).json({ error: 'Failed to generate expense summary' });
  }
});

// Get daily expense report
router.get('/daily-expense-report', async (req, res) => {
  try {
    const db = getDB();
    const { date } = req.query;
    const targetDate = date || new Date().toISOString().split('T')[0];
    
    const expenses = await db.all(`
      SELECT * FROM expenses 
      WHERE date = ? 
      ORDER BY category, amount DESC
    `, [targetDate]);
    
    const summary = await db.all(`
      SELECT 
        category,
        COUNT(*) as count,
        SUM(amount) as total
      FROM expenses 
      WHERE date = ? 
      GROUP BY category
      ORDER BY total DESC
    `, [targetDate]);
    
    const totalAmount = expenses.reduce((sum, exp) => sum + (exp.amount || 0), 0);
    
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
    console.error('Error generating daily expense report:', error);
    res.status(500).json({ error: 'Failed to generate daily expense report' });
  }
});

// Get monthly expense report
router.get('/monthly-expense-report', async (req, res) => {
  try {
    const db = getDB();
    const { year, month } = req.query;
    
    const currentDate = new Date();
    const targetYear = year || currentDate.getFullYear();
    const targetMonth = month || String(currentDate.getMonth() + 1).padStart(2, '0');
    
    const startDate = `${targetYear}-${targetMonth}-01`;
    const endDate = `${targetYear}-${targetMonth}-31`;
    
    const expenses = await db.all(`
      SELECT * FROM expenses 
      WHERE date BETWEEN ? AND ? 
      ORDER BY date DESC, category
    `, [startDate, endDate]);
    
    const categoryBreakdown = await db.all(`
      SELECT 
        category,
        COUNT(*) as count,
        SUM(amount) as total,
        ROUND(SUM(amount) * 100.0 / NULLIF((SELECT SUM(amount) FROM expenses WHERE date BETWEEN ? AND ?), 0), 2) as percentage
      FROM expenses 
      WHERE date BETWEEN ? AND ?
      GROUP BY category
      ORDER BY total DESC
    `, [startDate, endDate, startDate, endDate]);
    
    const dailyTotals = await db.all(`
      SELECT 
        date,
        COUNT(*) as count,
        SUM(amount) as total
      FROM expenses 
      WHERE date BETWEEN ? AND ?
      GROUP BY date
      ORDER BY date
    `, [startDate, endDate]);
    
    const monthlyTotal = expenses.reduce((sum, exp) => sum + (exp.amount || 0), 0);
    
    res.json({
      period: `${targetYear}-${targetMonth}`,
      expenses,
      summary: {
        monthlyTotal,
        totalExpenses: expenses.length,
        averageDaily: dailyTotals.length > 0 ? monthlyTotal / dailyTotals.length : 0
      },
      categoryBreakdown,
      dailyTotals
    });
  } catch (error) {
    console.error('Error generating monthly expense report:', error);
    res.status(500).json({ error: 'Failed to generate monthly expense report' });
  }
});

// Export expense data to CSV
router.get('/export/expense-csv', async (req, res) => {
  try {
    const db = getDB();
    const { startDate, endDate } = req.query;
    
    const start = startDate || new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0];
    const end = endDate || new Date().toISOString().split('T')[0];
    
    const expenses = await db.all(`
      SELECT 
        date as "Date",
        category as "Category",
        description as "Description",
        amount as "Amount (₹)",
        payment_mode as "Payment Mode",
        vendor_name as "Vendor",
        ghat_location as "Ghat Location",
        approved_by as "Approved By",
        remarks as "Remarks",
        created_by as "Created By"
      FROM expenses 
      WHERE date BETWEEN ? AND ?
      ORDER BY date DESC, category
    `, [start, end]);
    
    const summary = await db.all(`
      SELECT 
        category as "Category",
        COUNT(*) as "Count",
        SUM(amount) as "Total (₹)"
      FROM expenses 
      WHERE date BETWEEN ? AND ?
      GROUP BY category
      ORDER BY SUM(amount) DESC
    `, [start, end]);
    
    const totalExpense = await db.get(`
      SELECT SUM(amount) as total FROM expenses WHERE date BETWEEN ? AND ?
    `, [start, end]);
    
    const headers = ['Date', 'Category', 'Description', 'Amount (₹)', 'Payment Mode', 'Vendor', 'Ghat Location', 'Approved By', 'Remarks', 'Created By'];
    const csvData = [
      'EXPENSE REPORT',
      `Period: ${start} to ${end}`,
      `Total Expenses: ₹${totalExpense?.total || 0}`,
      '',
      'CATEGORY SUMMARY',
      Object.keys(summary[0] || {}).join(','),
      ...summary.map(item => Object.values(item).map(v => v === null ? '' : `"${v}"`).join(',')),
      '',
      'EXPENSE DETAILS',
      headers.join(','),
      ...expenses.map(item => headers.map(h => {
        const value = item[h];
        if (value === null || value === undefined) return '';
        if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      }).join(','))
    ].join('\n');
    
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=expense-report-${start}-to-${end}.csv`);
    res.send(csvData);
  } catch (error) {
    console.error('Error exporting expense CSV:', error);
    res.status(500).json({ error: 'Failed to export expense report' });
  }
});

// Test endpoint for reports
router.get('/test', (req, res) => {
  res.json({
    message: 'Reports API is working',
    endpoints: [
      'GET /credit-report',
      'GET /monthly-report',
      'GET /financial-summary',
      'GET /client-report',
      'GET /daily-summary',
      'GET /expense-summary',
      'GET /daily-expense-report',
      'GET /monthly-expense-report',
      'GET /export/credit-csv',
      'GET /export/monthly-csv',
      'GET /export/financial-csv',
      'GET /export/expense-csv'
    ]
  });
});

export default router;