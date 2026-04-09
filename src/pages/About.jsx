import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const container = useRef();

  useGSAP(() => {
    // Reveal text elements
    gsap.utils.toArray('.gsap-reveal').forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Stagger containers
    gsap.utils.toArray('.gsap-stagger-parent').forEach((parent) => {
      gsap.fromTo(
        parent.querySelectorAll('.gsap-stagger-child'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: parent,
            start: 'top 80%',
          },
        }
      );
    });

    // Floating logo animation
    gsap.to('.hero-logo', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, { scope: container });

  return (
    <main ref={container} className="pt-32 pb-24 bg-surface min-h-[80vh] overflow-hidden relative">
      {/* Background Noise/Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-primary/5 pattern-dots pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center text-center relative mb-24 mt-10">
          
          {/* Logo Glow Behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

          {/* Floating Logo */}
          <div className="hero-logo relative z-10 mb-12">
            <img 
              src="/PKDAS-DEEMED-TO-BE-UNIVERSITY-image-vector.png" 
              alt="PKDAS Logo Hero" 
              className="w-full max-w-[400px] md:max-w-[700px] object-contain filter brightness-0 invert drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]"
            />
          </div>

          <h1 className="gsap-reveal text-display-lg md:text-7xl font-display text-white mb-8 tracking-tight font-bold drop-shadow-lg">
            Institutional Profile
          </h1>
          <p className="gsap-reveal text-xl md:text-2xl font-body text-zinc-300 leading-relaxed max-w-4xl mx-auto font-light">
            Nehru Arts and Science College (NASC) is a strategically positioned autonomous institution affiliated with Bharathiar University. Recognized by UGC with 2(f) & 12-B Status, NASC serves a diverse student body of over 3,500 students, offering 27 Undergraduate, 8 Postgraduate, and 13 Research programmes.
          </p>
        </section>

        {/* --- ACCREDITATIONS (BENTO GRID) --- */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="gsap-reveal text-4xl md:text-5xl font-display text-white font-bold mb-4 drop-shadow-md">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Accreditations</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'NAAC "A+" Grade', desc: 'Accredited with CGPA 3.50 in its third cycle.', icon: '🏆', color: 'from-amber-500/20 to-orange-600/5' },
              { title: 'NIRF Ranking', desc: 'Ranked in the 101-150 Bandwidth nationally.', icon: '📊', color: 'from-blue-500/20 to-cyan-600/5' },
              { title: 'ISO 9001:2015', desc: 'Certified Quality Management Systems.', icon: '✅', color: 'from-emerald-500/20 to-teal-600/5' },
              { title: '4 Star Rating', desc: 'Awarded by the Institution Innovation Council.', icon: '⭐', color: 'from-purple-500/20 to-fuchsia-600/5' },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`gsap-stagger-child group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl shadow-black/40 cursor-default`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500 origin-bottom-left filter drop-shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-zinc-400 font-body leading-relaxed group-hover:text-zinc-200 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- LEADERSHIP & MANAGEMENT --- */}
        <section className="mb-16">
           <div className="text-center mb-16">
            <h2 className="gsap-reveal text-4xl md:text-5xl font-display text-white font-bold mb-4 drop-shadow-md">
              Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Management</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="gsap-stagger-parent max-w-4xl mx-auto space-y-4">
            {[
              { role: 'Founder Chairman', name: 'Late P. K. Das' },
              { role: 'Managing Trustee', name: 'Adv. Dr. P. Krishna Das' },
              { role: 'CEO & Secretary', name: 'Dr. P. Krishna Kumar' },
              { role: 'Principal', name: 'Dr. V. Vijayakumar' },
            ].map((leader, idx) => (
              <div 
                key={idx}
                className="gsap-stagger-child group relative flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-white/20 hover:bg-white/[0.08] backdrop-blur-sm transition-all duration-500 overflow-hidden shadow-lg"
              >
                 {/* Hover line accent */}
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent transform scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500"></div>
                 
                 <div className="mb-2 sm:mb-0 pl-4 sm:pl-6">
                    <span className="block text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-primary/80 mb-1">
                      {leader.role}
                    </span>
                 </div>
                 <div className="pl-4 sm:pl-0 sm:text-right pr-6">
                    <span className="text-2xl md:text-3xl font-display text-white font-medium tracking-wide">
                      {leader.name}
                    </span>
                 </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
