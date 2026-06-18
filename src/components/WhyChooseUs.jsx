import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiCalendar, FiSliders, FiList, FiHeart, FiX, FiDollarSign } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const WhyChooseUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('budget'); // 'budget' or 'checklist'
  const [budgetVal, setBudgetVal] = useState(1500000); // 15 Lakhs default
  
  const [checklist, setChecklist] = useState([
    { id: 1, task: 'Book Event Venue', completed: true },
    { id: 2, task: 'Hire Event Photographer & Videographer', completed: true },
    { id: 3, task: 'Select Event Theme & Decor Setup', completed: false },
    { id: 4, task: 'Book DJ & Entertainment Services', completed: false },
    { id: 5, task: 'Finalize Catering Menu & Tastings', completed: false },
    { id: 6, task: 'Send Digital Invites & Track RSVPs', completed: false },
  ]);

  const toggleChecklistTask = (id) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const features = [
    {
      icon: FiCheckCircle,
      title: 'Verified Vendors',
      desc: 'Every vendor profile goes through strict background verification, reviews validation, and price checks before getting listed.',
      color: 'from-emerald-500/10 to-emerald-500/5 hover:border-emerald-500/40',
      iconColor: 'text-emerald-500',
    },
    {
      icon: FiCalendar,
      title: 'Easy Booking',
      desc: 'Check availability calendar, compare quote packages directly, and reserve dates with secure payment contracts.',
      color: 'from-sky-500/10 to-sky-500/5 hover:border-sky-500/40',
      iconColor: 'text-sky-500',
    },
    {
      icon: FiSliders,
      title: 'Budget Planner',
      desc: 'Input your total budget and see instant allocations for venue, decor, and photographers. Click to try our simulator.',
      color: 'from-amber-500/10 to-amber-500/5 hover:border-amber-500/40',
      iconColor: 'text-amber-500',
      interactive: true,
      type: 'budget',
    },
    {
      icon: FiList,
      title: 'Event Checklist',
      desc: 'Stay organized with a custom month-by-month event checklist tailored to your date. Click to view list.',
      color: 'from-event-pink/10 to-event-pink/5 hover:border-event-pink/40',
      iconColor: 'text-event-pink',
      interactive: true,
      type: 'checklist',
    },
    {
      icon: FiHeart,
      title: 'Inspiration Gallery',
      desc: 'Save hundreds of styling details, decor backdrops, and theme setups directly to a shared mood board.',
      color: 'from-purple-500/10 to-purple-500/5 hover:border-purple-500/40',
      iconColor: 'text-purple-500',
    },
    {
      icon: HiSparkles,
      title: 'AI Recommendations',
      desc: 'Our neural matching engine looks at your budget and style to match you with top available vendor recommendations.',
      color: 'from-event-orange/15 to-event-orange/10 hover:border-event-orange/40',
      iconColor: 'text-event-orange',
    },
  ];

  // Budget allocations
  const venueBudget = Math.floor(budgetVal * 0.45);
  const cateringBudget = Math.floor(budgetVal * 0.25);
  const decorBudget = Math.floor(budgetVal * 0.10);
  const photoBudget = Math.floor(budgetVal * 0.10);
  const makeupBudget = Math.floor(budgetVal * 0.05);
  const plannerBudget = Math.floor(budgetVal * 0.05);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCardClick = (feat) => {
    if (feat.interactive) {
      setModalType(feat.type);
      setIsModalOpen(true);
    }
  };

  return (
    <section className="py-24 bg-stone-50 border-t border-event-pink/15 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-event-pink font-semibold uppercase tracking-widest text-xs lg:text-sm">
            Everything You Need
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mt-3 mb-4">
            Why Choose EventVerse?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-event-pink to-event-orange mx-auto mb-6 rounded-full" />
          <p className="text-stone-600 font-light text-sm md:text-base leading-relaxed">
            We simplify premium event planning with interactive smart tools, checked checklists, and certified service marketplaces.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => handleCardClick(feat)}
                className={`glass-card p-8 rounded-3xl bg-gradient-to-br ${
                  feat.color
                } hover:shadow-xl transition-all duration-500 flex flex-col items-start text-left group ${
                  feat.interactive ? 'cursor-pointer' : ''
                }`}
              >
                {/* Icon Container */}
                <div className={`p-4 rounded-2xl bg-white shadow-sm mb-6 ${feat.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-event-pink transition-colors duration-300 mb-3 flex items-center">
                  <span>{feat.title}</span>
                  {feat.interactive && (
                    <span className="ml-2 bg-event-pink/10 text-event-pink text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Interactive
                    </span>
                  )}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {feat.desc}
                </p>

                {feat.interactive && (
                  <span className="text-xs font-bold text-event-pink border-b border-event-pink/30 pb-0.5 group-hover:border-event-pink transition-all mt-auto uppercase tracking-wider">
                    {feat.type === 'budget' ? 'Launch Budgeter' : 'View Checklist'} &rarr;
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Tools Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-6 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full max-w-lg bg-[#FAF9F6] rounded-3xl shadow-2xl p-6 overflow-y-auto max-h-[85vh] z-[60] border border-event-pink/20 text-stone-800"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-event-pink/20 pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <FiSliders className="text-event-pink w-5 h-5" />
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    {modalType === 'budget' ? 'Interactive Budget Allocator' : 'Your Event Checklist'}
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 hover:bg-stone-200 rounded-full transition-colors cursor-pointer"
                >
                  <FiX className="w-5.5 h-5.5" />
                </button>
              </div>

              {/* Budget Content */}
              {modalType === 'budget' ? (
                <div>
                  <p className="text-stone-600 text-xs mb-6">
                    Adjust the slider to simulate budget allocations. Our breakdown is calculated based on statistical industry benchmarks.
                  </p>
                  
                  {/* Slider Control */}
                  <div className="bg-white p-5 rounded-2xl border border-stone-200/60 mb-6 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-stone-500 uppercase font-bold tracking-wider">Total Budget</span>
                      <span className="text-event-pink font-extrabold text-lg">{formatCurrency(budgetVal)}</span>
                    </div>
                    
                    <input
                      type="range"
                      min={500000}
                      max={10000000}
                      step={100000}
                      value={budgetVal}
                      onChange={(e) => setBudgetVal(Number(e.target.value))}
                      className="w-full accent-event-pink cursor-pointer py-2"
                    />
                    
                    <div className="flex justify-between text-[10px] text-stone-400 font-bold mt-1 uppercase">
                      <span>₹5 Lakhs</span>
                      <span>₹50 Lakhs</span>
                      <span>₹1 Crore</span>
                    </div>
                  </div>

                  {/* Calculations breakdown list */}
                  <div className="space-y-3">
                    <h4 className="font-serif text-sm font-bold text-stone-700 uppercase tracking-wide mb-2">Estimated Allocations</h4>
                    
                    <div className="flex items-center justify-between bg-stone-100/50 p-3 rounded-xl">
                      <span className="text-xs text-stone-600 font-medium">Venues & Lodging (45%)</span>
                      <span className="text-xs text-event-pink font-bold">{formatCurrency(venueBudget)}</span>
                    </div>
                    <div className="flex items-center justify-between bg-stone-100/50 p-3 rounded-xl">
                      <span className="text-xs text-stone-600 font-medium">Food & Catering (25%)</span>
                      <span className="text-xs text-event-pink font-bold">{formatCurrency(cateringBudget)}</span>
                    </div>
                    <div className="flex items-center justify-between bg-stone-100/50 p-3 rounded-xl">
                      <span className="text-xs text-stone-600 font-medium">Decor & Theme Setups (10%)</span>
                      <span className="text-xs text-event-pink font-bold">{formatCurrency(decorBudget)}</span>
                    </div>
                    <div className="flex items-center justify-between bg-stone-100/50 p-3 rounded-xl">
                      <span className="text-xs text-stone-600 font-medium">Photography & Cinematic Film (10%)</span>
                      <span className="text-xs text-event-pink font-bold">{formatCurrency(photoBudget)}</span>
                    </div>
                    <div className="flex items-center justify-between bg-stone-100/50 p-3 rounded-xl">
                      <span className="text-xs text-stone-600 font-medium">Styling & Attire (5%)</span>
                      <span className="text-xs text-event-pink font-bold">{formatCurrency(makeupBudget)}</span>
                    </div>
                    <div className="flex items-center justify-between bg-stone-100/50 p-3 rounded-xl">
                      <span className="text-xs text-stone-600 font-medium">Planner Services (5%)</span>
                      <span className="text-xs text-event-pink font-bold">{formatCurrency(plannerBudget)}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full mt-6 bg-gradient-to-r from-event-pink to-event-orange text-white font-semibold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer hover:brightness-110"
                  >
                    Save & Get Recommendations
                  </button>
                </div>
              ) : (
                /* Checklist Content */
                <div>
                  <p className="text-stone-600 text-xs mb-6">
                    Check off tasks to keep your planning workflow organized. Below is the preview list for the final 6 months.
                  </p>

                  <div className="space-y-3 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm max-h-[40vh] overflow-y-auto">
                    {checklist.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => toggleChecklistTask(item.id)}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-stone-50 cursor-pointer transition-colors border border-transparent hover:border-stone-100"
                      >
                        <input
                          type="checkbox"
                          checked={item.completed}
                          onChange={() => {}} // handled by parent div onClick
                          className="w-4.5 h-4.5 rounded text-event-pink accent-event-pink border-stone-300 focus:ring-event-pink"
                        />
                        <span className={`text-xs ${item.completed ? 'line-through text-stone-400' : 'text-stone-700 font-medium'}`}>
                          {item.task}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between text-xs text-stone-500 font-semibold bg-event-pink/10 p-4 rounded-xl border border-event-pink/20">
                    <span>Progress: {checklist.filter(c => c.completed).length} of {checklist.length} Completed</span>
                    <button
                      onClick={() => {
                        setChecklist(checklist.map(c => ({ ...c, completed: false })));
                      }}
                      className="text-event-pink hover:underline cursor-pointer font-bold"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhyChooseUs;
