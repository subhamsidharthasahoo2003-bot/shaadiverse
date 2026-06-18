import React, { useState, useEffect } from 'react';
import { FiHeart, FiMenu, FiX, FiChevronDown, FiUser } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = ({ wishlistCount, openWishlistModal, onOpenLogin, onOpenRegister, onSelectCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Event Venues', desc: 'Palaces, Banquets & Resorts' },
    { name: 'Photographers', desc: 'Event, pre-wedding & shoot coverage' },
    { name: 'Makeup Artists', desc: 'Makeovers, styling & grooming' },
    { name: 'Event Planners', desc: 'Full service planning & coordinators' },
    { name: 'Decorators', desc: 'Floral, theme & corporate setups' },
    { name: 'Entertainment & DJs', desc: 'Live bands, artists & sound setups' },
    { name: 'Caterers', desc: 'Gourmet food & custom menus' },
    { name: 'Formal & Party Wear', desc: 'Couture, suits, lehengas & gowns' },
  ];

  const locations = ['Bhubaneswar', 'Udaipur', 'Jaipur', 'Mumbai', 'Delhi NCR', 'Bangalore', 'Goa'];

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-4 shadow-sm'
            : 'bg-gradient-to-b from-black/40 to-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl lg:text-3xl font-bold tracking-wide ">
              Event<span className="bg-gradient-to-r from-event-pink to-event-orange bg-clip-text text-transparent">Verse</span>
            </span>
          </Link>
 
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Find Vendors Mega Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('vendors')}
                className={`flex items-center space-x-1 font-medium hover:text-event-pink transition-colors duration-300 py-2 cursor-pointer ${
                  isScrolled ? 'text-stone-800' : 'text-white'
                }`}
              >
                <span>Find Vendors</span>
                <FiChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
 
              {/* Mega Menu Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] glass-card bg-white/95 rounded-2xl shadow-xl border border-event-pink/20 p-6 grid grid-cols-3 gap-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 text-stone-800">
                <div className="col-span-2">
                  <h4 className="font-serif text-sm font-bold text-event-pink tracking-wider uppercase border-b border-event-orange/20 pb-2 mb-4">
                    Categories
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        to="/vendors"
                        onClick={() => {
                          onSelectCategory(category.name);
                        }}
                        className="text-left group/item flex flex-col hover:bg-[#FAF9F6] p-2 rounded-lg transition-colors"
                      >
                        <span className="font-medium text-stone-800 group-hover/item:text-event-pink transition-colors text-sm">
                          {category.name}
                        </span>
                        <span className="text-[11px] text-stone-500">
                          {category.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
 
                <div className="border-l border-event-pink/15 pl-6">
                  <h4 className="font-serif text-sm font-bold text-event-orange tracking-wider uppercase border-b border-event-pink/20 pb-2 mb-4">
                    Top Cities
                  </h4>
                  <div className="flex flex-col space-y-2">
                    {locations.map((loc) => (
                      <Link
                        key={loc}
                        to="/vendors"
                        className="text-sm text-stone-600 hover:text-event-pink transition-colors py-1 hover:pl-1 duration-200"
                      >
                        Events in {loc}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 bg-event-pink/5 rounded-xl p-4 border border-event-pink/10 text-center">
                    <p className="text-xs font-semibold text-event-pink">Planning a custom event?</p>
                    <Link to="/planner" className="text-[10px] underline text-event-orange hover:text-event-pink font-bold block mt-1">
                      Talk to AI Planner
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/vendors"
              className={`font-medium hover:text-event-pink transition-colors duration-300 ${
                isScrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              Vendors
            </Link>
 
            <Link
              to="/inspiration"
              className={`font-medium hover:text-event-pink transition-colors duration-300 ${
                isScrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              Inspiration
            </Link>
 
            <Link
              to="/planner"
              className={`font-medium hover:text-event-pink transition-colors duration-300 ${
                isScrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              Planner
            </Link>
 
            <Link
              to="/stories"
              className={`font-medium hover:text-event-pink transition-colors duration-300 ${
                isScrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              Real Events
            </Link>
          </div>
 
          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Wishlist Button */}
            <button
              onClick={openWishlistModal}
              className={`relative p-2.5 rounded-full hover:bg-event-pink/10 transition-colors cursor-pointer duration-300 ${
                isScrolled ? 'text-event-pink' : 'text-white'
              }`}
              aria-label="View Wishlist"
            >
              <FiHeart className="w-5.5 h-5.5" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-gradient-to-r from-event-pink to-event-orange text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF9F6]">
                  {wishlistCount}
                </span>
              )}
            </button>
 
            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={onOpenLogin}
                className={`px-4 py-2 text-sm font-semibold rounded-lg hover:text-event-pink transition-colors cursor-pointer ${
                  isScrolled ? 'text-stone-700' : 'text-white'
                }`}
              >
                Login
              </button>
              <button
                onClick={onOpenRegister}
                className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-event-pink to-event-orange text-white shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300 cursor-pointer"
              >
                Register
              </button>
            </div>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="flex items-center space-x-4 lg:hidden">
            {/* Mobile Wishlist Button */}
            <button
              onClick={openWishlistModal}
              className={`relative p-2 rounded-full cursor-pointer ${
                isScrolled ? 'text-event-pink' : 'text-white'
              }`}
            >
              <FiHeart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-event-pink text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
 
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full hover:bg-event-pink/10 transition-colors cursor-pointer ${
                isScrolled ? 'text-stone-800' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
 
      {/* Mobile Menu Sidebar Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-[#FAF9F6] z-50 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-event-pink/15 pb-4 mb-6">
                  <span className="font-serif text-2xl font-bold text-stone-900">
                    Event<span className="bg-gradient-to-r from-event-pink to-event-orange bg-clip-text text-transparent">Verse</span>
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-stone-600 hover:text-stone-900 cursor-pointer"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>
 
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/vendors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-stone-800 hover:text-event-pink py-2 transition-colors border-b border-stone-100"
                  >
                    Find Vendors
                  </Link>
                  <Link
                    to="/inspiration"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-stone-800 hover:text-event-pink py-2 transition-colors border-b border-stone-100"
                  >
                    Inspiration Gallery
                  </Link>
                  <Link
                    to="/planner"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-stone-800 hover:text-event-pink py-2 transition-colors border-b border-stone-100"
                  >
                    AI Planner Tools
                  </Link>
                  <Link
                    to="/stories"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-stone-800 hover:text-event-pink py-2 transition-colors border-b border-stone-100"
                  >
                    Real Events
                  </Link>
                </div>
              </div>
 
              <div className="mt-8 space-y-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenLogin();
                  }}
                  className="w-full py-3 font-semibold text-stone-800 border border-stone-300 rounded-xl hover:bg-stone-50 cursor-pointer"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full py-3 font-semibold text-white bg-gradient-to-r from-event-pink to-event-orange rounded-xl shadow-md hover:brightness-105 cursor-pointer"
                >
                  Create Account
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
