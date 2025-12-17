import { expect } from 'chai';
import puppeteer from 'puppeteer';

const uiBase = process.env.UI_BASE || 'http://localhost:5000';

describe('UI - Smoke', () => {
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

  it('loads login and navigates to dashboard', async () => {
    await page.goto(uiBase);
    const [loginBtn] = await page.$x("//button[contains(., 'Login to dashboard')]");
    if (loginBtn) await loginBtn.click();
    await page.waitForSelector("input[placeholder='Enter username']");
    await page.type("input[placeholder='Enter username']", 'admin');
    await page.type("input[placeholder='Enter password']", 'Mansoor@9999');
    await page.click("button[type='submit']");
    await page.waitForFunction(() => document.body.innerText.includes('Welcome back'));
    const content = await page.content();
    expect(content).to.include('Welcome back');
  });
});

