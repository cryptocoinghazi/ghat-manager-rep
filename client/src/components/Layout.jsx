import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiFileText, 
  FiDatabase, 
  FiSettings,
  FiMenu,
  FiX,
  FiTruck,
  FiDollarSign,
  FiCreditCard,
  FiTrendingUp,
  FiTrendingDown,
  FiRefreshCw,
  FiLogOut,
  FiUser
} from 'react-icons/fi';
import { FaChartLine, FaCalendar } from 'react-icons/fa'; 
import { GiTruck } from 'react-icons/gi';
import axios from 'axios';

const Layout = ({ user, onLogout }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    todayTrucks: 0,
    cashCollected: 0,
    creditPending: 0,
    yesterdayTrucks: 0,
    yesterdayCash: 0,
    yesterdayCredit: 0,
    loading: true,
    lastUpdated: new Date()
  });

  // Get today's date in IST (India Standard Time)
  const getTodayIST = () => {
    const now = new Date();
    // IST is UTC+5:30
    const istOffset = 5.5 * 60 * 60 * 1000;
    return new Date(now.getTime() + istOffset);
  };

  // Get start and end of day in IST, then convert to UTC for API
  const getDateRangeIST = (date) => {
    const istDate = new Date(date);
    // Set to start of day (00:00:00) in IST
    const startIST = new Date(istDate);
    startIST.setHours(0, 0, 0, 0);
    
    // Set to end of day (23:59:59.999) in IST
    const endIST = new Date(istDate);
    endIST.setHours(23, 59, 59, 999);
    
    // Convert IST to UTC (subtract 5:30 hours)
    const istToUTC = -5.5 * 60 * 60 * 1000;
    const startUTC = new Date(startIST.getTime() + istToUTC);
    const endUTC = new Date(endIST.getTime() + istToUTC);
    
    return {
      start: startUTC.toISOString(),
      end: endUTC.toISOString(),
      displayDate: istDate.toLocaleDateString('en-IN')
    };
  };

  // Fetch dashboard summary data
  const fetchDashboardSummary = async () => {
    try {
      const today = getTodayIST();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      // Get date ranges for today and yesterday
      const todayRange = getDateRangeIST(today);
      const yesterdayRange = getDateRangeIST(yesterday);

      console.log('Today range:', todayRange);
      console.log('Yesterday range:', yesterdayRange);

      // Fetch today's data
      const todayResponse = await axios.get('/api/receipts', {
        params: {
          startDate: todayRange.start,
          endDate: todayRange.end
        }
      });

      // Fetch yesterday's data
      const yesterdayResponse = await axios.get('/api/receipts', {
        params: {
          startDate: yesterdayRange.start,
          endDate: yesterdayRange.end
        }
      });

      const todayReceipts = todayResponse.data.receipts || [];
      const yesterdayReceipts = yesterdayResponse.data.receipts || [];

      // Calculate today's summary
      const todayTrucks = todayReceipts.length;
      const cashCollected = todayReceipts.reduce((sum, receipt) => 
        sum + (parseFloat(receipt.cash_paid) || 0), 0
      );
      const creditPending = todayReceipts.reduce((sum, receipt) => 
        sum + (parseFloat(receipt.credit_amount) || 0), 0
      );

      // Calculate yesterday's summary
      const yesterdayTrucks = yesterdayReceipts.length;
      const yesterdayCash = yesterdayReceipts.reduce((sum, receipt) => 
        sum + (parseFloat(receipt.cash_paid) || 0), 0
      );
      const yesterdayCredit = yesterdayReceipts.reduce((sum, receipt) => 
        sum + (parseFloat(receipt.credit_amount) || 0), 0
      );

      setStats({
        todayTrucks,
        cashCollected,
        creditPending,
        yesterdayTrucks,
        yesterdayCash,
        yesterdayCredit,
        loading: false,
        lastUpdated: new Date()
      });
    } catch (error) {
      console.error('Error fetching dashboard summary:', error);
      setStats(prev => ({ ...prev, loading: false }));
    }
  };

  // Calculate percentage change
  const calculatePercentageChange = (current, previous) => {
    if (previous === 0) {
      return current > 0 ? 100 : 0;
    }
    return ((current - previous) / previous) * 100;
  };

  // Format currency in Indian format
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Format number in Indian format
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  // Format time
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  // Format date
  const formatDate = (date) => {
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  useEffect(() => {
    fetchDashboardSummary();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchDashboardSummary, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Listen for receipt updates from other components
  useEffect(() => {
    const handleReceiptUpdate = () => {
      fetchDashboardSummary();
    };

    window.addEventListener('receiptUpdated', handleReceiptUpdate);
    return () => window.removeEventListener('receiptUpdated', handleReceiptUpdate);
  }, []);

  const navigation = [
    { name: 'Quick Receipt', href: '/receipt', icon: FiFileText, color: 'text-blue-600' },
    { name: 'Daily Register', href: '/register', icon: FiDatabase, color: 'text-green-600' },
    { name: 'Reports', href: '/reports', icon: FaChartLine, color: 'text-purple-600' },
    { name: 'Settings', href: '/settings', icon: FiSettings, color: 'text-gray-600' },
  ];

  const statsData = [
    { 
      label: 'Today\'s Trucks', 
      value: stats.loading ? '...' : formatNumber(stats.todayTrucks), 
      icon: FiTruck, 
      color: 'text-blue-600',
      change: stats.loading ? '' : (() => {
        const change = calculatePercentageChange(stats.todayTrucks, stats.yesterdayTrucks);
        return `${change >= 0 ? '+' : ''}${Math.abs(change).toFixed(0)}%`;
      })(),
      changeColor: stats.loading ? 'text-gray-400' : 
        (calculatePercentageChange(stats.todayTrucks, stats.yesterdayTrucks) >= 0 ? 'text-green-600' : 'text-red-600'),
      changeIcon: stats.loading ? null : 
        (calculatePercentageChange(stats.todayTrucks, stats.yesterdayTrucks) >= 0 ? FiTrendingUp : FiTrendingDown)
    },
    { 
      label: 'Cash Collected', 
      value: stats.loading ? '...' : formatCurrency(stats.cashCollected), 
      icon: FiDollarSign, 
      color: 'text-green-600',
      change: stats.loading ? '' : (() => {
        const change = calculatePercentageChange(stats.cashCollected, stats.yesterdayCash);
        return `${change >= 0 ? '+' : ''}${Math.abs(change).toFixed(0)}%`;
      })(),
      changeColor: stats.loading ? 'text-gray-400' : 
        (calculatePercentageChange(stats.cashCollected, stats.yesterdayCash) >= 0 ? 'text-green-600' : 'text-red-600'),
      changeIcon: stats.loading ? null : 
        (calculatePercentageChange(stats.cashCollected, stats.yesterdayCash) >= 0 ? FiTrendingUp : FiTrendingDown)
    },
    { 
      label: 'Credit Pending', 
      value: stats.loading ? '...' : formatCurrency(stats.creditPending), 
      icon: FiCreditCard, 
      color: 'text-red-600',
      change: stats.loading ? '' : (() => {
        const change = calculatePercentageChange(stats.creditPending, stats.yesterdayCredit);
        // For credit, negative change is good (credit decreased)
        return `${change >= 0 ? '+' : ''}${Math.abs(change).toFixed(0)}%`;
      })(),
      changeColor: stats.loading ? 'text-gray-400' : 
        (calculatePercentageChange(stats.creditPending, stats.yesterdayCredit) <= 0 ? 'text-green-600' : 'text-red-600'),
      changeIcon: stats.loading ? null : 
        (calculatePercentageChange(stats.creditPending, stats.yesterdayCredit) <= 0 ? FiTrendingDown : FiTrendingUp)
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-gray-600 bg-opacity-75 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-xl
        transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <GiTruck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Ghat Manager</h1>
                <p className="text-xs text-blue-100">Sand Mining Billing</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:text-blue-200"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          {/* Stats */}
          <div className="border-b border-gray-200 px-6 py-4 bg-gradient-to-b from-blue-50 to-white">
            <div className="space-y-3">
              {statsData.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`rounded-lg p-2 ${stat.label === 'Today\'s Trucks' ? 'bg-blue-100' : stat.label === 'Cash Collected' ? 'bg-green-100' : 'bg-red-100'}`}>
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">{stat.value}</p>
                      <p className="text-xs text-gray-500 truncate">{stat.label}</p>
                    </div>
                  </div>
                  {stat.change && !stats.loading && (
                    <div className="flex items-center space-x-1">
                      {stat.changeIcon && <stat.changeIcon className={`h-3 w-3 ${stat.changeColor}`} />}
                      <span className={`text-xs font-semibold ${stat.changeColor}`}>
                        {stat.change}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={fetchDashboardSummary}
                disabled={stats.loading}
                className="flex items-center space-x-2 text-xs text-blue-600 hover:text-blue-800 disabled:opacity-50"
              >
                <FiRefreshCw className={`h-3 w-3 ${stats.loading ? 'animate-spin' : ''}`} />
                <span>{stats.loading ? 'Updating...' : 'Refresh'}</span>
              </button>
              <span className="text-xs text-gray-500">
                {formatTime(stats.lastUpdated)}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex items-center space-x-3 rounded-lg px-3 py-3 text-sm font-medium
                    transition-all duration-200
                    ${isActive 
                      ? 'bg-blue-50 text-blue-700 shadow-sm border-l-4 border-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span className="flex-1">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-3">
              <p className="text-xs font-semibold text-white">System Status</p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-xs text-blue-100">
                  Updated: {formatTime(stats.lastUpdated)}
                </p>
                <div className="flex items-center space-x-1">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-xs text-green-100 font-medium">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 md:px-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <FiMenu className="h-6 w-6" />
            </button>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {navigation.find(nav => nav.href === location.pathname)?.name || 'Dashboard'}
              </h2>
              <p className="text-sm text-gray-500 hidden md:block">
                {formatDate(new Date())}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Mobile stats summary */}
            <div className="flex items-center space-x-4 md:hidden">
              <div className="text-right">
                <p className="text-xs text-gray-500">Trucks</p>
                <p className="text-sm font-semibold text-blue-600">
                  {stats.loading ? '...' : stats.todayTrucks}
                </p>
              </div>
              <div className="h-6 border-l border-gray-300"></div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Cash</p>
                <p className="text-sm font-semibold text-green-600">
                  {stats.loading ? '...' : `₹${Math.round(stats.cashCollected / 1000)}K`}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <FiUser className="h-4 w-4" />
                <span className="font-medium">{user?.username || 'Guest'}</span>
                {user?.role === 'admin' && (
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    Admin
                  </span>
                )}
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-1 text-gray-500 hover:text-red-600 transition-colors px-2 py-1 rounded-lg hover:bg-red-50"
                title="Logout"
              >
                <FiLogOut className="h-5 w-5" />
                <span className="hidden md:inline text-sm">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="p-4 md:p-6">
            {/* Date header */}
            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {new Date().toLocaleDateString('en-IN', { weekday: 'long' })},
                    {' '}{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </h1>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <FaCalendar className="h-4 w-4" />
                      <span>{new Date().toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-blue-600">
                      <GiTruck className="h-4 w-4" />
                      <span>{stats.loading ? 'Loading...' : `${stats.todayTrucks} trucks today`}</span>
                    </div>
                  </div>
                </div>
                
                {/* Desktop quick stats */}
                <div className="hidden md:flex items-center space-x-6 mt-4 md:mt-0">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Cash Collected</p>
                    <p className="text-lg font-bold text-green-600">
                      {stats.loading ? '...' : formatCurrency(stats.cashCollected)}
                    </p>
                  </div>
                  <div className="h-8 border-l border-gray-300"></div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Credit Pending</p>
                    <p className="text-lg font-bold text-red-600">
                      {stats.loading ? '...' : formatCurrency(stats.creditPending)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

// Export a function to refresh dashboard stats
export const refreshDashboardStats = () => {
  window.dispatchEvent(new Event('receiptUpdated'));
};

export default Layout;