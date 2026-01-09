import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Triangle, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
        window.location.hash = `/#${id}`;
        return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-gray-300 font-sans relative bg-texture">
      
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-700 border-b ${
          isScrolled 
            ? 'bg-myth-dark/80 backdrop-blur-lg border-myth-gold/30 py-3 shadow-glow' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          
          {/* Logo / Brand Area */}
          <Link to="/" className="flex items-center space-x-3 group relative">
             {/* Decorative Icon Container */}
             <div className="relative w-10 h-10 flex items-center justify-center border border-myth-gold/50 rotate-45 group-hover:rotate-0 transition-transform duration-500 bg-myth-dark/50 backdrop-blur-sm">
                {/* Use the user's logo if available, or a mystical fallback */}
                <img src="/logo.png" alt="ANU" className="w-6 h-6 object-contain -rotate-45 group-hover:rotate-0 transition-transform duration-500 relative z-10" 
                     onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('fallback-icon'); }}
                />
                <Triangle size={16} className="text-myth-gold absolute hidden group-hover:block" />
             </div>
             
             <div className="flex flex-col">
                <span className="text-2xl font-display font-bold tracking-widest text-myth-gold uppercase drop-shadow-md">
                  ANU
                </span>
                <span className="text-[9px] text-myth-gold/70 font-inscription tracking-[0.3em] uppercase leading-none border-t border-myth-gold/30 pt-1 mt-0.5">
                  The Genesis
                </span>
             </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
             {[
                { label: 'The Law', id: 'protocol' },
                { label: 'Oracle', id: 'dashboard' },
                { label: 'Prophecy', id: 'roadmap' },
             ].map((item) => (
                <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)} 
                    className="relative px-2 py-1 font-inscription text-sm text-gray-400 hover:text-myth-gold transition-colors duration-300 uppercase tracking-widest group"
                >
                    {item.label}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-myth-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </button>
             ))}
            
            <div className="w-[1px] h-6 bg-gradient-to-b from-transparent via-myth-gold/50 to-transparent mx-2" />

            <Link to="/tribute" className="font-inscription text-sm text-gray-400 hover:text-myth-gold transition-colors flex items-center gap-2 uppercase tracking-widest">
                <Sparkles size={14} className="text-myth-gold" /> Tribute
            </Link>

            <a 
              href={SOCIAL_LINKS.twitter} 
              target="_blank" 
              rel="noreferrer"
              className="ml-4 px-6 py-2 border border-myth-gold/30 text-myth-gold font-inscription text-xs hover:bg-myth-gold hover:text-myth-dark transition-all duration-500 uppercase tracking-widest flex items-center gap-2 relative overflow-hidden group bg-myth-dark/30 backdrop-blur-sm"
            >
              <span className="relative z-10">Community</span>
              <div className="absolute inset-0 bg-myth-gold/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-myth-gold p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-myth-dark/95 backdrop-blur-xl border-b border-myth-gold/20 p-8 flex flex-col space-y-6 font-display text-center z-50">
             <button onClick={() => scrollToSection('protocol')} className="text-lg text-myth-gold/80 hover:text-myth-gold">The Law</button>
             <button onClick={() => scrollToSection('dashboard')} className="text-lg text-myth-gold/80 hover:text-myth-gold">Oracle</button>
             <button onClick={() => scrollToSection('roadmap')} className="text-lg text-myth-gold/80 hover:text-myth-gold">Prophecy</button>
             <Link to="/tribute" onClick={() => setMobileMenuOpen(false)} className="text-lg text-myth-gold/80 hover:text-myth-gold">Tribute</Link>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {children}
      </main>

      <footer className="border-t border-myth-gold/20 bg-myth-dark/80 backdrop-blur-md py-16 relative overflow-hidden">
        {/* Decorative footer elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-myth-gold"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-myth-gold"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          
          <div className="flex justify-center space-x-12 mb-10">
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-myth-gold transition-colors font-display text-sm tracking-widest uppercase">Twitter</a>
                <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-myth-gold transition-colors font-display text-sm tracking-widest uppercase">Telegram</a>
          </div>
          
          <p className="text-myth-gold/40 font-inscription text-xs uppercase tracking-[0.2em] mb-4">
             © {new Date().getFullYear()} ANU PROTOCOL
          </p>
          <p className="text-gray-600 font-serif italic text-sm">
             "Consensus of the Ancients"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;