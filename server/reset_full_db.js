import sequelize from './mysql.js';
import { Users } from './models/index.js';
import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function resetFullDatabase() {
  try {
    console.log('Starting full database reset...');
    
    // 1. Drop all tables
    console.log('Dropping all tables...');
    // We disable FK checks to allow dropping tables in any order
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await sequelize.sync({ force: true });
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    console.log('All tables dropped and recreated from models.');

    // 2. Create Admin User
    console.log('Creating admin user...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    await Users.create({
      username: 'admin',
      password: hashedPassword,
      password_hash: hashedPassword,
      role: 'admin',
      full_name: 'System Admin',
      is_active: 1
    });
    
    console.log('Admin user created successfully.');
    console.log('Username: admin');
    console.log('Password: password123');
    
    console.log('Database reset complete.');
    process.exit(0);
  } catch (error) {
    console.error('Error resetting database:', error);
    process.exit(1);
  }
}

resetFullDatabase();
