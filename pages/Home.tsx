import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Lock, Globe, Database, ChevronDown, Flame, ChevronRight, ChevronUp, Scroll, Landmark, Eye } from 'lucide-react';
import Reveal from '../components/Reveal';
import Dashboard from '../components/Dashboard';
import { FAQ_DATA, ROADMAP_DATA } from '../constants';

const Home: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. Hero Section: The Temple Gateway */}
      {/* Removed strict bg color to let GIF show through */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-radial-fade opacity-80" />
        
        {/* Golden Sun / Halo Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-myth-gold/5 rounded-full blur-[100px] pointer-events-none animate-pulse-gold" />

        <div className="container mx-auto px-6 relative z-10 text-center">
            <Reveal>
                <div className="inline-block mb-6">
                    <span className="text-myth-gold font-inscription text-sm tracking-[0.3em] uppercase border-b border-myth-gold/30 pb-2">
                        The Sacred Protocol
                    </span>
                </div>
            </Reveal>

            <Reveal delay={0.1}>
                <h1 className="text-6xl md:text-9xl font-display font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-glow-strong mb-6 leading-tight">
                    200,913
                </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
                <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-300 font-serif italic mb-12 leading-relaxed opacity-90">
                    "On Jan 3, 2009, the Genesis was inscribed.<br/>
                    <strong className="text-myth-gold font-normal">200,913</strong> is the key to sovereignty."
                </p>
            </Reveal>

            <Reveal delay={0.4}>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <button 
                        onClick={() => document.getElementById('protocol')?.scrollIntoView({behavior: 'smooth'})} 
                        className="group relative px-10 py-4 bg-myth-gold text-myth-dark font-display font-bold uppercase tracking-widest overflow-hidden hover:shadow-glow transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="relative flex items-center gap-2">
                            Enter The Temple <ChevronRight size={16} />
                        </span>
                    </button>
                    
                    <button 
                        onClick={() => document.getElementById('faq')?.scrollIntoView({behavior: 'smooth'})} 
                        className="group px-10 py-4 border border-myth-gold/40 text-myth-gold font-display uppercase tracking-widest hover:bg-myth-gold/10 transition-all duration-500 backdrop-blur-sm"
                    >
                        Seek Wisdom
                    </button>
                </div>
            </Reveal>
        </div>
        
        <motion.div 
            animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }} 
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-myth-gold"
        >
            <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* 2. The Oracle (Dashboard) */}
      <Dashboard />

      {/* 3. The Protocol - Three Pillars */}
      {/* Used semi-transparent background to blend with blue */}
      <section id="protocol" className="py-32 relative bg-myth-stone/60 backdrop-blur-md">
        <div className="container mx-auto px-6 relative z-10">
            <Reveal>
                <div className="text-center mb-20">
                    <Eye size={40} className="text-myth-gold mx-auto mb-4 opacity-80" />
                    <h2 className="text-4xl md:text-5xl font-display text-white uppercase tracking-wider mb-4">
                        The Three Pillars
                    </h2>
                    <p className="font-serif text-gray-400 italic">The immutable laws written in code</p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: "The Great Burn",
                        rate: "2.4%",
                        desc: "Daily sacrifice of supply. As the sands of time fall, scarcity rises.",
                        icon: Flame
                    },
                    {
                        title: "The Golden Pool",
                        rate: "5.0%",
                        desc: "Liquidity forever consecrated to the void, raising the foundation.",
                        icon: Landmark
                    },
                    {
                        title: "The Believer's Tithe",
                        rate: "3.0%",
                        desc: "Rewards for those who hold the sacred number 21.",
                        icon: Zap
                    }
                ].map((item, index) => (
                    <Reveal delay={index * 0.2} key={index}>
                        <div className="group relative h-full bg-myth-dark/60 backdrop-blur-sm border border-myth-gold/20 p-10 hover:border-myth-gold/60 transition-all duration-700">
                            {/* Decorative Top Border */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-myth-gold/0 group-hover:bg-myth-gold/50 transition-colors duration-700" />
                            
                            <div className="mb-8 flex justify-center">
                                <div className="p-4 rounded-full border border-myth-gold/30 text-myth-gold bg-myth-gold/5 group-hover:scale-110 transition-transform duration-500 shadow-glow">
                                    <item.icon size={32} strokeWidth={1} />
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-display text-center text-white mb-2">{item.title}</h3>
                            <div className="text-5xl font-display text-center text-myth-gold mb-6 text-shadow-glow">
                                {item.rate}
                            </div>
                            <p className="text-gray-400 text-center font-serif text-lg leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* 4. Core Value - The Text */}
      <section className="py-32 bg-myth-dark/70 backdrop-blur-sm border-y border-myth-gold/10 relative overflow-hidden">
        {/* Hieroglyph-like background text */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
            <div className="text-[200px] font-display text-white whitespace-nowrap">
                FREEDOM CONSENSUS CODE TRUTH
            </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-20">
                <div className="flex-1">
                    <Reveal>
                        <h2 className="text-4xl md:text-6xl font-display mb-10 leading-tight">
                            FINANCIAL<br/>
                            <span className="text-gold-gradient">SOVEREIGNTY</span>
                        </h2>
                        
                        <div className="space-y-10">
                            {[
                                { title: "Unshackled Consensus", subtitle: "PERMISSIONLESS", desc: "No chains bind you. Entry is by will, exit is by choice." },
                                { title: "Borderless Kingdom", subtitle: "GLOBAL", desc: "The protocol knows no king, no border, no land." },
                                { title: "True Ownership", subtitle: "CUSTODY", desc: "Your wealth, inscribed on the ledger, yours alone." }
                            ].map((val, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="mt-1 text-myth-gold/50 group-hover:text-myth-gold transition-colors">
                                        <Shield size={28} strokeWidth={1} />
                                    </div>
                                    <div>
                                        <div className="flex items-baseline gap-4 mb-2">
                                            <h4 className="font-display text-white text-xl tracking-wide">{val.title}</h4>
                                            <span className="text-[10px] font-inscription text-myth-gold/50 uppercase tracking-[0.2em]">{val.subtitle}</span>
                                        </div>
                                        <p className="text-lg text-gray-500 font-serif border-l-2 border-myth-gold/10 pl-6 group-hover:border-myth-gold transition-colors italic">
                                            {val.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
                <div className="flex-1 flex justify-center relative">
                    <Reveal delay={0.3}>
                         {/* Abstract Artifact */}
                        <div className="relative w-96 h-96">
                            <div className="absolute inset-0 border border-myth-gold/20 rotate-45" />
                            <div className="absolute inset-8 border border-myth-gold/40 rotate-12" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Lock size={80} className="text-myth-gold drop-shadow-glow" />
                            </div>
                            
                            {/* Orbiting Elements */}
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-dashed border-myth-gold/20"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Ecosystem & Roadmap */}
      <section id="roadmap" className="py-32 bg-myth-stone/70 backdrop-blur-md relative">
        <div className="container mx-auto px-6">
            <Reveal>
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-myth-gold/20 pb-8">
                    <h2 className="text-4xl md:text-5xl font-display uppercase text-white">The Prophecy</h2>
                    <p className="font-inscription text-sm text-myth-gold tracking-[0.2em] mt-4 md:mt-0">THE PATH FORWARD</p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Ancient Scroll - Access */}
                <div className="col-span-1 md:col-span-7 bg-myth-dark/60 backdrop-blur-sm border border-myth-gold/20 p-10 relative overflow-hidden group hover:border-myth-gold/40 transition-colors">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity"><Globe size={180} strokeWidth={0.5} /></div>
                    <div className="relative z-10">
                        <div className="text-myth-gold font-inscription text-xs mb-4 uppercase tracking-widest">Divine Right</div>
                        <h3 className="text-3xl font-display text-white mb-6">Genesis Equity</h3>
                        <p className="text-gray-400 font-serif text-lg leading-relaxed max-w-lg">
                            To hold ANU is to hold a shard of the foundation. The future artifacts (DApps) shall be bestowed upon the faithful holders.
                        </p>
                    </div>
                </div>

                 {/* Infrastructure */}
                 <div className="col-span-1 md:col-span-5 bg-gradient-to-br from-myth-gold/10 to-myth-dark/60 backdrop-blur-sm border border-myth-gold/20 p-10 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 text-myth-gold/5"><Landmark size={200} /></div>
                    <h3 className="text-2xl font-display text-white mb-4">The Foundation</h3>
                    <p className="text-gray-300 font-serif text-lg">
                        We build the stone roads (infrastructure) upon which the new world shall trade.
                    </p>
                </div>

                {/* Timeline Tiles */}
                {ROADMAP_DATA.map((item, index) => (
                    <div key={index} className="col-span-1 md:col-span-4 bg-myth-dark/60 backdrop-blur-sm border border-myth-gold/10 p-8 relative hover:border-myth-gold/50 transition-all duration-500 group">
                        <div className="flex justify-between items-start mb-6">
                            <span className="font-display text-4xl text-myth-gold/20 group-hover:text-myth-gold/80 transition-colors">
                                {['I', 'II', 'III'][index]}
                            </span>
                            <div className={`w-2 h-2 rotate-45 ${index === 0 ? 'bg-myth-gold animate-pulse' : 'bg-gray-800'}`} />
                        </div>
                        <h4 className="font-inscription text-gray-500 text-xs uppercase tracking-widest mb-3">{item.phase}</h4>
                        <div className="text-white font-display text-xl mb-3">{item.keyword}</div>
                        <p className="text-gray-500 text-sm font-serif italic">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 7. FAQ - Scroll of Wisdom */}
      <section id="faq" className="py-32 bg-myth-dark/80 backdrop-blur-md relative">
        <div className="container mx-auto px-6 max-w-4xl">
            <Reveal>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display uppercase mb-4 text-white">
                        Scrolls of Wisdom
                    </h2>
                    <div className="w-24 h-[2px] bg-myth-gold mx-auto" />
                </div>
            </Reveal>

            <div className="space-y-6">
                {FAQ_DATA.map((item, index) => (
                    <Reveal key={index} delay={index * 0.05}>
                        <div className={`border transition-all duration-500 ${openFaqIndex === index ? 'border-myth-gold bg-myth-gold/5' : 'border-myth-gold/10 bg-myth-stone/50 hover:border-myth-gold/30'}`}>
                            <button 
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center p-6 text-left"
                            >
                                <span className="font-display text-lg text-gray-200">
                                    <span className="text-myth-gold mr-6 font-serif italic opacity-60">{index + 1}.</span>
                                    {item.question}
                                </span>
                                {openFaqIndex === index ? <ChevronUp className="text-myth-gold" size={20} /> : <ChevronDown className="text-gray-600" size={20} />}
                            </button>
                            {openFaqIndex === index && (
                                <div className="p-8 pt-0 text-gray-400 text-lg font-serif leading-loose border-t border-myth-gold/10">
                                    <div className="mt-4" dangerouslySetInnerHTML={{ __html: item.answer }} />
                                </div>
                            )}
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;