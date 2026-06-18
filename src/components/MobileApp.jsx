import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiStar, FiMapPin, FiCheckCircle, FiSearch, FiSliders } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const MobileApp = () => {
  return (
    <section id="app-section" className="py-24 bg-gradient-to-br from-[#7B2D26] to-[#E8B4B8] text-white relative overflow-hidden">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column: app details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="text-champagne font-bold uppercase tracking-[0.2em] text-xs lg:text-sm block mb-4">
            ShaadiVerse Mobile App
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Personal Wedding <br />
            Planner in Your Pocket
          </h2>
          <p className="text-white/80 font-light text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Download our top-rated app to chat instantly with verified vendors, get real-time price updates, manage your checklist, and collaborate on mood boards with your partner.
          </p>

          {/* Core App Features */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full bg-champagne/20 flex items-center justify-center text-champagne">
                <FiCheckCircle className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-stone-100">Live chat & instant quote bargaining</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full bg-champagne/20 flex items-center justify-center text-champagne">
                <FiCheckCircle className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-stone-100">AI Wedding Planner recommendation alerts</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full bg-champagne/20 flex items-center justify-center text-champagne">
                <FiCheckCircle className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-stone-100">Offline checklist, vendor notes & shared boards</span>
            </div>
          </div>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="flex items-center space-x-3 bg-stone-900 hover:bg-black text-white px-6 py-3 rounded-2xl transition-all duration-300 border border-white/10 shadow-lg cursor-pointer"
            >
              <FaApple className="w-6 h-6 text-white" />
              <div className="text-left">
                <p className="text-[10px] text-stone-400 uppercase font-semibold">Download on the</p>
                <p className="text-xs font-bold font-display">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 bg-stone-900 hover:bg-black text-white px-6 py-3 rounded-2xl transition-all duration-300 border border-white/10 shadow-lg cursor-pointer"
            >
              <FaGooglePlay className="w-5 h-5 text-white" />
              <div className="text-left">
                <p className="text-[10px] text-stone-400 uppercase font-semibold">Get it on</p>
                <p className="text-xs font-bold font-display">Google Play</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right column: iPhone 15 CSS frame mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          {/* Custom CSS iPhone Frame */}
          <div className="relative w-[300px] h-[600px] rounded-[50px] border-[12px] border-stone-900 bg-stone-900 shadow-2xl overflow-hidden ring-4 ring-rose-gold/30">
            {/* Dynamic Island */}
            <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-stone-900/80 rounded-full border border-stone-800 ml-auto mr-3" />
            </div>

            {/* Screen Content Wrapper */}
            <div className="absolute inset-0 bg-[#FAF9F6] p-4 text-stone-800 font-sans flex flex-col justify-between pt-12">
              {/* App Header */}
              <div className="flex items-center justify-between border-b border-rose-gold/15 pb-2 mb-3">
                <span className="font-serif text-base font-bold text-burgundy">
                  Shaadi<span className="text-rose-gold">Verse</span>
                </span>
                <span className="text-[9px] font-bold bg-[#7B2D26]/10 text-burgundy px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Udaipur
                </span>
              </div>

              {/* Simulated Search bar */}
              <div className="bg-white rounded-xl p-2.5 border border-stone-200/80 flex items-center justify-between mb-3 shadow-xs">
                <div className="flex items-center space-x-1.5">
                  <FiSearch className="text-rose-gold w-3.5 h-3.5" />
                  <span className="text-[10px] text-stone-400 font-semibold">Search photographers...</span>
                </div>
                <FiSliders className="text-stone-500 w-3.5 h-3.5" />
              </div>

              {/* Vendor Image card inside app */}
              <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-xs flex-grow flex flex-col mb-3">
                <div 
                  className="h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=400&q=80')` }}
                />
                <div className="p-3 text-left">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[8px] bg-amber-500/10 text-amber-600 font-bold px-1.5 py-0.5 rounded">VENUES</span>
                    <div className="flex items-center space-x-0.5 text-gold-accent">
                      <FiStar className="w-2.5 h-2.5 fill-current" />
                      <span className="text-[9px] font-bold text-stone-800">4.9</span>
                    </div>
                  </div>
                  <h4 className="font-serif text-[11px] font-bold text-stone-900 leading-snug">
                    The Grand Ritz Pavilion
                  </h4>
                  <p className="text-[8px] text-stone-400 font-semibold mt-0.5 flex items-center">
                    <FiMapPin className="mr-0.5 text-rose-gold" /> Udaipur, India
                  </p>
                  
                  <div className="border-t border-stone-100 mt-2 pt-2 flex items-center justify-between">
                    <div>
                      <p className="text-[7px] text-stone-400 uppercase font-semibold">Starting at</p>
                      <p className="text-burgundy font-bold text-[10px]">₹2,50,000 / day</p>
                    </div>
                    <button className="bg-burgundy text-white text-[8px] font-bold px-2.5 py-1 rounded-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Notification card inside app */}
              <div className="bg-[#7B2D26]/5 border border-[#7B2D26]/10 rounded-xl p-2.5 flex items-center space-x-2.5">
                <HiSparkles className="text-gold-accent w-4 h-4 animate-bounce flex-shrink-0" />
                <div className="text-left leading-normal">
                  <p className="text-[9px] font-bold text-[#7B2D26]">AI Assistant Alert</p>
                  <p className="text-[7px] text-stone-500">Your catering checklist item has been updated.</p>
                </div>
              </div>

              {/* App Navigation bar */}
              <div className="border-t border-stone-200 pt-2.5 mt-3 flex justify-around text-stone-400">
                <span className="text-burgundy text-[8px] font-bold flex flex-col items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy mb-0.5" />
                  Explore
                </span>
                <span className="text-[8px] font-medium flex flex-col items-center">Wishlist</span>
                <span className="text-[8px] font-medium flex flex-col items-center">Chat</span>
                <span className="text-[8px] font-medium flex flex-col items-center">Planner</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileApp;
