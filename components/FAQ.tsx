import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../constants';
import { Icons } from './Icons';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-anu-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-anu-stone mb-4">
            Scrolls of Wisdom
          </h2>
          <p className="text-anu-stone/60">Frequently Asked Questions</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <div key={idx} className="border border-anu-gold/20 rounded-lg overflow-hidden bg-white hover:border-anu-gold/50 transition-colors">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div>
                  <span className="text-xs font-bold text-anu-gold uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <span className="text-lg font-serif font-semibold text-anu-stone">
                    {item.question}
                  </span>
                </div>
                <div className={`transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <Icons.ChevronDown className="text-anu-gold" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-anu-stone/80 leading-relaxed border-t border-dashed border-anu-stone/10 mt-2">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;