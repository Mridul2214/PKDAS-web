import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { WavyDivider } from './WavyDivider';

export function BentoCard({ title, desc, images, spans, slug }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const startCycling = () => {
    intervalRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 1000);
  };

  const stopCycling = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIdx(0);
  };

  const handleClick = () => {
    if (slug) navigate(`/highlights/${slug}`);
  };

  return (
    <div
      className={`gsap-stagger-child group relative rounded-3xl overflow-hidden border border-primary/10 bg-white hover:border-primary/30 transition-all duration-700 shadow-lg hover:shadow-2xl hover:shadow-primary/15 ${spans} ${slug ? 'cursor-pointer' : ''}`}
      style={{ isolation: 'isolate' }}
      onMouseEnter={startCycling}
      onMouseLeave={stopCycling}
      onClick={handleClick}
      role={slug ? 'link' : undefined}
      tabIndex={slug ? 0 : undefined}
      onKeyDown={slug ? (e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); } : undefined}
    >
      {/* Background Layer - Rapid Cycling Images */}
      <div className="absolute inset-0 z-0">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={title}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover will-change-[opacity] transition-opacity duration-500 ${i === activeIdx ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500"></div>

      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-white/80 font-body text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-sm line-clamp-3 md:line-clamp-none">
            {desc}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
          <div className="h-px bg-white/40 w-12 group-hover:w-20 transition-all duration-700"></div>
          <span className="text-[10px] font-bold text-white/90 tracking-[0.2em] uppercase transition-colors duration-500">
            VIEW DETAILS {slug && '→'}
          </span>
        </div>
      </div>
    </div>
  );
}

export const HomeHighlights = ({ highlights }) => {
  return (
    <section className="relative py-40 bg-white overflow-hidden" style={{ isolation: 'isolate', zIndex: 20 }}>
      <WavyDivider type="wave1" color="var(--color-surface)" position="top" flipped={true} />

      <div className="container mx-auto px-6 relative z-10">

        <div className="max-w-4xl mb-20 mx-auto text-center">
          <h2 className="gsap-reveal text-5xl md:text-7xl font-display font-bold text-on-surface leading-tight mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Choose </span>
            Us
          </h2>
          <p className="gsap-reveal text-on-surface-variant font-body text-xl max-w-2xl leading-relaxed mx-auto">
            We combine legendary heritage with modern innovation to create an educational experience that is truly world-class.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-6 gsap-stagger-parent">
          {highlights.map((item, idx) => {
            const spans = [
              'md:col-span-2 md:row-span-1', // 1: Wide (Top Left)
              'md:col-span-1 md:row-span-2', // 2: Tall (Right Side)
              'md:col-span-1 md:row-span-1', // 3: Small (Middle Left)
              'md:col-span-1 md:row-span-1', // 4: Small (Middle Center)
              'md:col-span-3 md:row-span-1'  // 5: Full Width (Bottom)
            ][idx] || 'md:col-span-1';

            return (
              <BentoCard
                key={idx}
                title={item.title}
                desc={item.desc}
                images={item.images}
                spans={spans}
                slug={item.slug}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
