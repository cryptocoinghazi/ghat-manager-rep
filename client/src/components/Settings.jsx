import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiSave, FiUpload, FiDownload, FiRefreshCw, FiHome, FiPrinter, FiShield, FiTrash2, FiEdit2, FiX, FiTruck } from 'react-icons/fi';
import { FaDollarSign } from 'react-icons/fa';

const Settings = ({ settings, fetchSettings }) => {
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('company');
  const [isSaving, setIsSaving] = useState(false);
  const [backupData, setBackupData] = useState(null);
  const [truckOwners, setTruckOwners] = useState([]);
  const [newOwner, setNewOwner] = useState({ name: '', contact: '', address: '', vehicle_number: '' });
  const [editingOwnerId, setEditingOwnerId] = useState(null);
  const [dbBackups, setDbBackups] = useState([]);
  const [isDbConnected, setIsDbConnected] = useState(false);
  
  // Truck Vehicles State
  const [truckVehicles, setTruckVehicles] = useState([]);
  const [vehicleSearch, setVehicleSearch] = useState('');
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [newVehicle, setNewVehicle] = useState({ vehicle_number: '', driver_name: '', tyre_type: '', truck_owner_id: '' });

  // Initialize formData with settings.flat (since backend now returns { flat, categorized })
  useEffect(() => {
    if (settings && settings.flat) {
      setFormData(settings.flat);
    } else if (settings && typeof settings === 'object') {
      // Handle backward compatibility if settings is still a flat object
      setFormData(settings);
    }
  }, [settings]);

  // Fetch truck owners
  useEffect(() => {
    fetchTruckOwners();
    fetchTruckVehicles();
    checkDbStatus();
    handleDbBackupList();
  }, []);

  const fetchTruckOwners = async () => {
    try {
      const response = await axios.get('/api/settings/truck-owners');
      setTruckOwners(response.data || []);
    } catch (error) {
      console.error('Error fetching truck owners:', error);
      setTruckOwners([]);
    }
  };

  const fetchTruckVehicles = async () => {
    try {
      const response = await axios.get(`/api/settings/truck-vehicles?q=${vehicleSearch}`);
      setTruckVehicles(response.data || []);
    } catch (error) {
      console.error('Error fetching truck vehicles:', error);
      setTruckVehicles([]);
    }
  };

  // Debounced search for vehicles
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchTruckVehicles();
    }, 500);
    return () => clearTimeout(timer);
  }, [vehicleSearch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      // Send only the flat object for batch update
      await axios.post('/api/settings/batch-update', formData);
      await fetchSettings();
      toast.success('Settings saved successfully!');
    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error(error.response?.data?.error || 'Failed to save settings');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCreateBackup = async () => {
    try {
      const response = await axios.get('/api/settings/backup', {
        responseType: 'blob' // Important for file download
      });
      
      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `ghat-manager-backup-${new Date().toISOString().split('T')[0]}.json`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      toast.success('Backup created and downloaded successfully!');
    } catch (error) {
      console.error('Error creating backup:', error);
      toast.error('Failed to create backup');
    }
  };

  const handleRestoreBackup = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const backup = JSON.parse(event.target.result);
        
        if (!backup.timestamp || !backup.data) {
          throw new Error('Invalid backup file format');
        }
        
        if (window.confirm('Are you sure you want to restore from backup? This will overwrite all current data.')) {
          try {
            await axios.post('/api/settings/restore', { backupData: backup });
            toast.success('Backup restored successfully!');
            // Refresh settings and data
            await fetchSettings();
            await fetchTruckOwners();
            // You might want to refresh other data here
          } catch (error) {
            console.error('Error restoring backup:', error);
            toast.error(error.response?.data?.error || 'Failed to restore backup');
          }
        }
      } catch (error) {
        console.error('Error reading backup:', error);
        toast.error('Invalid backup file format');
      }
    };
    reader.readAsText(file);
    
    // Reset file input
    e.target.value = '';
  };

  const handleResetToDefaults = async () => {
    if (window.confirm('Are you sure you want to reset all settings to defaults?')) {
      const defaults = {
        quarry_name: 'Mukindpur Sand Quarry',
        quarry_address: 'Mukindpur, District Office',
        default_rate: '1200',
        default_partner_rate: '1000',
        loading_charge: '150',
        receipt_prefix: 'GM',
        receipt_start: '9001',
        currency: '₹',
        unit: 'Brass'
      };
      
      setFormData(prev => ({ ...prev, ...defaults }));
      toast.success('Settings reset to defaults (click Save to apply)');
    }
  };

  const checkDbStatus = async () => {
    try {
      const res = await axios.get('/api/health');
      setIsDbConnected(true);
    } catch {
      setIsDbConnected(false);
    }
  };

  const handleDbBackup = async () => {
    try {
      const res = await axios.get('/api/database/backup');
      toast.success('Database backup created');
      await handleDbBackupList();
    } catch {
      toast.error('Database backup failed');
    }
  };

  const handleDbBackupList = async () => {
    try {
      const res = await axios.get('/api/database/backup/list');
      setDbBackups(res.data || []);
    } catch {
      setDbBackups([]);
    }
  };

  const handleDbRestore = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const form = new FormData();
    form.append('file', file);
    try {
      await axios.post('/api/database/restore', form, { headers: { 'Content-Type': 'multipart/form-data' } });
      toast.success('Database restored successfully');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Restore failed');
    } finally {
      e.target.value = '';
    }
  };

  const handleRestoreFromBackup = async (filename) => {
    if (window.confirm(`Are you sure you want to restore database from backup "${filename}"? Current data will be replaced.`)) {
      try {
        await axios.post('/api/database/restore-file', { filename });
        toast.success('Database restored successfully');
      } catch (error) {
        toast.error(error.response?.data?.error || 'Restore failed');
      }
    }
  };

  const handleSaveVehicle = async (e) => {
    e.preventDefault();
    try {
      const payload = editingVehicle ? editingVehicle : newVehicle;
      if (!payload.vehicle_number) {
        toast.error('Vehicle number is required');
        return;
      }
      
      await axios.post('/api/settings/truck-vehicles', payload);
      toast.success(editingVehicle ? 'Vehicle updated' : 'Vehicle added');
      
      setEditingVehicle(null);
      setNewVehicle({ vehicle_number: '', driver_name: '', tyre_type: '', truck_owner_id: '' });
      fetchTruckVehicles();
    } catch (error) {
      console.error('Error saving vehicle:', error);
      toast.error('Failed to save vehicle');
    }
  };

  const handleAddTruckOwner = async () => {
    if (!newOwner.name.trim()) {
      toast.error('Owner name is required');
      return;
    }
    
    if (!newOwner.vehicle_number.trim()) {
      toast.error('Vehicle number is required');
      return;
    }

    try {
      if (editingOwnerId) {
        await axios.put(`/api/settings/truck-owners/${editingOwnerId}`, {
          ...newOwner,
          phone: newOwner.contact // Backend expects 'phone'
        });
        toast.success('Truck owner updated successfully!');
        setEditingOwnerId(null);
      } else {
        await axios.post('/api/settings/truck-owners', newOwner);
        toast.success('Truck owner added successfully!');
      }
      setNewOwner({ name: '', contact: '', address: '', vehicle_number: '' });
      await fetchTruckOwners();
    } catch (error) {
      console.error('Error saving truck owner:', error);
      toast.error(error.response?.data?.error || 'Failed to save truck owner');
    }
  };

  const handleEditOwner = (owner) => {
    setNewOwner({
      name: owner.name,
      contact: owner.phone || owner.contact || '', // Handle both fields
      address: owner.address || '',
      vehicle_number: owner.vehicle_number || ''
    });
    setEditingOwnerId(owner.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setNewOwner({ name: '', contact: '', address: '', vehicle_number: '' });
    setEditingOwnerId(null);
  };

  const handleDeleteTruckOwner = async (ownerId, ownerName) => {
    if (window.confirm(`Are you sure you want to delete ${ownerName}?`)) {
      try {
        await axios.delete(`/api/settings/truck-owners/${ownerId}`);
        toast.success('Truck owner deleted successfully!');
        await fetchTruckOwners();
      } catch (error) {
        console.error('Error deleting truck owner:', error);
        toast.error(error.response?.data?.error || 'Failed to delete truck owner');
      }
    }
  };

  const handleAddDeposit = async (owner) => {
    const input = window.prompt(`Add deposit for ${owner.name} (₹):`, '0');
    if (input === null) return;
    const amount = parseFloat(input);
    if (!amount || amount <= 0) {
      toast.error('Enter a valid amount');
      return;
    }
    try {
      await axios.post(`/api/settings/truck-owners/${owner.id}/deposit/add`, { amount });
      toast.success('Deposit added');
      await fetchTruckOwners();
    } catch (error) {
      console.error('Error adding deposit:', error);
      toast.error(error.response?.data?.error || 'Failed to add deposit');
    }
  };

  const handleEditDeposit = async (owner) => {
    const input = window.prompt(`Set deposit balance for ${owner.name} (₹):`, String(owner.deposit_balance || 0));
    if (input === null) return;
    const amount = parseFloat(input);
    if (isNaN(amount) || amount < 0) {
      toast.error('Enter a valid non-negative amount');
      return;
    }
    try {
      await axios.put(`/api/settings/truck-owners/${owner.id}/deposit/set`, { amount });
      toast.success('Deposit balance updated');
      await fetchTruckOwners();
    } catch (error) {
      console.error('Error updating deposit:', error);
      toast.error(error.response?.data?.error || 'Failed to update deposit');
    }
  };

  const handleToggleGst = async (owner) => {
    if (window.confirm(`Are you sure you want to ${owner.is_gst_client ? 'remove' : 'add'} ${owner.name} from GST clients?`)) {
      try {
        await axios.put(`/api/settings/truck-owners/${owner.id}/toggle-gst`, { 
          is_gst_client: !owner.is_gst_client 
        });
        toast.success(`GST status updated for ${owner.name}`);
        await fetchTruckOwners();
      } catch (error) {
        console.error('Error toggling GST status:', error);
        toast.error('Failed to update GST status');
      }
    }
  };

  const tabs = [
    { id: 'company', name: 'Company', icon: FiHome },
    { id: 'financial', name: 'Financial', icon: FaDollarSign },
    { id: 'receipt', name: 'Receipt', icon: FiPrinter },
    { id: 'truck-vehicles', name: 'Truck Vehicles', icon: FiTruck },
    { id: 'truck-owners', name: 'Truck Owners', icon: FiShield },
    { id: 'data', name: 'Data Management', icon: FiShield },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">Configure application settings and preferences</p>
        </div>
        <button
          onClick={handleSaveSettings}
          disabled={isSaving}
          className="btn-primary flex items-center space-x-2"
        >
          <FiSave className="h-5 w-5" />
          <span>{isSaving ? 'Saving...' : 'Save Settings'}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-6 overflow-x-auto whitespace-nowrap no-scrollbar -mx-4 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2
                ${activeTab === tab.id
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'
                }
              `}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="card p-6">
        {activeTab === 'company' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Quarry/Ghat Name *
                </label>
                <input
                  type="text"
                  name="quarry_name"
                  value={formData.quarry_name || ''}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter quarry name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="quarry_address"
                  value={formData.quarry_address || ''}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contact_number"
                  value={formData.contact_number || ''}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter contact number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  GSTIN (Optional)
                </label>
                <input
                  type="text"
                  name="gstin"
                  value={formData.gstin || ''}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter GSTIN"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Terms & Conditions
              </label>
              <textarea
                name="terms"
                value={formData.terms || ''}
                onChange={handleInputChange}
                className="input-field h-32"
                placeholder="Enter terms and conditions for receipts"
              />
            </div>
          </div>
        )}

        {activeTab === 'financial' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Financial Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Default Rate per {formData.unit || 'Brass'} *
                </label>
                <input
                  type="number"
                  name="default_rate"
                  value={formData.default_rate || ''}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter default rate"
                  min="0"
                  step="1"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Default price for regular customers</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Partner Rate per {formData.unit || 'Brass'} *
                </label>
                <input
                  type="number"
                  name="default_partner_rate"
                  value={formData.default_partner_rate || ''}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter partner rate"
                  min="0"
                  step="1"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Discounted price for partner customers</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Loading Charge (Bharai) *
                </label>
                <input
                  type="number"
                  name="loading_charge"
                  value={formData.loading_charge || ''}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter loading charge"
                  min="0"
                  step="1"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Additional charge per transaction</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Currency Symbol
                </label>
                <input
                  type="text"
                  name="currency"
                  value={formData.currency || ''}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="₹, $, etc."
                  maxLength="3"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Unit of Measurement
                </label>
                <select
                  name="unit"
                  value={formData.unit || 'Brass'}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="Brass">Brass</option>
                  <option value="Cubic Feet">Cubic Feet</option>
                  <option value="Cubic Meter">Cubic Meter</option>
                  <option value="Truck">Truck</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tax Rate (%) (Optional)
                </label>
                <input
                  type="number"
                  name="tax_rate"
                  value={formData.tax_rate || ''}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="0"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Default Credit Limit
                </label>
                <input
                  type="number"
                  name="credit_limit"
                  value={formData.credit_limit || ''}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="0"
                  min="0"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Default credit limit for new customers</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'receipt' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Receipt Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Receipt Prefix
                </label>
                <input
                  type="text"
                  name="receipt_prefix"
                  value={formData.receipt_prefix || ''}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="GM"
                  maxLength="5"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Prefix for receipt numbers (e.g., GM)</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Starting Number
                </label>
                <input
                  type="number"
                  name="receipt_start"
                  value={formData.receipt_start || ''}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="9001"
                  min="1"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Next receipt number to use</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Printer Width
                </label>
                <select
                  name="printer_width"
                  value={formData.printer_width || '58mm'}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="58mm">58mm</option>
                  <option value="80mm">80mm</option>
                </select>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Thermal paper width</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Include barcode (QR)
                </label>
                <select
                  name="include_barcode"
                  value={formData.include_barcode || 'false'}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Receipt Footer Text
                </label>
                <input
                  type="text"
                  name="footer_text"
                  value={formData.footer_text || ''}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Thank you for your business!"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Auto-print after save
                </label>
                <select
                  name="auto_print"
                  value={formData.auto_print || 'true'}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Print duplicate copy
                </label>
                <select
                  name="print_duplicate"
                  value={formData.print_duplicate || 'false'}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Receipt Template Preview
                </label>
                <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-[#262626] text-gray-900 dark:text-white">
                  <div className="text-center mb-4">
                    <h4 className="font-bold text-lg">{formData.quarry_name || 'Quarry Name'}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{formData.quarry_address || 'Address'}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Receipt No:</span>
                      <span className="font-medium">{formData.receipt_prefix || 'GM'}9001</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2">
                      <div className="flex justify-between">
                        <span>Total Amount:</span>
                        <span className="font-bold">{formData.currency || '₹'}1,200.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600 text-center text-xs text-gray-500 dark:text-gray-400">
                    {formData.footer_text || 'Thank you for your business!'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'truck-vehicles' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Truck Vehicles Management</h3>
              <div className="w-64">
                <input
                  type="text"
                  placeholder="Search vehicles..."
                  value={vehicleSearch}
                  onChange={(e) => setVehicleSearch(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#262626] text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Add/Edit Form */}
            <div className="bg-gray-50 dark:bg-[#262626] p-4 rounded-lg mb-6">
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                {editingVehicle ? 'Edit Vehicle' : 'Add New Vehicle'}
              </h4>
              <form onSubmit={handleSaveVehicle} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Vehicle Number *
                  </label>
                  <input
                    type="text"
                    value={editingVehicle ? editingVehicle.vehicle_number : newVehicle.vehicle_number}
                    onChange={(e) => {
                      const val = e.target.value.toUpperCase();
                      editingVehicle 
                        ? setEditingVehicle({...editingVehicle, vehicle_number: val})
                        : setNewVehicle({...newVehicle, vehicle_number: val});
                    }}
                    className="input-field"
                    placeholder="KA01AB1234"
                    disabled={!!editingVehicle} // Disable primary key edit
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Driver Name
                  </label>
                  <input
                    type="text"
                    value={editingVehicle ? editingVehicle.driver_name || '' : newVehicle.driver_name}
                    onChange={(e) => {
                      const val = e.target.value;
                      editingVehicle 
                        ? setEditingVehicle({...editingVehicle, driver_name: val})
                        : setNewVehicle({...newVehicle, driver_name: val});
                    }}
                    className="input-field"
                    placeholder="Driver Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Tyre Type
                  </label>
                  <select
                    value={editingVehicle ? editingVehicle.tyre_type || '' : newVehicle.tyre_type}
                    onChange={(e) => {
                      const val = e.target.value;
                      editingVehicle 
                        ? setEditingVehicle({...editingVehicle, tyre_type: val})
                        : setNewVehicle({...newVehicle, tyre_type: val});
                    }}
                    className="input-field"
                  >
                    <option value="">Select Type</option>
                    <option value="6 Tyre">6 Tyre</option>
                    <option value="10 Tyre">10 Tyre</option>
                    <option value="12 Tyre">12 Tyre</option>
                    <option value="14 Tyre">14 Tyre</option>
                    <option value="16 Tyre">16 Tyre</option>
                    <option value="18 Tyre">18 Tyre</option>
                    <option value="22 Tyre">22 Tyre</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Truck Owner (Optional)
                  </label>
                  <select
                    value={editingVehicle ? editingVehicle.truck_owner_id || '' : newVehicle.truck_owner_id}
                    onChange={(e) => {
                      const val = e.target.value;
                      editingVehicle 
                        ? setEditingVehicle({...editingVehicle, truck_owner_id: val})
                        : setNewVehicle({...newVehicle, truck_owner_id: val});
                    }}
                    className="input-field"
                  >
                    <option value="">Select Owner</option>
                    {truckOwners.map(owner => (
                      <option key={owner.id} value={owner.id}>{owner.name}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-4 flex justify-end space-x-2 mt-2">
                  {editingVehicle && (
                    <button
                      type="button"
                      onClick={() => setEditingVehicle(null)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    {editingVehicle ? 'Update Vehicle' : 'Add Vehicle'}
                  </button>
                </div>
              </form>
            </div>

            {/* Vehicles List */}
            <div className="bg-white dark:bg-[#262626] shadow overflow-x-auto rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-[#262626]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Vehicle Number</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Driver</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tyre Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Owner</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {truckVehicles.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                        No vehicles found
                      </td>
                    </tr>
                  ) : (
                    truckVehicles.map((vehicle) => {
                      const owner = truckOwners.find(o => o.id === vehicle.truck_owner_id);
                      return (
                        <tr key={vehicle.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            {vehicle.vehicle_number}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {vehicle.driver_name || '-'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {vehicle.tyre_type || '-'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {owner ? owner.name : '-'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => setEditingVehicle(vehicle)}
                              className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-4"
                            >
                              <FiEdit2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'truck-owners' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Truck Owners Management</h3>
            
            {/* Add new owner */}
            <div className={`card p-6 mb-6 ${editingOwnerId ? 'border-2 border-blue-500' : ''}`}>
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {editingOwnerId ? 'Update Truck Owner' : 'Add New Truck Owner'}
                </h4>
                {editingOwnerId && (
                  <button
                    onClick={handleCancelEdit}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center text-sm"
                  >
                    <FiX className="mr-1" /> Cancel Edit
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Owner Name *
                  </label>
                  <input
                    type="text"
                    value={newOwner.name}
                    onChange={(e) => setNewOwner({...newOwner, name: e.target.value})}
                    className="input-field"
                    placeholder="Enter owner name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Vehicle Number *
                  </label>
                  <input
                    type="text"
                    value={newOwner.vehicle_number}
                    onChange={(e) => setNewOwner({...newOwner, vehicle_number: e.target.value})}
                    className="input-field"
                    placeholder="e.g., MH-31-XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    value={newOwner.contact}
                    onChange={(e) => setNewOwner({...newOwner, contact: e.target.value})}
                    className="input-field"
                    placeholder="Enter contact number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    value={newOwner.address}
                    onChange={(e) => setNewOwner({...newOwner, address: e.target.value})}
                    className="input-field"
                    placeholder="Enter address"
                  />
                </div>
              </div>
              <button
                onClick={handleAddTruckOwner}
                className={`btn-primary ${editingOwnerId ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
              >
                {editingOwnerId ? 'Update Truck Owner' : 'Add Truck Owner'}
              </button>
            </div>
            
            {/* Existing owners list */}
            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Existing Truck Owners</h4>
              {truckOwners.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center py-4">No truck owners found. Add one above.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Vehicle Number</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Address</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Deposit Balance</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-200 dark:divide-gray-700">
                      {truckOwners.map((owner) => (
                        <tr key={owner.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{owner.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">{owner.vehicle_number || '-'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{owner.phone || owner.contact || '-'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{owner.address || '-'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">₹{owner.deposit_balance || 0}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                             {owner.is_gst_client ? (
                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">GST</span>
                             ) : (
                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">Regular</span>
                             )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button
                              onClick={() => handleEditOwner(owner)}
                              className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 p-2 rounded transition-colors mr-2"
                              title="Edit Details"
                            >
                              <FiEdit2 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleToggleGst(owner)}
                              className={`p-2 rounded transition-colors mr-2 ${owner.is_gst_client ? 'text-purple-600 bg-purple-50 hover:bg-purple-100 dark:text-purple-400 dark:bg-purple-900/30 dark:hover:bg-purple-900/50' : 'text-gray-400 hover:text-purple-600 hover:bg-gray-50 dark:text-gray-500 dark:hover:text-purple-400 dark:hover:bg-gray-800'}`}
                              title={owner.is_gst_client ? "Remove GST Status" : "Mark as GST Client"}
                            >
                              <FiShield className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleAddDeposit(owner)}
                              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 p-2 rounded transition-colors mr-2"
                              title="Add deposit"
                            >
                              Add Balance
                            </button>
                            <button
                              onClick={() => handleEditDeposit(owner)}
                              className="text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300 hover:bg-yellow-50 dark:hover:bg-yellow-900/30 p-2 rounded transition-colors mr-2"
                              title="Edit deposit"
                            >
                              Edit Balance
                            </button>
                            <button
                              onClick={() => handleDeleteTruckOwner(owner.id, owner.name)}
                              className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30 p-2 rounded transition-colors"
                              title="Delete owner"
                            >
                              <FiTrash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Data Management</h3>
            
            {/* Reset Section */}
            <div className="card p-6 mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <FiRefreshCw className="h-5 w-5 mr-2 text-yellow-600 dark:text-yellow-500" />
                Reset Settings
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Reset all settings to their default values. This does not delete transaction data.
              </p>
              <button
                onClick={handleResetToDefaults}
                className="btn-secondary text-yellow-700 dark:text-yellow-500 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"
              >
                Reset to Defaults
              </button>
            </div>

            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Database Management</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Current Database</p>
                  <p className="text-sm font-medium dark:text-white">MySQL</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Status: {isDbConnected ? 'Connected' : 'Unknown'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Auto Backup</label>
                  <select
                    name="auto_backup_enabled"
                    value={formData.auto_backup_enabled || 'false'}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="false">Disabled</option>
                    <option value="true">Enabled</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Backup Time</label>
                  <input
                    type="time"
                    name="auto_backup_time"
                    value={formData.auto_backup_time || '02:00'}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Runs daily at set time</p>
                </div>
                <div>
                  {formData.auto_backup_last_run && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">Last run: {formData.auto_backup_last_run}</p>
                  )}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button onClick={handleDbBackup} className="btn-primary w-full sm:w-auto flex items-center justify-center space-x-2">
                  <FiDownload className="h-5 w-5" />
                  <span>Backup Database</span>
                </button>
                <label className="btn-secondary w-full sm:w-auto flex items-center justify-center space-x-2 cursor-pointer">
                  <FiUpload className="h-5 w-5" />
                  <span>Restore Database</span>
                  <input type="file" accept=".sql" className="hidden" onChange={handleDbRestore} />
                </label>
                <button onClick={handleDbBackupList} className="btn-secondary w-full sm:w-auto">Refresh List</button>
              </div>
              <div className="mt-4">
                {dbBackups.length === 0 ? (
                  <p className="text-sm text-gray-600 dark:text-gray-400">No backups found</p>
                ) : (
                  <ul className="text-sm divide-y divide-gray-100 dark:divide-gray-800">
                    {dbBackups.map(b => (
                      <li key={b.name} className="flex justify-between py-2 items-center">
                        <span className="font-mono text-xs text-gray-700 dark:text-gray-300">{b.name}</span>
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-500 dark:text-gray-400 text-xs">{Math.round((b.size || 0)/1024)} KB</span>
                          <button 
                            onClick={() => handleRestoreFromBackup(b.name)}
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-xs font-medium hover:underline"
                          >
                            Restore
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
