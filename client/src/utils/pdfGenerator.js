import jsPDF from 'jspdf';

export function generatePDF(receiptData, settings = {}) {
  try {
    // Merge receipt data with fallback values
    const data = {
      ...settings,
      ...receiptData,
      quarry_name: receiptData.quarry_name || settings.quarry_name || 'MUKINDPUR SAND QUARRY',
      quarry_address: receiptData.quarry_address || settings.quarry_address || 'Mukindpur, District Office',
      currency: receiptData.currency || settings.currency || 'Rs',
      unit: receiptData.unit || settings.unit || 'Brass',
      loading_charge: receiptData.loading_charge || settings.loading_charge || 0,
      rate: receiptData.rate || settings.default_rate || 0,
    };

    // Create PDF in portrait mode A5
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a5'
    });

    doc.setFont('helvetica');

    // ===========================
    // HEADER
    // ===========================
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(data.quarry_name, doc.internal.pageSize.width / 2, 15, { align: 'center' });

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(data.quarry_address, doc.internal.pageSize.width / 2, 22, { align: 'center' });

    doc.setLineWidth(0.5);
    doc.line(15, 27, doc.internal.pageSize.width - 15, 27);

    let y = 35;

    // ===========================
    // RECEIPT DETAILS
    // ===========================
    doc.setFont('helvetica', 'bold');
    doc.text('Receipt No:', 15, y);

    doc.setFont('helvetica', 'normal');
    doc.text(data.receipt_no || 'GMS008', 40, y);

    // Date / Time
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-IN');
    const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

    doc.setFont('helvetica', 'bold');
    doc.text('Date/Time:', 100, y);

    doc.setFont('helvetica', 'normal');
    doc.text(`${dateStr} ${timeStr}`, 100, y + 6); // placed on new line

    y += 12;

    // Line
    doc.setLineWidth(0.2);
    doc.line(15, y, doc.internal.pageSize.width - 15, y);

    y += 10;

    // ===========================
    // TRUCK DETAILS
    // ===========================
    doc.setFont('helvetica', 'bold');
    doc.text('Truck Owner:', 15, y);
    doc.setFont('helvetica', 'normal');
    doc.text(data.truck_owner || 'N/A', 45, y);

    y += 7;

    doc.setFont('helvetica', 'bold');
    doc.text('Vehicle No:', 15, y);
    doc.setFont('helvetica', 'normal');
    doc.text(data.vehicle_number || 'N/A', 45, y);

    y += 12;

    // ===========================
    // TRANSACTION
    // ===========================
    const brassQty = parseFloat(data.brass_qty) || 0;
    const rate = parseFloat(data.rate) || 0;
    const loadingCharge = parseFloat(data.loading_charge) || 0;
    const materialCost = brassQty * rate;
    const totalAmount = materialCost + loadingCharge;
    const cashPaid = parseFloat(data.cash_paid) || 0;
    const creditAmount = totalAmount - cashPaid;

    doc.setFont('helvetica', 'bold');
    doc.text('Quantity:', 15, y);
    doc.setFont('helvetica', 'normal');
    doc.text(`${brassQty} ${data.unit}`, 45, y);

    y += 7;

    doc.setFont('helvetica', 'bold');
    doc.text('Rate:', 15, y);
    doc.setFont('helvetica', 'normal');
    doc.text(`Rs ${rate} per ${data.unit}`, 45, y);

    y += 7;

    doc.setFont('helvetica', 'bold');
    doc.text('Material Cost:', 15, y);
    doc.setFont('helvetica', 'normal');
    doc.text(`Rs ${materialCost.toFixed(2)}`, 60, y);

    y += 7;

    doc.setFont('helvetica', 'bold');
    doc.text('Loading Charge:', 15, y);
    doc.setFont('helvetica', 'normal');
    doc.text(`Rs ${loadingCharge.toFixed(2)}`, 60, y);

    y += 10;

    doc.line(15, y, doc.internal.pageSize.width - 15, y);
    y += 8;

    // ===========================
    // TOTAL
    // ===========================
    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL AMOUNT:', 15, y);

    doc.setFontSize(12);
    doc.text(`Rs ${totalAmount.toFixed(2)}`, 60, y);

    doc.setFontSize(10);
    y += 10;

    // ===========================
    // PAYMENT DETAILS
    // ===========================
    doc.setFont('helvetica', 'bold');
    doc.text('Cash Paid:', 15, y);

    doc.setFont('helvetica', 'normal');
    doc.text(`Rs ${cashPaid.toFixed(2)}`, 45, y);

    y += 7;

    doc.setFont('helvetica', 'bold');
    doc.text('Credit Amount:', 15, y);

    doc.setFont('helvetica', 'normal');

    if (creditAmount > 0) {
      doc.setTextColor(255, 0, 0);
    }

    doc.text(`Rs ${creditAmount.toFixed(2)}`, 45, y);

    doc.setTextColor(0, 0, 0);
    y += 10;

    // ===========================
    // PAYMENT STATUS
    // ===========================
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');

    if (creditAmount === 0) {
      doc.setTextColor(0, 128, 0);
      doc.text('PAID IN FULL', doc.internal.pageSize.width / 2, y, { align: 'center' });
    } else if (cashPaid > 0 && cashPaid < totalAmount) {
      doc.setTextColor(255, 165, 0);
      doc.text('PARTIAL PAYMENT', doc.internal.pageSize.width / 2, y, { align: 'center' });
    } else {
      doc.setTextColor(255, 0, 0);
      doc.text('ON CREDIT', doc.internal.pageSize.width / 2, y, { align: 'center' });
    }

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);

    y += 15;

    // ===========================
    // SIGNATURES
    // ===========================
    const pageWidth = doc.internal.pageSize.width;

    doc.setLineWidth(0.3);
    doc.line(30, y, 70, y);
    doc.text('Driver Signature', 50, y + 5, { align: 'center' });

    doc.line(pageWidth - 70, y, pageWidth - 30, y);
    doc.text('Manager Signature', pageWidth - 50, y + 5, { align: 'center' });

    y += 15;

    // ===========================
    // TERMS
    // ===========================
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');

    const terms = data.terms || 'Goods once sold will not be taken back. Subject to Jurisdiction.';
    const splitTerms = doc.splitTextToSize(terms, doc.internal.pageSize.width - 30);

    splitTerms.forEach((line, index) => {
      doc.text(line, doc.internal.pageSize.width / 2, y + index * 4, { align: 'center' });
    });

    y += 10;

    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text(`Printed on: ${now.toLocaleString('en-IN')}`, doc.internal.pageSize.width / 2, y, { align: 'center' });

    // ===========================
    // EXPORT PDF
    // ===========================
    const fileName = `${data.receipt_no || 'receipt'}_${dateStr.replace(/\//g, '-')}.pdf`;

    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const printWindow = window.open(pdfUrl);

    if (printWindow) {
      printWindow.focus();
    } else {
      doc.save(fileName);
      alert("PDF downloaded!");
    }

    return fileName;

  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please check the data and try again.');
  }
}
