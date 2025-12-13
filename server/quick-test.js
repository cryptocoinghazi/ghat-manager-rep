// server/scripts/windows-puppeteer-test.js
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function testPuppeteerOnWindows() {
  console.log('🪟 Windows Puppeteer Diagnostic');
  console.log('================================\n');
  
  // Common Chrome paths on Windows
  const chromePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.env.CHROME_PATH,
    process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
    process.env.PROGRAMFILES + '\\Google\\Chrome\\Application\\chrome.exe',
    process.env['PROGRAMFILES(X86)'] + '\\Google\\Chrome\\Application\\chrome.exe'
  ].filter(Boolean);

  console.log('🔍 Checking Chrome installation...');
  
  for (const path of chromePaths) {
    if (fs.existsSync(path)) {
      console.log(`✅ Chrome found at: ${path}`);
      break;
    }
  }

  console.log('\n1️⃣ Testing different launch configurations...');

  const testConfigs = [
    {
      name: 'Default launch',
      options: { 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    },
    {
      name: 'With channel',
      options: { 
        headless: true,
        channel: 'chrome',
        args: ['--no-sandbox']
      }
    },
    {
      name: 'New headless',
      options: { 
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    },
    {
      name: 'Headful (visible)',
      options: { 
        headless: false,
        args: ['--no-sandbox']
      }
    },
    {
      name: 'With specific executable',
      options: { 
        headless: true,
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    }
  ];

  let browser = null;

  for (const config of testConfigs) {
    console.log(`\n   Testing: ${config.name}...`);
    
    try {
      browser = await puppeteer.launch(config.options);
      console.log(`   ✅ ${config.name}: SUCCESS`);
      
      // Test basic navigation
      const page = await browser.newPage();
      await page.goto('http://localhost:5000', { waitUntil: 'networkidle0', timeout: 10000 });
      console.log(`   ✅ Navigated to: ${await page.title()}`);
      
      await page.screenshot({ path: `test-${config.name.replace(/\s+/g, '-')}.png` });
      console.log(`   ✅ Screenshot saved: test-${config.name.replace(/\s+/g, '-')}.png`);
      
      await browser.close();
      console.log('\n🎉 SUCCESS! Puppeteer is working.');
      console.log('Use this configuration in your capture script:', config.options);
      return config.options;
      
    } catch (error) {
      console.log(`   ❌ ${config.name}: FAILED - ${error.message}`);
      if (browser && browser.isConnected()) {
        await browser.close();
      }
      browser = null;
      continue;
    }
  }

  console.log('\n❌ All launch configurations failed.');
  console.log('\n💡 TROUBLESHOOTING STEPS:');
  console.log('1. Install Google Chrome: https://www.google.com/chrome/');
  console.log('2. Or install Chromium:');
  console.log('   npm install puppeteer-core');
  console.log('   Then use: executablePath: "path/to/chromium.exe"');
  console.log('3. Run as Administrator (right-click terminal → Run as administrator)');
  console.log('4. Disable Windows Defender temporarily for testing');
  
  return null;
}

// Run the diagnostic
testPuppeteerOnWindows().then(config => {
  if (config) {
    console.log('\n✅ Diagnostic complete. Use this working config in your scripts.');
    process.exit(0);
  } else {
    console.log('\n❌ Diagnostic failed. See troubleshooting steps above.');
    process.exit(1);
  }
});