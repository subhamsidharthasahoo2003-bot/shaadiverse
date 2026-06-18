import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBookmark, FiHeart, FiShare2, FiGrid, FiSmile } from 'react-icons/fi';

const galleryItems = [
  {
    id: 1,
    title: 'Royalty Wedding Portrait',
    tag: 'Attire',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 2,
    title: 'Marigold Palace Decor',
    tag: 'Stage Decor',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80',
    aspect: 'aspect-[3/2]',
  },
  {
    id: 3,
    title: 'Floral Detail Arrangement',
    tag: 'Table Setup',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 4,
    title: 'Corporate Dinner Layout',
    tag: 'Table Setup',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 5,
    title: 'Glasshouse Glow Canopy',
    tag: 'Lighting',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 6,
    title: 'Futuristic Tech Projection',
    tag: 'Lighting',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 7,
    title: 'Gatsby Gold Centerpiece',
    tag: 'Stage Decor',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 8,
    title: 'Classic Party Sherwani',
    tag: 'Attire',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=600&q=80',
    aspect: 'aspect-[3/2]',
  },
  {
    id: 9,
    title: 'Festival Street Food Park',
    tag: 'Table Setup',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 10,
    title: 'Neon Concert Laser Show',
    tag: 'Lighting',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 11,
    title: 'Modern Art Vernissage Gallery',
    tag: 'Stage Decor',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80',
    aspect: 'aspect-[3/2]',
  },
  {
    id: 12,
    title: 'Graduation Convocation Attire',
    tag: 'Attire',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80',
    aspect: 'aspect-[4/5]',
  },
];

const InspirationGallery = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [savedItems, setSavedItems] = useState([]);
  const [sharingItem, setSharingItem] = useState(null);

  const tags = ['All', 'Attire', 'Stage Decor', 'Table Setup', 'Lighting'];

  const toggleSave = (id) => {
    if (savedItems.includes(id)) {
      setSavedItems(savedItems.filter(item => item !== id));
    } else {
      setSavedItems([...savedItems, id]);
    }
  };

  const handleShare = (title) => {
    setSharingItem(title);
    setTimeout(() => {
      setSharingItem(null);
    }, 2000);
  };

  const filteredItems = galleryItems.filter(item => {
    if (selectedTag === 'All') return true;
    return item.tag === selectedTag;
  });

  return (
    <section id="gallery-section" className="py-24 bg-[#FAF9F6] border-t border-event-pink/15 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-event-pink font-semibold uppercase tracking-widest text-xs lg:text-sm">
            Pinterest Board Look
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mt-3 mb-4">
            Event Inspiration Gallery
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-event-pink to-event-orange mx-auto mb-6 rounded-full" />
          <p className="text-stone-600 font-light text-sm md:text-base leading-relaxed">
            Curate and pin your favorite styles. Tap save to add attire styling, table setups, and stage layouts directly to your mood board.
          </p>
        </div>

        {/* Gallery Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                selectedTag === tag
                  ? 'bg-gradient-to-r from-event-pink to-event-orange text-white shadow-lg'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-event-pink hover:text-event-pink'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Share Feedback Toast Overlay */}
        <AnimatePresence>
          {sharingItem && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 left-6 z-50 bg-stone-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-2 border border-white/10"
            >
              <FiShare2 className="text-event-pink animate-bounce" />
              <span>Link to "{sharingItem}" copied to clipboard!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Masonry Layout using Tailwind multi-column */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          {filteredItems.map((item) => {
            const isSaved = savedItems.includes(item.id);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`break-inside-avoid mb-6 relative group rounded-3xl overflow-hidden cursor-zoom-in border border-stone-200/40 bg-white ${item.aspect}`}
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Overlays on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white" />

                {/* Save button and Share buttons (Top bar, hover view) */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="bg-white/25 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(item.title);
                      }}
                      className="p-2 bg-white/20 backdrop-blur-md hover:bg-white hover:text-event-pink rounded-full transition-colors duration-300 text-white cursor-pointer"
                      title="Share Pin"
                    >
                      <FiShare2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSave(item.id);
                      }}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-1 shadow-md cursor-pointer ${
                        isSaved
                          ? 'bg-event-pink text-white'
                          : 'bg-white text-stone-900 hover:bg-event-orange hover:text-white'
                      }`}
                    >
                      <FiBookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                      <span>{isSaved ? 'Saved' : 'Save'}</span>
                    </button>
                  </div>
                </div>

                {/* Bottom title info (hover view) */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <h3 className="font-serif text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-champagne text-[11px] font-medium tracking-wide mt-1 uppercase">
                    EventVerse Mood Board
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InspirationGallery;
