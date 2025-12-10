import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { 
  FiUsers, 
  FiUserCheck, 
  FiUserX, 
  FiEdit2, 
  FiSave, 
  FiX,
  FiTruck,
  FiDollarSign,
  FiRefreshCw
} from 'react-icons/fi';

const PartnerManagement = () => {
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [filter, setFilter] = useState('all');
  const [settings, setSettings] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [ownersRes, statsRes, settingsRes] = await Promise.all([
        axios.get('/api/settings/truck-owners'),
        axios.get('/api/settings/partner-stats'),
        axios.get('/api/settings')
      ]);
      setOwners(ownersRes.data || []);
      setStats(statsRes.data);
      setSettings(settingsRes.data?.flat || {});
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePartner = async (owner) => {
    try {
      const newPartnerStatus = !owner.is_partner;
      const partnerRate = newPartnerStatus ? (settings.default_partner_rate || '1000') : null;
      
      await axios.put(`/api/settings/truck-owners/${owner.id}/toggle-partner`, {
        is_partner: newPartnerStatus,
        partner_rate: partnerRate
      });
      
      toast.success(`${owner.name} ${newPartnerStatus ? 'marked as partner' : 'marked as regular'}`);
      fetchData();
    } catch (error) {
      console.error('Error toggling partner status:', error);
      toast.error('Failed to update partner status');
    }
  };

  const handleEdit = (owner) => {
    setEditingId(owner.id);
    setEditForm({
      name: owner.name,
      vehicle_number: owner.vehicle_number || '',
      phone: owner.phone || '',
      address: owner.address || '',
      is_partner: owner.is_partner,
      partner_rate: owner.partner_rate || settings.default_partner_rate || ''
    });
  };

  const handleSaveEdit = async (id) => {
    try {
      await axios.put(`/api/settings/truck-owners/${id}`, editForm);
      toast.success('Owner updated successfully');
      setEditingId(null);
      fetchData();
    } catch (error) {
      console.error('Error updating owner:', error);
      toast.error('Failed to update owner');
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount || 0);
  };

  const filteredOwners = owners.filter(owner => {
    if (filter === 'partners') return owner.is_partner;
    if (filter === 'regular') return !owner.is_partner;
    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-500">Loading partner data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Partner Management</h1>
          <p className="text-gray-600">Manage truck owner partnerships and rates</p>
        </div>
        <button
          onClick={fetchData}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <FiRefreshCw className="h-4 w-4" />
          <span>Refresh</span>
        </button>
      </div>

      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Partners</p>
                <p className="text-2xl font-bold text-green-600">{stats.partners?.count || 0}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <FiUserCheck className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Regular Owners</p>
                <p className="text-2xl font-bold text-blue-600">{stats.regular?.count || 0}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <FiUsers className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Partner Transactions</p>
                <p className="text-2xl font-bold text-purple-600">{stats.partners?.transactions || 0}</p>
                <p className="text-sm text-gray-500">{formatCurrency(stats.partners?.totalAmount)}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <FiTruck className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Partner Brass Total</p>
                <p className="text-2xl font-bold text-orange-600">{stats.partners?.totalBrass?.toFixed(2) || 0}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <FiDollarSign className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900">Truck Owners</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({owners.length})
              </button>
              <button
                onClick={() => setFilter('partners')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  filter === 'partners' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Partners ({owners.filter(o => o.is_partner).length})
              </button>
              <button
                onClick={() => setFilter('regular')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  filter === 'regular' 
                    ? 'bg-gray-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Regular ({owners.filter(o => !o.is_partner).length})
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vehicle Number</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Partner Rate</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOwners.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                    No truck owners found
                  </td>
                </tr>
              ) : (
                filteredOwners.map(owner => (
                  <tr key={owner.id} className="hover:bg-gray-50">
                    {editingId === owner.id ? (
                      <>
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={editForm.name}
                            onChange={e => setEditForm({...editForm, name: e.target.value})}
                            className="w-full px-2 py-1 border border-gray-300 rounded"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={editForm.vehicle_number || ''}
                            onChange={e => setEditForm({...editForm, vehicle_number: e.target.value})}
                            className="w-full px-2 py-1 border border-gray-300 rounded"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={editForm.phone}
                            onChange={e => setEditForm({...editForm, phone: e.target.value})}
                            className="w-full px-2 py-1 border border-gray-300 rounded"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={editForm.is_partner}
                              onChange={e => setEditForm({...editForm, is_partner: e.target.checked})}
                              className="h-4 w-4 text-green-600"
                            />
                            <span className="text-sm">Partner</span>
                          </label>
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            value={editForm.partner_rate}
                            onChange={e => setEditForm({...editForm, partner_rate: e.target.value})}
                            disabled={!editForm.is_partner}
                            className="w-24 px-2 py-1 border border-gray-300 rounded disabled:bg-gray-100"
                            placeholder="Rate"
                          />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <button
                              onClick={() => handleSaveEdit(owner.id)}
                              className="p-1.5 text-green-600 hover:bg-green-50 rounded"
                            >
                              <FiSave className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                            >
                              <FiX className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-4 py-3 font-medium text-gray-900">{owner.name}</td>
                        <td className="px-4 py-3 text-gray-600">{owner.vehicle_number || '-'}</td>
                        <td className="px-4 py-3 text-gray-600">{owner.phone || '-'}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            owner.is_partner 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {owner.is_partner ? 'Partner' : 'Regular'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {owner.is_partner && owner.partner_rate 
                            ? formatCurrency(owner.partner_rate) + '/Brass'
                            : '-'
                          }
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <button
                              onClick={() => handleEdit(owner)}
                              className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                              title="Edit"
                            >
                              <FiEdit2 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleTogglePartner(owner)}
                              className={`p-1.5 rounded ${
                                owner.is_partner 
                                  ? 'text-red-600 hover:bg-red-50' 
                                  : 'text-green-600 hover:bg-green-50'
                              }`}
                              title={owner.is_partner ? 'Remove Partner' : 'Make Partner'}
                            >
                              {owner.is_partner ? <FiUserX className="h-4 w-4" /> : <FiUserCheck className="h-4 w-4" />}
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">About Partner Rates</h3>
        <p className="text-sm text-blue-800">
          Partners receive a special discounted rate of <strong>{formatCurrency(settings.default_partner_rate || 1000)}/Brass</strong> compared 
          to the regular rate of <strong>{formatCurrency(settings.default_rate || 1200)}/Brass</strong>. 
          You can set custom rates for individual partners or they will use the default partner rate.
        </p>
      </div>
    </div>
  );
};

export default PartnerManagement;
