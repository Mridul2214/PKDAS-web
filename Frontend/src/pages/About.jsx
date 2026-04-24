import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/about.css';

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

// Recognition card data
const recognitions = [
  {
    title: 'NAAC "A++"',
    desc: 'Among fewer than 5% of Indian universities to achieve the highest national accreditation grade — a benchmark of transformative academic quality.',
    icon: '🏆',
    tag: 'Accreditation',
  },
  {
    title: 'NIRF Ranked',
    desc: 'Consistently featured in India\'s National Institutional Ranking Framework, placing us among the nation\'s top institutions for research and education.',
    icon: '📊',
    tag: 'Ranking',
  },
  {
    title: 'UGC 12-B',
    desc: 'Granted UGC 12-B status, enabling receipt of central government grants and recognising our sustained commitment to academic standards.',
    icon: '🎓',
    tag: 'Status',
  },
  {
    title: 'ISO 9001:2015',
    desc: 'Certified for quality management systems across administration, academics, and student services — ensuring consistent, process-driven excellence.',
    icon: '✅',
    tag: 'Standard',
  },
];

// Leadership data
const leadershipTier2 = [
  {
    role: 'Chairman & Managing Trustee',
    name: 'Adv. Dr. P. Krishnadas',
    img: '/Adv. Dr. P. Krishnadas,.png',
    link: '/managing-trustee',
    desc: 'Driving the university\'s multidisciplinary expansion and championing research-driven pedagogy to bridge academia with real-world industry demands. Under his leadership, PKDAS has forged key partnerships and built merit-based scholarship frameworks.',
  },
  {
    role: 'Pro-Chancellor & CEO',
    name: 'Dr. P. Krishnakumar',
    img: '/Dr.P.Krishnakumar MBA, PhD.png',
    link: '/ceo-secretary',
    desc: 'A catalyst for academic transformation, redesigning curricula to integrate experiential learning, entrepreneurship, and global exchange programmes. His focus on industry-aligned outcomes has elevated placement rates and strengthened ties with global recruiting organisations.',
  },
  {
    role: 'Executive Director',
    name: 'Prof. Dr. H. N. Nagaraja',
    img: '/Prof. Dr. H. N. Nagaraja.png',
    link: '/executive-director',
    desc: 'An Academician with 37 years of experience as a teacher, Administrator and Researcher. Instrumental in getting institutions NAAC and NBA accreditation, participating in NIRF and QS-I-Guage, and establishing centers of excellence.',
  },
];

