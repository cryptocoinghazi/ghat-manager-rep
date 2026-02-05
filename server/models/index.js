import { DataTypes } from 'sequelize';
import sequelize from '../mysql.js';

export const Receipts = sequelize.define('receipts', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  receipt_no: { type: DataTypes.STRING(64), allowNull: false },
  truck_owner: { type: DataTypes.STRING(255), allowNull: false },
  vehicle_number: { type: DataTypes.STRING(64), allowNull: false },
  driver_name: { type: DataTypes.STRING(255) },
  tyre_type: { type: DataTypes.STRING(16) },
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

export const GstReceipts = sequelize.define('gst_receipts', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  receipt_no: { type: DataTypes.STRING(64), allowNull: false },
  truck_owner: { type: DataTypes.STRING(255), allowNull: false },
  vehicle_number: { type: DataTypes.STRING(64), allowNull: false },
  date_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  brass_qty: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  rate: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  loading_charge: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  
  // GST Specific fields
  gst_rate: { type: DataTypes.DECIMAL(5,2), defaultValue: 5.00 },
  cgst_amount: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  sgst_amount: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  igst_amount: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  total_before_gst: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  
  cash_paid: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  credit_amount: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  total_amount: { type: DataTypes.DECIMAL(10,2), allowNull: false }, // Grand total
  
  payment_status: { type: DataTypes.STRING(32), defaultValue: 'pending' },
  payment_method: { type: DataTypes.STRING(32), defaultValue: 'cash' },
  notes: { type: DataTypes.TEXT },
  is_active: { type: DataTypes.INTEGER, defaultValue: 1 },
  owner_id: { type: DataTypes.INTEGER }
});

export const TruckOwners = sequelize.define('truck_owners', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(255), allowNull: false },
  phone: { type: DataTypes.STRING(64) },
  address: { type: DataTypes.TEXT },
  credit_limit: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  payment_type: { type: DataTypes.STRING(32), defaultValue: 'cash' },
  is_partner: { type: DataTypes.INTEGER, defaultValue: 0 },
  partner_rate: { type: DataTypes.DECIMAL(10,2) },
  is_gst_client: { type: DataTypes.BOOLEAN, defaultValue: false },
  deposit_balance: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  vehicle_number: { type: DataTypes.STRING(64) },
  is_active: { type: DataTypes.INTEGER, defaultValue: 1 }
});

export const TruckVehicles = sequelize.define('truck_vehicles', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  vehicle_number: { type: DataTypes.STRING(64), allowNull: false },
  truck_owner_id: { type: DataTypes.INTEGER, allowNull: true },
  driver_name: { type: DataTypes.STRING(255) },
  tyre_type: { type: DataTypes.STRING(16) }
});

export const ReceiptEditHistory = sequelize.define('receipt_edit_history', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  receipt_id: { type: DataTypes.INTEGER, allowNull: false },
  field_name: { type: DataTypes.STRING(64), allowNull: false },
  old_value: { type: DataTypes.TEXT },
  new_value: { type: DataTypes.TEXT },
  change_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  changed_by: { type: DataTypes.STRING(64) },
  reason: { type: DataTypes.TEXT }
});

export const VehicleEditHistory = sequelize.define('vehicle_edit_history', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  vehicle_number: { type: DataTypes.STRING(64), allowNull: false },
  field_name: { type: DataTypes.STRING(64), allowNull: false },
  old_value: { type: DataTypes.TEXT },
  new_value: { type: DataTypes.TEXT },
  change_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  changed_by: { type: DataTypes.STRING(64) },
  reason: { type: DataTypes.TEXT }
});

export const TruckOwnerEditHistory = sequelize.define('truck_owner_edit_history', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  owner_id: { type: DataTypes.INTEGER, allowNull: false },
  field_name: { type: DataTypes.STRING(64), allowNull: false },
  old_value: { type: DataTypes.TEXT },
  new_value: { type: DataTypes.TEXT },
  change_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  changed_by: { type: DataTypes.STRING(64) },
  reason: { type: DataTypes.TEXT }
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
  reference_no: { type: DataTypes.TEXT }
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
  date: { type: DataTypes.DATE },
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

export const VehicleOwnershipHistory = sequelize.define('vehicle_ownership_history', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  vehicle_number: { type: DataTypes.STRING(64), allowNull: false },
  previous_owner_id: { type: DataTypes.INTEGER },
  new_owner_id: { type: DataTypes.INTEGER },
  change_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  changed_by: { type: DataTypes.STRING(64) }
});

export const VehicleImages = sequelize.define('vehicle_images', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  receipt_id: { type: DataTypes.INTEGER, allowNull: true },
  truck_vehicle_id: { type: DataTypes.INTEGER, allowNull: true },
  vehicle_number_extracted: { type: DataTypes.STRING(64) },
  ocr_confidence: { type: DataTypes.DECIMAL(5,2) },
  ocr_provider: { type: DataTypes.STRING(32) },
  ocr_raw_json: { type: DataTypes.TEXT },
  original_filename: { type: DataTypes.STRING(255) },
  filename_encrypted: { type: DataTypes.STRING(255), allowNull: false },
  mime_type: { type: DataTypes.STRING(64), allowNull: false },
  size_bytes: { type: DataTypes.INTEGER, allowNull: false },
  processed_at: { type: DataTypes.DATE },
  created_by: { type: DataTypes.STRING(64) }
});

Receipts.belongsTo(TruckOwners, { foreignKey: 'owner_id', as: 'owner', constraints: false });
GstReceipts.belongsTo(TruckOwners, { foreignKey: 'owner_id', as: 'owner', constraints: false });
CreditPayments.belongsTo(Receipts, { foreignKey: 'receipt_id' });
DepositTransactions.belongsTo(TruckOwners, { foreignKey: 'owner_id' });
TruckVehicles.belongsTo(TruckOwners, { foreignKey: 'truck_owner_id', as: 'owner' });
TruckOwners.hasMany(TruckVehicles, { foreignKey: 'truck_owner_id', as: 'vehicles' });
ReceiptEditHistory.belongsTo(Receipts, { foreignKey: 'receipt_id' });
TruckOwnerEditHistory.belongsTo(TruckOwners, { foreignKey: 'owner_id' });
VehicleImages.belongsTo(Receipts, { foreignKey: 'receipt_id' });
VehicleImages.belongsTo(TruckVehicles, { foreignKey: 'truck_vehicle_id', as: 'vehicle' });

export async function syncModels() {
  console.log('Authenticating sequelize...');
  await sequelize.authenticate();
  console.log('Sequelize authenticated. Syncing...');
  await sequelize.sync({ alter: true });
  console.log('Sequelize synced.');
}

export { sequelize };
