import { getDB } from '../db.js';

export async function generateReceiptNumber(db) {
  // Get settings for receipt number
  const settings = await db.all('SELECT * FROM settings WHERE key IN (?, ?)', 
    ['receipt_prefix', 'receipt_start']);
  
  const settingsObj = {};
  settings.forEach(s => { settingsObj[s.key] = s.value; });
  
  const prefix = settingsObj.receipt_prefix || 'GM';
  const startNumber = parseInt(settingsObj.receipt_start) || 9001;
  
  // Get last receipt number
  const lastReceipt = await db.get(
    'SELECT receipt_no FROM receipts ORDER BY id DESC LIMIT 1'
  );
  
  let nextNumber = startNumber;
  
  if (lastReceipt && lastReceipt.receipt_no) {
    // Extract number from last receipt
    const lastNum = parseInt(lastReceipt.receipt_no.replace(/\D/g, '')) || startNumber - 1;
    nextNumber = lastNum + 1;
  }
  
  return `${prefix}${nextNumber.toString().padStart(4, '0')}`;
}