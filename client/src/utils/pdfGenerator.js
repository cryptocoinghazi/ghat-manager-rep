import jsPDF from 'jspdf';
import 'jspdf-autotable';

const formatCurrencyPDF = (amount) => {
  return `Rs ${new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount || 0)}`;
};

const formatDateIST = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Asia/Kolkata'
  });
};

const formatTimeIST = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  });
};

const getMonthName = (monthStr) => {
  const [year, month] = monthStr.split('-');
  const date = new Date(year, month - 1);
  return date.toLocaleDateString('en-IN', { 
    month: 'long', 
    year: 'numeric',
    timeZone: 'Asia/Kolkata'
  });
};

const addHeader = (doc, title, subtitle = '') => {
  const pageWidth = doc.internal.pageSize.width;
  const margin = 15;
  
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageWidth, 35, 'F');
  
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text(`Ghat Manager - ${title}`, pageWidth / 2, 15, { align: 'center' });
  
  if (subtitle) {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(subtitle, pageWidth / 2, 23, { align: 'center' });
  }
  
  doc.setFontSize(8);
  doc.text(`Generated: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`, pageWidth / 2, 30, { align: 'center' });
  
  return 45;
};

const addSummaryBox = (doc, label, value, x, y, width = 55, color = [37, 99, 235]) => {
  doc.setFillColor(color[0], color[1], color[2]);
  doc.roundedRect(x, y, width, 22, 3, 3, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(label, x + width / 2, y + 8, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(String(value), x + width / 2, y + 17, { align: 'center' });
  
  doc.setTextColor(0, 0, 0);
};

const addFooter = (doc) => {
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 15;
  
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  doc.text('Ghat Manager - Professional Sand Quarry Management System', pageWidth / 2, pageHeight - 10, { align: 'center' });
  doc.text(`Page 1`, pageWidth - margin, pageHeight - 10, { align: 'right' });
};

export function generateCreditReportPDF(data) {
  try {
    if (!data) {
      throw new Error('No credit report data available');
    }
    
    const { creditReport, creditAging, totalCredit, totalCustomers } = data;
    
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const margin = 15;
    
    const agingByCustomer = {};
    if (creditAging) {
      creditAging.forEach(item => {
        if (!agingByCustomer[item.truck_owner]) {
          agingByCustomer[item.truck_owner] = { '0-7 days': 0, '8-30 days': 0, '30+ days': 0 };
        }
        agingByCustomer[item.truck_owner][item.aging_bucket] = item.amount;
      });
    }
    
    let yPos = addHeader(doc, 'Credit Report', 'Pending Payments & Aging Analysis');
    
    addSummaryBox(doc, 'Total Customers', totalCustomers || 0, margin, yPos, 55, [59, 130, 246]);
    addSummaryBox(doc, 'Total Outstanding', formatCurrencyPDF(totalCredit), margin + 60, yPos, 60, [239, 68, 68]);
    addSummaryBox(doc, 'Avg per Customer', formatCurrencyPDF(totalCustomers > 0 ? totalCredit / totalCustomers : 0), margin + 125, yPos, 55, [245, 158, 11]);
    
    yPos += 32;
    
    if (creditReport && creditReport.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Customer Credit Details', margin, yPos);
      yPos += 5;
      
      const tableData = creditReport.map(customer => [
        customer.truck_owner,
        customer.pending_count,
        formatCurrencyPDF(customer.total_credit),
        formatCurrencyPDF(agingByCustomer[customer.truck_owner]?.['0-7 days'] || 0),
        formatCurrencyPDF(agingByCustomer[customer.truck_owner]?.['8-30 days'] || 0),
        formatCurrencyPDF(agingByCustomer[customer.truck_owner]?.['30+ days'] || 0)
      ]);
      
      doc.autoTable({
        startY: yPos,
        head: [['Customer', 'Pending', 'Total Credit', '0-7 Days', '8-30 Days', '30+ Days']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [37, 99, 235], textColor: 255, fontStyle: 'bold', fontSize: 8 },
        bodyStyles: { fontSize: 8 },
        columnStyles: {
          0: { cellWidth: 40 },
          1: { cellWidth: 18, halign: 'center' },
          2: { cellWidth: 28, halign: 'right', fontStyle: 'bold', textColor: [220, 38, 38] },
          3: { cellWidth: 25, halign: 'right', textColor: [34, 197, 94] },
          4: { cellWidth: 25, halign: 'right', textColor: [245, 158, 11] },
          5: { cellWidth: 25, halign: 'right', textColor: [220, 38, 38] }
        },
        margin: { left: margin, right: margin }
      });
    }
    
    addFooter(doc);
    
    const fileName = `ghat-manager-credit-report-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
    return fileName;
    
  } catch (error) {
    console.error('Error generating credit report PDF:', error);
    throw error;
  }
}

export function generateMonthlyReportPDF(data, selectedMonth) {
  try {
    if (!data) {
      throw new Error('No monthly report data available');
    }
    
    const { month, dailyData, summary } = data;
    
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const margin = 15;
    
    let yPos = addHeader(doc, 'Monthly Report', getMonthName(month || selectedMonth));
    
    addSummaryBox(doc, 'Transactions', summary?.total_transactions || 0, margin, yPos, 42, [107, 114, 128]);
    addSummaryBox(doc, 'Total Amount', formatCurrencyPDF(summary?.total_amount), margin + 46, yPos, 48, [59, 130, 246]);
    addSummaryBox(doc, 'Cash Collected', formatCurrencyPDF(summary?.total_cash), margin + 98, yPos, 48, [34, 197, 94]);
    addSummaryBox(doc, 'Credit Given', formatCurrencyPDF(summary?.total_credit), margin + 150, yPos, 40, [239, 68, 68]);
    
    yPos += 32;
    
    if (dailyData && dailyData.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Daily Breakdown', margin, yPos);
      yPos += 5;
      
      const tableData = dailyData.map(day => [
        formatDateIST(day.ist_day || day.day),
        day.transactions,
        formatCurrencyPDF(day.total_amount),
        formatCurrencyPDF(day.cash_collected),
        formatCurrencyPDF(day.credit_given),
        day.total_brass || 0
      ]);
      
      doc.autoTable({
        startY: yPos,
        head: [['Date (IST)', 'Txns', 'Total Amount', 'Cash', 'Credit', 'Brass']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [37, 99, 235], textColor: 255, fontStyle: 'bold', fontSize: 8 },
        bodyStyles: { fontSize: 8 },
        columnStyles: {
          0: { cellWidth: 28 },
          1: { cellWidth: 15, halign: 'center' },
          2: { cellWidth: 32, halign: 'right', fontStyle: 'bold', textColor: [59, 130, 246] },
          3: { cellWidth: 32, halign: 'right', textColor: [34, 197, 94] },
          4: { cellWidth: 32, halign: 'right', textColor: [239, 68, 68] },
          5: { cellWidth: 20, halign: 'center' }
        },
        margin: { left: margin, right: margin }
      });
    }
    
    addFooter(doc);
    
    const fileName = `ghat-manager-monthly-report-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
    return fileName;
    
  } catch (error) {
    console.error('Error generating monthly report PDF:', error);
    throw error;
  }
}

export function generateFinancialSummaryPDF(data, dateRange) {
  try {
    if (!data) {
      throw new Error('No financial summary data available');
    }
    
    const { summary, recentTransactions } = data;
    
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const margin = 15;
    
    let yPos = addHeader(doc, 'Financial Summary', `Daily Summary for ${formatDateIST(dateRange?.endDate || new Date())}`);
    
    addSummaryBox(doc, 'Transactions', summary?.total_transactions || 0, margin, yPos, 42, [107, 114, 128]);
    addSummaryBox(doc, 'Total Revenue', formatCurrencyPDF(summary?.total_amount), margin + 46, yPos, 48, [59, 130, 246]);
    addSummaryBox(doc, 'Cash Collected', formatCurrencyPDF(summary?.total_cash), margin + 98, yPos, 48, [34, 197, 94]);
    addSummaryBox(doc, 'Credit Outstanding', formatCurrencyPDF(summary?.total_credit), margin + 150, yPos, 40, [239, 68, 68]);
    
    yPos += 32;
    
    if (recentTransactions && recentTransactions.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Transactions', margin, yPos);
      yPos += 5;
      
      const tableData = recentTransactions.map(trans => [
        trans.ist_time || formatTimeIST(trans.date_time),
        trans.receipt_no,
        trans.truck_owner,
        trans.vehicle_number,
        formatCurrencyPDF(trans.total_amount),
        trans.payment_status?.toUpperCase() || 'PENDING'
      ]);
      
      doc.autoTable({
        startY: yPos,
        head: [['Time (IST)', 'Receipt', 'Customer', 'Vehicle', 'Amount', 'Status']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [37, 99, 235], textColor: 255, fontStyle: 'bold', fontSize: 8 },
        bodyStyles: { fontSize: 8 },
        columnStyles: {
          0: { cellWidth: 22 },
          1: { cellWidth: 25 },
          2: { cellWidth: 35 },
          3: { cellWidth: 28 },
          4: { cellWidth: 28, halign: 'right', fontStyle: 'bold' },
          5: { cellWidth: 22, halign: 'center' }
        },
        didParseCell: function(data) {
          if (data.column.index === 5 && data.section === 'body') {
            const status = data.cell.raw;
            if (status === 'PAID') {
              data.cell.styles.textColor = [34, 197, 94];
            } else if (status === 'PARTIAL') {
              data.cell.styles.textColor = [245, 158, 11];
            } else {
              data.cell.styles.textColor = [239, 68, 68];
            }
          }
        },
        margin: { left: margin, right: margin }
      });
    }
    
    addFooter(doc);
    
    const fileName = `ghat-manager-financial-summary-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
    return fileName;
    
  } catch (error) {
    console.error('Error generating financial summary PDF:', error);
    throw error;
  }
}

export function generateExpenseReportPDF(data) {
  try {
    if (!data) {
      throw new Error('No expense report data available');
    }
    
    const { period, summary, categoryBreakdown, dailyTotals } = data;
    
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageHeight = doc.internal.pageSize.height;
    const margin = 15;
    
    let yPos = addHeader(doc, 'Expense Report', `${formatDateIST(period?.startDate)} to ${formatDateIST(period?.endDate)}`);
    
    addSummaryBox(doc, 'Total Expenses', formatCurrencyPDF(summary?.totalAmount), margin, yPos, 60, [239, 68, 68]);
    addSummaryBox(doc, 'Total Entries', summary?.totalCount || 0, margin + 65, yPos, 50, [59, 130, 246]);
    addSummaryBox(doc, 'Categories', categoryBreakdown?.length || 0, margin + 120, yPos, 50, [139, 92, 246]);
    
    yPos += 32;
    
    if (categoryBreakdown && categoryBreakdown.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Category Breakdown', margin, yPos);
      yPos += 5;
      
      const categoryData = categoryBreakdown.map(cat => [
        cat.category || 'Uncategorized',
        cat.count,
        formatCurrencyPDF(cat.total),
        `${cat.percentage || 0}%`
      ]);
      
      doc.autoTable({
        startY: yPos,
        head: [['Category', 'Entries', 'Total Amount', 'Percentage']],
        body: categoryData,
        theme: 'striped',
        headStyles: { fillColor: [139, 92, 246], textColor: 255, fontStyle: 'bold', fontSize: 9 },
        bodyStyles: { fontSize: 9 },
        columnStyles: {
          0: { cellWidth: 55 },
          1: { cellWidth: 25, halign: 'center' },
          2: { cellWidth: 45, halign: 'right', fontStyle: 'bold', textColor: [239, 68, 68] },
          3: { cellWidth: 30, halign: 'center' }
        },
        margin: { left: margin, right: margin }
      });
      
      yPos = doc.lastAutoTable.finalY + 10;
    }
    
    if (dailyTotals && dailyTotals.length > 0 && yPos < pageHeight - 60) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Daily Expense Breakdown', margin, yPos);
      yPos += 5;
      
      const dailyData = dailyTotals.map(day => [
        formatDateIST(day.date),
        day.count,
        formatCurrencyPDF(day.total)
      ]);
      
      doc.autoTable({
        startY: yPos,
        head: [['Date (IST)', 'Entries', 'Total Amount']],
        body: dailyData,
        theme: 'striped',
        headStyles: { fillColor: [139, 92, 246], textColor: 255, fontStyle: 'bold', fontSize: 9 },
        bodyStyles: { fontSize: 9 },
        columnStyles: {
          0: { cellWidth: 50 },
          1: { cellWidth: 30, halign: 'center' },
          2: { cellWidth: 50, halign: 'right', fontStyle: 'bold', textColor: [239, 68, 68] }
        },
        margin: { left: margin, right: margin }
      });
    }
    
    addFooter(doc);
    
    const fileName = `ghat-manager-expense-report-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
    return fileName;
    
  } catch (error) {
    console.error('Error generating expense report PDF:', error);
    throw error;
  }
}

export function generateDepositReportPDF(data, filters) {
  try {
    if (!data) {
      throw new Error('No deposit report data available');
    }
    const { transactions = [], summary = {} } = data;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const margin = 15;
    let subtitle = '';
    if (filters?.startDate && filters?.endDate) {
      subtitle = `${formatDateIST(filters.startDate)} to ${formatDateIST(filters.endDate)}`;
    }
    let yPos = addHeader(doc, 'Deposit Transactions', subtitle);
    addSummaryBox(doc, 'Additions', formatCurrencyPDF(summary.totalAdditions || 0), margin, yPos, 55, [34, 197, 94]);
    addSummaryBox(doc, 'Deductions', formatCurrencyPDF(summary.totalDeductions || 0), margin + 60, yPos, 60, [239, 68, 68]);
    addSummaryBox(doc, 'Net Change', formatCurrencyPDF(summary.netChange || 0), margin + 125, yPos, 55, [59, 130, 246]);
    yPos += 32;
    if (transactions.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Transactions', margin, yPos);
      yPos += 5;
      const tableData = transactions.map(t => [
        `${formatDateIST(t.date_time)} ${formatTimeIST(t.date_time)}`,
        t.owner_name,
        t.type,
        formatCurrencyPDF(t.amount),
        formatCurrencyPDF(t.previous_balance),
        formatCurrencyPDF(t.new_balance),
        t.receipt_no || '-',
        t.notes || ''
      ]);
      doc.autoTable({
        startY: yPos,
        head: [['Date/Time', 'Owner', 'Type', 'Amount', 'Prev Bal', 'New Bal', 'Receipt', 'Notes']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [59, 130, 246], textColor: 255, fontStyle: 'bold', fontSize: 8 },
        bodyStyles: { fontSize: 8 },
        margin: { left: margin, right: margin }
      });
    }
    addFooter(doc);
    const fileName = `ghat-manager-deposit-report-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
    return fileName;
  } catch (error) {
    console.error('Error generating deposit report PDF:', error);
    throw error;
  }
}

export function generateDailyTransactionsPDF(data) {
  try {
    if (!data || !data.transactions) {
      throw new Error('No daily transactions data available');
    }

    const { transactions } = data;
    
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    const margin = 15;
    
    // Header
    let yPos = addHeader(doc, 'Daily Transactions Report', `Generated on ${formatDateIST(new Date())}`);
    
    yPos += 20;
    
    const tableData = transactions.map(txn => [
        formatDateIST(txn.date_time),
        formatTimeIST(txn.date_time),
        txn.receipt_no,
        txn.truck_owner,
        txn.driver_name || '',
        txn.vehicle_number,
        txn.tyre_type || '',
        txn.brass_qty,
        formatCurrencyPDF(txn.total_amount),
        txn.payment_method,
        txn.payment_status
    ]);

    doc.autoTable({
        startY: yPos,
        head: [['Date', 'Time', 'Receipt', 'Owner', 'Driver', 'Vehicle', 'Tyre', 'Brass', 'Amount', 'Mode', 'Status']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [59, 130, 246], textColor: 255, fontStyle: 'bold', fontSize: 8 },
        bodyStyles: { fontSize: 8 },
        margin: { left: margin, right: margin }
    });
    
    addFooter(doc);
    
    const fileName = `daily-transactions-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
    return fileName;

  } catch (error) {
    console.error('Error generating daily transactions PDF:', error);
    throw error;
  }
}

export function generateDisplayedExpensesPDF(expenses, filters) {
  try {
    if (!expenses || expenses.length === 0) {
      // throw new Error('No expenses to export'); // Allow exporting empty report with headers? Better to warn.
      // But if user clicks export on empty table, maybe just header.
    }

    const doc = new jsPDF({
      orientation: 'landscape', // Landscape to fit more columns
      unit: 'mm',
      format: 'a4'
    });

    const margin = 15;
    const pageWidth = doc.internal.pageSize.width;

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
    addSummaryBox(doc, 'Total Expenses', formatCurrencyPDF(totalAmount), margin, yPos, 60, [239, 68, 68]); // Red for expenses
    addSummaryBox(doc, 'Total Entries', totalEntries, margin + 65, yPos, 40, [59, 130, 246]); // Blue for count

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
        0: { cellWidth: 35 }, // Date
        1: { cellWidth: 25 }, // Category
        2: { cellWidth: 50 }, // Description
        3: { cellWidth: 25, halign: 'right', fontStyle: 'bold', textColor: [220, 38, 38] }, // Amount (Red)
        4: { cellWidth: 25 }, // Payment
        5: { cellWidth: 30 }, // Vendor
        6: { cellWidth: 25 }, // Location
        7: { cellWidth: 25 }  // Approved By
      },
      margin: { left: margin, right: margin },
      didDrawPage: function (data) {
          // Footer is handled by addFooter, but we might want to ensure it doesn't overlap
      }
    });

    addFooter(doc);

    const fileName = `expense_report_${new Date().toISOString().slice(0,10)}.pdf`;
    doc.save(fileName);
    return fileName;

  } catch (error) {
    console.error('Error generating displayed expenses PDF:', error);
    throw error;
  }
}

