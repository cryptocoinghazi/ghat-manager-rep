
import { sequelize, TruckVehicles } from './models/index.js';

async function checkApiQuery() {
  try {
    await sequelize.authenticate();
    console.log('Connection established.');

    // Simulate the API query
    const unlinked = await TruckVehicles.findAll({
        where: { truck_owner_id: null }
    });

    console.log(`API Query (truck_owner_id: null) result count: ${unlinked.length}`);
    unlinked.forEach(v => {
        console.log(` - ${v.vehicle_number} (ID: ${v.id}, OwnerID: ${v.truck_owner_id})`);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
}

checkApiQuery();
