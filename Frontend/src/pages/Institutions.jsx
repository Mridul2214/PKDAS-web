import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const institutions = [
  {
    group: "PKDAS Group of Institutions",
    colleges: [
      {
        name: "Nehru Institute of Engineering & Technology (NIET)",
        desc: "A premier engineering college with NBA & NAAC accreditation, offering cutting-edge technical education in Coimbatore.",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=90",
        badge: "NBA Accredited",
        link: "/courses"
      },
      {
        name: "Nehru College of Engineering & Research Centre (NCERC)",
        desc: "Pioneering technical and research-based education with state-of-the-art labs and innovation centers in Pambady.",
        img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=90",
        badge: "NAAC A+",
        link: "/courses"
      },
      {
        name: "Nehru College of Management (NCM)",
        desc: "Nurturing strategic business leaders through rigorous academic training and high-end industrial exposure.",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=90",
        badge: "Placement Star",
        link: "/courses"
      }
    ]
  },
  {
    group: "Arts & Healthcare",
    colleges: [
      {
        name: "Nehru Arts and Science College (NASC)",
        desc: "Empowering students through liberal arts and scientific research in a vibrant academic environment.",
        img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=90",
        badge: "Autonomous",
        link: "/courses"
      },
      {
        name: "Nehru College of Nursing",
        desc: "Providing comprehensive healthcare education and clinical training to shape the nurses of tomorrow.",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=90",
        badge: "MCI Approved",
        link: "/courses"
      },
      {
        name: "Nehru College of Pharmacy",
        desc: "Dedicated to pharmaceutical research and clinical excellence with global industry standards.",
        img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=90",
        badge: "PCI Approved",
        link: "/courses"
      }
    ]
  }
];

export default function Institutions() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gsap-reveal", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".gsap-trigger",
          start: "top 80%",
        }
      });

      gsap.from(".college-card", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".college-grid",
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-surface pb-32">
      {/* Dynamic Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-display-lg md:text-8xl font-display text-white mb-6 uppercase tracking-tighter italic">
            World Class <br/> <span className="text-primary italic">Institutions</span>
          </h1>
          <p className="text-xl md:text-2xl font-display text-white/60 max-w-3xl mx-auto leading-relaxed">
            A diverse ecosystem of specialized colleges and research centers dedicated to excellence across all major domains.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 gsap-trigger">
        {institutions.map((group, groupIdx) => (
          <div key={groupIdx} className="mt-32">
            <div className="flex items-center space-x-6 mb-12 gsap-reveal">
              <h2 className="text-4xl md:text-5xl font-display text-on-surface italic">{group.group}</h2>
              <div className="flex-grow h-[1px] bg-black/5"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 college-grid">
              {group.colleges.map((college, idx) => (
                <Link to={college.link} key={idx} className="college-card group relative block bg-white rounded-[2rem] overflow-hidden shadow-ambient hover:shadow-2xl transition-all duration-700 hover:-translate-y-4">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img src={college.img} alt={college.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                        {college.badge}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-display text-on-surface mb-4 group-hover:text-primary transition-colors duration-300">
                      {college.name}
                    </h3>
                    <p className="text-on-surface-variant font-display text-sm leading-relaxed mb-6 line-clamp-3 italic">
                      {college.desc}
                    </p>
                    <div className="flex items-center text-primary text-xs font-black uppercase tracking-[0.2em]">
                      Explore Programs <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Corporate Trust Section */}
      <section className="mt-40 bg-white py-32 border-y border-black/5">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-display text-on-surface mb-8 italic">The PKDAS Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-20 max-w-5xl mx-auto">
               <div>
                  <div className="text-4xl font-display font-bold text-primary mb-2">25+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Global Centers</div>
               </div>
               <div>
                  <div className="text-4xl font-display font-bold text-primary mb-2">500+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Industry Partners</div>
               </div>
               <div>
                  <div className="text-4xl font-display font-bold text-primary mb-2">50k+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Global Alumni</div>
               </div>
               <div>
                  <div className="text-4xl font-display font-bold text-primary mb-2">100%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Research Focus</div>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
