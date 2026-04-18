import React from 'react';
import { Link } from 'react-router-dom';
import { WavyDivider } from './WavyDivider';

export const HomeInterests = () => {
  return (
    <section id="interests" className="relative z-[20] py-32 md:py-40 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="section-bg-blob absolute top-0 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px]"></div>
        <div className="section-bg-blob absolute bottom-0 -left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[110px]"></div>
      </div>

      <WavyDivider type="wave2" color="var(--color-surface)" position="top" flipped={true} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
          <div>
            <h2 className="gsap-reveal text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-on-surface leading-tight">
              What's Your <span className="text-primary">Interest?</span>
            </h2>
            <p className="gsap-reveal text-on-surface-variant font-body text-lg mt-3 max-w-xl">
              Explore our diverse range of academic disciplines and find your perfect path.
            </p>
          </div>
          <div className="gsap-reveal flex items-center gap-3 flex-shrink-0">
            <Link to="/courses" className="relative group overflow-hidden px-6 py-3 rounded-full border border-primary/20 text-primary font-bold text-sm transition-all duration-300 hover:text-white">
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">Search Programs</span>
            </Link>
            <Link to="/contact" className="relative group overflow-hidden px-6 py-3 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center gap-2">
                Apply Now
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Disciplines Grid */}
        <div className="gsap-stagger-parent grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { name: 'Arts & Humanities', slug: 'arts-humanities', icon: '🎨', color: 'from-rose-500/10' },
            { name: 'Commerce', slug: 'commerce', icon: '📊', color: 'from-blue-500/10' },
            { name: 'Computer Science', slug: 'computer-science', icon: '💻', color: 'from-violet-500/10' },
            { name: 'Engineering', slug: 'engineering', icon: '⚙️', color: 'from-zinc-500/10' },
            { name: 'Architecture', slug: 'architecture', icon: '🏛️', color: 'from-amber-500/10' },
            { name: 'Business & MBA', slug: 'business-mba', icon: '💼', color: 'from-emerald-500/10' },
            { name: 'Medicine', slug: 'medicine', icon: '🩺', color: 'from-red-500/10' },
            { name: 'Nursing', slug: 'nursing', icon: '🏥', color: 'from-pink-500/10' },
            { name: 'Pharmacy', slug: 'pharmacy', icon: '💊', color: 'from-teal-500/10' },
            { name: 'Aviation', slug: 'aviation', icon: '✈️', color: 'from-sky-500/10' },
            { name: 'Law', slug: 'law', icon: '⚖️', color: 'from-yellow-500/10' },
            { name: 'Data Science', slug: 'data-science', icon: '📈', color: 'from-indigo-500/10' },
            { name: 'Biotechnology', slug: 'biotechnology', icon: '🧬', color: 'from-lime-500/10' },
            { name: 'Physical Sciences', slug: 'physical-sciences', icon: '🔬', color: 'from-cyan-500/10' },
            { name: 'Allied Health', slug: 'allied-health', icon: '🫀', color: 'from-orange-500/10' },
            { name: 'Design', slug: 'design', icon: '🎯', color: 'from-fuchsia-500/10' },
            { name: 'Physiotherapy', slug: 'physiotherapy', icon: '🦴', color: 'from-green-500/10' },
            { name: 'Aeronautics', slug: 'aeronautics', icon: '🚀', color: 'from-blue-600/10' },
          ].map((discipline, idx) => (
            <Link
              to={`/interest/${discipline.slug}`}
              key={idx}
              className={`gsap-stagger-child group flex flex-col items-center text-center gap-4 p-5 rounded-2xl border border-primary/5 bg-white shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:bg-gradient-to-br ${discipline.color} transition-all duration-300 cursor-pointer hover:-translate-y-1`}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-sm">
                {discipline.icon}
              </div>
              <span className="text-sm font-body font-bold text-on-surface group-hover:text-primary transition-colors duration-300 leading-tight">
                {discipline.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
