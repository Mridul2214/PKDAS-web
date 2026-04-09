import React from 'react';
import { FacultyProfile } from '../components/FacultyProfile';

export function FacultyPage() {
  return (
    <main className="pb-32">
      <section className="bg-gradient-primary py-24 text-white mb-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
             <h1 className="text-5xl font-display mb-6 leading-tight">Minds Shaping <br/> the Future</h1>
             <p className="font-body text-lg text-white/80">
               At PKDAS, you don't just learn from textbooks; you learn from active researchers, industry leaders, and intellectual pioneers.
             </p>
          </div>
          <div className="md:w-1/2 p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
             <h3 className="text-2xl font-display mb-4 text-tertiary">"Education is not the learning of facts, but the training of the mind to think."</h3>
             <p className="font-body uppercase tracking-wider text-sm text-white/60">- Office of the Dean</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display text-primary mb-12 border-b border-surface-container pb-4">Department of Humanities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
          <FacultyProfile name="Dr. Sarah Jenkins" title="Dean of Humanities" imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" />
          <FacultyProfile name="Prof. Alan Smith" title="Professor of History" imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" />
          <FacultyProfile name="Dr. Elena Rose" title="Sociology Dept Head" imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" />
        </div>

        <h2 className="text-3xl font-display text-primary mb-12 mt-16 border-b border-surface-container pb-4">Department of Sciences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
          <FacultyProfile name="Prof. David Chen" title="Head of Computer Science" imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" />
          <FacultyProfile name="Dr. Emily Thorne" title="Director of Research" imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" />
          <FacultyProfile name="Dr. Marcus Webb" title="Professor of Physics" imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" />
        </div>
      </div>
    </main>
  );
}
