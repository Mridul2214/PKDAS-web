import React from 'react';
import { LogosCarousel } from '../components/LogosCarousel';
import { StatCounter } from '../components/StatCounter';

export function Placements() {
  return (
    <main className="pt-32 pb-24 bg-surface min-h-[80vh]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
           <h1 className="text-display-lg md:text-7xl font-display text-on-surface mb-6">Career Placements</h1>
           <p className="text-xl font-body text-on-surface-variant leading-relaxed">
             Our placement cell bridges the gap between students and industry.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mb-24">
           <div className="bg-surface-container-low p-8 text-center rounded border border-surface-container">
              <div className="text-5xl font-display font-medium text-primary mb-2">
                 <StatCounter end={180} suffix="+" />
              </div>
              <div className="text-sm uppercase tracking-widest font-body text-on-surface-variant">Recruiters</div>
           </div>
           <div className="bg-surface-container-low p-8 text-center rounded border border-surface-container">
              <div className="text-3xl font-display font-medium text-primary mb-2 mt-4">Internship</div>
              <div className="text-sm uppercase tracking-widest font-body text-on-surface-variant">Opportunities</div>
           </div>
           <div className="bg-surface-container-low p-8 text-center rounded border border-surface-container">
              <div className="text-3xl font-display font-medium text-primary mb-2 mt-4">Career</div>
              <div className="text-sm uppercase tracking-widest font-body text-on-surface-variant">Training Programs</div>
           </div>
        </div>

        <div className="max-w-5xl">
          <h2 className="text-3xl font-display text-on-surface mb-8">Top Recruiters</h2>
          <LogosCarousel />
        </div>
      </div>
    </main>
  );
}
