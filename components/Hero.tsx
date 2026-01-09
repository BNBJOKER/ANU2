import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-anu-white">
      {/* Background GIF Layer */}
      <div className="absolute inset-0 z-0">
        {/* 
           REPLACE THE SRC BELOW WITH YOUR OWN GIF URL 
           The 'object-cover' class ensures it automatically adapts to screen size 
           while covering the entire background.
        */}
        <img 
          src="/1.gif" 
          alt="Hero Background Animation" 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay to ensure text readability. Adjust 'bg-anu-white/85' to change opacity. */}
        <div className="absolute inset-0 bg-anu-white/85 backdrop-blur-[1px]" />
        
        {/* Gradient fade at the bottom for smooth transition to the dashboard */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-anu-white to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-anu-darkGold font-serif tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
            A Coded Coordinate of Civilization
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-6xl md:text-9xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-anu-darkGold to-anu-stone mb-6"
        >
          200,913
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl leading-relaxed text-anu-stone/80 max-w-2xl mx-auto font-light">
            On January 3, 2009, Satoshi Nakamoto mined the genesis block. 
            <strong className="text-anu-darkGold"> 200,913</strong> is not just a number. 
            It is the timestamp of humanity breaking the chains of traditional finance.
          </p>
          
          <div className="h-px w-24 bg-anu-gold/50 mx-auto my-8" />

          <p className="text-md font-serif text-anu-stone">
            ANU PROTOCOL <span className="mx-2">•</span> REFORGING THE ORDER
          </p>

          <div className="pt-8 flex justify-center gap-4">
            <button className="px-8 py-3 bg-anu-stone text-anu-lightGold font-serif uppercase tracking-widest text-sm hover:bg-anu-stone/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Join Consensus
            </button>
            <button className="px-8 py-3 border border-anu-stone/20 text-anu-stone font-serif uppercase tracking-widest text-sm hover:border-anu-gold hover:text-anu-darkGold transition-all">
              Whitepaper
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;