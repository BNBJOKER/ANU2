import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import ProtocolSections from './components/ProtocolSections';
import Values from './components/Values';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Tribute from './components/Tribute';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'tribute'>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="bg-anu-white min-h-screen font-sans selection:bg-anu-gold selection:text-anu-stone">
      <Navigation 
        currentView={currentView} 
        onNavigate={setCurrentView} 
      />

      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <React.Fragment key="home">
            <main>
              <Hero />
              <Dashboard />
              <ProtocolSections />
              <Values />
              <Roadmap />
              <FAQ />
            </main>
            <Footer />
          </React.Fragment>
        ) : (
          <Tribute key="tribute" onBack={() => setCurrentView('home')} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;