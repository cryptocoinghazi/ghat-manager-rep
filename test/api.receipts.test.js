import { expect } from 'chai';
import axios from 'axios';
import { apiBase, getAdminToken } from './utils.js';

describe('API - Receipts', () => {
  let token;
  let receiptId;
  let totalAmount;
  const truckOwner = `Owner-${Date.now()}`;

  before(async () => {
    token = await getAdminToken();
    await axios.post(`${apiBase}/settings/truck-owners`, { name: truckOwner, phone: '999', address: 'Addr', vehicle_number: 'MH-12-XY-9876' }, { headers: { Authorization: `Bearer ${token}` } });
  });

  it('creates a receipt', async () => {
    const payload = {
      truck_owner: truckOwner,
      vehicle_number: 'MH-12-AB-1234',
      brass_qty: 1.5,
      rate: 1200,
      loading_charge: 100,
      cash_paid: 500,
      notes: 'Initial load',
      payment_method: 'cash'
    };
    totalAmount = payload.brass_qty * payload.rate + payload.loading_charge;
    const res = await axios.post(`${apiBase}/receipts`, payload, { headers: { Authorization: `Bearer ${token}` } });
    expect(res.status).to.equal(201);
    expect(res.data.receipt).to.exist;
    receiptId = res.data.receipt.id;
  });

  it('updates receipt payment and notes', async () => {
    const res = await axios.put(`${apiBase}/receipts/${receiptId}`, { cash_paid: totalAmount, notes: 'Paid in full' }, { headers: { Authorization: `Bearer ${token}` } });
    expect(res.status).to.equal(200);
    expect(res.data.receipt.payment_status).to.equal('paid');
  });

  it('filters receipts by date range', async () => {
    const start = new Date(); start.setDate(start.getDate()-1);
    const end = new Date();
    const res = await axios.get(`${apiBase}/receipts?startDate=${start.toISOString()}&endDate=${end.toISOString()}&limit=5`, { headers: { Authorization: `Bearer ${token}` } });
    expect(res.status).to.equal(200);
    expect(res.data.receipts).to.be.an('array');
  });
});
