import sequelize from './mysql.js';

async function verify() {
  try {
    await sequelize.authenticate();
    console.log('Connected to DB.');

    const [receipts] = await sequelize.query('SELECT COUNT(*) as count FROM receipts');
    console.log(`Receipts count: ${receipts[0].count}`);

    const [payments] = await sequelize.query('SELECT COUNT(*) as count FROM credit_payments');
    console.log(`Credit Payments count: ${payments[0].count}`);

    const [images] = await sequelize.query('SELECT COUNT(*) as count FROM vehicle_images');
    console.log(`Vehicle Images count: ${images[0].count}`);
    
    // Check one receipt detail
    const [receipt] = await sequelize.query('SELECT * FROM receipts ORDER BY id DESC LIMIT 1');
    console.log('Latest Receipt:', receipt[0]);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

verify();
