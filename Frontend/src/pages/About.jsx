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
      <div 
        className={`absolute left-0 w-full overflow-hidden pointer-events-none z-0 ${position === 'top' ? 'top-0' : 'bottom-0'} ${flipped ? 'rotate-180' : ''}`}
        style={{ opacity }}
      >
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="block w-full h-[120px] md:h-[180px]">
          <path fill={color} fillOpacity="1" d={waves[type]}></path>
        </svg>
      </div>
    );
};

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
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: parent,
            start: 'top 80%',
          },
        }
      );
    });

    // Parallax effect for image cards
    gsap.utils.toArray('.parallax-img-container').forEach((container) => {
      const img = container.querySelector('img');
      if (!img) return;
      gsap.fromTo(img, 
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      );
    });
  }, { scope: container });

  return (
    <main ref={container} className="bg-white min-h-screen overflow-hidden relative">
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <div className="absolute top-[10%] left-[-15%] w-[800px] h-[800px] bg-[#0145F2]/10 rounded-full blur-[160px] mix-blend-multiply opacity-40"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-amber-200/10 rounded-full blur-[140px] mix-blend-multiply opacity-40"></div>
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-full h-full premium-noise opacity-[0.05]"></div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-24 pb-40 lg:pt-32 lg:pb-48 bg-[#EDF1F5] overflow-hidden">
        <div className="absolute inset-0 premium-noise opacity-20"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0145F2]/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 border-[1px] border-[#0145F2]/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-[#0145F2]/10 border border-[#0145F2]/20 rounded-full mb-6 gsap-reveal">
            <span className="text-[10px] font-black tracking-[0.2em] text-[#0145F2] uppercase">Legacy of Excellence</span>
          </div>
          <h1 className="gsap-reveal text-6xl md:text-8xl lg:text-9xl font-editorial font-normal text-on-surface mb-10 leading-[0.85] tracking-tight">
            Institutional <br />
            <span className="font-display font-medium italic text-[#0145F2] ml-4 md:ml-12">Profile</span>
          </h1>
          <p className="gsap-reveal text-lg md:text-xl font-body text-on-surface-variant leading-relaxed max-w-3xl mx-auto opacity-80 border-l-2 border-[#0145F2]/20 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            PKDAS Deemed to be University is a strategically positioned autonomous institution committed to academic brilliance. With over <span className="text-on-surface font-semibold">50 years of legacy</span>, we serve as a beacon of quality education across 27 Undergraduate and 8 Postgraduate programmes.
          </p>
        </div>

        <WavyDivider type="wave1" color="white" position="bottom" />
      </section>

      {/* ── ACCREDITATIONS SECTION ── */}
      <section id="accreditations" className="relative pt-24 pb-48 lg:pt-32 lg:pb-56 bg-white z-10 flex flex-col">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <h2 className="gsap-reveal text-4xl md:text-5xl font-editorial font-normal text-on-surface mb-4 leading-tight">Recognitions & <br /><i className="font-display font-bold italic">Accreditations</i></h2>
                <p className="gsap-reveal text-on-surface-variant font-body text-lg opacity-70">Our commitment to quality is validated by the nation's highest governing bodies.</p>
              </div>
              <div className="gsap-reveal hidden md:block w-32 h-px bg-black/10 mb-6"></div>
            </div>

            <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'NAAC "A+"', desc: 'The highest possible accreditation grade for quality education.', icon: '🏆', tag: 'Accreditation' },
                { title: 'NIRF Ranked', desc: 'Consistently ranked among the top institutions in India.', icon: '📊', tag: 'Ranking' },
                { title: 'UGC 12-B', desc: 'Recognized by University Grants Commission for excellence.', icon: '🎓', tag: 'Status' },
                { title: 'ISO Certified', desc: '9001:2015 Certification for quality management.', icon: '✅', tag: 'Standard' },
              ].map((item, idx) => (
                <div key={idx} className="gsap-stagger-child group p-8 rounded-[2rem] bg-[#EDF1F5] hover:bg-[#0145F2] transition-all duration-500 cursor-default shadow-sm hover:shadow-2xl hover:shadow-[#0145F2]/20 hover:-translate-y-2 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <div className="text-[10px] font-black tracking-widest text-[#0145F2] group-hover:text-amber-400 uppercase mb-3 transition-colors flex items-center gap-2">
                    <span className="w-4 h-px bg-[#0145F2]/30 group-hover:bg-amber-400/50"></span>
                    {item.tag}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-on-surface group-hover:text-white mb-3 leading-tight tracking-tight transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] font-body text-on-surface-variant group-hover:text-white/80 leading-relaxed transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <WavyDivider type="wave2" color="#EDF1F5" position="bottom" />
      </section>

      {/* ── MISSION & VISION ── */}
      <section id="mission" className="relative py-24 lg:py-32 bg-[#EDF1F5] z-10 overflow-hidden">
        {/* Decorative elements for Mission section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/40 blur-[80px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#0145F2]/5 blur-[80px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 border-t border-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            <div className="gsap-reveal p-10 lg:p-12 bg-white rounded-[2rem] lg:rounded-[3rem] shadow-xl border border-black/5 relative z-10">
              <div className="text-4xl mb-6">🎯</div>
              <h2 className="text-4xl font-editorial font-normal text-on-surface mb-6 italic">Our <span className="font-display font-bold not-italic">Mission</span></h2>
              <p className="text-lg font-body text-on-surface-variant leading-relaxed opacity-80">
                To provide high-quality education and training to students to excel in their chosen fields. To foster a culture of research and innovation to address societal challenges.
              </p>
            </div>
            <div className="gsap-reveal p-10 lg:p-12 bg-[#0145F2] rounded-[2rem] lg:rounded-[3rem] shadow-xl shadow-[#0145F2]/10 relative z-10">
              <div className="text-4xl mb-6">👁️</div>
              <h2 className="text-4xl font-editorial font-normal text-white mb-6 italic">Our <span className="font-display font-bold not-italic">Vision</span></h2>
              <p className="text-lg font-body text-white/80 leading-relaxed">
                To be a globally recognized center of excellence in higher education, research, and innovation, producing socially responsible leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP SECTION ── */}
      <section id="leadership" className="relative py-24 lg:py-32 bg-white z-10 overflow-hidden">
        <WavyDivider type="wave3" color="#EDF1F5" position="top" flipped />

        {/* Background Accents for Leadership */}
        <div className="absolute top-[10%] right-[10%] w-32 h-32 border-2 border-[#0145F2]/5 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-[20%] left-[5%] w-16 h-16 bg-amber-400/10 rounded-full blur-xl"></div>

        <div className="container mx-auto px-6 pt-16 lg:pt-24 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="gsap-reveal text-4xl md:text-5xl font-editorial font-normal text-on-surface mb-4">Eminent <br /><i className="font-display font-bold italic">Leadership</i></h2>
            <p className="gsap-reveal text-on-surface-variant font-body text-lg opacity-70">Guided by visionaries who have dedicated their lives to institutional building.</p>
          </div>

          <div className="gsap-stagger-parent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { role: 'Founder Chairman', name: 'Late P. K. Das', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
              { role: 'Managing Trustee', name: 'Adv. Dr. P. Krishna Das', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
              { role: 'CEO & Secretary', name: 'Dr. P. Krishna Kumar', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
              { role: 'Principal', name: 'Dr. V. Vijayakumar', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
            ].map((leader, idx) => (
              <div key={idx} className="gsap-stagger-child group text-center">
                <div className="parallax-img-container relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-zinc-100">
                  <img src={leader.img} alt={leader.name} className="absolute inset-0 w-full h-[120%] object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0145F2]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-[10px] font-black tracking-widest text-[#0145F2] uppercase mb-1 whitespace-nowrap overflow-hidden text-ellipsis px-4">{leader.role}</div>
                <h3 className="text-xl font-display font-bold text-on-surface mb-1 truncate px-4">{leader.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
