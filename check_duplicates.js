
import { Sequelize, DataTypes } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Sequelize (adjust path to your sqlite db)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'server', 'database.sqlite'),
  logging: false
});

const TruckVehicles = sequelize.define('TruckVehicles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  vehicle_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  truck_owner_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  driver_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tyre_type: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'truck_vehicles',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

async function checkDuplicates() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Check specifically for MH29T0781
    const specific = await TruckVehicles.findAll({
      where: {
        vehicle_number: 'MH29T0781'
      }
    });

    console.log('--- MH29T0781 Records ---');
    if (specific.length === 0) {
        console.log('No records found for MH29T0781');
    } else {
        specific.forEach(v => {
            console.log(`ID: ${v.id}, Number: ${v.vehicle_number}, OwnerID: ${v.truck_owner_id}, Driver: ${v.driver_name}`);
        });
    }

    // Check for all duplicates
    const duplicates = await TruckVehicles.findAll({
      attributes: ['vehicle_number', [sequelize.fn('COUNT', sequelize.col('id')), 'count']],
      group: ['vehicle_number'],
      having: sequelize.literal('count > 1')
    });

    console.log('\n--- All Duplicate Vehicles ---');
    if (duplicates.length === 0) {
        console.log('No duplicates found.');
    } else {
        duplicates.forEach(d => {
            console.log(`${d.vehicle_number}: ${d.getDataValue('count')} records`);
        });
    }

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
}

checkDuplicates();
