import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  TrendingUp, 
  Printer, 
  Smartphone, 
  CreditCard,
  MessageCircle,
  Play,
  Shield,
  Zap,
  BarChart3,
  Volume2,
  VolumeX,
  Sun,
  Moon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1A1A1A] text-gray-900 dark:text-white overflow-x-hidden font-sans selection:bg-primary-gold selection:text-black transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#1A1A1A]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary-gold to-yellow-600 dark:to-yellow-200 bg-clip-text text-transparent">
                Ghat Manager
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="px-6 py-2 rounded-full border border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-black transition-all duration-300 font-medium"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Mesh Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-gold/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white"
            >
              Stop Losing Revenue at the Gate. <br />
              <span className="bg-gradient-to-r from-primary-gold to-yellow-600 dark:to-yellow-200 bg-clip-text text-transparent">
                Digitize Your Sand Mining
              </span> in Seconds.
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              The all-in-one billing & register system built specifically for Indian Quarry operations. 
              Track every brass, every truck, and every rupee.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <button 
                onClick={() => navigate('/login')}
                className="group relative px-8 py-4 bg-primary-gold text-black rounded-full font-bold text-lg shadow-[0_0_20px_rgba(194,178,128,0.3)] hover:shadow-[0_0_30px_rgba(194,178,128,0.5)] transition-all duration-300 animate-pulse-slow"
              >
                Get Started for Free
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Video Mockup */}
            <motion.div 
              variants={fadeInUp}
              className="relative mx-auto max-w-5xl"
            >
              <div className="relative rounded-xl bg-white dark:bg-[#2A2A2A] p-2 shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700 backdrop-blur-sm transition-colors duration-300">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary-gold to-blue-600 opacity-20 blur-lg" />
                <div className="relative rounded-lg overflow-hidden bg-black aspect-video border border-gray-200 dark:border-gray-700">
                  {/* Browser Toolbar Mockup */}
                  <div className="h-8 bg-gray-100 dark:bg-[#1A1A1A] flex items-center px-4 space-x-2 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  {/* Video Player */}
                  <div className="w-full h-full flex items-center justify-center bg-black relative group">
                    <video 
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src="/video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Mute/Unmute Control */}
                    <button
                      onClick={toggleMute}
                      className="absolute bottom-4 right-4 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full text-white transition-all duration-300 z-20 border border-white/10 hover:scale-110"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Ticker */}
      <div className="w-full bg-white dark:bg-[#1A1A1A] border-y border-gray-200 dark:border-gray-700 py-4 overflow-hidden transition-colors duration-300">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center space-x-12 px-6">
              <span className="text-gray-600 dark:text-gray-400 font-mono flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary-gold" /> 10,000+ Receipts Generated</span>
              <span className="text-gray-600 dark:text-gray-400 font-mono flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary-gold" /> 50+ Ghats Managed</span>
              <span className="text-gray-600 dark:text-gray-400 font-mono flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary-gold" /> Zero Calculation Errors</span>
              <span className="text-gray-600 dark:text-gray-400 font-mono flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary-gold" /> 100% GST Compliant</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pain Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Why Manual Billing Fails</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Paper slips and registers are costing you more than you think.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <AlertTriangle className="w-10 h-10 text-red-500" />,
                title: "Revenue Leakage",
                desc: "Cash theft and unrecorded trucks are common with manual receipts."
              },
              {
                icon: <XCircle className="w-10 h-10 text-orange-500" />,
                title: "Calculation Errors",
                desc: "Manual Brass/Bharai calculations lead to losses on every trip."
              },
              {
                icon: <BarChart3 className="w-10 h-10 text-yellow-500" />,
                title: "Zero Visibility",
                desc: "No real-time data on daily sales or partner royalties."
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 backdrop-blur-md hover:bg-gray-50 dark:hover:bg-[#262626] transition-colors shadow-lg dark:shadow-none"
              >
                <div className="mb-6 p-3 bg-gray-100 dark:bg-[#262626] w-fit rounded-xl">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 bg-gray-100 dark:bg-black/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Built for Speed & Control</h2>
          </div>

          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Large Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 md:row-span-2 p-8 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-700 relative overflow-hidden group shadow-xl dark:shadow-none transition-all"
            >
              <div className="absolute inset-0 bg-primary-gold/5 group-hover:bg-primary-gold/10 transition-colors" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="p-3 bg-primary-gold/20 w-fit rounded-xl mb-6">
                  <Zap className="w-8 h-8 text-primary-gold" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Smart Receipt Generation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md">
                  Auto-calculate Brass, Bharai, and total amounts instantly. 
                  Just enter measurements or vehicle number, and let the system handle the math.
                </p>
                <div className="mt-auto rounded-xl bg-gray-50 dark:bg-[#1A1A1A] p-4 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>Receipt #9021</span>
                    <span>Just Now</span>
                  </div>
                  <div className="flex justify-between items-center font-mono text-xl text-gray-900 dark:text-white">
                    <span>MH-12-GH-4455</span>
                    <span className="text-green-500 dark:text-green-400">₹ 4,500.00</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Medium Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 relative overflow-hidden shadow-xl dark:shadow-none transition-all"
            >
              <div className="relative z-10">
                <div className="p-3 bg-blue-500/20 w-fit rounded-xl mb-4">
                  <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Udhaar vs. Cash</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Live credit tracking for all your truck owners.</p>
              </div>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 relative overflow-hidden shadow-xl dark:shadow-none transition-all"
            >
              <div className="relative z-10">
                <div className="p-3 bg-green-500/20 w-fit rounded-xl mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Partner Royalty</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Automated profit sharing logic.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-center text-gray-500 transition-colors duration-300">
        <p>© 2025 Ghat Manager. All rights reserved.</p>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform animate-pulse"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
      
      {/* Custom Styles for Marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
