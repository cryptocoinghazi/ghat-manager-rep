
import sequelize from './mysql.js';

async function check() {
  try {
    const owners = await sequelize.query("SELECT id, name, vehicle_number FROM truck_owners WHERE name LIKE '%ARBAZ%' OR name LIKE '%TwoOwner%' OR vehicle_number LIKE '%MH40N7150%'", { type: sequelize.QueryTypes.SELECT });
    console.log('Owners:', JSON.stringify(owners, null, 2));

    const vehicles = await sequelize.query("SELECT id, vehicle_number, truck_owner_id, driver_name FROM truck_vehicles WHERE vehicle_number LIKE '%MH40N7150%' OR vehicle_number LIKE '%MH41234%'", { type: sequelize.QueryTypes.SELECT });
    console.log('Vehicles:', JSON.stringify(vehicles, null, 2));
  } catch (e) {
    console.error(e);
  } finally {
    await sequelize.close();
  }
}
check();
