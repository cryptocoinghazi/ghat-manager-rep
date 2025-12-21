import puppeteer from 'puppeteer';
import { expect } from 'chai';
import axios from 'axios';

describe('Ghat Manager Tests', () => {
  let token;
  const apiBase = process.env.API_BASE || 'http://localhost:3000/api';
  const uiBase = process.env.UI_BASE || 'http://localhost:5000';

  describe('API Tests', () => {
    it('should login successfully', async () => {
      try {
        const res = await axios.post(`${apiBase}/auth/login`, {
          username: 'admin',
          password: 'Mansoor@9999'
        }, { headers: { 'Content-Type': 'application/json' } });
        expect(res.status).to.equal(200);
        expect(res.data.token).to.exist;
        token = res.data.token;
      } catch (e) {
        const reg = await axios.post(`${apiBase}/auth/register`, {
          username: 'admin',
          password: 'Mansoor@9999',
          role: 'admin'
        }, { headers: { 'Content-Type': 'application/json' } });
        expect(reg.status).to.equal(201);
        const res = await axios.post(`${apiBase}/auth/login`, {
          username: 'admin',
          password: 'Mansoor@9999'
        });
        expect(res.status).to.equal(200);
        expect(res.data.token).to.exist;
        token = res.data.token;
      }
    });

    it('should generate partner royalty report without SQL errors', async () => {
      const res = await axios.get(
        `${apiBase}/reports/partner-royalty?startDate=2025-12-01&endDate=2025-12-17`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      expect(res.status).to.equal(200);
      expect(JSON.stringify(res.data)).not.to.include('SequelizeDatabaseError');
    });

    it('should return expense summary', async () => {
      const res = await axios.get(
        `${apiBase}/reports/expense-summary?startDate=2025-12-01&endDate=2025-12-17`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      expect(res.status).to.equal(200);
      expect(res.data).to.have.property('summary');
    });

    it('should export financial CSV', async () => {
      const res = await axios.get(
        `${apiBase}/reports/export/financial-csv?startDate=2025-12-01&endDate=2025-12-17`,
        { headers: { Authorization: `Bearer ${token}` }, responseType: 'text' }
      );
      expect(res.status).to.equal(200);
      expect(res.headers['content-type']).to.include('text/csv');
    });
  });

  describe('UI Tests', () => {
    let browser, page;

    before(async function () {
      try {
        browser = await puppeteer.launch({ headless: true });
        page = await browser.newPage();
      } catch (e) {
        this.skip();
      }
    });

    after(async () => { if (browser) await browser.close(); });

    it('should load login page', async () => {
      await page.goto(uiBase);
      await page.waitForSelector('button');
      const title = await page.title();
      expect(title).to.include('Ghat');
    });

    it('should login and navigate to dashboard', async () => {
      const [loginBtn] = await page.$x("//button[contains(., 'Login to dashboard')]");
      if (loginBtn) { await loginBtn.click(); }
      await page.waitForSelector("input[placeholder='Enter username']");
      await page.type("input[placeholder='Enter username']", 'admin');
      await page.type("input[placeholder='Enter password']", 'Mansoor@9999');
      await page.click("button[type='submit']");
      await page.waitForFunction(() => document.body.innerText.includes('Welcome back'));
    });
  });
});
