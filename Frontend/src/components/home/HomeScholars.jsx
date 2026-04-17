import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { WavyDivider } from './WavyDivider';

/* ─── Scholar Detail Dialog ─── */
const ScholarDialog = ({ student, onClose }) => {
  // Handle Scroll and Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    
    // Stop Lenis background scroll
    if (window.lenis) window.lenis.stop();
    
    // Add overflow hidden to body and modal-open class for global styling
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('modal-open');
    
    return () => {
      document.removeEventListener('keydown', handler);
      // Restart Lenis
      if (window.lenis) window.lenis.start();
      document.body.style.overflow = '';
      document.documentElement.classList.remove('modal-open');
    };
  }, [onClose]);

  if (!student) return null;

  const dialogContent = (
    <div
      className="fixed inset-0 z-[10000] flex items-start justify-center p-4 overflow-y-auto pt-20 pb-12 cursor-pointer"
      style={{ backgroundColor: 'transparent', backdropFilter: 'blur(20px)' }}
      onClick={onClose}
    >
      <div
        data-lenis-prevent
        className="relative w-full max-w-lg rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] cursor-default"
        style={{
          background: '#0f172a',
          border: '1px solid rgba(255,255,255,0.1)',
          animation: 'dialogFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md transition-all text-white border border-white/10 active:scale-90"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* Compact Header */}
        <div className="relative h-28 bg-gradient-to-br from-primary via-primary/80 to-blue-900 flex items-end px-8 pb-4">
          <div className="absolute inset-0 opacity-[0.05] font-black text-7xl flex items-center justify-center tracking-[0.4em] text-white select-none pointer-events-none overflow-hidden">
            PKDAS
          </div>
          <div className="absolute -bottom-10 left-8">
            <div className="relative p-1 rounded-2xl bg-white shadow-xl">
              <img
                src={student.img}
                alt={student.name}
                className="w-24 h-24 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-14 px-8 pb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-1 leading-tight">{student.name}</h2>
          <p className="text-amber-400 text-sm font-bold mb-6">Class of {student.batch}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="rounded-xl p-3 text-center bg-white/5 border border-white/5">
              <div className="text-lg font-black text-white">{student.gpa}</div>
              <div className="text-[8px] text-white/30 uppercase tracking-widest font-black">GPA</div>
            </div>
            <div className="rounded-xl p-3 text-center bg-white/5 border border-white/5">
              <div className="text-lg font-black text-white">{student.batch}</div>
              <div className="text-[8px] text-white/30 uppercase tracking-widest font-black">YEAR</div>
            </div>
            <div className="rounded-xl p-3 text-center bg-white/5 border border-white/5">
              <div className="text-lg font-black text-amber-400">{(student.highlights || []).length}</div>
              <div className="text-[8px] text-white/30 uppercase tracking-widest font-black">AWDS</div>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <h3 className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30 mb-2">SCHOLAR BIO</h3>
            <p className="text-white/70 text-sm leading-relaxed font-body line-clamp-4">{student.bio}</p>
          </div>

          {/* Highlights */}
          {student.highlights && student.highlights.length > 0 && (
            <div>
              <h3 className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30 mb-3">KEY MILESTONES</h3>
              <div className="space-y-2">
                {student.highlights.slice(0, 3).map((hl, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-white/80 bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center text-[10px] font-black text-white bg-primary">
                      {i + 1}
                    </span>
                    <span className="font-medium truncate">{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes dialogFadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );

  return ReactDOM.createPortal(dialogContent, document.body);
};

/* ─── Main HomeScholars Component ─── */
export const HomeScholars = ({ topStudents, activeScholar, setActiveScholar }) => {
  const [selectedScholar, setSelectedScholar] = useState(null);

  return (
    <section className="relative z-[20] py-40 bg-[var(--color-section-dark)] text-white overflow-hidden">
      <WavyDivider type="wave3" color="white" position="top" flipped={true} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-12 mx-auto text-center">
          <div className="gsap-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-primary text-[10px] font-black tracking-widest uppercase mb-6 border border-primary/20">
            Excellence personified
          </div>
          <h2 className="gsap-reveal text-6xl md:text-7xl font-display font-black mb-6 text-white leading-tight">Our Top <span className="text-white italic">Scholars</span></h2>
          <p className="gsap-reveal text-lg md:text-xl text-white/70 font-body max-w-2xl mx-auto opacity-80">
            Meet the visionaries and leaders who are setting global standards in academics, research, and corporate excellence.
          </p>
        </div>

        {/* Scholars Desktop Grid */}
        <div className="hidden md:grid scholars-grid grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 w-full mb-8 pt-12">
          {topStudents.map((student, idx) => (
            <div key={idx} className="flex flex-col group relative">
              <div className="relative pt-12 px-6 mb-8 cursor-pointer" onClick={() => setSelectedScholar(student)}>
                <div className="absolute inset-x-0 bottom-0 top-16 bg-white border border-primary/5 rounded-[2.5rem] z-0 shadow-xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-primary/10">
                  <div className="absolute inset-x-0 bottom-6 text-center opacity-[0.02] text-primary font-display text-7xl font-black select-none tracking-tighter">P K D A S</div>
                </div>
                <div className="relative z-10 flex justify-center h-[280px] parallax-img-container overflow-hidden rounded-t-[140px] rounded-b-[40px] shadow-2xl border-4 border-white/10">
                  <img src={student.img} alt={student.name} className="absolute inset-0 w-full h-[120%] object-cover transition-all duration-1000 ease-out group-hover:scale-110 will-change-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="px-4 text-center">
                <h3 className="text-xl md:text-2xl font-display font-black text-white mb-2 transition-colors group-hover:text-primary">{student.name}</h3>
                <p className="font-body text-sm text-white/50 leading-relaxed mb-5 lg:min-h-[60px] line-clamp-3">{student.achievement}</p>
                <button
                  onClick={() => setSelectedScholar(student)}
                  className="mx-auto text-[9px] font-black text-amber-400 tracking-[0.2em] uppercase hover:text-amber-300 transition-all flex items-center gap-2 cursor-pointer group w-fit"
                >
                  VIEW PROFILE
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scholars Mobile Carousel */}
        <div className="md:hidden relative z-10 mb-8 pt-4">
          <div className="overflow-hidden px-1">
            <div
              className="flex transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) w-full"
              style={{ transform: `translateX(-${activeScholar * 100}%)` }}
            >
              {topStudents.map((student, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2 outline-none">
                  <div 
                    className="flex flex-col group relative bg-white/5 border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-md"
                    onClick={() => setSelectedScholar(student)}
                  >
                    <div className="flex justify-center mb-6">
                       <div className="relative p-1 rounded-[1.5rem] bg-white/10 border border-white/20">
                        <img src={student.img} alt={student.name} className="w-32 h-44 object-cover rounded-t-full rounded-b-[1rem]" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-display font-black text-white mb-2">{student.name}</h3>
                      <p className="font-body text-sm text-white/60 leading-relaxed mb-4">{student.achievement}</p>
                      <button
                        className="text-[9px] font-black text-amber-400 tracking-[0.2em] uppercase flex items-center gap-2 mx-auto"
                      >
                        VIEW PROFILE<span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-3 mt-8">
          {topStudents.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === activeScholar ? 'w-6 bg-primary shadow-lg shadow-primary/30' : 'w-1.5 bg-white/10'}`}></div>
          ))}
        </div>
      </div>

      {/* Dialog */}
      {selectedScholar && (
        <ScholarDialog
          student={selectedScholar}
          onClose={() => setSelectedScholar(null)}
        />
      )}
    </section>
  );
};
