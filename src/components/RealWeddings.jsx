import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiMapPin, FiCalendar } from 'react-icons/fi';
import { allStories } from '../pages/Stories';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const RealEvents = () => {
  const navigate = useNavigate();

  return (
    <section id="stories-section" className="py-24 bg-[#FAF9F6] border-t border-event-pink/15 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-event-pink/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-radial from-event-orange/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-event-pink font-semibold uppercase tracking-widest text-xs lg:text-sm">
              Real Stories
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mt-3">
              EventVerse Celebrations
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-event-pink to-event-orange mt-4 rounded-full" />
          </div>

          <div className="flex flex-col items-start md:items-end mt-4 md:mt-0 space-y-3">
            <p className="text-stone-500 font-light max-w-md text-sm md:text-base leading-relaxed text-left md:text-right">
              Get inspired by real event stories, review their vendor checklists, and see how they planned their dream celebration milestones.
            </p>
            <button
              onClick={() => navigate('/stories')}
              className="text-xs font-bold text-event-pink hover:text-event-orange transition-colors flex items-center space-x-1 uppercase tracking-wider cursor-pointer"
            >
              <span>View All Stories</span>
              <FiArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
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
            {allStories.map((story) => (
              <SwiperSlide key={story.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between"
                >
                  {/* cover image */}
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                      style={{ backgroundImage: `url('${story.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* couple tag */}
                    <span className="absolute bottom-4 left-4 bg-gradient-to-r from-event-pink to-event-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {story.couple}
                    </span>
                  </div>

                  {/* content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-4 text-stone-500 text-xs mb-3 font-semibold">
                        <span className="flex items-center">
                          <FiMapPin className="text-event-pink mr-1 w-3.5 h-3.5" />
                          {story.location}
                        </span>
                        <span className="flex items-center">
                          <FiCalendar className="text-event-pink mr-1 w-3.5 h-3.5" />
                          {story.date}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-event-pink transition-colors duration-300 mb-3 leading-snug">
                        {story.title}
                      </h3>
                      <p className="text-stone-600 text-sm font-light leading-relaxed mb-6">
                        {story.description}
                      </p>
                    </div>

                    <button
                      onClick={() => navigate('/stories')}
                      className="flex items-center space-x-1.5 font-bold text-xs text-event-pink hover:text-event-orange transition-colors uppercase tracking-wider group-hover:pl-1 duration-300 cursor-pointer mt-auto"
                    >
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

export default RealEvents;
