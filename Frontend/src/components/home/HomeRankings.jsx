import React from 'react';
import { Link } from 'react-router-dom';

export const HomeRankings = ({ rankings, nirfStats }) => {
  return (
    <section className="relative z-[20] py-20 bg-white overflow-hidden">
      
      {/* Background Abstract Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-12 border-b border-gray-100 pb-12">
            <div className="max-w-md">
              <span className="text-primary font-black text-[9px] uppercase tracking-[0.4em] mb-2 block">Institutional Audit</span>
              <h2 className="font-display text-4xl font-bold text-on-surface leading-tight">
                Quality <span className="text-primary italic">Metrics.</span>
              </h2>
            </div>

            {/* NIRF Stats - Compact Chips */}
            <div className="flex flex-wrap gap-8">
               {nirfStats?.slice(0, 4).map((stat, idx) => (
                 <div key={idx} className="gsap-reveal flex flex-col items-center">
                    <span className="text-3xl font-display font-black text-on-surface tracking-tighter leading-none mb-1">{stat.value}</span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">{stat.label}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Accreditations - Reduced Size Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 gsap-stagger-parent">
            {rankings?.slice(0, 6).map((item, idx) => (
              <div 
                key={idx} 
                className="gsap-stagger-child group relative p-6 bg-[#F8FAFC] rounded-2xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-500 overflow-hidden text-center"
              >
                {/* Minimal Icon */}
                <div className="mb-4 text-primary/30 group-hover:text-primary transition-colors flex justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <div className="text-xl font-display font-black text-on-surface group-hover:text-primary transition-colors leading-none mb-2">
                  {item.value}
                </div>
                <h3 className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-tight">
                  {item.title}
                </h3>

                {/* Subtle Progress Bar */}
                <div className="mt-4 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                   <div className="h-full bg-primary/20 group-hover:bg-primary transition-all duration-700 w-full"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/rankings" className="group flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-on-surface opacity-40 hover:opacity-100 transition-opacity">
              Audit Logs &rarr;
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
