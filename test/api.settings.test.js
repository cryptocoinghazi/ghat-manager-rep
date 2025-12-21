import { expect } from 'chai';
import axios from 'axios';
import { apiBase, getAdminToken } from './utils.js';

describe('API - Settings & Truck Owners', () => {
  let token;
  before(async () => { token = await getAdminToken(); });

  it('fetches settings (admin)', async () => {
    const res = await axios.get(`${apiBase}/settings`, { headers: { Authorization: `Bearer ${token}` } });
    expect(res.status).to.equal(200);
    expect(res.data).to.have.property('categorized');
  });

  it('creates a truck owner', async () => {
    const owner = { name: `Owner-${Date.now()}`, phone: '9999999999', address: 'Test Address', vehicle_number: 'MH-01-AB-0001' };
    const res = await axios.post(`${apiBase}/settings/truck-owners`, owner, { headers: { Authorization: `Bearer ${token}` } });
    expect(res.status).to.equal(200);
  });
});
