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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#030014] text-gray-900 dark:text-white overflow-x-hidden font-sans selection:bg-amber-500/60 selection:text-black transition-colors duration-500">
      {/* Enhanced Background Canvas */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Cinematic Background Image - Fixed & Parallax Illusion */}
        <div className="absolute inset-0 hidden dark:block">
          <img 
            src="/background.png" 
            alt="Cosmic Background" 
            className="w-full h-full object-cover opacity-80 scale-105"
          />
          {/* Deep Space Overlay - Adjusted for Vibrancy */}
          <div className="absolute inset-0 bg-[#030014]/40 mix-blend-multiply" />
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/50 via-transparent to-[#030014]" />
        </div>

        {/* Animated Gradient Orbs - Refined for Image Blend */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-[120px] animate-pulse-slow mix-blend-screen" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-amber-600/10 via-red-500/5 to-transparent rounded-full blur-[120px] animate-pulse-slow delay-1000 mix-blend-screen" />

        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.95)_80%)] bg-gradient-to-b from-transparent via-black/40 to-black/80" />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#030014]/60 backdrop-blur-2xl border-b border-gray-200/50 dark:border-amber-500/[0.08] transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative w-10 h-10 rounded-lg bg-[#030014] flex items-center justify-center border border-amber-500/30">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 text-xl drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">G</span>
                </div>
              </motion.div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-amber-50 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                Ghat Manager
              </span>
            </div>
            <div className="flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-full text-gray-600 dark:text-amber-200/70 hover:bg-amber-500/10 hover:text-amber-500 dark:hover:text-amber-400 transition-all duration-300 border border-transparent hover:border-amber-500/20"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" /> : <Moon className="w-5 h-5" />}
              </motion.button>
             
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/login')} 
                className="px-7 py-3 rounded-full text-sm font-bold transition-all duration-300 text-white shadow-[0_0_30px_rgba(255,140,0,0.3)] bg-gradient-to-r from-[#FFB600] via-[#FF8A00] to-[#FF6B00] hover:shadow-[0_0_50px_rgba(255,140,0,0.6)] hover:brightness-110 border border-amber-400/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
                <span className="relative flex items-center gap-2 drop-shadow-md">
                  Login
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 lg:pt-56 lg:pb-40 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex-1 text-center lg:text-left z-10 relative"
            >
              <div className="hero-vignette absolute -inset-20 -z-10 hidden dark:block opacity-80" />
              
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-10 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(245,158,11,1)]" />
                Live Production Ready
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-10 leading-[0.95] text-gray-100 dark:text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
              >
                Stop Losing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 drop-shadow-lg">Revenue at the Gate.</span> <br />
                <span className="molten-text leading-[1.0] pb-2 inline-block">
                  Digitize Your Sand Mining
                </span> <span className="text-amber-500 drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]">in Seconds.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300/90 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-lg font-light tracking-wide"
              >
                The all-in-one billing & register system built specifically for Indian Quarry operations. 
                Track every brass, every truck, and every rupee.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start items-center"
              >
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/login')}
                    className="group relative px-10 py-5 rounded-full font-bold text-xl text-white transition-all duration-500 hover:shadow-[0_0_80px_rgba(255,140,0,0.6)] z-20"
                  >
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FF4500] blur-xl opacity-70 animate-pulse-slow" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FF4500] shadow-[inset_0_2px_20px_rgba(255,255,255,0.4)]" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                    <div className="absolute inset-0 overflow-hidden rounded-full">
                         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
                    </div>
                    <span className="relative flex items-center gap-3 drop-shadow-lg">
                      Get Started for Free 🔥
                      <ArrowRight className="ml-1 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </motion.button>
                  <span className="text-sm text-gray-500 dark:text-gray-400/60 font-medium tracking-wide">No credit card required • Instant setup</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Laptop Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 relative w-full max-w-2xl lg:max-w-none"
            >
              <div className="absolute -inset-10 rounded-[3rem] molten-rim-bloom" />

              <div className="relative rounded-[2rem] bg-gradient-to-b from-gray-900/80 to-black border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md group molten-outline">
                {/* Mockup Header */}
                <div className="h-10 bg-gradient-to-r from-gray-900 to-black border-b border-white/10 flex items-center px-5 gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
                    <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-block px-4 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 font-mono tracking-wide">ghatmanager.co.in</div>
                  </div>
                </div>

                {/* Video Container */}
                <div className="relative aspect-[16/10] bg-black">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-rose-500/5 z-10 pointer-events-none mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
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
                    className="absolute bottom-5 right-5 p-3 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full text-white/90 hover:text-white transition-all duration-300 border border-white/10 z-20 shadow-lg group/btn"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5 group-hover/btn:scale-110 transition-transform" /> : <Volume2 className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />}
                  </button>
                </div>

                {/* Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-20 mix-blend-overlay" />
              </div>
              
              {/* Floating Metric Card */}
              <motion.div 
                initial={{ y: 30, opacity: 0, rotate: -5 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: 1.2, duration: 0.7, ease: "backOut" }}
                className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-2xl border border-amber-500/20 shadow-2xl z-30 hidden md:block glass-card neon-edge"
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    <TrendingUp className="w-6 h-6 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Daily Revenue</div>
                    <div className="text-2xl font-bold text-white drop-shadow-md">₹ 45,200</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <div className="w-full bg-transparent relative z-10 mb-32">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
            {[
              { icon: CheckCircle, label: "Receipts Generated", value: "10,000+", color: "amber" },
              { icon: Shield, label: "Ghats Managed", value: "50+", color: "blue" },
              { icon: Zap, label: "Calculation Errors", value: "Zero", color: "green" },
              { icon: Printer, label: "GST Compliant", value: "100%", color: "purple" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                className="py-10 px-6 flex flex-col items-center justify-center text-center group rounded-3xl bg-[#0a0a0a]/40 hover:bg-[#0a0a0a]/60 transition-all duration-500 cursor-default backdrop-blur-2xl glass-card neon-edge border border-white/[0.05]"
              >
                <div className={`p-4 rounded-2xl bg-${stat.color}-500/10 border border-${stat.color}-500/20 mb-5 group-hover:scale-110 group-hover:border-${stat.color}-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-400 drop-shadow-[0_0_15px_rgba(var(--color-${stat.color}-500),0.8)]`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400/80 font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white drop-shadow-2xl">
              Ditch Paper Slips. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">Rake in More Cash</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400/80 max-w-2xl mx-auto font-light">
              Paper slips and registers are costing you more than you think.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <AlertTriangle className="w-10 h-10 text-red-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]" />,
                title: "Revenue Leakage",
                desc: "Cash theft and unrecorded trucks are common with manual receipts.",
                border: "hover:border-red-500/40",
                glow: "hover:shadow-[0_0_50px_rgba(239,68,68,0.15)]",
                bg: "bg-gradient-to-br from-red-500/[0.03] to-transparent"
              },
              {
                icon: <XCircle className="w-10 h-10 text-orange-400 drop-shadow-[0_0_15px_rgba(249,115,22,0.7)]" />,
                title: "Calculation Errors",
                desc: "Manual Brass/Bharai calculations lead to losses on every trip.",
                border: "hover:border-orange-500/40",
                glow: "hover:shadow-[0_0_50px_rgba(249,115,22,0.15)]",
                bg: "bg-gradient-to-br from-orange-500/[0.03] to-transparent"
              },
              {
                icon: <BarChart3 className="w-10 h-10 text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.7)]" />,
                title: "Zero Visibility",
                desc: "No real-time data on daily sales or partner royalties.",
                border: "hover:border-amber-500/40",
                glow: "hover:shadow-[0_0_50px_rgba(245,158,11,0.15)]",
                bg: "bg-gradient-to-br from-amber-500/[0.03] to-transparent"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.7 }}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
                className={`p-10 rounded-3xl ${card.bg} border border-white/[0.05] backdrop-blur-xl transition-all duration-500 group shadow-2xl glass-card neon-edge ${card.border} dark:${card.glow}`}
              >
                <div className="mb-8 p-5 bg-white/[0.03] w-fit rounded-2xl border border-white/10 group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-amber-100 transition-colors">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400/80 leading-relaxed text-base">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-40 bg-gray-50 dark:bg-transparent z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-28"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white drop-shadow-2xl">
              The Smarter Way to <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">Manage Your Ghat</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Receipt Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03, rotateY: 2 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative p-2 rounded-3xl bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent glass-card neon-edge"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/5 blur-3xl opacity-30" />
              <div className="relative p-10 rounded-[2rem] bg-gradient-to-b from-[#0a0a0a] to-black border border-white/10 shadow-2xl overflow-hidden glass-card">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]" />
                
                <div className="flex items-center gap-6 mb-10">
                  <div className="p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-2xl border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                    <Zap className="w-10 h-10 text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.7)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Digital Receipt</h3>
                    <p className="text-sm text-gray-400">Instant Generation • Auto-GST</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex justify-between items-center backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
                    <span className="text-gray-400 text-sm">Receipt No</span>
                    <span className="text-white font-mono font-bold">#9021</span>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex justify-between items-center backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
                    <span className="text-gray-400 text-sm">Vehicle No</span>
                    <span className="text-white font-mono font-bold">MH-12-GH-4455</span>
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-500/20 flex justify-between items-center backdrop-blur-sm hover:border-amber-500/40 transition-colors">
                    <span className="text-amber-200 text-sm font-medium">Total Amount</span>
                    <span className="text-amber-300 font-bold text-2xl drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">₹ 4,500.00</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Features Stack */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ translateX: 15, transition: { duration: 0.3 } }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-[#0a0a0a]/50 border border-white/10 hover:border-blue-500/40 transition-all duration-500 group glass-card neon-edge backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-start gap-8">
                  <div className="p-5 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-500">
                    <CreditCard className="w-10 h-10 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">Udhaar vs. Cash</h3>
                    <p className="text-gray-400/80 leading-relaxed text-lg">Live credit tracking for all your truck owners. Never lose track of pending payments again.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ translateX: 15, transition: { duration: 0.3 } }}
                transition={{ delay: 0.4, duration: 0.7 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-[#0a0a0a]/50 border border-white/10 hover:border-green-500/40 transition-all duration-500 group glass-card neon-edge backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-start gap-8">
                  <div className="p-5 bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-2xl border border-green-500/20 group-hover:bg-green-500/20 group-hover:border-green-500/40 transition-all duration-500">
                    <TrendingUp className="w-10 h-10 text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.7)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-200 transition-colors">Partner Royalty</h3>
                    <p className="text-gray-400/80 leading-relaxed text-lg">Automated profit sharing logic. Calculate exact partner shares instantly at the end of the day.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-200/50 dark:border-white/[0.08] bg-gray-50 dark:bg-[#030014]/80 text-center text-gray-500 relative z-10 transition-colors duration-500 backdrop-blur-xl">
        <p className="mb-6 text-gray-600 dark:text-gray-500/80 text-lg">© 2025 Ghat Manager. All rights reserved.</p>
        <p className="text-base">
          Email: <a href="mailto:support@ghatmanager.co.in" className="text-amber-500 hover:text-amber-400 transition-colors duration-300 underline decoration-amber-500/30 underline-offset-4 hover:decoration-amber-400/50">support@ghatmanager.co.in</a>
        </p>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-2xl shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] transition-all duration-300 animate-pulse-slow"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-9 h-9 drop-shadow-md" />
      </motion.a>
      
      {/* Enhanced Custom Styles */}
      <style jsx>{`
        /* Hero vignette - Cinematic */
        .hero-vignette {
          background: radial-gradient(circle at 50% 50%, 
            rgba(0,0,0,0) 20%, 
            rgba(0,0,0,0.4) 50%,
            rgba(0,0,0,0.8) 80%);
          mix-blend-mode: multiply;
        }

        /* Molten headline treatment - SUPER HOT */
        .molten-text {
          background-image: linear-gradient(92deg, 
            #FFF7CC 0%, 
            #FFD700 20%,
            #FFB600 40%,
            #FF8A00 60%,
            #FF4500 85%,
            #FFD700 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 10px rgba(255,180,0,0.5));
          text-shadow: 
            0 0 20px rgba(255, 180, 76, 0.6),
            0 0 40px rgba(255, 120, 32, 0.4),
            0 0 80px rgba(255, 60, 0, 0.2);
          background-size: 200% auto;
          animation: moltenShimmer 3s linear infinite;
        }

        @keyframes moltenShimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        /* Shimmer animation */
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(100%) skewX(-15deg); }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }

        /* Slow pulse */
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        /* Laptop rim and bloom - Enhanced */
        .molten-outline {
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 0 0 3px rgba(255, 160, 0, 0.1),
            0 0 60px rgba(255, 140, 32, 0.4),
            0 20px 80px rgba(0,0,0,0.9);
        }
        .molten-rim-bloom {
          background: radial-gradient(closest-side, 
            rgba(255,180,60,0.3) 0%,
            rgba(255,100,0,0.2) 40%,
            rgba(0,0,0,0) 100%);
          filter: blur(50px);
          opacity: 0.9;
          animation: pulse-slow 5s infinite;
        }

        /* Enhanced glass cards - Darker, Deeper */
        .glass-card {
          background: rgba(10, 10, 10, 0.6);
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,0.05),
            0 20px 50px rgba(0,0,0,0.8),
            0 0 30px rgba(255,160,64,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Neon edge effect - Sharper */
        .neon-edge {
          position: relative;
        }
        .neon-edge::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          padding: 1.5px;
          background: linear-gradient(180deg, 
            rgba(255,255,255,0.2) 0%,
            rgba(255,180,0,0.1) 30%,
            transparent 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          box-shadow: 0 0 15px rgba(255, 170, 64, 0.1);
        }
      `}</style>
    </div>
  );
};

export default LandingPage;