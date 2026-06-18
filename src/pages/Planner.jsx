import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSliders, FiList, FiCheckCircle, FiDollarSign, FiPlus, FiTrash2, FiAward } from 'react-icons/fi';

const defaultChecklists = {
  'Weddings & Anniversaries': [
    { id: 1, task: 'Book Venue & Guest Accommodation Rooms', completed: true, timeframe: '6 Months Before' },
    { id: 2, task: 'Hire Event Photographer & Cinematic Film Team', completed: true, timeframe: '6 Months Before' },
    { id: 3, task: 'Finalize Event Theme Decorator & Flower setups', completed: false, timeframe: '4 Months Before' },
    { id: 4, task: 'Book Makeup Artist & Stylists', completed: false, timeframe: '3 Months Before' },
    { id: 5, task: 'Finalize Catering Menu & Tastings', completed: false, timeframe: '2 Months Before' },
    { id: 6, task: 'Design & Send Digital Invitation Cards', completed: false, timeframe: '2 Months Before' },
    { id: 7, task: 'Finalize Attire (Lehengas/Sherwanis/Suits)', completed: false, timeframe: '1 Month Before' },
    { id: 8, task: 'Coordinate Choreography for Live Performances', completed: false, timeframe: '1 Month Before' },
  ],
  'Birthday Parties': [
    { id: 1, task: 'Book Party Lounge, Rooftop or Banquet Hall', completed: true, timeframe: '6 Months Before' },
    { id: 2, task: 'Arrange Premium DJ & custom sound system setup', completed: true, timeframe: '6 Months Before' },
    { id: 3, task: 'Select cake vendor & custom design multi-tier cake', completed: false, timeframe: '4 Months Before' },
    { id: 4, task: 'Plan party themes, balloon arches & photo booth', completed: false, timeframe: '3 Months Before' },
    { id: 5, task: 'Finalize buffet menus & cocktail bar selections', completed: false, timeframe: '2 Months Before' },
    { id: 6, task: 'Send invitations & manage guest RSVP list', completed: false, timeframe: '2 Months Before' },
    { id: 7, task: 'Coordinate party favor bags & custom giveaways', completed: false, timeframe: '1 Month Before' },
    { id: 8, task: 'Finalize birthday host outfit & styling details', completed: false, timeframe: '1 Month Before' },
  ],
  'Baby & Bridal Showers': [
    { id: 1, task: 'Book pastel-themed garden cafe or cozy lounge', completed: true, timeframe: '6 Months Before' },
    { id: 2, task: 'Hire pastel balloon & floral decorator', completed: true, timeframe: '6 Months Before' },
    { id: 3, task: 'Arrange fun shower games & interactive host', completed: false, timeframe: '4 Months Before' },
    { id: 4, task: 'Order custom baby/bridal themed cake & cupcakes', completed: false, timeframe: '3 Months Before' },
    { id: 5, task: 'Finalize high tea party snacks & sweets', completed: false, timeframe: '2 Months Before' },
    { id: 6, task: 'Send digital invite cards to friends', completed: false, timeframe: '2 Months Before' },
    { id: 7, task: 'Assemble premium return gift hampers', completed: false, timeframe: '1 Month Before' },
    { id: 8, task: 'Set up guest honor throne & photo backdrop', completed: false, timeframe: '1 Month Before' },
  ],
  'Graduation & Retirement': [
    { id: 1, task: 'Reserve Private Dining Room or Banquet Hall', completed: true, timeframe: '6 Months Before' },
    { id: 2, task: 'Hire professional event photographer & videographer', completed: true, timeframe: '6 Months Before' },
    { id: 3, task: 'Order tribute video creation & slide deck', completed: false, timeframe: '4 Months Before' },
    { id: 4, task: 'Design custom congratulations banner & signage', completed: false, timeframe: '3 Months Before' },
    { id: 5, task: 'Finalize dinner menu & custom drinks pairing', completed: false, timeframe: '2 Months Before' },
    { id: 6, task: 'Coordinate speeches, toasts & timeline details', completed: false, timeframe: '2 Months Before' },
    { id: 7, task: 'Prepare guest book & keepsake memory box', completed: false, timeframe: '1 Month Before' },
    { id: 8, task: 'Confirm gifts table & main awards/plaques delivery', completed: false, timeframe: '1 Month Before' },
  ],
  'Family Reunions': [
    { id: 1, task: 'Book picnic park shelter, resort or large villa', completed: true, timeframe: '6 Months Before' },
    { id: 2, task: 'Coordinate family group t-shirts & sizes', completed: true, timeframe: '6 Months Before' },
    { id: 3, task: 'Plan outdoor lawn games (Tug of War, Sack Race)', completed: false, timeframe: '4 Months Before' },
    { id: 4, task: 'Hire barbecue grill master or buffet caterer', completed: false, timeframe: '3 Months Before' },
    { id: 5, task: 'Set up family tree banner & old photos board', completed: false, timeframe: '2 Months Before' },
    { id: 6, task: 'Send email / WhatsApp invitations & RSVP list', completed: false, timeframe: '2 Months Before' },
    { id: 7, task: 'Arrange group family photography slot', completed: false, timeframe: '1 Month Before' },
    { id: 8, task: 'Prepare safety kits & outdoor camp setups', completed: false, timeframe: '1 Month Before' },
  ],
  'Festivals & Fairs': [
    { id: 1, task: 'Secure city permits, public grounds & licenses', completed: true, timeframe: '6 Months Before' },
    { id: 2, task: 'Coordinate & sign food/craft stall vendors', completed: true, timeframe: '6 Months Before' },
    { id: 3, task: 'Hire stage sound system & main live acts', completed: false, timeframe: '4 Months Before' },
    { id: 4, task: 'Set up ticket counters & entry security gates', completed: false, timeframe: '3 Months Before' },
    { id: 5, task: 'Arrange safety barricades & emergency medical desk', completed: false, timeframe: '2 Months Before' },
    { id: 6, task: 'Coordinate amusement rides & kids zone games', completed: false, timeframe: '2 Months Before' },
    { id: 7, task: 'Publish press release & local marketing flyers', completed: false, timeframe: '1 Month Before' },
    { id: 8, task: 'Recruit community volunteers & route marshals', completed: false, timeframe: '1 Month Before' },
  ],
  'Concerts & Live Shows': [
    { id: 1, task: 'Book Indoor Arena or outdoor concert grounds', completed: true, timeframe: '6 Months Before' },
    { id: 2, task: 'Sign contract with main artists & live band', completed: true, timeframe: '6 Months Before' },
    { id: 3, task: 'Set up professional stage lighting & sound rig', completed: false, timeframe: '4 Months Before' },
    { id: 4, task: 'Coordinate online ticket sales platform integrations', completed: false, timeframe: '3 Months Before' },
    { id: 5, task: 'Hire security personnel & crowd control bouncers', completed: false, timeframe: '2 Months Before' },
    { id: 6, task: 'Arrange backstage green rooms & hospitality catering', completed: false, timeframe: '2 Months Before' },
    { id: 7, task: 'Launch social media ads & billboard posters', completed: false, timeframe: '1 Month Before' },
    { id: 8, task: 'Obtain decibel permissions & safety certifications', completed: false, timeframe: '1 Month Before' },
  ],
  'Art Exhibitions & Galas': [
    { id: 1, task: 'Book Art Gallery space or luxury museum hall', completed: true, timeframe: '6 Months Before' },
    { id: 2, task: 'Curate list of featured artists & portfolios', completed: true, timeframe: '6 Months Before' },
    { id: 3, task: 'Set up custom art-focused spotlight lighting', completed: false, timeframe: '4 Months Before' },
    { id: 4, task: 'Design & print art catalog booklets & brochures', completed: false, timeframe: '3 Months Before' },
    { id: 5, task: 'Finalize fine wine & cheese catering service', completed: false, timeframe: '2 Months Before' },
    { id: 6, task: 'Send invitations to VIP collectors & journalists', completed: false, timeframe: '2 Months Before' },
    { id: 7, task: 'Secure artwork transit insurance & shipping details', completed: false, timeframe: '1 Month Before' },
    { id: 8, task: 'Install art displays & label nameplates', completed: false, timeframe: '1 Month Before' },
  ],
  'Community Parades & Carnivals': [
    { id: 1, task: 'Submit route map for city council approvals', completed: true, timeframe: '6 Months Before' },
    { id: 2, task: 'Design parade floats & security structures', completed: true, timeframe: '6 Months Before' },
    { id: 3, task: 'Hire marching band & street performance groups', completed: false, timeframe: '4 Months Before' },
    { id: 4, task: 'Coordinate parade route volunteers & marshals', completed: false, timeframe: '3 Months Before' },
    { id: 5, task: 'Set up street food truck park zone', completed: false, timeframe: '2 Months Before' },
    { id: 6, task: 'Arrange mobile restrooms & street waste cleanup', completed: false, timeframe: '2 Months Before' },
    { id: 7, task: 'Publish community flyers & local radio alerts', completed: false, timeframe: '1 Month Before' },
    { id: 8, task: 'Set up barricades at key junction points', completed: false, timeframe: '1 Month Before' },
  ]
};

