import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Working configuration from our test
const BROWSER_CONFIG = {
  headless: true,
  channel: 'chrome', // ← KEY FIX for Windows
  args: ['--no-sandbox']
};

// Helper function for delay (compatible with all Puppeteer versions)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function captureScreenshots(username, password) {
  console.log('📸 Starting screenshot capture for Ghat Manager...');
  console.log(`👤 Using credentials: ${username}`);
  
  let browser = null;
  let page = null;
  
  try {
    // 1. Launch browser with working config
    console.log('🚀 Launching browser...');
    browser = await puppeteer.launch(BROWSER_CONFIG);
    console.log('✅ Browser launched');
    
    page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    
    // 2. Navigate to app
    console.log('🌐 Navigating to app...');
    await page.goto('http://localhost:5000', { 
      waitUntil: 'domcontentloaded',
      timeout: 30000 
    });
    
    console.log(`📄 Page loaded: ${await page.title()}`);
    
    // 3. Check current page state
    const currentUrl = page.url();
    console.log(`📍 Current URL: ${currentUrl}`);
    
    // Check if already logged in (on dashboard)
    const initialContent = await page.content();
    if (currentUrl.includes('/dashboard') || 
        initialContent.includes('Welcome back') ||
        initialContent.includes('New Receipt')) {
      console.log('✅ Already on dashboard (might be logged in)');
    } else {
      // 4. Try to find and click login
      console.log('🔍 Looking for login button...');
      // Explicitly look for our topbar button
      await page.waitForSelector('button', { timeout: 5000 }).catch(() => {});
      const loginClicked = await page.evaluate(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const target = btns.find(b => (b.innerText || '').includes('Login to dashboard'));
        if (target) { target.click(); return true; }
        return false;
      });
      if (!loginClicked) console.log('⚠️ Login button not found, proceeding to check for form');
      
      // 5. Look for login form
      console.log('🔍 Looking for login form...');
      
      // Wait a bit for form to appear
      await delay(1000);
      
      // Check for form fields
      const usernameField = await page.$('input[type="text"]');
      const passwordField = await page.$('input[type="password"]');
      
      if (usernameField && passwordField) {
        console.log('✅ Found username/password fields');
        
        // Fill credentials
        await usernameField.click({ clickCount: 3 });
        await usernameField.type(username, { delay: 10 });
        await passwordField.type(password, { delay: 10 });
        
        // Find and click submit
        const submitFound = await page.evaluate(() => {
          const btns = Array.from(document.querySelectorAll('button'));
          const target = btns.find(b => (b.innerText || '').includes('Sign In'));
          if (target) { target.click(); return true; }
          return false;
        });
        
        if (submitFound) {
          console.log('✅ Found submit button, logging in...');
          
          // Wait for navigation/redirect
          await page.waitForFunction(() => {
            const body = document.body.innerText || '';
            return body.includes('Welcome back') || body.includes('New Receipt');
          }, { timeout: 15000 }).catch(() => console.log('Login verification timeout'));
          await delay(800);
        } else {
          console.log('⚠️ No submit button found, trying Enter key...');
          await passwordField.press('Enter');
          await page.waitForFunction(() => {
            const body = document.body.innerText || '';
            return body.includes('Welcome back') || body.includes('New Receipt');
          }, { timeout: 15000 }).catch(() => console.log('Login verification timeout'));
          await delay(800);
        }
      } else {
        console.log('❌ Could not find login form fields');
        console.log('💡 Taking screenshot of current page to debug...');
        await page.screenshot({ path: join(__dirname, '../../debug-login-page.png') });
      }
    }
    
    // 6. Verify login success
    console.log('\n🔐 Verifying login...');
    const newUrl = page.url();
    console.log(`📍 New URL: ${newUrl}`);
    
    // Check for dashboard indicators
    const pageContent = await page.content();
    const isDashboard = pageContent.includes('Dashboard') || 
                       pageContent.includes('Welcome back') ||
                       pageContent.includes('New Receipt') ||
                       newUrl.includes('/dashboard');
    
    if (isDashboard) {
      console.log('✅ Login successful! On dashboard.');
    } else {
      console.log('⚠️ Not on dashboard. Checking current page...');
      console.log(`Page title: ${await page.title()}`);
      
      // Save current page for debugging
      await page.screenshot({ path: join(__dirname, '../../debug-current-page.png') });
      console.log('📸 Debug screenshot saved: debug-current-page.png');
      
      // Check for error messages
      const errorElements = await page.$$x("//*[contains(text(), 'error') or contains(text(), 'Error') or contains(text(), 'Invalid')]");
      if (errorElements.length > 0) {
        console.log('❌ Found error messages on page');
      }
    }
    
    // 7. Create screenshots directory if it doesn't exist
    const screenshotsDir = join(__dirname, '../../client/public/assets');
    try {
      await fs.access(screenshotsDir);
    } catch {
      console.log(`📁 Creating screenshots directory: ${screenshotsDir}`);
      await fs.mkdir(screenshotsDir, { recursive: true });
    }
    
    // 8. Capture screenshots of key pages
    console.log('\n📸 Capturing screenshots...');
    
    // Dashboard
    console.log('  1. Dashboard...');
    await page.goto('http://localhost:5000/dashboard', { waitUntil: 'networkidle2' });
    await delay(1000);
    await page.screenshot({ 
      path: join(screenshotsDir, 'dashboard.png'),
      fullPage: true 
    });
    
    // Quick Receipt page
    console.log('  2. Quick Receipt page...');
    await page.goto('http://localhost:5000/receipt', { waitUntil: 'networkidle2' });
    await delay(1000);
    
    // Fill some sample data for better screenshot
    try {
      const ownerField = await page.$('input[name="truck_owner"], #truckOwner');
      if (ownerField) {
        await ownerField.type('Demo Truck Owner');
      }
      
      const vehicleField = await page.$('input[name="vehicle_number"], #vehicleNumber');
      if (vehicleField) {
        await vehicleField.type('MH-31-DEMO');
      }
      
      const qtyField = await page.$('input[name="brass_qty"], #brass_qty');
      if (qtyField) {
        await qtyField.type('2.5');
      }
    } catch (e) {
      // Ignore errors - just take screenshot as-is
    }
    
    await page.screenshot({ 
      path: join(screenshotsDir, 'receipt-form.png'),
      fullPage: true 
    });
    
    // Daily Register
    console.log('  3. Daily Register...');
    await page.goto('http://localhost:5000/register', { waitUntil: 'networkidle2' });
    await delay(1000);
    await page.screenshot({ 
      path: join(screenshotsDir, 'daily-register.png'),
      fullPage: true 
    });
    
    // Truck Owners (Settings)
    console.log('  4. Truck Owners...');
    await page.goto('http://localhost:5000/settings', { waitUntil: 'networkidle2' });
    await delay(1000);
    
    // Try to click on Truck Owners tab if it exists
    try {
      await page.waitForSelector('button', { timeout: 3000 });
      await page.evaluate(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const target = btns.find(b => (b.innerText || '').includes('Truck Owners'));
        if (target) target.click();
      });
      await delay(800);
    } catch (e) {
      // Continue without clicking
    }
    
    await page.screenshot({ 
      path: join(screenshotsDir, 'truck-owners.png'),
      fullPage: true 
    });
    
    // Reports
    console.log('  5. Reports...');
    await page.goto('http://localhost:5000/reports', { waitUntil: 'networkidle2' });
    await delay(1000);
    await page.screenshot({ 
      path: join(screenshotsDir, 'reports.png'),
      fullPage: true 
    });
    // Deposit report tab
    console.log('  5b. Reports - Deposit...');
    await page.goto('http://localhost:5000/reports/deposit', { waitUntil: 'networkidle2' });
    await delay(1000);
    await page.screenshot({ 
      path: join(screenshotsDir, 'reports-deposit.png'),
      fullPage: true 
    });
    
    // Settings
    console.log('  6. Settings...');
    await page.goto('http://localhost:5000/settings', { waitUntil: 'networkidle2' });
    await delay(1000);
    await page.screenshot({ 
      path: join(screenshotsDir, 'settings.png'),
      fullPage: true 
    });

    // Compatibility copies for marketing wiring
    try {
      await fs.copyFile(join(screenshotsDir, 'receipt-form.png'), join(screenshotsDir, 'receipt-a4.png'));
      await fs.copyFile(join(screenshotsDir, 'truck-owners.png'), join(screenshotsDir, 'settings-truck-owners.png'));
    } catch {}
    
    // 9. Print success message
    console.log('\n✅ Screenshots captured successfully!');
    console.log('📁 Location: client/public/assets/');
    console.log('   - dashboard.png');
    console.log('   - receipt-form.png');
    console.log('   - daily-register.png');
    console.log('   - truck-owners.png');
    console.log('   - reports.png');
    console.log('   - reports-deposit.png');
    console.log('   - settings.png');
    console.log('   - settings-truck-owners.png');
    console.log('   - receipt-a4.png');
    
    await browser.close();
    
  } catch (error) {
    console.error('\n❌ Screenshot capture failed:');
    console.error(error.message);
    
    // Save error screenshot if page exists
    if (page) {
      try {
        const errorPath = join(__dirname, '../../capture-error.png');
        await page.screenshot({ path: errorPath });
        console.log(`📸 Error screenshot saved: ${errorPath}`);
      } catch (e) {
        // Ignore
      }
    }
    
    if (browser) {
      await browser.close();
    }
    
    process.exit(1);
  }
}

// Get credentials from command line
const args = process.argv.slice(2);
const username = args[0] || 'admin';
const password = args[1] || 'Mansoor@9999'; // Your password

captureScreenshots(username, password);
