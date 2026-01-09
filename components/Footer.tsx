import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Icons } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-anu-stone text-anu-lightGold py-12 border-t border-anu-gold/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif font-bold tracking-widest text-white mb-2">ANU PROTOCOL</h2>
          <p className="text-sm opacity-60">© {new Date().getFullYear()} Decentralized Sovereignty.</p>
        </div>

        <div className="flex gap-6">
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="group flex items-center gap-2 px-4 py-2 border border-anu-gold/30 rounded-full hover:bg-anu-gold hover:text-anu-stone transition-all">
            <span className="text-sm font-bold">X (Twitter)</span>
            <Icons.ExternalLink className="w-4 h-4" />
          </a>
          <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noreferrer" className="group flex items-center gap-2 px-4 py-2 border border-anu-gold/30 rounded-full hover:bg-anu-gold hover:text-anu-stone transition-all">
            <span className="text-sm font-bold">Telegram</span>
            <Icons.ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;