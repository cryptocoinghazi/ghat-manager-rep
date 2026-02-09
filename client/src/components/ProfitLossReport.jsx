import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, 
  AreaChart, Area
} from 'recharts';
import { 
  FiCalendar, FiDownload, FiPrinter, FiSave, FiTrendingUp, FiTrendingDown, 
  FiDollarSign, FiActivity, FiCreditCard, FiUsers, FiFilter, FiSearch, FiAlertTriangle,
  FiArrowUp, FiArrowDown, FiRefreshCw
} from 'react-icons/fi';
import { formatCurrency } from '../utils/formatUtils';
import { toast } from 'react-hot-toast';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const ProfitLossReport = () => {
  // --- State ---
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });
  const [activePreset, setActivePreset] = useState('This Month');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ledgerFilter, setLedgerFilter] = useState('');
  const [ledgerSort, setLedgerSort] = useState({ key: 'date', direction: 'desc' });

  // --- Helpers ---
  const handlePresetChange = (preset) => {
    const now = new Date();
    let start, end = now;
    
    switch (preset) {
      case 'Today':
        start = now;
        break;
      case 'This Week':
        start = new Date(now.setDate(now.getDate() - now.getDay()));
        end = new Date();
        break;
      case 'This Month':
        start = new Date(now.getFullYear(), now.getMonth(), 1);
        end = new Date();
        break;
      case 'Last Month':
        start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        end = new Date(now.getFullYear(), now.getMonth(), 0);
        break;
      case 'This Quarter':
        const qMonth = Math.floor(now.getMonth() / 3) * 3;
        start = new Date(now.getFullYear(), qMonth, 1);
        end = new Date();
        break;
      case 'This Year':
        start = new Date(now.getFullYear(), 0, 1);
        end = new Date();
        break;
      default:
        return;
    }
    
    // Adjust to local date string (YYYY-MM-DD)
    // Using a simple offset method to ensure we get the correct local YYYY-MM-DD
    const formatDate = (d) => {
        const offset = d.getTimezoneOffset() * 60000;
        return new Date(d.getTime() - offset).toISOString().split('T')[0];
    };

    setDateRange({ startDate: formatDate(start), endDate: formatDate(end) });
    setActivePreset(preset);
  };

  const fetchProfitLossData = async () => {
    if (!dateRange.startDate || !dateRange.endDate) return;
    setLoading(true);
    try {
      const response = await axios.get('/api/reports/profit-loss', {
        params: { startDate: dateRange.startDate, endDate: dateRange.endDate }
      });
      setData(response.data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfitLossData();
  }, [dateRange]);

  // --- Data Processing ---
  const calculateTrend = (current, previous) => {
    if (!previous || previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

  const filteredLedger = useMemo(() => {
    if (!data?.ledger) return [];
    let items = [...data.ledger];
    
    if (ledgerFilter) {
      const lower = ledgerFilter.toLowerCase();
      items = items.filter(i => 
        i.party?.toLowerCase().includes(lower) || 
        i.category?.toLowerCase().includes(lower) ||
        i.type?.toLowerCase().includes(lower)
      );
    }

    items.sort((a, b) => {
      const valA = a[ledgerSort.key];
      const valB = b[ledgerSort.key];
      if (valA < valB) return ledgerSort.direction === 'asc' ? -1 : 1;
      if (valA > valB) return ledgerSort.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return items;
  }, [data, ledgerFilter, ledgerSort]);

  // Forecast Logic (Simple Linear Projection for next 7 days based on last 7 days average)
  const forecastData = useMemo(() => {
    if (!data?.trends || data.trends.length < 2) return [];
    const trends = data.trends;
    const last7 = trends.slice(-7);
    const avgGrowth = last7.reduce((acc, curr, idx, arr) => {
        if (idx === 0) return 0;
        return acc + (curr.revenue - arr[idx-1].revenue);
    }, 0) / (last7.length - 1 || 1);
    
    const lastDay = new Date(trends[trends.length - 1].date);
    const lastRev = trends[trends.length - 1].revenue;
    
    return Array.from({ length: 7 }, (_, i) => {
        const d = new Date(lastDay);
        d.setDate(d.getDate() + i + 1);
        return {
            date: d.toISOString().split('T')[0],
            revenue: Math.max(0, lastRev + (avgGrowth * (i + 1))),
            isForecast: true
        };
    });
  }, [data]);

  // --- Export Functions ---
  const exportPDF = () => {
    if (!data) return;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Profit & Loss Report', 14, 15);
    doc.setFontSize(10);
    doc.text(`Period: ${dateRange.startDate} to ${dateRange.endDate}`, 14, 22);
    
    // Summary Table
    const summaryRows = [
      ['Total Revenue', formatCurrency(data.summary.revenue)],
      ['Total Expenses', formatCurrency(data.summary.expenses)],
      ['Net Profit', formatCurrency(data.summary.netProfit)],
      ['Cash Position', formatCurrency(data.summary.cashPosition)],
      ['Cash Collected', formatCurrency(data.summary.cashCollected)],
      ['Credit Given', formatCurrency(data.summary.creditGiven)],
      ['Total Receipts', data.summary.receiptCount],
      ['Deleted Receipts', data.summary.deletedReceipts]
    ];
    
    doc.autoTable({
      startY: 30,
      head: [['Metric', 'Value']],
      body: summaryRows,
      theme: 'grid',
      headStyles: { fillColor: [59, 130, 246] }
    });

    // Top Clients
    const clientRows = data.topClients.map(c => [c.name, formatCurrency(c.revenue), formatCurrency(c.credit), c.count]);
    doc.text('Top 10 Clients', 14, doc.lastAutoTable.finalY + 10);
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 15,
      head: [['Client', 'Revenue', 'Credit', 'Trips']],
      body: clientRows,
      theme: 'striped'
    });

    // Expense Breakdown
    const expenseRows = data.expenses.map(e => [e.category, formatCurrency(e.value)]);
    doc.text('Expense Breakdown', 14, doc.lastAutoTable.finalY + 10);
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 15,
      head: [['Category', 'Amount']],
      body: expenseRows,
      theme: 'striped'
    });

    doc.save(`profit-loss-${dateRange.startDate}.pdf`);
  };

  if (loading && !data) return (
    <div className="flex justify-center items-center h-96">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
    </div>
  );

  if (!data) return <div className="p-8 text-center text-gray-500">No data available</div>;

  const { 
    summary, 
    previousSummary, 
    trends = [], 
    expenses = [], 
    topClients = [], 
    receiptStats = [], 
    receiptValueDist = [], 
    newVsReturning = {}, 
    agingReceivables = [] 
  } = data || {};

  return (
    <div className="space-y-8 animate-fade-in pb-20">
      
      {/* 1. Top Bar */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-white dark:bg-[#1E1E1E] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profit & Loss Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Financial performance overview</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          {/* Presets */}
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {['Today', 'This Week', 'This Month', 'This Quarter', 'This Year'].map(preset => (
              <button
                key={preset}
                onClick={() => handlePresetChange(preset)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activePreset === preset 
                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Date Picker */}
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
            <FiCalendar className="text-gray-400" />
            <input 
              type="date" 
              value={dateRange.startDate}
              onChange={(e) => {
                setDateRange(prev => ({ ...prev, startDate: e.target.value }));
                setActivePreset('Custom');
              }}
              className="bg-transparent text-sm border-none focus:ring-0 p-0 w-24 dark:text-white"
            />
            <span className="text-gray-400">-</span>
            <input 
              type="date" 
              value={dateRange.endDate}
              onChange={(e) => {
                setDateRange(prev => ({ ...prev, endDate: e.target.value }));
                setActivePreset('Custom');
              }}
              className="bg-transparent text-sm border-none focus:ring-0 p-0 w-24 dark:text-white"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button onClick={() => toast.success('Report configuration saved')} className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" title="Save Report">
              <FiSave />
            </button>
            <button onClick={exportPDF} className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" title="Export PDF">
              <FiDownload />
            </button>
            <button onClick={window.print} className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg" title="Print">
              <FiPrinter />
            </button>
            <button onClick={fetchProfitLossData} className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg" title="Refresh">
              <FiRefreshCw className={loading ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. KPI Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            label: 'Net Profit', 
            value: summary.netProfit, 
            prev: previousSummary?.netProfit, 
            icon: FiDollarSign, 
            color: 'text-green-600', 
            bg: 'bg-green-50 dark:bg-green-900/20' 
          },
          { 
            label: 'Total Revenue', 
            value: summary.revenue, 
            prev: previousSummary?.revenue, 
            icon: FiTrendingUp, 
            color: 'text-blue-600', 
            bg: 'bg-blue-50 dark:bg-blue-900/20' 
          },
          { 
            label: 'Total Expenses', 
            value: summary.expenses, 
            prev: previousSummary?.expenses, 
            icon: FiActivity, 
            color: 'text-red-600', 
            bg: 'bg-red-50 dark:bg-red-900/20' 
          },
          { 
            label: 'Cash Position', 
            value: summary.cashPosition, 
            prev: previousSummary?.cashPosition, 
            icon: FiCreditCard, 
            color: 'text-purple-600', 
            bg: 'bg-purple-50 dark:bg-purple-900/20' 
          }
        ].map((kpi, idx) => {
          const trend = calculateTrend(kpi.value, kpi.prev);
          const isPositive = trend >= 0;
          return (
            <div 
              key={idx} 
              onClick={() => {
                if (kpi.label === 'Total Revenue') setLedgerFilter('Income');
                else if (kpi.label === 'Total Expenses') setLedgerFilter('Expense');
                else setLedgerFilter('');
                document.getElementById('ledger-section')?.scrollIntoView({ behavior: 'smooth' });
                toast.success(`Filtered ledger by ${kpi.label}`);
              }}
              className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{kpi.label}</p>
                  <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">{formatCurrency(kpi.value)}</h3>
                </div>
                <div className={`p-3 rounded-lg ${kpi.bg}`}>
                  <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className={`flex items-center font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {isPositive ? <FiArrowUp className="mr-1" /> : <FiArrowDown className="mr-1" />}
                  {Math.abs(trend).toFixed(1)}%
                </span>
                <span className="text-gray-400 ml-2">vs last period</span>
              </div>
              {/* Sparkline Placeholder - Recharts Tiny Area Chart */}
              <div className="h-12 mt-4 -mx-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trends}>
                    <Area type="monotone" dataKey={kpi.label === 'Total Expenses' ? 'expenses' : 'revenue'} stroke={isPositive ? '#10B981' : '#EF4444'} fill={isPositive ? '#D1FAE5' : '#FEE2E2'} strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Visual Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue vs Expenses Trend */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Revenue vs Expenses & Forecast</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={[...trends, ...forecastData]}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} tickFormatter={(val) => `₹${val/1000}k`} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value) => formatCurrency(value)}
                />
                <Legend />
                <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#3B82F6" fillOpacity={1} fill="url(#colorRev)" />
                <Area type="monotone" dataKey="expenses" name="Expenses" stroke="#EF4444" fillOpacity={1} fill="url(#colorExp)" />
                <Area type="monotone" dataKey="revenue" data={forecastData} name="Forecast" stroke="#8B5CF6" strokeDasharray="5 5" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Breakdown */}
        <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Expense Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenses}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  nameKey="category"
                >
                  {expenses?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip formatter={(value) => formatCurrency(value)} />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-3">
             {expenses?.slice(0, 3).map((exp, idx) => (
               <div key={idx} className="flex justify-between items-center text-sm">
                 <div className="flex items-center">
                   <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                   <span className="text-gray-600 dark:text-gray-300">{exp.category}</span>
                 </div>
                 <span className="font-medium dark:text-white">{formatCurrency(exp.value)}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* 3.5 Financial Health & Growth */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Cash vs Credit */}
        <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white">Revenue Mix</h3>
            <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={[
                                { name: 'Cash', value: summary.cashCollected },
                                { name: 'Credit', value: summary.creditGiven }
                            ]}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={60}
                            dataKey="value"
                        >
                            <Cell fill="#10B981" />
                            <Cell fill="#F59E0B" />
                        </Pie>
                        <RechartsTooltip formatter={(value) => formatCurrency(value)} />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Client Retention */}
        <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white">Client Retention</h3>
            <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={[
                                { name: 'New', value: newVsReturning?.new_clients || 0 },
                                { name: 'Returning', value: newVsReturning?.returning_clients || 0 }
                            ]}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={60}
                            dataKey="value"
                        >
                            <Cell fill="#3B82F6" />
                            <Cell fill="#8B5CF6" />
                        </Pie>
                        <RechartsTooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Aging Receivables */}
        <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 lg:col-span-2">
            <h3 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white">Aging Receivables Snapshot</h3>
            <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={agingReceivables} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                        <XAxis type="number" hide />
                        <YAxis dataKey="age_group" type="category" width={80} tick={{fontSize: 10}} />
                        <RechartsTooltip formatter={(value) => formatCurrency(value)} />
                        <Bar dataKey="amount" fill="#F87171" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>

      {/* 4. Insights Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Top Clients */}
         <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top 10 Clients (Revenue)</h3>
              <button className="text-sm text-blue-600 hover:underline">View All</button>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={topClients} margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12}} />
                  <RechartsTooltip formatter={(value) => formatCurrency(value)} cursor={{fill: 'transparent'}} />
                  <Bar dataKey="revenue" name="Revenue" fill="#3B82F6" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
         </div>

         {/* Receipt Analytics & Value Dist */}
         <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Receipt Analytics</h3>
            </div>
            <div className="h-40 mb-6">
                <p className="text-xs font-medium text-gray-500 mb-2">Activity</p>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={receiptStats}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" hide />
                    <YAxis hide />
                    <RechartsTooltip />
                    <Bar dataKey="generated" name="Generated" fill="#10B981" stackId="a" />
                    <Bar dataKey="deleted" name="Deleted" fill="#EF4444" stackId="a" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="h-40">
                <p className="text-xs font-medium text-gray-500 mb-2">Value Distribution</p>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={receiptValueDist}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="range_label" tick={{fontSize: 10}} />
                    <YAxis hide />
                    <RechartsTooltip />
                    <Bar dataKey="count" name="Count" fill="#8B5CF6" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
         </div>
      </div>

      {/* 5. Alerts & Insights Panel */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800">
        <h3 className="text-lg font-semibold mb-4 text-indigo-900 dark:text-indigo-100 flex items-center">
          <FiAlertTriangle className="mr-2" /> 
          AI Insights & Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-[#1E1E1E] p-4 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-500 mb-1">Profit Margin</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {summary.revenue ? ((summary.netProfit / summary.revenue) * 100).toFixed(1) : 0}%
            </p>
            <p className="text-xs text-green-600 mt-1">Healthy margin maintained</p>
          </div>
          <div className="bg-white dark:bg-[#1E1E1E] p-4 rounded-lg shadow-sm">
             <p className="text-sm font-medium text-gray-500 mb-1">Expense Alert</p>
             <p className="text-sm text-gray-900 dark:text-white truncate">
               {expenses && expenses[0] ? `Highest: ${expenses[0].category}` : 'No expenses'}
             </p>
             <p className="text-xs text-blue-600 mt-1 cursor-pointer hover:underline">View breakdown</p>
          </div>
          <div className="bg-white dark:bg-[#1E1E1E] p-4 rounded-lg shadow-sm">
             <p className="text-sm font-medium text-gray-500 mb-1">Operational Efficiency</p>
             <p className="text-sm text-gray-900 dark:text-white">
               {summary.receiptCount} receipts
             </p>
             <p className="text-xs text-gray-500 mt-1">Avg: {summary.receiptCount ? formatCurrency(summary.revenue / summary.receiptCount) : 0}</p>
          </div>
          <div className="bg-white dark:bg-[#1E1E1E] p-4 rounded-lg shadow-sm">
             <p className="text-sm font-medium text-gray-500 mb-1">Forecast (Next 7d)</p>
             <p className="text-sm text-gray-900 dark:text-white">
                ~{formatCurrency(forecastData.reduce((a,b) => a + b.revenue, 0))}
             </p>
             <p className="text-xs text-purple-600 mt-1">Estimated revenue</p>
          </div>
        </div>
      </div>

      {/* 6. Transaction Ledger */}
      <div id="ledger-section" className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Transaction Ledger</h3>
          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search transactions..." 
              value={ledgerFilter}
              onChange={(e) => setLedgerFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border-none rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:text-white"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 dark:bg-gray-800/50">
              <tr>
                {['Date', 'Category', 'Party', 'Type', 'Status', 'Amount'].map((head) => (
                  <th key={head} className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setLedgerSort({ key: head.toLowerCase(), direction: ledgerSort.direction === 'asc' ? 'desc' : 'asc' })}>
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filteredLedger.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {new Date(item.date).toLocaleDateString()}
                    <span className="block text-xs text-gray-400">{new Date(item.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">{item.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{item.party || '-'}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.type === 'Income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase ${
                      item.status === 'paid' ? 'bg-blue-100 text-blue-800' : 
                      item.status === 'credit' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {item.status || '-'}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-sm font-bold ${
                    item.type === 'Income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.type === 'Income' ? '+' : '-'}{formatCurrency(item.amount)}
                  </td>
                </tr>
              ))}
              {filteredLedger.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                    No transactions found matching your filter
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ProfitLossReport;
