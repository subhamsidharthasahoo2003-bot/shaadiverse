import React from 'react';
import { motion } from 'framer-motion';

const Categories = ({ onSelectCategory }) => {
  const categoriesList = [
    {
      name: 'Wedding Venues',
      count: '1,840+ Properties',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Photographers',
      count: '950+ Artists',
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Makeup Artists',
      count: '1,120+ Stylists',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Wedding Planners',
      count: '430+ Agencies',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Decorators',
      count: '680+ Designers',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Mehendi Artists',
      count: '340+ Specialists',
      image: 'https://images.unsplash.com/photo-1590075865003-e48277faa558?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Caterers',
      count: '510+ Services',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Bridal Wear',
      count: '820+ Couturiers',
      image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Entertainment',
      count: '490+ Bands & DJs',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Invitation Designers',
      count: '280+ Studio Hubs',
      image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="categories-section" className="py-24 bg-[#FAF9F6] relative">
      {/* Decorative floral backgrounds */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-radial from-rose-gold/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-radial from-champagne/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-burgundy font-semibold uppercase tracking-widest text-xs lg:text-sm">
            Curated Showcase
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mt-3 mb-4">
            Browse By Wedding Category
          </h2>
          <div className="h-1 w-20 bg-rose-gold mx-auto mb-6 rounded-full" />
          <p className="text-stone-600 font-light text-sm md:text-base leading-relaxed">
            From palace grounds to artistic photography, select from our top categories to find verified professionals matched to your budget.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {categoriesList.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => {
                onSelectCategory(cat.name);
                document.getElementById('vendors-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 border border-stone-200/50"
            >
              {/* Card Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
              {/* Overlay styling (Rose gold to burgundy gradient shift on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10 transition-colors duration-500 group-hover:from-burgundy/80 group-hover:via-black/45" />

              {/* Text Info */}
              <div className="absolute inset-x-0 bottom-0 p-4 z-10 flex flex-col justify-end h-full">
                <span className="text-[10px] text-champagne uppercase font-bold tracking-widest mb-1">
                  {cat.count}
                </span>
                <h3 className="text-white font-serif text-base sm:text-lg font-bold group-hover:text-rose-gold transition-colors duration-300">
                  {cat.name}
                </h3>
                
                {/* Micro-interaction detail: line slides open on hover */}
                <div className="w-0 group-hover:w-12 h-[2px] bg-rose-gold transition-all duration-300 mt-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
