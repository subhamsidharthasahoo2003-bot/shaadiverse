import React, { useState } from 'react';
import { FiMail, FiSend, FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiCheck } from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = ({ onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  const categories = ['Wedding Venues', 'Photographers', 'Makeup Artists', 'Wedding Planners', 'Decorators'];
  const links = [
    { name: 'About Us', path: '/' },
    { name: 'Inspiration Hub', path: '/inspiration' },
    { name: 'Wedding Planners', path: '/vendors' },
    { name: 'Couple Stories', path: '/stories' },
    { name: 'Planning Tools', path: '/planner' }
  ];
  const blogs = [
    { title: 'Choosing Your Udaipur Venue', url: '#' },
    { title: 'Haldi Outfits Guide 2026', url: '#' },
    { title: 'Photographer Negotiation Tips', url: '#' },
  ];

  return (
    <footer className="bg-stone-900 text-stone-400 pt-20 pb-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/5">
        
        {/* Column 1: About & Brand */}
        <div className="lg:col-span-2 text-left">
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <span className="font-serif text-2xl lg:text-3xl font-bold tracking-wide text-white">
              Shaadi<span className="text-rose-gold">Verse</span>
            </span>
          </Link>
          <p className="text-stone-400 text-sm leading-relaxed font-light mb-6 max-w-sm">
            ShaadiVerse is the country’s leading premium wedding planning marketplace. We connect couples with curated, verified designers, high-end venues, and award-winning artists to construct dream celebrations.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2.5 bg-white/5 hover:bg-[#E8B4B8] hover:text-burgundy rounded-full text-stone-300 transition-all duration-300">
              <FiInstagram className="w-4.5 h-4.5" />
            </a>
            <a href="#" className="p-2.5 bg-white/5 hover:bg-[#E8B4B8] hover:text-burgundy rounded-full text-stone-300 transition-all duration-300">
              <FaPinterestP className="w-4.5 h-4.5" />
            </a>
            <a href="#" className="p-2.5 bg-white/5 hover:bg-[#E8B4B8] hover:text-burgundy rounded-full text-stone-300 transition-all duration-300">
              <FiFacebook className="w-4.5 h-4.5" />
            </a>
            <a href="#" className="p-2.5 bg-white/5 hover:bg-[#E8B4B8] hover:text-burgundy rounded-full text-stone-300 transition-all duration-300">
              <FiTwitter className="w-4.5 h-4.5" />
            </a>
            <a href="#" className="p-2.5 bg-white/5 hover:bg-[#E8B4B8] hover:text-burgundy rounded-full text-stone-300 transition-all duration-300">
              <FiYoutube className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Column 2: Categories */}
        <div className="text-left">
          <h4 className="font-serif text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/5 pb-2">
            Categories
          </h4>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  to="/vendors"
                  onClick={() => onSelectCategory(cat)}
                  className="text-sm hover:text-rose-gold transition-colors duration-200"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="text-left">
          <h4 className="font-serif text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/5 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-sm hover:text-rose-gold transition-colors duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter & Blog */}
        <div className="text-left">
          <h4 className="font-serif text-white font-bold text-sm uppercase tracking-wider mb-6 border-b border-white/5 pb-2">
            Latest Blogs
          </h4>
          <ul className="space-y-3 mb-6">
            {blogs.map((b, idx) => (
              <li key={idx}>
                <a href={b.url} className="text-sm hover:text-rose-gold transition-colors duration-200 line-clamp-1">
                  {b.title}
                </a>
              </li>
            ))}
          </ul>

          <h4 className="font-serif text-white font-bold text-xs uppercase tracking-wider mb-3">
            Newsletter Signup
          </h4>
          <form onSubmit={handleSubscribe} className="relative flex items-center bg-white/5 rounded-xl border border-white/10 p-1.5 focus-within:border-rose-gold/60 transition-colors">
            <FiMail className="text-stone-500 ml-2.5 w-4.5 h-4.5 flex-shrink-0" />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent text-xs text-white placeholder-stone-500 outline-none w-full px-2 py-1.5"
              required
            />
            <button
              type="submit"
              className="bg-burgundy text-white hover:bg-stone-900 transition-colors p-2 rounded-lg cursor-pointer"
              title="Subscribe"
            >
              {subscribed ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiSend className="w-4 h-4" />}
            </button>
          </form>
          {subscribed && (
            <span className="text-[10px] text-emerald-400 block mt-1.5 animate-pulse">
              Subscription saved successfully!
            </span>
          )}
        </div>
      </div>

      {/* Copyright Footer details */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-medium text-stone-500">
        <p>&copy; 2026 ShaadiVerse Inc. All Rights Reserved. Designed by Antigravity.</p>
        <div className="flex items-center space-x-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-stone-300">Privacy Policy</a>
          <a href="#" className="hover:text-stone-300">Terms of Service</a>
          <a href="#" className="hover:text-stone-300">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
