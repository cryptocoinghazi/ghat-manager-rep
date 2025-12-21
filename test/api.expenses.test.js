import { expect } from 'chai';
import axios from 'axios';
import { apiBase, getAdminToken } from './utils.js';

describe('API - Expenses', () => {
  let token;
  let expenseId;
  before(async () => { token = await getAdminToken(); });

  it('gets categories', async () => {
    const res = await axios.get(`${apiBase}/expenses/categories`, { headers: { Authorization: `Bearer ${token}` } });
    expect(res.status).to.equal(200);
    expect(res.data).to.be.an('array');
  });

  it('creates expense', async () => {
    const payload = {
      date: new Date().toISOString().split('T')[0],
      category: 'TRANSPORT',
      description: 'Diesel',
      amount: 750,
      ghat_location: 'Main Ghat'
    };
    const res = await axios.post(`${apiBase}/expenses`, payload, { headers: { Authorization: `Bearer ${token}` } });
    expect(res.status).to.equal(200);
    expenseId = res.data.id;
  });

  it('updates expense', async () => {
    const res = await axios.put(`${apiBase}/expenses/${expenseId}`, { amount: 800, description: 'Diesel - updated' }, { headers: { Authorization: `Bearer ${token}` } });
    expect(res.status).to.equal(200);
  });

  it('deletes expense (admin only)', async () => {
    const res = await axios.delete(`${apiBase}/expenses/${expenseId}`, { headers: { Authorization: `Bearer ${token}` } });
    expect(res.status).to.equal(200);
  });
});
