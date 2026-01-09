import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from './Icons';

const features = [
  {
    title: "Auto-Purge Mechanism",
    subtitle: "2.4% Daily Linear Burn",
    desc: "A built-in self-purification algorithm physically reduces total supply by 2.4% daily. We march inevitably towards the Golden Anchor of 21,000 tokens.",
    icon: <Icons.History className="w-6 h-6" />,
    // REPLACE WITH YOUR OWN PNG URL
    illustration: "/images/01.png", 
  },
  {
    title: "Liquidity Blackhole",
    subtitle: "5% LP Incineration",
    desc: "The protocol burns 5% of the Liquidity Pool daily. This constant pressure raises the floor price, creating a mathematical wall of value.",
    icon: <Icons.Flame className="w-6 h-6" />,
    // REPLACE WITH YOUR OWN PNG URL
    illustration: "/images/02.png", 
  },
  {
    title: "Holder Resonance",
    subtitle: "3% Static Reflection",
    desc: "Hold ≥ 21 ANU to become a consensus node. 3% of the value generated from the LP burn is reflected back to the elite holders automatically.",
    icon: <Icons.Landmark className="w-6 h-6" />,
    // REPLACE WITH YOUR OWN PNG URL
    illustration: "/images/03.png", 
  }
];

const ProtocolSections: React.FC = () => {
  return (
    <section id="protocol" className="py-24 bg-gradient-to-b from-anu-white to-anu-lightGold/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-anu-stone mb-4">
            The Art of Aggressive Deflation
          </h2>
          <p className="text-anu-stone/60 max-w-2xl mx-auto">
            Mathematical logic dictating irrefutable value growth through three core pillars.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative overflow-hidden group p-8 rounded-2xl bg-white border border-anu-gold/10 hover:border-anu-gold/40 transition-all hover:shadow-2xl`}
            >
              {/* 
                  Background Illustration Layer 
                  - Positioned top-right
                  - object-contain + w-auto + h-auto ensures it respects the PNG's natural shape
                  - max-w/max-h ensures it doesn't overwhelm the text
              */}
              <img 
                src={feature.illustration} 
                alt="" 
                className="absolute top-0 right-0 w-auto h-auto max-w-[60%] max-h-[80%] object-contain opacity-10 pointer-events-none group-hover:scale-110 group-hover:opacity-20 transition-all duration-700 origin-top-right"
              />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-anu-stone text-anu-lightGold flex items-center justify-center rounded-lg mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-anu-stone mb-1">
                  {feature.title}
                </h3>
                <div className="text-xs font-bold text-anu-darkGold uppercase tracking-wider mb-4">
                  {feature.subtitle}
                </div>
                <p className="text-anu-stone/70 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtocolSections;
