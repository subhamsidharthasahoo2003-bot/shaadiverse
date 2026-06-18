import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiHeart, FiMapPin, FiCheck } from 'react-icons/fi';

const allVendors = [
  {
    id: 1,
    name: 'The Grand Ritz Pavilion',
    category: 'Wedding Venues',
    location: 'Udaipur',
    rating: 4.9,
    reviews: 320,
    price: '₹2,50,000 / day',
    verified: true,
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Shot Stories by Vivek',
    category: 'Photographers',
    location: 'Mumbai',
    rating: 4.8,
    reviews: 184,
    price: '₹1,20,000 / day',
    verified: true,
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Glamour by Tanvi',
    category: 'Makeup Artists',
    location: 'Delhi NCR',
    rating: 4.9,
    reviews: 95,
    price: '₹45,000 / event',
    verified: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Royal Elegance Events',
    category: 'Wedding Planners',
    location: 'Jaipur',
    rating: 5.0,
    reviews: 142,
    price: '₹4,00,000 / package',
    verified: true,
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Vows & Whispers Decor',
    category: 'Decorators',
    location: 'Bangalore',
    rating: 4.7,
    reviews: 78,
    price: '₹1,80,000 / event',
    verified: true,
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Sabyasachi Bridal Couture',
    category: 'Bridal Wear',
    location: 'Mumbai',
    rating: 4.9,
    reviews: 210,
    price: '₹3,50,000 onwards',
    verified: true,
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    name: 'Jodhpur Palace Banquets',
    category: 'Wedding Venues',
    location: 'Jaipur',
    rating: 4.8,
    reviews: 89,
    price: '₹3,00,000 / day',
    verified: true,
    image: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    name: 'Cinematic Vows Media',
    category: 'Photographers',
    location: 'Delhi NCR',
    rating: 4.9,
    reviews: 114,
    price: '₹1,50,000 / day',
    verified: false,
    image: 'https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    name: 'Goan Breeze Beachfront Resort',
    category: 'Wedding Venues',
    location: 'Goa',
    rating: 4.9,
    reviews: 165,
    price: '₹2,80,000 / day',
    verified: true,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    name: 'Aura Invitations',
    category: 'Invitation Designers',
    location: 'Bangalore',
    rating: 4.6,
    reviews: 42,
    price: '₹250 / card',
    verified: false,
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=800&q=80',
  },
];

