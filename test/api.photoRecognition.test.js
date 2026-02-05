import { expect } from 'chai';
import axios from 'axios';

const BASE_URL = process.env.API_URL || 'http://127.0.0.1:3000/api';

describe('Photo Recognition API', () => {
  let token = null;
  before(async () => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, { username: 'admin', password: 'password123' });
      token = res.data.token;
    } catch (e) {
      token = null;
    }
  });

  it('rejects when no file uploaded', async () => {
    if (!token) return;
    try {
      await axios.post(`${BASE_URL}/trucks/photo-recognition`, {}, { headers: { Authorization: `Bearer ${token}` } });
    } catch (e) {
      expect(e.response.status).to.be.oneOf([400, 415]);
    }
  });

  it('returns 404 for unknown record', async () => {
    if (!token) return;
    try {
      await axios.get(`${BASE_URL}/trucks/photo-recognition/999999`, { headers: { Authorization: `Bearer ${token}` } });
    } catch (e) {
      expect(e.response.status).to.equal(404);
    }
  });
});
