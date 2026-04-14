import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StatCounter } from '../components/StatCounter';
import { LogosCarousel } from '../components/LogosCarousel';

gsap.registerPlugin(ScrollTrigger);

const placementServices = [
  {
    title: "Career Guidance",
    desc: "Personalized mentorship and roadmap planning for every student to reach their dream career destination.",
    icon: "🎯"
  },
  {
    title: "Recruiter Interface",
    desc: "Direct access to 500+ global industry partners and Fortune 500 companies in a single integrated platform.",
    icon: "🤝"
  },
  {
    title: "Internship Programs",
    desc: "Early industry exposure with paid internships and project-based learning for industrial readiness.",
    icon: "💼"
  }
];

export default function Placements() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".placements-hero h1 span", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out"
      });

      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-grid",
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-surface overflow-hidden">
      {/* Premium Hero with Subtle Animation */}
      <section className="relative pt-48 pb-32 bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl placements-hero">
            <h1 className="text-display-lg md:text-8xl font-display text-on-surface leading-tight tracking-tighter mb-8 italic">
              Empowering <br /> <span className="text-primary italic">Global Careers</span>
            </h1>
            <p className="text-xl md:text-2xl font-display text-on-surface-variant max-w-2xl leading-relaxed italic opacity-80">
              Our placement cell bridges the gap between students and the global industry, ensuring 100% professional readiness and high-tier placement standards.
            </p>
          </div>
        </div>
        
        {/* Floating Stat Element */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block">
            <div className="w-80 h-80 rounded-full border border-black/5 flex flex-col items-center justify-center p-10 text-center bg-white shadow-ambient">
                <div className="text-display-md font-display text-primary animate-pulse">32.5</div>
                <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant">LPA Highest Package</div>
            </div>
        </div>
      </section>

      {/* Core Statistics Multi-Column */}
      <section className="py-32 bg-[#050505] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-display-sm font-display font-black text-primary mb-2">
                <StatCounter end={500} suffix="+" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Active Recruiters</div>
            </div>
            <div>
              <div className="text-display-sm font-display font-black text-primary mb-2">
                <StatCounter end={98} suffix="%" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Placement Record</div>
            </div>
            <div>
              <div className="text-display-sm font-display font-black text-primary mb-2">
                <StatCounter end={85} suffix="+" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Single Drive Offers</div>
            </div>
            <div>
              <div className="text-display-sm font-display font-black text-primary mb-2">
                <StatCounter end={120} suffix="+" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40">MNC Partnerships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-40 bg-surface">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-6 mb-24">
            <h2 className="text-5xl font-display text-on-surface italic">Our Ecosystem</h2>
            <div className="flex-grow h-[1px] bg-black/5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 service-grid">
            {placementServices.map((service, idx) => (
              <div key={idx} className="service-card group bg-white p-12 rounded-[2.5rem] shadow-ambient hover:shadow-2xl transition-all duration-700 hover:-translate-y-4">
                <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-3xl font-display text-on-surface mb-6 group-hover:text-primary transition-colors duration-300 italic">{service.title}</h3>
                <p className="text-on-surface-variant font-display text-lg leading-relaxed italic opacity-70">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters Carousel Section */}
      <section className="py-40 bg-white border-y border-black/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 mx-auto text-center">
             <h2 className="text-5xl font-display text-on-surface mb-6 italic">Top Tier Recruiters</h2>
             <p className="text-lg font-display text-on-surface-variant italic opacity-70">
                Strategic partnerships with over 500+ global firms, tech giants, and innovative startups.
             </p>
          </div>
          <div className="py-10">
            <LogosCarousel />
          </div>
        </div>
      </section>

      {/* Success Stories Overlay CTA */}
      <section className="relative h-[600px] overflow-hidden">
         <img src="https://images.unsplash.com/photo-1521791136064-7986c295944b?auto=format&fit=crop&w=2000&q=80" alt="Alumni" className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm flex items-center justify-center text-center p-6">
            <div className="max-w-3xl">
               <h2 className="text-5xl md:text-7xl font-display text-white mb-8 italic">Your Journey to <br/> Excellence Starts Here</h2>
               <Link to="/contact" className="inline-block px-12 py-5 bg-white text-primary rounded-2xl font-black uppercase tracking-widest hover:bg-on-surface hover:text-white transition-all duration-500 shadow-2xl">
                  Connect with Career Cell
               </Link>
            </div>
         </div>
      </section>
    </main>
  );
}
