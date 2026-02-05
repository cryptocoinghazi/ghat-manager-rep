
import { sequelize, TruckVehicles } from './models/index.js';

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
