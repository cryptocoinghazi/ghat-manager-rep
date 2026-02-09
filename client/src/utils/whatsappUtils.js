export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  // Remove non-digits
  let clean = phone.replace(/\D/g, '');
  // Default to India (91) if 10 digits
  if (clean.length === 10) {
    clean = '91' + clean;
  }
  return clean;
};

export const generateReceiptMessage = (receipt, type = 'Receipt', unit = 'Brass') => {
  const date = new Date(receipt.date_time).toLocaleDateString('en-IN');
  const time = new Date(receipt.date_time).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const amount = parseFloat(receipt.total_amount || receipt.totalBill || 0).toFixed(2);
  const qty = parseFloat(receipt.brass_qty || 0).toFixed(2);
  const rate = parseFloat(receipt.rate || 0).toFixed(2);
  
  return `*${type} Details*
Receipt No: ${receipt.receipt_no}
Date: ${date} ${time}
Vehicle: ${receipt.vehicle_number}
Owner: ${receipt.truck_owner}
Quantity: ${qty} ${unit}
Rate: ₹${rate}
Total Amount: ₹${amount}
Status: ${receipt.payment_status || 'Pending'}

_Sent via Ghat Manager_`;
};

export const openWhatsAppChat = (phone, message) => {
  const formattedPhone = formatPhoneNumber(phone);
  const encodedMessage = encodeURIComponent(message);
  
  // Use api.whatsapp.com/send to support both web and mobile
  const url = formattedPhone 
    ? `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodedMessage}`
    : `https://api.whatsapp.com/send?text=${encodedMessage}`;
    
  window.open(url, '_blank');
};
