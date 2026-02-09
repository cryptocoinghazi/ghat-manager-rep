import sequelize from './mysql.js';

async function run() {
  try {
    const query = `UPDATE users SET password_hash = '$2b$10$GdY3WBW/fZN3RFu76Z6Z9eHjuGcAS.xodoXlBIsKqmqFL1vkn9vxy' WHERE username = 'admin';`;
    console.log('Running query:', query);
    const [results, metadata] = await sequelize.query(query);
    console.log('Query executed successfully.');
    console.log('Results:', results);
    console.log('Metadata:', metadata);
  } catch (error) {
    console.error('Error executing query:', error);
  } finally {
    await sequelize.close();
  }
}

run();
