import React from 'react';
import { motion } from 'framer-motion';
import { ROADMAP_DATA } from '../constants';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-anu-stone relative overflow-hidden">
      {/* Decorative dividers */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-anu-gold/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-anu-gold/40 to-transparent" />
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-anu-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-anu-gold to-anu-lightGold drop-shadow-sm"
          >
            The Prophecy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-anu-sand/80 text-lg font-light tracking-wide max-w-2xl mx-auto"
          >
            The timeline of reclaiming financial sovereignty.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[17px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-anu-gold/30 to-transparent md:-ml-px" />

          <div className="space-y-16">
            {ROADMAP_DATA.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className={`flex-1 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                   <h3 className="text-anu-gold font-serif text-2xl font-bold tracking-widest mb-2 drop-shadow-md">{item.phase}</h3>
                   <h4 className="text-white text-xl font-bold mb-3 tracking-wide">{item.title}</h4>
                   <p className="text-gray-300 text-base leading-relaxed font-light">{item.description}</p>
                </div>

                {/* Center Marker */}
                <div className="absolute left-0 top-0 md:static md:top-auto md:left-auto flex items-start justify-center flex-shrink-0 w-9 h-9 md:w-auto md:h-auto">
                  <div className="w-9 h-9 md:w-4 md:h-4 rounded-full bg-anu-stone border-2 border-anu-gold flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(212,175,55,0.6)] md:mt-2">
                    <div className="w-3 h-3 md:w-1.5 md:h-1.5 bg-anu-gold rounded-full" />
                  </div>
                </div>

                {/* Empty Side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;