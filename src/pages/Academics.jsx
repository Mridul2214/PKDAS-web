import React from 'react';
import { CourseCard } from '../components/CourseCard';

export function Academics() {
  return (
    <main className="pb-32">
      <section className="bg-gradient-primary py-24 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-display mb-4">Academic Programs</h1>
          <p className="text-xl font-body text-white/80 max-w-2xl">
            Our curriculum is thoughtfully designed to blend theoretical rigor with practical mastery. Explore disciplines that drive the modern world.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-24">
        {/* Humanities */}
        <div className="mb-24">
          <h2 className="text-3xl font-display text-primary mb-8 border-l-4 border-secondary pl-4">Humanities & Social Sciences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard category="Undergraduate" title="B.A. English Literature" description="Study world literature, critical theory, and advanced composition." />
            <CourseCard category="Undergraduate" title="B.A. History" description="Analyze historical trends, cultures, and their modern implications." />
            <CourseCard category="Postgraduate" title="M.A. Sociology" description="Advanced sociological research methods and urban dynamics." />
          </div>
        </div>

        {/* Sciences */}
        <div className="mb-24">
          <h2 className="text-3xl font-display text-primary mb-8 border-l-4 border-secondary pl-4">Physical & Computational Sciences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard category="Undergraduate" title="B.Sc. Computer Science" description="Software engineering, algorithms, and artificial intelligence." />
            <CourseCard category="Undergraduate" title="B.Sc. Physics" description="Explore quantum mechanics, thermodynamics, and astrophysics." />
            <CourseCard category="Postgraduate" title="M.Sc. Data Science" description="Statistical modeling, big data analytics, and machine learning." />
          </div>
        </div>
        
        {/* Commerce */}
        <div className="mb-12">
          <h2 className="text-3xl font-display text-primary mb-8 border-l-4 border-secondary pl-4">Commerce & Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard category="Undergraduate" title="B.Com Finance" description="In-depth study of financial markets, accounting, and taxation." />
            <CourseCard category="Undergraduate" title="BBA Analytics" description="Business administration with a focus on data-driven decision making." />
          </div>
        </div>
      </div>
    </main>
  );
}