const defaultAllocations = {
  'Weddings & Anniversaries': [
    { name: 'Venues & Lodging', pct: 0.45, color: 'bg-event-pink' },
    { name: 'Food & Catering', pct: 0.25, color: 'bg-event-orange' },
    { name: 'Decor & Floral Themes', pct: 0.10, color: 'bg-gold-accent' },
    { name: 'Photography & Cinema', pct: 0.10, color: 'bg-stone-500' },
    { name: 'Attire & Styling', pct: 0.05, color: 'bg-rose-gold' },
    { name: 'Planning & Hospitality', pct: 0.05, color: 'bg-champagne' },
  ],
  'Birthday Parties': [
    { name: 'Venues & Lodging', pct: 0.30, color: 'bg-event-pink' },
    { name: 'Food & Catering', pct: 0.30, color: 'bg-event-orange' },
    { name: 'Decor & Party Themes', pct: 0.15, color: 'bg-gold-accent' },
    { name: 'Entertainment & DJ', pct: 0.15, color: 'bg-stone-500' },
    { name: 'Photography & Photo booth', pct: 0.05, color: 'bg-rose-gold' },
    { name: 'Party Favors & Giveaways', pct: 0.05, color: 'bg-champagne' },
  ],
  'Baby & Bridal Showers': [
    { name: 'Venues & High Tea', pct: 0.35, color: 'bg-event-pink' },
    { name: 'Decor & Flowers', pct: 0.25, color: 'bg-event-orange' },
    { name: 'Theme Cake & Cupcakes', pct: 0.15, color: 'bg-gold-accent' },
    { name: 'Games & Hosting', pct: 0.10, color: 'bg-stone-500' },
    { name: 'Photography & Shoot', pct: 0.08, color: 'bg-rose-gold' },
    { name: 'Shower Return Hampers', pct: 0.07, color: 'bg-champagne' },
  ],
  'Graduation & Retirement': [
    { name: 'Venue & Banquet Food', pct: 0.50, color: 'bg-event-pink' },
    { name: 'AV & Speeches staging', pct: 0.15, color: 'bg-event-orange' },
    { name: 'Tributes & Awards/Plaques', pct: 0.10, color: 'bg-gold-accent' },
    { name: 'Decor & Banner signs', pct: 0.10, color: 'bg-stone-500' },
    { name: 'Event Photography', pct: 0.10, color: 'bg-rose-gold' },
    { name: 'Planning & Coordination', pct: 0.05, color: 'bg-champagne' },
  ],
  'Family Reunions': [
    { name: 'Villa/Park Lodging space', pct: 0.40, color: 'bg-event-pink' },
    { name: 'Barbecue Grill & Buffets', pct: 0.30, color: 'bg-event-orange' },
    { name: 'Family Shirts & Lawn Games', pct: 0.15, color: 'bg-gold-accent' },
    { name: 'Group Photography', pct: 0.10, color: 'bg-stone-500' },
    { name: 'Welcome Signs & Decor', pct: 0.05, color: 'bg-rose-gold' },
  ],
  'Festivals & Fairs': [
    { name: 'Public Ground Permits & Space', pct: 0.20, color: 'bg-event-pink' },
    { name: 'AV stage, Sound & Main Acts', pct: 0.35, color: 'bg-event-orange' },
    { name: 'Route marshals & Emergency', pct: 0.15, color: 'bg-gold-accent' },
    { name: 'Ticketing & PR promotions', pct: 0.15, color: 'bg-stone-500' },
    { name: 'Exhibition Stall constructions', pct: 0.15, color: 'bg-rose-gold' },
  ],
  'Concerts & Live Shows': [
    { name: 'Live Artist Contract Fees', pct: 0.40, color: 'bg-event-pink' },
    { name: 'Sound rig & stage AV lights', pct: 0.25, color: 'bg-event-orange' },
    { name: 'Arena/Concert Venue lease', pct: 0.15, color: 'bg-gold-accent' },
    { name: 'Crowd Bouncers & security', pct: 0.10, color: 'bg-stone-500' },
    { name: 'Social Ads & PR marketing', pct: 0.10, color: 'bg-rose-gold' },
  ],
  'Art Exhibitions & Galas': [
    { name: 'Gallery space rent', pct: 0.30, color: 'bg-event-pink' },
    { name: 'Spotlight installations', pct: 0.25, color: 'bg-event-orange' },
    { name: 'Art catalog printing & PR', pct: 0.15, color: 'bg-gold-accent' },
    { name: 'Wine & Cheese catering', pct: 0.15, color: 'bg-stone-500' },
    { name: 'Artwork transit insurance', pct: 0.15, color: 'bg-rose-gold' },
  ],
  'Community Parades & Carnivals': [
    { name: 'Parade Floats construction', pct: 0.35, color: 'bg-event-pink' },
    { name: 'Brass Band & street acts', pct: 0.25, color: 'bg-event-orange' },
    { name: 'Route permissions & safety', pct: 0.15, color: 'bg-gold-accent' },
    { name: 'Food Truck zones setup', pct: 0.15, color: 'bg-stone-500' },
    { name: 'Street cleaning & restrooms', pct: 0.10, color: 'bg-rose-gold' },
  ]
};

