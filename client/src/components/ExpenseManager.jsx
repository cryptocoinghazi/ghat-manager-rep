import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import { 
  FiPlus, FiEdit2, FiTrash2, FiFilter, FiX, FiDollarSign,
  FiCalendar, FiTag, FiMapPin, FiFileText, FiUser, FiCreditCard, FiDownload
} from 'react-icons/fi';
import { generateDisplayedExpensesPDF } from '../utils/pdfGenerator';

const CATEGORIES = [
  'LABOR', 'FUEL', 'MAINTENANCE', 'OFFICE', 
  'TRANSPORT', 'RENT', 'UTILITIES', 'FOOD', 'OTHER'
];

const PAYMENT_MODES = ['CASH', 'BANK_TRANSFER', 'UPI', 'CHEQUE', 'CREDIT'];

const ExpenseManager = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [summary, setSummary] = useState({ todayTotal: 0, monthTotal: 0, categoryMonthly: [] });
  const currentUser = React.useMemo(() => {
    try {
      const u = localStorage.getItem('user');
      return u ? JSON.parse(u) : null;
    } catch (e) {
      return null;
    }
  }, []);
  
  const [filters, setFilters] = useState({
    category: '',
    startDate: '',
    endDate: ''
  });

  const csvEscape = (v) => {
    if (v === null || v === undefined) return '';
    const s = String(v);
    const needsQuote = /[",\n]/.test(s);
    const escaped = s.replace(/"/g, '""');
    return needsQuote ? `"${escaped}"` : escaped;
  };

  const [formData, setFormData] = useState({
    date: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    category: 'LABOR',
    description: '',
    amount: '',
    payment_mode: 'CASH',
    receipt_number: '',
    vendor_name: '',
    ghat_location: '',
    approved_by: '',
    remarks: ''
  });

  useEffect(() => {
    fetchExpenses();
    fetchSummary();
  }, []);

  const getUTCFromIST = (localDateTimeString) => {
    if (!localDateTimeString) return null;
    // localDateTimeString is in YYYY-MM-DDThh:mm format
    // Append seconds and timezone offset for IST
    const dateIST = new Date(`${localDateTimeString}:00+05:30`);
    return dateIST.toISOString();
  };

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const params = {};
      if (filters.startDate) params.startDate = getUTCFromIST(filters.startDate);
      if (filters.endDate) params.endDate = getUTCFromIST(filters.endDate);
      if (filters.category) params.category = filters.category;
      
      const response = await axios.get('/api/expenses', { params });
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
      toast.error('Failed to load expenses');
    } finally {
      setLoading(false);
    }
  };

  const fetchSummary = async () => {
    try {
      const response = await axios.get('/api/expenses/summary');
      setSummary(response.data);
    } catch (error) {
      console.error('Error fetching summary:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.description || !formData.amount || !formData.ghat_location) {
      toast.error('Please fill in required fields');
      return;
    }

    try {
      if (editingExpense) {
        await axios.put(`/api/expenses/${editingExpense.id}`, formData);
        toast.success('Expense updated successfully');
      } else {
        await axios.post('/api/expenses', formData);
        toast.success('Expense added successfully');
      }
      
      resetForm();
      fetchExpenses();
      fetchSummary();
    } catch (error) {
      console.error('Error saving expense:', error);
      toast.error('Failed to save expense');
    }
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
    setFormData({
      date: format(new Date(expense.date), "yyyy-MM-dd'T'HH:mm"),
      category: expense.category,
      description: expense.description,
      amount: expense.amount,
      payment_mode: expense.payment_mode,
      receipt_number: expense.receipt_number || '',
      vendor_name: expense.vendor_name || '',
      ghat_location: expense.ghat_location,
      approved_by: expense.approved_by || '',
      remarks: expense.remarks || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this expense?')) return;
    
    try {
      await axios.delete(`/api/expenses/${id}`);
      toast.success('Expense deleted');
      fetchExpenses();
      fetchSummary();
    } catch (error) {
      console.error('Error deleting expense:', error);
      toast.error('Failed to delete expense');
    }
  };

  const resetForm = () => {
    setFormData({
      date: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
      category: 'LABOR',
      description: '',
      amount: '',
      payment_mode: 'CASH',
      receipt_number: '',
      vendor_name: '',
      ghat_location: '',
      approved_by: '',
      remarks: ''
    });
    setEditingExpense(null);
    setShowForm(false);
  };

  const applyFilters = () => {
    fetchExpenses();
  };

  const resetFilters = () => {
    setFilters({ category: '', startDate: '', endDate: '' });
    setTimeout(fetchExpenses, 0);
  };

  const exportDisplayedCSV = () => {
    // Helper to format date for CSV
    const formatDateForCSV = (dateStr) => {
      if (!dateStr) return '';
      try {
        return format(new Date(dateStr), 'dd-MM-yyyy HH:mm');
      } catch (e) {
        return dateStr;
      }
    };

    const headers = [
      'Date/Time', 'Category', 'Description', 'Amount (Rs)', 'Payment Mode',
      'Vendor', 'Ghat Location', 'Approved By', 'Remarks', 'Created By'
    ];
    
    const rows = expenses.map((e) => [
      csvEscape(formatDateForCSV(e.date)),
      csvEscape(e.category),
      csvEscape(e.description),
      e.amount ?? '',
      csvEscape(e.payment_mode?.replace('_', ' ') || ''),
      csvEscape(e.vendor_name || ''),
      csvEscape(e.ghat_location || ''),
      csvEscape(e.approved_by || ''),
      csvEscape(e.remarks || ''),
      csvEscape(e.created_by || '')
    ].join(','));

    // Summary calculations
    const totalAmount = expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0);
    const totalEntries = expenses.length;

    // Filter text
    let periodText = 'All Time';
    if (filters.startDate || filters.endDate) {
      const start = filters.startDate ? formatDateForCSV(filters.startDate) : 'Beginning';
      const end = filters.endDate ? formatDateForCSV(filters.endDate) : 'Now';
      periodText = `${start} to ${end}`;
    }
    const catText = filters.category || 'All Categories';

    // Helper to create a row with correct number of columns (10 columns total)
    const createRow = (col1, col2 = '') => {
      const row = Array(10).fill('');
      row[0] = csvEscape(col1);
      row[1] = csvEscape(col2);
      return row.join(',');
    };

    const headerBlock = [
      createRow('EXPENSES REPORT'),
      createRow('Generated on', formatDateForCSV(new Date())),
      createRow('Period', periodText),
      createRow('Filter Category', catText),
      createRow('Total Entries', totalEntries),
      createRow('Total Amount', `Rs ${totalAmount.toFixed(2)}`),
      Array(10).fill('').join(',') // Empty row with delimiters
    ];

    const csv = [
      ...headerBlock,
      headers.join(','),
      ...rows
    ].join('\n');

    // Add Byte Order Mark (BOM) for Excel UTF-8 compatibility
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `expenses_report_${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('CSV Exported Successfully');
  };

  const exportDisplayedPDF = () => {
    try {
      generateDisplayedExpensesPDF(expenses, filters);
      toast.success('PDF Exported Successfully');
    } catch (error) {
      console.error('Export failed:', error);
      toast.error('Failed to export PDF');
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getCategoryColor = (category) => {
    const colors = {
      LABOR: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      FUEL: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
      MAINTENANCE: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      OFFICE: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
      TRANSPORT: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      RENT: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
      UTILITIES: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400',
      FOOD: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400',
      OTHER: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400';
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Today's Expenses</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">{formatCurrency(summary.todayTotal)}</p>
            </div>
            <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full">
              <FiDollarSign className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">This Month</p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{formatCurrency(summary.monthTotal)}</p>
            </div>
            <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-full">
              <FiCalendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Entries</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{expenses.length}</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
              <FiFileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Filtered Amount</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {formatCurrency(expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0))}
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
              <FiDollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      {summary.categoryMonthly && summary.categoryMonthly.length > 0 && (
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Monthly Category Breakdown</h3>
          <div className="flex flex-wrap gap-2">
            {summary.categoryMonthly.map((cat) => (
              <div key={cat.category} className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(cat.category)}`}>
                {cat.category}: {formatCurrency(cat.total)}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FiPlus className="h-5 w-5" />
          <span>Add Expense</span>
        </button>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="px-3 py-2 border rounded-lg text-sm bg-white dark:bg-[#1A1A1A] border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          
          <input
            type="datetime-local"
            value={filters.startDate}
            onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
            className="px-3 py-2 border rounded-lg text-sm bg-white dark:bg-[#1A1A1A] border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="From"
          />
          
          <input
            type="datetime-local"
            value={filters.endDate}
            onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
            className="px-3 py-2 border rounded-lg text-sm bg-white dark:bg-[#1A1A1A] border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="To"
          />
          
          <button
            onClick={applyFilters}
            className="flex items-center space-x-1 px-3 py-2 bg-gray-600 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 text-sm transition-colors"
          >
            <FiFilter className="h-4 w-4" />
            <span>Apply</span>
          </button>
          
          <button
            onClick={resetFilters}
            className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 transition-colors"
          >
            Reset
          </button>

          {currentUser?.role === 'admin' && (
            <>
              <button
                onClick={exportDisplayedPDF}
                className="flex items-center space-x-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm transition-colors"
                title="Export displayed expenses to PDF"
              >
                <FiFileText className="h-4 w-4" />
                <span>Export PDF</span>
              </button>
              <button
                onClick={exportDisplayedCSV}
                className="flex items-center space-x-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm transition-colors"
                title="Export displayed expenses to CSV"
              >
                <FiDownload className="h-4 w-4" />
                <span>Export CSV</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Expense Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {editingExpense ? 'Edit Expense' : 'Add New Expense'}
              </h3>
              <button onClick={resetForm} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                <FiX className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    <FiCalendar className="inline h-4 w-4 mr-1" />
                    Date *
                  </label>
                  <input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    <FiTag className="inline h-4 w-4 mr-1" />
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    <FiFileText className="inline h-4 w-4 mr-1" />
                    Description *
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter expense description"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    <FiDollarSign className="inline h-4 w-4 mr-1" />
                    Amount (Rs.) *
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0.00"
                    step="0.01"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    <FiCreditCard className="inline h-4 w-4 mr-1" />
                    Payment Mode
                  </label>
                  <select
                    name="payment_mode"
                    value={formData.payment_mode}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {PAYMENT_MODES.map(mode => (
                      <option key={mode} value={mode}>
                        {mode.replace('_', ' ')}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    <FiMapPin className="inline h-4 w-4 mr-1" />
                    Ghat Location *
                  </label>
                  <input
                    type="text"
                    name="ghat_location"
                    value={formData.ghat_location}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter ghat location"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    <FiUser className="inline h-4 w-4 mr-1" />
                    Vendor Name
                  </label>
                  <input
                    type="text"
                    name="vendor_name"
                    value={formData.vendor_name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Vendor name (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Receipt Number
                  </label>
                  <input
                    type="text"
                    name="receipt_number"
                    value={formData.receipt_number}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Receipt number (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Approved By
                  </label>
                  <input
                    type="text"
                    name="approved_by"
                    value={formData.approved_by}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Approver name (optional)"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Remarks
                  </label>
                  <textarea
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="2"
                    placeholder="Additional notes (optional)"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {editingExpense ? 'Update Expense' : 'Add Expense'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Expenses Table */}
      <div className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
        {loading ? (
          <div className="p-8 text-center">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Loading expenses...</p>
          </div>
        ) : expenses.length === 0 ? (
          <div className="p-8 text-center">
            <FiFileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 dark:text-gray-400">No expenses found</p>
            <button
              onClick={() => setShowForm(true)}
              className="mt-3 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Add your first expense
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-[#262626]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Description</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Payment</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Location</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-200 dark:divide-gray-700">
                {expenses.map((expense) => (
                  <tr key={expense.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {format(new Date(expense.date), 'dd-MM-yyyy HH:mm')}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(expense.category)}`}>
                        {expense.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white max-w-xs truncate">
                      {expense.description}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-red-600 dark:text-red-400">
                      {formatCurrency(expense.amount)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      {expense.payment_mode?.replace('_', ' ')}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      {expense.ghat_location}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <div className="flex items-center space-x-2">
                        {currentUser && (currentUser.role === 'admin' || expense.created_by === currentUser.username) && (
                          <button
                            onClick={() => handleEdit(expense)}
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            title="Edit"
                          >
                            <FiEdit2 className="h-4 w-4" />
                          </button>
                        )}
                        {currentUser && currentUser.role === 'admin' && (
                          <button
                            onClick={() => handleDelete(expense.id)}
                            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                            title="Delete"
                          >
                            <FiTrash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseManager;
