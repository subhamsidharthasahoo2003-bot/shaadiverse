import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSliders, FiList, FiCheckCircle, FiDollarSign, FiPlus, FiTrash2 } from 'react-icons/fi';

const Planner = () => {
  const [budgetVal, setBudgetVal] = useState(2000000); // 20 Lakhs default
  const [checklist, setChecklist] = useState([
    { id: 1, task: 'Book Wedding Venue & Rooms', completed: true, timeframe: '6 Months Before' },
    { id: 2, task: 'Hire Wedding Photographer & Film Team', completed: true, timeframe: '6 Months Before' },
    { id: 3, task: 'Finalize Wedding Decorator & Flower Themes', completed: false, timeframe: '4 Months Before' },
    { id: 4, task: 'Book Bridal Makeup Artist & Stylists', completed: false, timeframe: '3 Months Before' },
    { id: 5, task: 'Finalize Catering Menu & Dessert Tastings', completed: false, timeframe: '2 Months Before' },
    { id: 6, task: 'Design & Send Digital Invitation Cards', completed: false, timeframe: '2 Months Before' },
    { id: 7, task: 'Finalize Bridal Lehenga & Groom Sherwani', completed: false, timeframe: '1 Month Before' },
    { id: 8, task: 'Coordinate Choreography for Sangeet Dance', completed: false, timeframe: '1 Month Before' },
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('2 Months Before');

  // Budget allocations
  const allocations = [
    { name: 'Venues & Lodging', pct: 0.45, color: 'bg-burgundy' },
    { name: 'Food & Catering', pct: 0.25, color: 'bg-rose-gold' },
    { name: 'Decor & Floral Themes', pct: 0.10, color: 'bg-gold-accent' },
    { name: 'Photography & Cinema', pct: 0.10, color: 'bg-[#7B2D26]/70' },
    { name: 'Bridal Wear & Makeup', pct: 0.05, color: 'bg-stone-500' },
    { name: 'Planning & Hospitality', pct: 0.05, color: 'bg-[#D4AF37]/60' },
  ];

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskText) return;
    const taskObj = {
      id: Date.now(),
      task: newTaskText,
      completed: false,
      timeframe: newTaskTime,
    };
    setChecklist([...checklist, taskObj]);
    setNewTaskText('');
  };

  const toggleTask = (id) => {
    setChecklist(checklist.map(c => c.id === id ? { ...c, completed: !c.completed } : c));
  };

  const deleteTask = (id) => {
    setChecklist(checklist.filter(c => c.id !== id));
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6] min-h-screen text-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <div className="text-left mb-12 border-b border-rose-gold/15 pb-6">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mb-3">
            Your Wedding Planner
          </h1>
          <p className="text-stone-500 font-light text-sm md:text-base">
            Keep track of your total budget allocations and check off tasks as your big day approaches.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Budget Planner Dashboard (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-stone-900 mb-4 flex items-center">
                <FiSliders className="mr-2 text-burgundy" /> Budget Calculator
              </h2>
              <p className="text-stone-500 text-xs mb-6">
                Slide to change total budget. Allocations update automatically using national wedding benchmarks.
              </p>

              {/* Slider Control */}
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Total Limit</span>
                  <span className="text-burgundy font-extrabold text-xl">{formatCurrency(budgetVal)}</span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={10000000}
                  step={100000}
                  value={budgetVal}
                  onChange={(e) => setBudgetVal(Number(e.target.value))}
                  className="w-full accent-burgundy cursor-pointer py-2"
                />
                <div className="flex justify-between text-[9px] text-stone-400 font-bold mt-1 uppercase">
                  <span>₹5 Lakhs</span>
                  <span>₹50 Lakhs</span>
                  <span>₹1 Crore</span>
                </div>
              </div>

              {/* Budget Allocations list with custom progress bars */}
              <div className="space-y-4">
                {allocations.map((alloc) => {
                  const amount = Math.floor(budgetVal * alloc.pct);
                  return (
                    <div key={alloc.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-semibold text-stone-700">
                        <span>{alloc.name} ({alloc.pct * 100}%)</span>
                        <span className="text-burgundy font-bold">{formatCurrency(amount)}</span>
                      </div>
                      <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${alloc.color} transition-all duration-500`}
                          style={{ width: `${alloc.pct * 100}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Wedding Tasks Checklist Dashboard (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
              <div className="flex justify-between items-center mb-6 border-b border-stone-100 pb-4">
                <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center">
                  <FiList className="mr-2 text-burgundy" /> Month Checklist
                </h2>
                
                {/* Stats badge */}
                <span className="bg-rose-gold/20 text-[#7B2D26] text-xs font-bold px-3 py-1 rounded-full">
                  {checklist.filter(c => c.completed).length} of {checklist.length} Done
                </span>
              </div>

              {/* Add Task Quick Form */}
              <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-3 mb-6 bg-stone-50 p-4 rounded-2xl border border-stone-200">
                <input
                  type="text"
                  placeholder="E.g. Book DJ and live band..."
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  className="flex-grow bg-white px-4 py-2 rounded-xl text-sm border border-stone-200 focus:border-rose-gold outline-none"
                  required
                />
                <select
                  value={newTaskTime}
                  onChange={(e) => setNewTaskTime(e.target.value)}
                  className="px-3 py-2 bg-white border border-stone-200 rounded-xl text-xs font-semibold outline-none focus:border-rose-gold cursor-pointer"
                >
                  <option>6 Months Before</option>
                  <option>4 Months Before</option>
                  <option>3 Months Before</option>
                  <option>2 Months Before</option>
                  <option>1 Month Before</option>
                </select>
                <button
                  type="submit"
                  className="bg-burgundy hover:bg-stone-900 text-white font-bold px-5 py-2 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <FiPlus className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </form>

              {/* Task Items List */}
              <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2">
                {checklist.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-2xl border border-stone-150/70 hover:border-rose-gold/40 hover:bg-[#FAF9F6]/30 transition-all group"
                  >
                    <div
                      onClick={() => toggleTask(item.id)}
                      className="flex items-center space-x-3 flex-grow cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => {}} // handled by parent click
                        className="w-4.5 h-4.5 rounded text-burgundy accent-burgundy border-stone-300 focus:ring-burgundy"
                      />
                      <div className="text-left">
                        <p className={`text-sm ${item.completed ? 'line-through text-stone-400 font-normal' : 'text-stone-800 font-semibold'}`}>
                          {item.task}
                        </p>
                        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">{item.timeframe}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => deleteTask(item.id)}
                      className="p-1.5 text-stone-300 hover:text-burgundy opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      title="Delete task"
                    >
                      <FiTrash2 className="w-4.5 h-4.5" />
                    </button>
                  </div>
                ))}

                {checklist.length === 0 && (
                  <div className="text-center py-12">
                    <FiCheckCircle className="text-stone-300 w-16 h-16 mx-auto mb-3" />
                    <p className="text-stone-500 font-serif text-lg">No tasks checklist</p>
                    <p className="text-stone-400 text-xs mt-1">Add items above to start planning.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planner;
