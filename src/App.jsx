import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiHeart, FiCheck } from 'react-icons/fi';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { allVendors } from './components/FeaturedVendors';

// Pages
import Home from './pages/Home';
import Vendors from './pages/Vendors';
import Inspiration from './pages/Inspiration';
import Planner from './pages/Planner';
import Stories from './pages/Stories';
import Auth from './pages/Auth';

function App() {
  // Wishlist state shared globally
  const [wishlist, setWishlist] = useState([1, 4]); // defaults
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);

  // Coordinated search state
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Authentication states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((wId) => wId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const handleAuthSuccess = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-[#FAF9F6] text-stone-800 font-sans flex flex-col justify-between selection:bg-event-pink/20 selection:text-event-pink">
        
        {/* Sticky top Navigation bar */}
        <Navbar
          wishlistCount={wishlist.length}
          openWishlistModal={() => setIsWishlistModalOpen(true)}
          onOpenLogin={() => setIsLoginOpen(true)}
          onOpenRegister={() => setIsRegisterOpen(true)}
          onSelectCategory={setSelectedCategory}
        />

        {/* Global User Authentication Success Indicator */}
        {isLoggedIn && (
          <div className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-event-pink to-event-orange text-white border border-white/20 px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3">
            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <FiCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[10px] text-stone-200 uppercase tracking-widest font-semibold">Account Active</p>
              <p className="text-xs font-bold">Welcome, {userName}!</p>
            </div>
            <button
              onClick={handleLogout}
              className="text-[10px] font-bold text-white underline ml-4 cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}

        {/* Routes Content tree */}
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  onSelectCategory={setSelectedCategory}
                  onSelectLocation={setSelectedLocation}
                />
              }
            />
            <Route
              path="/vendors"
              element={
                <Vendors
                  selectedCategory={selectedCategory}
                  selectedLocation={selectedLocation}
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  onSelectCategory={setSelectedCategory}
                  onSelectLocation={setSelectedLocation}
                />
              }
            />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/stories" element={<Stories />} />
            <Route
              path="/login"
              element={<Auth defaultTab="login" onAuthSuccess={handleAuthSuccess} />}
            />
            <Route
              path="/register"
              element={<Auth defaultTab="register" onAuthSuccess={handleAuthSuccess} />}
            />
            {/* Fallback redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Premium footer */}
        <Footer onSelectCategory={setSelectedCategory} />

        {/* --- MODAL DIALOG OVERLAYS --- */}

        {/* A. Wishlist Sidebar Drawer */}
        <AnimatePresence>
          {isWishlistModalOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsWishlistModalOpen(false)}
                className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-[#FAF9F6] shadow-2xl z-[60] flex flex-col justify-between"
              >
                {/* Header */}
                <div className="p-6 border-b border-event-pink/20 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FiHeart className="text-event-pink fill-current w-5.5 h-5.5 animate-pulse" />
                    <h3 className="font-serif text-xl font-bold text-stone-900">
                      Saved Vendors ({wishlist.length})
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsWishlistModalOpen(false)}
                    className="p-1.5 hover:bg-stone-200 rounded-full transition-colors cursor-pointer text-stone-800"
                  >
                    <FiX className="w-5.5 h-5.5" />
                  </button>
                </div>

                {/* Items */}
                <div className="p-6 overflow-y-auto flex-grow space-y-4">
                  {wishlist.length === 0 ? (
                    <div className="text-center py-20">
                      <FiHeart className="text-stone-300 w-16 h-16 mx-auto mb-4" />
                      <p className="font-serif text-lg text-stone-500">Your wishlist is empty</p>
                      <p className="text-stone-400 text-xs mt-1">Tap the heart badge on vendor cards to save them.</p>
                    </div>
                  ) : (
                    allVendors
                      .filter((v) => wishlist.includes(v.id))
                      .map((vendor) => (
                        <div
                          key={vendor.id}
                          className="bg-white rounded-2xl p-4 border border-stone-200 flex space-x-4 shadow-sm hover:border-event-pink transition-colors text-left"
                        >
                          <img
                            src={vendor.image}
                            alt={vendor.name}
                            className="w-20 h-20 rounded-xl object-cover"
                          />
                          <div className="flex-grow flex flex-col justify-between">
                            <div>
                              <span className="text-[9px] bg-event-pink/10 text-event-pink font-bold px-2 py-0.5 rounded uppercase">
                                {vendor.category}
                              </span>
                              <h4 className="font-serif text-sm font-bold text-stone-900 mt-1 leading-snug">
                                {vendor.name}
                              </h4>
                              <p className="text-[10px] text-stone-400 font-semibold">{vendor.location}</p>
                            </div>
                            <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                              <span className="text-event-pink font-bold text-xs">{vendor.price}</span>
                              <button
                                onClick={() => toggleWishlist(vendor.id)}
                                className="text-[10px] text-event-pink hover:text-event-orange hover:underline font-bold cursor-pointer"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                  )}
                </div>

                {wishlist.length > 0 && (
                  <div className="p-6 border-t border-event-pink/20 bg-white">
                    <button
                      onClick={() => {
                        setIsWishlistModalOpen(false);
                        alert('Quotes requested successfully! The vendors will get back to you shortly.');
                      }}
                      className="w-full py-3 bg-gradient-to-r from-event-pink to-event-orange hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
                    >
                      Request Free Quotes
                    </button>
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* B. Auth Modals dialog triggers */}
        <AnimatePresence>
          {isLoginOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsLoginOpen(false)}
                className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-6 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full max-w-md bg-[#FAF9F6] rounded-3xl shadow-2xl p-8 z-[60] border border-event-pink/25 text-stone-800 text-left"
              >
                <div className="flex items-center justify-between border-b border-event-pink/15 pb-4 mb-6">
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Sign In</h3>
                  <button
                    onClick={() => setIsLoginOpen(false)}
                    className="p-1 hover:bg-stone-200 rounded-full transition-colors cursor-pointer"
                  >
                    <FiX className="w-5.5 h-5.5" />
                  </button>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsLoggedIn(true);
                    setUserName('Priya Sharma');
                    setIsLoginOpen(false);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="host@eventverse.com"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-event-pink outline-none bg-white font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5">Password</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-event-pink outline-none bg-white font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-event-pink to-event-orange hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md mt-6 cursor-pointer"
                  >
                    Sign In
                  </button>
                </form>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isRegisterOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsRegisterOpen(false)}
                className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-6 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full max-w-md bg-[#FAF9F6] rounded-3xl shadow-2xl p-8 z-[60] border border-event-pink/25 text-stone-800 text-left"
              >
                <div className="flex items-center justify-between border-b border-event-pink/15 pb-4 mb-6">
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Register</h3>
                  <button
                    onClick={() => setIsRegisterOpen(false)}
                    className="p-1 hover:bg-stone-200 rounded-full transition-colors cursor-pointer"
                  >
                    <FiX className="w-5.5 h-5.5" />
                  </button>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsLoggedIn(true);
                    setUserName('New Host');
                    setIsRegisterOpen(false);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="E.g., Priya Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-event-pink outline-none bg-white font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="host@eventverse.com"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-event-pink outline-none bg-white font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-event-pink to-event-orange hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md mt-6 cursor-pointer"
                  >
                    Create Account
                  </button>
                </form>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </Router>
  );
}

export default App;
