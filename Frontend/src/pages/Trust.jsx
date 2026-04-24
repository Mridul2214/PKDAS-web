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
];

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-play
  useEffect(() => {
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  // Pause on hover
  const pauseAutoplay = () => clearInterval(timerRef.current);
  const resumeAutoplay = () => {
    timerRef.current = setInterval(next, 4000);
  };

  return (
    <div
      className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 border border-black/5 group"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] bg-gray-100">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 px-8 pb-6 pt-16">
        <p className="text-white text-lg font-display font-bold drop-shadow-lg">
          {images[current].label}
        </p>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-on-surface hover:bg-white transition-all opacity-0 group-hover:opacity-100"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-on-surface hover:bg-white transition-all opacity-0 group-hover:opacity-100"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 right-8 flex items-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === current ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Trust() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.gsap-fade-up',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%'
        }
      }
    );
  }, { scope: container });

  return (
    <main ref={container} className="bg-[#EDF1F5] text-on-surface pt-8 pb-24 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0145F2]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6CA1D1]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="mx-auto px-6 lg:px-12 relative z-10 w-full" style={{ maxWidth: '1400px' }}>

        {/* Breadcrumb */}
        <nav className="gsap-fade-up flex items-center gap-2 text-sm font-medium text-[#475569] mb-10">
          <Link to="/" className="hover:text-[#0145F2] transition-colors">Home</Link>
          <span className="text-[#94A3B8]">›</span>
          <Link to="/about" className="hover:text-[#0145F2] transition-colors">About</Link>
          <span className="text-[#94A3B8]">›</span>
          <span className="text-on-surface font-semibold">Trust</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="gsap-fade-up text-5xl md:text-6xl lg:text-7xl font-display font-bold text-on-surface mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] to-[#6CA1D1]">Promoting Body</span>
          </h1>
        </div>

        {/* Campus Carousel */}
        <div className="gsap-fade-up mb-20 max-w-4xl mx-auto">
          <ImageCarousel images={campusImages} />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">

          {/* Section 1: About the Trust */}
          <div className="gsap-fade-up mb-16">
            <div className="relative p-10 lg:p-14 rounded-[2.5rem] bg-white border border-black/5 shadow-xl">
              <div className="absolute left-0 top-10 bottom-10 w-1.5 bg-[#0145F2] rounded-r-full" />
              <div className="pl-8">
                <div className="text-[10px] font-black tracking-[0.25em] text-[#0145F2] uppercase mb-4">About The Trust</div>
                <p className="text-[18px] md:text-[20px] font-body text-[#334155] leading-relaxed">
                  Nehru College of Educational and Charitable Trust, established at an auspicious moment in the year 1968, with the primary objective of rendering selfless, dedicated and yeomen service to cause of higher education originally in the field of Aeronautical Engineering and subsequently in the field of rest of engineering branches, Management, Arts, Science, and Paramedical Sciences and has added feather after feather to its Cap.
                </p>
                <p className="text-[18px] md:text-[20px] font-body text-[#334155] leading-relaxed mt-6">
                  Its educational service to the poor underprivileged and downtrodden in the society is freely accessed and widely appreciated by the people, especially from Tamil Nadu and Kerala. Over the period of nearly five decades, it has established and patronized a number of prestigious Educational Institutions, all of which have grown to the stature of being accredited with ISO 9001:2000 certification by the International Certification Services.
                </p>
                <p className="text-[18px] md:text-[20px] font-body text-[#334155] leading-relaxed mt-6">
                  The Trust headquartered at Coimbatore has spread its wings to the neighbouring Kerala State too by establishing Educational Institutions of high reputation.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Constitution of the Trust */}
          <div className="gsap-fade-up mb-16">
            <div className="relative p-10 lg:p-14 rounded-[2.5rem] bg-white border border-black/5 shadow-xl">
              <div className="absolute left-0 top-10 bottom-10 w-1.5 bg-[#F59E0B] rounded-r-full" />
              <div className="pl-8">
                <div className="text-[10px] font-black tracking-[0.25em] text-[#F59E0B] uppercase mb-4">Constitution of The Trust</div>
                <p className="text-[18px] md:text-[20px] font-body text-[#334155] leading-relaxed">
                  The Trust was headed by Late P.K. Das, F.I.E., F.I. Mech. E., M.S. Engg., A.F.R.Ae.S. (London), C.Engg., Managing Trustee & Founder Chairman, who is a well known educationist with rich experience in meticulously planning in establishing and marvelously administering educational institutions. He is a great industrialist with overwhelming spirit of entrepreneurship and excellent business acumen — who is a philanthropist with utmost care and concern for the fellow human beings, suppressed and suffering — who is in nutshell humane in all his approaches.
                </p>
              </div>
            </div>
          </div>

          {/* Current Trust Members */}
          <div className="gsap-fade-up">
            <div className="text-[10px] font-black tracking-[0.25em] text-[#0145F2] uppercase mb-8 text-center">Current Trust Leadership</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Adv. Dr. P. Krishna Das',
                  role: 'Managing Trustee',
                  link: '/managing-trustee',
                  img: '/Adv. Dr. P. Krishnadas,.png',
                },
                {
                  name: 'Dr. P. Krishnakumar',
                  role: 'CEO & Secretary',
                  link: '/ceo-secretary',
                  img: '/Dr.P.Krishnakumar MBA, PhD.png',
                },
                {
                  name: 'Dr. P. Thulasi',
                  role: 'Trustee',
                  link: null,
                  img: null,
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-[2rem] bg-white border border-black/5 hover:shadow-xl hover:shadow-[#0145F2]/10 transition-all duration-300 text-center shadow-sm"
                >
                  {member.img ? (
                    <div className="w-24 h-24 mx-auto mb-5 rounded-2xl overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 border border-black/5 shadow-md">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 mx-auto mb-5 rounded-2xl bg-[#EDF1F5] border border-black/5 flex items-center justify-center text-4xl shadow-md">
                      👤
                    </div>
                  )}
                  <h3 className="text-lg font-display font-bold text-on-surface mb-1">{member.name}</h3>
                  <p className="text-sm font-bold tracking-wider text-[#0145F2] uppercase mb-4">{member.role}</p>
                  {member.link && (
                    <Link
                      to={member.link}
                      className="text-[11px] font-bold tracking-widest text-[#475569] hover:text-[#0145F2] uppercase flex items-center justify-center gap-2 transition-colors"
                    >
                      View Profile
                      <span className="text-lg leading-none">→</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
