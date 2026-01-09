import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Scroll, Flame, Coins, Scale, Pyramid } from 'lucide-react';

const data = [
  { name: 'I', supply: 200913 },
  { name: 'II', supply: 196091 },
  { name: 'III', supply: 191384 },
  { name: 'IV', supply: 186791 },
  { name: 'V', supply: 182308 },
  { name: 'VI', supply: 177932 },
  { name: 'VII', supply: 173662 },
];

const StatCard: React.FC<{ 
    label: string; 
    value: string; 
    subValue?: string; 
    icon: React.ReactNode;
}> = ({ label, value, subValue, icon }) => (
    <div className="relative p-8 bg-myth-stone/70 backdrop-blur-md border border-myth-gold/20 group hover:border-myth-gold/50 transition-all duration-500">
        {/* Ancient Corner Ornaments */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-myth-gold/60" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-myth-gold/60" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-myth-gold/60" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-myth-gold/60" />

        <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-myth-gold/10 rounded-full text-myth-gold border border-myth-gold/20">
                {icon}
            </div>
            <div className="opacity-20 group-hover:opacity-100 transition-opacity">
                 <Pyramid size={16} className="text-myth-gold" />
            </div>
        </div>
        
        <div className="font-inscription text-xs text-myth-gold/60 uppercase tracking-[0.15em] mb-2">{label}</div>
        <div className="font-display text-3xl md:text-4xl text-white tracking-wide text-shadow-sm">{value}</div>
        {subValue && (
            <div className="mt-4 pt-4 border-t border-myth-gold/10 flex items-center gap-2 text-xs font-serif italic text-gray-400">
                {subValue}
            </div>
        )}
    </div>
);

const Dashboard: React.FC = () => {
  const [currentSupply, setCurrentSupply] = useState(173662.45);
  const [burnedTotal, setBurnedTotal] = useState(27250.55);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSupply(prev => prev - 0.013);
      setBurnedTotal(prev => prev + 0.013);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="dashboard" className="py-24 relative bg-myth-dark/60 backdrop-blur-sm border-t border-myth-gold/20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-myth-gold" />
            <h2 className="text-3xl font-display uppercase tracking-widest text-myth-gold text-center">
                The Oracle
            </h2>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-myth-gold" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Stats Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
                label="Circulating Offering" 
                value={currentSupply.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                subValue="Destiny: 21,000"
                icon={<Coins size={22} />}
            />
             <StatCard 
                label="Sacrificed to Void" 
                value={burnedTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                subValue="Daily Rite: 2.4%"
                icon={<Flame size={22} />}
            />
             <StatCard 
                label="Treasury Depth" 
                value="$12.45"
                subValue="Floor Rising"
                icon={<Scale size={22} />}
            />
          </div>

          {/* Chart Container - Star Map Style */}
          <div className="lg:w-2/5 h-[400px] lg:h-auto bg-myth-stone/70 backdrop-blur-md border border-myth-gold/20 p-8 relative">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
             
             <div className="flex justify-between items-center mb-8 relative z-10">
                 <h3 className="font-inscription text-xs text-myth-gold/70 uppercase tracking-widest">Diminishing Supply</h3>
                 <div className="text-[10px] font-serif text-gray-500 italic">Era: Genesis</div>
             </div>
             
             <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSupply" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#333" strokeDasharray="5 5" vertical={false} opacity={0.3} />
                <XAxis 
                    dataKey="name" 
                    stroke="#555" 
                    tick={{fontSize: 12, fontFamily: 'Cinzel', fill: '#888'}} 
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis 
                    stroke="#555" 
                    tick={{fontSize: 10, fontFamily: 'Cinzel', fill: '#888'}} 
                    axisLine={false}
                    tickLine={false}
                    domain={['auto', 'auto']}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#020617', borderColor: '#D4AF37', color: '#E5E5E5', fontFamily: 'Crimson Text' }}
                  itemStyle={{ color: '#D4AF37' }}
                />
                <Area 
                    type="monotone" 
                    dataKey="supply" 
                    stroke="#D4AF37" 
                    strokeWidth={2} 
                    fillOpacity={1} 
                    fill="url(#colorSupply)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;