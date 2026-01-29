import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { 
  FiFilter, 
  FiDownload, 
  FiSearch,
  FiEye,
  FiEdit,
  FiPrinter,
  FiSave,
  FiX,
  FiClock,
  FiTrash2
} from 'react-icons/fi';
import { FaCalendar, FaTruck, FaUser } from 'react-icons/fa';
import { format, subDays, parseISO } from 'date-fns';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DailyRegister = () => {
  const [dateRange, setDateRange] = useState({
    startDate: format(new Date(), "yyyy-MM-dd'T'00:00"),
    endDate: format(new Date(), "yyyy-MM-dd'T'23:59")
  });
  const [receipts, setReceipts] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editableReceipt, setEditableReceipt] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [truckOwners, setTruckOwners] = useState([]);

  useEffect(() => {
    fetchTruckOwners();
  }, []);

  const fetchTruckOwners = async () => {
    try {
      const response = await axios.get('/api/settings/truck-owners');
      setTruckOwners(response.data || []);
    } catch (error) {
      console.error('Error fetching truck owners:', error);
    }
  };

  // Get correct local timezone date
  const getLocalDateString = () => {
    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata' };
    return now.toLocaleDateString('en-CA', options); // Returns YYYY-MM-DD
  };

  // Format time to IST
  const formatToIST = (dateString, includeDate = false) => {
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

  // Convert IST datetime-local string to UTC for DB query
  const getUTCFromIST = (localDateTimeString) => {
    // localDateTimeString is in YYYY-MM-DDThh:mm format
    // Append seconds and timezone offset for IST
    // Note: If seconds are missing, we append :00
    const dateIST = new Date(`${localDateTimeString}:00+05:30`);
    return dateIST.toISOString();
  };

  useEffect(() => {
    fetchDailyData();
  }, [dateRange]);

  const fetchDailyData = async () => {
    setLoading(true);
    try {
      // Get UTC range for the selected IST date range
      const startUTC = getUTCFromIST(dateRange.startDate);
      const endUTC = getUTCFromIST(dateRange.endDate);
      
      console.log('Fetching receipts for IST range:', dateRange.startDate, 'to', dateRange.endDate);
      
      const receiptsResponse = await axios.get('/api/receipts', {
        params: {
          startDate: startUTC,
          endDate: endUTC
        }
      });
      
      const receiptsData = receiptsResponse.data.receipts || [];
      console.log('Fetched receipts:', receiptsData.length);
      
      // Debug: Show what dates we got
      receiptsData.forEach((receipt, idx) => {
        console.log(`Receipt ${idx+1}: UTC=${receipt.date_time}, IST=${formatToIST(receipt.date_time, true)}`);
      });
      
      setReceipts(receiptsData);
      calculateSummary(receiptsData);
    } catch (error) {
      console.error('Error fetching daily data:', error);
      toast.error('Failed to load daily data');
    } finally {
      setLoading(false);
    }
  };

  const calculateSummary = (receiptsData) => {
    const summaryData = {
      total_transactions: receiptsData.length,
      total_amount: 0,
      total_cash: 0,
      total_credit: 0,
      total_brass: 0
    };

    receiptsData.forEach(receipt => {
      summaryData.total_amount += parseFloat(receipt.total_amount) || 0;
      summaryData.total_cash += parseFloat(receipt.cash_paid) || 0;
      summaryData.total_credit += parseFloat(receipt.credit_amount) || 0;
      summaryData.total_brass += parseFloat(receipt.brass_qty) || 0;
    });

    setSummary(summaryData);
  };

  // Get local time in IST
  const getLocalTime = (dateString) => {
    return formatToIST(dateString, false); // Time only
  };

  // Get local date and time in IST
  const getLocalDateTime = (dateString) => {
    return formatToIST(dateString, true); // Date and time
  };

  const handleViewReceipt = (receipt) => {
    setSelectedReceipt({
      ...receipt,
      local_time: getLocalDateTime(receipt.date_time)
    });
    setIsViewModalOpen(true);
  };

  const handleEditReceipt = (receipt) => {
    setEditableReceipt({
      ...receipt,
      local_time: getLocalDateTime(receipt.date_time)
    });
    setIsEditModalOpen(true);
  };

  const handleDeleteReceipt = async (receipt) => {
    if (window.confirm(`Are you sure you want to delete receipt ${receipt.receipt_no}? This action cannot be undone.`)) {
      try {
        await axios.delete(`/api/receipts/${receipt.id}`);
        toast.success('Receipt deleted successfully');
        fetchDailyData();
        if (isViewModalOpen) setIsViewModalOpen(false);
      } catch (error) {
        console.error('Error deleting receipt:', error);
        toast.error('Failed to delete receipt');
      }
    }
  };

   const handleUpdateReceipt = async () => {
    if (!editableReceipt) return;

    // Validate Owner
    const ownerExists = truckOwners.some(
      o => o.name.toLowerCase() === editableReceipt.truck_owner.toLowerCase() || 
           (o.truck_owner && o.truck_owner.toLowerCase() === editableReceipt.truck_owner.toLowerCase())
    );
    
    if (!ownerExists) {
      toast.error(`Owner "${editableReceipt.truck_owner}" not found. Please add the owner in Settings first.`);
      return;
    }

    setIsUpdating(true);
    try {
      const response = await axios.put(`/api/receipts/${editableReceipt.id}`, {
        truck_owner: editableReceipt.truck_owner,
        vehicle_number: editableReceipt.vehicle_number,
        brass_qty: parseFloat(editableReceipt.brass_qty),
        rate: parseFloat(editableReceipt.rate),
        loading_charge: parseFloat(editableReceipt.loading_charge),
        cash_paid: parseFloat(editableReceipt.cash_paid),
        payment_status: editableReceipt.payment_status,
        notes: editableReceipt.notes || ''
      });

      if (response.data.receipt) {
         toast.success('Receipt updated successfully!');
         
         // Refresh the data
         fetchDailyData();
         
         // Close modal
         setIsEditModalOpen(false);
         setEditableReceipt(null);
       }
     } catch (error) {
       console.error('Error updating receipt:', error);
       toast.error(error.response?.data?.error || 'Failed to update receipt');
     } finally {
       setIsUpdating(false);
     }
   };
 
   const updateCalculations = (field, value) => {
     const updated = { ...editableReceipt, [field]: value };
     const qty = parseFloat(updated.brass_qty) || 0;
     const rate = parseFloat(updated.rate) || 0;
     const loading = parseFloat(updated.loading_charge) || 0;
     
     // Calculate new total
     const total = (qty * rate) + loading;
     
     // Calculate new credit
     const cash = parseFloat(updated.cash_paid) || 0;
     const deposit = parseFloat(updated.deposit_deducted) || 0;
     const paid = cash + deposit;
     const credit = total - paid;
     
     // Determine status
     let status = 'unpaid';
     if (credit <= 0.01) status = 'paid';
     else if (paid > 0) status = 'partial';
     
     setEditableReceipt({
       ...updated,
       total_amount: total.toFixed(2),
       credit_amount: credit.toFixed(2),
       payment_status: status
     });
   };

  const handleReprintReceipt = async (receipt) => {
    try {
      // Generate PDF with proper time
      const receiptWithLocalTime = {
        ...receipt,
        date_time: receipt.date_time,
        local_time_display: getLocalDateTime(receipt.date_time),
        formatted_date: formatToIST(receipt.date_time, true),
        formatted_time: formatToIST(receipt.date_time, false),
        quarry_name: 'Mukindpur Sand Quarry',
        quarry_address: 'Mukindpur, District Office',
        currency: '₹',
        unit: 'Brass'
      };
      
      const { generatePDF } = await import('../utils/pdfGenerator');
      generatePDF(receiptWithLocalTime);
      toast.success('Receipt reprinted!');
    } catch (error) {
      console.error('Error reprinting receipt:', error);
      toast.error('Failed to reprint receipt');
    }
  };

  const handleExportPDF = () => {
    try {
      const doc = new jsPDF();
      
      // Format dates for display
      const startDateDisplay = format(new Date(dateRange.startDate), 'dd-MM-yyyy HH:mm');
      const endDateDisplay = format(new Date(dateRange.endDate), 'dd-MM-yyyy HH:mm');
      const filename = `daily-register-${dateRange.startDate.replace(/[:.]/g, '-')}-to-${dateRange.endDate.replace(/[:.]/g, '-')}.pdf`;

      // Title with local date
      doc.setFontSize(18);
      doc.text('Daily Register - Ghat Manager', 14, 22);
      doc.setFontSize(11);
      doc.text(`Date Range: ${startDateDisplay} to ${endDateDisplay} (IST)`, 14, 32);
      doc.text(`Generated: ${getLocalDateTime(new Date().toISOString())}`, 14, 38);
      
      // Summary
      if (summary) {
        doc.text(`Total Transactions: ${summary.total_transactions}`, 14, 48);
        doc.text(`Cash Collected: ₹${summary.total_cash.toFixed(2)}`, 14, 54);
        doc.text(`Credit Given: ₹${summary.total_credit.toFixed(2)}`, 14, 60);
        doc.text(`Total Amount: ₹${summary.total_amount.toFixed(2)}`, 14, 66);
      }
      
      // Table
      const tableData = filteredReceipts.map((receipt, index) => [
        index + 1,
        receipt.receipt_no,
        getLocalTime(receipt.date_time), // Time only
        format(new Date(receipt.date_time), 'dd-MM-yyyy'), // Date
        receipt.truck_owner,
        receipt.vehicle_number,
        receipt.tyre_type || '-',
        receipt.payment_method || '-',
        receipt.brass_qty,
        `₹${receipt.total_amount}`,
        `₹${receipt.cash_paid}`,
        `₹${receipt.credit_amount}`,
        receipt.payment_status
      ]);
      
      doc.autoTable({
        head: [['#', 'Receipt No', 'Time', 'Date', 'Owner', 'Vehicle', 'Tyre', 'Mode', 'Qty', 'Total', 'Cash', 'Credit', 'Status']],
        body: tableData,
        startY: 75,
        theme: 'grid',
        styles: { fontSize: 8 },
        headStyles: { fillColor: [59, 130, 246] }
      });
      
      doc.save(filename);
      toast.success('PDF exported successfully!');
    } catch (error) {
      console.error('Error exporting PDF:', error);
      toast.error('Failed to export PDF');
    }
  };

  const handleExportExcel = () => {
    try {
      const filename = `daily-register-${dateRange.startDate.replace(/[:.]/g, '-')}-to-${dateRange.endDate.replace(/[:.]/g, '-')}.csv`;
      const headers = ['Receipt No', 'Time', 'Date', 'Owner', 'Vehicle', 'Tyre Type', 'Payment Mode', 'Qty', 'Rate', 'Total', 'Cash', 'Credit', 'Status'];
      const csvData = filteredReceipts.map(receipt => {
        const date = format(new Date(receipt.date_time), 'dd-MM-yyyy', { timeZone: 'Asia/Kolkata' });
        const time = getLocalTime(receipt.date_time);
        return [
          receipt.receipt_no,
          time,
          date,
          `"${receipt.truck_owner}"`,
          receipt.vehicle_number,
          receipt.tyre_type || '-',
          receipt.payment_method || '-',
          receipt.brass_qty,
          receipt.rate,
          receipt.total_amount,
          receipt.cash_paid,
          receipt.credit_amount,
          receipt.payment_status
        ];
      });
      
      const csvContent = [
        headers.join(','),
        ...csvData.map(row => row.join(','))
      ].join('\n');
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Excel file exported successfully!');
    } catch (error) {
      console.error('Error exporting Excel:', error);
      toast.error('Failed to export Excel file');
    }
  };

  const filteredReceipts = receipts.filter(receipt => {
    const matchesSearch = searchQuery === '' || 
      receipt.truck_owner?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      receipt.vehicle_number?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      receipt.receipt_no?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || receipt.payment_status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs px-2 py-1 rounded-full font-medium';
      case 'partial': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs px-2 py-1 rounded-full font-medium';
      case 'unpaid': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 text-xs px-2 py-1 rounded-full font-medium';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full font-medium';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with current time display */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Daily Register</h1>
          <p className="text-gray-600 dark:text-gray-400 flex items-center">
            <FiClock className="h-4 w-4 mr-2" />
            System Date: {getLocalDateString()} | Display: {dateRange.startDate.replace('T', ' ')} to {dateRange.endDate.replace('T', ' ')}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              const currentStart = new Date(dateRange.startDate);
              const prevDate = subDays(currentStart, 1);
              const prevDateStr = format(prevDate, 'yyyy-MM-dd');
              setDateRange({ 
                startDate: `${prevDateStr}T00:00`, 
                endDate: `${prevDateStr}T23:59` 
              });
            }}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            Previous Day
          </button>
          <button
            onClick={() => {
              const today = getLocalDateString();
              setDateRange({ 
                startDate: `${today}T00:00`, 
                endDate: `${today}T23:59` 
              });
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Today ({format(new Date(), 'dd-MM-yyyy')})
          </button>
        </div>
      </div>

      {/* Date Selector & Filters */}
      <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FaCalendar className="inline h-4 w-4 mr-1" />
              From Date & Time
            </label>
            <input
              type="datetime-local"
              value={dateRange.startDate}
              onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-[#262626] dark:text-white"
              max={dateRange.endDate}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FaCalendar className="inline h-4 w-4 mr-1" />
              To Date & Time
            </label>
            <input
              type="datetime-local"
              value={dateRange.endDate}
              onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-[#262626] dark:text-white"
              min={dateRange.startDate}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FiSearch className="inline h-4 w-4 mr-1" />
              Search
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-[#2A2A2A] dark:text-white"
              placeholder="Search..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FiFilter className="inline h-4 w-4 mr-1" />
              Status
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-[#2A2A2A] dark:text-white"
            >
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="partial">Partial</option>
              <option value="unpaid">Credit</option>
            </select>
          </div>
          
          <div className="flex items-end space-x-2">
            <button
              onClick={handleExportPDF}
              disabled={filteredReceipts.length === 0}
              className="bg-blue-600 text-white flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiPrinter className="h-4 w-4" />
              <span>PDF</span>
            </button>
            <button
              onClick={handleExportExcel}
              disabled={filteredReceipts.length === 0}
              className="bg-gray-200 text-gray-800 flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              <FiDownload className="h-4 w-4" />
              <span>Excel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Transactions</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {summary?.total_transactions || 0}
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Amount</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              ₹{summary?.total_amount?.toFixed(2) || '0.00'}
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Cash Collected</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              ₹{summary?.total_cash?.toFixed(2) || '0.00'}
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Credit Given</p>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">
              ₹{summary?.total_credit?.toFixed(2) || '0.00'}
            </p>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Transactions for {dateRange.startDate === dateRange.endDate 
              ? format(new Date(dateRange.startDate), 'MMMM dd, yyyy') 
              : `${format(new Date(dateRange.startDate), 'MMM dd')} - ${format(new Date(dateRange.endDate), 'MMM dd, yyyy')}`} (IST)
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <FiClock className="h-4 w-4 mr-1" />
            Displaying local time (IST)
          </p>
        </div>
        
        {loading ? (
          <div className="p-12 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Loading transactions...</p>
          </div>
        ) : filteredReceipts.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400">No transactions found for selected date range</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">Make sure receipts are booked within IST timezone</p>
            <button
              onClick={() => window.location.href = '/receipt'}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Create New Receipt
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-[#262626]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">#</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Receipt No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <span className="flex items-center">
                      <FiClock className="h-4 w-4 mr-1" />
                      Time (IST)
                    </span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Owner</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Vehicle</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tyre Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Payment Mode</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Qty</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Cash</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Credit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-200 dark:divide-gray-700">
                {filteredReceipts.map((receipt, index) => (
                  <tr key={receipt.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {receipt.receipt_no}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">
                      {getLocalTime(receipt.date_time)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {format(new Date(receipt.date_time), 'dd-MM-yyyy')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {receipt.truck_owner}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {receipt.vehicle_number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {receipt.tyre_type || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
                      {receipt.payment_method || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {receipt.brass_qty}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      ₹{receipt.total_amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">
                      ₹{receipt.cash_paid}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 dark:text-red-400">
                      ₹{receipt.credit_amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={getStatusColor(receipt.payment_status)}>
                        {receipt.payment_status?.toUpperCase() || 'UNKNOWN'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleViewReceipt(receipt)}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 p-1 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          title="View"
                        >
                          <FiEye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleEditReceipt(receipt)}
                          className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-900 dark:hover:text-yellow-300 p-1 rounded hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                          title="Edit Payment"
                        >
                          <FiEdit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteReceipt(receipt)}
                          className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20"
                          title="Delete Receipt"
                        >
                          <FiTrash2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleReprintReceipt(receipt)}
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 p-1 rounded hover:bg-gray-100 dark:hover:bg-white/10"
                          title="Reprint"
                        >
                          <FiPrinter className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* View Receipt Modal */}
      {isViewModalOpen && selectedReceipt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">View Receipt</h3>
              <button
                onClick={() => {
                  setIsViewModalOpen(false);
                  setSelectedReceipt(null);
                }}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Receipt No</label>
                  <p className="text-lg font-semibold dark:text-white">{selectedReceipt.receipt_no}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Date & Time (IST)</label>
                  <p className="text-lg dark:text-white">{selectedReceipt.local_time}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <FaUser className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Truck Owner</label>
                </div>
                <p className="text-lg dark:text-white">{selectedReceipt.truck_owner}</p>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <FaTruck className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Vehicle Number</label>
                </div>
                <p className="text-lg dark:text-white">{selectedReceipt.vehicle_number}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Quantity (Brass)</label>
                  <p className="text-lg dark:text-white">{selectedReceipt.brass_qty}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Rate per Brass</label>
                  <p className="text-lg dark:text-white">₹{selectedReceipt.rate}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Total Amount</label>
                  <p className="text-xl font-bold text-blue-600 dark:text-blue-400">₹{selectedReceipt.total_amount}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Cash Paid</label>
                  <p className="text-xl font-bold text-green-600 dark:text-green-400">₹{selectedReceipt.cash_paid}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Credit Amount</label>
                <p className={`text-xl font-bold ${selectedReceipt.credit_amount > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                  ₹{selectedReceipt.credit_amount}
                </p>
              </div>
              
              {selectedReceipt.notes && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Notes</label>
                  <p className="text-gray-700 dark:text-gray-300">{selectedReceipt.notes}</p>
                </div>
              )}
              
              <div className="border-t pt-4 flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setIsViewModalOpen(false);
                    handleEditReceipt(selectedReceipt);
                  }}
                  className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700"
                >
                  Edit Payment
                </button>
                <button
                  onClick={() => handleReprintReceipt(selectedReceipt)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Reprint Receipt
                </button>
                <button
                  onClick={() => handleDeleteReceipt(selectedReceipt)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Delete Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Receipt Modal */}
      {isEditModalOpen && editableReceipt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-[#1A1A1A] z-10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Edit Receipt</h3>
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setEditableReceipt(null);
                }}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Receipt Info */}
              <div className="grid grid-cols-2 gap-4 bg-gray-50 dark:bg-[#262626] p-4 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receipt No</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{editableReceipt.receipt_no}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{editableReceipt.local_time}</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Owner</label>
                  <input
                    type="text"
                    list="owner-options"
                    value={editableReceipt.truck_owner}
                    onChange={(e) => {
                       const val = e.target.value;
                       const owner = truckOwners.find(o => o.name === val || (o.truck_owner === val));
                       setEditableReceipt(prev => ({
                         ...prev,
                         truck_owner: val,
                         vehicle_number: owner?.vehicle_number || prev.vehicle_number
                       }));
                    }}
                    className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#2A2A2A] dark:text-white font-semibold"
                  />
                  <datalist id="owner-options">
                    {truckOwners.map(owner => (
                      <option key={owner.id} value={owner.name} />
                    ))}
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Vehicle</label>
                  <input
                    type="text"
                    value={editableReceipt.vehicle_number}
                    onChange={(e) => setEditableReceipt(prev => ({ ...prev, vehicle_number: e.target.value.toUpperCase() }))}
                    className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#2A2A2A] dark:text-white font-semibold"
                  />
                </div>
              </div>

              {/* Editable Fields */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Transaction Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Quantity (Brass)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={editableReceipt.brass_qty}
                      onChange={(e) => updateCalculations('brass_qty', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#2A2A2A] dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Rate per Brass
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={editableReceipt.rate}
                      onChange={(e) => updateCalculations('rate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#2A2A2A] dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Loading Charge
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={editableReceipt.loading_charge}
                      onChange={(e) => updateCalculations('loading_charge', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#2A2A2A] dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Financial Summary */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 dark:text-blue-300 font-medium">Total Amount</span>
                  <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">₹{editableReceipt.total_amount}</span>
                </div>
                <div className="mt-2 text-sm text-blue-600 dark:text-blue-400">
                  (Qty × Rate) + Loading Charge
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Payment Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Cash Paid
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={editableReceipt.cash_paid}
                      onChange={(e) => updateCalculations('cash_paid', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#2A2A2A] dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Credit Amount (Balance)
                    </label>
                    <div className={`w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-[#262626] font-bold ${
                      parseFloat(editableReceipt.credit_amount) > 0 
                        ? 'text-red-600 border-red-200 dark:text-red-400 dark:border-red-900/30' 
                        : 'text-green-600 border-green-200 dark:text-green-400 dark:border-green-900/30'
                    }`}>
                      ₹{editableReceipt.credit_amount}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between bg-gray-50 dark:bg-[#262626] p-3 rounded-lg">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Payment Status:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    editableReceipt.payment_status === 'paid' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                    editableReceipt.payment_status === 'partial' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {editableReceipt.payment_status}
                  </span>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Notes
                </label>
                <textarea
                  value={editableReceipt.notes || ''}
                  onChange={(e) => updateCalculations('notes', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#2A2A2A] dark:text-white h-20"
                  placeholder="Reason for edit..."
                />
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-end space-x-3 sticky bottom-0 bg-white dark:bg-[#1A1A1A]">
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setEditableReceipt(null);
                }}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateReceipt}
                disabled={isUpdating}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2 disabled:opacity-50"
              >
                <FiSave className="h-5 w-5" />
                <span>{isUpdating ? 'Saving...' : 'Save Changes'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyRegister;