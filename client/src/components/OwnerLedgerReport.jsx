import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiSearch, FiUser, FiDollarSign, FiCreditCard, FiCheckCircle, FiAlertCircle, FiClock, FiPlus, FiEdit, FiSave, FiX, FiFileText, FiEdit2, FiUserX, FiUserCheck } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { generateOwnerLedgerPDF } from '../utils/pdfGenerator';

const OwnerLedgerReport = ({ owners, formatCurrency, formatDate, formatToIST, settings }) => {
  const unit = settings?.unit || 'Brass';
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

  const handleExportPDF = () => {
    try {
      if (!ledgerData || !selectedOwner) {
        toast.error('No ledger data to export');
        return;
      }
      generateOwnerLedgerPDF(ledgerData, selectedOwner.name, unit);
      toast.success('PDF exported successfully!');
    } catch (error) {
      console.error('Error exporting PDF:', error);
      toast.error('Failed to export PDF');
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
        
        {/* Owner Search and Actions */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto items-end">
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

          {selectedOwner && (
            <div className="flex items-center space-x-2">
              <button
                onClick={handleExportPDF}
                className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <FiFileText className="h-4 w-4" />
                <span>Export PDF</span>
              </button>
              <button
                onClick={() => setShowBulkPayModal(true)}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiPlus className="h-4 w-4" />
                <span>Record Payment</span>
              </button>
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
            <div className="bg-red-600 dark:bg-red-700 p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-100">Total Pending</p>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(ledgerData.summary.totalPending)}
                  </p>
                </div>
                <FiAlertCircle className="h-8 w-8 text-red-200" />
              </div>
            </div>

            <div className="bg-green-600 dark:bg-green-700 p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-100">Total Paid</p>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(ledgerData.summary.totalPaid)}
                  </p>
                </div>
                <FiCheckCircle className="h-8 w-8 text-green-200" />
              </div>
            </div>

            <div className="bg-blue-600 dark:bg-blue-700 p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-100">Total Billed</p>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(ledgerData.summary.totalAmount)}
                  </p>
                </div>
                <FiDollarSign className="h-8 w-8 text-blue-200" />
              </div>
            </div>

            <div className="bg-purple-600 dark:bg-purple-700 p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-100">Deposit Balance</p>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(ledgerData.owner.deposit_balance || 0)}
                  </p>
                </div>
                <FiCreditCard className="h-8 w-8 text-purple-200" />
              </div>
            </div>
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{unit}</th>
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
                        {receipt.brass_qty}
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
                              Notes (Optional)
                            </label>
                            <textarea
                              value={bulkPayForm.notes}
                              onChange={(e) => setBulkPayForm({...bulkPayForm, notes: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                              placeholder="Any comments..."
                              rows="3"
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
                    {processingPayment ? 'Processing...' : 'Process Payment'}
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
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white dark:bg-[#1A1A1A] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white dark:bg-[#1A1A1A] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 sm:mx-0 sm:h-10 sm:w-10">
                    <FiEdit className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Edit Payment
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Receipt #{editableReceipt.receipt_no} - {editableReceipt.local_time}
                    </p>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Total Amount: {formatCurrency(editableReceipt.total_amount)}
                        </label>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Paid Amount
                        </label>
                        <input
                          type="number"
                          required
                          min="0"
                          max={editableReceipt.total_amount}
                          step="0.01"
                          value={editableReceipt.cash_paid}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value) || 0;
                            setEditableReceipt({
                              ...editableReceipt,
                              cash_paid: val,
                              credit_amount: editableReceipt.total_amount - val,
                              payment_status: val >= editableReceipt.total_amount ? 'paid' : (val > 0 ? 'partial' : 'pending')
                            });
                          }}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Status
                        </label>
                        <select
                          value={editableReceipt.payment_status}
                          onChange={(e) => setEditableReceipt({...editableReceipt, payment_status: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                        >
                          <option value="paid">PAID</option>
                          <option value="partial">PARTIAL</option>
                          <option value="pending">PENDING</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Notes
                        </label>
                        <textarea
                          value={editableReceipt.notes || ''}
                          onChange={(e) => setEditableReceipt({...editableReceipt, notes: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                          rows="2"
                        ></textarea>
                      </div>

                      {/* Edit History */}
                      {receiptHistory.length > 0 && (
                        <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Edit History</h4>
                          <div className="bg-gray-50 dark:bg-[#262626] rounded-lg p-3 max-h-40 overflow-y-auto text-xs">
                            {receiptHistory.map((edit, idx) => (
                              <div key={idx} className="mb-2 pb-2 border-b border-gray-200 dark:border-gray-700 last:border-0 last:mb-0 last:pb-0">
                                <p className="text-gray-500 dark:text-gray-400">
                                  {formatToIST(edit.created_at || edit.timestamp, true)} by {edit.user || 'Admin'}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                  {edit.changes || edit.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-[#262626] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-200 dark:border-gray-700">
                <button
                  type="button"
                  onClick={handleUpdateReceipt}
                  disabled={isUpdating}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                >
                  {isUpdating ? 'Updating...' : 'Update Payment'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-[#1A1A1A] text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
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