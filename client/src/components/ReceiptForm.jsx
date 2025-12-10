import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiPrinter, FiSave, FiRefreshCw, FiUserPlus } from 'react-icons/fi';
import { FaCalculator } from 'react-icons/fa';
import { generatePDF } from '../utils/pdfGenerator';
import { refreshDashboardStats } from './Layout';

const ReceiptForm = ({ settings, truckOwners, fetchTruckOwners }) => {
  // Fix: Get flat settings if settings has nested structure
  const flatSettings = settings?.flat || settings || {};
  const ownerInputRef = useRef(null);
  
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
  const [isAddingNewOwner, setIsAddingNewOwner] = useState(false);
  
  // Rate override states
  const [isRateOverridden, setIsRateOverridden] = useState(false);
  const [originalRate, setOriginalRate] = useState(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [vehicleSuggestions, setVehicleSuggestions] = useState([]);
  const [ownerSuggestions, setOwnerSuggestions] = useState([]);

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

  // Update form when truck owner changes - FIXED VERSION
  useEffect(() => {
    if (formData.truck_owner && truckOwners && truckOwners.length > 0) {
      const ownerInfo = truckOwners.find(owner => 
        owner.name === formData.truck_owner || 
        owner.truck_owner === formData.truck_owner
      );
      
      // Only auto-populate rate if not overridden by user AND this is a new selection
      if (!isRateOverridden && ownerInfo) {
        let rateToApply = flatSettings.default_rate || '1200';
        
        if (ownerInfo.is_partner) {
          // Apply partner rate
          rateToApply = ownerInfo.partner_rate || flatSettings.default_partner_rate || flatSettings.default_rate || '1200';
        }
        
        setFormData(prev => ({
          ...prev,
          rate: rateToApply.toString()
        }));
        setOriginalRate(rateToApply);
      }
      
      setSelectedOwnerInfo(ownerInfo || null);
    }
    
    if (isInitialLoad) {
      setIsInitialLoad(false);
    }
  }, [formData.truck_owner, truckOwners, flatSettings, isRateOverridden]);

  // Fetch next receipt number and recent transactions
  useEffect(() => {
    fetchNextReceiptNumber();
    fetchRecentTransactions();
  }, []);

  // Refresh truck owners periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (fetchTruckOwners) {
        fetchTruckOwners();
      }
    }, 5000);
    
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

  // NEW: Create new truck owner
  const createNewTruckOwner = async (ownerName) => {
    try {
      setIsAddingNewOwner(true);
      
      const response = await axios.post('/api/truck-owners', {
        name: ownerName,
        is_partner: false, // Always false for new auto-created owners
        status: 'active'
      });
      
      if (response.data) {
        toast.success(`New owner "${ownerName}" added successfully`);
        
        // Refresh truck owners list
        if (fetchTruckOwners) {
          await fetchTruckOwners();
        }
        
        return response.data;
      }
    } catch (error) {
      console.error('Error creating truck owner:', error);
      toast.error(error.response?.data?.error || 'Failed to create truck owner');
    } finally {
      setIsAddingNewOwner(false);
    }
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
    
    if (name === 'rate') {
      handleRateChange(e);
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Rate change handler - FIXED
  const handleRateChange = (e) => {
    const value = e.target.value;
    const numericValue = parseFloat(value);
    
    // Mark as overridden if different from original rate
    if (originalRate !== null && numericValue !== originalRate) {
      setIsRateOverridden(true);
    } else if (originalRate === null && numericValue !== (flatSettings.default_rate || 1200)) {
      setIsRateOverridden(true);
    }
    
    setFormData(prev => ({
      ...prev,
      rate: value
    }));
    
    if (errors.rate) {
      setErrors(prev => ({ ...prev, rate: '' }));
    }
  };

  const handleQuickFill = (ownerName) => {
    const ownerInfo = truckOwners?.find(owner => owner.name === ownerName || owner.truck_owner === ownerName);
    setSelectedOwnerInfo(ownerInfo || null);
    
    // Reset rate override when owner changes
    setIsRateOverridden(false);
    
    let rateToApply = flatSettings.default_rate || '1200';
    
    if (ownerInfo && ownerInfo.is_partner) {
      rateToApply = ownerInfo.partner_rate || flatSettings.default_partner_rate || flatSettings.default_rate || '1200';
    }
    
    setOriginalRate(rateToApply);
    
    setFormData(prev => ({
      ...prev,
      truck_owner: ownerName,
      vehicle_number: ownerInfo?.vehicle_number || '',
      rate: rateToApply.toString()
    }));
    
    // Focus on vehicle number field
    document.getElementById('vehicle_number')?.focus();
  };

  // Handle owner search with suggestions
  const handleOwnerSearch = (e) => {
    const value = e.target.value;
    
    setFormData(prev => ({
      ...prev,
      truck_owner: value
    }));
    
    // Reset selected owner if input changes
    if (selectedOwnerInfo && selectedOwnerInfo.name !== value) {
      setSelectedOwnerInfo(null);
      setOriginalRate(null);
      setIsRateOverridden(false);
    }
    
    // Show suggestions
    if (value.length > 1 && truckOwners) {
      const suggestions = truckOwners.filter(owner =>
        owner.name.toLowerCase().includes(value.toLowerCase()) ||
        (owner.truck_owner && owner.truck_owner.toLowerCase().includes(value.toLowerCase()))
      ).slice(0, 5);
      
      setOwnerSuggestions(suggestions);
    } else {
      setOwnerSuggestions([]);
    }
    
    if (errors.truck_owner) {
      setErrors(prev => ({ ...prev, truck_owner: '' }));
    }
  };

  // Handle vehicle number changes
  const handleVehicleNumberChange = (e) => {
    const value = e.target.value.toUpperCase();
    
    setFormData(prev => ({
      ...prev,
      vehicle_number: value
    }));
    
    if (errors.vehicle_number) {
      setErrors(prev => ({ ...prev, vehicle_number: '' }));
    }
    
    // Auto-suggest owner based on vehicle
    if (value.length > 3 && truckOwners) {
      const suggestions = truckOwners.filter(owner =>
        owner.vehicle_number && owner.vehicle_number.includes(value)
      );
      setVehicleSuggestions(suggestions);
    } else {
      setVehicleSuggestions([]);
    }
  };

  // Handle quick payment buttons
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

  // Reset rate to original
  const handleResetRate = () => {
    if (originalRate !== null) {
      setFormData(prev => ({
        ...prev,
        rate: originalRate.toString()
      }));
      setIsRateOverridden(false);
    }
  };

  // Apply quick rate
  const handleQuickRate = (rate) => {
    setFormData(prev => ({
      ...prev,
      rate: rate.toString()
    }));
    setIsRateOverridden(true);
  };

  // MAIN FIX: Handle save receipt with auto-owner creation
  const handleSaveReceipt = async () => {
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSaving(true);
    try {
      // Check if truck owner exists in database
      const ownerExists = truckOwners?.some(owner => 
        owner.name === formData.truck_owner || 
        owner.truck_owner === formData.truck_owner
      );

      let finalOwnerInfo = selectedOwnerInfo;
      
      // If owner doesn't exist, create it
      if (!ownerExists) {
        toast.loading(`Adding new owner: ${formData.truck_owner}...`);
        const newOwner = await createNewTruckOwner(formData.truck_owner);
        
        if (newOwner) {
          finalOwnerInfo = newOwner;
          toast.dismiss();
        } else {
          throw new Error('Failed to create new truck owner');
        }
      }

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
        date_time: now.toISOString(),
        is_partner: finalOwnerInfo?.is_partner || false,
        rate_overridden: isRateOverridden,
        original_rate: originalRate || parseFloat(formData.rate),
        new_owner_created: !ownerExists // Track if we created a new owner
      };

      console.log('Saving receipt:', receiptData);
      
      // Save to backend
      const response = await axios.post('/api/receipts', receiptData);
      
      if (response.data.receipt) {
        // Generate PDF
        generatePDF(response.data.receipt, flatSettings);
        
        // Reset form
        setFormData({
          truck_owner: '',
          vehicle_number: '',
          brass_qty: '',
          rate: flatSettings.default_rate || '1200',
          loading_charge: flatSettings.loading_charge || '150',
          cash_paid: '',
          notes: ''
        });

        // Reset states
        setIsRateOverridden(false);
        setOriginalRate(null);
        setSelectedOwnerInfo(null);
        setVehicleSuggestions([]);
        setOwnerSuggestions([]);
        
        // Refresh data
        fetchNextReceiptNumber();
        fetchRecentTransactions();
        
        toast.success('Receipt saved successfully!');
        refreshDashboardStats();
      }
    } catch (error) {
      console.error('Error saving receipt:', error);
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
      is_partner: selectedOwnerInfo?.is_partner || false
    };
    
    generatePDF(tempReceipt, flatSettings);
  };

  const formatCurrency = (amount) => {
    return `${flatSettings.currency || '₹'}${parseFloat(amount).toFixed(2)}`;
  };

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sand Mining Billing</h1>
          <p className="text-gray-600">Create new gate pass for sand trucks</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Receipt No.</p>
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
          {/* Quick Receipt Card - FIXED UI */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Quick Receipt</h3>
              <p className="text-gray-500 text-sm">
                {new Date().toLocaleDateString('en-IN', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            <div className="space-y-6">
              {/* Truck Owner Section - FIXED */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Truck Owner (Malak) *
                  {errors.truck_owner && (
                    <span className="text-red-600 text-sm ml-2">{errors.truck_owner}</span>
                  )}
                </label>
                <div className="relative">
                  <div className="flex items-center">
                    <input
                      ref={ownerInputRef}
                      type="text"
                      name="truck_owner"
                      value={formData.truck_owner}
                      onChange={handleOwnerSearch}
                      className={`flex-1 px-3 py-2 border ${errors.truck_owner ? 'border-red-500' : 'border-gray-300'} rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="Enter owner name"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (formData.truck_owner && !truckOwners?.some(o => o.name === formData.truck_owner)) {
                          createNewTruckOwner(formData.truck_owner);
                        }
                      }}
                      className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg hover:bg-gray-200 transition-colors"
                      title="Add new owner"
                    >
                      <FiUserPlus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  
                  {/* Owner suggestions dropdown */}
                  {ownerSuggestions.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {ownerSuggestions.map(owner => (
                        <div
                          key={owner.id}
                          onClick={() => handleQuickFill(owner.name)}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 flex items-center justify-between"
                        >
                          <div>
                            <div className="font-medium">{owner.name}</div>
                            <div className="text-sm text-gray-500">{owner.vehicle_number}</div>
                          </div>
                          {owner.is_partner && (
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                              Partner
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Show message for new owner */}
                  {formData.truck_owner && !selectedOwnerInfo && ownerSuggestions.length === 0 && (
                    <div className="mt-2 text-sm text-blue-600 flex items-center">
                      <FiUserPlus className="h-4 w-4 mr-1" />
                      Press Enter or click + to add as new owner
                    </div>
                  )}
                </div>
                
                {/* Quick owner buttons */}
                {truckOwners && truckOwners.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs text-gray-500 self-center">Quick select:</span>
                    {truckOwners.slice(0, 5).map(owner => (
                      <button
                        key={owner.id}
                        type="button"
                        onClick={() => handleQuickFill(owner.name)}
                        className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${selectedOwnerInfo?.id === owner.id ? 'bg-blue-100 text-blue-700 border border-blue-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                      >
                        {owner.name}
                        {owner.is_partner && (
                          <span className="ml-1 text-xs text-green-600">(P)</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Vehicle Number - FIXED */}
              <div>
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
                  className={`w-full px-3 py-2 border ${errors.vehicle_number ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase`}
                  placeholder="MH-31-XXXX"
                  style={{ textTransform: 'uppercase' }}
                />
                
                {/* Vehicle suggestions */}
                {vehicleSuggestions.length > 0 && (
                  <div className="mt-1 bg-white border border-gray-300 rounded-lg shadow-sm max-h-40 overflow-y-auto">
                    {vehicleSuggestions.map(owner => (
                      <div
                        key={owner.id}
                        onClick={() => handleQuickFill(owner.name)}
                        className="px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-medium">{owner.vehicle_number}</div>
                        <div className="text-sm text-gray-600">{owner.name}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quantity Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity ({flatSettings.unit || 'Brass'}) *
                  {errors.brass_qty && (
                    <span className="text-red-600 text-sm ml-2">{errors.brass_qty}</span>
                  )}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="number"
                    name="brass_qty"
                    value={formData.brass_qty}
                    onChange={handleInputChange}
                    className={`px-3 py-2 border ${errors.brass_qty ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="0.00"
                    step="0.5"
                    min="0"
                  />
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 1.5, 2, 2.5].map(qty => (
                      <button
                        key={qty}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, brass_qty: qty.toString() }))}
                        className="py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {qty}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rate Section - FIXED UI */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Rate per {flatSettings.unit || 'Brass'} *
                  </label>
                  {isRateOverridden && originalRate && (
                    <button
                      type="button"
                      onClick={handleResetRate}
                      className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full hover:bg-yellow-200 flex items-center"
                    >
                      <FiRefreshCw className="h-3 w-3 mr-1" />
                      Reset to ₹{originalRate}
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="number"
                    name="rate"
                    value={formData.rate}
                    onChange={handleRateChange}
                    className={`px-3 py-2 border ${errors.rate ? 'border-red-500' : 'border-gray-300'} ${isRateOverridden ? 'border-yellow-400 bg-yellow-50' : ''} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Rate"
                    min="0"
                  />
                  
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: '₹1000 (Partner)', value: 1000 },
                      { label: '₹1200 (Regular)', value: 1200 },
                      { label: '₹1300 (Premium)', value: 1300 },
                      { label: '₹1400 (Special)', value: 1400 }
                    ].map(rate => (
                      <button
                        key={rate.value}
                        type="button"
                        onClick={() => handleQuickRate(rate.value)}
                        className="py-2 text-xs border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {rate.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                {errors.rate && (
                  <p className="mt-1 text-sm text-red-600">{errors.rate}</p>
                )}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="number"
                    name="cash_paid"
                    value={formData.cash_paid}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                    min="0"
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

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20 resize-none"
                  placeholder="Any additional notes..."
                />
              </div>
            </div>
          </div>

          {/* Recent Transactions - FIXED TABLE */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Time</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Vehicle</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Qty</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Rate</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentTransactions.length > 0 ? (
                    recentTransactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                          {formatToIST(transaction.date_time)}
                        </td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          {transaction.vehicle_number}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">
                          {transaction.brass_qty}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">
                          ₹{transaction.rate}
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">
                          ₹{transaction.total_amount?.toFixed(2) || '0.00'}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            transaction.cash_paid >= transaction.total_amount 
                              ? 'bg-green-100 text-green-800'
                              : transaction.cash_paid > 0
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {transaction.cash_paid >= transaction.total_amount 
                              ? 'Paid' 
                              : transaction.cash_paid > 0
                              ? 'Partial'
                              : 'Unpaid'
                            }
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                        No recent transactions found
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
          {/* Bill Calculation Card - FIXED UI */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <FaCalculator className="h-5 w-5 mr-2 text-blue-600" />
              Bill Calculation
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Material Cost:</span>
                <span className="text-lg font-semibold">
                  {formatCurrency(calculations.materialCost)}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Loading Charge:</span>
                <span className="text-lg">
                  {formatCurrency(formData.loading_charge || 0)}
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-800 font-medium">Total Bill:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {formatCurrency(calculations.totalBill)}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Cash Paid:</span>
                <span className="text-lg font-medium text-green-600">
                  {formatCurrency(formData.cash_paid || 0)}
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className={`flex justify-between items-center py-2 ${
                  calculations.creditAmount > 0 ? 'text-red-600' : 
                  calculations.creditAmount < 0 ? 'text-orange-600' : 'text-green-600'
                }`}>
                  <span className="font-medium">
                    {calculations.creditAmount > 0 ? 'Credit (Udhaar):' : 
                     calculations.creditAmount < 0 ? 'Return:' : 'Balance:'}
                  </span>
                  <span className="text-2xl font-bold">
                    {formatCurrency(Math.abs(calculations.creditAmount))}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Owner Information */}
            {selectedOwnerInfo && (
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Owner Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className={`font-medium ${selectedOwnerInfo.is_partner ? 'text-green-600' : 'text-gray-700'}`}>
                      {selectedOwnerInfo.is_partner ? 'Partner' : 'Regular'}
                    </span>
                  </div>
                  {selectedOwnerInfo.vehicle_number && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vehicle:</span>
                      <span className="font-medium text-gray-700">
                        {selectedOwnerInfo.vehicle_number}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Applied Rate:</span>
                    <span className={`font-medium ${isRateOverridden ? 'text-yellow-600' : selectedOwnerInfo.is_partner ? 'text-green-600' : 'text-gray-700'}`}>
                      ₹{formData.rate} {isRateOverridden ? '(Overridden)' : selectedOwnerInfo.is_partner ? '(Partner)' : ''}
                    </span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Save Button */}
            <button
              onClick={handleSaveReceipt}
              disabled={isSaving || !formData.truck_owner || !formData.vehicle_number || !formData.brass_qty}
              className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center space-x-3 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-md"
            >
              <FiSave className="h-5 w-5" />
              <span>{isSaving ? 'Saving...' : 'Save & Print Receipt'}</span>
            </button>
          </div>

          {/* Today's Summary Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Today's Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Total Trucks:</span>
                <span className="font-bold text-gray-900">
                  {recentTransactions.filter(t => {
                    const txDate = new Date(t.date_time);
                    const today = new Date();
                    return txDate.toDateString() === today.toDateString();
                  }).length}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Cash Collected:</span>
                <span className="font-bold text-green-600">
                  {formatCurrency(recentTransactions
                    .filter(t => new Date(t.date_time).toDateString() === new Date().toDateString())
                    .reduce((sum, t) => sum + (t.cash_paid || 0), 0)
                  )}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Credit Given:</span>
                <span className="font-bold text-red-600">
                  {formatCurrency(recentTransactions
                    .filter(t => new Date(t.date_time).toDateString() === new Date().toDateString())
                    .reduce((sum, t) => sum + ((t.total_amount || 0) - (t.cash_paid || 0)), 0)
                  )}
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