import sequelize from './mysql.js';

async function cleanIndexes() {
  try {
    await sequelize.authenticate();
    console.log('Connected.');

    const tables = ['receipts', 'truck_vehicles', 'expense_categories', 'users', 'truck_owners'];
    
    for (const table of tables) {
      console.log(`Checking table: ${table}`);
      const [indexes] = await sequelize.query(`SHOW INDEX FROM \`${table}\``);
      
      // Group by key_name
      const keyMap = {};
      indexes.forEach(idx => {
        if (!keyMap[idx.Key_name]) {
          keyMap[idx.Key_name] = [];
        }
        keyMap[idx.Key_name].push(idx);
      });

      // Identify redundant keys
      // Usually PRIMARY is safe. 
      // We look for patterns like `column_name_N`
      
      for (const keyName of Object.keys(keyMap)) {
        // Check if it matches pattern name_N or similar, AND is not the main unique key
        // Actually, if we have `receipt_no` and `receipt_no_2`, `receipt_no_3`...
        // We want to keep `receipt_no` and drop others.
        
        if (keyName.match(/_\d+$/)) {
           console.log(`Dropping redundant index: ${keyName} from ${table}`);
           try {
             await sequelize.query(`ALTER TABLE \`${table}\` DROP INDEX \`${keyName}\``);
           } catch (e) {
             console.error(`Failed to drop ${keyName}: ${e.message}`);
           }
        }
      }
    }
    
    console.log('Cleanup finished.');
    process.exit(0);

  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

cleanIndexes();
