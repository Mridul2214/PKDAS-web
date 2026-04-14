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

export function Courses() {
  const container = useRef();
  
  const tamilNaduInstitutions = [
    {
      title: "Nehru College of Aeronautics and Applied Sciences",
      category: "Aviation",
      programs: ["AME (Aircraft Maintenance Engineering)", "B.Sc Aeronautical Science", "BBA Airline & Airport Management", "MBA Airline & Airport Management"]
    },
    {
      title: "Nehru College of Management",
      category: "Management",
      programs: ["MBA", "MCA", "Ph.D"]
    },
    {
      title: "Nehru Arts and Science College",
      category: "Arts & Science",
      programs: ["UG: B.Sc, B.Com, BBA, BA", "PG: M.Sc, M.Com, MBA", "Ph.D"]
    },
    {
      title: "Nehru Institute of Engineering and Technology",
      category: "Engineering",
      programs: ["B.E: CSE, Mechanical, Civil, Aeronautical", "M.E / M.Tech", "Ph.D"]
    },
    {
      title: "Nehru Institute of Information Technology and Management",
      category: "Management",
      programs: ["MBA", "MCA"]
    },
    {
      title: "Nehru Institute of Technology",
      category: "Engineering",
      programs: ["B.E (AI, Cyber Security, IT, Civil etc.)", "M.E", "MBA"]
    },
    {
      title: "Nehru School of Architecture",
      category: "Architecture",
      programs: ["B.Arch"]
    },
    {
      title: "Nehru Kids Academy",
      category: "Schooling",
      programs: ["Play Group", "Pre-KG", "LKG", "UKG"]
    },
    {
      title: "Nehru International School",
      category: "Schooling",
      programs: ["CBSE (Class 1–12)"]
    },
    {
      title: "Nehru Institute of Health Sciences",
      category: "Health Science",
      programs: ["B.Sc Allied Health: Cardiac Technology, Radiology, Dialysis, OT & Anaesthesia"]
    },
    {
      title: "Nehru College of Physiotherapy",
      category: "Health Science",
      programs: ["BPT (Bachelor of Physiotherapy)"]
    },
    {
      title: "Nehru College of Nursing and Research Institute",
      category: "Health Science",
      programs: ["B.Sc Nursing", "GNM", "M.Sc Nursing"]
    }
  ];

  const keralaInstitutions = [
    {
      title: "Nehru College of Engineering and Research Centre",
      category: "Engineering",
      programs: ["B.Tech", "M.Tech", "MBA"]
    },
    {
      title: "Nehru College of Pharmacy",
      category: "Pharmacy",
      programs: ["B.Pharm", "D.Pharm", "M.Pharm"]
    },
    {
      title: "Nehru School of Management",
      category: "Management",
      programs: ["MBA", "Management courses"]
    },
    {
      title: "Jawaharlal College of Engineering and Technology",
      category: "Engineering",
      programs: ["B.Tech", "M.Tech"]
    },
    {
      title: "PK Das Institute of Medical Sciences (PKDIMS)",
      category: "Medical",
      programs: ["MBBS", "MD / MS Specializations"]
    },
    {
      title: "PK Das College of Nursing",
      category: "Nursing",
      programs: ["B.Sc Nursing", "M.Sc Nursing"]
    },
    {
      title: "PK Das Liberal College of Arts and Science",
      category: "Arts & Science",
      programs: ["BA, BBA, B.Com, BCA", "B.Sc (AI, CS etc.)"]
    },
    {
      title: "Jawaharlal Aviation Institute",
      category: "Aviation",
      programs: ["AME (DGCA approved)", "B.Sc Aircraft Maintenance"]
    },
    {
      title: "Nehru Academy of Law",
      category: "Law",
      programs: ["BA LLB", "BBA LLB", "LLB", "LLM"]
    },
    {
      title: "Nehru College of Architecture (Kerala Campus)",
      category: "Architecture",
      programs: ["B.Arch", "Diploma in Architecture"]
    },
    {
      title: "PK Das Super Speciality Hospital",
      category: "Hospital",
      programs: ["Clinical training for: MBBS, Nursing, Allied Health", "1000+ bed teaching hospital ecosystem"]
    },
    {
      title: "P.K. Das Institute of Social Sciences, Health Sciences & Technology",
      category: "Integrated",
      programs: ["Engineering", "Health Sciences", "Social Sciences", "Proposed Deemed University"]
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
                <span className="text-[10px] font-black tracking-[0.2em] text-[#0145F2] uppercase">25+ Specialized Sanctuaries</span>
            </div>
            <h1 className="gsap-reveal text-5xl md:text-7xl font-display font-black text-on-surface mb-6 leading-tight">
                Our <span className="text-[#0145F2]">Institutions</span>
            </h1>
            <p className="gsap-reveal text-xl font-body text-on-surface-variant max-w-4xl mx-auto leading-relaxed">
                The Nehru Group of Institutions operates a comprehensive educational ecosystem across Tamil Nadu and Kerala, ranging from K-12 schooling to Medical Sciences and Aeronautics.
            </p>
        </div>
        <WavyDivider type="wave1" color="white" position="bottom" />
      </section>

      {/* ── CAMPUS SECTIONS ── */}
      <div className="bg-white relative z-10 py-20 pb-40">
        <div className="container mx-auto px-6 max-w-7xl">
            
            {/* Tamil Nadu Section */}
            <section className="mb-32">
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-14 gsap-reveal">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface">Tamil Nadu <span className="text-[#0145F2]">Campuses</span></h2>
                    <div className="h-px bg-black/5 flex-grow"></div>
                    <span className="text-sm font-bold text-on-surface-variant/60 tracking-widest uppercase">12 Institutes</span>
                </div>
                
                <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tamilNaduInstitutions.map((inst, idx) => (
                    <div key={idx} className="gsap-stagger-child bg-[#EDF1F5] p-8 rounded-[2.5rem] border border-black/[0.03] flex flex-col h-full hover:shadow-2xl hover:shadow-[#0145F2]/10 transition-all duration-500 group">
                        <div className="text-[10px] font-black text-[#0145F2] tracking-widest uppercase mb-4 py-1.5 px-4 bg-white rounded-full self-start shadow-sm">{inst.category}</div>
                        <h3 className="text-2xl font-display font-medium text-on-surface mb-8 leading-snug group-hover:text-[#0145F2] transition-colors">{inst.title}</h3>
                        
                        <div className="mt-auto">
                            <ul className="space-y-3 pt-6 border-t border-black/5">
                                {inst.programs.map((prog, i) => (
                                <li key={i} className="flex items-start text-on-surface-variant/80 font-body text-sm hover:text-on-surface transition-colors cursor-default leading-relaxed group/item">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0145F2]/40 mt-1.5 mr-3 group-hover/item:bg-[#0145F2] transition-colors"></div>
                                    {prog}
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    ))}
                </div>
            </section>

            {/* Kerala Section */}
            <section className="relative">
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-14 gsap-reveal">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface">Kerala <span className="text-[#0145F2]">Campuses</span></h2>
                    <div className="h-px bg-black/5 flex-grow"></div>
                    <span className="text-sm font-bold text-on-surface-variant/60 tracking-widest uppercase">12 Institutes</span>
                </div>
                
                <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {keralaInstitutions.map((inst, idx) => (
                    <div key={idx} className="gsap-stagger-child bg-[#EDF1F5] p-8 rounded-[2.5rem] border border-black/[0.03] flex flex-col h-full hover:shadow-2xl hover:shadow-[#0145F2]/10 transition-all duration-500 group">
                        <div className="text-[10px] font-black text-[#0145F2] tracking-widest uppercase mb-4 py-1.5 px-4 bg-white rounded-full self-start shadow-sm">{inst.category}</div>
                        <h3 className="text-2xl font-display font-medium text-on-surface mb-8 leading-snug group-hover:text-[#0145F2] transition-colors">{inst.title}</h3>
                        
                        <div className="mt-auto">
                            <ul className="space-y-3 pt-6 border-t border-black/5">
                                {inst.programs.map((prog, i) => (
                                <li key={i} className="flex items-start text-on-surface-variant/80 font-body text-sm hover:text-on-surface transition-colors cursor-default leading-relaxed group/item">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0145F2]/40 mt-1.5 mr-3 group-hover/item:bg-[#0145F2] transition-colors"></div>
                                    {prog}
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </div>
      </div>

    </main>
  );
}
