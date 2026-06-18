import React from 'react';
import InspirationGallery from '../components/InspirationGallery';

const Inspiration = () => {
  return (
    <div className="pt-28 pb-12 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Page title */}
        <div className="text-left mb-4">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mb-3">
            Event Inspiration Hub
          </h1>
          <p className="text-stone-500 font-light text-sm md:text-base">
            Explore style guides, corporate stage rigs, birthday backdrops, and wedding color schemes. Pin cards to build your custom event mood board.
          </p>
        </div>
      </div>
      
      {/* Renders the full multi-column gallery */}
      <InspirationGallery />
    </div>
  );
};

export default Inspiration;
