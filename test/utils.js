import axios from 'axios';

export const apiBase = process.env.API_BASE || 'http://localhost:3000/api';

export async function getAdminToken(retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const login = await axios.post(`${apiBase}/auth/login`, { username: 'admin', password: 'Mansoor@9999' }, { headers: { 'Content-Type': 'application/json' } });
      return login.data.token;
    } catch (e) {
      try {
        await axios.post(`${apiBase}/auth/register`, { username: 'admin', password: 'Mansoor@9999', role: 'admin' }, { headers: { 'Content-Type': 'application/json' } });
      } catch {}
      await new Promise(r => setTimeout(r, 250));
    }
  }
  const login = await axios.post(`${apiBase}/auth/login`, { username: 'admin', password: 'Mansoor@9999' }, { headers: { 'Content-Type': 'application/json' } });
  return login.data.token;
}