const Planner = () => {
  const [eventType, setEventType] = useState('Weddings & Anniversaries');
  const [budgetVal, setBudgetVal] = useState(2000000); // 20 Lakhs default
  const [checklist, setChecklist] = useState(defaultChecklists['Weddings & Anniversaries']);
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('2 Months Before');

  // Sync checklist when event type changes
  useEffect(() => {
    setChecklist(defaultChecklists[eventType]);
    // Set typical default budgets based on event type
    if (eventType === 'Weddings & Anniversaries') setBudgetVal(2000000);
    else if (eventType === 'Birthday Parties') setBudgetVal(300000);
    else if (eventType === 'Baby & Bridal Showers') setBudgetVal(250000);
    else if (eventType === 'Graduation & Retirement') setBudgetVal(400000);
    else if (eventType === 'Family Reunions') setBudgetVal(350000);
    else if (eventType === 'Festivals & Fairs') setBudgetVal(1500000);
    else if (eventType === 'Concerts & Live Shows') setBudgetVal(2500000);
    else if (eventType === 'Art Exhibitions & Galas') setBudgetVal(800000);
    else if (eventType === 'Community Parades & Carnivals') setBudgetVal(1200000);
  }, [eventType]);

  const allocations = defaultAllocations[eventType] || defaultAllocations['Weddings & Anniversaries'];

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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-event-pink/15 pb-6">
          <div className="text-left">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mb-3">
              Your Event Planner
            </h1>
            <p className="text-stone-500 font-light text-sm md:text-base">
              Select event type, track budget allocations, and check off checklists tailored to your celebration.
            </p>
          </div>
          
          {/* Event Selector Dropdown */}
          <div className="mt-6 md:mt-0 flex items-center space-x-3 text-left">
            <label className="text-xs uppercase font-bold text-stone-500 tracking-wider flex items-center">
              <FiAward className="mr-1.5 text-event-pink w-4 h-4" /> Planning For:
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="px-4 py-2.5 bg-white border border-stone-200 rounded-2xl text-sm font-bold text-stone-800 shadow-sm focus:border-event-pink outline-none cursor-pointer"
            >
              {Object.keys(defaultChecklists).map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Budget Planner Dashboard (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-stone-900 mb-4 flex items-center">
                <FiSliders className="mr-2 text-event-pink" /> Budget Calculator
              </h2>
              <p className="text-stone-500 text-xs mb-6">
                Slide to change total budget. Allocations update automatically using standard {eventType} benchmarks.
              </p>

              {/* Slider Control */}
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Total Limit</span>
                  <span className="text-event-pink font-extrabold text-xl">{formatCurrency(budgetVal)}</span>
                </div>
                <input
                  type="range"
                  min={eventType === 'Birthday Parties' || eventType === 'Baby & Bridal Showers' || eventType === 'Family Reunions' ? 20000 : 100000}
                  max={eventType === 'Weddings & Anniversaries' || eventType === 'Concerts & Live Shows' || eventType === 'Festivals & Fairs' ? 10000000 : 2000000}
                  step={eventType === 'Birthday Parties' || eventType === 'Baby & Bridal Showers' || eventType === 'Family Reunions' ? 5000 : 50000}
                  value={budgetVal}
                  onChange={(e) => setBudgetVal(Number(e.target.value))}
                  className="w-full accent-event-pink cursor-pointer py-2"
                />
                <div className="flex justify-between text-[9px] text-stone-400 font-bold mt-1 uppercase">
                  <span>{formatCurrency(eventType === 'Birthday Parties' || eventType === 'Baby & Bridal Showers' || eventType === 'Family Reunions' ? 20000 : 100000)}</span>
                  <span>{formatCurrency(eventType === 'Weddings & Anniversaries' || eventType === 'Concerts & Live Shows' || eventType === 'Festivals & Fairs' ? 10000000 : 2000000)} Limit</span>
                </div>
              </div>

              {/* Budget Allocations list with custom progress bars */}
              <div className="space-y-4">
                {allocations.map((alloc) => {
                  const amount = Math.floor(budgetVal * alloc.pct);
                  return (
                    <div key={alloc.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-semibold text-stone-700">
                        <span>{alloc.name} ({Math.round(alloc.pct * 100)}%)</span>
                        <span className="text-event-pink font-bold">{formatCurrency(amount)}</span>
                      </div>
                      <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${alloc.color === 'bg-event-pink' ? 'bg-event-pink' : alloc.color === 'bg-event-orange' ? 'bg-event-orange' : alloc.color} transition-all duration-500`}
                          style={{ width: `${alloc.pct * 100}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Tasks Checklist Dashboard (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
              <div className="flex justify-between items-center mb-6 border-b border-stone-100 pb-4">
                <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center">
                  <FiList className="mr-2 text-event-pink" /> Planning Checklist
                </h2>
                
                {/* Stats badge */}
                <span className="bg-event-pink/10 text-event-pink text-xs font-bold px-3 py-1 rounded-full border border-event-pink/10">
                  {checklist.filter(c => c.completed).length} of {checklist.length} Done
                </span>
              </div>

              {/* Add Task Quick Form */}
              <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-3 mb-6 bg-stone-50 p-4 rounded-2xl border border-stone-200">
                <input
                  type="text"
                  placeholder="E.g. Confirm safety approvals..."
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  className="flex-grow bg-white px-4 py-2 rounded-xl text-sm border border-stone-200 focus:border-event-pink outline-none"
                  required
                />
                <select
                  value={newTaskTime}
                  onChange={(e) => setNewTaskTime(e.target.value)}
                  className="px-3 py-2 bg-white border border-stone-200 rounded-xl text-xs font-semibold outline-none focus:border-event-pink cursor-pointer text-stone-700"
                >
                  <option>6 Months Before</option>
                  <option>4 Months Before</option>
                  <option>3 Months Before</option>
                  <option>2 Months Before</option>
                  <option>1 Month Before</option>
                </select>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-event-pink to-event-orange text-white font-bold px-5 py-2 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1 cursor-pointer hover:brightness-110"
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
                    className="flex items-center justify-between p-3 rounded-2xl border border-stone-150/70 hover:border-event-pink/40 hover:bg-[#FAF9F6]/30 transition-all group"
                  >
                    <div
                      onClick={() => toggleTask(item.id)}
                      className="flex items-center space-x-3 flex-grow cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => {}} // handled by parent click
                        className="w-4.5 h-4.5 rounded text-event-pink accent-event-pink border-stone-300 focus:ring-event-pink"
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
                      className="p-1.5 text-stone-300 hover:text-event-pink opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
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
