import React from 'react';
import { WavyDivider } from './WavyDivider';

export const HomeAchievements = () => {
  return (
    <section className="relative z-[20] py-40 bg-white overflow-hidden">
      {/* Section-Wide Background Image Slot */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/backgrounds/3rd%20section.jpg"
          className="w-full h-full object-cover opacity-100"
          alt="Background"
        />
        {/* Semi-transparent overlay to ensure text contrast while keeping image visible */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Top Wave (matching Hero surface) */}
      <WavyDivider type="wave1" color="var(--color-surface)" position="top" flipped={true} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="gsap-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0145F2]/10 text-[#0145F2] text-xs font-bold tracking-widest uppercase mb-5 border border-[#0145F2]/20">
            Milestones
          </div>
          <h2 className="gsap-reveal text-5xl md:text-6xl font-display font-bold text-on-surface leading-tight mb-5">
            Our <span className="text-transparent bg-clip-text bg-primary">Achievements</span>
          </h2>
          <p className="gsap-reveal text-on-surface-variant font-display text-xl leading-relaxed max-w-2xl mx-auto italic opacity-80">
            Decades of excellence reflected in the accomplishments of our students, faculty, and institution. Every milestone fuels our mission to empower the next generation.
          </p>
        </div>

        {/* Achievement Cards — Asymmetric Grid */}
        <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">

          {/* Card 1: Graduation — Wide */}
          <div className="gsap-stagger-child md:col-span-7 group relative rounded-3xl overflow-hidden min-h-[380px] border border-white/10 hover:border-amber-400/30 transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl parallax-img-container">
            <img
              src="/achievements/graduates_celebration.png"
              alt="Graduation Celebration"
              className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover group-hover:scale-105 transition-all will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-black/20 group-hover:from-black/100 group-hover:via-black/70 transition-all duration-500"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
              <div>
                <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">Convocation 2025</div>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-3 leading-tight drop-shadow-md">
                  3,500+ Graduates Every Year
                </h3>
                <p className="text-zinc-200 text-sm font-body leading-relaxed max-w-lg">
                  Our graduates go on to become industry leaders, entrepreneurs, and innovators across the globe.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Gold Medalist — Tall */}
          <div className="gsap-stagger-child md:col-span-5 group relative rounded-3xl overflow-hidden min-h-[380px] border border-white/10 hover:border-amber-400/30 transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl parallax-img-container">
            <img
              src="/achievements/gold_medalist.png"
              alt="Gold Medalist"
              className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover group-hover:scale-105 transition-all will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-black/20 group-hover:from-black/100 group-hover:via-black/70 transition-all duration-500"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
              <div>
                <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">Academic Excellence</div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight drop-shadow-md">
                  150+ University Gold Medals
                </h3>
                <p className="text-zinc-200 text-sm font-body leading-relaxed transition-all duration-500">
                  Our students consistently secure top university ranks and gold medals across all disciplines.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Award Ceremony — Medium */}
          <div className="gsap-stagger-child md:col-span-5 group relative rounded-3xl overflow-hidden min-h-[360px] border border-white/10 hover:border-amber-400/30 transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl parallax-img-container">
            <img
              src="/achievements/award_ceremony.png"
              alt="Award Ceremony"
              className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover group-hover:scale-105 transition-all will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-black/20 group-hover:from-black/100 group-hover:via-black/70 transition-all duration-500"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
              <div>
                <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">National Recognition</div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight drop-shadow-md">
                  NAAC A++ Accredited
                </h3>
                <p className="text-zinc-200 text-sm font-body leading-relaxed transition-all duration-500">
                  Nationally recognized for our outstanding institutional standards and governance.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Placement Success — Wide */}
          <div className="gsap-stagger-child md:col-span-7 group relative rounded-3xl overflow-hidden min-h-[360px] border border-white/10 hover:border-amber-400/30 transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl parallax-img-container">
            <img
              src="/achievements/placement_success.png"
              alt="Placement Success"
              className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover group-hover:scale-105 transition-all will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-black/20 group-hover:from-black/100 group-hover:via-black/70 transition-all duration-500"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
              <div>
                <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">Industry Connect</div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 leading-tight drop-shadow-md">
                  95% Placement Record
                </h3>
                <p className="text-zinc-200 text-sm font-body leading-relaxed max-w-lg transition-all duration-500">
                  Students placed in Fortune 500 companies with packages reaching ₹10 LPA.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats Row */}
        <div className="gsap-stagger-parent grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50+', label: 'Years of Legacy', icon: '🏛️' },
            { value: '25+', label: 'Institutions', icon: '🎓' },
            { value: '200+', label: 'Awards Won', icon: '🏆' },
            { value: '50K+', label: 'Alumni Network', icon: '🌐' },
          ].map((stat, idx) => (
            <div key={idx} className="gsap-stagger-child group text-center p-8 rounded-2xl border border-primary/5 hover:border-amber-400/20 bg-white hover:bg-slate-50 transition-all duration-500 shadow-sm hover:shadow-lg">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-2 group-hover:text-primary transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-xs font-display text-on-surface-variant/70 uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
