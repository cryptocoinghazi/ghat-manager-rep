import { DataTypes } from 'sequelize';
import sequelize from '../mysql.js';

export const Receipts = sequelize.define('receipts', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  receipt_no: { type: DataTypes.STRING(64), unique: true, allowNull: false },
  truck_owner: { type: DataTypes.STRING(255), allowNull: false },
  vehicle_number: { type: DataTypes.STRING(64), allowNull: false },
  date_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  brass_qty: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  rate: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  loading_charge: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  cash_paid: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  credit_amount: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  total_amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  payment_status: { type: DataTypes.STRING(32), defaultValue: 'pending' },
  payment_method: { type: DataTypes.STRING(32), defaultValue: 'cash' },
  deposit_deducted: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  owner_type: { type: DataTypes.STRING(32), defaultValue: 'regular' },
  applied_rate: { type: DataTypes.DECIMAL(10,2) },
  notes: { type: DataTypes.TEXT },
  is_active: { type: DataTypes.INTEGER, defaultValue: 1 },
  owner_id: { type: DataTypes.INTEGER }
});

export const TruckOwners = sequelize.define('truck_owners', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(255), unique: true, allowNull: false },
  phone: { type: DataTypes.STRING(64) },
  address: { type: DataTypes.TEXT },
  credit_limit: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  payment_type: { type: DataTypes.STRING(32), defaultValue: 'cash' },
  is_partner: { type: DataTypes.INTEGER, defaultValue: 0 },
  partner_rate: { type: DataTypes.DECIMAL(10,2) },
  deposit_balance: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  vehicle_number: { type: DataTypes.STRING(64) },
  is_active: { type: DataTypes.INTEGER, defaultValue: 1 }
});

export const Settings = sequelize.define('settings', {
  key: { type: DataTypes.STRING(64), primaryKey: true },
  value: { type: DataTypes.TEXT },
  category: { type: DataTypes.STRING(64) },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

export const CreditPayments = sequelize.define('credit_payments', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  receipt_id: { type: DataTypes.INTEGER },
  amount_paid: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  payment_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  payment_mode: { type: DataTypes.STRING(32) },
  reference_no: { type: DataTypes.STRING(64) }
});

export const Users = sequelize.define('users', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING(64), unique: true, allowNull: false },
  password_hash: { type: DataTypes.STRING(255), allowNull: false },
  full_name: { type: DataTypes.STRING(255) },
  role: { type: DataTypes.STRING(32), defaultValue: 'user' },
  is_active: { type: DataTypes.INTEGER, defaultValue: 1 }
});

export const Expenses = sequelize.define('expenses', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  date: { type: DataTypes.DATEONLY },
  category: { type: DataTypes.STRING(64) },
  description: { type: DataTypes.TEXT },
  amount: { type: DataTypes.DECIMAL(10,2) },
  payment_mode: { type: DataTypes.STRING(32) },
  receipt_number: { type: DataTypes.STRING(64) },
  vendor_name: { type: DataTypes.STRING(255) },
  ghat_location: { type: DataTypes.STRING(255) },
  approved_by: { type: DataTypes.STRING(255) },
  remarks: { type: DataTypes.TEXT },
  status: { type: DataTypes.STRING(32) },
  created_by: { type: DataTypes.STRING(255) }
});

export const ExpenseCategories = sequelize.define('expense_categories', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(64), unique: true },
  description: { type: DataTypes.TEXT }
});

export const DepositTransactions = sequelize.define('deposit_transactions', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  owner_id: { type: DataTypes.INTEGER, allowNull: false },
  type: { type: DataTypes.STRING(16), allowNull: false },
  amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  previous_balance: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  new_balance: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  receipt_no: { type: DataTypes.STRING(64) },
  notes: { type: DataTypes.TEXT }
});

Receipts.belongsTo(TruckOwners, { foreignKey: 'owner_id', as: 'owner', constraints: false });
CreditPayments.belongsTo(Receipts, { foreignKey: 'receipt_id' });
DepositTransactions.belongsTo(TruckOwners, { foreignKey: 'owner_id' });

export async function syncModels() {
  await sequelize.authenticate();
  await sequelize.sync();
}

export { sequelize };
