import jsPDF from 'jspdf';
import { format } from 'date-fns';

export function generatePDF(receiptData) {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [150, 100]
  });

  // Add watermark
  doc.setTextColor(200, 200, 200);
  doc.setFontSize(60);
  doc.text('GATE PASS', 75, 50, { angle: 45 });

  // Reset color
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(8);

  // Company header
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(receiptData.quarry_name || 'MUKINDPUR SAND QUARRY', 75, 10, { align: 'center' });
  
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text(receiptData.quarry_address || 'Mukindpur, District Office', 75, 15, { align: 'center' });

  // Separator line
  doc.setLineWidth(0.5);
  doc.line(10, 18, 140, 18);

  // Receipt details
  let y = 25;

  // Receipt number and date
  doc.setFont('helvetica', 'bold');
  doc.text('Receipt No:', 10, y);
  doc.text(receiptData.receipt_no, 40, y);
  
  doc.text('Date:', 100, y);
  doc.text(format(new Date(receiptData.date_time), 'dd/MM/yyyy'), 120, y);
  y += 7;

  // Time
  doc.text('Time:', 10, y);
  doc.text(format(new Date(receiptData.date_time), 'HH:mm:ss'), 40, y);
  y += 7;

  // Separator
  doc.setLineWidth(0.2);
  doc.line(10, y, 140, y);
  y += 7;

  // Truck details
  doc.setFont('helvetica', 'bold');
  doc.text('Truck Owner:', 10, y);
  doc.setFont('helvetica', 'normal');
  doc.text(receiptData.truck_owner, 40, y, { maxWidth: 100 });
  y += 7;

  doc.setFont('helvetica', 'bold');
  doc.text('Vehicle No:', 10, y);
  doc.setFont('helvetica', 'normal');
  doc.text(receiptData.vehicle_number, 40, y);
  y += 7;

  // Separator
  doc.line(10, y, 140, y);
  y += 7;

  // Transaction details
  const details = [
    ['Quantity:', `${receiptData.brass_qty} ${receiptData.unit || 'Brass'}`],
    ['Rate:', `${receiptData.currency || '₹'}${receiptData.rate} per ${receiptData.unit || 'Brass'}`],
    ['Material Cost:', `${receiptData.currency || '₹'}${(receiptData.brass_qty * receiptData.rate).toFixed(2)}`],
    ['Loading Charge:', `${receiptData.currency || '₹'}${receiptData.loading_charge}`],
  ];

  details.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(label, 10, y);
    doc.setFont('helvetica', 'normal');
    doc.text(value, 60, y);
    y += 6;
  });

  // Separator
  doc.setLineWidth(0.5);
  doc.line(10, y, 140, y);
  y += 7;

  // Total amount
  doc.setFont('helvetica', 'bold');
  doc.text('TOTAL AMOUNT:', 10, y);
  doc.setFontSize(10);
  doc.text(`${receiptData.currency || '₹'}${receiptData.total_amount}`, 60, y);
  doc.setFontSize(8);
  y += 7;

  // Payment details
  doc.setFont('helvetica', 'bold');
  doc.text('Cash Paid:', 10, y);
  doc.setFont('helvetica', 'normal');
  doc.text(`${receiptData.currency || '₹'}${receiptData.cash_paid}`, 40, y);
  y += 6;

  doc.setFont('helvetica', 'bold');
  doc.text('Credit Amount:', 10, y);
  doc.setFont('helvetica', 'normal');
  const creditColor = receiptData.credit_amount > 0 ? [255, 0, 0] : [0, 0, 0];
  doc.setTextColor(...creditColor);
  doc.text(`${receiptData.currency || '₹'}${receiptData.credit_amount}`, 40, y);
  doc.setTextColor(0, 0, 0);
  y += 10;

  // Payment status stamp
  const status = receiptData.payment_status || 
    (receiptData.credit_amount > 0 ? 'CREDIT' : 'PAID');
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  
  if (status === 'PAID' || receiptData.credit_amount === 0) {
    doc.setTextColor(0, 128, 0);
    doc.text('PAID', 120, 80);
  } else if (status === 'PARTIAL') {
    doc.setTextColor(255, 165, 0);
    doc.text('PARTIAL PAYMENT', 110, 80);
  } else {
    doc.setTextColor(255, 0, 0);
    doc.text('CREDIT', 120, 80);
  }

  // Reset color
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(8);

  // Footer with signature
  doc.setLineWidth(0.2);
  doc.line(10, 85, 60, 85);
  doc.line(90, 85, 140, 85);
  
  doc.text('Driver Signature', 25, 90);
  doc.text('Manager Signature', 105, 90);

  // Terms
  doc.setFontSize(6);
  doc.text('Goods once sold will not be taken back.', 75, 95, { align: 'center' });
  doc.text('Subject to Mukindpur Jurisdiction.', 75, 98, { align: 'center' });

  // Open print dialog
  doc.autoPrint();
  window.open(doc.output('bloburl'), '_blank');
}

export function generateMultipleReceipts(receipts) {
  const doc = new jsPDF();
  
  receipts.forEach((receipt, index) => {
    if (index > 0) {
      doc.addPage();
    }
    generatePDF(receipt, doc);
  });
  
  doc.save('batch-receipts.pdf');
}