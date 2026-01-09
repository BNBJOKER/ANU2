import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Icons } from './Icons';

const Dashboard: React.FC = () => {
  // Simulation states
  const [supply, setSupply] = useState(200913.0000);
  const [burned, setBurned] = useState(0);
  const [floorPrice, setFloorPrice] = useState(200913.0000);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time burn
      setSupply(prev => prev - 0.0024);
      setBurned(prev => prev + 0.0024);
      setFloorPrice(prev => prev + 0.08);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { 
      label: "Live Total Supply", 
      value: supply.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 }),
      icon: <Icons.Infinity className="w-5 h-5 text-anu-gold" />,
      sub: "Target: 21,000"
    },
    { 
      label: "Tokens Burned", 
      value: burned.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 }),
      icon: <Icons.Flame className="w-5 h-5 text-red-500" />,
      sub: "Auto-Purge Active"
    },
    { 
      label: "Floor Price Est.", 
      value: `$${floorPrice.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`,
      icon: <Icons.Landmark className="w-5 h-5 text-green-600" />,
      sub: "+5% Daily LP Burn"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 -mt-20 relative z-20 mb-20">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/50 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 md:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-anu-stone/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center pt-6 md:pt-0 first:pt-0">
              <div className="mb-3 p-3 bg-anu-white rounded-full shadow-inner">
                {stat.icon}
              </div>
              <h4 className="text-anu-stone/60 text-xs font-bold uppercase tracking-widest mb-1">
                {stat.label}
              </h4>
              <div className="text-2xl md:text-3xl font-serif font-bold text-anu-stone tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-anu-gold mt-1 font-medium">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;