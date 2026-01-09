import React from 'react';
import { Icons } from './Icons';

const Values: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-anu-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-anu-lightGold/20 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-anu-stone mb-8 leading-tight">
                    Sovereignty <br/>
                    <span className="text-anu-darkGold">Without Chains</span>
                </h2>
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="mt-1">
                            <Icons.Shield className="w-8 h-8 text-anu-gold" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-anu-stone mb-2">Unshackled Consensus</h4>
                            <p className="text-anu-stone/70 leading-relaxed">
                                True consensus is never forced. At Anu, there are no lock-up periods, no vesting schedules for public buyers. Entry is a belief; exit is a choice.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1">
                            <Icons.Infinity className="w-8 h-8 text-anu-gold" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-anu-stone mb-2">Zero-Boundary Expansion</h4>
                            <p className="text-anu-stone/70 leading-relaxed">
                                We break the limits of geography and identity. A trustless network where value flows freely across borders, protected only by code.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-12 p-6 bg-anu-stone text-anu-lightGold rounded-xl border border-anu-gold/30">
                    <p className="font-serif text-lg italic text-center">
                        "Your keys, your coins, your future."
                    </p>
                </div>
            </div>

            <div className="relative h-[500px] bg-anu-stone rounded-full overflow-hidden border-4 border-anu-gold/20 shadow-2xl flex items-center justify-center">
                {/* 
                  REPLACE THE SRC BELOW WITH YOUR OWN GIF URL 
                  Example: src="/assets/my-animation.gif" or an external URL
                */}
                <img 
                  src="/2.gif" 
                  alt="Code is Law Animation" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />

                {/* Gradient overlay to ensure text remains readable over the GIF */}
                <div className="absolute inset-0 bg-gradient-to-t from-anu-stone via-anu-stone/20 to-transparent" />
                
                <div className="text-center relative z-10 p-8">
                    {/* Emoji removed, GIF acts as the illustration now */}
                    <h3 className="text-3xl font-serif font-bold text-white mb-2 drop-shadow-lg">Code is Law</h3>
                    <p className="text-anu-gold/90 uppercase tracking-widest text-sm font-semibold drop-shadow-md">Immutable • Transparent • Eternal</p>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute w-[120%] h-[120%] border border-anu-gold/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-[80%] h-[80%] border border-anu-gold/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>
        </div>
    </section>
  );
};

export default Values;