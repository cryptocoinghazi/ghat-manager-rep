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
  FiClock
} from 'react-icons/fi';
import { FaCalendar, FaTruck, FaUser } from 'react-icons/fa';
import { format, subDays, parseISO } from 'date-fns';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DailyRegister = () => {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
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

  // Convert local date to UTC range for DB query
  const getUTCRangeForLocalDate = (localDateString) => {
    // localDateString is in YYYY-MM-DD format (IST date)
    
    // Start of day in IST: YYYY-MM-DDT00:00:00+05:30
    const startIST = new Date(`${localDateString}T00:00:00+05:30`);
    // End of day in IST: YYYY-MM-DDT23:59:59.999+05:30
    const endIST = new Date(`${localDateString}T23:59:59.999+05:30`);
    
    // Convert to UTC for database query
    const startUTC = startIST.toISOString();
    const endUTC = endIST.toISOString();
    
    return { startUTC, endUTC };
  };

  useEffect(() => {
    fetchDailyData();
  }, [selectedDate]);

  const fetchDailyData = async () => {
    setLoading(true);
    try {
      // Get UTC range for the selected IST date
      const { startUTC, endUTC } = getUTCRangeForLocalDate(selectedDate);
      
      console.log('Fetching receipts for IST date:', selectedDate);
      console.log('UTC range for query:', startUTC, 'to', endUTC);
      
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

 const handleUpdateReceipt = async () => {
  if (!editableReceipt) return;

  setIsUpdating(true);
  try {
    const response = await axios.put(`/api/receipts/${editableReceipt.id}`, {
      cash_paid: parseFloat(editableReceipt.cash_paid),
      payment_status: editableReceipt.payment_status,
      notes: editableReceipt.notes || ''
    });

    if (response.data.receipt) {
      toast.success('Payment updated successfully!');
      
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
      
      // Title with local date
      doc.setFontSize(18);
      doc.text('Daily Register - Ghat Manager', 14, 22);
      doc.setFontSize(11);
      doc.text(`Date: ${format(new Date(selectedDate), 'dd-MM-yyyy')} (IST)`, 14, 32);
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
        receipt.truck_owner,
        receipt.vehicle_number,
        receipt.brass_qty,
        `₹${receipt.total_amount}`,
        `₹${receipt.cash_paid}`,
        `₹${receipt.credit_amount}`,
        receipt.payment_status
      ]);
      
      doc.autoTable({
        head: [['#', 'Receipt No', 'Time', 'Owner', 'Vehicle', 'Qty', 'Total', 'Cash', 'Credit', 'Status']],
        body: tableData,
        startY: 75,
        theme: 'grid',
        styles: { fontSize: 8 },
        headStyles: { fillColor: [59, 130, 246] }
      });
      
      doc.save(`daily-register-${selectedDate.replace(/-/g, '')}.pdf`);
      toast.success('PDF exported successfully!');
    } catch (error) {
      console.error('Error exporting PDF:', error);
      toast.error('Failed to export PDF');
    }
  };

  const handleExportExcel = () => {
    try {
      const headers = ['Receipt No', 'Date', 'Time', 'Owner', 'Vehicle', 'Qty', 'Rate', 'Total', 'Cash', 'Credit', 'Status'];
      const csvData = filteredReceipts.map(receipt => {
        const date = format(new Date(receipt.date_time), 'dd-MM-yyyy', { timeZone: 'Asia/Kolkata' });
        const time = getLocalTime(receipt.date_time);
        return [
          receipt.receipt_no,
          date,
          time,
          `"${receipt.truck_owner}"`,
          receipt.vehicle_number,
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
      link.setAttribute('download', `daily-register-${selectedDate.replace(/-/g, '')}.csv`);
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
      case 'paid': return 'bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium';
      case 'partial': return 'bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium';
      case 'unpaid': return 'bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium';
      default: return 'bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full font-medium';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with current time display */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Daily Register</h1>
          <p className="text-gray-600 flex items-center">
            <FiClock className="h-4 w-4 mr-2" />
            System Date: {getLocalDateString()} | Display Date: {selectedDate}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              const prevDate = subDays(new Date(selectedDate), 1);
              setSelectedDate(format(prevDate, 'yyyy-MM-dd'));
            }}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Previous Day
          </button>
          <button
            onClick={() => setSelectedDate(getLocalDateString())}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Today ({format(new Date(), 'dd-MM-yyyy')})
          </button>
        </div>
      </div>

      {/* Date Selector & Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaCalendar className="inline h-4 w-4 mr-1" />
              Select Date (IST)
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              max={getLocalDateString()}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FiSearch className="inline h-4 w-4 mr-1" />
              Search
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search by owner, vehicle..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FiFilter className="inline h-4 w-4 mr-1" />
              Payment Status
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="bg-gray-200 text-gray-800 flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiDownload className="h-4 w-4" />
              <span>Excel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Total Transactions</p>
            <p className="text-2xl font-bold text-gray-900">
              {summary?.total_transactions || 0}
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Total Amount</p>
            <p className="text-2xl font-bold text-gray-900">
              ₹{summary?.total_amount?.toFixed(2) || '0.00'}
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Cash Collected</p>
            <p className="text-2xl font-bold text-green-600">
              ₹{summary?.total_cash?.toFixed(2) || '0.00'}
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Credit Given</p>
            <p className="text-2xl font-bold text-red-600">
              ₹{summary?.total_credit?.toFixed(2) || '0.00'}
            </p>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            Transactions for {format(new Date(selectedDate), 'MMMM dd, yyyy')} (IST)
          </h3>
          <p className="text-sm text-gray-500 flex items-center">
            <FiClock className="h-4 w-4 mr-1" />
            Displaying local time (IST)
          </p>
        </div>
        
        {loading ? (
          <div className="p-12 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-500">Loading transactions...</p>
          </div>
        ) : filteredReceipts.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500">No transactions found for selected date</p>
            <p className="text-gray-400 text-sm mt-2">Make sure receipts are booked within IST timezone</p>
            <button
              onClick={() => window.location.href = '/receipt'}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Create New Receipt
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <span className="flex items-center">
                      <FiClock className="h-4 w-4 mr-1" />
                      Time (IST)
                    </span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cash</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredReceipts.map((receipt, index) => (
                  <tr key={receipt.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {receipt.receipt_no}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                      {getLocalTime(receipt.date_time)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {receipt.truck_owner}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {receipt.vehicle_number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {receipt.brass_qty}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      ₹{receipt.total_amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                      ₹{receipt.cash_paid}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
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
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                          title="View"
                        >
                          <FiEye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleEditReceipt(receipt)}
                          className="text-yellow-600 hover:text-yellow-900 p-1 rounded hover:bg-yellow-50"
                          title="Edit Payment"
                        >
                          <FiEdit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleReprintReceipt(receipt)}
                          className="text-gray-600 hover:text-gray-900 p-1 rounded hover:bg-gray-100"
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
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">View Receipt</h3>
              <button
                onClick={() => {
                  setIsViewModalOpen(false);
                  setSelectedReceipt(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Receipt No</label>
                  <p className="text-lg font-semibold">{selectedReceipt.receipt_no}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Date & Time (IST)</label>
                  <p className="text-lg">{selectedReceipt.local_time}</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <FaUser className="h-5 w-5 text-gray-500" />
                  <label className="block text-sm font-medium text-gray-500">Truck Owner</label>
                </div>
                <p className="text-lg">{selectedReceipt.truck_owner}</p>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <FaTruck className="h-5 w-5 text-gray-500" />
                  <label className="block text-sm font-medium text-gray-500">Vehicle Number</label>
                </div>
                <p className="text-lg">{selectedReceipt.vehicle_number}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 border-t pt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Quantity (Brass)</label>
                  <p className="text-lg">{selectedReceipt.brass_qty}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Rate per Brass</label>
                  <p className="text-lg">₹{selectedReceipt.rate}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Total Amount</label>
                  <p className="text-xl font-bold text-blue-600">₹{selectedReceipt.total_amount}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Cash Paid</label>
                  <p className="text-xl font-bold text-green-600">₹{selectedReceipt.cash_paid}</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <label className="block text-sm font-medium text-gray-500 mb-2">Credit Amount</label>
                <p className={`text-xl font-bold ${selectedReceipt.credit_amount > 0 ? 'text-red-600' : 'text-green-600'}`}>
                  ₹{selectedReceipt.credit_amount}
                </p>
              </div>
              
              {selectedReceipt.notes && (
                <div className="border-t pt-4">
                  <label className="block text-sm font-medium text-gray-500 mb-2">Notes</label>
                  <p className="text-gray-700">{selectedReceipt.notes}</p>
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
              </div>
            </div>
          </div>
        </div>
      )}

 {/* Edit Receipt Modal */}
{isEditModalOpen && editableReceipt && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg p-6 max-w-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Edit Payment Status</h3>
        <button
          onClick={() => {
            setIsEditModalOpen(false);
            setEditableReceipt(null);
          }}
          className="text-gray-500 hover:text-gray-700"
        >
          <FiX className="h-6 w-6" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-500">Receipt No:</p>
              <p className="font-semibold text-gray-900">{editableReceipt.receipt_no}</p>
            </div>
            <div>
              <p className="text-gray-500">Date:</p>
              <p className="font-semibold text-gray-900">{editableReceipt.local_time.split(',')[0]}</p>
            </div>
            <div>
              <p className="text-gray-500">Time:</p>
              <p className="font-semibold text-gray-900">{editableReceipt.local_time.split(',')[1]?.trim()}</p>
            </div>
            <div>
              <p className="text-gray-500">Vehicle:</p>
              <p className="font-semibold text-gray-900">{editableReceipt.vehicle_number}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-blue-600 font-medium">Total Amount</p>
            <p className="text-lg font-bold text-blue-700">₹{editableReceipt.total_amount}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600 font-medium">Current Status</p>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              editableReceipt.payment_status === 'paid' ? 'bg-green-100 text-green-800' :
              editableReceipt.payment_status === 'partial' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {editableReceipt.payment_status?.toUpperCase()}
            </span>
          </div>
        </div>
        
        {/* Payment Status Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Change Payment Status
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => {
                setEditableReceipt({
                  ...editableReceipt,
                  payment_status: 'paid',
                  cash_paid: editableReceipt.total_amount,
                  credit_amount: 0
                });
              }}
              className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                editableReceipt.payment_status === 'paid' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              <div className="flex flex-col items-center">
                <span>Paid</span>
                <span className="text-xs">₹{editableReceipt.total_amount}</span>
              </div>
            </button>
            
            <button
              type="button"
              onClick={() => {
                setEditableReceipt({
                  ...editableReceipt,
                  payment_status: 'partial',
                  cash_paid: editableReceipt.total_amount * 0.5, // Default 50%
                  credit_amount: editableReceipt.total_amount * 0.5
                });
              }}
              className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                editableReceipt.payment_status === 'partial' 
                  ? 'bg-yellow-600 text-white' 
                  : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
              }`}
            >
              <div className="flex flex-col items-center">
                <span>Partial</span>
                <span className="text-xs">50%</span>
              </div>
            </button>
            
            <button
              type="button"
              onClick={() => {
                setEditableReceipt({
                  ...editableReceipt,
                  payment_status: 'unpaid',
                  cash_paid: 0,
                  credit_amount: editableReceipt.total_amount
                });
              }}
              className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                editableReceipt.payment_status === 'unpaid' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-red-100 text-red-700 hover:bg-red-200'
              }`}
            >
              <div className="flex flex-col items-center">
                <span>Credit</span>
                <span className="text-xs">₹0</span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Custom Amount for Partial Payment */}
        {editableReceipt.payment_status === 'partial' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom Cash Paid Amount
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={editableReceipt.cash_paid || ''}
                onChange={(e) => {
                  const cashPaid = parseFloat(e.target.value) || 0;
                  const total = parseFloat(editableReceipt.total_amount);
                  const credit = total - cashPaid;
                  setEditableReceipt({
                    ...editableReceipt,
                    cash_paid: cashPaid,
                    credit_amount: credit,
                    payment_status: cashPaid >= total ? 'paid' : 
                                   cashPaid > 0 ? 'partial' : 'unpaid'
                  });
                }}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter cash amount"
                min="0"
                max={editableReceipt.total_amount}
              />
              <button
                type="button"
                onClick={() => {
                  const cashPaid = parseFloat(editableReceipt.total_amount);
                  setEditableReceipt({
                    ...editableReceipt,
                    cash_paid: cashPaid,
                    credit_amount: 0,
                    payment_status: 'paid'
                  });
                }}
                className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-300"
              >
                Full
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Enter cash amount paid now (0 to ₹{editableReceipt.total_amount})
            </p>
          </div>
        )}
        
        {/* Payment Summary */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Cash to be Paid</p>
              <p className="text-lg font-bold text-green-600">
                ₹{editableReceipt.cash_paid || 0}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Credit Amount</p>
              <p className="text-lg font-bold text-red-600">
                ₹{editableReceipt.credit_amount || 0}
              </p>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">New Payment Status:</span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                editableReceipt.payment_status === 'paid' ? 'bg-green-100 text-green-800' :
                editableReceipt.payment_status === 'partial' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {editableReceipt.payment_status?.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
        
        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Notes (Optional)
          </label>
          <textarea
            value={editableReceipt.notes || ''}
            onChange={(e) => setEditableReceipt({
              ...editableReceipt,
              notes: e.target.value
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
            placeholder="Add payment notes..."
          />
        </div>
        
        <div className="border-t pt-4 flex justify-end space-x-3">
          <button
            onClick={() => {
              setIsEditModalOpen(false);
              setEditableReceipt(null);
            }}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdateReceipt}
            disabled={isUpdating}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2 disabled:opacity-50"
          >
            <FiSave className="h-5 w-5" />
            <span>{isUpdating ? 'Updating...' : 'Update Payment'}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default DailyRegister;