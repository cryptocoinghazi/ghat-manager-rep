import { sequelize, TruckVehicles, TruckOwners } from './models/index.js';

async function checkVehicle() {
  try {
    await sequelize.authenticate();
    const vehicle = await TruckVehicles.findOne({ 
      where: { vehicle_number: 'MH40N7150' },
      include: [{ model: TruckOwners, as: 'owner' }]
    });
    
    if (vehicle) {
      console.log('Vehicle found:', vehicle.toJSON());
    } else {
      console.log('Vehicle MH40N7150 NOT found.');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
}

checkVehicle();