import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const departments = [
  {
    name: "Engineering & Technology",
    members: [
      { name: "Dr. Alexander Thorne", title: "Dean of Research", role: "AI & Robotics Specialist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
      { name: "Prof. Sarah Mitchell", title: "Head of Dept", role: "Quantum Computing Expert", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
      { name: "Dr. Marcus Chen", title: "Professor", role: "Sustainable Energy Systems", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    name: "Business & Leadership",
    members: [
      { name: "Dr. Elena Rodriguez", title: "Dean of Management", role: "Strategic Global Marketing", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
      { name: "Prof. James Wilson", title: "Dir. Executive MBA", role: "Corporate Finance Guru", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
      { name: "Dr. Linda Gray", title: "Professor", role: "Organizational Behavior", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80" }
    ]
  }
];

export default function FacultyPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faculty-hero h1", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });

      gsap.from(".faculty-card", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faculty-grid",
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-surface pb-40">
      {/* Editorial Profile Header */}
      <section className="pt-48 pb-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end faculty-hero">
            <div>
              <h1 className="text-display-lg md:text-8xl font-display text-on-surface leading-[0.85] tracking-tighter italic">
                The Architects <br /> <span className="text-primary italic">of Intellect</span>
              </h1>
            </div>
            <div className="pb-4">
              <p className="text-xl md:text-2xl font-display text-on-surface-variant leading-relaxed italic opacity-80">
                Learn from world-renowned researchers, dynamic industry leaders, and intellectual pioneers dedicated to shaping the global leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Mosaic / Grid */}
      <div className="container mx-auto px-6 mt-32">
        {departments.map((dept, deptIdx) => (
          <div key={deptIdx} className="mb-32">
            <div className="flex items-center space-x-6 mb-16">
              <h2 className="text-4xl font-display text-on-surface italic">{dept.name}</h2>
              <div className="flex-grow h-[1px] bg-black/5"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 faculty-grid">
              {dept.members.map((member, idx) => (
                <div key={idx} className="faculty-card group relative">
                   <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-ambient mb-8 relative">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                      {/* elegant overlay label */}
                      <div className="absolute bottom-6 left-6 right-6">
                         <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="text-white text-xs font-black uppercase tracking-widest mb-1">{member.role}</div>
                            <div className="text-white/60 text-[10px] uppercase font-bold tracking-wider">Publication: 50+ Journals</div>
                         </div>
                      </div>
                   </div>
                   
                   <div className="px-2">
                      <h3 className="text-3xl font-display text-on-surface mb-2 italic group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant flex items-center">
                        <span className="w-8 h-[1px] bg-primary mr-3"></span>
                        {member.title}
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Global Speaker / Visiting Faculty Section */}
      <section className="mt-20 container mx-auto px-6">
         <div className="bg-[#050505] rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl md:text-6xl font-display text-white mb-8 italic">Global Knowledge <br /> Exchange Programs</h2>
                  <p className="text-lg font-display text-white/60 italic leading-relaxed mb-10">
                     Our visiting faculty includes Nobel laureates, Fortune 500 CEOs, and international researchers who bring world-class perspectives directly to our lecture halls.
                  </p>
                  <button className="px-10 py-5 bg-white text-on-surface rounded-2xl font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500">
                     Explore Visiting Panel
                  </button>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl mt-8">
                     <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
