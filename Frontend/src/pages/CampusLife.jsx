import React from 'react';

export function CampusLife() {
  return (
    <main className="pb-32">
      <section className="bg-surface py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-display text-primary mb-4">Campus Life</h1>
          <p className="text-xl font-body text-on-surface-variant max-w-2xl mx-auto">
            Experience an environment specifically designed to inspire creativity, foster community, and support holistic development.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-12 mb-24">
        {/* Asymmetrical Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 h-[400px] overflow-hidden rounded-xl shadow-ambient mb-8 md:mb-0">
             <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Library" className="w-full h-full object-cover saturate-50 hover:saturate-100 transition-all duration-700" />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <h3 className="text-3xl font-display text-primary mb-4">The Central Library</h3>
            <p className="text-on-surface-variant font-body">A multi-story archive spanning millennia of knowledge, equipped with the latest digital databases and silent study sanctuaries.</p>
          </div>

          <div className="md:col-span-4 mt-16 md:mt-32">
            <h3 className="text-3xl font-display text-primary mb-4">Innovation Hubs</h3>
            <p className="text-on-surface-variant font-body">Collaborative lab spaces where disciplines merge. Here, students build prototypes, code the future, and launch startups.</p>
          </div>
          <div className="md:col-span-7 md:col-start-6 h-[400px] overflow-hidden rounded-xl shadow-ambient mt-8 md:mt-32">
             <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Labs" className="w-full h-full object-cover saturate-50 hover:saturate-100 transition-all duration-700" />
          </div>

        </div>
      </div>
    </main>
  );
}
