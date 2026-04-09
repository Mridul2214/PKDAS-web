import React from 'react';

export function International() {
  return (
    <main className="pt-32 pb-24 bg-surface min-h-[80vh]">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-display-lg md:text-7xl font-display text-on-surface mb-16">International Students</h1>
        
        <div className="prose prose-lg text-on-surface-variant font-body">
          <p className="text-2xl leading-relaxed text-on-surface font-medium mb-12">
            We welcome students from around the world and provide full support for their academic journey.
          </p>

          <h2 className="text-3xl font-display text-primary mt-12 mb-6 tracking-wide">Support Includes:</h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2.5 bg-primary mr-4 block"></span>
              <div>
                <strong className="text-on-surface block mb-1">Scholarships</strong>
                Dedicated financial aid packages designed specifically for our international cohort.
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2.5 bg-primary mr-4 block"></span>
              <div>
                <strong className="text-on-surface block mb-1">Accommodation</strong>
                Premium, safe, and culturally-inclusive housing located right on campus.
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2.5 bg-primary mr-4 block"></span>
              <div>
                <strong className="text-on-surface block mb-1">Cultural Programs</strong>
                Integration initiatives and events honoring global perspectives.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
