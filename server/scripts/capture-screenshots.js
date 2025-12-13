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
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    console.log(`📄 Page loaded: ${await page.title()}`);
    
    // 3. Check current page state
    const currentUrl = page.url();
    console.log(`📍 Current URL: ${currentUrl}`);
    
    // Check if already logged in (on dashboard)
    if (currentUrl.includes('/dashboard') || 
        (await page.content()).includes('Dashboard') ||
        (await page.content()).includes('Today\'s Trucks')) {
      console.log('✅ Already on dashboard (might be logged in)');
    } else {
      // 4. Try to find and click login
      console.log('🔍 Looking for login button...');
      
      // Try different login button selectors
      const loginSelectors = [
        'button:contains("Login")',
        'button:contains("LOGIN")',
        'a:contains("Login")',
        '[href*="login"]'
      ];
      
      let loginClicked = false;
      for (const selector of loginSelectors) {
        try {
          const loginBtn = await page.$(selector);
          if (loginBtn) {
            console.log(`✅ Found login element: ${selector}`);
            await loginBtn.click();
            await delay(2000);
            loginClicked = true;
            break;
          }
        } catch (e) {
          continue;
        }
      }
      
      if (!loginClicked) {
        console.log('⚠️ Could not find login button, trying to find form directly...');
      }
      
      // 5. Look for login form
      console.log('🔍 Looking for login form...');
      
      // Wait a bit for form to appear
      await delay(2000);
      
      // Check for form fields
      const usernameField = await page.$('input[name="username"], input[type="text"], input[placeholder*="username"], input[placeholder*="Username"]');
      const passwordField = await page.$('input[name="password"], input[type="password"], input[placeholder*="password"], input[placeholder*="Password"]');
      
      if (usernameField && passwordField) {
        console.log('✅ Found username/password fields');
        
        // Fill credentials
        await usernameField.type(username);
        await passwordField.type(password);
        
        // Find and click submit
        const submitButton = await page.$('button[type="submit"], button:contains("Sign In"), input[type="submit"]');
        
        if (submitButton) {
          console.log('✅ Found submit button, logging in...');
          await submitButton.click();
          
          // Wait for navigation/redirect
          await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 10000 })
            .catch(() => console.log('Navigation timeout, continuing...'));
          
          await delay(3000);
        } else {
          console.log('⚠️ No submit button found, trying Enter key...');
          await passwordField.press('Enter');
          await delay(3000);
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
                       pageContent.includes('Today\'s Trucks') ||
                       pageContent.includes('Quick Receipt') ||
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
    await page.goto('http://localhost:5000/receipts/new', { waitUntil: 'networkidle2' });
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
    await page.goto('http://localhost:5000/receipts', { waitUntil: 'networkidle2' });
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
      const ownersTab = await page.$x("//button[contains(., 'Truck Owners') or contains(., 'Owners')]");
      if (ownersTab.length > 0) {
        await ownersTab[0].click();
        await delay(1000);
      }
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
    
    // Settings
    console.log('  6. Settings...');
    await page.goto('http://localhost:5000/settings', { waitUntil: 'networkidle2' });
    await delay(1000);
    await page.screenshot({ 
      path: join(screenshotsDir, 'settings.png'),
      fullPage: true 
    });
    
    // 9. Print success message
    console.log('\n✅ Screenshots captured successfully!');
    console.log('📁 Location: client/public/assets/');
    console.log('   - dashboard.png');
    console.log('   - receipt-form.png');
    console.log('   - daily-register.png');
    console.log('   - truck-owners.png');
    console.log('   - reports.png');
    console.log('   - settings.png');
    
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