export function generatePDF(receiptData, settings = {}) {
  try {
    const data = {
      ...settings,
      ...receiptData,
      quarry_name: receiptData.quarry_name || settings.quarry_name || 'MUKINDPUR SAND QUARRY',
      quarry_address: receiptData.quarry_address || settings.quarry_address || 'Mukindpur, District Office',
      currency: receiptData.currency || settings.currency || 'Rs',
      unit: receiptData.unit || settings.unit || 'Brass',
      loading_charge: (receiptData.loading_charge ?? settings.loading_charge ?? 0),
      rate: (receiptData.rate ?? settings.default_rate ?? 0),
    };

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a5'
    });

    doc.setFont('helvetica');

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(data.quarry_name, doc.internal.pageSize.width / 2, 15, { align: 'center' });

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(data.quarry_address, doc.internal.pageSize.width / 2, 22, { align: 'center' });

    doc.setLineWidth(0.5);
    doc.line(15, 27, doc.internal.pageSize.width - 15, 27);

    let y = 35;

    // GST Header if applicable
    const isGst = !!data.gst_rate;
    if (isGst) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('TAX INVOICE', doc.internal.pageSize.width / 2, y - 4, { align: 'center' });
        doc.setFontSize(10);
    }

    doc.setFont('helvetica', 'bold');
    doc.text(isGst ? 'Invoice No:' : 'Receipt No:', 15, y);

    doc.setFont('helvetica', 'normal');
    doc.text(data.receipt_no || 'GMS008', 40, y);

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
    const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' });

    doc.setFont('helvetica', 'bold');
    doc.text('Date/Time:', 100, y);

    doc.setFont('helvetica', 'normal');
    doc.text(`${dateStr} ${timeStr}`, 100, y + 6);

    y += 12;

    doc.setLineWidth(0.2);
    doc.line(15, y, doc.internal.pageSize.width - 15, y);

    y += 10;

    doc.setFont('helvetica', 'bold');
    doc.text(isGst ? 'Billed To:' : 'Truck Owner:', 15, y);
    doc.setFont('helvetica', 'normal');
    doc.text(data.truck_owner || 'N/A', 45, y);

    y += 7;

    doc.setFont('helvetica', 'bold');
    doc.text('Vehicle No:', 15, y);
    doc.setFont('helvetica', 'normal');
    doc.text(data.vehicle_number || 'N/A', 45, y);

    y += 12;
  
  doc.setFont('helvetica', 'bold');
  doc.text('Driver Name:', 15, y);
  doc.setFont('helvetica', 'normal');
  doc.text((data.driver_name || 'N/A'), 45, y);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Tyre Type:', 100, y);
  doc.setFont('helvetica', 'normal');
  doc.text((data.tyre_type || 'N/A'), 130, y);
  
  y += 12;

    const brassQty = parseFloat(data.brass_qty) || 0;
    const rate = parseFloat(data.rate) || 0;
    const loadingCharge = parseFloat(data.loading_charge) || 0;
    const materialCost = brassQty * rate;
    
    // GST Calculations
    const gstRate = parseFloat(data.gst_rate) || 0;
    const totalBeforeGst = parseFloat(data.total_before_gst) || (materialCost + loadingCharge);
    const cgstAmount = parseFloat(data.cgst_amount) || (totalBeforeGst * (gstRate/2) / 100);
    const sgstAmount = parseFloat(data.sgst_amount) || (totalBeforeGst * (gstRate/2) / 100);
    const totalAmount = parseFloat(data.total_amount) || (totalBeforeGst + cgstAmount + sgstAmount);

    const cashPaid = parseFloat(data.cash_paid) || 0;
    const depositPaid = parseFloat(data.deposit_deducted || 0);
    const paidAmount = cashPaid + depositPaid;
    const creditAmount = Math.max(0, totalAmount - paidAmount);

    doc.setFont('helvetica', 'bold');
    doc.text('Quantity:', 15, y);
    doc.setFont('helvetica', 'normal');
    doc.text(`${brassQty} ${data.unit}`, 45, y);
    
    doc.setFont('helvetica', 'bold');
    doc.text('Rate:', 85, y);
    doc.setFont('helvetica', 'normal');
    doc.text(`${formatCurrencyPDF(rate)}/${data.unit}`, 105, y);

    y += 8;

    if (isGst) {
        y += 4;
        doc.line(15, y, doc.internal.pageSize.width - 15, y);
        y += 6;
        
        doc.setFont('helvetica', 'bold');
        doc.text('Particulars', 15, y);
        doc.text('Amount', 110, y, { align: 'right' });
        
        y += 6;
        doc.setFont('helvetica', 'normal');
        
        doc.text('Taxable Value (Material + Loading)', 15, y);
        doc.text(formatCurrencyPDF(totalBeforeGst), 110, y, { align: 'right' });
        y += 6;
        
        doc.text(`CGST (${gstRate/2}%)`, 15, y);
        doc.text(formatCurrencyPDF(cgstAmount), 110, y, { align: 'right' });
        y += 6;
        
        doc.text(`SGST (${gstRate/2}%)`, 15, y);
        doc.text(formatCurrencyPDF(sgstAmount), 110, y, { align: 'right' });
        y += 6;
        
        doc.setFont('helvetica', 'bold');
        doc.text('Total Amount', 15, y);
        doc.text(formatCurrencyPDF(totalAmount), 110, y, { align: 'right' });
        
        y += 4;
    } else {
        // Regular logic
        const regTotal = materialCost + loadingCharge;
        doc.text('Total Amount:', 15, y);
        doc.text(formatCurrencyPDF(regTotal), 45, y);
    }

    y += 12;

    doc.line(15, y, doc.internal.pageSize.width - 15, y);
    y += 8;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');

    doc.setTextColor(0, 0, 0);
    doc.text(isGst ? 'Tax Invoice' : 'Gate Pass', doc.internal.pageSize.width / 2, y, { align: 'center' });

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);

    y += 15;

    const pageWidth = doc.internal.pageSize.width;

    doc.setLineWidth(0.3);
    doc.line(30, y, 70, y);
    doc.text('Driver Signature', 50, y + 5, { align: 'center' });

    doc.line(pageWidth - 70, y, pageWidth - 30, y);
    doc.text('Manager Signature', pageWidth - 50, y + 5, { align: 'center' });

    y += 15;

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
    doc.text(`Printed on: ${now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`, doc.internal.pageSize.width / 2, y, { align: 'center' });

    const fileName = `${data.receipt_no || 'receipt'}_${dateStr.replace(/\//g, '-')}.pdf`;

    if (!settings.__silent) {
      const pdfBlob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      const printWindow = window.open(pdfUrl);
      if (printWindow) {
        printWindow.focus();
      } else {
        doc.save(fileName);
        alert("PDF downloaded!");
      }
    }

    return fileName;

  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please check the data and try again.');
  }
}

