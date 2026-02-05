
// const fetch = require('node-fetch'); // Native fetch is available in Node 22

const BASE_URL = 'http://localhost:3000';
const LOGIN_ENDPOINT = '/api/auth/login';
const LEDGER_ENDPOINT = '/api/payments/owner-ledger/1';
const HISTORY_ENDPOINT_TEMPLATE = '/api/receipts/ID/history';

// Helper to simulate the UI flow
async function simulateUIFlow() {
  console.log('--- Starting UI Flow Simulation ---');
  
  let token = null;

  // 0. Simulate Login (AuthService.js)
  console.log(`\n0. Logging in as admin...`);
  try {
    const loginRes = await fetch(`${BASE_URL}${LOGIN_ENDPOINT}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'admin', password: 'password123' })
    });

    if (!loginRes.ok) {
        throw new Error(`Login failed: ${loginRes.status} ${loginRes.statusText}`);
    }

    const loginData = await loginRes.json();
    token = loginData.token;
    console.log('   [SUCCESS] Login successful. Token obtained.');
  } catch (error) {
    console.error('   [FAILURE] Could not login. Tests will likely fail.', error.message);
    return; // Stop if login fails
  }

  const headers = {
    'Authorization': `Bearer ${token}`
  };

  // 1. Simulate Fetching Ledger (OwnerLedgerReport.jsx: fetchLedgerData)
  console.log(`\n1. Fetching Ledger from: ${BASE_URL}${LEDGER_ENDPOINT}`);
  try {
    const ledgerRes = await fetch(`${BASE_URL}${LEDGER_ENDPOINT}`, { headers });
    
    if (!ledgerRes.ok) {
      throw new Error(`Failed to fetch ledger: ${ledgerRes.status} ${ledgerRes.statusText}`);
    }
    
    const ledgerData = await ledgerRes.json();
    console.log('   [SUCCESS] Ledger data received.');
    console.log(`   - Owner Name: ${ledgerData.owner?.name}`);
    console.log(`   - Receipts Count: ${ledgerData.receipts?.length}`);
    
    // 2. Simulate User Clicking "Edit" -> "History" (OwnerLedgerReport.jsx: fetchReceiptHistory)
    if (ledgerData.receipts && ledgerData.receipts.length > 0) {
      const receiptId = ledgerData.receipts[0].id;
      const historyEndpoint = HISTORY_ENDPOINT_TEMPLATE.replace('ID', receiptId);
      
      console.log(`\n2. Fetching History for Receipt #${receiptId} from: ${BASE_URL}${historyEndpoint}`);
      const historyRes = await fetch(`${BASE_URL}${historyEndpoint}`, { headers });
      
      if (!historyRes.ok) {
        throw new Error(`Failed to fetch history: ${historyRes.status} ${historyRes.statusText}`);
      }
      
      const historyData = await historyRes.json();
      console.log('   [SUCCESS] History data received.');
      console.log(`   - History Records: ${historyData.length}`);
      
      if (historyData.length > 0) {
        console.log('   - Latest Change:', historyData[0]);
      } else {
        console.log('   - No history yet (expected if no edits made).');
      }
      
    } else {
      console.log('\n   [SKIP] No receipts available to test history fetch.');
    }
    
    console.log('\n--- UI Flow Simulation COMPLETED SUCCESSFULLY ---');
    console.log('The backend is ready. The frontend should work if configured to point to http://localhost:3000');

  } catch (error) {
    console.error('\n[FAILURE] Simulation Failed:', error.message);
    if (error.cause) console.error('Cause:', error.cause);
  }
}

// Run if called directly
// if (require.main === module) {
  simulateUIFlow();
// }
