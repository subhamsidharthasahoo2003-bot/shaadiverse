import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiCalendar, FiX, FiArrowRight, FiBookOpen } from 'react-icons/fi';

const allStories = [
  {
    id: 1,
    couple: 'Aditi & Rahul',
    title: 'A Grand Regal Wedding in the Pink City',
    location: 'City Palace, Jaipur',
    date: 'November 2025',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80',
    description: 'A stunning three-day celebration blending royal heritage customs with a modern pastel lavender theme.',
    detailedText: 'Aditi and Rahul wanted their wedding to feel regal yet intimate. Opting for the historic City Palace in Jaipur, they hosted 400 guests over 3 days of events. The decor featured hundreds of meters of lavender drapes and imported roses, contrasting beautifully with the pink sandstone walls. The groom arrived on a vintage carriage, and the mandap was situated in the inner courtyard under a canopy of stars. Aditi wore a custom hand-woven maroon lehenga that took 6 months to construct.',
    vendors: ['Venue: City Palace', 'Planner: Royal Elegance Events', 'Photography: Shot Stories by Vivek', 'Makeup: Glamour by Tanvi'],
  },
  {
    id: 2,
    couple: 'Meera & Kabir',
    title: 'Sunkissed Vows and Sunset Beach Celebrations',
    location: 'Taj Exotica, Goa',
    date: 'December 2025',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    description: 'A vibrant beachside wedding with a boho-chic floral mandap, barefoot sangeet, and organic coastal menus.',
    detailedText: 'Meera and Kabir chose the beaches of Goa for their destination wedding. Embracing a boho-chic aesthetic, the centerpiece was a beachside circular mandap covered in pampas grass and white orchids. Guests were given custom straw hats and hand fans. The highlight was the barefoot sangeet night where local acoustic bands played till dawn. The menu featured organic coastal seafood, custom cocktails named after the couple’s pets, and coconut pudding.',
    vendors: ['Venue: Taj Exotica Beach Resort', 'Decor: Vows & Whispers Decor', 'Planner: Beachside Vows India', 'Catering: Gourmet Goa Co.'],
  },
  {
    id: 3,
    couple: 'Pooja & Sameer',
    title: 'An Intimate Floating Palace Wedding',
    location: 'Taj Lake Palace, Udaipur',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    description: 'Surrounded by calm lake waters, this luxury micro-wedding focused on gold-embroidered details and live sitar.',
    detailedText: 'Pooja and Sameer opted for a micro-wedding of just 50 guests at the Taj Lake Palace in Udaipur. To emphasize intimacy, they organized a single long banquet table covered in white candles and custom name cards. The ceremony took place on the floating deck, with a minimal glass mandap reflecting the lake waters. Sitarists and tabla players played ragas in the background, creating a deeply spiritual atmosphere.',
    vendors: ['Venue: Taj Lake Palace Udaipur', 'Photography: Cinematic Vows Media', 'Designer: Sabyasachi Bridal', 'Planner: Elite Events Udaipur'],
  },
  {
    id: 4,
    couple: 'Nisha & Rohan',
    title: 'Eco-Friendly Mystical Forest Vows',
    location: 'Khyber Resort, Gulmarg',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=800&q=80',
    description: 'Nestled between snow-laden pines, featuring zero-waste decor, local Kashmiri cuisine, and warm bonfire sangeet.',
    detailedText: 'Nisha and Rohan desired a winter forest wedding with a strong eco-conscious theme. Opting for the snowy meadows of Gulmarg, they used entirely reusable pinecone and branch decorations, avoiding cut flowers. Guests stayed in wood log cabins and were treated to traditional Kashmiri Wazwan banquets. In place of loud speakers, they hired local folk sitar performers, ending the night with stories around roaring fireplaces.',
    vendors: ['Venue: Khyber Resort Gulmarg', 'Decorator: EcoDecor India', 'Photography: Shot Stories by Vivek', 'Catering: Kashmiri Table'],
  },
];

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6] min-h-screen text-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <div className="text-left mb-12 border-b border-rose-gold/15 pb-6">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mb-3">
            Real Wedding Stories
          </h1>
          <p className="text-stone-500 font-light text-sm md:text-base">
            Get an inside look at how real couples planned their luxury weddings, from vendor choices to decor themes.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {allStories.map((story) => (
            <div
              key={story.id}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row"
            >
              {/* Cover Photo */}
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${story.image}')` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute bottom-4 left-4 bg-burgundy text-[#FAF9F6] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {story.couple}
                </span>
              </div>

              {/* Story Details Card */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-stone-400 text-[10px] font-semibold uppercase tracking-wider mb-2">
                    <span className="flex items-center"><FiMapPin className="text-rose-gold mr-1" /> {story.location}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-burgundy transition-colors duration-300 leading-snug mb-3">
                    {story.title}
                  </h3>
                  <p className="text-stone-600 text-xs font-light leading-relaxed mb-6">
                    {story.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedStory(story)}
                  className="flex items-center space-x-2 text-xs font-bold text-burgundy hover:text-stone-900 transition-colors uppercase tracking-wider group-hover:pl-1 duration-300 mt-auto cursor-pointer"
                >
                  <FiBookOpen />
                  <span>Read Article</span>
                  <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Story Modal Dialog */}
      <AnimatePresence>
        {selectedStory && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStory(null)}
              className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="fixed inset-6 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full max-w-2xl bg-[#FAF9F6] rounded-3xl shadow-2xl overflow-y-auto max-h-[85vh] z-[60] border border-rose-gold/30 text-stone-800"
            >
              {/* Cover Banner */}
              <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('${selectedStory.image}')` }}>
                <div className="absolute inset-0 bg-black/55 flex flex-col justify-end p-6 text-white text-left">
                  <span className="bg-[#FAF9F6]/20 backdrop-blur-md border border-white/20 text-xs font-bold px-3 py-1 rounded-full w-max mb-2 uppercase">
                    {selectedStory.couple}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                    {selectedStory.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 text-left space-y-6">
                <div className="flex items-center space-x-4 text-xs font-semibold text-stone-500 border-b border-stone-150 pb-4">
                  <span className="flex items-center"><FiMapPin className="text-rose-gold mr-1" /> {selectedStory.location}</span>
                  <span className="flex items-center"><FiCalendar className="text-rose-gold mr-1" /> {selectedStory.date}</span>
                </div>

                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-bold text-stone-800">Wedding Journey Overview</h4>
                  <p className="text-stone-600 text-sm font-light leading-relaxed">
                    {selectedStory.detailedText}
                  </p>
                </div>

                <div className="bg-rose-gold/10 border border-rose-gold/20 p-5 rounded-2xl space-y-3">
                  <h4 className="font-serif text-sm font-bold text-burgundy uppercase tracking-wider">Vendor Directory Used</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-stone-700">
                    {selectedStory.vendors.map((vendor, idx) => (
                      <li key={idx} className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                        <span>{vendor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Stories;
export { allStories };
