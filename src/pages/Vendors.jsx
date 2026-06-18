import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiHeart, FiMapPin, FiCheck, FiSliders, FiSearch, FiDollarSign } from 'react-icons/fi';
import { allVendors } from '../components/FeaturedVendors';

const Vendors = ({ selectedCategory, selectedLocation, wishlist, toggleWishlist, onSelectCategory, onSelectLocation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceLimit, setPriceLimit] = useState(500000); // 5 Lakhs default limit
  const [onlyVerified, setOnlyVerified] = useState(false);
  const [sortBy, setSortBy] = useState('popular'); // 'popular', 'rating', 'price-low', 'price-high'
  const [filteredVendors, setFilteredVendors] = useState(allVendors);

  const locations = ['All Locations', 'Bhubaneswar', 'Udaipur', 'Jaipur', 'Mumbai', 'Delhi NCR', 'Bangalore', 'Goa'];
  const categories = [
    'All Categories',
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

  useEffect(() => {
    let result = allVendors;

    // Filter by search bar term
    if (searchTerm) {
      result = result.filter(
        v => v.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
             v.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by global state category (tabs/hero selection)
    if (selectedCategory && selectedCategory !== 'All Categories') {
      result = result.filter(v => v.category === selectedCategory);
    }

    // Filter by global state location
    if (selectedLocation && selectedLocation !== 'All Locations') {
      result = result.filter(v => v.location.toLowerCase() === selectedLocation.toLowerCase());
    }

    // Filter by price limit
    result = result.filter(v => {
      // Extract numeric value from vendor price string e.g. "₹2,50,000 / day" or "₹250 / card"
      const cleanPriceStr = v.price.replace(/[^\d]/g, '');
      const priceVal = parseInt(cleanPriceStr) || 0;
      if (priceVal > 0 && priceVal <= 100) return true; // Keep invitation card items
      return priceVal <= priceLimit;
    });

    // Filter by verified status
    if (onlyVerified) {
      result = result.filter(v => v.verified);
    }

    // Sort operations
    if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => {
        const pA = parseInt(a.price.replace(/[^\d]/g, '')) || 0;
        const pB = parseInt(b.price.replace(/[^\d]/g, '')) || 0;
        return pA - pB;
      });
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => {
        const pA = parseInt(a.price.replace(/[^\d]/g, '')) || 0;
        const pB = parseInt(b.price.replace(/[^\d]/g, '')) || 0;
        return pB - pA;
      });
    }

    setFilteredVendors(result);
  }, [searchTerm, selectedCategory, selectedLocation, priceLimit, onlyVerified, sortBy]);

  const handleClearAll = () => {
    setSearchTerm('');
    onSelectCategory('');
    onSelectLocation('');
    setPriceLimit(500000);
    setOnlyVerified(false);
    setSortBy('popular');
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Page title */}
        <div className="text-left mb-12">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mb-3">
            Vendor Directory
          </h1>
          <p className="text-stone-500 font-light text-sm md:text-base">
            Browse through hundreds of curated, vetted event services. Filter by budget, city, or ratings.
          </p>
        </div>

        {/* Directory Layout: Sidebar + main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* 1. Sidebar Filters */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-6 text-left">
            <div className="flex items-center justify-between pb-4 border-b border-stone-150">
              <span className="font-serif font-bold text-stone-800 text-lg flex items-center">
                <FiSliders className="mr-2 text-event-pink" /> Filters
              </span>
              <button
                onClick={handleClearAll}
                className="text-xs text-event-pink hover:text-event-orange font-bold hover:underline cursor-pointer"
              >
                Clear All
              </button>
            </div>

            {/* Location selector */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-2">City Location</label>
              <select
                value={selectedLocation || 'All Locations'}
                onChange={(e) => onSelectLocation(e.target.value === 'All Locations' ? '' : e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:border-event-pink outline-none cursor-pointer font-medium"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Category selector */}
            <div>
              <label className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-2">Category</label>
              <select
                value={selectedCategory || 'All Categories'}
                onChange={(e) => onSelectCategory(e.target.value === 'All Categories' ? '' : e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:border-event-pink outline-none cursor-pointer font-medium"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Price Limit Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Max Starting Price</label>
                <span className="text-xs text-event-pink font-bold">{formatCurrency(priceLimit)}</span>
              </div>
              <input
                type="range"
                min={50000}
                max={500000}
                step={25000}
                value={priceLimit}
                onChange={(e) => setPriceLimit(Number(e.target.value))}
                className="w-full accent-event-pink cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-stone-400 font-bold mt-1 uppercase">
                <span>₹50K</span>
                <span>₹5 Lakhs</span>
              </div>
            </div>

            {/* Verified toggle checkbox */}
            <div className="flex items-center space-x-3 pt-2">
              <input
                type="checkbox"
                id="verifiedCheck"
                checked={onlyVerified}
                onChange={(e) => setOnlyVerified(e.target.checked)}
                className="w-4.5 h-4.5 rounded text-event-pink accent-event-pink border-stone-300 focus:ring-event-pink cursor-pointer"
              />
              <label htmlFor="verifiedCheck" className="text-xs font-semibold text-stone-700 cursor-pointer flex items-center">
                Only Vetted/Verified Vendors
              </label>
            </div>
          </div>

          {/* 2. Main Listings Section */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Top Search bar & Sort selector controls */}
            <div className="bg-white rounded-3xl p-4 border border-stone-200/80 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Search bar input */}
              <div className="relative w-full md:w-80 flex items-center bg-stone-50 border border-stone-200 rounded-2xl px-3 py-1.5 focus-within:border-event-pink transition-colors">
                <FiSearch className="text-stone-400 mr-2 w-5 h-5 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search by vendor name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent text-sm w-full outline-none text-stone-800"
                />
              </div>

              {/* Sort selector */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold outline-none cursor-pointer text-stone-700 focus:border-event-pink"
                >
                  <option value="popular">Popularity</option>
                  <option value="rating">Rating (Highest)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                </select>
              </div>
            </div>

            {/* Vendors Directory Grid view */}
            <AnimatePresence mode="popLayout">
              {filteredVendors.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-24 bg-white rounded-3xl border border-stone-200 p-8 shadow-sm"
                >
                  <p className="font-serif text-2xl text-stone-500 mb-2">No matching vendors found</p>
                  <p className="text-stone-400 text-xs mb-6">Try broadening your search term or adjusting filters.</p>
                  <button
                    onClick={handleClearAll}
                    className="px-6 py-2.5 bg-gradient-to-r from-event-pink to-event-orange text-white rounded-full text-xs font-bold hover:brightness-110 transition-colors cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {filteredVendors.map((vendor) => {
                    const isWishlisted = wishlist.includes(vendor.id);
                    return (
                      <motion.div
                        layout
                        key={vendor.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="group bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-event-pink/40 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
                      >
                        {/* Image banner */}
                        <div className="relative h-56 overflow-hidden">
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                            style={{ backgroundImage: `url('${vendor.image}')` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

                          {/* Super Vendor Badge */}
                          {vendor.verified && (
                            <span className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[9px] font-extrabold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider flex items-center space-x-1 z-10">
                              <FiStar className="w-2.5 h-2.5 fill-current" />
                              <span>Super Vendor</span>
                            </span>
                          )}

                          {/* Heart wishlist */}
                          <button
                            onClick={() => toggleWishlist(vendor.id)}
                            className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer ${
                              isWishlisted
                                ? 'bg-event-pink text-white scale-110 animate-pulse'
                                : 'bg-black/35 text-white hover:bg-white hover:text-event-pink'
                            }`}
                          >
                            <FiHeart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                          </button>

                          <span className="absolute bottom-4 left-4 bg-white/95 text-event-pink text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                            {vendor.category}
                          </span>
                        </div>

                        {/* Details */}
                        <div className="p-5 flex-grow flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-stone-500 font-semibold flex items-center">
                                <FiMapPin className="text-event-pink mr-1" /> {vendor.location}
                              </span>
                              
                              {/* Rating & Review */}
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1 bg-emerald-600 text-white px-2 py-0.5 rounded-md font-bold text-xs shadow-sm">
                                  <FiStar className="w-3 h-3 fill-current text-white" />
                                  <span>{vendor.rating}</span>
                                </div>
                                <span className="text-[11px] text-stone-500 font-semibold">{vendor.reviews} reviews</span>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2 mb-3">
                              <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-event-pink transition-colors duration-300">
                                {vendor.name}
                              </h3>
                              {vendor.verified && (
                                <span className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-gold-accent rounded-full p-0.5 flex items-center justify-center">
                                  <FiCheck className="w-3 h-3" />
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-4">
                            <div>
                              <p className="text-[9px] text-stone-400 uppercase tracking-widest font-semibold">Starting Price</p>
                              <p className="text-event-pink font-bold text-sm">{vendor.price}</p>
                            </div>
                            <button
                              onClick={() => alert(`Quote request sent to ${vendor.name}!`)}
                              className="px-4 py-2 bg-gradient-to-r from-event-pink to-event-orange text-white font-bold text-xs rounded-xl transition-colors duration-300 cursor-pointer hover:brightness-110"
                            >
                              Request Quote
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;
