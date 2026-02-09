import sequelize from './mysql.js';

async function verifyQueries() {
  const startDate = '2023-01-01';
  const endDate = '2023-12-31';

  try {
    console.log('Testing Profit & Loss Queries...');

    // 1. Summary Queries
    console.log('1. Testing Summary Queries...');
    const revenueQ = `SELECT SUM(total_amount) as total_revenue FROM receipts WHERE is_active = 1 AND DATE(date_time) BETWEEN ? AND ?`;
    await sequelize.query(revenueQ, { replacements: [startDate, endDate] });
    console.log('   - Revenue Query OK');

    // 2. Daily Trends
    console.log('2. Testing Daily Trends Query...');
    const dailyTrendQ = `
      SELECT DATE(d) as date, SUM(revenue) as revenue, SUM(expenses) as expenses 
      FROM (
        SELECT DATE(date_time) as d, total_amount as revenue, 0 as expenses 
        FROM receipts WHERE is_active = 1 AND DATE(date_time) BETWEEN ? AND ?
        UNION ALL
        SELECT DATE(date) as d, 0 as revenue, amount as expenses 
        FROM expenses WHERE DATE(date) BETWEEN ? AND ?
      ) as combined 
      GROUP BY DATE(d)
    `;
    await sequelize.query(dailyTrendQ, { replacements: [startDate, endDate, startDate, endDate] });
    console.log('   - Daily Trends Query OK');

    // 3. Receipt Value Distribution
    console.log('3. Testing Receipt Value Distribution...');
    const receiptValueDistQ = `
      SELECT 
        CASE 
          WHEN total_amount < 500 THEN '0-500'
          WHEN total_amount BETWEEN 500 AND 1000 THEN '500-1000'
          WHEN total_amount BETWEEN 1000 AND 5000 THEN '1000-5000'
          ELSE '5000+'
        END as range_label,
        COUNT(*) as count
      FROM receipts
      WHERE is_active = 1 AND DATE(date_time) BETWEEN ? AND ?
      GROUP BY range_label
    `;
    await sequelize.query(receiptValueDistQ, { replacements: [startDate, endDate] });
    console.log('   - Receipt Value Distribution Query OK');

    // 4. New vs Returning
    console.log('4. Testing New vs Returning Clients...');
    const newVsReturningQ = `
      SELECT
        SUM(CASE WHEN first_seen >= ? THEN 1 ELSE 0 END) as new_clients,
        SUM(CASE WHEN first_seen < ? THEN 1 ELSE 0 END) as returning_clients
      FROM (
        SELECT truck_owner, MIN(date_time) as first_seen
        FROM receipts
        WHERE is_active = 1
        GROUP BY truck_owner
        HAVING MAX(date_time) BETWEEN ? AND ?
      ) as client_activity
    `;
    await sequelize.query(newVsReturningQ, { replacements: [startDate, startDate, startDate, endDate] });
    console.log('   - New vs Returning Query OK');

    // 5. Aging Receivables
    console.log('5. Testing Aging Receivables...');
    const agingReceivablesQ = `
      SELECT 
        CASE 
          WHEN DATEDIFF(NOW(), date_time) <= 30 THEN '0-30 Days'
          WHEN DATEDIFF(NOW(), date_time) <= 60 THEN '31-60 Days'
          WHEN DATEDIFF(NOW(), date_time) <= 90 THEN '61-90 Days'
          ELSE '90+ Days'
        END as age_group,
        SUM(credit_amount) as amount
      FROM receipts
      WHERE is_active = 1 AND payment_status = 'credit'
      GROUP BY age_group
    `;
    await sequelize.query(agingReceivablesQ);
    console.log('   - Aging Receivables Query OK');

    // 6. Ledger with corrected column
    console.log('6. Testing Ledger Query...');
    const ledgerQ = `
      SELECT * FROM (
        SELECT date_time as date, 'Income' as type, truck_owner as party, total_amount as amount, payment_status as status, 'Sale' as category
        FROM receipts WHERE is_active = 1 AND DATE(date_time) BETWEEN ? AND ?
        UNION ALL
        SELECT date, 'Expense' as type, COALESCE(vendor_name, category) as party, amount, 'paid' as status, category
        FROM expenses WHERE DATE(date) BETWEEN ? AND ?
      ) as combined
      ORDER BY date DESC LIMIT 10
    `;
    await sequelize.query(ledgerQ, { replacements: [startDate, endDate, startDate, endDate] });
    console.log('   - Ledger Query OK');

    console.log('ALL CHECKS PASSED');
    process.exit(0);
  } catch (error) {
    console.error('VERIFICATION FAILED:', error);
    process.exit(1);
  }
}

verifyQueries();
