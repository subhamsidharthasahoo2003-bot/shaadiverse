import React from 'react';

const QuickCategories = ({ onSelectCategory }) => {
  const list = [
    { name: 'Event Venues', img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=150&h=150&q=80' },
    { name: 'Photographers', img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=150&h=150&q=80' },
    { name: 'Makeup Artists', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150&q=80' },
    { name: 'Event Planners', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=150&h=150&q=80' },
    { name: 'Decorators', img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=150&h=150&q=80' },
    { name: 'Entertainment & DJs', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=150&h=150&q=80' },
    { name: 'Caterers', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=150&h=150&q=80' },
    { name: 'Formal & Party Wear', img: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=150&h=150&q=80' },
    { name: 'Invitation Designers', img: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=150&h=150&q=80' }
  ];

  return (
    <div className="bg-white py-6 border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center space-x-6 overflow-x-auto no-scrollbar py-2 justify-start md:justify-center">
          {list.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                onSelectCategory(item.name);
                const element = document.getElementById('vendors-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex flex-col items-center space-y-2 group flex-shrink-0 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-stone-200 group-hover:border-event-pink transition-all duration-300 shadow-sm group-hover:scale-105">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-[11px] font-bold text-stone-600 group-hover:text-event-pink transition-colors">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickCategories;
