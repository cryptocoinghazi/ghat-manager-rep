export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount || 0);
};

export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Asia/Kolkata'
  });
};

export const formatToIST = (dateString, includeDate = false) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  
  const options = {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  };
  
  if (includeDate) {
    options.year = 'numeric';
    options.month = 'short';
    options.day = '2-digit';
  }
  
  return date.toLocaleString('en-IN', options);
};
