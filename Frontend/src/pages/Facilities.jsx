import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Wave Divider Component ---
const WavyDivider = ({ type = 'wave1', color = 'white', position = 'top', flipped = false, opacity = 1 }) => {
    const waves = {
      wave1: "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,112C960,139,1056,181,1152,176C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
      wave2: "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,80C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
      wave3: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    };
  
    return (
      <div className={`section-wave wave-${position} ${flipped ? 'wave-flipped' : ''}`} style={{ opacity, position: 'absolute', width: '100%', left: 0, zIndex: 10 }}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path fill={color} fillOpacity="1" d={waves[type]}></path>
        </svg>
      </div>
    );
};

export function Facilities() {
  const container = useRef();
  
  const facilities = [
    {
      title: "Smart Infrastructure",
      tag: "Academics",
      desc: "Immersive learning environments equipped with smart boards and digital interactive tools to enhance the educational journey.",
      img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Advanced Labs",
      tag: "Research",
      desc: "State-of-the-art specialized laboratories for AI research, Robotics, and Medical sciences with industry-grade equipment.",
      img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Digital Library",
      tag: "Resource",
      desc: "A vast repository of legacy and digital resources, providing students access to international journals and thousands of academic volumes.",
      img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Premium Hostels",
      tag: "Living",
      desc: "Secure and modern living quarters designed to feel like home, featuring high-speed connectivity and optimized study spaces.",
      img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sports Complex",
      tag: "Athletics",
      desc: "International standard courts and athletics tracks to foster physical excellence alongside academic achievement.",
      img: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Medical Center",
        tag: "Healthcare",
        desc: "24/7 on-campus healthcare facility managed by PKDIMS specialists for the safety and well-being of our community.",
        img: "https://images.unsplash.com/photo-1538108176447-28058c3f1f80?auto=format&fit=crop&q=80&w=800"
    }
  ];

  useGSAP(() => {
    gsap.utils.toArray('.gsap-reveal').forEach((el) => {
      gsap.fromTo(el, { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    });

    gsap.utils.toArray('.gsap-stagger-parent').forEach((parent) => {
      gsap.fromTo(parent.querySelectorAll('.gsap-stagger-child'), 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: parent, start: 'top 80%' } }
      );
    });
  }, { scope: container });

  return (
    <main ref={container} className="bg-white min-h-screen relative overflow-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-40 bg-[#EDF1F5] overflow-hidden">
        <div className="container mx-auto px-6 relative z-20 text-center">
            <div className="inline-block px-4 py-2 bg-[#0145F2]/10 border border-[#0145F2]/20 rounded-full mb-6 gsap-reveal">
                <span className="text-[10px] font-black tracking-[0.2em] text-[#0145F2] uppercase">World-Class Campus</span>
            </div>
            <h1 className="gsap-reveal text-5xl md:text-7xl font-display font-medium text-on-surface mb-6 leading-tight italic">
                Campus <span className="text-[#0145F2] italic">Facilities</span>
            </h1>
            <p className="gsap-reveal text-xl md:text-2xl font-display text-on-surface-variant max-w-4xl mx-auto leading-relaxed italic opacity-80">
                Explore the sophisticated infrastructure that defines the PKDAS experience — where modern technology meets architectural excellence.
            </p>
        </div>
        <WavyDivider type="wave1" color="white" position="bottom" />
      </section>

      {/* ── FACILITIES GRID ── */}
      <section className="bg-white relative z-10 py-32">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {facilities.map((fac, idx) => (
                <div key={idx} className="gsap-stagger-child group flex flex-col">
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-700 h-80">
                        <img 
                            src={fac.img} 
                            alt={fac.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100" 
                        />
                        <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-[#0145F2] uppercase shadow-sm">
                            {fac.tag}
                        </div>
                    </div>
                    <h2 className="text-3xl font-display font-medium text-on-surface mb-4 group-hover:text-[#0145F2] transition-colors italic">{fac.title}</h2>
                    <p className="text-lg font-display text-on-surface-variant leading-relaxed italic opacity-70">{fac.desc}</p>
                    
                    <div className="mt-8 flex items-center gap-2 text-[10px] font-black tracking-widest text-[#0145F2] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                        <span>Explore Facility</span>
                        <div className="w-8 h-px bg-[#0145F2]"></div>
                    </div>
                </div>
                ))}
            </div>
        </div>
      </section>

    </main>
  );
}
