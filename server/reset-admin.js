
import { Users, sequelize } from './models/index.js';
import bcrypt from 'bcrypt';

async function resetAdmin() {
  try {
    await sequelize.authenticate();
    console.log('Connected to DB');

    const hashedPassword = await bcrypt.hash('password123', 10);
    
    const [user, created] = await Users.findOrCreate({
      where: { username: 'admin' },
      defaults: {
        password: hashedPassword,
        password_hash: hashedPassword, // Support both fields just in case
        role: 'admin',
        full_name: 'System Admin',
        is_active: 1
      }
    });

    if (!created) {
      user.password = hashedPassword;
      user.password_hash = hashedPassword;
      user.role = 'admin';
      user.is_active = 1;
      await user.save();
      console.log('Admin user updated');
    } else {
      console.log('Admin user created');
    }

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

resetAdmin();
