
import sequelize from './mysql.js';

async function repair() {
  try {
    console.log("Starting repair...");
    
    // 1. Unlink MH40N7150 from Arbaz (ID 36) to free it up
    await sequelize.query("UPDATE truck_vehicles SET truck_owner_id = NULL, driver_name = NULL WHERE vehicle_number = 'MH40N7150'");
    console.log("Unlinked MH40N7150 from old owner.");

    // 2. Ensure MH41234 exists and is linked to Arbaz (ID 36)
    const [existing] = await sequelize.query("SELECT * FROM truck_vehicles WHERE vehicle_number = 'MH41234'");
    
    if (existing.length > 0) {
       await sequelize.query("UPDATE truck_vehicles SET truck_owner_id = 36 WHERE vehicle_number = 'MH41234'");
       console.log("Updated MH41234 to point to Arbaz.");
    } else {
       // Insert new vehicle
       await sequelize.query("INSERT INTO truck_vehicles (vehicle_number, truck_owner_id, driver_name, tyre_type, createdAt, updatedAt) VALUES ('MH41234', 36, NULL, '6 Tyre', NOW(), NOW())");
       console.log("Created MH41234 and linked to Arbaz.");
    }

  } catch (e) {
    console.error("Repair failed:", e);
  } finally {
    await sequelize.close();
  }
}
repair();
