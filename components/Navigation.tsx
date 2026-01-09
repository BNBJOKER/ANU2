import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from './Icons';

interface NavigationProps {
  onNavigate: (view: 'home' | 'tribute') => void;
  currentView: 'home' | 'tribute';
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Protocol', id: 'protocol' },
    { name: 'Ecosystem', id: 'ecosystem' },
    { name: 'Roadmap', id: 'roadmap' },
    { name: 'FAQ', id: 'faq' },
  ];

  const handleScroll = (id: string) => {
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-anu-white/80 backdrop-blur-md border-b border-anu-gold/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          {/* 
             REPLACE THE SRC BELOW WITH YOUR OWN LOGO PNG URL 
             Example: src="/images/1.png" 
          */}
          <img 
            src="https://placehold.co/100x100/D4AF37/1C1917.png?text=A" 
            alt="Anu Protocol Logo" 
            className="w-10 h-10 rounded-full object-cover border border-anu-gold/50"
          />
          <span className="text-2xl font-serif font-bold tracking-widest text-anu-stone">
            ANU
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className="text-sm uppercase tracking-widest hover:text-anu-gold transition-colors font-medium"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => onNavigate('tribute')}
            className={`px-4 py-2 border border-anu-gold rounded text-xs uppercase tracking-widest transition-all ${currentView === 'tribute' ? 'bg-anu-gold text-white' : 'hover:bg-anu-gold hover:text-white'}`}
          >
            The Tribute
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-anu-stone"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-anu-white border-b border-anu-gold/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.id)}
                  className="text-left text-sm uppercase tracking-widest hover:text-anu-gold"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('tribute');
                  setIsOpen(false);
                }}
                className="text-left text-sm uppercase tracking-widest text-anu-darkGold font-bold"
              >
                Genesis Tribute
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;