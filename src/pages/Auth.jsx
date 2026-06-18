import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiCheck, FiMail, FiLock, FiUser, FiSliders, FiCalendar } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Auth = ({ defaultTab = 'login', onAuthSuccess }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(defaultTab); // 'login' or 'register'
  const [authRole, setAuthRole] = useState('couple'); // 'couple' or 'vendor'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'login') {
      const simulatedName = authRole === 'couple' ? 'Priya & Raj' : 'Elite Caterers';
      onAuthSuccess(simulatedName);
    } else {
      onAuthSuccess(fullName || 'New Member');
    }
    navigate('/');
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6] min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-rose-gold/20 text-stone-800 text-left"
      >
        {/* Toggle between tabs */}
        <div className="flex items-center justify-between border-b border-rose-gold/15 pb-4 mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('login')}
              className={`font-serif text-xl font-bold pb-2 transition-colors cursor-pointer ${
                activeTab === 'login' ? 'text-stone-900 border-b-2 border-burgundy' : 'text-stone-400'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`font-serif text-xl font-bold pb-2 transition-colors cursor-pointer ${
                activeTab === 'register' ? 'text-stone-900 border-b-2 border-burgundy' : 'text-stone-400'
              }`}
            >
              Register
            </button>
          </div>
        </div>

        {/* Toggle role selection (Only for Login) */}
        {activeTab === 'login' && (
          <div className="grid grid-cols-2 gap-2 bg-stone-50 p-1 rounded-xl mb-6 border border-stone-200">
            <button
              type="button"
              onClick={() => setAuthRole('couple')}
              className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                authRole === 'couple' ? 'bg-white text-burgundy shadow-sm' : 'text-stone-500'
              }`}
            >
              Sign In as Couple
            </button>
            <button
              type="button"
              onClick={() => setAuthRole('vendor')}
              className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                authRole === 'vendor' ? 'bg-white text-burgundy shadow-sm' : 'text-stone-500'
              }`}
            >
              Sign In as Vendor
            </button>
          </div>
        )}

        {/* Action Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {activeTab === 'register' && (
            <div>
              <label className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5">
                Full Name
              </label>
              <div className="relative flex items-center bg-stone-50 border border-stone-200 rounded-xl px-3 py-2">
                <FiUser className="text-stone-400 mr-2" />
                <input
                  type="text"
                  required
                  placeholder="E.g., Priya Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-transparent text-sm w-full outline-none text-stone-800"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative flex items-center bg-stone-50 border border-stone-200 rounded-xl px-3 py-2">
              <FiMail className="text-stone-400 mr-2" />
              <input
                type="email"
                required
                placeholder={authRole === 'couple' ? 'couple@shaadi.com' : 'vendor@shaadi.com'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-sm w-full outline-none text-stone-800"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative flex items-center bg-stone-50 border border-stone-200 rounded-xl px-3 py-2">
              <FiLock className="text-stone-400 mr-2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent text-sm w-full outline-none text-stone-800"
              />
            </div>
          </div>

          {activeTab === 'register' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5">
                  Wedding Date
                </label>
                <div className="relative flex items-center bg-stone-50 border border-stone-200 rounded-xl px-3 py-2">
                  <FiCalendar className="text-stone-400 mr-2" />
                  <input
                    type="date"
                    className="bg-transparent text-xs w-full outline-none text-stone-800"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5">
                  Est. Budget
                </label>
                <select className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:border-rose-gold outline-none font-medium cursor-pointer">
                  <option>10L - 20L</option>
                  <option>20L - 40L</option>
                  <option>40L - 80L</option>
                  <option>80L +</option>
                </select>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 bg-burgundy hover:bg-stone-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg mt-6 cursor-pointer"
          >
            {activeTab === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Auth;
