import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { format } from 'date-fns';

// Helper: Format Date to IST
const formatDateIST = (date) => {
  if (!date) return '-';
  return new Date(date).toLocaleDateString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

const formatTimeIST = (date) => {
  if (!date) return '-';
  return new Date(date).toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const formatCurrencyPDF = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(amount);
};

const addHeader = (doc, title, subtitle) => {
  doc.setFontSize(18);
  doc.text(title, 14, 22);
  doc.setFontSize(11);
  doc.text(subtitle, 14, 32);
  return 40; // Y position
};

const addSummaryBox = (doc, title, value, x, y, width, color) => {
  doc.setFillColor(...color);
  doc.rect(x, y, width, 25, 'F');
  doc.setTextColor(255);
  doc.setFontSize(10);
  doc.text(title, x + width/2, y + 8, { align: 'center' });
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.text(String(value), x + width/2, y + 18, { align: 'center' });
  doc.setFont(undefined, 'normal');
  doc.setTextColor(0);
};

const addFooter = (doc) => {
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: 'center' });
  }
};

export function generatePDF(receiptData, settings = {}) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: [80, 200] // 80mm thermal receipt width approx
  });

  // Dynamic unit
  const unit = receiptData.unit || settings.unit || 'Brass';

  // Add watermark
  doc.setTextColor(200, 200, 200);
  doc.setFontSize(40);
  // doc.text('GATE PASS', 40, 50, { angle: 45, align: 'center' });

  // Reset color
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(8);

  // Company header
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(receiptData.quarry_name || 'MUKINDPUR SAND QUARRY', 40, 10, { align: 'center' });
  
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text(receiptData.quarry_address || 'Mukindpur, District Office', 40, 15, { align: 'center' });

  // Separator line
  doc.setLineWidth(0.5);
  doc.line(5, 18, 75, 18);

  // Receipt details
  let y = 25;

  // Receipt number and date
  doc.setFont('helvetica', 'bold');
  doc.text('Receipt No:', 5, y);
  doc.text(receiptData.receipt_no, 25, y);
  y += 5;
  
  doc.text('Date:', 5, y);
  doc.text(formatDateIST(receiptData.date_time), 25, y);
  y += 5;

  // Time
  doc.text('Time:', 5, y);
  doc.text(formatTimeIST(receiptData.date_time), 25, y);
  y += 5;

  // Separator
  doc.setLineWidth(0.2);
  doc.line(5, y, 75, y);
  y += 5;

  // Truck details
  doc.setFont('helvetica', 'bold');
  doc.text('Owner:', 5, y);
  doc.setFont('helvetica', 'normal');
  doc.text(receiptData.truck_owner, 25, y, { maxWidth: 50 });
  y += 5;

  doc.setFont('helvetica', 'bold');
  doc.text('Vehicle:', 5, y);
  doc.setFont('helvetica', 'normal');
  doc.text(receiptData.vehicle_number, 25, y);
  y += 5;

  // Separator
  doc.line(5, y, 75, y);
  y += 5;

  // Transaction details
  const details = [
    ['Quantity:', `${receiptData.brass_qty} ${unit}`],
    ['Rate:', `${receiptData.currency || '₹'}${receiptData.rate}/${unit}`],
    ['Loading:', `${receiptData.currency || '₹'}${receiptData.loading_charge}`],
  ];

  details.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(label, 5, y);
    doc.setFont('helvetica', 'normal');
    doc.text(value, 35, y);
    y += 5;
  });

  // Separator
  doc.setLineWidth(0.5);
  doc.line(5, y, 75, y);
  y += 5;

  // Total amount
  doc.setFont('helvetica', 'bold');
  doc.text('TOTAL:', 5, y);
  doc.setFontSize(10);
  doc.text(`${receiptData.currency || '₹'}${receiptData.total_amount}`, 35, y);
  doc.setFontSize(8);
  y += 6;

  // Payment details
  doc.setFont('helvetica', 'bold');
  doc.text('Cash:', 5, y);
  doc.setFont('helvetica', 'normal');
  doc.text(`${receiptData.currency || '₹'}${receiptData.cash_paid}`, 35, y);
  y += 5;

  doc.setFont('helvetica', 'bold');
  doc.text('Credit:', 5, y);
  doc.setFont('helvetica', 'normal');
  const creditColor = receiptData.credit_amount > 0 ? [255, 0, 0] : [0, 0, 0];
  doc.setTextColor(...creditColor);
  doc.text(`${receiptData.currency || '₹'}${receiptData.credit_amount}`, 35, y);
  doc.setTextColor(0, 0, 0);
  y += 8;

  // Payment status stamp
  const status = receiptData.payment_status || 
    (receiptData.credit_amount > 0 ? 'CREDIT' : 'PAID');
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  
  if (status.toUpperCase() === 'PAID' || parseFloat(receiptData.credit_amount) === 0) {
    doc.setTextColor(0, 128, 0);
    doc.text('PAID', 55, y, { align: 'center', angle: -15 });
  } else if (status.toUpperCase() === 'PARTIAL') {
    doc.setTextColor(255, 165, 0);
    doc.text('PARTIAL', 55, y, { align: 'center', angle: -15 });
  } else {
    doc.setTextColor(255, 0, 0);
    doc.text('CREDIT', 55, y, { align: 'center', angle: -15 });
  }

  // Reset color
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(8);
  y += 5;

  // Footer with signature
  doc.setLineWidth(0.2);
  doc.line(5, y + 15, 30, y + 15); // Driver
  doc.line(45, y + 15, 75, y + 15); // Manager
  
  doc.text('Driver', 10, y + 19);
  doc.text('Manager', 55, y + 19);

  y += 25;

  // Terms
  doc.setFontSize(6);
  doc.text('Subject to Mukindpur Jurisdiction.', 40, y, { align: 'center' });

  // Open print dialog
  doc.autoPrint();
  window.open(doc.output('bloburl'), '_blank');
}