const FeaturedVendors = ({ selectedCategory, selectedLocation, wishlist, toggleWishlist, onSelectCategory, onSelectLocation }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [filteredVendors, setFilteredVendors] = useState(allVendors);

  const tabs = ['All', 'Wedding Venues', 'Photographers', 'Makeup Artists', 'Wedding Planners', 'Decorators'];

  // Handle updates when tabs, category, or location changes
  useEffect(() => {
    let result = allVendors;

    // Filter by tab selector (unless it is 'All')
    if (activeTab !== 'All') {
      result = result.filter(v => v.category === activeTab);
    } else if (selectedCategory) {
      result = result.filter(v => v.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    }

    // Filter by location
    if (selectedLocation) {
      result = result.filter(v => v.location.toLowerCase() === selectedLocation.toLowerCase());
    }

    setFilteredVendors(result);
  }, [activeTab, selectedCategory, selectedLocation]);

  const handleClearFilters = () => {
    setActiveTab('All');
    onSelectCategory('');
    onSelectLocation('');
  };

  return (
    <section id="vendors-section" className="py-24 bg-[#FAF9F6] border-t border-rose-gold/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-burgundy font-semibold uppercase tracking-widest text-xs lg:text-sm">
              Spotlight Partners
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mt-3">
              Featured Premium Vendors
            </h2>
            <div className="h-1 w-20 bg-rose-gold mt-4 rounded-full" />
          </div>

          <p className="text-stone-500 font-light max-w-md mt-4 md:mt-0 text-sm md:text-base leading-relaxed">
            Hand-selected leading profiles with exceptional feedback, proven trust badges, and special ShaadiVerse rates.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                // Clear the hero search categories if selecting tabs to avoid overriding
                onSelectCategory('');
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === tab && !selectedCategory
                  ? 'bg-burgundy text-white shadow-lg'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-rose-gold hover:text-burgundy'
              }`}
            >
              {tab}
            </button>
          ))}

          {/* Active search filters indicators */}
          {(selectedCategory || selectedLocation || activeTab !== 'All') && (
            <button
              onClick={handleClearFilters}
              className="px-4 py-2.5 rounded-full text-xs font-bold text-burgundy bg-rose-gold/20 hover:bg-rose-gold/30 border border-rose-gold/30 transition-colors ml-auto cursor-pointer"
            >
              Clear Filters
            </button>
          )}
        </div>

        {selectedCategory || selectedLocation ? (
          <div className="mb-6 bg-rose-gold/10 border border-rose-gold/20 rounded-xl p-4 flex items-center space-x-2 text-stone-800 text-sm">
            <span>Showing results for: </span>
            {selectedCategory && (
              <span className="bg-burgundy/10 text-burgundy font-semibold px-2.5 py-1 rounded-md text-xs">
                Category: {selectedCategory}
              </span>
            )}
            {selectedLocation && (
              <span className="bg-burgundy/10 text-burgundy font-semibold px-2.5 py-1 rounded-md text-xs">
                Location: {selectedLocation}
              </span>
            )}
          </div>
        ) : null}

        {/* Vendors Grid */}
        <AnimatePresence mode="popLayout">
          {filteredVendors.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-white rounded-3xl border border-stone-200/50 p-8"
            >
              <p className="font-serif text-2xl text-stone-500 mb-2">No matching vendors found</p>
              <p className="text-stone-400 text-sm mb-6">Try searching for other categories or locations</p>
              <button
                onClick={handleClearFilters}
                className="px-6 py-2.5 bg-burgundy text-white rounded-full text-xs font-bold hover:bg-stone-900 transition-colors cursor-pointer"
              >
                Reset Search
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                    className="group bg-white rounded-3xl overflow-hidden border border-stone-200/50 hover:border-rose-gold/45 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
                  >
                    {/* Image Header */}
                    <div className="relative h-64 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                        style={{ backgroundImage: `url('${vendor.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

                      {/* Wishlist Button */}
                      <button
                        onClick={() => toggleWishlist(vendor.id)}
                        className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer ${
                          isWishlisted
                            ? 'bg-burgundy text-[#FAF9F6] scale-110'
                            : 'bg-black/35 text-white hover:bg-white hover:text-burgundy'
                        }`}
                        aria-label="Wishlist vendor"
                      >
                        <FiHeart className={`w-5.5 h-5.5 ${isWishlisted ? 'fill-current' : ''}`} />
                      </button>

                      {/* Vendor Category Tag */}
                      <span className="absolute bottom-4 left-4 bg-white/95 text-burgundy text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                        {vendor.category}
                      </span>
                    </div>

                    {/* Vendor Info Details */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-1">
                            <FiMapPin className="text-rose-gold w-4 h-4" />
                            <span className="text-xs text-stone-500 font-semibold">{vendor.location}</span>
                          </div>
                          
                          {/* Rating & Review */}
                          <div className="flex items-center space-x-1 bg-champagne/30 px-2 py-0.5 rounded-lg border border-champagne/50">
                            <FiStar className="w-3.5 h-3.5 text-gold-accent fill-current" />
                            <span className="text-xs text-stone-800 font-bold">{vendor.rating}</span>
                            <span className="text-[10px] text-stone-500">({vendor.reviews})</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 mb-3">
                          <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-burgundy transition-colors duration-300">
                            {vendor.name}
                          </h3>
                          {vendor.verified && (
                            <span
                              className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-gold-accent rounded-full p-0.5 flex items-center justify-center"
                              title="Verified Vendor"
                            >
                              <FiCheck className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Pricing Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-4">
                        <div>
                          <p className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold">Starting Price</p>
                          <p className="text-burgundy font-bold text-base">{vendor.price}</p>
                        </div>
                        <button className="px-4 py-2 bg-stone-900 group-hover:bg-[#7B2D26] text-white font-bold text-xs rounded-xl hover:brightness-110 transition-colors duration-300 cursor-pointer">
                          View Deals
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
    </section>
  );
};

export default FeaturedVendors;
export { allVendors };
