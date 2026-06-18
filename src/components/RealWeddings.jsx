import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMapPin, FiCalendar } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const stories = [
  {
    id: 1,
    couple: 'Aditi & Rahul',
    title: 'A Grand Regal Wedding in the Pink City',
    location: 'City Palace, Jaipur',
    date: 'November 2025',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80',
    description: 'A stunning three-day celebration blending royal heritage customs with a modern pastel lavender theme.',
  },
  {
    id: 2,
    couple: 'Meera & Kabir',
    title: 'Sunkissed Vows and Sunset Celebrations',
    location: 'Taj Exotica, Goa',
    date: 'December 2025',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    description: 'A vibrant beachside wedding with a boho-chic floral mandap, barefoot sangeet, and organic coastal menus.',
  },
  {
    id: 3,
    couple: 'Pooja & Sameer',
    title: 'An Intimate Floating Palace Wedding',
    location: 'Taj Lake Palace, Udaipur',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    description: 'Surrounded by calm lake waters, this luxury micro-wedding focused on gold-embroidered details and live sitar.',
  },
  {
    id: 4,
    couple: 'Nisha & Rohan',
    title: 'Eco-Friendly Mystical Forest Vows',
    location: 'Khyber Resort, Gulmarg',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=800&q=80',
    description: 'Nestled between snow-laden pines, featuring zero-waste decor, local Kashmiri cuisine, and warm bonfire sangeet.',
  },
];

const RealWeddings = () => {
  return (
    <section id="stories-section" className="py-24 bg-[#FAF9F6] border-t border-rose-gold/15 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-rose-gold/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-radial from-champagne/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-burgundy font-semibold uppercase tracking-widest text-xs lg:text-sm">
              Real Stories
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mt-3">
              ShaadiVerse Couples
            </h2>
            <div className="h-1 w-20 bg-rose-gold mt-4 rounded-full" />
          </div>

          <p className="text-stone-500 font-light max-w-md mt-4 md:mt-0 text-sm md:text-base leading-relaxed">
            Get inspired by real couple stories, review their vendor checklist, and see how they planned their dream days.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="swiper-container-custom">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {stories.map((story) => (
              <SwiperSlide key={story.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col"
                >
                  {/* cover image */}
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                      style={{ backgroundImage: `url('${story.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* couple tag */}
                    <span className="absolute bottom-4 left-4 bg-burgundy text-[#FAF9F6] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {story.couple}
                    </span>
                  </div>

                  {/* content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-4 text-stone-500 text-xs mb-3 font-semibold">
                        <span className="flex items-center">
                          <FiMapPin className="text-rose-gold mr-1 w-3.5 h-3.5" />
                          {story.location}
                        </span>
                        <span className="flex items-center">
                          <FiCalendar className="text-rose-gold mr-1 w-3.5 h-3.5" />
                          {story.date}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-burgundy transition-colors duration-300 mb-3 leading-snug">
                        {story.title}
                      </h3>
                      <p className="text-stone-600 text-sm font-light leading-relaxed mb-6">
                        {story.description}
                      </p>
                    </div>

                    <button className="flex items-center space-x-1.5 font-bold text-xs text-[#7B2D26] hover:text-stone-900 transition-colors uppercase tracking-wider group-hover:pl-1 duration-300 cursor-pointer">
                      <span>Read Full Story</span>
                      <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination layout alignment */}
          <div className="custom-swiper-pagination flex justify-center mt-2" />
        </div>
      </div>
    </section>
  );
};

export default RealWeddings;
