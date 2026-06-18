import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const CTABanner = ({ onGetStarted }) => {
  return (
    <section id="cta-section" className="relative py-28 overflow-hidden bg-stone-900">
      {/* Background Image with Dark Vignette */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-transform duration-1000 hover:scale-103"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-event-pink/35 z-10" />

      {/* Floating Sparkle Elements */}
      <div className="absolute top-10 right-1/4 z-20 text-event-orange opacity-30 animate-pulse">
        <HiSparkles className="w-12 h-12" />
      </div>
      <div className="absolute bottom-10 left-10 z-20 text-event-pink opacity-20">
        <HiSparkles className="w-8 h-8" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-event-orange font-bold uppercase tracking-[0.2em] text-xs lg:text-sm mb-4 block">
            Begin Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Shape Your Dream <br />
            <span className="italic bg-gradient-to-r from-event-pink to-event-orange bg-clip-text text-transparent font-normal">
              Celebration Milestones
            </span>
          </h2>
          <p className="text-stone-300 font-light text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Create an account, map your budget, and book your customized vendor package today. Join over 100K+ hosts who planned their custom celebrations and events with us.
          </p>

          <button
            onClick={onGetStarted}
            className="group px-8 py-4 bg-gradient-to-r from-event-pink to-event-orange hover:brightness-110 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2.5 mx-auto cursor-pointer"
          >
            <span>Get Started Now</span>
            <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
