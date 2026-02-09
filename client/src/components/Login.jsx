import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiUser, FiLock, FiLogIn, FiCheckCircle } from 'react-icons/fi';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(true); // Default to true for dedicated page
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Theme Toggle Logic
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const testimonials = [
    {
      text: 'Reduced daily closing time from 2 hours to 15 minutes.',
      author: '– Rajesh Mining Co., Yavatmal'
    },
    {
      text: 'Recovered ₹15,000 in first month from better tracking.',
      author: '– Ghat Traders, Nagpur'
    },
    {
      text: 'Complete peace of mind with daily backups.',
      author: '– Sai Suppliers'
    }
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error('Please enter both username and password');
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        toast.success(`Welcome, ${response.data.user.username}!`);
        onLogin(response.data.user);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.response?.data?.error || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-[#1A1A1A] font-sans overflow-hidden transition-colors duration-300">
      {/* Theme Toggle Button (Absolute Position) */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Left Side - Visual & Testimonials (Desktop only) */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 bg-white dark:bg-black/40 border-r border-gray-200 dark:border-gray-700 transition-colors duration-300">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-primary-gold/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-900/10 rounded-full blur-[120px]" />
        </div>

        {/* Logo/Brand */}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-gold to-yellow-600 dark:to-yellow-200 bg-clip-text text-transparent">
            Ghat Manager
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Secure Sand Mining Operations</p>
        </div>

        {/* Feature List */}
        <div className="space-y-6">
           {[
             'Real-time Revenue Tracking',
             'Automated Quantity Calculations', 
             'Secure Cloud Backups',
             'Role-Based Access Control'
           ].map((feature, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: idx * 0.1 + 0.3 }}
               className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
             >
               <div className="p-2 rounded-full bg-primary-gold/10 text-primary-gold">
                 <FiCheckCircle size={18} />
               </div>
               <span>{feature}</span>
             </motion.div>
           ))}
        </div>

        {/* Testimonials */}
        <div className="relative h-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <p className="text-xl text-gray-600 dark:text-gray-300 font-light italic leading-relaxed">
                "{testimonials[testimonialIndex].text}"
              </p>
              <p className="mt-4 font-bold text-primary-gold">
                {testimonials[testimonialIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-500 dark:text-gray-600">
          © 2025 Ghat Manager Systems
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
         {/* Mobile Background Elements */}
         <div className="absolute inset-0 overflow-hidden -z-10 lg:hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-gray-50 to-white dark:from-black/80 dark:to-[#1A1A1A] transition-colors duration-300" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white dark:bg-[#1A1A1A] backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-8 sm:p-10 rounded-3xl shadow-2xl transition-colors duration-300"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-gold to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-gold/20">
              <span className="text-black text-2xl font-bold">GM</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h2>
            <p className="text-gray-500 dark:text-gray-400">Sign in to your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 dark:text-gray-300 ml-1">Username</label>
              <div className="relative group">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-gold transition-colors" />
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-[#262626] border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-gold/50 focus:border-primary-gold text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all duration-300" 
                  placeholder="Enter username" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 dark:text-gray-300 ml-1">Password</label>
              <div className="relative group">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-gold transition-colors" />
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-[#262626] border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-gold/50 focus:border-primary-gold text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all duration-300" 
                  placeholder="Enter password" 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading} 
              className="w-full bg-gradient-to-r from-primary-gold to-yellow-500 text-black py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(194,178,128,0.4)] hover:scale-[1.02] focus:ring-4 focus:ring-primary-gold/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 mt-4"
            >
              {loading ? (
                <div className="w-6 h-6 border-3 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  <FiLogIn className="w-5 h-5" /> Sign In
                </>
              )}
            </button>
          </form>

          {/* Mobile Footer Links */}
          <div className="mt-8 text-center lg:hidden">
            <p className="text-xs text-gray-500">© 2025 Ghat Manager Systems</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