export function generateDailyTransactionsPDF(data, unit = 'Qty') {
  try {
    const doc = new jsPDF('l', 'mm', 'a4');
    const transactions = data.transactions || [];
    
    // Title
    doc.setFontSize(18);
    doc.text('Daily Transactions Report', 14, 20);
    doc.setFontSize(10);
    doc.text(`Generated on: ${formatDateIST(new Date())}`, 14, 28);
    
    // Summary
    if (data.totals) {
      doc.text(`Total Transactions: ${transactions.length}`, 14, 34);
      doc.text(`Total Amount: ₹${data.totals.amount}`, 60, 34);
      doc.text(`Cash: ₹${data.totals.cash}`, 110, 34);
      doc.text(`Credit: ₹${data.totals.credit}`, 160, 34);
    }

    const tableData = transactions.map(t => [
      formatDateIST(t.date_time),
      formatTimeIST(t.date_time),
      t.receipt_no,
      t.truck_owner,
      t.vehicle_number,
      t.brass_qty,
      t.rate,
      t.total_amount,
      t.cash_paid,
      t.credit_amount,
      t.payment_method
    ]);
    
    doc.autoTable({
      startY: 40,
      head: [['Date', 'Time', 'Receipt', 'Owner', 'Vehicle', `Qty (${unit})`, `Rate/${unit}`, 'Total', 'Cash', 'Credit', 'Mode']],
      body: tableData,
      theme: 'grid',
      styles: { fontSize: 8 },
      headStyles: { fillColor: [66, 139, 202] }
    });
    
    doc.save(`daily_transactions_${formatDateIST(new Date())}.pdf`);
  } catch (error) {
    console.error('Error generating daily transactions PDF:', error);
  }
}

