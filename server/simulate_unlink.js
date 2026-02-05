
import { sequelize, TruckVehicles } from './models/index.js';

async function simulateUpdate() {
  const t = await sequelize.transaction();
  try {
    // Simulate req.body
    const reqBody = {
        vehicle_number: 'MH29-3977',
        truck_owner_id: null,
        driver_name: 'Mama',
        tyre_type: '6 Tyre'
    };
    
    const { vehicle_number, truck_owner_id, driver_name, tyre_type } = reqBody;
    
    console.log(`Input truck_owner_id: ${truck_owner_id} (Type: ${typeof truck_owner_id})`);
    console.log(`Is not undefined? ${truck_owner_id !== undefined}`);

    const existing = await TruckVehicles.findOne({ where: { vehicle_number: vehicle_number.toUpperCase() }, transaction: t });
    
    if (existing) {
        console.log(`Existing Owner ID: ${existing.truck_owner_id}`);
        
        const updatePayload = { 
            truck_owner_id: truck_owner_id !== undefined ? truck_owner_id : existing.truck_owner_id, 
            driver_name: driver_name !== undefined ? driver_name : existing.driver_name, 
            tyre_type: tyre_type !== undefined ? tyre_type : existing.tyre_type 
        };
        
        console.log('Update Payload:', updatePayload);

        await existing.update(updatePayload, { transaction: t });
        
        console.log(`Updated Owner ID (in memory): ${existing.truck_owner_id}`);
    } else {
        console.log('Vehicle not found');
    }

    // Rollback so we don't actually change DB yet (or Commit if we want to fix it)
    await t.rollback(); 
    console.log('Rolled back transaction.');

  } catch (error) {
    console.error('Error:', error);
    await t.rollback();
  } finally {
    await sequelize.close();
  }
}

simulateUpdate();
