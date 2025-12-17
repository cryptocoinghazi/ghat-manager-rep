import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiPrinter, FiSave, FiUserPlus } from 'react-icons/fi';
import { FaCalculator } from 'react-icons/fa';
import { generatePDF } from '../utils/pdfGenerator';
import { printThermalReceipt } from '../utils/thermalPrinter';
import { refreshDashboardStats } from './Layout';

const getStatusColor = (status) => {
  switch (status) {
    case 'paid': return 'bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium';
    case 'partial': return 'bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium';
    case 'unpaid': return 'bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium';
    default: return 'bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full font-medium';
  }
};

const GstReceiptForm = ({ settings, truckOwners, fetchTruckOwners }) => {
  const flatSettings = settings?.flat || settings || {};
  const ownerInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    truck_owner: '',
    vehicle_number: '',
    brass_qty: '',
    rate: flatSettings.default_rate || '1200',
    loading_charge: flatSettings.loading_charge || '150',
    cash_paid: '',
    notes: '',
    gst_rate: '5.00'
  });

  const [calculations, setCalculations] = useState({
    baseAmount: 0,
    totalBeforeGst: 0,
    gstAmount: 0,
    cgst: 0,
    sgst: 0,
    totalBill: 0,
    creditAmount: 0
  });

  const [receiptNumber, setReceiptNumber] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState({});
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [selectedOwnerInfo, setSelectedOwnerInfo] = useState(null);
  const [ownerSuggestions, setOwnerSuggestions] = useState([]);
  const [vehicleSuggestions, setVehicleSuggestions] = useState([]);
  const [useDepositBalance, setUseDepositBalance] = useState(false);
  const [customDepositDeduction, setCustomDepositDeduction] = useState('');

  // GST Clients only
  const gstTruckOwners = truckOwners ? truckOwners.filter(owner => owner.is_gst_client) : [];

  useEffect(() => {
    fetchNextReceiptNumber();
    fetchRecentTransactions();
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      const key = (e.key || '').toLowerCase();
      if (e.ctrlKey && !e.shiftKey && key === 'p') {
        e.preventDefault();
        if (validateForm()) {
          handleThermalPrint();
        } else {
          toast.error('Fix validation errors before printing');
        }
      }
      if (e.ctrlKey && e.shiftKey && key === 'p') {
        e.preventDefault();
        if (validateForm()) {
          handlePrintPreview();
        } else {
          toast.error('Fix validation errors before printing');
        }
      }
      if (e.ctrlKey && key === 's') {
        e.preventDefault();
        handleSaveReceipt();
      }
    };
    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [formData, calculations, errors, receiptNumber, selectedOwnerInfo]);

  useEffect(() => {
    if (useDepositBalance && selectedOwnerInfo) {
      const total = parseFloat(calculations.totalBill || 0);
      const cash = parseFloat(formData.cash_paid || 0);
      const remaining = Math.max(0, total - cash);
      const available = parseFloat(selectedOwnerInfo.deposit_balance || 0);
      const suggested = Math.min(remaining, available);
      const current = parseFloat(customDepositDeduction || '0') || 0;
      if (!customDepositDeduction || current > available || current > remaining) {
        setCustomDepositDeduction(suggested ? suggested.toString() : '');
      }
    } else {
      setCustomDepositDeduction('');
    }
  }, [useDepositBalance, selectedOwnerInfo, formData.cash_paid, calculations.totalBill]);

  const getPaymentSummary = () => {
    const total = parseFloat(calculations.totalBill || 0);
    const cashPaid = parseFloat(formData.cash_paid || 0);
    const available = parseFloat(selectedOwnerInfo?.deposit_balance || 0);
    const requested = parseFloat(customDepositDeduction || '0') || 0;
    const depositUsed = useDepositBalance ? Math.max(0, Math.min(requested, available, total)) : 0;
    const paid = cashPaid + depositUsed;
    const credit = Math.max(0, total - paid);
    return { total, cashPaid, depositUsed, paid, credit };
  };

  useEffect(() => {
    const brassQty = parseFloat(formData.brass_qty) || 0;
    const rate = parseFloat(formData.rate) || 0;
    const loadingCharge = parseFloat(formData.loading_charge) || 0;
    const cashPaid = parseFloat(formData.cash_paid) || 0;
    const gstRate = parseFloat(formData.gst_rate) || 5;

    const baseAmount = brassQty * rate;
    const totalBeforeGst = baseAmount + loadingCharge;
    const gstAmount = (totalBeforeGst * gstRate) / 100;
    const cgst = gstAmount / 2;
    const sgst = gstAmount / 2;
    const totalBill = totalBeforeGst + gstAmount;
    const creditAmount = totalBill - cashPaid;

    setCalculations({
      baseAmount,
      totalBeforeGst,
      gstAmount,
      cgst,
      sgst,
      totalBill,
      creditAmount
    });
  }, [formData.brass_qty, formData.rate, formData.loading_charge, formData.cash_paid, formData.gst_rate]);

  const fetchNextReceiptNumber = async () => {
    try {
      const response = await axios.get('/api/gst-receipts', { params: { limit: 1, page: 1 } });
      let nextNumber = 1001;
      const prefix = 'GST';
      if (response.data.receipts && response.data.receipts.length > 0) {
        const lastReceipt = response.data.receipts[0];
        const match = lastReceipt.receipt_no.match(/\d+/);
        if (match) nextNumber = parseInt(match[0]) + 1;
      }
      setReceiptNumber(`${prefix}${nextNumber.toString().padStart(4, '0')}`);
    } catch (error) {
      setReceiptNumber('GST1001');
    }
  };

  const fetchRecentTransactions = async () => {
    try {
      const response = await axios.get('/api/gst-receipts', { params: { limit: 5, page: 1 } });
      setRecentTransactions(response.data.receipts || []);
    } catch (error) {
      console.error('Error fetching recent transactions:', error);
    }
  };

  const handleOwnerSearch = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, truck_owner: value }));
    if (selectedOwnerInfo && selectedOwnerInfo.name !== value) setSelectedOwnerInfo(null);
    
    if (value.length > 0 && gstTruckOwners) {
      const suggestions = gstTruckOwners.filter(owner =>
        owner.name.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setOwnerSuggestions(suggestions);
    } else {
      setOwnerSuggestions([]);
    }
    if (errors.truck_owner) setErrors(prev => ({ ...prev, truck_owner: '' }));
  };

  const handleQuickFill = (ownerName) => {
    const ownerInfo = gstTruckOwners.find(owner => owner.name === ownerName);
    setSelectedOwnerInfo(ownerInfo || null);
    
    // Partner Rate Logic
    let appliedRate = flatSettings.default_rate || '1200';
    if (ownerInfo?.is_partner) {
      appliedRate = ownerInfo.partner_rate || flatSettings.default_partner_rate || appliedRate;
    }

    setFormData(prev => ({
      ...prev,
      truck_owner: ownerName,
      vehicle_number: ownerInfo?.vehicle_number || '',
      rate: appliedRate
    }));
    document.getElementById('vehicle_number')?.focus();
  };

  const handleVehicleNumberChange = (e) => {
    const value = e.target.value.toUpperCase();
    setFormData(prev => ({ ...prev, vehicle_number: value }));
    if (errors.vehicle_number) setErrors(prev => ({ ...prev, vehicle_number: '' }));
    
    if (value.length > 2 && gstTruckOwners) {
      const suggestions = gstTruckOwners.filter(owner =>
        owner.vehicle_number && owner.vehicle_number.includes(value)
      );
      setVehicleSuggestions(suggestions);
    } else {
      setVehicleSuggestions([]);
    }
  };

  const handleFullPayment = () => {
    setFormData(prev => ({
      ...prev,
      cash_paid: calculations.totalBill.toString()
    }));
  };

  const handleCreditOnly = () => {
    setFormData(prev => ({
      ...prev,
      cash_paid: '0'
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.truck_owner.trim()) newErrors.truck_owner = 'Truck owner is required';
    if (!formData.vehicle_number.trim()) newErrors.vehicle_number = 'Vehicle number is required';
    const brassQty = parseFloat(formData.brass_qty);
    if (!brassQty || brassQty <= 0) newErrors.brass_qty = 'Valid quantity is required';
    const rate = parseFloat(formData.rate);
    if (!rate || rate <= 0) newErrors.rate = 'Valid rate is required';
    
    // Check if selected owner is a GST client
    if (selectedOwnerInfo && !selectedOwnerInfo.is_gst_client) {
      newErrors.truck_owner = 'Selected owner is not a registered GST client';
    } else if (!selectedOwnerInfo && formData.truck_owner) {
        // Allow if exact match exists in gstTruckOwners
        const exists = gstTruckOwners.find(o => o.name === formData.truck_owner);
        if (!exists) newErrors.truck_owner = 'Owner must be a registered GST client';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePrintPreview = () => {
    toast.loading('Generating Tax Invoice PDF...');
    // Create temporary receipt object for preview
    const now = new Date();
    const brassQty = parseFloat(formData.brass_qty) || 0;
    const rate = parseFloat(formData.rate) || 0;
    const loadingCharge = parseFloat(formData.loading_charge) || 0;
    const gstRate = parseFloat(formData.gst_rate) || 5;

    const baseAmount = brassQty * rate;
    const totalBeforeGst = baseAmount + loadingCharge;
    const gstAmount = (totalBeforeGst * gstRate) / 100;
    const cgst = gstAmount / 2;
    const sgst = gstAmount / 2;
    const totalBill = totalBeforeGst + gstAmount;

    const depositUsed = useDepositBalance && selectedOwnerInfo ? 
      Math.min(parseFloat(customDepositDeduction || '0'), parseFloat(selectedOwnerInfo.deposit_balance || 0), totalBill) : 0;
    const cashPaid = parseFloat(formData.cash_paid || 0);

    const tempReceipt = {
      receipt_no: receiptNumber,
      truck_owner: formData.truck_owner || 'Preview Client',
      vehicle_number: formData.vehicle_number || 'MH-XX-0000',
      brass_qty: brassQty,
      rate: rate,
      loading_charge: loadingCharge,
      gst_rate: gstRate,
      cgst_amount: cgst,
      sgst_amount: sgst,
      total_before_gst: totalBeforeGst,
      total_amount: totalBill,
      cash_paid: cashPaid,
      deposit_deducted: depositUsed,
      date_time: now.toISOString(),
      is_partner: selectedOwnerInfo?.is_partner
    };

    generatePDF(tempReceipt, flatSettings);
  };

  const handleThermalPrint = async () => {
    await handleSaveReceipt({ printThermal: true, silentPdf: true });
  };

  const handleSaveReceipt = async (options = { printThermal: false, silentPdf: false }) => {
    if (!validateForm()) {
      toast.error('Please fix form errors');
      return;
    }

    if (options.printThermal) {
      toast.success('Printing Thermal Receipt...');
    }

    setIsSaving(true);
    try {
      const now = new Date();
      const depositUsed = useDepositBalance && selectedOwnerInfo ? 
        Math.min(parseFloat(customDepositDeduction || '0'), parseFloat(selectedOwnerInfo.deposit_balance || 0), calculations.totalBill) : 0;
      
      const receiptData = {
        receipt_no: receiptNumber,
        truck_owner: formData.truck_owner,
        vehicle_number: formData.vehicle_number.toUpperCase(),
        brass_qty: parseFloat(formData.brass_qty),
        rate: parseFloat(formData.rate),
        loading_charge: parseFloat(formData.loading_charge || 0),
        cash_paid: parseFloat(formData.cash_paid || 0),
        notes: formData.notes || '',
        date_time: now.toISOString(),
        payment_method: depositUsed > 0 ? 'deposit' : (parseFloat(formData.cash_paid || 0) > 0 ? 'cash' : 'credit'),
        deposit_deducted: depositUsed,
        gst_rate: parseFloat(formData.gst_rate)
      };

      const response = await axios.post('/api/gst-receipts', receiptData);
      
      if (response.data.receipt) {
        // Auto Print based on settings or just do both/user choice?
        // User asked for "receipts /invoice", implying printing.
        // We'll generate PDF (A4/A5) and Thermal.
        
        generatePDF(response.data.receipt, { ...flatSettings, __silent: true });
        printThermalReceipt(response.data.receipt, flatSettings);
        
        setFormData({
          truck_owner: '',
          vehicle_number: '',
          brass_qty: '',
          rate: flatSettings.default_rate || '1200',
          loading_charge: flatSettings.loading_charge || '150',
          cash_paid: '',
          notes: '',
          gst_rate: '5.00'
        });
        setSelectedOwnerInfo(null);
        setVehicleSuggestions([]);
        setOwnerSuggestions([]);
        fetchNextReceiptNumber();
        fetchRecentTransactions();
        
        const successMsg = options.printThermal ? 'GST Receipt saved and printed!' : 'GST Receipt saved successfully!';
        toast.success(successMsg);
        refreshDashboardStats();
      }
    } catch (error) {
      console.error('Error saving GST receipt:', error);
      toast.error(error.response?.data?.error || 'Failed to save GST receipt');
    } finally {
      setIsSaving(false);
    }
  };

  const formatCurrency = (amount) => `${flatSettings.currency || '₹'}${parseFloat(amount).toFixed(2)}`;
  
  const formatToIST = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'short'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">GST Billing</h1>
          <p className="text-gray-600">Create tax invoices for registered clients</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">GST Receipt No.</p>
            <p className="text-xl font-bold text-purple-600">{receiptNumber}</p>
          </div>
          <button 
            onClick={handleThermalPrint}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2"
          >
            <FiPrinter className="h-5 w-5" />
            <span>Print Thermal</span>
          </button>
          <button 
            onClick={handlePrintPreview}
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2"
            title="Switch to A4 format"
          >
            <FiPrinter className="h-5 w-5" />
            <span>A4 Preview</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b">Tax Invoice Details</h3>
            
            <div className="space-y-6">
              {/* Truck Owner */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GST Registered Client *
                  {errors.truck_owner && <span className="text-red-600 text-sm ml-2">{errors.truck_owner}</span>}
                </label>
                <input
                  ref={ownerInputRef}
                  type="text"
                  name="truck_owner"
                  value={formData.truck_owner}
                  onChange={handleOwnerSearch}
                  className={`w-full px-3 py-2 border ${errors.truck_owner ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="Select GST Client"
                />
                {ownerSuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {ownerSuggestions.map(owner => (
                      <div
                        key={owner.id}
                        onClick={() => { handleQuickFill(owner.name); setOwnerSuggestions([]); }}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                      >
                        <div className="font-medium">{owner.name}</div>
                        <div className="text-sm text-gray-500">{owner.vehicle_number}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Vehicle Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Number *
                  {errors.vehicle_number && <span className="text-red-600 text-sm ml-2">{errors.vehicle_number}</span>}
                </label>
                <input
                  type="text"
                  name="vehicle_number"
                  value={formData.vehicle_number}
                  onChange={handleVehicleNumberChange}
                  className={`w-full px-3 py-2 border ${errors.vehicle_number ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 uppercase`}
                  placeholder="MH-31-XXXX"
                />
                {vehicleSuggestions.length > 0 && (
                  <div className="mt-1 bg-white border border-gray-300 rounded-lg shadow-sm max-h-40 overflow-y-auto">
                    {vehicleSuggestions.map(owner => (
                      <div
                        key={owner.id}
                        onClick={() => { handleQuickFill(owner.name); setVehicleSuggestions([]); }}
                        className="px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                      >
                        <div className="font-medium">{owner.vehicle_number}</div>
                        <div className="text-sm text-gray-600">{owner.name}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quantity & Rate */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity ({flatSettings.unit || 'Brass'}) *
                  </label>
                  <input
                    type="number"
                    name="brass_qty"
                    value={formData.brass_qty}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500"
                    placeholder="0.00"
                    step="0.5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rate per Unit *
                  </label>
                  <input
                    type="number"
                    name="rate"
                    value={formData.rate}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border ${selectedOwnerInfo?.is_partner ? 'border-green-500 ring-1 ring-green-500' : 'border-gray-300'} rounded-lg focus:ring-purple-500`}
                    placeholder="Rate"
                  />
                  {selectedOwnerInfo?.is_partner && (
                    <p className="text-xs text-green-600 mt-1">Partner Rate Applied</p>
                  )}
                </div>
              </div>

              {/* Loading & GST Rate */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loading Charge
                  </label>
                  <input
                    type="number"
                    name="loading_charge"
                    value={formData.loading_charge}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GST Rate (%)
                  </label>
                  <select
                    name="gst_rate"
                    value={formData.gst_rate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500"
                  >
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>
              </div>

              {/* Payment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cash Paid</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="number"
                    name="cash_paid"
                    value={formData.cash_paid}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500"
                    placeholder="0"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleFullPayment}
                      className="py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      Full Payment
                    </button>
                    <button
                      onClick={handleCreditOnly}
                      className="py-2 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      Credit Only
                    </button>
                  </div>
                </div>
              </div>

              {/* Deposit Option */}
              <div className="mt-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={useDepositBalance}
                    onChange={(e) => setUseDepositBalance(e.target.checked)}
                    className="h-4 w-4 text-purple-600"
                  />
                  <span className="font-medium">Deduct from Deposit Balance</span>
                </label>
                {useDepositBalance && selectedOwnerInfo && (
                  <div className="mt-2 p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm">Available: <span className="font-bold">₹{selectedOwnerInfo.deposit_balance || 0}</span></p>
                    <input
                      type="number"
                      value={customDepositDeduction}
                      onChange={(e) => setCustomDepositDeduction(e.target.value)}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Amount to deduct"
                    />
                  </div>
                )}
              </div>

              <button
                onClick={handleSaveReceipt}
                disabled={isSaving}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 flex justify-center items-center space-x-2"
              >
                <FiSave className="h-5 w-5" />
                <span>{isSaving ? 'Saving...' : 'Save & Print Invoice'}</span>
              </button>
            </div>
          </div>

          {/* Recent Transactions Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent GST Invoices</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">No.</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentTransactions.map((tx) => (
                    <tr key={tx.id}>
                      <td className="px-4 py-3 text-sm font-medium text-purple-600">{tx.receipt_no}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{tx.truck_owner}</td>
                      <td className="px-4 py-3 text-sm font-bold">₹{parseFloat(tx.total_amount).toFixed(2)}</td>
                      <td className="px-4 py-3"><span className={getStatusColor(tx.payment_status)}>{tx.payment_status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Calculations */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <FaCalculator className="h-5 w-5 mr-2 text-purple-600" />
              Tax Calculation
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Base Amount:</span>
                <span>{formatCurrency(calculations.baseAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Loading Charge:</span>
                <span>{formatCurrency(formData.loading_charge || 0)}</span>
              </div>
              <div className="flex justify-between font-medium pt-2 border-t">
                <span>Taxable Value:</span>
                <span>{formatCurrency(calculations.totalBeforeGst)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>CGST ({(parseFloat(formData.gst_rate)/2).toFixed(1)}%):</span>
                <span>{formatCurrency(calculations.cgst)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>SGST ({(parseFloat(formData.gst_rate)/2).toFixed(1)}%):</span>
                <span>{formatCurrency(calculations.sgst)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-purple-600 pt-3 border-t">
                <span>Grand Total:</span>
                <span>{formatCurrency(calculations.totalBill)}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-600">Paid:</span>
                <span className="text-green-600 font-medium">{formatCurrency(getPaymentSummary().paid)}</span>
              </div>
              <div className="flex justify-between text-red-600 font-medium">
                <span>Balance Due:</span>
                <span>{formatCurrency(calculations.creditAmount)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GstReceiptForm;