export function generateDisplayedExpensesPDF(expenses, filters) {
  try {
    if (!expenses || expenses.length === 0) {
      // throw new Error('No expenses to export');
    }

    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    const margin = 15;
    
    // Title
    let title = 'Expense Report';
    let subtitle = `Generated on ${formatDateIST(new Date())}`;
    
    if (filters.startDate || filters.endDate) {
       const start = filters.startDate ? formatDateIST(filters.startDate) : 'Beginning';
       const end = filters.endDate ? formatDateIST(filters.endDate) : 'Now';
       subtitle = `Period: ${start} to ${end}`;
    }

    let yPos = addHeader(doc, title, subtitle);

    // Summary Box Logic
    const totalAmount = expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0);
    const totalEntries = expenses.length;
    
    // Summary Boxes
    addSummaryBox(doc, 'Total Expenses', formatCurrencyPDF(totalAmount), margin, yPos, 60, [239, 68, 68]); 
    addSummaryBox(doc, 'Total Entries', totalEntries, margin + 65, yPos, 40, [59, 130, 246]);

    yPos += 35;

    // Table
    const tableData = expenses.map(e => [
      `${formatDateIST(e.date)} ${formatTimeIST(e.date)}`,
      e.category,
      e.description,
      formatCurrencyPDF(e.amount),
      e.payment_mode?.replace('_', ' ') || '-',
      e.vendor_name || '-',
      e.ghat_location || '-',
      e.approved_by || '-'
    ]);

    doc.autoTable({
      startY: yPos,
      head: [['Date/Time', 'Category', 'Description', 'Amount', 'Payment Mode', 'Vendor', 'Location', 'Approved By']],
      body: tableData,
      theme: 'striped',
      headStyles: { 
        fillColor: [37, 99, 235], 
        textColor: 255, 
        fontStyle: 'bold', 
        fontSize: 9,
        halign: 'center'
      },
      bodyStyles: { fontSize: 8 },
      columnStyles: {
        0: { cellWidth: 35 }, 
        1: { cellWidth: 25 }, 
        2: { cellWidth: 50 }, 
        3: { cellWidth: 25, halign: 'right', fontStyle: 'bold', textColor: [220, 38, 38] }, 
        4: { cellWidth: 25, halign: 'center' },
        5: { cellWidth: 30 },
        6: { cellWidth: 30 },
        7: { cellWidth: 30 }
      },
      margin: { left: margin, right: margin }
    });
    
    addFooter(doc);
    
    const fileName = `ghat-manager-expense-report-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
    return fileName;
    
  } catch (error) {
    console.error('Error generating displayed expenses PDF:', error);
    throw error;
  }
}

export function generateOwnerLedgerPDF(ledgerData, ownerName, unit = 'Brass') {
  try {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    const margin = 14;
    let yPos = addHeader(doc, `Owner Ledger: ${ownerName}`, `Generated on: ${formatDateIST(new Date())}`);

    // Summary
    if (ledgerData.summary) {
        addSummaryBox(doc, 'Total Billed', formatCurrencyPDF(ledgerData.summary.totalAmount || 0), margin, yPos, 60, [66, 139, 202]);
        addSummaryBox(doc, 'Deposit Balance', formatCurrencyPDF(ledgerData.owner?.deposit_balance || 0), margin + 66, yPos, 60, [128, 0, 128]);
    }

    const tableData = (ledgerData.receipts || []).map(r => [
      formatDateIST(r.date_time),
      r.receipt_no,
      r.vehicle_number,
      r.brass_qty,
      formatCurrencyPDF(r.total_amount),
      formatCurrencyPDF(r.cash_paid),
      formatCurrencyPDF(r.credit_amount),
      (r.payment_status || '').toUpperCase()
    ]);

    doc.autoTable({
      startY: 70,
      head: [['Date', 'Receipt No', 'Vehicle', unit, 'Total Amount', 'Paid', 'Pending', 'Status']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [66, 139, 202] },
      styles: { fontSize: 9 },
      columnStyles: {
        3: { halign: 'right' },
        4: { halign: 'right' },
        5: { halign: 'right', textColor: [0, 128, 0] },
        6: { halign: 'right', textColor: [255, 0, 0] }
      }
    });

    doc.save(`owner_ledger_${ownerName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`);
  } catch (error) {
    console.error('Error generating owner ledger PDF:', error);
  }
}

// Stubs for other reports to prevent crashes
const createStubPDF = (title) => {
  try {
    const doc = new jsPDF();
    doc.text(title, 10, 10);
    doc.text('This report generator is currently being updated.', 10, 20);
    doc.save(`${title.toLowerCase().replace(/\s/g, '_')}.pdf`);
  } catch (e) {
    console.error('Error in stub PDF:', e);
  }
};

export function generateCreditReportPDF(data) { createStubPDF('Credit Report'); }
export function generateMonthlyReportPDF(data, month) { createStubPDF('Monthly Report'); }
export function generateFinancialSummaryPDF(data, range) { createStubPDF('Financial Summary'); }
export function generateExpenseReportPDF(data) { createStubPDF('Expense Report'); }
export function generateDepositReportPDF(data, filters) { createStubPDF('Deposit Report'); }
export function generatePartnerRoyaltyPDF(data) { createStubPDF('Partner Royalty'); }
