import axios from 'axios';

const endpoints = [
  '/api/health',
  '/api/receipts?limit=1',
  '/api/reports/expense-summary'
];

(async () => {
  for (const ep of endpoints) {
    try {
      const res = await axios.get(`http://localhost:3000${ep}`);
      console.log(`✓ ${ep}: ${res.status}`);
    } catch (e) {
      console.log(`✗ ${ep}: ${e.message}`);
    }
  }
})();
