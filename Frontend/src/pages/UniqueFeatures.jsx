import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const campusImages = [
  { src: '/Buildings/NGI-aerial view - NASC- Front view (2).JPG', label: 'NASC Campus — Front View' },
  { src: '/Buildings/NGI-aerial view - NIET- Entrance.JPG', label: 'NIET Campus — Entrance' },
  { src: '/Buildings/NGI-aerial view - NIITM  (1).JPG', label: 'NIITM Campus' },
  { src: '/Buildings/NGI-aerial view - NIT - Main block tight soht.JPG', label: 'NIT — Main Block' },
  { src: '/Buildings/NGI-aerial view - NASC- front view low angle - birds eye view.JPG', label: 'NASC — Aerial View' },
  { src: '/backgrounds/clg 1.jpeg', label: 'Campus Life' },
  { src: '/backgrounds/clg 2.jpeg', label: 'Campus Grounds' },
];

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => setCurrent(idx), []);
  const next = useCallback(() => setCurrent((p) => (p + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const pauseAutoplay = () => clearInterval(timerRef.current);
  const resumeAutoplay = () => { timerRef.current = setInterval(next, 4000); };

  return (
    <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 border border-black/5 group" onMouseEnter={pauseAutoplay} onMouseLeave={resumeAutoplay}>
      <div className="relative w-full aspect-[16/9] bg-gray-100">
        {images.map((img, idx) => (
          <div key={idx} className={`absolute inset-0 transition-all duration-700 ease-in-out ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
            <img src={img.src} alt={img.label} className="w-full h-full object-cover" loading={idx === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-8 pb-6 pt-16">
        <p className="text-white text-lg font-display font-bold drop-shadow-lg">{images[current].label}</p>
      </div>
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-on-surface hover:bg-white transition-all opacity-0 group-hover:opacity-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-on-surface hover:bg-white transition-all opacity-0 group-hover:opacity-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="absolute bottom-6 right-8 flex items-center gap-2">
        {images.map((_, idx) => (
          <button key={idx} onClick={() => goTo(idx)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === current ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`} />
        ))}
      </div>
    </div>
  );
}

const featureCategories = [
  {
    title: 'Legacy & Scale',
    icon: '🏛️',
    color: '#0145F2',
    items: [
      '5 Decades of growth in the field of Education.',
      'A pioneering oldest Aeronautical Campus in south India.',
      'Total built up area of more than 35 lakhs sq.ft.',
      'Encompassing in it 20+ reputed institutions and a 1250 bed super speciality hospital.',
    ],
  },
  {
    title: 'Accreditations & Rankings',
    icon: '🏆',
    color: '#F59E0B',
    items: [
      'ISO Certified Institutions, Recognized by UGC, approved by AICTE, MCI, BCI, DGCA, COA, PCI, INC, DME, DET and accredited by NAAC and NBA.',
      'More than 300 university ranks since inception.',
      'IATA, AMADEUS Training Centre.',
      'MOUs with national & International universities.',
    ],
  },
  {
    title: 'Knowledge & Training',
    icon: '📚',
    color: '#6CA1D1',
    items: [
      'The PK Das Knowledge Fort (Central Library) — has developed an excellent collection of books, journals and non-book materials in Science, Engineering, Technology, Humanities and Management.',
      'NOBLE (Nehru Out Bond for Leadership and Excellence) — out bond training unit for enhancing organizational performance through experimental learning.',
      'FDP (Faculty Development Programme) to refine skills & technologies of our faculties.',
      'Best Faculty Award — for college teachers.',
      'Best Teacher Award — for school teachers.',
    ],
  },
  {
    title: 'Placements & Industry',
    icon: '💼',
    color: '#10B981',
    items: [
      'NCPIR (Nehru Corporate Placement & Industrial Relations) extends the resources of NGI through professional development and personal enrichment opportunities.',
      'An enviable track record of placement, more than 1600 students got offer letter in 2021-2022.',
      'Cash awards and gold coins for university rank holders.',
      'Practical training for AME students at AIR WORKS & AIR INDIA.',
    ],
  },
  {
    title: 'Infrastructure & Facilities',
    icon: '🖥️',
    color: '#8B5CF6',
    items: [
      '100 mbps dedicated optical fiber for internet and WiFi campuses with more than 5000 nodes of computers with high end servers.',
      'More than 150 buses for commutation of students, covering parts of Kerala and Tamil Nadu.',
      'Home away from home — Comfortable and affordable hostel facilities to accommodate 5000+ students.',
      'Aeronautical campus value added with King Air c90, Beach Aircraft, Learjet 25B, Cessna 150 & 152, Hawker 125, Ercoupe, Bell and Enstrom F28 Helicopters and 1 lakh sq.ft of Aeronautical Lab.',
    ],
  },
  {
    title: 'Innovation & Research',
    icon: '🔬',
    color: '#EF4444',
    items: [
      'Only Institution in Coimbatore selected by DST for Implementation of NewGen IEDC.',
      'NGI NewGen IEDC — Supported by NSTEDB & EDII, Department of Science and Technology, Government of India, New Delhi.',
      'NGI TBI — One Stop Shop Business Incubation Centre for Start-ups in facilitating Entrepreneurial & Innovative Ecosystem to all stakeholders including Students, Faculty, Industry, Investors and Society at large.',
      'Funds Received — ₹15 Crores for NGI TBI and ₹5 Crores for NGI NewGen IEDC.',
      'Every year faculties get fund for research, FDP, Consultancy from various sources more than ₹1.25 Crores.',
      'Every year 25 students of NGI is supported with a grant in aid upto ₹2.5 Lakhs for student projects.',
    ],
  },
];

const scholarships = [
  'Nehru Vigyan Scholarship — through NGI Entrance exam',
  'Ex Servicemen Scholarship',
  'MHRD Scholarship (For Girls)',
  'Single Parent Scholarship',
  'Girl Child Scholarship',
  'Sibling Scholarship',
  'Teacher Referral Scheme',
  'Scholarships for meritorious students',
];

export function UniqueFeatures() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray('.gsap-reveal').forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      );
    });

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
          scrollTrigger: { trigger: parent, start: 'top 80%' },
        }
      );
    });
  }, { scope: container });

  return (
    <main ref={container} className="bg-[#EDF1F5] text-on-surface pt-8 pb-24 overflow-hidden relative">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0145F2]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6CA1D1]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#0145F2]/3 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="mx-auto px-6 lg:px-12 relative z-10 w-full" style={{ maxWidth: '1400px' }}>

        {/* Breadcrumb */}
        <nav className="gsap-reveal flex items-center gap-2 text-sm font-medium text-[#475569] mb-10">
          <Link to="/" className="hover:text-[#0145F2] transition-colors">Home</Link>
          <span className="text-[#94A3B8]">›</span>
          <Link to="/about" className="hover:text-[#0145F2] transition-colors">About</Link>
          <span className="text-[#94A3B8]">›</span>
          <span className="text-on-surface font-semibold">Unique Features</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-20 lg:mb-24">
          <h1 className="gsap-reveal text-5xl md:text-6xl lg:text-7xl font-display font-bold text-on-surface mb-6">
            Unique Features of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] to-[#6CA1D1]">NGI</span>
          </h1>
          <p className="gsap-reveal text-[18px] md:text-[20px] font-body text-[#475569] leading-relaxed max-w-3xl mx-auto">
            What sets Nehru Group of Institutions apart — five decades of pioneering infrastructure, academic excellence, and unwavering commitment to student success.
          </p>
        </div>

        {/* Campus Carousel */}
        <div className="gsap-reveal mb-20 max-w-5xl mx-auto">
          <ImageCarousel images={campusImages} />
        </div>

        {/* Feature Categories */}
        <div className="space-y-12 mb-20">
          {featureCategories.map((cat, idx) => (
            <div
              key={idx}
              className="gsap-reveal relative p-8 lg:p-10 rounded-[2rem] bg-white border border-black/5 shadow-xl overflow-hidden"
            >
              {/* Accent bar */}
              <div
                className="absolute left-0 top-8 bottom-8 w-1.5 rounded-r-full"
                style={{ backgroundColor: cat.color }}
              />

              <div className="pl-6 lg:pl-8">
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm border border-black/5"
                    style={{ backgroundColor: `${cat.color}15` }}
                  >
                    {cat.icon}
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-display font-bold"
                    style={{ color: cat.color }}
                  >
                    {cat.title}
                  </h2>
                </div>

                {/* Feature items */}
                <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="gsap-stagger-child flex items-start gap-3 py-2">
                      <div
                        className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
                        style={{ backgroundColor: cat.color }}
                      />
                      <p className="text-[16px] font-body text-[#334155] leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scholarships Section */}
        <div className="gsap-reveal">
          <div className="text-center mb-12">
            <div className="inline-block px-5 py-2 bg-[#F59E0B]/10 border border-[#F59E0B]/25 rounded-full mb-6">
              <span className="text-[10px] font-black tracking-[0.22em] text-[#F59E0B] uppercase">Financial Support</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4">
              Scholarships & Awards
            </h2>
            <p className="text-[18px] font-body text-[#475569] leading-relaxed max-w-2xl mx-auto">
              Making quality education accessible through comprehensive financial support programs.
            </p>
          </div>

          <div className="gsap-stagger-parent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scholarships.map((item, idx) => (
              <div
                key={idx}
                className="gsap-stagger-child group p-6 rounded-2xl bg-white border border-black/5 hover:shadow-xl hover:shadow-[#F59E0B]/10 hover:border-[#F59E0B]/30 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="text-[#F59E0B] text-lg mt-0.5 flex-shrink-0">🎓</span>
                  <p className="text-[15px] font-body text-[#334155] group-hover:text-on-surface leading-relaxed transition-colors">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
