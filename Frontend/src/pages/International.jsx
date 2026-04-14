import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { country: "United Kingdom", university: "University of Cambridge (Research Partner)", label: "Academic Exchange" },
  { country: "United States", university: "Stanford Innovation Lab", label: "Research Link" },
  { country: "Germany", university: "TU Munich Technology Centre", label: "Industrial Training" },
  { country: "Australia", university: "University of Melbourne", label: "Student Exchange" }
];

export default function International() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power4.out"
      });

      gsap.from(".partner-row", {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".partner-list",
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-surface pb-40 overflow-hidden">
      {/* Cinematic International Hero */}
      <section className="relative h-[80vh] flex items-center bg-[#050505] overflow-hidden">
         <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000">
            <img src="https://images.unsplash.com/photo-1523050335456-cdaef7138f97?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover" alt="International" />
         </div>
         <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10 hero-content">
            <h1 className="text-display-lg md:text-9xl font-display text-white leading-[0.85] tracking-tighter mb-8 italic">
               Global <br /> <span className="text-primary italic">Borderless</span> <br /> Education
            </h1>
            <p className="text-xl md:text-2xl font-display text-white/50 max-w-2xl leading-relaxed italic">
               Fostering global citizenship through diverse exchange programs, international research collaborations, and cross-continental academic partnerships.
            </p>
         </div>
         
         {/* Rotating Badge Decoration */}
         <div className="absolute right-[-100px] bottom-[-100px] w-[500px] h-[500px] border border-white/5 rounded-full flex items-center justify-center animate-spin-slow">
            <div className="w-[300px] h-[300px] border border-white/10 rounded-full"></div>
         </div>
      </section>

      {/* Partnership List Section */}
      <section className="py-40 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
               <div>
                  <h2 className="text-5xl font-display text-on-surface mb-8 italic">Global University <br /> Network</h2>
                  <p className="text-lg font-display text-on-surface-variant italic opacity-70 mb-12">
                     We maintain active academic partnerships with top-tier universities across the globe, facilitating high-impact research projects and immersive student exchange opportunities.
                  </p>
                  <div className="space-y-4 partner-list">
                     {partners.map((p, idx) => (
                        <div key={idx} className="partner-row p-8 bg-surface rounded-2xl border border-black/5 flex justify-between items-center group hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer shadow-ambient">
                           <div>
                              <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">{p.country}</div>
                              <div className="text-xl font-display italic">{p.university}</div>
                           </div>
                           <div className="text-[10px] font-black uppercase tracking-widest py-1 px-3 bg-white text-primary rounded-full">{p.label}</div>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="relative">
                  <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                     <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" />
                  </div>
                  {/* Floating Metric Card */}
                  <div className="absolute bottom-10 -left-10 z-20 bg-white p-10 rounded-3xl shadow-2xl border border-black/5 max-w-[280px]">
                     <div className="text-5xl font-display text-primary mb-2">15+</div>
                     <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Active Countries Across 4 Continents</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Global Students Section CTA */}
      <section className="py-40 bg-[#050505] text-white overflow-hidden relative">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-display mb-8 italic">Home to Students from <br /> Over 20+ Nationalities</h2>
            <p className="text-xl font-display text-white/40 mb-12 italic max-w-2xl mx-auto">
               Experience a truly multicultural environment that prepares you to lead in a globalized world.
            </p>
            <button className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl shadow-primary/20">
               International Admissions Office
            </button>
         </div>
      </section>
    </main>
  );
}
