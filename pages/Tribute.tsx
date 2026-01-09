import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scroll } from 'lucide-react';

const Tribute: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 relative overflow-hidden selection:bg-myth-gold selection:text-black">
        
        <div className="container mx-auto px-6 relative z-10">
            <Link to="/" className="inline-flex items-center text-myth-gold hover:text-white mb-12 transition-colors text-xs font-inscription uppercase tracking-[0.2em]">
                <ArrowLeft size={14} className="mr-3" /> Return to Genesis
            </Link>

            <Reveal>
                <div className="border border-myth-gold/30 bg-myth-dark/80 backdrop-blur-xl p-8 md:p-16 relative overflow-hidden shadow-2xl max-w-4xl mx-auto">
                    {/* Tablet Decorations */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-myth-gold/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-myth-gold/40 to-transparent" />

                    {/* Header */}
                    <div className="flex items-center justify-between mb-12 border-b border-myth-gold/10 pb-6">
                        <div className="flex items-center gap-4">
                            <Scroll className="text-myth-gold" size={24} />
                            <span className="text-myth-gold/60 text-sm font-inscription tracking-widest uppercase">The Sacred Archive</span>
                        </div>
                        <div className="flex gap-3 opacity-50">
                             <div className="w-2 h-2 rotate-45 bg-myth-gold" />
                             <div className="w-2 h-2 rotate-45 bg-myth-gold" />
                             <div className="w-2 h-2 rotate-45 bg-myth-gold" />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-10 text-white tracking-tight drop-shadow-md">
                        2009.01.03
                    </h1>
                    
                    <div className="space-y-8 text-lg font-serif leading-loose text-gray-300">
                        <div className="border-l-2 border-myth-gold/40 pl-6 py-2">
                            <p className="text-myth-gold font-inscription text-sm mb-2 opacity-80 uppercase tracking-widest">Inscription I</p>
                            <p className="italic">
                                On January 3, 2009, on a small server in Helsinki, Satoshi Nakamoto compiled the first version of the client.
                            </p>
                        </div>
                        
                        <div className="p-8 bg-myth-gold/5 border border-myth-gold/10 my-10 text-center relative">
                            <span className="text-4xl absolute top-4 left-4 text-myth-gold/20 font-display">"</span>
                            <p className="text-xl text-white font-display uppercase tracking-wide">
                                The Times 03/Jan/2009 Chancellor on brink of second bailout for banks
                            </p>
                            <span className="text-4xl absolute bottom-4 right-4 text-myth-gold/20 font-display">"</span>
                        </div>

                        <p className="text-gray-400">
                            The establishment of the Genesis Block established a cryptographic proof for a new financial order. It was the spark in the dark.
                        </p>

                        <div className="py-8 text-center border-t border-b border-myth-gold/10 my-8">
                            <p className="text-myth-gold text-3xl font-display mb-2">
                                200,913
                            </p>
                            <p className="text-gray-500 text-xs font-inscription uppercase tracking-[0.3em]">
                                The Coordinate Locked in Time
                            </p>
                        </div>
                        
                        <p className="text-gray-400 text-center italic">
                            Anu Protocol pays homage to this history not just in name, but in mechanism. We return to code. We return to math. We return to the extreme scarcity that made genesis possible.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 flex flex-col items-center gap-4 opacity-60">
                        <div className="text-[10px] text-myth-gold font-mono break-all text-center tracking-wider">
                            GENESIS_HASH: 000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
                        </div>
                        <div className="w-16 h-[1px] bg-myth-gold" />
                    </div>
                </div>
            </Reveal>
        </div>
    </div>
  );
};

export default Tribute;