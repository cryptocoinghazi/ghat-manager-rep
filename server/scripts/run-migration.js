import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from '../mysql.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runMigration() {
  const migrationFile = process.argv[2];
  
  if (!migrationFile) {
    console.error('Please provide a migration file name (e.g., 20260127_add_driver_tyre_truck_vehicles.sql)');
    process.exit(1);
  }

  const filePath = path.join(__dirname, '..', 'migrations', migrationFile);

  if (!fs.existsSync(filePath)) {
    console.error(`Migration file not found: ${filePath}`);
    process.exit(1);
  }

  console.log(`Running migration: ${migrationFile}`);

  try {
    const sqlContent = fs.readFileSync(filePath, 'utf8');
    
    // Split by semicolon, but be careful with comments and strings. 
    // For simple migrations, splitting by ';' and filtering empty lines usually works.
    // A better regex might be needed for complex stored procs, but for this task it's fine.
    const statements = sqlContent
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    for (const statement of statements) {
      console.log(`Executing: ${statement.substring(0, 50)}...`);
      try {
        await sequelize.query(statement);
      } catch (err) {
        // Ignore "Duplicate column name" or "Unknown column" errors if we want idempotency,
        // or just let it fail. The user asked for a runner, assuming it's for applying changes.
        // Let's log and continue if it's a "Duplicate column" error to be safe, or just fail.
        // For now, fail on error is safer.
        console.error(`Error executing statement: ${statement}`);
        throw err;
      }
    }

    console.log('Migration completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigration();
