const truncate = (text = '', max = 32) => {
  const t = String(text);
  return t.length > max ? t.slice(0, max - 1) + '…' : t;
};

const padLine = (label, value, width = 32) => {
  const l = label.trim();
  const v = value.trim();
  const spaces = Math.max(1, width - l.length - v.length);
  return `${l}${' '.repeat(spaces)}${v}`;
};

const centerText = (text, width = 32) => {
  const t = text.trim();
  const pad = Math.max(0, Math.floor((width - t.length) / 2));
  return `${' '.repeat(pad)}${t}`;
};

const formatAmount = (currency, val) => {
  const num = Number(val || 0);
  return `${currency || '₹'}${num.toFixed(2)}`;
};

const toIST = (iso) => {
  const d = iso ? new Date(iso) : new Date();
  const date = d.toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata'
  });
  const time = d.toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'Asia/Kolkata'
  });
  return { date, time };
};

const buildCSS = (width = '58mm') => {
  const mm = width === '80mm' ? '80mm' : '58mm';
  return `
body { width: ${mm}; margin: 0; padding: 2mm; font-family: Courier New, monospace; font-size: 10px; line-height: 1.2; }
.receipt-container { width: 100%; max-width: ${mm}; }
.header { text-align: center; font-weight: bold; margin-bottom: 3mm; }
.divider { border-top: 1px dashed #000; margin: 3mm 0; }
.line { white-space: pre; }
.no-print { display: none; }
@media print { @page { margin: 0; size: ${mm} auto; } }
`;
};

const buildSectionLines = (pairs, widthChars) => {
  return pairs.map(([label, value]) => padLine(label + ':', value, widthChars)).join('\n');
};

const barcodeImg = (receiptNo) => {
  // Simple QR via public API as optional fallback; can be disabled in offline environments
  const data = encodeURIComponent(receiptNo || '');
  return `<img alt="QR" style="display:block;margin:2mm auto;" src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${data}"/>`;
};

export const generateThermalReceiptHTML = (receipt, settings = {}) => {
  const currency = settings.currency || '₹';
  const unit = settings.unit || 'Brass';
  const widthOpt = settings.printer_width === '80mm' ? '80mm' : '58mm';
  const widthChars = widthOpt === '80mm' ? 48 : 32;
  const owner = truncate(receipt.truck_owner || '-', 20);
  const vehicle = truncate(receipt.vehicle_number || '-', 15);
  const { date, time } = toIST(receipt.date_time);

  const headerLines = [
    '='.repeat(widthChars),
    centerText('SAND MINING GATE PASS', widthChars),
    '='.repeat(widthChars),
    padLine('Receipt', receipt.receipt_no || '-', widthChars),
    padLine('Date', date, widthChars),
    padLine('Time', time, widthChars),
    '-'.repeat(widthChars)
  ].join('\n');

  const infoLines = [
    buildSectionLines([
      ['OWNER', owner],
      ['VEHICLE', vehicle],
      ['TYPE', (receipt.is_partner ? 'PARTNER' : 'REGULAR')]
    ], widthChars),
    '-'.repeat(widthChars)
  ].join('\n');

  const qty = Number(receipt.brass_qty || 0);
  const rate = Number(receipt.rate || 0);
  const loading = Number(receipt.loading_charge || 0);
  const material = qty * rate;
  const total = Number(receipt.total_amount || material + loading);
  const cash = Number(receipt.cash_paid || 0);
  const depositUsed = Number(receipt.deposit_deducted || 0);
  const balance = Math.max(0, total - cash - depositUsed);

  const txnLines = [
    buildSectionLines([
      ['QTY', `${qty} ${unit}`],
      ['RATE', `${currency}${rate.toFixed(2)}/${unit.toLowerCase()}`],
      ['MATERIAL', formatAmount(currency, material)],
      ['LOADING', formatAmount(currency, loading)],
      ['TOTAL', formatAmount(currency, total)]
    ], widthChars),
    '-'.repeat(widthChars)
  ].join('\n');

  const payLines = [
    buildSectionLines([
      ['PAYMENT', receipt.payment_method ? receipt.payment_method.toUpperCase() : (depositUsed > 0 ? 'DEPOSIT' : (cash >= total ? 'CASH' : 'CREDIT'))],
      ['CASH PAID', formatAmount(currency, cash)],
      ['DEPOSIT USED', formatAmount(currency, depositUsed)],
      ['BALANCE', formatAmount(currency, balance)]
    ], widthChars),
    '-'.repeat(widthChars)
  ].join('\n');

  const footerLines = [
    'Thank You!',
    'Visit Again',
    '='.repeat(widthChars)
  ].join('\n');

  const includeBarcode = String(settings.include_barcode || 'false') === 'true';
  const logoText = settings.quarry_name ? `<div class="header">${settings.quarry_name}</div>` : '';

  const content = `
<div class="receipt-container">
  ${logoText}
  <div class="line">${headerLines}</div>
  <div class="line">${infoLines}</div>
  <div class="line">${txnLines}</div>
  <div class="line">${payLines}</div>
  ${includeBarcode ? barcodeImg(receipt.receipt_no) : ''}
  <div class="line">${footerLines}</div>
</div>
`;

  const duplicate = String(settings.print_duplicate || 'false') === 'true';
  const duplicateNote = duplicate ? `<div class="divider"></div><div class="header">Duplicate Copy</div>${content}` : '';

  return `
<style>${buildCSS(widthOpt)}</style>
${content}
${duplicateNote}
`;
};

export const printThermalReceipt = (receipt, settings = {}) => {
  const html = generateThermalReceiptHTML(receipt, settings);
  const w = window.open('', '_blank');
  if (!w) return;
  w.document.write(`
  <html>
    <head>
      <title>Receipt ${receipt.receipt_no || ''}</title>
    </head>
    <body>
      ${html}
      <script>
        window.onload = () => {
          try { window.print(); } catch (e) {}
          setTimeout(() => window.close(), 1200);
        };
      <\/script>
    </body>
  </html>
  `);
};

export default printThermalReceipt;
