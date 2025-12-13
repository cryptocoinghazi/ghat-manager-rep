import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiUser, FiLock, FiLogIn, FiX } from 'react-icons/fi';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 text-gray-800">
      <div className="bg-white/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-extrabold text-blue-700">Ghat Manager Cloud</h1>
          <button onClick={() => setShowLogin(true)} className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold">
            <FiLogIn /> Login to dashboard
          </button>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700">Ghat Manager Cloud</h1>
          <h2 className="text-2xl mt-4 font-semibold">Smart Cloud Solution for Sand Mining Businesses</h2>
          <p className="mt-4 text-gray-600">Transform your sand mining operations with modern cloud technology. Work faster, safer, and smarter.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#pricing" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">Start 14-Day Free Trial</a>
            <a href="mailto:sayyedghazi@gmail.com" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">Contact Sales</a>
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit card required</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <img src="https://via.placeholder.com/600x350?text=Dashboard+Preview" alt="Dashboard Preview" className="rounded-lg" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-10">Why Choose Ghat Manager?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow transition">
            <h4 className="text-xl font-bold mt-2">Access Anywhere</h4>
            <p className="text-gray-600 mt-2">Work from ghat, office, or home with real-time cloud access.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow transition">
            <h4 className="text-xl font-bold mt-2">Save & Earn More</h4>
            <p className="text-gray-600 mt-2">Reduce paper cost, prevent errors, improve cash flow.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow transition">
            <h4 className="text-xl font-bold mt-2">Bank-Level Security</h4>
            <p className="text-gray-600 mt-2">Encrypted data, daily backups, 99.9% uptime.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Powerful Features</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">✔ Quick Receipt with Thermal & A4 Print</div>
            <div className="p-4 border rounded-lg">✔ Truck Owner & Partner Rate Management</div>
            <div className="p-4 border rounded-lg">✔ Real-time Dashboard & Daily Register</div>
            <div className="p-4 border rounded-lg">✔ Deposit Balance Deduction & History</div>
            <div className="p-4 border rounded-lg">✔ Client & Credit Reports with Filters</div>
            <div className="p-4 border rounded-lg">✔ MySQL Storage with Auto Backups</div>
            <div className="p-4 border rounded-lg">✔ Role-Based Access (Admin/User)</div>
            <div className="p-4 border rounded-lg">✔ Settings: Rates, Receipt Prefix, Printing</div>
            <div className="p-4 border rounded-lg">✔ Secure JWT Login & Password Reset</div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl font-bold mb-10">Trusted by Mining Businesses</h3>
        <div className="bg-white p-8 rounded-xl shadow">
          <p className="text-xl italic">{testimonials[testimonialIndex].text}</p>
          <p className="mt-4 font-bold text-blue-600">{testimonials[testimonialIndex].author}</p>
        </div>
      </section>

      <section id="pricing" className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Simple Pricing</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <h4 className="text-xl font-bold">Basic</h4>
              <p className="text-3xl font-extrabold mt-4">₹999</p>
              <p className="text-gray-500">per month</p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>✔ 500 Receipts</li>
                <li>✔ 5 Users</li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg">Start Free Trial</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-600 text-center md:scale-105">
              <h4 className="text-xl font-bold">Professional</h4>
              <p className="text-3xl font-extrabold mt-4">₹1,999</p>
              <p className="text-gray-500">Most Popular</p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>✔ Unlimited Receipts</li>
                <li>✔ 10 Users</li>
              </ul>
              <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg">Start Free Trial</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <h4 className="text-xl font-bold">Enterprise</h4>
              <p className="text-3xl font-extrabold mt-4">₹3,999</p>
              <p className="text-gray-500">Multiple Locations</p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>✔ Unlimited Everything</li>
                <li>✔ Priority Support</li>
              </ul>
              <a href="tel:9503698738" className="mt-6 block w-full bg-blue-600 text-white py-2 rounded-lg text-center">Call 9503698738</a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-semibold cursor-pointer">Is my data safe in cloud?</summary>
            <p className="mt-2 text-gray-600">Yes! We use bank-level encryption with automatic daily backups.</p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-semibold cursor-pointer">What if internet goes down?</summary>
            <p className="mt-2 text-gray-600">The system works offline for 24 hours and syncs automatically.</p>
          </details>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 text-center">
        <h3 className="text-3xl font-bold">Ready to Modernize Your Ghat?</h3>
        <p className="mt-4">Start your 14-day free trial today.</p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">Start Free Trial</button>
          <a href="mailto:sayyedghazi@gmail.com" className="border border-white px-6 py-3 rounded-lg">Contact Sales</a>
        </div>
        <p className="mt-4 text-sm opacity-80">📞 <a href="tel:9503698738" className="underline">9503698738</a> | ✉️ <a href="mailto:sayyedghazi@gmail.com" className="underline">sayyedghazi@gmail.com</a></p>
      </section>

      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            <button onClick={() => setShowLogin(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" aria-label="Close">
              <FiX className="w-6 h-6" />
            </button>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl font-bold">GM</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Sign in to Ghat Manager</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder="Enter username" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder="Enter password" />
                </div>
              </div>
              <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {loading ? (<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />) : (<><FiLogIn /> Sign In</>)}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
