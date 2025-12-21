import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';
const ASSETS_DIR = path.join(__dirname, '..', 'client', 'public', 'assets');

const username = process.argv[2] || process.env.ADMIN_USER || 'admin';
const password = process.argv[3] || process.env.ADMIN_PASS || 'Mansoor@9999';

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function clickByXPath(page, xpath) {
  const clicked = await page.evaluate((xp) => {
    const res = document.evaluate(xp, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    const el = res.singleNodeValue;
    if (el && typeof el.click === 'function') {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.click();
      return true;
    }
    return false;
  }, xpath);
  if (!clicked) throw new Error(`Element not found for XPath: ${xpath}`);
}

async function waitForXPath(page, xpath, timeout = 20000) {
  await page.waitForFunction(
    (xp) => {
      const r = document.evaluate(xp, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      return Boolean(r && r.singleNodeValue);
    },
    { timeout },
    xpath
  );
}

async function screenshot(page, fileName) {
  const filePath = path.join(ASSETS_DIR, fileName);
  await page.screenshot({ path: filePath, fullPage: true });
  console.log('Saved', filePath);
}

async function login(page) {
  await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
  await waitForXPath(page, "//button[contains(., 'Login to dashboard')]");
  await clickByXPath(page, "//button[contains(., 'Login to dashboard')]");
  await page.waitForSelector('input[type="text"]', { timeout: 20000 });
  await page.type('input[type="text"]', username, { delay: 20 });
  await page.type('input[type="password"]', password, { delay: 20 });
  await clickByXPath(page, "//button[contains(., 'Sign In')]");
  await waitForXPath(page, "//span[contains(., 'New Receipt')]");
}

async function run() {
  if (!password) {
    console.error('Password not provided. Usage: node scripts/capture-screenshots.js <username> <password>');
    process.exit(1);
  }

  await ensureDir(ASSETS_DIR);
  let browser;
  try {
    browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'] });
  } catch (e1) {
    try {
      browser = await puppeteer.launch({ headless: true, channel: 'chrome', args: ['--no-sandbox', '--disable-gpu'] });
    } catch (e2) {
      try {
        browser = await puppeteer.launch({ headless: true, channel: 'msedge', args: ['--no-sandbox', '--disable-gpu'] });
      } catch (e3) {
        console.error('Failed to launch browser with Puppeteer. Please ensure Chrome or Edge is installed, or set PUPPETEER_BROWSER_PATH.');
        console.error('Original error:', e1.message || e1);
        console.error('Chrome channel error:', e2.message || e2);
        console.error('Edge channel error:', e3.message || e3);
        process.exit(1);
      }
    }
  }
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900, deviceScaleFactor: 1 });

  try {
    await login(page);

    // Dashboard
    await screenshot(page, 'dashboard.png');

    // Receipt
    await page.goto(`${BASE_URL}/receipt`, { waitUntil: 'networkidle0' });
    await waitForXPath(page, "//h1[contains(., 'Sand Mining Billing')]");
    await screenshot(page, 'receipt-a4.png');

    // Daily Register
    await page.goto(`${BASE_URL}/register`, { waitUntil: 'networkidle0' });
    await page.waitForSelector('input[type="date"]', { timeout: 20000 });
    await screenshot(page, 'daily-register.png');

    // Expenses
    await page.goto(`${BASE_URL}/expenses`, { waitUntil: 'networkidle0' });
    await page.waitForSelector('button, table', { timeout: 20000 });
    await screenshot(page, 'expenses.png');

    // Reports (credit & summary)
    await page.goto(`${BASE_URL}/reports`, { waitUntil: 'networkidle0' });
    await page.waitForSelector('div', { timeout: 20000 });
    await screenshot(page, 'reports.png');

    // Reports Deposit
    await page.goto(`${BASE_URL}/reports/deposit`, { waitUntil: 'networkidle0' });
    await page.waitForSelector('div', { timeout: 20000 });
    await screenshot(page, 'reports-deposit.png');

    // Settings: Truck Owners
    await page.goto(`${BASE_URL}/settings`, { waitUntil: 'networkidle0' });
    await waitForXPath(page, "//button[contains(., 'Truck Owners')]");
    await clickByXPath(page, "//button[contains(., 'Truck Owners')]");
    await page.waitForSelector('table, button', { timeout: 20000 });
    await screenshot(page, 'settings-truck-owners.png');

    // Settings: Receipt
    await waitForXPath(page, "//button[contains(., 'Receipt')]");
    await clickByXPath(page, "//button[contains(., 'Receipt')]");
    await page.waitForSelector('input, label', { timeout: 20000 });
    await screenshot(page, 'settings-receipt.png');

    console.log('All screenshots captured successfully.');
  } catch (err) {
    console.error('Screenshot capture failed:', err);
    process.exitCode = 1;
  } finally {
    try { await browser.close(); } catch {}
  }
}

run();
