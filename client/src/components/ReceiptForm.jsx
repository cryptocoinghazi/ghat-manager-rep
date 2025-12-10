import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiPrinter, FiSave } from 'react-icons/fi';
import { FaCalculator } from 'react-icons/fa';
import { generatePDF } from '../utils/pdfGenerator';
import { refreshDashboardStats } from './Layout';

const ReceiptForm = ({ settings, truckOwners, fetchTruckOwners }) => {
  // Fix: Get flat settings if settings has nested structure
  const flatSettings = settings?.flat || settings || {};

  const [formData, setFormData] = useState({
    truck_owner: '',
    vehicle_number: '',
    brass_qty: '',
    rate: flatSettings.default_rate || '1200',
    loading_charge: flatSettings.loading_charge || '150',
    cash_paid: '',
    notes: ''
  });

  const [calculations, setCalculations] = useState({
    materialCost: 0,
    totalBill: 0,
    creditAmount: 0
  });

  const [receiptNumber, setReceiptNumber] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState({});
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [selectedOwnerInfo, setSelectedOwnerInfo] = useState(null);

  // Calculate values when form changes
  useEffect(() => {
    const brassQty = parseFloat(formData.brass_qty) || 0;
    const rate = parseFloat(formData.rate) || 0;
    const loadingCharge = parseFloat(formData.loading_charge) || 0;
    const cashPaid = parseFloat(formData.cash_paid) || 0;

    const materialCost = brassQty * rate;
    const totalBill = materialCost + loadingCharge;
    const creditAmount = totalBill - cashPaid;

    setCalculations({
      materialCost,
      totalBill,
      creditAmount
    });
  }, [formData.brass_qty, formData.rate, formData.loading_charge, formData.cash_paid]);

  // Update form when truck owner or settings change
  useEffect(() => {
    if (formData.truck_owner && truckOwners && truckOwners.length > 0) {
      const ownerInfo = truckOwners.find(owner => owner.name === formData.truck_owner || owner.truck_owner === formData.truck_owner);
      
      if (ownerInfo && ownerInfo.is_partner) {
        // Apply partner rate
        const partnerRate = ownerInfo.partner_rate || flatSettings.default_partner_rate || flatSettings.default_rate || '1200';
        setFormData(prev => ({
          ...prev,
          rate: partnerRate.toString()
        }));
      } else {
        // Apply default rate for regular owners
        setFormData(prev => ({
          ...prev,
          rate: (flatSettings.default_rate || '1200').toString()
        }));
      }
    } else if (!formData.truck_owner && flatSettings.default_rate) {
      // If no owner selected, use default rate
      setFormData(prev => ({
        ...prev,
        rate: flatSettings.default_rate.toString()
      }));
    }
    
    if (flatSettings.loading_charge && flatSettings.loading_charge !== formData.loading_charge) {
      setFormData(prev => ({
        ...prev,
        loading_charge: flatSettings.loading_charge
      }));
    }
  }, [formData.truck_owner, truckOwners, flatSettings.default_rate, flatSettings.default_partner_rate, flatSettings.loading_charge]);

  // Fetch next receipt number and recent transactions
  useEffect(() => {
    fetchNextReceiptNumber();
    fetchRecentTransactions();
  }, []);

  // Refresh truck owners periodically to catch newly added owners dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      if (fetchTruckOwners) {
        fetchTruckOwners();
      }
    }, 5000); // Refresh every 5 seconds
    
    return () => clearInterval(interval);
  }, [fetchTruckOwners]);

  const fetchNextReceiptNumber = async () => {
    try {
      const response = await axios.get('/api/receipts', {
        params: {
          limit: 1,
          page: 1
        }
      });
      
      let nextNumber = parseInt(flatSettings.receipt_start) || 9001;
      const prefix = flatSettings.receipt_prefix || 'GM';
      
      if (response.data.receipts && response.data.receipts.length > 0) {
        const lastReceipt = response.data.receipts[0];
        const match = lastReceipt.receipt_no.match(/\d+/);
        if (match) {
          nextNumber = parseInt(match[0]) + 1;
        }
      }
      
      setReceiptNumber(`${prefix}${nextNumber}`);
    } catch (error) {
      console.error('Error fetching receipt number:', error);
      setReceiptNumber(`${flatSettings.receipt_prefix || 'GM'}${flatSettings.receipt_start || '9001'}`);
    }
  };

  const fetchRecentTransactions = async () => {
    try {
      const response = await axios.get('/api/receipts', {
        params: {
          limit: 5,
          page: 1
        }
      });
      setRecentTransactions(response.data.receipts || []);
    } catch (error) {
      console.error('Error fetching recent transactions:', error);
    }
  };

  // UTILITY FUNCTION: Format time consistently
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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.truck_owner.trim()) {
      newErrors.truck_owner = 'Truck owner is required';
    }
    
    if (!formData.vehicle_number.trim()) {
      newErrors.vehicle_number = 'Vehicle number is required';
    }
    
    const brassQty = parseFloat(formData.brass_qty);
    if (!brassQty || brassQty <= 0) {
      newErrors.brass_qty = 'Valid quantity is required';
    }
    
    const rate = parseFloat(formData.rate);
    if (!rate || rate <= 0) {
      newErrors.rate = 'Valid rate is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleQuickFill = (ownerName) => {
    // Find owner in truckOwners array
    const ownerInfo = truckOwners?.find(owner => owner.name === ownerName || owner.truck_owner === ownerName);
    setSelectedOwnerInfo(ownerInfo || null);
    
    let rateToApply = flatSettings.default_rate || '1200';
    
    if (ownerInfo && ownerInfo.is_partner) {
      // Apply partner rate from owner's custom rate or default partner rate
      rateToApply = ownerInfo.partner_rate || flatSettings.default_partner_rate || flatSettings.default_rate || '1200';
    }
    
    setFormData(prev => ({
      ...prev,
      truck_owner: ownerName,
      vehicle_number: ownerInfo?.vehicle_number || '',
      rate: rateToApply.toString()
    }));
  };

  // Handle vehicle number changes - auto-suggest truck owners
  const handleVehicleNumberChange = (e) => {
    const vehicleNumber = e.target.value;
    handleInputChange(e);
    
    if (vehicleNumber.length > 0) {
      // Find owner by vehicle number
      const ownerInfo = truckOwners?.find(owner => 
        owner.vehicle_number && owner.vehicle_number.toLowerCase().includes(vehicleNumber.toLowerCase())
      );
      
      if (ownerInfo) {
        setSelectedOwnerInfo(ownerInfo);
        let rateToApply = flatSettings.default_rate || '1200';
        
        if (ownerInfo.is_partner) {
          rateToApply = ownerInfo.partner_rate || flatSettings.default_partner_rate || flatSettings.default_rate || '1200';
        }
        
        setFormData(prev => ({
          ...prev,
          truck_owner: ownerInfo.name,
          rate: rateToApply.toString()
        }));
      } else {
        setSelectedOwnerInfo(null);
      }
    } else {
      setSelectedOwnerInfo(null);
    }
  };
  
  // Check owner when truck_owner field changes manually
  const handleOwnerChange = (e) => {
    const ownerName = e.target.value;
    handleInputChange(e);
    
    if (ownerName.length > 2) {
      // Find owner in truckOwners array
      const ownerInfo = truckOwners?.find(owner => owner.name === ownerName || owner.truck_owner === ownerName);
      setSelectedOwnerInfo(ownerInfo || null);
      
      if (ownerInfo && ownerInfo.is_partner) {
        // Apply partner rate from owner's custom rate or default partner rate
        const partnerRate = ownerInfo.partner_rate || flatSettings.default_partner_rate || flatSettings.default_rate || '1200';
        setFormData(prev => ({
          ...prev,
          vehicle_number: ownerInfo.vehicle_number || '',
          rate: partnerRate.toString()
        }));
      } else if (ownerInfo) {
        // Apply regular rate
        setFormData(prev => ({
          ...prev,
          vehicle_number: ownerInfo.vehicle_number || '',
          rate: (flatSettings.default_rate || '1200').toString()
        }));
      }
    } else {
      setSelectedOwnerInfo(null);
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

  const handleSaveReceipt = async () => {
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSaving(true);
    try {
      // Get current date and time
      const now = new Date();
      
      const receiptData = {
        receipt_no: receiptNumber,
        truck_owner: formData.truck_owner,
        vehicle_number: formData.vehicle_number.toUpperCase(),
        brass_qty: parseFloat(formData.brass_qty),
        rate: parseFloat(formData.rate),
        loading_charge: parseFloat(formData.loading_charge || 0),
        cash_paid: parseFloat(formData.cash_paid || 0),
        notes: formData.notes || '',
        date_time: now.toISOString()
      };

      console.log('Saving receipt:', receiptData);
      
      // Save to backend
      const response = await axios.post('/api/receipts', receiptData);
      
      if (response.data.receipt) {
        // Generate PDF with settings
        generatePDF(response.data.receipt, flatSettings);
        
        // Reset form but keep rate and loading charge from settings
        setFormData({
          truck_owner: '',
          vehicle_number: '',
          brass_qty: '',
          rate: flatSettings.default_rate || '1200',
          loading_charge: flatSettings.loading_charge || '150',
          cash_paid: '',
          notes: ''
        });

        // Get next receipt number
        fetchNextReceiptNumber();
        
        // Refresh recent transactions
        fetchRecentTransactions();
        
        toast.success('Receipt saved successfully!');
        refreshDashboardStats();
      }
    } catch (error) {
      console.error('Error saving receipt:', error.response?.data || error.message);
      toast.error(error.response?.data?.error || 'Failed to save receipt');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePrintPreview = () => {
    const tempReceipt = {
      receipt_no: receiptNumber,
      date_time: new Date().toISOString(),
      truck_owner: formData.truck_owner || 'Sample Owner',
      vehicle_number: formData.vehicle_number || 'MH-31-XXXX',
      brass_qty: parseFloat(formData.brass_qty) || 1,
      rate: parseFloat(formData.rate) || 1200,
      loading_charge: parseFloat(formData.loading_charge) || 150,
      total_amount: calculations.totalBill,
      cash_paid: parseFloat(formData.cash_paid) || 0,
      credit_amount: calculations.creditAmount,
    };
    
    generatePDF(tempReceipt, flatSettings);
  };

  const formatCurrency = (amount) => {
    return `${flatSettings.currency || '₹'}${parseFloat(amount).toFixed(2)}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-yellow-100 text-yellow-800';
      case 'unpaid': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Filter today's transactions
  const getTodayTransactions = () => {
    const today = new Date().toDateString();
    return recentTransactions.filter(transaction => 
      new Date(transaction.date_time).toDateString() === today
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create New Receipt</h1>
          <p className="text-gray-600">Generate gate pass for sand trucks</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Receipt Number</p>
            <p className="text-xl font-bold text-blue-600">{receiptNumber}</p>
          </div>
          <button 
            onClick={handlePrintPreview}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <FiPrinter className="h-5 w-5" />
            <span>Print Preview</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Form Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Truck Owner */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Truck Owner (Malak) *
                  {errors.truck_owner && (
                    <span className="text-red-600 text-sm ml-2">{errors.truck_owner}</span>
                  )}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="truck_owner"
                    value={formData.truck_owner}
                    onChange={handleOwnerChange}
                    className={`w-full px-3 py-2 border ${errors.truck_owner ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${selectedOwnerInfo?.is_partner ? 'pr-20' : ''}`}
                    placeholder="Enter owner name"
                  />
                  {selectedOwnerInfo?.is_partner && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Partner
                    </span>
                  )}
                  
                  {/* Owner suggestions dropdown */}
                  {formData.truck_owner && truckOwners.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {truckOwners
                        .filter(owner => 
                          owner.name.toLowerCase().includes(formData.truck_owner.toLowerCase())
                        )
                        .slice(0, 5)
                        .map(owner => (
                          <div
                            key={owner.id}
                            onClick={() => handleQuickFill(owner.name)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                          >
                            {owner.name}
                          </div>
                        ))
                      }
                    </div>
                  )}
                </div>
                
                {/* Quick owner buttons */}
                {truckOwners.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {truckOwners.slice(0, 5).map(owner => (
                      <button
                        key={owner.id}
                        onClick={() => handleQuickFill(owner.name)}
                        className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                      >
                        {owner.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Vehicle Number */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Number *
                  {errors.vehicle_number && (
                    <span className="text-red-600 text-sm ml-2">{errors.vehicle_number}</span>
                  )}
                </label>
                <input
                  type="text"
                  name="vehicle_number"
                  value={formData.vehicle_number}
                  onChange={handleVehicleNumberChange}
                  className={`w-full px-3 py-2 border ${errors.vehicle_number ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="MH-31-XXXX"
                  style={{ textTransform: 'uppercase' }}
                />
                
                {/* Vehicle number suggestions dropdown */}
                {formData.vehicle_number && truckOwners.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {truckOwners
                      .filter(owner => 
                        owner.vehicle_number && owner.vehicle_number.toLowerCase().includes(formData.vehicle_number.toLowerCase())
                      )
                      .slice(0, 5)
                      .map(owner => (
                        <div
                          key={owner.id}
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              vehicle_number: owner.vehicle_number,
                              truck_owner: owner.name
                            }));
                            handleQuickFill(owner.name);
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                        >
                          <div className="font-medium">{owner.vehicle_number}</div>
                          <div className="text-sm text-gray-600">{owner.name}</div>
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>

              {/* Brass Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity ({flatSettings.unit || 'Brass'}) *
                  {errors.brass_qty && (
                    <span className="text-red-600 text-sm ml-2">{errors.brass_qty}</span>
                  )}
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    name="brass_qty"
                    value={formData.brass_qty}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border ${errors.brass_qty ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="0.00"
                    step="0.5"
                    min="0"
                  />
                  <div className="flex space-x-2">
                    {[1, 1.5, 2, 2.5].map(qty => (
                      <button
                        key={qty}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, brass_qty: qty.toString() }))}
                        className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        {qty}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rate per Brass */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rate per {flatSettings.unit || 'Brass'} *
                  {errors.rate && (
                    <span className="text-red-600 text-sm ml-2">{errors.rate}</span>
                  )}
                </label>
                <input
                  type="number"
                  name="rate"
                  value={formData.rate}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${errors.rate ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Rate"
                  min="0"
                />
              </div>

              {/* Loading Charge */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loading Charge (Bharai)
                </label>
                <input
                  type="number"
                  name="loading_charge"
                  value={formData.loading_charge}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0"
                  min="0"
                />
              </div>

              {/* Cash Paid */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cash Paid (Nagdi)
                </label>
                <input
                  type="number"
                  name="cash_paid"
                  value={formData.cash_paid}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0"
                  min="0"
                />
                <div className="mt-2 flex space-x-2">
                  <button
                    onClick={handleFullPayment}
                    className="flex-1 py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200"
                  >
                    Full Payment
                  </button>
                  <button
                    onClick={handleCreditOnly}
                    className="flex-1 py-2 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                  >
                    Credit Only
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20"
                  placeholder="Any additional notes..."
                />
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Time</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Vehicle</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Qty</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentTransactions.length > 0 ? (
                    recentTransactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-500">
                          {formatToIST(transaction.date_time)}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {transaction.vehicle_number}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">
                          {transaction.brass_qty}
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">
                          {formatCurrency(transaction.total_amount)}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(transaction.payment_status)}`}>
                            {transaction.payment_status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
                        No recent transactions
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Calculations & Actions */}
        <div className="space-y-6">
          {/* Calculations Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <FaCalculator className="h-5 w-5 mr-2 text-blue-600" />
              Bill Calculation
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Material Cost:</span>
                <span className="text-lg font-semibold">
                  {formatCurrency(calculations.materialCost)}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Loading Charge:</span>
                <span className="text-lg">
                  {formatCurrency(formData.loading_charge || 0)}
                </span>
              </div>
              
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">Total Bill:</span>
                  <span className="text-xl font-bold text-blue-600">
                    {formatCurrency(calculations.totalBill)}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Cash Paid:</span>
                <span className="text-lg text-green-600">
                  {formatCurrency(formData.cash_paid || 0)}
                </span>
              </div>
              
              <div className="border-t pt-3">
                <div className={`flex justify-between items-center ${
                  calculations.creditAmount > 0 ? 'text-red-600' : 'text-green-600'
                }`}>
                  <span className="font-medium">
                    {calculations.creditAmount > 0 ? 'Credit (Udhaar):' : 'Balance:'}
                  </span>
                  <span className="text-xl font-bold">
                    {formatCurrency(Math.abs(calculations.creditAmount))}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <button
                onClick={handleSaveReceipt}
                disabled={isSaving || !formData.truck_owner || !formData.vehicle_number}
                className="bg-blue-600 text-white w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiSave className="h-5 w-5" />
                <span>{isSaving ? 'Saving...' : 'Save & Print Receipt'}</span>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Trucks:</span>
                <span className="font-semibold">
                  {getTodayTransactions().length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cash Collected:</span>
                <span className="font-semibold text-green-600">
                  {formatCurrency(getTodayTransactions().reduce((sum, t) => sum + (t.cash_paid || 0), 0))}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Credit Given:</span>
                <span className="font-semibold text-red-600">
                  {formatCurrency(getTodayTransactions().reduce((sum, t) => sum + (t.credit_amount || 0), 0))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReceiptForm;