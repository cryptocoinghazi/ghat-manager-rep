import { expect } from 'chai';
import axios from 'axios';
import { apiBase, getAdminToken } from './utils.js';

describe('API - Auth', () => {
  it('obtains admin token', async () => {
    const token = await getAdminToken();
    expect(token).to.be.a('string').that.is.not.empty;
  });

  it('verifies token', async () => {
    const token = await getAdminToken();
    const verify = await axios.post(`${apiBase}/auth/verify`, {}, { headers: { Authorization: `Bearer ${token}` } });
    expect(verify.status).to.equal(200);
    expect(verify.data.valid).to.equal(true);
  });
});
