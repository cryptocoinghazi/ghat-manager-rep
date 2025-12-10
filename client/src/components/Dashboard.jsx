import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
  FiFileText, 
  FiDollarSign, 
  FiCreditCard, 
  FiTrendingUp,
  FiPlus,
  FiBarChart2,
  FiTruck,
  FiClock,
  FiRefreshCw
} from 'react-icons/fi';
import { format } from 'date-fns';

const Dashboard = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    dailySummary: null,
    expenseSummary: null,
    creditReport: null,
    recentReceipts: [],
    recentExpenses: [],
    monthlyReport: null
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount || 0);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      return format(new Date(dateString), 'dd MMM yyyy');
    } catch {
      return dateString;
    }
  };

  const formatTime = (dateString) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      });
    } catch {
      return '';
    }
  };

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const today = new Date().toISOString().split('T')[0];
      
      const [dailySummaryRes, expenseSummaryRes, creditReportRes, monthlyReportRes, recentExpensesRes] = await Promise.all([
        axios.get('/api/reports/daily-summary', { params: { date: today } }),
        axios.get('/api/expenses/summary'),
        axios.get('/api/reports/credit-report'),
        axios.get('/api/reports/monthly-report'),
        axios.get('/api/expenses')
      ]);

      setDashboardData({
        dailySummary: dailySummaryRes.data,
        expenseSummary: expenseSummaryRes.data,
        creditReport: creditReportRes.data,
        recentReceipts: dailySummaryRes.data.recentTransactions?.slice(0, 5) || [],
        recentExpenses: recentExpensesRes.data?.slice(0, 5) || [],
        monthlyReport: monthlyReportRes.data
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-yellow-100 text-yellow-800';
      case 'unpaid': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      LABOR: 'bg-blue-100 text-blue-800',
      FUEL: 'bg-orange-100 text-orange-800',
      MAINTENANCE: 'bg-yellow-100 text-yellow-800',
      OFFICE: 'bg-purple-100 text-purple-800',
      TRANSPORT: 'bg-green-100 text-green-800',
      RENT: 'bg-red-100 text-red-800',
      UTILITIES: 'bg-cyan-100 text-cyan-800',
      FOOD: 'bg-pink-100 text-pink-800',
      OTHER: 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-500">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const { dailySummary, expenseSummary, creditReport, recentReceipts, recentExpenses, monthlyReport } = dashboardData;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user?.username || 'User'}!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your ghat operations today.
          </p>
        </div>
        <button
          onClick={fetchDashboardData}
          disabled={loading}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          <FiRefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Today's Receipts</p>
              <p className="text-2xl font-bold text-blue-600">
                {dailySummary?.summary?.total_transactions || 0}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {formatCurrency(dailySummary?.summary?.total_amount)}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FiTruck className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Today's Expenses</p>
              <p className="text-2xl font-bold text-red-600">
                {formatCurrency(expenseSummary?.todayTotal)}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                This month: {formatCurrency(expenseSummary?.monthTotal)}
              </p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <FiDollarSign className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Credit</p>
              <p className="text-2xl font-bold text-orange-600">
                {formatCurrency(creditReport?.totalCredit)}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {creditReport?.totalCustomers || 0} customers
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <FiCreditCard className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Monthly Revenue</p>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(monthlyReport?.summary?.total_amount)}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {monthlyReport?.summary?.total_transactions || 0} transactions
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FiTrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      <div className={`grid ${user?.role === 'admin' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
        <Link
          to="/receipt"
          className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-sm p-5 hover:from-blue-600 hover:to-blue-700 transition-all"
        >
          <FiPlus className="h-6 w-6" />
          <span className="text-lg font-semibold">New Receipt</span>
        </Link>

        <Link
          to="/expenses"
          className="flex items-center justify-center space-x-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-sm p-5 hover:from-red-600 hover:to-red-700 transition-all"
        >
          <FiDollarSign className="h-6 w-6" />
          <span className="text-lg font-semibold">Add Expense</span>
        </Link>

        {user?.role === 'admin' && (
          <Link
            to="/reports"
            className="flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg shadow-sm p-5 hover:from-purple-600 hover:to-purple-700 transition-all"
          >
            <FiBarChart2 className="h-6 w-6" />
            <span className="text-lg font-semibold">View Reports</span>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <FiFileText className="h-5 w-5 mr-2 text-blue-600" />
              Recent Receipts
            </h2>
            <Link to="/register" className="text-sm text-blue-600 hover:text-blue-800">
              View All
            </Link>
          </div>
          <div className="p-4">
            {recentReceipts.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <FiFileText className="h-10 w-10 mx-auto mb-2 text-gray-400" />
                <p>No receipts today</p>
              </div>
            ) : (
              <div className="space-y-3">
                {recentReceipts.map((receipt, index) => (
                  <div
                    key={receipt.receipt_no || index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-gray-900 truncate">
                          {receipt.truck_owner}
                        </p>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(receipt.payment_status)}`}>
                          {receipt.payment_status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                        <span>{receipt.vehicle_number}</span>
                        <span className="flex items-center">
                          <FiClock className="h-3 w-3 mr-1" />
                          {formatTime(receipt.date_time)}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {formatCurrency(receipt.total_amount)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {receipt.brass_qty} Brass
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <FiDollarSign className="h-5 w-5 mr-2 text-red-600" />
              Recent Expenses
            </h2>
            <Link to="/expenses" className="text-sm text-blue-600 hover:text-blue-800">
              View All
            </Link>
          </div>
          <div className="p-4">
            {recentExpenses.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <FiDollarSign className="h-10 w-10 mx-auto mb-2 text-gray-400" />
                <p>No expenses recorded</p>
              </div>
            ) : (
              <div className="space-y-3">
                {recentExpenses.map((expense, index) => (
                  <div
                    key={expense.id || index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-gray-900 truncate">
                          {expense.description}
                        </p>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(expense.category)}`}>
                          {expense.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                        <span>{expense.ghat_location}</span>
                        <span>{expense.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-600">
                        -{formatCurrency(expense.amount)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {expense.payment_mode?.replace('_', ' ')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {creditReport?.creditReport && creditReport.creditReport.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <FiCreditCard className="h-5 w-5 mr-2 text-orange-600" />
              Top Credit Customers
            </h2>
            {user?.role === 'admin' && (
              <Link to="/reports" className="text-sm text-blue-600 hover:text-blue-800">
                View Full Report
              </Link>
            )}
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {creditReport.creditReport.slice(0, 6).map((customer, index) => (
                <div
                  key={customer.truck_owner || index}
                  className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-100"
                >
                  <div>
                    <p className="font-medium text-gray-900">{customer.truck_owner}</p>
                    <p className="text-sm text-gray-500">
                      {customer.pending_count} pending receipts
                    </p>
                  </div>
                  <p className="font-semibold text-orange-600">
                    {formatCurrency(customer.total_credit)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
