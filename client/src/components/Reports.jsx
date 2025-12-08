import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
  FiFilter,
  FiDownload,
  FiCalendar,
  FiTrendingUp,
  FiTrendingDown,
  FiPrinter,
  FiFileText,
  FiCreditCard,
  FiDollarSign,
  FiUsers,
  FiBarChart2,
  FiPieChart,
  FiRefreshCw,
  FiChevronRight,
  FiChevronLeft,
  FiEye,
  FiTruck,
  FiClock
} from 'react-icons/fi';
import { FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';

const Reports = () => {
  const [activeReport, setActiveReport] = useState('credit');
  const [loading, setLoading] = useState(false);
  
  // Get current date in IST
  const getCurrentISTDate = () => {
    const now = new Date();
    const offset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
    const istDate = new Date(now.getTime() + offset);
    return istDate.toISOString().split('T')[0];
  };

  const getStartOfMonthIST = () => {
    const now = new Date();
    const offset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(now.getTime() + offset);
    const start = new Date(istDate.getFullYear(), istDate.getMonth(), 1);
    return start.toISOString().split('T')[0];
  };

  const [dateRange, setDateRange] = useState({
    startDate: getStartOfMonthIST(),
    endDate: getCurrentISTDate()
  });
  
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toISOString().slice(0, 7)
  );
  const [reportsData, setReportsData] = useState({
    credit: null,
    monthly: null,
    financial: null,
    client: null
  });

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

  // Convert UTC date to IST date string (YYYY-MM-DD)
  const convertUTCToISTDate = (utcDateString) => {
    if (!utcDateString) return '';
    const date = new Date(utcDateString);
    const offset = 5.5 * 60 * 60 * 1000; // IST offset
    const istDate = new Date(date.getTime() + offset);
    return istDate.toISOString().split('T')[0];
  };

  // Fetch report data based on active report
  const fetchReportData = async () => {
    setLoading(true);
    try {
      let response;
      
      switch (activeReport) {
        case 'credit':
          response = await axios.get('/api/reports/credit-report');
          setReportsData(prev => ({ ...prev, credit: response.data }));
          break;
          
        case 'monthly':
          const [year, month] = selectedMonth.split('-');
          response = await axios.get('/api/reports/monthly-report', {
            params: { year, month }
          });
          
          // Convert dates in monthly data to IST
          if (response.data && response.data.dailyData) {
            response.data.dailyData = response.data.dailyData.map(day => ({
              ...day,
              ist_day: convertUTCToISTDate(day.day + 'T00:00:00Z') // Convert UTC to IST date
            }));
          }
          
          setReportsData(prev => ({ ...prev, monthly: response.data }));
          break;
          
        case 'financial':
          response = await axios.get('/api/reports/daily-summary', {
            params: { 
              date: dateRange.endDate // Use single date for daily summary
            }
          });
          
          // Convert times in recent transactions to IST
          if (response.data && response.data.recentTransactions) {
            response.data.recentTransactions = response.data.recentTransactions.map(trans => ({
              ...trans,
              ist_time: formatToIST(trans.date_time, false),
              ist_date: formatToIST(trans.date_time, true)
            }));
          }
          
          setReportsData(prev => ({ ...prev, financial: response.data }));
          break;
          
        case 'client':
          response = await axios.get('/api/reports/credit-report', {
            params: {
              startDate: dateRange.startDate,
              endDate: dateRange.endDate
            }
          });
          setReportsData(prev => ({ ...prev, client: response.data }));
          break;
          
        default:
          break;
      }
    } catch (error) {
      console.error('Error fetching report:', error);
      toast.error('Failed to load report data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeReport) {
      fetchReportData();
    }
  }, [activeReport, selectedMonth, dateRange]);

  const handleExportCSV = async (reportType) => {
    try {
      let endpoint = '';
      let params = {};
      
      switch (reportType) {
        case 'credit':
          endpoint = '/api/reports/export/credit-csv';
          break;
        case 'monthly':
          endpoint = '/api/reports/export/monthly-csv';
          params = { month: selectedMonth };
          break;
        case 'financial':
          endpoint = '/api/reports/export/financial-csv';
          params = { date: dateRange.endDate };
          break;
        default:
          return;
      }
      
      const response = await axios.get(endpoint, {
        params,
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${reportType}-report-${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      toast.success('CSV exported successfully!');
    } catch (error) {
      console.error('Error exporting CSV:', error);
      toast.error('Failed to export CSV');
    }
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount || 0);
  };

  // Format date as DD-MM-YYYY
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'Asia/Kolkata'
    });
  };

  // Get month name
  const getMonthName = (monthStr) => {
    const [year, month] = monthStr.split('-');
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-IN', { 
      month: 'long', 
      year: 'numeric',
      timeZone: 'Asia/Kolkata'
    });
  };

  // Render Credit Report
  const renderCreditReport = () => {
    if (!reportsData.credit) return null;
    
    const { creditReport, creditAging, totalCredit, totalCustomers } = reportsData.credit;
    
    // Group aging data by customer
    const agingByCustomer = {};
    if (creditAging) {
      creditAging.forEach(item => {
        if (!agingByCustomer[item.truck_owner]) {
          agingByCustomer[item.truck_owner] = {
            '0-7 days': 0,
            '8-30 days': 0,
            '30+ days': 0
          };
        }
        agingByCustomer[item.truck_owner][item.aging_bucket] = item.amount;
      });
    }
    
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Credit Report - Pending Payments
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={() => handleExportCSV('credit')}
              className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 text-sm"
            >
              <FiDownload className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Credit Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Customers with Credit</p>
                <p className="text-2xl font-bold text-blue-700">
                  {totalCustomers || 0}
                </p>
              </div>
              <FiUsers className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600">Total Credit Outstanding</p>
                <p className="text-2xl font-bold text-red-700">
                  {formatCurrency(totalCredit)}
                </p>
              </div>
              <FiCreditCard className="h-8 w-8 text-red-400" />
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-600">Avg Credit per Customer</p>
                <p className="text-2xl font-bold text-yellow-700">
                  {formatCurrency(totalCustomers > 0 ? totalCredit / totalCustomers : 0)}
                </p>
              </div>
              <FiBarChart2 className="h-8 w-8 text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Credit Details Table */}
        {creditReport && creditReport.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending Receipts</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Credit</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">0-7 Days</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">8-30 Days</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">30+ Days</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Oldest Credit Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latest Credit Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {creditReport.map((customer, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{customer.truck_owner}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{customer.pending_count}</td>
                    <td className="px-4 py-3 text-sm font-bold text-red-600">{formatCurrency(customer.total_credit)}</td>
                    <td className="px-4 py-3 text-sm text-green-600">
                      {formatCurrency(agingByCustomer[customer.truck_owner]?.['0-7 days'] || 0)}
                    </td>
                    <td className="px-4 py-3 text-sm text-yellow-600">
                      {formatCurrency(agingByCustomer[customer.truck_owner]?.['8-30 days'] || 0)}
                    </td>
                    <td className="px-4 py-3 text-sm text-red-600">
                      {formatCurrency(agingByCustomer[customer.truck_owner]?.['30+ days'] || 0)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {customer.oldest_credit ? formatToIST(customer.oldest_credit, true) : 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {customer.latest_credit ? formatToIST(customer.latest_credit, true) : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <FiCreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No credit records found</p>
          </div>
        )}
      </div>
    );
  };

  // Render Monthly Report
  const renderMonthlyReport = () => {
    if (!reportsData.monthly) return null;
    
    const { month, dailyData, summary, paymentDistribution, topCustomers } = reportsData.monthly;
    
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Monthly Summary - {getMonthName(month)}
            </h3>
            <p className="text-sm text-gray-500">
              {dailyData?.length || 0} days with transactions
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handleExportCSV('monthly')}
              className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 text-sm"
            >
              <FiDownload className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Monthly Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Total Transactions</p>
            <p className="text-2xl font-bold text-gray-900">
              {summary?.total_transactions || 0}
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Total Amount</p>
            <p className="text-2xl font-bold text-blue-600">
              {formatCurrency(summary?.total_amount)}
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Cash Collected</p>
            <p className="text-2xl font-bold text-green-600">
              {formatCurrency(summary?.total_cash)}
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Credit Given</p>
            <p className="text-2xl font-bold text-red-600">
              {formatCurrency(summary?.total_credit)}
            </p>
          </div>
        </div>

        {/* Daily Breakdown */}
        {dailyData && dailyData.length > 0 && (
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <h4 className="text-md font-semibold text-gray-900 mb-4">Daily Breakdown (IST Dates)</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date (IST)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transactions</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cash</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brass</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dailyData.map((day, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {day.ist_day ? formatDate(day.ist_day) : formatDate(day.day)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">{day.transactions}</td>
                      <td className="px-4 py-3 text-sm font-bold text-blue-600">{formatCurrency(day.total_amount)}</td>
                      <td className="px-4 py-3 text-sm text-green-600">{formatCurrency(day.cash_collected)}</td>
                      <td className="px-4 py-3 text-sm text-red-600">{formatCurrency(day.credit_given)}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{day.total_brass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              <FiClock className="inline h-3 w-3 mr-1" />
              Dates shown in Indian Standard Time (IST)
            </p>
          </div>
        )}
      </div>
    );
  };

  // Render Financial Summary
  const renderFinancialSummary = () => {
    if (!reportsData.financial) return null;
    
    const { date, summary, recentTransactions } = reportsData.financial;
    
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Financial Summary
            </h3>
            <p className="text-sm text-gray-500">
              Daily Summary for {formatDate(dateRange.endDate)}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handleExportCSV('financial')}
              className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 text-sm"
            >
              <FiDownload className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Total Transactions</p>
            <p className="text-2xl font-bold text-gray-900">
              {summary?.total_transactions || 0}
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-2xl font-bold text-blue-600">
              {formatCurrency(summary?.total_amount)}
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Cash Collected</p>
            <p className="text-2xl font-bold text-green-600">
              {formatCurrency(summary?.total_cash)}
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Credit Outstanding</p>
            <p className="text-2xl font-bold text-red-600">
              {formatCurrency(summary?.total_credit)}
            </p>
          </div>
        </div>

        {/* Recent Transactions */}
        {recentTransactions && recentTransactions.length > 0 && (
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-md font-semibold text-gray-900">Recent Transactions</h4>
              <div className="flex items-center text-sm text-gray-500">
                <FiClock className="h-4 w-4 mr-1" />
                Times shown in IST
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time (IST)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentTransactions.map((transaction, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {transaction.ist_time || formatToIST(transaction.date_time, false)}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {transaction.receipt_no}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {transaction.truck_owner}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {transaction.vehicle_number}
                      </td>
                      <td className="px-4 py-3 text-sm font-bold text-blue-600">
                        {formatCurrency(transaction.total_amount)}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          transaction.payment_status === 'paid' ? 'bg-green-100 text-green-800' :
                          transaction.payment_status === 'partial' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {transaction.payment_status?.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render Client Report
  const renderClientReport = () => {
    if (!reportsData.client) return null;
    
    const { creditReport, totalCustomers, totalCredit } = reportsData.client;
    
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Client Report
            </h3>
            <p className="text-sm text-gray-500">
              Customer credit analysis from {formatDate(dateRange.startDate)} to {formatDate(dateRange.endDate)}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handleExportCSV('credit')}
              className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 text-sm"
            >
              <FiDownload className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Client Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Total Clients</p>
                <p className="text-2xl font-bold text-blue-700">
                  {totalCustomers || 0}
                </p>
              </div>
              <FiUsers className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600">Active with Credit</p>
                <p className="text-2xl font-bold text-green-700">
                  {creditReport?.length || 0}
                </p>
              </div>
              <FiCreditCard className="h-8 w-8 text-green-400" />
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600">Total Outstanding</p>
                <p className="text-2xl font-bold text-purple-700">
                  {formatCurrency(totalCredit)}
                </p>
              </div>
              <FiDollarSign className="h-8 w-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Clients List */}
        {creditReport && creditReport.length > 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending Receipts</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Credit</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Credit Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Credit Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {creditReport.map((client, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <FiUsers className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{client.truck_owner}</p>
                            <p className="text-xs text-gray-500">Customer</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{client.pending_count}</div>
                        <div className="text-xs text-gray-500">receipts pending</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-red-600">{formatCurrency(client.total_credit)}</div>
                        <div className="text-xs text-gray-500">outstanding</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {client.oldest_credit ? formatToIST(client.oldest_credit, true) : 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {client.latest_credit ? formatToIST(client.latest_credit, true) : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <FiUsers className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No client data found for selected date range</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">View detailed reports and analytics for your business</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={fetchReportData}
            disabled={loading}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <FiRefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? 'Refreshing...' : 'Refresh Data'}</span>
          </button>
        </div>
      </div>

      {/* Report Selection Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b">
          <nav className="flex -mb-px">
            {[
              { id: 'credit', label: 'Credit Report', icon: FiCreditCard },
              { id: 'monthly', label: 'Monthly Summary', icon: FiCalendar },
              { id: 'financial', label: 'Financial Summary', icon: FiDollarSign },
              { id: 'client', label: 'Client Report', icon: FiUsers }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveReport(tab.id)}
                className={`
                  flex-1 flex items-center justify-center space-x-2 py-4 text-sm font-medium border-b-2
                  ${activeReport === tab.id 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Report Controls */}
        <div className="p-6 border-b">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeReport === 'monthly' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FiCalendar className="inline h-4 w-4 mr-1" />
                  Select Month
                </label>
                <input
                  type="month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  max={new Date().toISOString().slice(0, 7)}
                />
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FiCalendar className="inline h-4 w-4 mr-1" />
                    Start Date (IST)
                  </label>
                  <input
                    type="date"
                    value={dateRange.startDate}
                    onChange={(e) => setDateRange(prev => ({ ...prev, startDate: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    max={dateRange.endDate}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FiCalendar className="inline h-4 w-4 mr-1" />
                    End Date (IST)
                  </label>
                  <input
                    type="date"
                    value={dateRange.endDate}
                    onChange={(e) => setDateRange(prev => ({ ...prev, endDate: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min={dateRange.startDate}
                    max={getCurrentISTDate()}
                  />
                </div>
              </>
            )}
            <div className="md:col-span-2">
              <div className="flex items-center text-sm text-gray-500">
                <FiClock className="h-4 w-4 mr-1" />
                All dates and times are shown in Indian Standard Time (IST)
              </div>
            </div>
          </div>
        </div>

        {/* Report Content */}
        <div className="p-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-500">Loading report data...</p>
            </div>
          ) : (
            <>
              {activeReport === 'credit' && renderCreditReport()}
              {activeReport === 'monthly' && renderMonthlyReport()}
              {activeReport === 'financial' && renderFinancialSummary()}
              {activeReport === 'client' && renderClientReport()}
            </>
          )}
        </div>
      </div>

      {/* Quick Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Total Credit Outstanding</p>
              <p className="text-2xl font-bold mt-1">
                {reportsData.credit?.totalCredit 
                  ? formatCurrency(reportsData.credit.totalCredit)
                  : formatCurrency(0)
                }
              </p>
            </div>
            <FiCreditCard className="h-8 w-8 opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Monthly Revenue</p>
              <p className="text-2xl font-bold mt-1">
                {reportsData.monthly?.summary?.total_amount 
                  ? formatCurrency(reportsData.monthly.summary.total_amount)
                  : formatCurrency(0)
                }
              </p>
            </div>
            <FiDollarSign className="h-8 w-8 opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Active Customers</p>
              <p className="text-2xl font-bold mt-1">
                {reportsData.credit?.totalCustomers || 0}
              </p>
            </div>
            <FiUsers className="h-8 w-8 opacity-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;