const LeadershipDialog = ({ leader, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!leader) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pt-24"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl mt-10 md:mt-0 rounded-3xl overflow-hidden shadow-2xl bg-white"
        style={{
          border: '1px solid rgba(0,0,0,0.05)',
          animation: 'dialogFadeIn 0.25s ease-out',
          maxHeight: '85vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div className="relative h-40 bg-gradient-to-br from-[#0145F2] via-[#0145F2]/80 to-[#0b1120] flex items-end px-8 pb-4">
          <div className="absolute inset-0 opacity-10 font-black text-8xl flex items-center justify-center tracking-[0.4em] text-white select-none pointer-events-none overflow-hidden">
            PKDAS
          </div>
          <div className="absolute -bottom-14 left-8">
            <img
              src={leader.img}
              alt={leader.name}
              className="w-32 h-32 object-cover rounded-2xl border-4 shadow-xl border-white"
            />
          </div>
        </div>

        <div className="pt-20 px-8 pb-8">
          <div className="mb-2">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#0145F2]/10 text-[#0145F2]">
              {leader.role}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">{leader.name}</h2>
          
          <div className="mb-8">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{leader.desc}</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes dialogFadeIn {
          from { opacity: 0; transform: scale(0.94) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export function About() {
  const container = useRef();
  const [selectedLeader, setSelectedLeader] = useState(null);

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
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: parent,
            start: 'top 80%',
          },
        }
      );
    });
  }, { scope: container });

  return (
    <main ref={container} className="bg-white min-h-screen overflow-hidden relative">

      {/* ── 1. CHAIRMAN HERO SECTION (Top Priority) ── */}
      <section className="relative pt-12 pb-56 lg:pt-16 lg:pb-64 bg-[#0b1120] overflow-hidden about-section">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1120] via-[#051842] to-[#0145F2] opacity-80" />
        {/* Decorative blur elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0145F2]/30 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20" style={{ maxWidth: '1320px' }}>
          
          {/* Chairman Image */}
          <div className="gsap-reveal relative w-full max-w-md lg:max-w-lg shrink-0 aspect-[3/4] flex items-center justify-center py-6 pr-6">
            
            {/* 1. Light blue L-shape accent behind */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[50%] z-0 drop-shadow-2xl">
              {/* Vertical bar */}
              <div className="absolute right-0 bottom-0 w-[45%] h-full bg-[#6CA1D1] rounded-3xl" />
              {/* Horizontal bar */}
              <div className="absolute bottom-0 right-0 w-full h-[45%] bg-[#6CA1D1] rounded-3xl" />
            </div>

            {/* 2. Main Image Container (Pill shape) */}
            <div className="relative z-10 w-[85%] h-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gradient-to-b from-gray-200 to-gray-400 mr-auto border border-white/10">
               <img
                src="/chairman.png"
                alt="Late Shri P. K. Das - Founder Chairman"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                style={{ mixBlendMode: 'darken' }}
              />
               {/* Bottom dark fade */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/30 to-transparent opacity-90 pointer-events-none" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="gsap-reveal text-left flex-1 text-white">
            <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-xs font-black tracking-[0.2em] uppercase text-white/80">Founder Chairman</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Late Shri P. K. Das
            </h1>
            
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#0145F2] to-[#60A5FA] rounded-full mb-8 shadow-sm" />
            
            <div className="relative mb-10 max-w-2xl">
              <p className="text-[19px] md:text-xl font-body text-white/90 leading-relaxed italic font-light relative z-10">
                Our vision was never just to build a campus, but to create an ecosystem where education empowers individuals to transcend their circumstances. We strive to nurture minds that are not only academically brilliant but ethically grounded and socially responsible, ready to lead in an ever-evolving global landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/courses"
                className="cta-btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0145F2] hover:bg-[#0037c4] text-white rounded-full font-bold text-[17px] shadow-[0_0_20px_rgba(1,69,242,0.4)] hover:shadow-[0_0_30px_rgba(1,69,242,0.6)] transition-all"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
        <WavyDivider type="wave1" color="white" position="bottom" />
      </section>

      {/* ── 3. EMINENT LEADERSHIP SECTION ── */}
      <section id="leadership" className="relative pt-4 pb-16 lg:pb-16 bg-white z-10 overflow-hidden about-section">

        <div className="mx-auto px-6 lg:px-12 pt-4 relative z-10 w-full" style={{ maxWidth: '1320px' }}>

          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="gsap-reveal text-4xl md:text-5xl font-display font-bold text-on-surface mb-5 leading-tight">
              Eminent Leadership
            </h2>
            <p className="gsap-reveal text-[18px] font-body text-slate-700 leading-relaxed">
              Guided by visionaries dedicated to expanding upon the foundation of excellence and building an institution of lasting global impact.
            </p>
          </div>

          <div className="gsap-stagger-parent leadership-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTier2.map((leader, idx) => (
              <div
                key={idx}
                className="gsap-stagger-child flex flex-col leadership-card group relative rounded-[2rem] overflow-hidden bg-[#EDF1F5] hover:bg-[#0145F2] transition-colors duration-500 shadow-sm hover:shadow-2xl hover:shadow-[#0145F2]/20 hover:-translate-y-2 border border-black/5"
                style={{ transition: 'background 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease' }}
              >
                <div className="relative w-full aspect-[4/3] shrink-0 border-b border-black/5">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="leadership-card-body p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="text-[10px] font-black tracking-widest text-[#0145F2] group-hover:text-white/80 uppercase mb-3 transition-colors duration-300 min-h-[32px]">
                      {leader.role}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-on-surface group-hover:text-white mb-4 transition-colors duration-300 leading-snug">
                      {leader.name}
                    </h3>
                    <p className="text-[15px] font-body text-[#475569] group-hover:text-white/90 leading-relaxed transition-colors duration-300 line-clamp-3 mb-6">
                      {leader.desc}
                    </p>
                  </div>
                  {leader.link ? (
                    <Link 
                      to={leader.link}
                      className="mt-auto self-start text-[11px] font-bold tracking-widest text-[#0145F2] group-hover:text-white uppercase flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                      View Profile
                      <span className="text-lg leading-none">→</span>
                    </Link>
                  ) : (
                    <button 
                      onClick={() => setSelectedLeader(leader)}
                      className="mt-auto self-start text-[11px] font-bold tracking-widest text-[#0145F2] group-hover:text-white uppercase flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                      View Profile
                      <span className="text-lg leading-none">→</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. OUR PROFILE ── */}
      <section id="profile" className="relative pb-24 pt-16 lg:pb-32 lg:pt-24 bg-[#EDF1F5] z-10 about-section">
        <WavyDivider type="wave3" color="white" position="top" flipped />
        
        <div className="mx-auto px-6 lg:px-12 pt-16 lg:pt-24 relative z-10 w-full" style={{ maxWidth: '1320px' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-5 py-2 bg-[#0145F2]/10 border border-[#0145F2]/25 rounded-full mb-6 gsap-reveal">
              <span className="text-[10px] font-black tracking-[0.22em] text-[#0145F2] uppercase">Our Profile</span>
            </div>
            <h2 className="gsap-reveal text-4xl md:text-5xl font-display font-bold text-on-surface mb-8 leading-tight">
              A Legacy of Academic Excellence
            </h2>
            <p className="gsap-reveal text-[18px] md:text-[20px] font-body text-[#334155] leading-relaxed mb-12">
              Nehru Group of Institutions is an educational network with a legacy of more than five decades, built around academic excellence, skill development, and service to society. The group presents itself as a multidisciplinary institution serving students across Tamil Nadu and Kerala through programs in engineering, architecture, arts, science, medical, research, and technical education.
            </p>

            {/* Stats strip */}
            <div className="gsap-reveal inline-flex flex-wrap justify-center gap-8 lg:gap-14 px-10 py-8 bg-white shadow-xl shadow-black/5 rounded-[2rem] border border-black/5">
              {[
                { value: '55+', label: 'Years of Legacy' },
                { value: '35+', label: 'Programmes Offered' },
                { value: '1,00,000+', label: 'Students Nurtured' },
                { value: '20+', label: 'Institutions' },
              ].map((stat, i) => (
                <div key={i} className="text-center px-4">
                  <div className="text-4xl font-display font-bold text-[#0145F2] leading-none mb-2">{stat.value}</div>
                  <div className="text-[12px] font-bold tracking-widest text-[#475569] uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4b. HISTORY & HERITAGE ── */}
      <section id="heritage" className="relative py-24 lg:py-32 bg-white z-10 about-section">
        <div className="mx-auto px-6 lg:px-12 relative z-10 w-full" style={{ maxWidth: '1320px' }}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Content */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-block px-5 py-2 bg-[#0145F2]/10 border border-[#0145F2]/25 rounded-full mb-6 gsap-reveal">
                <span className="text-[10px] font-black tracking-[0.22em] text-[#0145F2] uppercase">History & Heritage</span>
              </div>
              <h2 className="gsap-reveal text-4xl md:text-5xl font-display font-bold text-on-surface mb-8 leading-tight">
                Five Decades of Transformative Education
              </h2>
              <div className="space-y-6">
                <p className="gsap-reveal text-[18px] font-body text-[#334155] leading-relaxed">
                  Nehru Group of Institutions was established in 1968 in Kuniamuthur, Coimbatore, Tamil Nadu by Late Shri P.K. Das as a centre of educational excellence for students in Tamil Nadu and Kerala.
                </p>
                <p className="gsap-reveal text-[18px] font-body text-[#334155] leading-relaxed">
                  The institution was created at a time when educational opportunities and academic resources were limited, with a special focus on helping students from economically backward backgrounds continue their education through academic and vocational pathways.
                </p>
                <p className="gsap-reveal text-[18px] font-body text-[#334155] leading-relaxed">
                  Over the past 54 years, the group has nurtured and placed approximately 1,00,000 students and has expanded into multiple branches — from architecture to technology — creating a comprehensive educational ecosystem.
                </p>
              </div>
            </div>

            {/* Right: Timeline markers */}
            <div className="gsap-stagger-parent flex-shrink-0 w-full lg:w-auto">
              <div className="flex flex-row lg:flex-col gap-6 lg:gap-0 overflow-x-auto lg:overflow-visible">
                {[
                  { year: '1968', label: 'Founded in Coimbatore' },
                  { year: '1990s', label: 'Multi-campus expansion' },
                  { year: '2010s', label: '20+ institutions established' },
                  { year: 'Today', label: '1,00,000+ students nurtured' },
                ].map((milestone, i) => (
                  <div key={i} className="gsap-stagger-child flex items-center gap-4 lg:py-6 lg:border-l-2 lg:border-[#0145F2]/20 lg:pl-8 min-w-[180px] lg:min-w-0 relative">
                    <div className="hidden lg:block absolute left-[-9px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0145F2] rounded-full border-4 border-white shadow-md" />
                    <div className="lg:hidden w-4 h-4 bg-[#0145F2] rounded-full border-4 border-white shadow-md flex-shrink-0" />
                    <div>
                      <div className="text-2xl font-display font-bold text-[#0145F2]">{milestone.year}</div>
                      <div className="text-sm font-medium text-[#475569]">{milestone.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4c. CORE VALUES ── */}
      <section id="values" className="relative py-24 lg:py-32 bg-[#EDF1F5] z-10 about-section">
        <div className="mx-auto px-6 lg:px-12 relative z-10 w-full" style={{ maxWidth: '1320px' }}>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-block px-5 py-2 bg-[#0145F2]/10 border border-[#0145F2]/25 rounded-full mb-6 gsap-reveal">
              <span className="text-[10px] font-black tracking-[0.22em] text-[#0145F2] uppercase">Core Values</span>
            </div>
            <h2 className="gsap-reveal text-4xl md:text-5xl font-display font-bold text-on-surface mb-5 leading-tight">
              What Drives Our Culture
            </h2>
            <p className="gsap-reveal text-[18px] font-body text-[#334155] leading-relaxed">
              Our institutional character is rooted in selfless service to higher education, especially for the poor, underprivileged, and downtrodden.
            </p>
          </div>

          <div className="gsap-stagger-parent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: 'Service', desc: 'Selfless dedication to students and communities through education and humanitarian work.' },
              { icon: '⚖️', title: 'Ethics', desc: 'Upholding integrity, transparency, and strong moral principles in all our endeavours.' },
              { icon: '🔬', title: 'Research', desc: 'Fostering a culture of inquiry, innovation, and collaborative discovery across disciplines.' },
              { icon: '🚀', title: 'Entrepreneurship', desc: 'Encouraging creative thinking, startups, and industry-ready leadership in every student.' },
              { icon: '🎓', title: 'Academic Quality', desc: 'Maintaining the highest standards of teaching, curriculum, and outcome-based education.' },
              { icon: '🌱', title: 'Human Development', desc: 'Nurturing well-rounded individuals grounded in values, empathy, and social awareness.' },
              { icon: '🌍', title: 'Social Responsibility', desc: 'Building future leaders who contribute meaningfully to society and the nation.' },
              { icon: '💡', title: 'Innovation', desc: 'Embracing new ideas, technology, and progressive pedagogy to stay ahead of the curve.' },
            ].map((value, idx) => (
              <div
                key={idx}
                className="gsap-stagger-child group p-8 rounded-[2rem] bg-white hover:bg-[#0145F2] cursor-default shadow-sm hover:shadow-2xl hover:shadow-[#0145F2]/25 transition-all duration-500 border border-black/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EDF1F5] group-hover:bg-white/20 flex items-center justify-center text-3xl mb-5 transition-colors duration-300 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-on-surface group-hover:text-white mb-3 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-[15px] font-body text-[#475569] group-hover:text-white/85 leading-relaxed transition-colors duration-300">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. RECOGNITIONS & ACCREDITATIONS ── */}
      <section id="accreditations" className="relative py-24 lg:py-32 bg-white z-10 flex flex-col about-section">
        <WavyDivider type="wave1" color="#EDF1F5" position="top" flipped />
        
        <div className="mx-auto px-6 lg:px-12 pt-16 lg:pt-24 relative z-10 w-full" style={{ maxWidth: '1320px' }}>

          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="gsap-reveal text-4xl md:text-5xl font-display font-bold text-on-surface mb-4 leading-tight">
                Recognitions &amp; Accreditations
              </h2>
              <p className="gsap-reveal text-[18px] font-body text-[#334155] leading-relaxed">
                Our commitment to quality is validated by India's highest academic governing bodies — standards that fewer than 5% of institutions achieve.
              </p>
            </div>
            <div className="gsap-reveal hidden md:block w-32 h-px bg-[#0145F2]/20 mb-4" />
          </div>

          <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitions.map((item, idx) => (
              <div
                key={idx}
                className="gsap-stagger-child accred-card group p-8 rounded-[2rem] bg-[#EDF1F5] hover:bg-[#0145F2] cursor-default shadow-sm hover:shadow-2xl hover:shadow-[#0145F2]/25 relative z-10 border border-black/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-black/5">
                  {item.icon}
                </div>
                <span className="recognition-tag">{item.tag}</span>
                <h3 className="text-2xl font-display font-bold text-on-surface group-hover:text-white mb-3 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[18px] font-body text-[#475569] group-hover:text-white/85 leading-relaxed transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. VISION & MISSION ── */}
      <section id="mission" className="relative py-24 lg:py-32 bg-[#EDF1F5] z-10 about-section">
        <div className="mx-auto px-6 lg:px-12 relative z-10 w-full" style={{ maxWidth: '1320px' }}>

          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-[#0145F2]/10 border border-[#0145F2]/25 rounded-full mb-6 gsap-reveal">
              <span className="text-[10px] font-black tracking-[0.22em] text-[#0145F2] uppercase">Vision &amp; Mission</span>
            </div>
            <h2 className="gsap-reveal text-4xl md:text-5xl font-display font-bold text-on-surface leading-tight">
              Purpose &amp; Direction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="gsap-reveal mission-card p-10 lg:p-14 bg-white rounded-[2rem] lg:rounded-[3rem] shadow-xl border border-black/5 relative z-10 overflow-hidden flex flex-col justify-center">
              <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-[#0145F2] rounded-r-full" />
              <div className="w-16 h-16 rounded-2xl bg-[#0145F2]/10 flex items-center justify-center text-4xl mb-8 ml-6">🎯</div>
              <div className="pl-6">
                <div className="text-[10px] font-black tracking-[0.2em] text-[#0145F2] uppercase mb-3">Our Mission</div>
                <h3 className="text-3xl font-display font-bold text-on-surface mb-6 leading-snug">
                  Educate. Innovate. Empower.
                </h3>
                <p className="text-[18px] font-body text-[#334155] leading-relaxed">
                  To provide service through education and humanitarian work while empowering students through high-quality learning and professional growth. NGI aims to promote research, collaborative academic programs, industry engagement, entrepreneurship, and multidisciplinary education aligned with critical thinking and experiential learning.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="gsap-reveal vision-card p-10 lg:p-14 bg-white rounded-[2rem] lg:rounded-[3rem] shadow-xl border border-black/5 relative z-10 overflow-hidden flex flex-col justify-center">
              <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-[#F59E0B] rounded-r-full" />
              <div className="w-16 h-16 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center text-4xl mb-8 ml-6">👁️</div>
              <div className="pl-6">
                <div className="text-[10px] font-black tracking-[0.2em] text-[#F59E0B] uppercase mb-3">Our Vision</div>
                <h3 className="text-3xl font-display font-bold text-on-surface mb-6 leading-snug">
                  Lead. Research. Transform.
                </h3>
                <p className="text-[18px] font-body text-[#334155] leading-relaxed">
                  To establish PKDAS among the top-tier universities of South India — recognised for world-class research output, industry-integrated curricula, and producing socially responsible graduates who lead with purpose in a rapidly evolving global landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CALL TO ACTION ── */}
      <section id="apply" className="relative z-10 overflow-hidden about-section">
        <div className="relative bg-gradient-to-br from-[#0037C4] via-[#0145F2] to-[#1A6BFF] py-24 lg:py-32">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="mx-auto px-6 lg:px-12 relative z-10 text-center" style={{ maxWidth: '1320px' }}>

            <div className="inline-block px-5 py-2 bg-white/10 border border-white/25 rounded-full mb-8 gsap-reveal">
              <span className="text-[10px] font-black tracking-[0.22em] text-white/80 uppercase">Join PKDAS University</span>
            </div>

            <h2 className="gsap-reveal text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Begin Your Academic<br className="hidden md:block" /> Journey at PKDAS
            </h2>

            <p className="gsap-reveal text-[20px] text-white/85 font-body leading-relaxed max-w-2xl mx-auto mb-12">
              Join 12,000+ alumni who have built careers of impact. With NAAC A++ accreditation, industry-linked programmes, and a campus designed for discovery — your future starts here.
            </p>

            <div className="gsap-reveal flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                to="/admissions"
                className="cta-btn-primary cta-pulse inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0145F2] rounded-full font-bold text-lg shadow-2xl shadow-black/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Apply Now
              </Link>

              <Link
                to="/contact"
                className="cta-btn-outline inline-flex items-center gap-3 px-10 py-5 text-white rounded-full font-bold text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Admissions
              </Link>
            </div>

            <div className="gsap-reveal mt-14 flex flex-wrap justify-center gap-8 opacity-80">
              {[
                { icon: '🏆', text: 'NAAC A++ Accredited' },
                { icon: '🎓', text: 'UGC Recognised' },
                { icon: '📊', text: 'NIRF Ranked' },
                { icon: '🌐', text: 'Global Alumni Network' },
              ].map((trust, i) => (
                <div key={i} className="flex items-center gap-2 text-white text-[15px] font-bold tracking-wide">
                  <span className="text-lg">{trust.icon}</span>
                  {trust.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedLeader && <LeadershipDialog leader={selectedLeader} onClose={() => setSelectedLeader(null)} />}
    </main>
  );
}
