import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
  generateCreditReportPDF,
  generateMonthlyReportPDF,
  generateFinancialSummaryPDF,
  generateExpenseReportPDF,
  generateDepositReportPDF,
  generateDailyTransactionsPDF
} from '../utils/pdfGenerator';
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
  FiChevronDown,
  FiChevronRight,
  FiChevronLeft,
  FiEye,
  FiTruck,
  FiClock,
  FiEdit
} from 'react-icons/fi';
import { FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';
import OwnerLedgerReport from './OwnerLedgerReport';

const Reports = ({ initialTab }) => {
  const [activeReport, setActiveReport] = useState('monthly');
  const [loading, setLoading] = useState(false);
  const [creditFilters, setCreditFilters] = useState({ preset: 'This Month', startDate: '', endDate: '' });
  const [financialFilters, setFinancialFilters] = useState({ preset: 'Today', startDate: '', endDate: '' });
  const [clientFilters, setClientFilters] = useState({ preset: 'This Month', startDate: '', endDate: '', truckOwner: 'all' });
  const [expenseFilters, setExpenseFilters] = useState({ preset: 'This Month', startDate: '', endDate: '', category: 'all' });
  const [partnerFilters, setPartnerFilters] = useState({ preset: 'This Month', startDate: '', endDate: '' });
  const [dailyTxnFilters, setDailyTxnFilters] = useState({ preset: 'Today', startDate: '', endDate: '', truckOwner: '', driverName: '', vehicleNumber: '', paymentMode: 'all' });
  const [appliedDailyTxnFilters, setAppliedDailyTxnFilters] = useState(null); // New state for applied filters
  const [partnerOwnerQuery, setPartnerOwnerQuery] = useState('');
  const [partnerOwnerFocused, setPartnerOwnerFocused] = useState(false);
  const [owners, setOwners] = useState([]);
  const [depositFilters, setDepositFilters] = useState({
    startDate: '',
    endDate: '',
    truckOwnerId: 'all',
    transactionType: 'all',
    page: 1,
    limit: 50,
    preset: 'Today'
  });
  const tabScrollRef = useRef(null);
  const scrollTabs = (direction) => {
    const el = tabScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' });
  };
  const [showMoreTabs, setShowMoreTabs] = useState(false);
  const tabsList = [
    { id: 'credit', label: 'Credit Report', icon: FiCreditCard },
    { id: 'monthly', label: 'Monthly Summary', icon: FiCalendar },
    { id: 'financial', label: 'Financial Summary', icon: FiDollarSign },
    { id: 'deposit', label: 'Deposit Reports', icon: FiDollarSign },
    { id: 'client', label: 'Client Report', icon: FiUsers },
    { id: 'expense', label: 'Expense Report', icon: FiTrendingDown },
    { id: 'partnerRoyalty', label: 'Partner Royalty', icon: FiUsers },
    { id: 'dailyTransactions', label: 'Daily Transactions', icon: FiTruck },
    { id: 'ownerLedger', label: 'Owner Ledger', icon: FiFileText }
  ];
  
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
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Filter Modal Component
  const FilterModal = () => {
    if (!isFilterModalOpen) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setIsFilterModalOpen(false)}></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white dark:bg-[#1A1A1A] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white dark:bg-[#1A1A1A] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4" id="modal-title">
                    Monthly Report Settings
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Filter Mode
                      </label>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setMonthlyMode('month')}
                          className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                            monthlyMode === 'month'
                              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 ring-1 ring-blue-500'
                              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          By Month
                        </button>
                        <button
                          onClick={() => setMonthlyMode('custom')}
                          className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                            monthlyMode === 'custom'
                              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 ring-1 ring-blue-500'
                              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          Custom Range (Date & Time)
                        </button>
                      </div>
                    </div>

                    {monthlyMode === 'month' ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <FiCalendar className="inline h-4 w-4 mr-1" />
                          Select Month
                        </label>
                        <input
                          type="month"
                          value={selectedMonth}
                          onChange={(e) => setSelectedMonth(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                          max={new Date().toISOString().slice(0, 7)}
                        />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Start Date & Time
                            </label>
                            <input
                              type="datetime-local"
                              value={monthlyCustomRange.startDate}
                              onChange={(e) => setMonthlyCustomRange(prev => ({ ...prev, startDate: e.target.value }))}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              End Date & Time
                            </label>
                            <input
                              type="datetime-local"
                              value={monthlyCustomRange.endDate}
                              onChange={(e) => setMonthlyCustomRange(prev => ({ ...prev, endDate: e.target.value }))}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>

                        {/* Daily Time Filter */}
                        <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center mb-2">
                            <input
                              type="checkbox"
                              id="dailyTimeFilter"
                              checked={enableDailyTimeFilter}
                              onChange={(e) => setEnableDailyTimeFilter(e.target.checked)}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="dailyTimeFilter" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                              Filter by Daily Time Range (Shift)
                            </label>
                          </div>
                          
                          {enableDailyTimeFilter && (
                            <div className="grid grid-cols-2 gap-4 ml-6 animate-fadeIn">
                              <div>
                                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Start Time</label>
                                <input
                                  type="time"
                                  value={dailyTimeRange.startTime}
                                  onChange={(e) => setDailyTimeRange(prev => ({ ...prev, startTime: e.target.value }))}
                                  className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">End Time</label>
                                <input
                                  type="time"
                                  value={dailyTimeRange.endTime}
                                  onChange={(e) => setDailyTimeRange(prev => ({ ...prev, endTime: e.target.value }))}
                                  className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-[#262626] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  setIsFilterModalOpen(false);
                  fetchReportData();
                }}
              >
                Apply & Close
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
                onClick={() => setIsFilterModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const [monthlyMode, setMonthlyMode] = useState('month'); // 'month' | 'custom'
  const [monthlyCustomRange, setMonthlyCustomRange] = useState({
    startDate: '',
    endDate: ''
  });
  const [enableDailyTimeFilter, setEnableDailyTimeFilter] = useState(false);
  const [dailyTimeRange, setDailyTimeRange] = useState({
    startTime: '08:00',
    endTime: '20:00'
  });
  const [reportsData, setReportsData] = useState({
    credit: null,
    monthly: null,
    financial: null,
    client: null,
    expense: null,
    partnerRoyalty: null,
    deposit: null
  });

  useEffect(() => {
    if (initialTab) {
      setActiveReport(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    const fetchOwners = async () => {
      try {
        const response = await axios.get('/api/settings/truck-owners');
        setOwners(response.data || []);
      } catch (error) {
        console.error('Error fetching truck owners:', error);
      }
    };
    fetchOwners();
  }, []);

  useEffect(() => {
    const applyPreset = () => {
      const today = getCurrentISTDate();
      const startOfMonth = getStartOfMonthIST();
      let start = today;
      let end = today;
      if (depositFilters.preset === 'Today') {
        start = today; end = today;
      } else if (depositFilters.preset === 'This Week') {
        const now = new Date();
        const day = now.getDay();
        const diffToMonday = (day + 6) % 7;
        const monday = new Date(now);
        monday.setDate(now.getDate() - diffToMonday);
        start = monday.toISOString().split('T')[0];
        end = today;
      } else if (depositFilters.preset === 'This Month') {
        start = startOfMonth; end = today;
      }
      setDepositFilters(prev => ({ ...prev, startDate: start, endDate: end }));
    };
    applyPreset();
  }, [depositFilters.preset]);

  // Apply presets for other tabs
  useEffect(() => {
    const today = getCurrentISTDate();
    const startOfMonth = getStartOfMonthIST();
    const setByPreset = (preset, setter) => {
      let start = today, end = today;
      if (preset === 'Today') { start = today; end = today; }
      else if (preset === 'This Week') {
        const now = new Date();
        const day = now.getDay();
        const diff = (day + 6) % 7;
        const monday = new Date(now);
        monday.setDate(now.getDate() - diff);
        start = monday.toISOString().split('T')[0];
        end = today;
      } else if (preset === 'This Month') { start = startOfMonth; end = today; }
      setter(prev => ({ ...prev, startDate: start, endDate: end }));
    };
    setByPreset(creditFilters.preset, setCreditFilters);
  }, [creditFilters.preset]);

  useEffect(() => {
    const today = getCurrentISTDate();
    const startOfMonth = getStartOfMonthIST();
    const setByPreset = (preset, setter) => {
      let start = today, end = today;
      if (preset === 'Today') { start = today; end = today; }
      else if (preset === 'This Week') {
        const now = new Date();
        const day = now.getDay();
        const diff = (day + 6) % 7;
        const monday = new Date(now);
        monday.setDate(now.getDate() - diff);
        start = monday.toISOString().split('T')[0];
        end = today;
      } else if (preset === 'This Month') { start = startOfMonth; end = today; }
      setter(prev => ({ ...prev, startDate: start, endDate: end }));
    };
    setByPreset(financialFilters.preset, setFinancialFilters);
  }, [financialFilters.preset]);

  useEffect(() => {
    const today = getCurrentISTDate();
    const startOfMonth = getStartOfMonthIST();
    const setByPreset = (preset, setter) => {
      let start = today, end = today;
      if (preset === 'Today') { start = today; end = today; }
      else if (preset === 'This Week') {
        const now = new Date();
        const day = now.getDay();
        const diff = (day + 6) % 7;
        const monday = new Date(now);
        monday.setDate(now.getDate() - diff);
        start = monday.toISOString().split('T')[0];
        end = today;
      } else if (preset === 'This Month') { start = startOfMonth; end = today; }
      setter(prev => ({ ...prev, startDate: start, endDate: end }));
    };
    setByPreset(clientFilters.preset, setClientFilters);
  }, [clientFilters.preset]);

  useEffect(() => {
    const today = getCurrentISTDate();
    const startOfMonth = getStartOfMonthIST();
    const setByPreset = (preset, setter) => {
      let start = today, end = today;
      if (preset === 'Today') { start = today; end = today; }
      else if (preset === 'This Week') {
        const now = new Date();
        const day = now.getDay();
        const diff = (day + 6) % 7;
        const monday = new Date(now);
        monday.setDate(now.getDate() - diff);
        start = monday.toISOString().split('T')[0];
        end = today;
      } else if (preset === 'This Month') { start = startOfMonth; end = today; }
      setter(prev => ({ ...prev, startDate: start, endDate: end }));
    };
    setByPreset(expenseFilters.preset, setExpenseFilters);
  }, [expenseFilters.preset]);

  useEffect(() => {
    const today = getCurrentISTDate();
    const startOfMonth = getStartOfMonthIST();
    const setByPreset = (preset, setter) => {
      let start = today, end = today;
      if (preset === 'Today') { start = today; end = today; }
      else if (preset === 'This Week') {
        const now = new Date();
        const day = now.getDay();
        const diff = (day + 6) % 7;
        const monday = new Date(now);
        monday.setDate(now.getDate() - diff);
        start = monday.toISOString().split('T')[0];
        end = today;
      } else if (preset === 'This Month') { start = startOfMonth; end = today; }
      setter(prev => ({ ...prev, startDate: start, endDate: end }));
    };
    setByPreset(partnerFilters.preset, setPartnerFilters);
  }, [partnerFilters.preset]);

  useEffect(() => {
    const today = getCurrentISTDate();
    const startOfMonth = getStartOfMonthIST();
    const setByPreset = (preset, setter) => {
      let start = today, end = today;
      if (preset === 'Today') { start = today; end = today; }
      else if (preset === 'This Week') {
        const now = new Date();
        const day = now.getDay();
        const diff = (day + 6) % 7;
        const monday = new Date(now);
        monday.setDate(now.getDate() - diff);
        start = monday.toISOString().split('T')[0];
        end = today;
      } else if (preset === 'This Month') { start = startOfMonth; end = today; }
      setter(prev => ({ ...prev, startDate: start, endDate: end }));
    };
    setByPreset(dailyTxnFilters.preset, setDailyTxnFilters);
  }, [dailyTxnFilters.preset]);

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
          response = await axios.get('/api/reports/credit-report', {
            params: { startDate: creditFilters.startDate, endDate: creditFilters.endDate }
          });
          setReportsData(prev => ({ ...prev, credit: response.data }));
          break;
          
        case 'monthly':
          let params = {};
          if (monthlyMode === 'custom' && monthlyCustomRange.startDate && monthlyCustomRange.endDate) {
            params = {
              startDate: monthlyCustomRange.startDate,
              endDate: monthlyCustomRange.endDate
            };
          } else {
            const [year, month] = selectedMonth.split('-');
            params = { year, month };
          }

          // Apply Daily Time Filter if enabled
          if (enableDailyTimeFilter) {
            params.dailyStartTime = dailyTimeRange.startTime;
            params.dailyEndTime = dailyTimeRange.endTime;
          }
          
          response = await axios.get('/api/reports/monthly-report', { params });
          
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
            params: { date: financialFilters.endDate || dateRange.endDate }
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
              startDate: clientFilters.startDate || dateRange.startDate,
              endDate: clientFilters.endDate || dateRange.endDate,
              truckOwner: clientFilters.truckOwner
            }
          });
          setReportsData(prev => ({ ...prev, client: response.data }));
          break;
          
        case 'expense':
          response = await axios.get('/api/reports/expense-summary', {
            params: {
              startDate: expenseFilters.startDate || dateRange.startDate,
              endDate: expenseFilters.endDate || dateRange.endDate
            }
          });
          setReportsData(prev => ({ ...prev, expense: response.data }));
          break;
        case 'deposit':
          response = await axios.get('/api/reports/deposit-transactions', {
            params: {
              startDate: depositFilters.startDate,
              endDate: depositFilters.endDate,
              truckOwnerId: depositFilters.truckOwnerId,
              transactionType: depositFilters.transactionType,
              page: depositFilters.page,
              limit: depositFilters.limit
            }
          });
          setReportsData(prev => ({ ...prev, deposit: response.data }));
          break;
          
        case 'partnerRoyalty':
          response = await axios.get('/api/reports/partner-royalty', {
            params: {
              startDate: dateRange.startDate,
              endDate: dateRange.endDate
            }
          });
          setReportsData(prev => ({ ...prev, partnerRoyalty: response.data }));
          break;
        case 'dailyTransactions':
          response = await axios.get('/api/reports/daily-transactions', {
            params: {
              period: dailyTxnFilters.preset === 'Today' ? 'daily' : (dailyTxnFilters.preset === 'This Week' ? 'weekly' : (dailyTxnFilters.preset === 'This Month' ? 'monthly' : 'custom')),
              startDate: dailyTxnFilters.startDate,
              endDate: dailyTxnFilters.endDate,
              truckOwner: dailyTxnFilters.truckOwner,
              driverName: dailyTxnFilters.driverName,
              vehicleNumber: dailyTxnFilters.vehicleNumber,
              paymentMode: dailyTxnFilters.paymentMode
            }
          });
          setReportsData(prev => ({ ...prev, dailyTransactions: response.data }));
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
  }, [activeReport, selectedMonth, dateRange, depositFilters, appliedDailyTxnFilters, monthlyMode, monthlyCustomRange]);

  const handleExportCSV = async (reportType) => {
    try {
      let endpoint = '';
      let params = {};
      
      switch (reportType) {
        case 'credit':
          endpoint = '/api/reports/export/credit-csv';
          params = { startDate: creditFilters.startDate, endDate: creditFilters.endDate };
          break;
        case 'monthly':
          endpoint = '/api/reports/export/monthly-csv';
          if (monthlyMode === 'custom' && monthlyCustomRange.startDate && monthlyCustomRange.endDate) {
            params = {
              startDate: monthlyCustomRange.startDate,
              endDate: monthlyCustomRange.endDate
            };
          } else {
            params = { month: selectedMonth };
          }
          break;
        case 'financial':
          endpoint = '/api/reports/export/financial-csv';
          params = { startDate: financialFilters.startDate || dateRange.startDate, endDate: financialFilters.endDate || dateRange.endDate };
          break;
        case 'expense':
          endpoint = '/api/reports/export/expense-csv';
          params = { startDate: expenseFilters.startDate || dateRange.startDate, endDate: expenseFilters.endDate || dateRange.endDate };
          break;
        case 'deposit':
          endpoint = '/api/reports/export/deposit-csv';
          params = {
            startDate: depositFilters.startDate,
            endDate: depositFilters.endDate,
            truckOwnerId: depositFilters.truckOwnerId,
            transactionType: depositFilters.transactionType
          };
          break;
        case 'dailyTransactions':
          if (!reportsData.dailyTransactions || !reportsData.dailyTransactions.transactions) {
            toast.error('No data to export');
            return;
          }
          
          // Client-side CSV generation
          const dailyTxns = reportsData.dailyTransactions.transactions;
          const headers = ['Date', 'Time', 'Receipt No', 'Owner', 'Driver', 'Vehicle', 'Tyre Type', 'Brass', 'Amount', 'Payment Mode', 'Status'];
          const csvRows = [headers.join(',')];
          
          dailyTxns.forEach(txn => {
            const dateObj = new Date(txn.date_time);
            const dateStr = dateObj.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
            const timeStr = dateObj.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true });
            
            const row = [
              dateStr,
              timeStr,
              txn.receipt_no,
              `"${txn.truck_owner}"`,
              `"${txn.driver_name || ''}"`,
              txn.vehicle_number,
              txn.tyre_type || '',
              txn.brass_qty,
              txn.total_amount,
              txn.payment_method,
              txn.payment_status
            ];
            csvRows.push(row.join(','));
          });
          
          const csvString = csvRows.join('\n');
          const blob = new Blob([csvString], { type: 'text/csv' });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `daily-transactions-${new Date().toISOString().split('T')[0]}.csv`);
          document.body.appendChild(link);
          link.click();
          link.remove();
          toast.success('CSV exported successfully!');
          return;
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

  const handleExportPDF = (reportType) => {
    try {
      switch (reportType) {
        case 'credit':
          if (!reportsData.credit) {
            toast.error('No credit report data available');
            return;
          }
          generateCreditReportPDF(reportsData.credit);
          break;
          
        case 'monthly':
          if (!reportsData.monthly) {
            toast.error('No monthly report data available');
            return;
          }
          generateMonthlyReportPDF(reportsData.monthly, selectedMonth);
          break;
          
        case 'financial':
          if (!reportsData.financial) {
            toast.error('No financial summary data available');
            return;
          }
          generateFinancialSummaryPDF(reportsData.financial, dateRange);
          break;
          
        case 'expense':
          if (!reportsData.expense) {
            toast.error('No expense report data available');
            return;
          }
          generateExpenseReportPDF(reportsData.expense);
          break;
        case 'deposit':
          if (!reportsData.deposit) {
            toast.error('No deposit report data available');
            return;
          }
          generateDepositReportPDF(reportsData.deposit, depositFilters);
          break;
        case 'dailyTransactions':
          if (!reportsData.dailyTransactions) {
            toast.error('No daily transactions data available');
            return;
          }
          generateDailyTransactionsPDF(reportsData.dailyTransactions, appliedDailyTxnFilters);
          break;
          
        default:
          toast.error('Unknown report type');
          return;
      }
      
      toast.success('PDF exported successfully!');
      
    } catch (error) {
      console.error('Error exporting PDF:', error);
      toast.error('Failed to export PDF');
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
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Credit Report - Pending Payments
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={() => handleExportPDF('credit')}
              className="flex items-center space-x-2 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 text-sm"
            >
              <FiFileText className="h-4 w-4" />
              <span>Export PDF</span>
            </button>
            <button
              onClick={() => handleExportCSV('credit')}
              className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 text-sm"
            >
              <FiDownload className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date Preset</label>
            <select value={creditFilters.preset} onChange={(e) => setCreditFilters(prev => ({ ...prev, preset: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2 md:col-span-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Start Date</label>
              <input type="date" value={creditFilters.startDate} onChange={(e) => setCreditFilters(prev => ({ ...prev, startDate: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">End Date</label>
              <input type="date" value={creditFilters.endDate} onChange={(e) => setCreditFilters(prev => ({ ...prev, endDate: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white" />
            </div>
          </div>
        </div>

        {/* Credit Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400">Customers with Credit</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  {totalCustomers || 0}
                </p>
              </div>
              <FiUsers className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600 dark:text-red-400">Total Credit Outstanding</p>
                <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                  {formatCurrency(totalCredit)}
                </p>
              </div>
              <FiCreditCard className="h-8 w-8 text-red-400" />
            </div>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-600 dark:text-yellow-400">Avg Credit per Customer</p>
                <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
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
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-[#262626]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pending Receipts</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Credit</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">0-7 Days</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">8-30 Days</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">30+ Days</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Oldest Credit Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Latest Credit Date</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-200 dark:divide-gray-700">
                {creditReport.map((customer, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{customer.truck_owner}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{customer.pending_count}</td>
                    <td className="px-4 py-3 text-sm font-bold text-red-600 dark:text-red-400">{formatCurrency(customer.total_credit)}</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">
                      {formatCurrency(agingByCustomer[customer.truck_owner]?.['0-7 days'] || 0)}
                    </td>
                    <td className="px-4 py-3 text-sm text-yellow-600 dark:text-yellow-400">
                      {formatCurrency(agingByCustomer[customer.truck_owner]?.['8-30 days'] || 0)}
                    </td>
                    <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">
                      {formatCurrency(agingByCustomer[customer.truck_owner]?.['30+ days'] || 0)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                      {customer.oldest_credit ? formatToIST(customer.oldest_credit, true) : 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
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
            <p className="text-gray-500 dark:text-gray-400">No credit records found</p>
          </div>
        )}

        {(!dailyData || dailyData.length === 0) && (
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-sm text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">No transactions found for the selected period.</p>
            <button
              onClick={() => setIsFilterModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <FiEdit className="-ml-1 mr-2 h-5 w-5" />
              Edit Filters
            </button>
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
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {monthlyMode === 'month' 
                ? `Monthly Summary - ${month ? getMonthName(month) : 'Unknown'}`
                : `Custom Summary (${formatToIST(monthlyCustomRange.startDate)} - ${formatToIST(monthlyCustomRange.endDate)})`}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {dailyData?.length || 0} days with transactions
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handleExportPDF('monthly')}
              className="flex items-center space-x-2 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 text-sm"
            >
              <FiFileText className="h-4 w-4" />
              <span>Export PDF</span>
            </button>
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
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Transactions</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {summary?.total_transactions || 0}
            </p>
          </div>
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Amount</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {formatCurrency(summary?.total_amount)}
            </p>
          </div>
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Cash Collected</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {formatCurrency(summary?.total_cash)}
            </p>
          </div>
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Credit Given</p>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">
              {formatCurrency(summary?.total_credit)}
            </p>
          </div>
        </div>

        {/* Daily Breakdown */}
        {dailyData && dailyData.length > 0 && (
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm">
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4">Daily Breakdown (IST Dates)</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-[#262626]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <span>Date (IST)</span>
                        <button
                          onClick={() => setIsFilterModalOpen(true)}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                          title="Edit Filters"
                        >
                          <FiEdit className="h-4 w-4" />
                        </button>
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Transactions</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Cash</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Credit</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Brass</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-200 dark:divide-gray-700">
                  {dailyData.map((day, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                        {day.ist_day ? formatDate(day.ist_day) : formatDate(day.day)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{day.transactions}</td>
                      <td className="px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400">{formatCurrency(day.total_amount)}</td>
                      <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">{formatCurrency(day.cash_collected)}</td>
                      <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">{formatCurrency(day.credit_given)}</td>
                      <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{day.total_brass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
              <FiClock className="inline h-3 w-3 mr-1" />
              Dates shown in Indian Standard Time (IST)
            </p>
          </div>
        )}
      </div>
    );
  };

  // Render Owner Ledger Report
  const renderOwnerLedgerReport = () => {
    return (
      <OwnerLedgerReport 
        owners={owners} 
        formatCurrency={formatCurrency} 
        formatDate={formatDate}
        formatToIST={formatToIST}
      />
    );
  };

  const handleGenerateDailyReport = () => {
    setAppliedDailyTxnFilters(dailyTxnFilters);
    fetchReportData();
  };

  // Render Daily Transactions Report
  function renderDailyTransactionsReport() {
    return (
      <div className="space-y-6">
        <div className="bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Daily Transactions Filter</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date Preset</label>
              <select 
                value={dailyTxnFilters.preset} 
                onChange={(e) => setDailyTxnFilters(prev => ({ ...prev, preset: e.target.value }))} 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
              >
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>Custom Range</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-2 md:col-span-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Start Date</label>
                <input 
                  type="date" 
                  value={dailyTxnFilters.startDate} 
                  onChange={(e) => setDailyTxnFilters(prev => ({ ...prev, startDate: e.target.value }))} 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">End Date</label>
                <input 
                  type="date" 
                  value={dailyTxnFilters.endDate} 
                  onChange={(e) => setDailyTxnFilters(prev => ({ ...prev, endDate: e.target.value }))} 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white" 
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Truck Owner</label>
              <input 
                type="text" 
                value={dailyTxnFilters.truckOwner} 
                onChange={(e) => setDailyTxnFilters(prev => ({ ...prev, truckOwner: e.target.value }))}
                placeholder="Search Owner..." 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Driver Name</label>
              <input 
                type="text" 
                value={dailyTxnFilters.driverName} 
                onChange={(e) => setDailyTxnFilters(prev => ({ ...prev, driverName: e.target.value }))}
                placeholder="Search Driver..." 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Vehicle Number</label>
              <input 
                type="text" 
                value={dailyTxnFilters.vehicleNumber} 
                onChange={(e) => setDailyTxnFilters(prev => ({ ...prev, vehicleNumber: e.target.value }))}
                placeholder="Search Vehicle..." 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Payment Mode</label>
              <select 
                value={dailyTxnFilters.paymentMode} 
                onChange={(e) => setDailyTxnFilters(prev => ({ ...prev, paymentMode: e.target.value }))} 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
              >
                <option value="all">All Modes</option>
                <option value="cash">Cash</option>
                <option value="credit">Credit</option>
                <option value="online">Online</option>
                <option value="deposit">Deposit</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={handleGenerateDailyReport}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <FiRefreshCw className="mr-2" />
              Generate Report
            </button>
          </div>
        </div>

        {appliedDailyTxnFilters && reportsData.dailyTransactions ? (
          <>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Transaction Results ({reportsData.dailyTransactions.transactions?.length || 0})
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleExportPDF('dailyTransactions')}
                  className="flex items-center space-x-2 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 text-sm"
                >
                  <FiFileText className="h-4 w-4" />
                  <span>Export PDF</span>
                </button>
                <button
                  onClick={() => handleExportCSV('dailyTransactions')}
                  className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 text-sm"
                >
                  <FiDownload className="h-4 w-4" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-[#262626]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date/Time</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Receipt No</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Owner</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Vehicle</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Driver</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mode</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-200 dark:divide-gray-700">
                  {reportsData.dailyTransactions.transactions.map((txn, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                        {formatToIST(txn.date_time, true)}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{txn.receipt_no}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{txn.truck_owner}</td>
                      <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{txn.vehicle_number}</td>
                      <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{txn.driver_name || '-'}</td>
                      <td className="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">{formatCurrency(txn.total_amount)}</td>
                      <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 capitalize">{txn.payment_method}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          txn.payment_status === 'paid' ? 'bg-green-100 text-green-800' :
                          txn.payment_status === 'partial' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {txn.payment_status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-[#1A1A1A] rounded-lg border border-gray-200 dark:border-gray-700">
            <FiFilter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">Set filters and click Generate Report to view transactions</p>
          </div>
        )}
      </div>
    );
  };







  function renderFinancialSummary() {
    if (!reportsData.financial) return null;
    const { summary, recentTransactions } = reportsData.financial;

    return (
      <div className="space-y-6">
        <div className="flex justify-end mt-4">
          <button
            onClick={fetchReportData}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiRefreshCw className="h-4 w-4" />
            <span>Generate Report</span>
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Transactions</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {summary?.total_transactions || 0}
            </p>
          </div>
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {formatCurrency(summary?.total_amount)}
            </p>
          </div>
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Cash Collected</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {formatCurrency(summary?.total_cash)}
            </p>
          </div>
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Credit Outstanding</p>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">
              {formatCurrency(summary?.total_credit)}
            </p>
          </div>
        </div>

        {/* Recent Transactions */}
        {recentTransactions && recentTransactions.length > 0 && (
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-md font-semibold text-gray-900 dark:text-white">Recent Transactions</h4>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FiClock className="h-4 w-4 mr-1" />
                Times shown in IST
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-[#262626]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time (IST)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Receipt</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Vehicle</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-200 dark:divide-gray-700">
                  {recentTransactions.map((transaction, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                        {transaction.ist_time || formatToIST(transaction.date_time, false)}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                        {transaction.receipt_no}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        {transaction.truck_owner}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                        {transaction.vehicle_number}
                      </td>
                      <td className="px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400">
                        {formatCurrency(transaction.total_amount)}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          transaction.payment_status === 'paid' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                          transaction.payment_status === 'partial' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                          'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
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

  // Render Expense Report
  function renderExpenseReport() {
    if (!reportsData.expense) return null;
    
    const { period, summary, categoryBreakdown, dailyTotals } = reportsData.expense;
    
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Expense Report
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              From {formatDate(period?.startDate)} to {formatDate(period?.endDate)}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handleExportPDF('expense')}
              className="flex items-center space-x-2 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 text-sm"
            >
              <FiFileText className="h-4 w-4" />
              <span>Export PDF</span>
            </button>
            <button
              onClick={() => handleExportCSV('expense')}
              className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 text-sm"
            >
              <FiDownload className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date Preset</label>
            <select value={expenseFilters.preset} onChange={(e) => setExpenseFilters(prev => ({ ...prev, preset: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
            <select value={expenseFilters.category} onChange={(e) => setExpenseFilters(prev => ({ ...prev, category: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white">
              <option value="all">All</option>
              {reportsData.expense?.categoryBreakdown?.map((c, idx) => (
                <option key={idx} value={c.category || 'Uncategorized'}>{c.category || 'Uncategorized'}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2 md:col-span-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Start Date</label>
              <input type="date" value={expenseFilters.startDate} onChange={(e) => setExpenseFilters(prev => ({ ...prev, startDate: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">End Date</label>
              <input type="date" value={expenseFilters.endDate} onChange={(e) => setExpenseFilters(prev => ({ ...prev, endDate: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white" />
            </div>
          </div>
        </div>

        {/* Expense Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600 dark:text-red-400">Total Expenses</p>
                <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                  {formatCurrency(summary?.totalAmount)}
                </p>
              </div>
              <FiTrendingDown className="h-8 w-8 text-red-400 dark:text-red-500" />
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400">Total Entries</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  {summary?.totalCount || 0}
                </p>
              </div>
              <FiFileText className="h-8 w-8 text-blue-400 dark:text-blue-500" />
            </div>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 dark:text-purple-400">Categories</p>
                <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                  {categoryBreakdown?.length || 0}
                </p>
              </div>
              <FiPieChart className="h-8 w-8 text-purple-400 dark:text-purple-500" />
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        {categoryBreakdown && categoryBreakdown.length > 0 && (
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm">
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4">Category Breakdown</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(expenseFilters.category === 'all' ? categoryBreakdown : categoryBreakdown.filter(c => (c.category || 'Uncategorized') === expenseFilters.category)).map((cat, index) => (
                <div key={index} className="bg-gray-50 dark:bg-[#262626] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{cat.category || 'Uncategorized'}</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                      {cat.percentage || 0}%
                    </span>
                  </div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(cat.total)}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{cat.count} entries</p>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                      style={{ width: `${cat.percentage || 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Daily Totals */}
        {dailyTotals && dailyTotals.length > 0 && (
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm">
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4">Daily Expense Breakdown (IST)</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-[#262626]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date (IST)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Entries</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-200 dark:divide-gray-700">
                  {(expenseFilters.category === 'all' ? dailyTotals : dailyTotals).map((day, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                        {formatDate(day.date)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{day.count}</td>
                      <td className="px-4 py-3 text-sm font-bold text-red-600 dark:text-red-400">{formatCurrency(day.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
              <FiClock className="inline h-3 w-3 mr-1" />
              Dates shown in Indian Standard Time (IST)
            </p>
          </div>
        )}

        {/* Empty State */}
        {(!categoryBreakdown || categoryBreakdown.length === 0) && (!dailyTotals || dailyTotals.length === 0) && (
          <div className="text-center py-12">
            <FiTrendingDown className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No expense records found for selected date range</p>
          </div>
        )}
      </div>
    );
  };



  function renderDepositReport() {
    const data = reportsData.deposit;
    if (!data) return null;
    const { transactions = [], summary = {}, pagination = {} } = data;
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Deposit Transactions</h3>
          <div className="flex space-x-2">
            <button onClick={() => handleExportPDF('deposit')} className="flex items-center space-x-2 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 text-sm">
              <FiFileText className="h-4 w-4" />
              <span>Export PDF</span>
            </button>
            <button onClick={() => handleExportCSV('deposit')} className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 text-sm">
              <FiDownload className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date Preset</label>
            <select value={depositFilters.preset} onChange={(e) => setDepositFilters(prev => ({ ...prev, preset: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Owner</label>
            <select value={depositFilters.truckOwnerId} onChange={(e) => setDepositFilters(prev => ({ ...prev, truckOwnerId: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white">
              <option value="all">All Truck Owners</option>
              {owners.map(o => (
                <option key={o.id} value={o.id}>{o.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Transaction Type</label>
            <select value={depositFilters.transactionType} onChange={(e) => setDepositFilters(prev => ({ ...prev, transactionType: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white">
              <option value="all">All Transactions</option>
              <option value="add">Additions Only</option>
              <option value="deduct">Deductions Only</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Start Date</label>
              <input type="date" value={depositFilters.startDate} onChange={(e) => setDepositFilters(prev => ({ ...prev, startDate: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">End Date</label>
              <input type="date" value={depositFilters.endDate} onChange={(e) => setDepositFilters(prev => ({ ...prev, endDate: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 dark:text-green-400">Total Additions</p>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">{formatCurrency(summary?.totalAdditions)}</p>
              </div>
              <FiTrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600 dark:text-red-400">Total Deductions</p>
                <p className="text-2xl font-bold text-red-700 dark:text-red-300">{formatCurrency(summary?.totalDeductions)}</p>
              </div>
              <FiTrendingDown className="h-8 w-8 text-red-400" />
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400">Net Change</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{formatCurrency(summary?.netChange)}</p>
              </div>
              <FiDollarSign className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 dark:text-purple-400">Ending Balance</p>
                <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">{formatCurrency(summary?.endingBalance)}</p>
              </div>
              <FiDollarSign className="h-8 w-8 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-[#262626]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date & Time</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Owner</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Prev Bal</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">New Bal</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Receipt No</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Notes</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-200 dark:divide-gray-700">
                {transactions.map((t) => (
                  <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{formatToIST(t.date_time, true)}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{t.owner_name}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`text-xs px-2 py-1 rounded-full ${t.type === 'add' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : t.type === 'deduct' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>{t.type}</span>
                    </td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400">{formatCurrency(t.amount)}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{formatCurrency(t.previous_balance)}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{formatCurrency(t.new_balance)}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{t.receipt_no || '-'}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{t.notes || ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400">Page {pagination.page || depositFilters.page}</div>
            <div className="flex items-center space-x-2">
              <button onClick={() => setDepositFilters(prev => ({ ...prev, page: Math.max(1, (prev.page || 1) - 1) }))} className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">Prev</button>
              <button onClick={() => setDepositFilters(prev => ({ ...prev, page: (prev.page || 1) + 1 }))} className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render Client Report
  function renderClientReport() {
    if (!reportsData.client) return null;
    
    const { creditReport, totalCustomers, totalCredit } = reportsData.client;
    
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Client Report
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Customer credit analysis from {formatDate(clientFilters.startDate || dateRange.startDate)} to {formatDate(clientFilters.endDate || dateRange.endDate)}
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
            <button
              onClick={fetchReportData}
              className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 text-sm"
            >
              <FiRefreshCw className="h-4 w-4" />
              <span>Fetch</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date Preset</label>
            <select value={clientFilters.preset} onChange={(e) => setClientFilters(prev => ({ ...prev, preset: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-2 md:col-span-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Start Date</label>
              <input type="date" value={clientFilters.startDate} onChange={(e) => setClientFilters(prev => ({ ...prev, startDate: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">End Date</label>
              <input type="date" value={clientFilters.endDate} onChange={(e) => setClientFilters(prev => ({ ...prev, endDate: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Customer</label>
              <select value={clientFilters.truckOwner} onChange={(e) => setClientFilters(prev => ({ ...prev, truckOwner: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white">
                <option value="all">All Customers</option>
                {owners.map(o => (
                  <option key={o.id} value={o.name}>{o.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Client Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400">Total Clients</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  {totalCustomers || 0}
                </p>
              </div>
              <FiUsers className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 dark:text-green-400">Active with Credit</p>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                  {creditReport?.length || 0}
                </p>
              </div>
              <FiCreditCard className="h-8 w-8 text-green-400" />
            </div>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 dark:text-purple-400">Total Outstanding</p>
                <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                  {formatCurrency(totalCredit)}
                </p>
              </div>
              <FiDollarSign className="h-8 w-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Clients List */}
        {creditReport && creditReport.length > 0 ? (
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-[#262626]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pending Receipts</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Credit</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">First Credit Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Credit Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-200 dark:divide-gray-700">
                  {creditReport.map((client, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                            <FiUsers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{client.truck_owner}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Customer</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 dark:text-white">{client.pending_count}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">receipts pending</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-red-600 dark:text-red-400">{formatCurrency(client.total_credit)}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">outstanding</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {client.oldest_credit ? formatToIST(client.oldest_credit, true) : 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
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
            <p className="text-gray-500 dark:text-gray-400">No client data found for selected date range</p>
          </div>
        )}
      </div>
    );
  };

  // Render Partner Royalty Report
  function renderPartnerRoyaltyReport() {
    if (!reportsData.partnerRoyalty) return null;
    
    const { partnerSummary, regularSummary, partnerTotals, regularTotals, royalty, period } = reportsData.partnerRoyalty;
    const query = partnerOwnerQuery.trim().toLowerCase();
    const filteredPartner = query ? (partnerSummary || []).filter(o => (o.truck_owner || '').toLowerCase().includes(query)) : partnerSummary;
    const filteredRegular = query ? (regularSummary || []).filter(o => (o.truck_owner || '').toLowerCase().includes(query)) : regularSummary;
    
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Partner Royalty Report</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              From {formatDate(period?.startDate)} to {formatDate(period?.endDate)}
            </p>
          </div>
          <div className="w-full md:w-80 relative">
            <input
              type="text"
              value={partnerOwnerQuery}
              onChange={(e) => setPartnerOwnerQuery(e.target.value)}
              onFocus={() => setPartnerOwnerFocused(true)}
              onBlur={() => setTimeout(() => setPartnerOwnerFocused(false), 150)}
              placeholder="Filter by truck owner"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            {partnerOwnerFocused && (
              <div className="absolute z-10 mt-1 w-full bg-white dark:bg-[#262626] border border-gray-200 dark:border-gray-700 rounded-lg shadow">
                {owners
                  .filter(o => (o.name || '').toLowerCase().includes(query))
                  .slice(0, 10)
                  .map(o => (
                    <button
                      key={o.id}
                      type="button"
                      onMouseDown={() => setPartnerOwnerQuery(o.name || '')}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-900 dark:text-white"
                    >
                      {o.name}
                    </button>
                  ))}
                {query && owners.filter(o => (o.name || '').toLowerCase().includes(query)).length === 0 && (
                  <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">No matches</div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Royalty Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 dark:text-green-400">Partner Trips</p>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">{partnerTotals?.trips || 0}</p>
                <p className="text-xs text-green-600 dark:text-green-400">{partnerTotals?.brass?.toFixed(2) || 0} Brass</p>
              </div>
              <FiUsers className="h-8 w-8 text-green-400 dark:text-green-500" />
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400">Regular Trips</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{regularTotals?.trips || 0}</p>
                <p className="text-xs text-blue-600 dark:text-blue-400">{regularTotals?.brass?.toFixed(2) || 0} Brass</p>
              </div>
              <FiTruck className="h-8 w-8 text-blue-400 dark:text-blue-500" />
            </div>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 dark:text-purple-400">Rate Difference</p>
                <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">{formatCurrency(royalty?.rateDifference || 0)}</p>
                <p className="text-xs text-purple-600 dark:text-purple-400">per Brass</p>
              </div>
              <FiTrendingDown className="h-8 w-8 text-purple-400 dark:text-purple-500" />
            </div>
          </div>
          
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-2 border-orange-200 dark:border-orange-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold">Partner Royalty</p>
                <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">{formatCurrency(royalty?.royaltyAmount || 0)}</p>
                <p className="text-xs text-orange-600 dark:text-orange-400">Total Savings</p>
              </div>
              <FaRupeeSign className="h-8 w-8 text-orange-400 dark:text-orange-500" />
            </div>
          </div>
        </div>

        {/* Rate Comparison */}
        <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm">
          <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4">Rate Comparison</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
              <p className="text-sm text-blue-600 dark:text-blue-400">Regular Rate</p>
              <p className="text-xl font-bold text-blue-700 dark:text-blue-300">{formatCurrency(royalty?.regularRate || 0)}/Brass</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
              <p className="text-sm text-green-600 dark:text-green-400">Partner Rate</p>
              <p className="text-xl font-bold text-green-700 dark:text-green-300">{formatCurrency(royalty?.partnerRate || 0)}/Brass</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
              <p className="text-sm text-orange-600 dark:text-orange-400">Partner Discount</p>
              <p className="text-xl font-bold text-orange-700 dark:text-orange-300">{formatCurrency(royalty?.rateDifference || 0)}/Brass</p>
            </div>
          </div>
        </div>

        {/* Partner Summary Table */}
        {filteredPartner && filteredPartner.length > 0 && (
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-green-50 dark:bg-green-900/20">
              <h4 className="text-md font-semibold text-green-800 dark:text-green-300">Partner Owners</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-[#262626]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Owner</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Trips</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Brass</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Avg Rate</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Total Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Cash Paid</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Credit</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredPartner.map((owner, index) => (
                    <tr key={index} className="hover:bg-green-50 dark:hover:bg-green-900/10">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                        <div className="flex items-center">
                          <span className="px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs rounded-full mr-2">Partner</span>
                          {owner.truck_owner}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{owner.total_trips}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{owner.total_brass?.toFixed(2)}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{formatCurrency(owner.avg_rate)}</td>
                      <td className="px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400">{formatCurrency(owner.total_amount)}</td>
                      <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">{formatCurrency(owner.total_cash)}</td>
                      <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">{formatCurrency(owner.total_credit)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Regular Summary Table */}
        {filteredRegular && filteredRegular.length > 0 && (
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20">
              <h4 className="text-md font-semibold text-blue-800 dark:text-blue-300">Regular Owners</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-[#262626]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Owner</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Trips</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Brass</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Avg Rate</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Total Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Cash Paid</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Credit</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredRegular.slice(0, 10).map((owner, index) => (
                    <tr key={index} className="hover:bg-blue-50 dark:hover:bg-blue-900/10">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                        <div className="flex items-center">
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs rounded-full mr-2">Regular</span>
                          {owner.truck_owner}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{owner.total_trips}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{owner.total_brass?.toFixed(2)}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{formatCurrency(owner.avg_rate)}</td>
                      <td className="px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400">{formatCurrency(owner.total_amount)}</td>
                      <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">{formatCurrency(owner.total_cash)}</td>
                      <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">{formatCurrency(owner.total_credit)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {(!partnerSummary || partnerSummary.length === 0) && (!regularSummary || regularSummary.length === 0) && (
          <div className="text-center py-12">
            <FiUsers className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No transaction data found for selected date range</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <FilterModal />
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports & Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">View detailed reports and analytics for your business</p>
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

      {/* Report Selection */}
      <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Report
          </label>
          <select
            value={activeReport}
            onChange={(e) => setActiveReport(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
          >
            {tabsList.map(opt => (
              <option key={opt.id} value={opt.id}>{opt.label}</option>
            ))}
          </select>
        </div>
        {/* Report Controls */}
        {activeReport !== 'dailyTransactions' && activeReport !== 'ownerLedger' && (
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeReport === 'monthly' ? (
            <div className="space-y-4 border-2 border-blue-500 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/10 relative">
              <div className="absolute -top-3 left-4 bg-blue-500 text-white px-2 py-0.5 text-xs font-bold rounded shadow-sm">
                MONTHLY REPORT SETTINGS
              </div>
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Filter Mode
                </label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setMonthlyMode('month')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                      monthlyMode === 'month'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 ring-1 ring-blue-500'
                        : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    By Month
                  </button>
                  <button
                    onClick={() => setMonthlyMode('custom')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                      monthlyMode === 'custom'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 ring-1 ring-blue-500'
                        : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    Custom Range (Date & Time)
                  </button>
                </div>
              </div>

              {monthlyMode === 'month' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FiCalendar className="inline h-4 w-4 mr-1" />
                    Select Month
                  </label>
                  <input
                    type="month"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                    max={new Date().toISOString().slice(0, 7)}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Start Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      value={monthlyCustomRange.startDate}
                      onChange={(e) => setMonthlyCustomRange(prev => ({ ...prev, startDate: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      End Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      value={monthlyCustomRange.endDate}
                      onChange={(e) => setMonthlyCustomRange(prev => ({ ...prev, endDate: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              )}
            </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FiCalendar className="inline h-4 w-4 mr-1" />
                    Start Date (IST)
                  </label>
                  <input
                    type="date"
                    value={dateRange.startDate}
                    onChange={(e) => setDateRange(prev => ({ ...prev, startDate: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                    max={dateRange.endDate}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FiCalendar className="inline h-4 w-4 mr-1" />
                    End Date (IST)
                  </label>
                  <input
                    type="date"
                    value={dateRange.endDate}
                    onChange={(e) => setDateRange(prev => ({ ...prev, endDate: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                    min={dateRange.startDate}
                    max={getCurrentISTDate()}
                  />
                </div>
              </>
            )}
            <div className="md:col-span-2">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FiClock className="h-4 w-4 mr-1" />
                All dates and times are shown in Indian Standard Time (IST)
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Report Content */}
        <div className="p-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">Loading report data...</p>
            </div>
          ) : (
            <>
              {activeReport === 'credit' && renderCreditReport()}
              {activeReport === 'monthly' && renderMonthlyReport()}
              {activeReport === 'financial' && renderFinancialSummary()}
              {activeReport === 'deposit' && renderDepositReport()}
              {activeReport === 'client' && renderClientReport()}
              {activeReport === 'expense' && renderExpenseReport()}
              {activeReport === 'partnerRoyalty' && renderPartnerRoyaltyReport()}
              {activeReport === 'dailyTransactions' && renderDailyTransactionsReport()}
              {activeReport === 'ownerLedger' && (
                <OwnerLedgerReport 
                  owners={owners} 
                  formatCurrency={formatCurrency} 
                  formatDate={formatDate} 
                  formatToIST={formatToIST} 
                />
              )}
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
