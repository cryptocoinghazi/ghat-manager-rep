// import axios from 'axios';
// import { expect } from 'chai';

const BASE_URL = 'http://localhost:3000/api';
let token;
let ownerId;
let receiptId;

// Helper wrapper for fetch
async function request(url, method = 'GET', body = null) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const options = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  };

  const res = await fetch(url, options);
  const data = await res.json().catch(() => ({}));
  
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${JSON.stringify(data)}`);
  }
  return data;
}

async function testBulkDeposit() {
  console.log('Starting Bulk Deposit Test...');

  // Login
  try {
    const data = await request(`${BASE_URL}/auth/login`, 'POST', { username: 'admin', password: 'password123' });
    token = data.token;
    console.log('Login successful');
  } catch (err) {
    console.error('Login failed:', err.message);
    process.exit(1);
  }

  // 1. Create Truck Owner
  const ownerName = `DepositTest-${Date.now()}`;
  try {
    const data = await request(`${BASE_URL}/settings/truck-owners`, 'POST', {
      name: ownerName,
      phone: '9999999999',
      address: 'Test Address',
      vehicle_number: 'MH-TEST-01'
    });
    console.log('Owner creation response:', JSON.stringify(data, null, 2));
    ownerId = data.owner ? data.owner.id : undefined;
    console.log('Owner created ID:', ownerId);
  } catch (err) {
    console.error('Create owner failed:', err.message);
  }

  // 2. Create Receipt (Pending 1000)
  try {
    const data = await request(`${BASE_URL}/receipts`, 'POST', {
      truck_owner: ownerName,
      vehicle_number: 'MH-TEST-01',
      brass_qty: 10,
      rate: 100,
      total_amount: 1000,
      cash_paid: 0,
      payment_status: 'pending'
    });
    receiptId = data.receipt.id;
    console.log('Receipt created:', receiptId);
  } catch (err) {
    console.error('Create receipt failed:', err.message);
  }

  // 3. Make Bulk Payment (1500 -> 1000 for bill, 500 for deposit)
  try {
    const data = await request(`${BASE_URL}/payments/bulk`, 'POST', {
      ownerId,
      amount: 1500,
      paymentMode: 'cash',
      notes: 'Test overpayment'
    });
    console.log('Bulk payment response:', data);

    if (data.depositAdded !== 500) {
        console.error(`FAILED: Expected depositAdded 500, got ${data.depositAdded}`);
    } else {
        console.log('SUCCESS: Deposit added correctly in response');
    }
  } catch (err) {
    console.error('Bulk payment failed:', err.message);
  }

  // 4. Verify Owner Deposit Balance
  try {
    const data = await request(`${BASE_URL}/payments/owner-ledger/${ownerId}`);
    const balance = parseFloat(data.owner.deposit_balance);
    console.log('Owner Deposit Balance:', balance);
    
    if (balance === 500) {
        console.log('SUCCESS: Owner balance updated correctly');
    } else {
        console.error(`FAILED: Expected balance 500, got ${balance}`);
    }
  } catch (err) {
    console.error('Fetch ledger failed:', err.message);
  }
}

testBulkDeposit();
