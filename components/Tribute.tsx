import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from './Icons';

interface TributeProps {
  onBack: () => void;
}

const Tribute: React.FC<TributeProps> = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 px-6 bg-anu-stone text-anu-white"
    >
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-anu-gold hover:text-white transition-colors uppercase text-xs tracking-widest font-bold"
        >
          <Icons.ChevronDown className="rotate-90" /> Return to Protocol
        </button>

        <div className="border border-anu-gold/30 p-8 md:p-12 relative overflow-hidden rounded-sm">
          {/* Background Code Texture */}
          <div className="absolute inset-0 opacity-5 font-mono text-xs overflow-hidden select-none pointer-events-none break-all p-4">
            000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
            000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
            The Times 03/Jan/2009 Chancellor on brink of second bailout for banks
            000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Icons.Clock className="text-anu-gold" />
              <span className="font-mono text-anu-gold">2009-01-03 18:15:05 UTC</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-anu-gold">
              The Genesis
            </h1>

            <p className="text-lg leading-loose text-gray-300 font-light mb-8">
              In a small server in Helsinki, Satoshi Nakamoto mined Block #0. 
              The Coinbase parameter contained the text:
            </p>

            <blockquote className="border-l-4 border-anu-gold pl-6 py-2 my-8 italic text-2xl font-serif text-anu-lightGold">
              "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"
            </blockquote>

            <p className="text-lg leading-loose text-gray-300 font-light mb-8">
              This was not just a timestamp; it was a political statement. It marked the failure of the centralized trust model.
            </p>

            <div className="h-px bg-anu-gold/30 my-8" />

            <h3 className="text-2xl font-serif font-bold text-anu-gold mb-4">Why 200,913?</h3>
            <p className="text-gray-400 mb-4">
              We anchor our protocol to this date (2009/1/3) as a permanent tribute.
            </p>
            <p className="text-gray-400">
              Anu Protocol is the spiritual successor to this ideology. We enforce scarcity not through difficulty adjustment, but through <span className="text-white font-bold">Absolute Deflation</span>. We are completing the unfinished symphony of value storage.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tribute;