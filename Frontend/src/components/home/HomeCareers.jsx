import React from 'react';
import { Link } from 'react-router-dom';
import { WavyDivider } from './WavyDivider';
import { StatCounter } from '../StatCounter';

export const HomeCareers = ({ careerSuccessData, activeCareer, setActiveCareer }) => {
  return (
    <section className="relative z-[20] py-40 bg-white overflow-hidden">
      <WavyDivider type="wave3" color="var(--color-surface)" position="top" flipped={true} />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="gsap-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-5 border border-primary/20">
            Placements
          </div>
          <h2 className="gsap-reveal text-5xl md:text-6xl font-display font-bold text-on-surface leading-tight mb-5">
            Career <span className="text-transparent bg-clip-text bg-primary">Opportunities</span>
          </h2>
          <p className="gsap-reveal text-on-surface-variant font-body text-lg leading-relaxed max-w-2xl mx-auto">
            Our students are consistently recruited by top-tier companies. Here's a glimpse of the success stories that define our placement track record.
          </p>
        </div>

        <div className="gsap-stagger-parent flex flex-col md:flex-row items-stretch justify-center gap-0 max-w-4xl mx-auto mb-20">
          {[
            { value: 80, suffix: '+', label: 'Students in Single Drive', color: 'from-blue-500 to-blue-400' },
            { value: 32, suffix: ' LPA', label: 'Top Salary Package', color: 'from-amber-500 to-amber-400' },
            { value: 100, suffix: '%', label: 'Placement Assistance', color: 'from-emerald-500 to-emerald-400' },
          ].map((stat, idx) => (
            <div key={idx} className="gsap-stagger-child group relative flex-1 text-center py-10 px-6">
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] rounded-full bg-gradient-to-r ${stat.color} group-hover:w-20 transition-all duration-500`}></div>
              <div className="text-5xl md:text-6xl font-display font-bold text-on-surface mb-3">
                <StatCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-body text-on-surface-variant/60 uppercase tracking-[0.2em]">{stat.label}</div>
              {idx < 2 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-on-surface/5"></div>}
            </div>
          ))}
        </div>

        <div className="gsap-stagger-parent hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {careerSuccessData.map((student, idx) => (
            <div key={idx} className="gsap-stagger-child group relative bg-white border border-primary/10 rounded-2xl p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-500 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="parallax-img-container w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/5 group-hover:border-primary/20 transition-all duration-500">
                  <img
                    src={student.img}
                    alt={student.name}
                    className="w-full h-[120%] -top-[10%] relative object-cover transition-transform duration-700 will-change-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-on-surface font-display font-bold text-base truncate">{student.name}</h4>
                  <p className="text-on-surface-variant/60 font-body text-xs">{student.role} | <span className="text-primary font-bold">{student.company}</span></p>
                </div>
                <span className="text-[10px] font-black text-accent bg-accent/10 px-3 py-1.5 rounded-full flex-shrink-0 border border-accent/20 uppercase tracking-tighter">{student.ctc}</span>
              </div>
              <div className="mt-4 pt-4 border-t border-primary/5">
                <p className="text-on-surface-variant font-body text-sm leading-relaxed italic line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  "{student.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden relative z-10">
          <button 
            onClick={() => setActiveCareer((prev) => (prev - 1 + careerSuccessData.length) % careerSuccessData.length)}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-primary border border-primary/5 active:scale-90 transition-all"
            aria-label="Previous Career Success"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button 
            onClick={() => setActiveCareer((prev) => (prev + 1) % careerSuccessData.length)}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-primary border border-primary/5 active:scale-90 transition-all"
            aria-label="Next Career Success"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
          </button>

          <div className="overflow-hidden px-6">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${activeCareer * 100}%)` }}
            >
            {careerSuccessData.map((student, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <div className="bg-white border border-primary/10 p-6 rounded-[1.5rem] shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img src={student.img} alt={student.name} className="w-10 h-10 rounded-full object-cover border border-primary/20" />
                      <div>
                        <h4 className="text-on-surface font-display font-bold text-base leading-tight">{student.name}</h4>
                        <p className="text-[10px] text-on-surface-variant/60 font-body uppercase">{student.company}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">{student.ctc}</span>
                  </div>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed italic">"{student.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {careerSuccessData.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeCareer ? 'w-4 bg-primary' : 'w-1.5 bg-primary/20'}`}></div>
          ))}
        </div>
      </div>

        <div className="gsap-reveal mt-16 text-center">
          <p className="text-on-surface-variant font-body italic mb-6 max-w-2xl mx-auto">
            "We are proud of our 2026 Batch achievement: over 80 students successfully placed at RINEX driving innovation."
          </p>
          <Link to="/placements" className="inline-flex items-center gap-2 group px-8 py-4 bg-primary text-white font-bold tracking-wide rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
            View All Placements
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
