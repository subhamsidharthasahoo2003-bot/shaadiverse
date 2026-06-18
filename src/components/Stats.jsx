import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCounter = ({ value, suffix, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    // determine duration and step
    const duration = 2000;
    const increment = end / (duration / 16); // 60fps
    
    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay }}
        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-champagne mb-2 flex items-center"
      >
        <span>{count}</span>
        <span className="text-event-orange ml-1">{suffix}</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="text-xs md:text-sm text-stone-300 uppercase tracking-widest font-semibold"
      >
        {label}
      </motion.p>
    </div>
  );
};

const Stats = () => {
  const statsList = [
    { value: '50', suffix: 'K+', label: 'Verified Vendors' },
    { value: '100', suffix: 'K+', label: 'Events Planned' },
    { value: '5', suffix: 'M+', label: 'Inspiration Ideas' },
    { value: '1', suffix: 'M+', label: 'Happy Clients' },
  ];

  return (
    <section className="relative py-20 bg-stone-950 overflow-hidden border-y border-event-pink/10">
      {/* Subtle pink and orange glow overlay */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-event-pink/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-radial from-event-orange/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="glass-card-dark bg-white/5 border-white/10 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 lg:p-12 shadow-2xl">
          {statsList.map((stat, idx) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={idx * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
