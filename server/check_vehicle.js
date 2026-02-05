
import { sequelize, TruckVehicles, TruckOwners } from './models/index.js';

async function checkVehicle() {
  try {
    await sequelize.authenticate();
    console.log('Connection established.');

    const vehicleNumber = 'MH29-3977';
    
    // 1. Find the vehicle
    const vehicle = await TruckVehicles.findOne({ 
        where: { vehicle_number: vehicleNumber },
        include: [{ model: TruckOwners, as: 'owner' }]
    });

    if (!vehicle) {
        console.log(`Vehicle ${vehicleNumber} not found!`);
        return;
    }

    console.log(`Vehicle: ${vehicle.vehicle_number}`);
    console.log(`ID: ${vehicle.id}`);
    console.log(`Owner ID: ${vehicle.truck_owner_id}`);
    console.log(`Owner Name: ${vehicle.owner ? vehicle.owner.name : 'None'}`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
}

checkVehicle();
