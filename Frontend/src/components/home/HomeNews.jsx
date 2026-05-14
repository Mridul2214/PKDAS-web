import React from 'react';
import { Link } from 'react-router-dom';
import { WavyDivider } from './WavyDivider';

export const HomeNews = ({ news }) => {
  return (
    <section className="relative z-[20] py-32 bg-white overflow-hidden">
      <WavyDivider type="wave1" color="var(--color-surface)" position="top" flipped={true} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            {/* <span className="gsap-reveal inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
              Latest Updates
            </span> */}
            <h2 className="gsap-reveal text-5xl md:text-6xl font-display font-bold text-on-surface leading-tight">
             Stay Updated with the Latest <span className="italic text-primary">News</span>
            </h2>
          </div>
          <Link 
            to="/news" 
            className="gsap-reveal group flex items-center gap-3 text-sm font-bold text-primary tracking-widest uppercase hover:opacity-80 transition-all"
          >
            Explore All News
            <span className="w-10 h-px bg-primary/30 group-hover:w-16 transition-all duration-500"></span>
          </Link>
        </div>

        <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div 
              key={item.id} 
              className="gsap-stagger-child group relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-black/5"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-primary text-[10px] font-bold tracking-widest uppercase mb-3 opacity-60">
                  {item.date}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-on-surface mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8 line-clamp-2 opacity-80">
                  {item.summary}
                </p>
                <Link 
                  to={`/news/${item.id}`} 
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface hover:text-primary transition-colors"
                >
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
