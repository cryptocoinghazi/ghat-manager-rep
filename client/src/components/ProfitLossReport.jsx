import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiDollarSign, FiTrendingUp, FiTrendingDown, FiActivity, FiRefreshCw, FiAlertCircle } from 'react-icons/fi';
import { formatCurrency } from '../utils/formatUtils';
import { toast } from 'react-hot-toast';

const ProfitLossReport = () => {
  // State for date range
  const getStartOfMonth = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    // Adjust for IST
    const offset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(start.getTime() + offset);
    return istDate.toISOString().split('T')[0];
  };

  const getCurrentDate = () => {
    const now = new Date();
    // Adjust for IST
    const offset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(now.getTime() + offset);
    return istDate.toISOString().split('T')[0];
  };

  const [dateRange, setDateRange] = useState({
    startDate: getStartOfMonth(),
    endDate: getCurrentDate()
  });

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfitLossData = async () => {
    if (!dateRange.startDate || !dateRange.endDate) {
      toast.error('Please select both start and end dates');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('/api/reports/profit-loss', {
        params: {
          startDate: dateRange.startDate,
          endDate: dateRange.endDate
        }
      });
      setData(response.data);
    } catch (err) {
      console.error('Error fetching Profit & Loss data:', err);
      setError('Failed to load financial data. Please try again.');
      toast.error('Failed to load Profit & Loss data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfitLossData();
  }, []); // Initial load

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading && !data) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg text-center">
        <FiAlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
        <h3 className="text-lg font-medium text-red-800 dark:text-red-200">{error}</h3>
        <button
          onClick={fetchProfitLossData}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="bg-white dark:bg-[#1A1A1A] p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Profit & Loss Statement</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Financial performance summary for the selected period
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 items-end sm:items-center">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="date"
                name="startDate"
                value={dateRange.startDate}
                onChange={handleDateChange}
                className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500"
              />
              <span className="hidden sm:inline text-gray-400 self-center">to</span>
              <input
                type="date"
                name="endDate"
                value={dateRange.endDate}
                onChange={handleDateChange}
                className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={fetchProfitLossData}
              disabled={loading}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 text-sm font-medium"
            >
              <FiRefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {data && (
        <>
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Net Profit */}
            <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 relative overflow-hidden">
              <div className={`absolute top-0 right-0 p-4 opacity-10`}>
                <FiDollarSign className="h-24 w-24" />
              </div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Net Profit</p>
              <h3 className={`text-3xl font-bold mt-2 ${data.summary.netProfit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {formatCurrency(data.summary.netProfit)}
              </h3>
              <p className="text-xs text-gray-400 mt-2">Revenue - Expenses</p>
            </div>

            {/* Total Revenue */}
            <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Revenue</p>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2">
                    {formatCurrency(data.summary.totalRevenue)}
                  </h3>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <FiTrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between text-xs text-gray-500">
                <span>Cash: {formatCurrency(data.summary.cashCollected)}</span>
                <span>Credit: {formatCurrency(data.summary.creditGiven)}</span>
              </div>
            </div>

            {/* Total Expenses */}
            <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Expenses</p>
                  <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mt-2">
                    {formatCurrency(data.summary.totalExpenses)}
                  </h3>
                </div>
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                  <FiTrendingDown className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                {data.expenses.breakdown.length} Categories Recorded
              </p>
            </div>

            {/* Cash Position */}
            <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Cash Position</p>
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-2">
                    {formatCurrency(data.summary.cashPosition)}
                  </h3>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <FiActivity className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                Liquidity: Cash + Deposits - Expenses
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Expense Breakdown */}
            <div className="lg:col-span-2 bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Expense Breakdown</h3>
              <div className="space-y-4">
                {data.expenses.breakdown.length > 0 ? (
                  data.expenses.breakdown.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{item.category}</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{formatCurrency(item.amount)}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-red-500 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((item.amount / data.summary.totalExpenses) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{item.count} transaction(s)</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-8">No expense data available for this period.</p>
                )}
              </div>
            </div>

            {/* Top Clients & Operational Metrics */}
            <div className="space-y-6">
              {/* Operational Metrics */}
              <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Operational Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receipts Generated</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{data.operational.totalReceipts}</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receipts Deleted</p>
                    <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">{data.operational.deletedReceipts}</p>
                  </div>
                </div>
              </div>

              {/* Top 5 Clients by Credit */}
              <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top 5 Clients (Credit)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 text-xs font-medium text-gray-500 uppercase">Client</th>
                        <th className="text-right py-2 text-xs font-medium text-gray-500 uppercase">Credit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {data.topClients.length > 0 ? (
                        data.topClients.map((client, index) => (
                          <tr key={index}>
                            <td className="py-3 text-sm text-gray-900 dark:text-white">{client.name}</td>
                            <td className="py-3 text-sm text-right font-medium text-orange-600 dark:text-orange-400">
                              {formatCurrency(client.credit)}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2" className="py-4 text-center text-sm text-gray-500">
                            No credit data available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfitLossReport;
