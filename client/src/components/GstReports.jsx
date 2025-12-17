import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCalendar, FaDownload, FaChartPie, FaRupeeSign, FaSearch, FaEye, FaEdit, FaPrint, FaFileCsv } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { generatePDF } from '../utils/pdfGenerator';
import { printThermalReceipt } from '../utils/thermalPrinter';

const GstReports = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });
  
  const [summary, setSummary] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clientFilter, setClientFilter] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [truckOwners, setTruckOwners] = useState([]);
  const [settings, setSettings] = useState({});

  useEffect(() => {
    fetchSettings();
    fetchTruckOwners();
  }, []);

  useEffect(() => {
    fetchReport();
  }, [dateRange]);

  useEffect(() => {
    filterTransactions();
  }, [transactions, clientFilter]);

  const fetchSettings = async () => {
    try {
      const response = await axios.get('/api/settings');
      setSettings(response.data);
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  const fetchTruckOwners = async () => {
    try {
      const response = await axios.get('/api/settings/truck-owners');
      // Filter only GST clients
      const gstClients = response.data.filter(owner => owner.is_gst_client);
      setTruckOwners(gstClients);
    } catch (error) {
      console.error('Error fetching truck owners:', error);
    }
  };

  const fetchReport = async () => {
    setLoading(true);
    try {
      const start = new Date(dateRange.startDate);
      start.setHours(0, 0, 0, 0);
      const end = new Date(dateRange.endDate);
      end.setHours(23, 59, 59, 999);

      const response = await axios.get('/api/gst-reports/summary', {
        params: {
          startDate: start.toISOString(),
          endDate: end.toISOString()
        }
      });
      
      setSummary(response.data.summary);
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error('Error fetching GST report:', error);
      toast.error('Failed to load GST reports');
    } finally {
      setLoading(false);
    }
  };

  const filterTransactions = () => {
    if (!clientFilter.trim()) {
      setFilteredTransactions(transactions);
      return;
    }
    const filtered = transactions.filter(tx => 
      tx.truck_owner.toLowerCase().includes(clientFilter.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const handleClientSelect = (name) => {
    setClientFilter(name);
    setShowSuggestions(false);
  };

  const handlePrint = (receipt) => {
    toast.success('Printing Thermal Receipt...');
    const flatSettings = settings.flat || settings || {};
    printThermalReceipt(receipt, flatSettings);
  };

  const handlePreview = (receipt) => {
    toast.loading('Generating Tax Invoice PDF...');
    const flatSettings = settings.flat || settings || {};
    generatePDF(receipt, flatSettings);
  };

  const handleEdit = (receipt) => {
    toast('Edit functionality coming soon', { icon: '🚧' });
  };

  const handleExportCSV = () => {
    if (filteredTransactions.length === 0) {
      toast.error('No data to export');
      return;
    }

    const headers = ['Date', 'Invoice No', 'Client', 'Vehicle', 'Taxable', 'CGST', 'SGST', 'Total'];
    const csvContent = [
      headers.join(','),
      ...filteredTransactions.map(tx => [
        new Date(tx.date_time).toLocaleDateString('en-IN'),
        tx.receipt_no,
        `"${tx.truck_owner}"`,
        tx.vehicle_number,
        tx.total_before_gst,
        tx.cgst_amount,
        tx.sgst_amount,
        tx.total_amount
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `gst_report_${dateRange.startDate}_${dateRange.endDate}.csv`;
    link.click();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount || 0);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">GST Reports</h1>
          <p className="text-gray-600">Tax liability and transaction summary</p>
        </div>
        <div className="flex items-center space-x-4 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-2">
            <FaCalendar className="text-gray-400" />
            <input
              type="date"
              name="startDate"
              value={dateRange.startDate}
              onChange={handleDateChange}
              className="border-none focus:ring-0 text-sm text-gray-600"
            />
          </div>
          <span className="text-gray-400">-</span>
          <div className="flex items-center space-x-2">
            <input
              type="date"
              name="endDate"
              value={dateRange.endDate}
              onChange={handleDateChange}
              className="border-none focus:ring-0 text-sm text-gray-600"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : summary && (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Total Taxable Value</h3>
                <div className="p-2 bg-blue-50 rounded-lg">
                  <FaChartPie className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(summary.total_taxable_value)}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Total CGST</h3>
                <div className="p-2 bg-purple-50 rounded-lg">
                  <FaRupeeSign className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(summary.total_cgst)}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Total SGST</h3>
                <div className="p-2 bg-purple-50 rounded-lg">
                  <FaRupeeSign className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(summary.total_sgst)}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Total GST Collected</h3>
                <div className="p-2 bg-green-50 rounded-lg">
                  <FaRupeeSign className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(summary.total_gst_collected)}</p>
              <p className="text-xs text-gray-500 mt-1">{summary.total_receipts} Invoices</p>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-visible">
            <div className="px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <h3 className="text-lg font-semibold text-gray-900">Transaction Details</h3>
              
              <div className="flex items-center space-x-4 w-full md:w-auto">
                {/* Client Filter */}
                <div className="relative flex-1 md:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Filter by Client Name..."
                    value={clientFilter}
                    onChange={(e) => {
                      setClientFilter(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    className="pl-10 block w-full sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {/* Suggestions Dropdown */}
                  {showSuggestions && clientFilter && (
                    <div className="absolute z-10 w-full bg-white mt-1 border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {truckOwners
                        .filter(owner => owner.name.toLowerCase().includes(clientFilter.toLowerCase()))
                        .map(owner => (
                          <div
                            key={owner.id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                            onClick={() => handleClientSelect(owner.name)}
                          >
                            {owner.name}
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                <button 
                  onClick={handleExportCSV}
                  className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-2 rounded-lg"
                >
                  <FaFileCsv className="h-4 w-4" />
                  <span className="text-sm font-medium">Export CSV</span>
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice No</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Taxable</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">CGST</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">SGST</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(tx.date_time).toLocaleDateString('en-IN')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                          {tx.receipt_no}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {tx.truck_owner}
                          <span className="block text-xs text-gray-500">{tx.vehicle_number}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                          {formatCurrency(tx.total_before_gst)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">
                          {formatCurrency(tx.cgst_amount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">
                          {formatCurrency(tx.sgst_amount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">
                          {formatCurrency(tx.total_amount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                          <div className="flex items-center justify-center space-x-3">
                            <button 
                              onClick={() => handlePreview(tx)}
                              className="text-blue-600 hover:text-blue-900"
                              title="View Invoice"
                            >
                              <FaEye className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={() => handleEdit(tx)}
                              className="text-yellow-600 hover:text-yellow-900"
                              title="Edit"
                            >
                              <FaEdit className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={() => handlePrint(tx)}
                              className="text-gray-600 hover:text-gray-900"
                              title="Print Thermal"
                            >
                              <FaPrint className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="px-6 py-12 text-center text-gray-500">
                        No GST transactions found for selected period and filter
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GstReports;
