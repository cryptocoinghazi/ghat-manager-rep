import { expect } from 'chai';
import axios from 'axios';
import { apiBase, getAdminToken } from './utils.js';

describe('API - Reports', () => {
  let token;
  before(async () => { token = await getAdminToken(); });

  it('partner royalty', async () => {
    const res = await axios.get(`${apiBase}/reports/partner-royalty?startDate=2025-12-01&endDate=2025-12-17`, { headers: { Authorization: `Bearer ${token}` } });
    expect(res.status).to.equal(200);
    expect(JSON.stringify(res.data)).not.to.include('SequelizeDatabaseError');
  });

  it('credit report', async () => {
    const res = await axios.get(`${apiBase}/reports/credit-report`, { headers: { Authorization: `Bearer ${token}` } });
    expect(res.status).to.equal(200);
  });

  it('daily summary', async () => {
    const today = new Date().toISOString().split('T')[0];
    const res = await axios.get(`${apiBase}/reports/daily-summary?date=${today}`, { headers: { Authorization: `Bearer ${token}` } });
    expect(res.status).to.equal(200);
  });

  it('financial CSV export', async () => {
    const res = await axios.get(`${apiBase}/reports/export/financial-csv?startDate=2025-12-01&endDate=2025-12-17`, { headers: { Authorization: `Bearer ${token}` }, responseType: 'text' });
    expect(res.status).to.equal(200);
    expect(res.headers['content-type']).to.include('text/csv');
  });

  it('expense summary', async () => {
    const res = await axios.get(`${apiBase}/reports/expense-summary?startDate=2025-12-01&endDate=2025-12-17`, { headers: { Authorization: `Bearer ${token}` } });
    expect(res.status).to.equal(200);
    expect(res.data).to.have.property('summary');
  });
});
