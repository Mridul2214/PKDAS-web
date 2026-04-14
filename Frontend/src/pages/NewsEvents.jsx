import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const newsData = [
  {
    title: "Global Research Summit 2026",
    date: "Sep 12, 2026",
    label: "Summit",
    desc: "A gathering of global innovators and academic pioneers to discuss the future of AI and sustainable technologies.",
    img: "https://images.unsplash.com/photo-1540575861501-7ad05823c95b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Inaugural Edition of 'ARTECH' Launched",
    date: "Aug 28, 2026",
    label: "Publication",
    desc: "The campus-wide multidisciplinary newsletter featuring student research and creative arts goes live.",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Induction Ceremony for Batch of '26",
    date: "Jul 15, 2026",
    label: "Event",
    desc: "Welcoming 3,500+ new minds in a week-long orientation program held at our main auditorium.",
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80"
  }
];

export default function NewsEvents() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      gsap.from(".news-item", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".news-grid",
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-surface pb-40">
      {/* Editorial Header */}
      <section className="pt-48 pb-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto hero-text">
            <h1 className="text-display-lg md:text-8xl font-display text-on-surface leading-tight tracking-tighter mb-8 italic">
              Campus <span className="text-primary italic">Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl font-display text-on-surface-variant leading-relaxed italic opacity-80">
              Stay connected with the latest breakthroughs, institutional milestones, and vibrant cultural events shaping the PKDAS legacy.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 news-grid">
          {newsData.map((item, idx) => (
            <article key={idx} className="news-item group cursor-pointer">
              <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-ambient group-hover:shadow-2xl transition-all duration-700">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="flex items-center space-x-4 mb-4">
                 <span className="px-4 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">{item.label}</span>
                 <span className="text-on-surface-variant/40 text-[10px] font-bold uppercase tracking-widest">{item.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display text-on-surface mb-4 italic group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h2>
              <p className="text-on-surface-variant font-display text-lg opacity-70 italic leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Featured Newsletter CTA */}
      <section className="mt-40 bg-[#050505] py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(1,69,242,0.1)_0%,transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
           <h2 className="text-4xl md:text-6xl font-display text-white mb-8 italic">Never Miss an Impact Story</h2>
           <p className="text-lg font-display text-white/40 mb-10 italic max-w-2xl mx-auto">
              Subscribe to the Monthly PKDAS Digest for exclusive research insights and campus updates.
           </p>
           <form className="max-w-md mx-auto flex gap-4">
              <input type="email" placeholder="Professional Email" className="flex-grow px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-display focus:outline-none focus:border-primary transition-colors" />
              <button className="px-10 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-500">
                Join
              </button>
           </form>
        </div>
      </section>
    </main>
  );
}
