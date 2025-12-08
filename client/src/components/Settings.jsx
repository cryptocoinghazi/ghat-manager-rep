import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiSave, FiUpload, FiDownload, FiRefreshCw, FiHome, FiPrinter, FiShield } from 'react-icons/fi';
import { FaDollarSign } from 'react-icons/fa';

const Settings = ({ settings, fetchSettings }) => {
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('company');
  const [isSaving, setIsSaving] = useState(false);
  const [backupData, setBackupData] = useState(null);
  const [truckOwners, setTruckOwners] = useState([]);
  const [newOwner, setNewOwner] = useState({ name: '', contact: '', address: '' });

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

  const handleAddTruckOwner = async () => {
    if (!newOwner.name.trim()) {
      toast.error('Owner name is required');
      return;
    }

    try {
      await axios.post('/api/settings/truck-owners', newOwner);
      toast.success('Truck owner added successfully!');
      setNewOwner({ name: '', contact: '', address: '' });
      await fetchTruckOwners();
    } catch (error) {
      console.error('Error adding truck owner:', error);
      toast.error(error.response?.data?.error || 'Failed to add truck owner');
    }
  };

  const tabs = [
    { id: 'company', name: 'Company', icon: FiHome },
    { id: 'financial', name: 'Financial', icon: FaDollarSign },
    { id: 'receipt', name: 'Receipt', icon: FiPrinter },
    { id: 'truck-owners', name: 'Truck Owners', icon: FiShield },
    { id: 'data', name: 'Data Management', icon: FiShield },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Configure application settings and preferences</p>
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
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2
                ${activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
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
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
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
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <p className="mt-1 text-sm text-gray-500">Default price per unit</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <p className="mt-1 text-sm text-gray-500">Additional charge per transaction</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <p className="mt-1 text-sm text-gray-500">Default credit limit for new customers</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'receipt' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Receipt Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <p className="mt-1 text-sm text-gray-500">Prefix for receipt numbers (e.g., GM)</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <p className="mt-1 text-sm text-gray-500">Next receipt number to use</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Receipt Template Preview
                </label>
                <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
                  <div className="text-center mb-4">
                    <h4 className="font-bold text-lg">{formData.quarry_name || 'Quarry Name'}</h4>
                    <p className="text-sm text-gray-600">{formData.quarry_address || 'Address'}</p>
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
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between">
                        <span>Total Amount:</span>
                        <span className="font-bold">{formData.currency || '₹'}1,200.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t text-center text-xs text-gray-500">
                    {formData.footer_text || 'Thank you for your business!'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'truck-owners' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Truck Owners Management</h3>
            
            {/* Add new owner */}
            <div className="card p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Add New Truck Owner</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                className="btn-primary"
              >
                Add Truck Owner
              </button>
            </div>
            
            {/* Existing owners list */}
            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Existing Truck Owners</h4>
              {truckOwners.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No truck owners found. Add one above.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {truckOwners.map((owner) => (
                        <tr key={owner.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{owner.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{owner.contact || '-'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{owner.address || '-'}</td>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h3>
            
            {/* Backup Section */}
            <div className="card p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <FiDownload className="h-5 w-5 mr-2 text-primary-600" />
                Backup Data
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Create a backup of all your data including receipts, customers, and settings.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleCreateBackup}
                  className="btn-primary flex items-center space-x-2"
                >
                  <FiDownload className="h-5 w-5" />
                  <span>Create Backup</span>
                </button>
                
                <div className="relative">
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleRestoreBackup}
                    className="hidden"
                    id="restore-file"
                  />
                  <label
                    htmlFor="restore-file"
                    className="btn-secondary flex items-center space-x-2 cursor-pointer"
                  >
                    <FiUpload className="h-5 w-5" />
                    <span>Restore Backup</span>
                  </label>
                </div>
              </div>
              
              {backupData && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    Last backup created: {new Date(backupData.timestamp).toLocaleString()}
                  </p>
                </div>
              )}
            </div>
            
            {/* Reset Section */}
            <div className="card p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <FiRefreshCw className="h-5 w-5 mr-2 text-yellow-600" />
                Reset Settings
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Reset all settings to their default values. This does not delete transaction data.
              </p>
              <button
                onClick={handleResetToDefaults}
                className="btn-secondary text-yellow-700 border-yellow-300 hover:bg-yellow-50"
              >
                Reset to Defaults
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;