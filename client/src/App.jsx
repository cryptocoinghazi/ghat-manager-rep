import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Layout from './components/Layout';
import ReceiptForm from './components/ReceiptForm';
import DailyRegister from './components/DailyRegister';
import Settings from './components/Settings';
import Reports from './components/Reports';
import Login from './components/Login';
import UserManagement from './components/UserManagement';

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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <Toaster position="top-right" />
        <Login onLogin={handleLogin} />
      </>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
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
          <Route path="/" element={<Layout user={user} onLogout={handleLogout} />}>
            <Route index element={<Navigate to="/receipt" replace />} />
            <Route path="receipt" element={
              <ReceiptForm 
                settings={settings}
                truckOwners={truckOwners}
                fetchTruckOwners={fetchTruckOwners}
              />
            } />
            <Route path="register" element={<DailyRegister />} />
            <Route path="reports" element={
              <AdminRoute user={user}>
                <Reports />
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
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
