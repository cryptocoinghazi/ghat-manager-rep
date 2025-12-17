import sequelize from '../mysql.js';
import { TruckOwners, GstReceipts } from '../models/index.js';

async function sync() {
  try {
    console.log('Syncing database...');
    await sequelize.sync({ alter: true });
    console.log('Database synced successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error syncing database:', error);
    process.exit(1);
  }
}

sync();
