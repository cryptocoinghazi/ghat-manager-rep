const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';
const ASSETS_DIR = path.join(__dirname, '..', 'client', 'public', 'assets');

const username = process.argv[2] || process.env.ADMIN_USER || 'admin';
const password = process.argv[3] || process.env.ADMIN_PASS || '';

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function clickByXPath(page, xpath) {
  const [el] = await page.$x(xpath);
  if (!el) throw new Error(`Element not found for XPath: ${xpath}`);
  await el.click();
}

async function waitForXPath(page, xpath, timeout = 20000) {
  await page.waitForXPath(xpath, { timeout });
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
  const browser = await puppeteer.launch({ headless: true });
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
    await browser.close();
  }
}

run();

