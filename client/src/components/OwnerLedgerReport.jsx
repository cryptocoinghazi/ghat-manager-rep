import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiSearch, FiUser, FiDollarSign, FiCreditCard, FiCheckCircle, FiAlertCircle, FiClock, FiPlus, FiEdit, FiSave, FiX } from 'react-icons/fi';
import toast from 'react-hot-toast';

const OwnerLedgerReport = ({ owners, formatCurrency, formatDate, formatToIST }) => {
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [ledgerData, setLedgerData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showBulkPayModal, setShowBulkPayModal] = useState(false);
  const [bulkPayForm, setBulkPayForm] = useState({ amount: '', paymentMode: 'cash', notes: '' });
  const [processingPayment, setProcessingPayment] = useState(false);
  
  // Edit Receipt State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editableReceipt, setEditableReceipt] = useState(null);
  const [receiptHistory, setReceiptHistory] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  // Filter owners based on search
  const filteredOwners = searchQuery
    ? owners.filter(o => o.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : owners;

  const fetchLedgerData = async (ownerId) => {
    if (!ownerId) return;
    setLoading(true);
    try {
      console.log(`Fetching ledger for owner ${ownerId}...`);
      const response = await axios.get(`/api/payments/owner-ledger/${ownerId}`);
      console.log('Ledger response:', response.status);
      setLedgerData(response.data);
    } catch (error) {
      console.error('Error fetching ledger:', error);
      toast.error('Failed to fetch ledger data');
    } finally {
      setLoading(false);
    }
  };

  const handleOwnerSelect = (owner) => {
    setSelectedOwner(owner);
    setSearchQuery(owner.name);
    setIsFocused(false);
    fetchLedgerData(owner.id);
  };

  const fetchReceiptHistory = async (receiptId) => {
    try {
      const response = await axios.get(`/api/receipts/${receiptId}/history`);
      // Handle response structure { edits: [], payments: [] } or just []
      const historyData = response.data.edits || (Array.isArray(response.data) ? response.data : []);
      setReceiptHistory(historyData);
    } catch (error) {
      console.error('Error fetching history:', error);
      toast.error('Failed to fetch receipt history');
    }
  };

  const handleEditReceipt = (receipt) => {
    setEditableReceipt({
      ...receipt,
      local_time: formatToIST(receipt.date_time, true)
    });
    setReceiptHistory([]); // Clear previous history
    setIsEditModalOpen(true);
    fetchReceiptHistory(receipt.id);
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
        // Refresh ledger
        if (selectedOwner) {
          fetchLedgerData(selectedOwner.id);
        }
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

  const handleBulkPayment = async (e) => {
    e.preventDefault();
    if (!selectedOwner) return;

    setProcessingPayment(true);
    try {
      const response = await axios.post('/api/payments/bulk', {
        ownerId: selectedOwner.id,
        amount: bulkPayForm.amount,
        paymentMode: bulkPayForm.paymentMode,
        notes: bulkPayForm.notes
      });

      toast.success(`Payment processed! ${response.data.updatedReceiptsCount} receipts updated.`);
      if (response.data.depositAdded > 0) {
        toast.success(`${formatCurrency(response.data.depositAdded)} added to deposit balance.`);
      }
      setShowBulkPayModal(false);
      setBulkPayForm({ amount: '', paymentMode: 'cash', notes: '' });
      // Refresh ledger
      fetchLedgerData(selectedOwner.id);
    } catch (error) {
      console.error('Error processing bulk payment:', error);
      toast.error(error.response?.data?.error || 'Failed to process payment');
    } finally {
      setProcessingPayment(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Owner Ledger</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            View pending credit and transaction history for a truck owner
          </p>
        </div>
        
        {/* Owner Search */}
        <div className="w-full md:w-80 relative">
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (selectedOwner && e.target.value !== selectedOwner.name) {
                  setSelectedOwner(null);
                  setLedgerData(null);
                }
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              placeholder="Search Truck Owner..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
            />
          </div>
          
          {isFocused && filteredOwners.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-white dark:bg-[#262626] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredOwners.map(owner => (
                <button
                  key={owner.id}
                  onClick={() => handleOwnerSelect(owner)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-900 dark:text-white flex justify-between items-center"
                >
                  <span>{owner.name}</span>
                  {owner.vehicle_number && (
                    <span className="text-xs text-gray-500">{owner.vehicle_number}</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Loading ledger data...</p>
        </div>
      ) : ledgerData ? (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-600 dark:text-red-400">Total Pending</p>
                  <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                    {formatCurrency(ledgerData.summary.totalPending)}
                  </p>
                </div>
                <FiAlertCircle className="h-8 w-8 text-red-400" />
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 dark:text-green-400">Total Paid</p>
                  <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                    {formatCurrency(ledgerData.summary.totalPaid)}
                  </p>
                </div>
                <FiCheckCircle className="h-8 w-8 text-green-400" />
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Total Billed</p>
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                    {formatCurrency(ledgerData.summary.totalAmount)}
                  </p>
                </div>
                <FiDollarSign className="h-8 w-8 text-blue-400" />
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Deposit Balance</p>
                  <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                    {formatCurrency(ledgerData.owner.deposit_balance || 0)}
                  </p>
                </div>
                <FiCreditCard className="h-8 w-8 text-purple-400" />
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex justify-end">
            <button
              onClick={() => setShowBulkPayModal(true)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FiPlus className="h-4 w-4" />
              <span>Record Payment</span>
            </button>
          </div>

          {/* Receipts List */}
          <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white">Transaction History</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-[#262626]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Receipt No</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Vehicle</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Paid</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pending</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-200 dark:divide-gray-700">
                  {ledgerData.receipts.map((receipt) => (
                    <tr key={receipt.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {formatToIST(receipt.date_time, true)}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        {receipt.receipt_no}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        {receipt.vehicle_number}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        {formatCurrency(receipt.total_amount)}
                      </td>
                      <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">
                        {formatCurrency(receipt.cash_paid)}
                      </td>
                      <td className="px-6 py-4 text-sm text-red-600 dark:text-red-400 font-medium">
                        {formatCurrency(receipt.credit_amount)}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          receipt.payment_status === 'paid' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                          {receipt.payment_status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        <button
                          onClick={() => handleEditReceipt(receipt)}
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          <FiEdit className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {ledgerData.receipts.length === 0 && (
                    <tr>
                      <td colSpan="8" className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                        No receipts found for this owner.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-12 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
          <FiUser className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">Select a Truck Owner to view ledger</p>
        </div>
      )}

      {/* Bulk Payment Modal */}
      {showBulkPayModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white dark:bg-[#1A1A1A] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleBulkPayment}>
                <div className="bg-white dark:bg-[#1A1A1A] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 sm:mx-0 sm:h-10 sm:w-10">
                      <FiDollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        Record Bulk Payment
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          This payment will be applied to the oldest pending receipts first.
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Payment Amount
                            </label>
                            <input
                              type="number"
                              required
                              min="1"
                              step="0.01"
                              value={bulkPayForm.amount}
                              onChange={(e) => setBulkPayForm({...bulkPayForm, amount: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                              placeholder="Enter amount"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Payment Mode
                            </label>
                            <select
                              value={bulkPayForm.paymentMode}
                              onChange={(e) => setBulkPayForm({...bulkPayForm, paymentMode: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                            >
                              <option value="cash">Cash</option>
                              <option value="upi">UPI</option>
                              <option value="bank_transfer">Bank Transfer</option>
                              <option value="cheque">Cheque</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Notes / Reference No.
                            </label>
                            <textarea
                              value={bulkPayForm.notes}
                              onChange={(e) => setBulkPayForm({...bulkPayForm, notes: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                              rows="2"
                              placeholder="Optional notes"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-[#262626] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-200 dark:border-gray-700">
                  <button
                    type="submit"
                    disabled={processingPayment}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                  >
                    {processingPayment ? 'Processing...' : 'Confirm Payment'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowBulkPayModal(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-[#1A1A1A] text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Receipt Modal */}
      {isEditModalOpen && editableReceipt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Edit Payment Status</h3>
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
            
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-[#262626] p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Receipt No:</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{editableReceipt.receipt_no}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Date:</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{editableReceipt.local_time}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Vehicle:</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{editableReceipt.vehicle_number}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Total Amount</p>
                  <p className="text-lg font-bold text-blue-700 dark:text-blue-300">{formatCurrency(editableReceipt.total_amount)}</p>
                </div>
                <div className="bg-gray-50 dark:bg-[#262626] p-3 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Current Status</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    editableReceipt.payment_status === 'paid' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                    editableReceipt.payment_status === 'partial' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {editableReceipt.payment_status?.toUpperCase()}
                  </span>
                </div>
              </div>
              
              {/* Payment Status Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                        : 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span>Paid</span>
                      <span className="text-xs">{formatCurrency(editableReceipt.total_amount)}</span>
                    </div>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setEditableReceipt({
                        ...editableReceipt,
                        payment_status: 'partial',
                        cash_paid: editableReceipt.total_amount * 0.5,
                        credit_amount: editableReceipt.total_amount * 0.5
                      });
                    }}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      editableReceipt.payment_status === 'partial' 
                        ? 'bg-yellow-600 text-white' 
                        : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:hover:bg-yellow-900/50'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span>Partial</span>
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
                        : 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span>Credit</span>
                      <span className="text-xs">₹0</span>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Custom Amount Input */}
              <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Cash Paid Amount
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      value={editableReceipt.cash_paid}
                      onChange={(e) => {
                        const val = e.target.value;
                        const cashPaid = val === '' ? '' : parseFloat(val);
                        const numCash = val === '' ? 0 : parseFloat(val);
                        const total = parseFloat(editableReceipt.total_amount);
                        const credit = total - numCash;
                        setEditableReceipt({
                          ...editableReceipt,
                          cash_paid: cashPaid,
                          credit_amount: credit,
                          payment_status: numCash >= total ? 'paid' : 
                                         numCash > 0 ? 'partial' : 'unpaid'
                        });
                      }}
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      Full
                    </button>
                  </div>
                </div>
              
              {/* Payment Summary */}
              <div className="bg-gray-50 dark:bg-[#262626] p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Cash to be Paid</p>
                    <p className="text-lg font-bold text-green-600 dark:text-green-400">
                      {formatCurrency(editableReceipt.cash_paid || 0)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Credit Amount</p>
                    <p className="text-lg font-bold text-red-600 dark:text-red-400">
                      {formatCurrency(editableReceipt.credit_amount || 0)}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Payment Notes (Optional)
                </label>
                <textarea
                  value={editableReceipt.notes || ''}
                  onChange={(e) => setEditableReceipt({
                    ...editableReceipt,
                    notes: e.target.value
                  })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
                  placeholder="Add payment notes..."
                />
              </div>

              {/* Receipt Edit History */}
              {receiptHistory.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                    <FiClock className="mr-2" /> History
                  </h4>
                  <div className="bg-gray-50 dark:bg-[#262626] rounded-lg p-3 max-h-40 overflow-y-auto space-y-3">
                    {receiptHistory.map((history) => (
                      <div key={history.id} className="text-xs border-b border-gray-200 dark:border-gray-700 last:border-0 pb-2 last:pb-0">
                        <div className="flex justify-between text-gray-500 dark:text-gray-400 mb-1">
                          <span>{formatToIST(history.change_date, true)}</span>
                          <span className="text-xs bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-gray-700 dark:text-gray-300">
                             {history.changed_by || 'System'}
                          </span>
                        </div>
                        <div className="mt-1">
                          <span className="text-gray-500 capitalize font-medium">{history.field_name.replace(/_/g, ' ')}:</span> 
                          <span className="font-medium ml-1 text-gray-900 dark:text-gray-200 break-all">
                            {history.old_value} → {history.new_value}
                          </span>
                        </div>
                        {history.reason && (
                           <div className="text-xs text-gray-400 mt-1 italic pl-1 border-l-2 border-gray-300 dark:border-gray-600">
                             {history.reason}
                           </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-end space-x-3">
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

export default OwnerLedgerReport;