export function generatePartnerRoyaltyPDF(data) {
  try {
    if (!data) {
      throw new Error('No partner royalty data available');
    }
    
    const { period, partnerSummary, partnerTotals, royalty } = data;
    
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const margin = 15;
    
    let yPos = addHeader(doc, 'Partner Royalty Report', `${formatDateIST(period?.startDate)} to ${formatDateIST(period?.endDate)}`);
    
    // Partner Stats
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Partner Summary', margin, yPos);
    yPos += 5;

    addSummaryBox(doc, 'Total Trips', partnerTotals?.trips || 0, margin, yPos, 40, [139, 92, 246]);
    addSummaryBox(doc, 'Total Brass', (partnerTotals?.brass || 0).toFixed(2), margin + 45, yPos, 40, [245, 158, 11]);
    addSummaryBox(doc, 'Total Amount', formatCurrencyPDF(partnerTotals?.amount), margin + 90, yPos, 50, [59, 130, 246]);
    addSummaryBox(doc, 'Royalty', formatCurrencyPDF(royalty?.royaltyAmount), margin + 145, yPos, 50, [34, 197, 94]);
    
    yPos += 30;

    // Partner Details Table
    if (partnerSummary && partnerSummary.length > 0) {
      doc.text('Partner Details', margin, yPos);
      yPos += 5;
      
      const tableData = partnerSummary.map(p => [
        p.truck_owner,
        p.total_trips,
        Number(p.total_brass).toFixed(2),
        formatCurrencyPDF(p.total_amount),
        formatCurrencyPDF(p.total_cash),
        formatCurrencyPDF(p.total_credit)
      ]);
      
      doc.autoTable({
        startY: yPos,
        head: [['Partner', 'Trips', 'Brass', 'Amount', 'Cash', 'Credit']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [139, 92, 246], textColor: 255, fontStyle: 'bold', fontSize: 9 },
        bodyStyles: { fontSize: 9 },
        columnStyles: {
          0: { cellWidth: 50 },
          1: { cellWidth: 20, halign: 'center' },
          2: { cellWidth: 25, halign: 'center' },
          3: { cellWidth: 30, halign: 'right' },
          4: { cellWidth: 30, halign: 'right' },
          5: { cellWidth: 30, halign: 'right' }
        },
        margin: { left: margin, right: margin }
      });
      
      yPos = doc.lastAutoTable.finalY + 15;
    }
    
    addFooter(doc);
    
    const fileName = `partner-royalty-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
    return fileName;
    
  } catch (error) {
    console.error('Error generating partner royalty PDF:', error);
    throw error;
  }
}

export function generateOwnerLedgerPDF(data, ownerName) {
  try {
    if (!data) {
      throw new Error('No ledger data available');
    }
    
    const { summary, receipts } = data;
    
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const margin = 15;
    
    let yPos = addHeader(doc, 'Owner Ledger', `Ledger for ${ownerName}`);
    
    addSummaryBox(doc, 'Total Billed', formatCurrencyPDF(summary?.totalAmount), margin, yPos, 55, [59, 130, 246]);
    addSummaryBox(doc, 'Total Paid', formatCurrencyPDF(summary?.totalPaid), margin + 60, yPos, 60, [34, 197, 94]);
    addSummaryBox(doc, 'Pending Due', formatCurrencyPDF(summary?.totalPending), margin + 125, yPos, 55, [239, 68, 68]);
    
    yPos += 32;
    
    if (receipts && receipts.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Transaction History', margin, yPos);
      yPos += 5;
      
      const tableData = receipts.map(r => [
        formatDateIST(r.date_time),
        r.receipt_no,
        r.vehicle_number,
        formatCurrencyPDF(r.total_amount),
        formatCurrencyPDF(r.cash_paid),
        formatCurrencyPDF(r.credit_amount),
        r.payment_status.toUpperCase()
      ]);
      
      doc.autoTable({
        startY: yPos,
        head: [['Date', 'Receipt', 'Vehicle', 'Total', 'Paid', 'Pending', 'Status']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [59, 130, 246], textColor: 255, fontStyle: 'bold', fontSize: 9 },
        bodyStyles: { fontSize: 9 },
        columnStyles: {
          0: { cellWidth: 25 },
          1: { cellWidth: 25 },
          2: { cellWidth: 30 },
          3: { cellWidth: 25, halign: 'right' },
          4: { cellWidth: 25, halign: 'right', textColor: [34, 197, 94] },
          5: { cellWidth: 25, halign: 'right', textColor: [239, 68, 68] },
          6: { cellWidth: 25, halign: 'center' }
        },
        margin: { left: margin, right: margin }
      });
    }
    
    addFooter(doc);
    
    const fileName = `owner-ledger-${ownerName.replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
    return fileName;
    
  } catch (error) {
    console.error('Error generating owner ledger PDF:', error);
    throw error;
  }
}
