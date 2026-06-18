import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiSearch, FiSliders, FiHeart } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const Hero = ({ onSearch, onStartPlanning }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const locations = ['Bhubaneswar', 'Udaipur', 'Jaipur', 'Mumbai', 'Delhi NCR', 'Bangalore', 'Goa'];
  const categories = [
    'Event Venues',
    'Photographers',
    'Makeup Artists',
    'Event Planners',
    'Decorators',
    'Entertainment & DJs',
    'Caterers',
    'Formal & Party Wear',
    'Invitation Designers'
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(selectedCategory, selectedLocation);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Elegant Gradient Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80')` 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-black/25 z-10" />

      {/* Floating Decorative Elements using Framer Motion */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 z-20 pointer-events-none hidden md:block"
      >
        <div className="glass-card-dark bg-white/10 backdrop-blur-md border-white/20 p-4 rounded-2xl flex items-center space-x-3 text-white shadow-xl">
          <HiSparkles className="text-event-pink w-6 h-6 animate-pulse" />
          <div>
            <p className="text-[10px] text-stone-200 uppercase tracking-widest">Premium Planners</p>
            <p className="text-sm font-semibold">100% Curated Luxury</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 right-16 z-20 pointer-events-none hidden lg:block"
      >
        <div className="glass-card bg-[#FAF9F6]/85 p-4 rounded-2xl flex items-center space-x-3 text-stone-800 shadow-2xl border-event-pink/30">
          <div className="w-10 h-10 rounded-full bg-event-pink/20 flex items-center justify-center">
            <FiHeart className="text-event-pink w-5.5 h-5.5" />
          </div>
          <div>
            <p className="text-[10px] text-stone-500 uppercase tracking-wider">Dream Venues</p>
            <p className="text-sm font-semibold font-serif">Royal Udaipur Castles</p>
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-event-orange tracking-[0.2em] text-xs lg:text-sm font-bold uppercase mb-4 block animate-pulse">
            Introducing EventVerse Marketplace
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Plan Your Dream Event <br />
            <span className="text-stroke font-normal italic bg-gradient-to-r from-event-pink via-rose-gold to-event-orange bg-clip-text text-transparent">
              Effortlessly
            </span>
          </h1>
          <p className="text-white/80 text-base md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10">
            Discover and book the country's finest event venues, gourmet caterers, expert designers, couture stylists, and award-winning planners.
          </p>
        </motion.div>

        {/* Floating Search Bar container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl bg-white/95 rounded-3xl md:rounded-full p-3 md:p-4 shadow-2xl border border-event-pink/20 flex flex-col md:flex-row gap-3 md:items-center text-left"
        >
          {/* Location Input */}
          <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-stone-200">
            <FiMapPin className="text-event-pink w-5.5 h-5.5 mr-3 flex-shrink-0" />
            <div className="w-full">
              <label className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider">Where</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-transparent text-stone-800 text-sm font-semibold outline-none cursor-pointer"
              >
                <option value="">Select location...</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Vendor Category Input */}
          <div className="flex-1 flex items-center px-4 py-2">
            <FiSliders className="text-event-pink w-5.5 h-5.5 mr-3 flex-shrink-0" />
            <div className="w-full">
              <label className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider">Looking For</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent text-stone-800 text-sm font-semibold outline-none cursor-pointer"
              >
                <option value="">Select category...</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Action Button */}
          <button
            onClick={handleSearchSubmit}
            className="w-full md:w-auto bg-gradient-to-r from-event-pink to-event-orange hover:brightness-110 text-white font-semibold py-4 px-8 rounded-2xl md:rounded-full transition-all duration-300 shadow-md flex items-center justify-center space-x-2 cursor-pointer"
          >
            <FiSearch className="w-5 h-5" />
            <span>Search</span>
          </button>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <a
            href="#vendors-section"
            className="w-full sm:w-auto px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-event-pink transition-all duration-300 cursor-pointer text-sm"
          >
            Find Vendors
          </a>
          <button
            onClick={onStartPlanning}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-event-pink to-event-orange hover:brightness-110 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-sm"
          >
            Start Planning
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
