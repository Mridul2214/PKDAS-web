import React from 'react';
import { WavyDivider } from './WavyDivider';

export const HomePartners = () => {
  const partners = [
    { name: "TCS", logo: null },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Deloitte", logo: null },
    { name: "PwC", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
    { name: "KPMG", logo: null },
    { name: "NatWest", logo: null },
    { name: "EY", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" },
    { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
    { name: "D E Shaw", logo: null },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
    { name: "Nestlé", logo: null },
    { name: "Cipla", logo: null },
    { name: "Unilever", logo: null },
    { name: "Barclays", logo: null },
    { name: "UST", logo: null },
    { name: "& more", logo: null },
  ];

  return (
    <section className="relative z-[20] py-32 md:py-40 bg-black overflow-hidden">
      <WavyDivider type="wave2" color="white" position="top" flipped={true} />

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Corporate Environment"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-16 md:mb-24">
          <p className="gsap-reveal text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase text-emerald-400 mb-4 bg-emerald-400/10 w-fit px-3 py-1 rounded-full border border-emerald-400/20">Our Global Network</p>
          <h2 className="gsap-reveal text-5xl md:text-8xl lg:text-9xl font-display font-black leading-tight md:leading-none">
            <span className="text-white">RECRUITMENT</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500">PARTNERS</span>
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="gsap-stagger-parent grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="gsap-stagger-child group relative bg-white transition-all duration-300 flex items-center justify-center p-4 md:p-8 min-h-[100px] md:min-h-[140px] cursor-pointer hover:bg-slate-50"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-8 md:max-h-12 max-w-[120px] object-contain transition-all duration-500 group-hover:scale-110"
                />
              ) : (
                <span className="text-slate-400 font-display font-bold text-lg md:text-2xl group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </span>
              )}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-500 rounded-full group-hover:w-full" />
            </div>
          ))}
        </div>

        <p className="gsap-reveal mt-12 text-center text-zinc-500 font-body text-sm tracking-widest uppercase opacity-60">
          500+ global recruitment partners across our campus network
        </p>
      </div>
    </section>
  );
};
