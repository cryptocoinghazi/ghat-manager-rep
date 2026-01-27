// Verify Backend and Owner Ledger Route

const API_URL = 'http://127.0.0.1:3000/api';
const LOCALHOST_URL = 'http://localhost:3000/api';

async function verify(baseUrl) {
  console.log(`\nTesting against: ${baseUrl}`);
  try {
    console.log('1. Attempting Login...');
    const loginRes = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'admin', password: 'password123' })
    });
    
    if (!loginRes.ok) {
        console.error('Login Failed:', await loginRes.text());
        return;
    }
    
    const data = await loginRes.json();
    const token = data.token;
    console.log('Login Successful. Token received.');

    console.log('2. Testing Owner Ledger Route (Owner ID: 1)...');
    const ledgerRes = await fetch(`${baseUrl}/payments/owner-ledger/1`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });

    console.log(`Ledger Response Status: ${ledgerRes.status}`);
    if (ledgerRes.ok) {
        const ledgerData = await ledgerRes.json();
        console.log('Ledger Data received successfully.');
    } else {
        console.error('Ledger Request Failed:', await ledgerRes.text());
    }

  } catch (error) {
    console.error(`Verification Error for ${baseUrl}:`, error.message);
  }
}

async function run() {
    await verify(API_URL);
    await verify(LOCALHOST_URL);
}

run();
