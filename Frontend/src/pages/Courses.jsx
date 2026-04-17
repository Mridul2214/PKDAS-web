import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WavyDivider } from '../components/home/WavyDivider';
import { useCoursesData } from '../hooks/useCoursesData';
import { CourseCard } from '../components/courses/CourseCard';

gsap.registerPlugin(ScrollTrigger);

export function Courses() {
  const container = useRef();
  const { tamilNaduInstitutions, keralaInstitutions } = useCoursesData();

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
                       <CourseCard key={idx} inst={inst} />
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
                       <CourseCard key={idx} inst={inst} />
                    ))}
                </div>
            </section>
        </div>
      </div>

    </main>
  );
}
