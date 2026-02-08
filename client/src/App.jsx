import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import ReceiptForm from './components/ReceiptForm';
import DailyRegister from './components/DailyRegister';
import Settings from './components/Settings';
import Reports from './components/Reports';
import Login from './components/Login';
import UserManagement from './components/UserManagement';
import ExpenseManager from './components/ExpenseManager';
import PartnerManagement from './components/PartnerManagement';
import GstReceiptForm from './components/GstReceiptForm';
import GstReports from './components/GstReports';

import LandingPage from './components/LandingPage';

const AdminRoute = ({ user, children }) => {
  if (user?.role !== 'admin') {
    return <Navigate to="/receipt" replace />;
  }
  return children;
};

// Axios is configured in main.jsx via axiosConfig.js

function App() {
  const [settings, setSettings] = useState({});
  const [truckOwners, setTruckOwners] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) {
      fetchSettings();
      fetchTruckOwners();
    }
  }, [user]);

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      try {
        const response = await axios.post('/api/auth/verify');
        if (response.data.valid) {
          setUser(response.data.user);
        } else {
          handleLogout();
        }
      } catch (error) {
        console.error('Token verification failed:', error);
        handleLogout();
      }
    }
    
    setLoading(false);
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

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
      setTruckOwners(response.data);
    } catch (error) {
      console.error('Error fetching truck owners:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#121212] flex items-center justify-center transition-colors duration-300">
        <div className="w-8 h-8 border-4 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-gray-50 dark:bg-[#121212] transition-colors duration-300">
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10B981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#EF4444',
                secondary: '#fff',
              },
            },
          }}
        />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={
            user ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />
          } />

          {/* Protected Routes */}
          {user && (
            <Route element={<Layout user={user} onLogout={handleLogout} />}>
              <Route path="dashboard" element={<Dashboard user={user} />} />
              <Route path="receipt" element={
                <ReceiptForm 
                  settings={settings}
                  truckOwners={truckOwners}
                  fetchTruckOwners={fetchTruckOwners}
                />
              } />
              <Route path="register" element={<DailyRegister />} />
              <Route path="expenses" element={<ExpenseManager />} />
              <Route path="reports" element={
                <AdminRoute user={user}>
                  <Reports />
                </AdminRoute>
              } />
              <Route path="reports/deposit" element={
                <AdminRoute user={user}>
                  <Reports initialTab="deposit" />
                </AdminRoute>
              } />
              <Route path="settings" element={
                <AdminRoute user={user}>
                  <Settings 
                    settings={settings}
                    fetchSettings={fetchSettings}
                    user={user}
                  />
                </AdminRoute>
              } />
              <Route path="users" element={
                <AdminRoute user={user}>
                  <UserManagement />
                </AdminRoute>
              } />
              <Route path="partners" element={
                <AdminRoute user={user}>
                  <PartnerManagement />
                </AdminRoute>
              } />
              <Route path="gst-billing" element={
                <AdminRoute user={user}>
                  <GstReceiptForm 
                    settings={settings}
                    truckOwners={truckOwners}
                    fetchTruckOwners={fetchTruckOwners}
                  />
                </AdminRoute>
              } />
              <Route path="gst-reports" element={
                <AdminRoute user={user}>
                  <GstReports />
                </AdminRoute>
              } />
            </Route>
          )}

          {/* Catch-all */}
          <Route path="*" element={<Navigate to={user ? "/dashboard" : "/"} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
