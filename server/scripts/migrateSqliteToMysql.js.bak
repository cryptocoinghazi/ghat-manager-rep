import { initializeDatabase, getDB } from '../db.js';
import sequelize from '../mysql.js';
import { syncModels, Receipts, TruckOwners, Settings, CreditPayments, Expenses, ExpenseCategories, DepositTransactions, Users } from '../models/index.js';

async function migrate() {
  await initializeDatabase();
  await syncModels();
  const db = getDB();

  const tables = ['truck_owners','settings','receipts','credit_payments','expenses','expense_categories','deposit_transactions','users'];
  const data = {};
  for (const t of tables) {
    try { data[t] = await db.all(`SELECT * FROM ${t}`); } catch { data[t] = []; }
  }

  if (data.truck_owners.length) await TruckOwners.bulkCreate(data.truck_owners, { updateOnDuplicate: ['name'] });
  if (data.settings.length) await Settings.bulkCreate(data.settings, { updateOnDuplicate: ['value','category','updated_at'] });
  if (data.receipts.length) await Receipts.bulkCreate(data.receipts.map(r => ({...r, id: undefined})), { updateOnDuplicate: ['receipt_no'] });
  if (data.credit_payments.length) await CreditPayments.bulkCreate(data.credit_payments.map(r => ({...r, id: undefined})), { updateOnDuplicate: ['amount_paid'] });
  if (data.expenses.length) await Expenses.bulkCreate(data.expenses.map(r => ({...r, id: undefined})), { updateOnDuplicate: ['amount'] });
  if (data.expense_categories.length) await ExpenseCategories.bulkCreate(data.expense_categories.map(r => ({...r, id: undefined})), { updateOnDuplicate: ['name'] });
  if (data.deposit_transactions.length) await DepositTransactions.bulkCreate(data.deposit_transactions.map(r => ({...r, id: undefined})), { updateOnDuplicate: ['new_balance'] });
  if (data.users.length) await Users.bulkCreate(data.users.map(r => ({...r, id: undefined})), { updateOnDuplicate: ['username'] });

  await sequelize.close();
}

if (process.argv[1] && process.argv[1].includes('migrateSqliteToMysql.js')) {
  migrate().then(() => { console.log('Migration complete'); process.exit(0); }).catch(err => { console.error(err); process.exit(1); });
}

export default migrate;
