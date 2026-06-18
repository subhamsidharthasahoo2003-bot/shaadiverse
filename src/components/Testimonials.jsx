import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageCircle } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsList = [
  {
    id: 1,
    name: 'Riya & Rohan',
    location: 'Udaipur Palace Wedding',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'Finding our dream venue, The Grand Ritz, through ShaadiVerse saved us weeks of negotiation. The customer support assisted with contract details, and the platform gave us exclusive discounts.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Shruti & Karan',
    location: 'Jaipur Heritage Wedding',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'The AI recommendations matched us with the perfect photographer, Shot Stories by Vivek. His style captured our palace sunset vows so beautifully, it felt straight out of a Bollywood fairytale.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anjali & Varun',
    location: 'Goa Shoreline Wedding',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'The interactive checklist tool became our planning bible. We managed vendors, food tasting sessions, and decor styles under one screen. It takes the stress away from destination weddings.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Kiara & Siddharth',
    location: 'Delhi NCR Luxury Wedding',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'High-end couturiers like Sabyasachi and bridal makeover stylists were booked effortlessly. Our guests loved the hospitality and coordination. ShaadiVerse is truly worth every rupee!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-burgundy text-[#FAF9F6] relative overflow-hidden">
      {/* Decorative gold backdrop items */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-gold-accent/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-rose-gold/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rose-gold font-semibold uppercase tracking-widest text-xs lg:text-sm">
            Couple Diaries
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Words From Happy Couples
          </h2>
          <div className="h-1 w-20 bg-gold-accent mx-auto mb-6 rounded-full" />
          <p className="text-stone-300 font-light text-sm md:text-base leading-relaxed">
            Read how other couples orchestrated their celebration milestones using ShaadiVerse tools and vendor networks.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="swiper-testimonials-container max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.testimonial-pagination' }}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="pb-16"
          >
            {testimonialsList.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="glass-card-dark bg-white/5 border-white/10 p-8 rounded-3xl h-full flex flex-col justify-between shadow-xl relative">
                  {/* Quote decoration */}
                  <FiMessageCircle className="absolute top-6 right-6 text-gold-accent/15 w-12 h-12 rotate-180" />

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <FiStar key={i} className="text-gold-accent fill-current w-4.5 h-4.5" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-stone-200 text-sm font-light leading-relaxed italic mb-8 relative z-10">
                    "{t.review}"
                  </p>

                  {/* Couple Profile Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-rose-gold shadow-md"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-white text-base">
                        {t.name}
                      </h4>
                      <p className="text-gold-accent text-xs font-semibold uppercase tracking-wider">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-pagination flex justify-center mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
