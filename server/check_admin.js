
import { Users } from './models/index.js';
import bcrypt from 'bcrypt';

async function checkAdmin() {
  try {
    const admin = await Users.findOne({ where: { username: 'admin' } });
    if (admin) {
      console.log('Admin user exists.');
      console.log('Role:', admin.role);
      // Reset password to ensure we know it
      const hashedPassword = await bcrypt.hash('password123', 10);
      admin.password_hash = hashedPassword;
      await admin.save();
      console.log('Admin password reset to: password123');
    } else {
      console.log('Admin user does not exist. Creating one...');
      const hashedPassword = await bcrypt.hash('password123', 10);
      await Users.create({
        username: 'admin',
        password_hash: hashedPassword,
        role: 'admin',
        full_name: 'Admin User',
        is_active: true
      });
      console.log('Admin user created with password: password123');
    }
  } catch (error) {
    console.error('Error checking admin:', error);
  }
}

checkAdmin();
