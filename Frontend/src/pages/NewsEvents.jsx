import React from 'react';

export function NewsEvents() {
  const news = [
    {
      title: "Newsletter 'ARTECH' Launched",
      date: "August 15, 2026",
      desc: "The inaugural edition of our technical and arts newsletter has been released to widespread acclaim.",
      category: "News"
    },
    {
      title: "Induction Program Conducted",
      date: "July 01, 2026",
      desc: "Welcomed the new batch of 2026 with a comprehensive week-long orientation and activities.",
      category: "Event"
    },
    {
      title: "Workshops & Seminars",
      date: "Ongoing",
      desc: "Regular high-impact sessions led by industry experts across multiple disciplines.",
      category: "Academic"
    }
  ];

  return (
    <main className="pt-32 pb-24 bg-surface min-h-[80vh]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-display-lg md:text-7xl font-display text-on-surface mb-16">News & Events</h1>
        
        <div className="flex flex-col gap-8">
          {news.map((item, idx) => (
             <article key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 bg-surface-container-lowest p-8 border border-surface-container hover:shadow-ambient transition-all duration-300">
                <div className="md:w-1/4">
                   <div className="text-sm font-medium text-primary uppercase tracking-widest mb-2">{item.category}</div>
                   <div className="text-on-surface-variant font-body">{item.date}</div>
                </div>
                <div className="md:w-3/4">
                   <h2 className="text-2xl font-display text-on-surface mb-4">{item.title}</h2>
                   <p className="text-lg font-body text-on-surface-variant">{item.desc}</p>
                </div>
             </article>
          ))}
        </div>
      </div>
    </main>
  );
}
