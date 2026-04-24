import React, { useState, useEffect } from 'react';
import { WavyDivider } from './WavyDivider';

/* ─── Scholar Detail Dialog ─── */
const ScholarDialog = ({ student, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!student) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pt-24"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl mt-20 rounded-3xl overflow-hidden shadow-2xl bg-white"
        style={{
          border: '1px solid rgba(0,0,0,0.05)',
          animation: 'dialogFadeIn 0.25s ease-out',
          maxHeight: '85vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* Header */}
        <div className="relative h-36 bg-gradient-to-br from-[#0145F2] via-[#0145F2]/80 to-[#0b1120] flex items-end px-8 pb-4">
          <div className="absolute inset-0 opacity-10 font-black text-8xl flex items-center justify-center tracking-[0.4em] text-white select-none pointer-events-none overflow-hidden">
            PKDAS
          </div>
          <div className="absolute -bottom-14 left-8">
            <img
              src={student.img}
              alt={student.name}
              className="w-28 h-28 object-cover rounded-2xl border-4 shadow-xl border-white"
            />
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 px-8 pb-8">
          {/* Name + course badge */}
          <div className="mb-2">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#0145F2]/10 text-[#0145F2]"
            >
              {student.course}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-1">{student.name}</h2>
          <p className="text-[#0145F2] text-sm font-semibold mb-6">Batch of {student.batch}</p>

          {/* Stats row */}
          <div className="flex gap-4 mb-8">
            <div className="flex-1 rounded-2xl p-4 text-center bg-gray-50 border border-gray-100">
              <div className="text-xl font-bold text-gray-900">{student.gpa}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-bold">GPA</div>
            </div>
            <div className="flex-1 rounded-2xl p-4 text-center bg-gray-50 border border-gray-100">
              <div className="text-xl font-bold text-gray-900">{student.batch}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-bold">Graduation Year</div>
            </div>
            <div className="flex-1 rounded-2xl p-4 text-center bg-gray-50 border border-gray-100">
              <div className="text-xl font-bold text-[#0145F2]">{(student.highlights || []).length}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-bold">Milestones</div>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-8">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{student.bio}</p>
          </div>

          {/* Highlights */}
          {student.highlights && student.highlights.length > 0 && (
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Key Achievements</h3>
              <ul className="space-y-3">
                {student.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#0145F2]/10 text-[#0145F2]">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
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

/* ─── Main HomeScholars Component ─── */
export const HomeScholars = ({ topStudents, activeScholar, setActiveScholar }) => {
  const [selectedScholar, setSelectedScholar] = useState(null);

  return (
    <section className="relative z-[20] py-40 bg-[var(--color-section-dark)] text-white overflow-hidden">
      <WavyDivider type="wave3" color="white" position="top" flipped={true} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-12 mx-auto text-center">
          <h2 className="gsap-reveal text-display-md md:text-5xl font-display mb-6 text-white">Our Top Scholars</h2>
          <p className="gsap-reveal text-lg text-white/70 font-body">
            Meet some of our brightest minds who are setting new benchmarks in academics, leadership, and innovation.
          </p>
        </div>

        {/* Scholars Desktop Grid */}
        <div className="hidden md:grid scholars-grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative z-10 w-full mb-8 pt-8">
          {topStudents.map((student, idx) => (
            <div key={idx} className="flex flex-col group relative">
              <div className="relative pt-8 px-4 mb-6">
                <div className="absolute inset-x-0 bottom-0 top-12 bg-white border border-primary/10 rounded-[2.5rem] z-0 overflow-hidden shadow-xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/15 hover:border-primary/30">
                  <div className="absolute inset-0 opacity-[0.02] text-primary font-display text-9xl font-black flex items-center justify-center whitespace-nowrap overflow-hidden tracking-[0.5em] pointer-events-none select-none">P K D A S</div>
                </div>
                <div className="relative z-10 flex justify-center h-[260px]">
                  <img src={student.img} alt={student.name} className="w-full max-w-[220px] h-full object-cover rounded-t-[140px] rounded-b-[40px] transition-all duration-700 ease-out group-hover:scale-105 group-hover:rounded-t-[100px]" />
                </div>
                <div className="absolute top-[40%] -left-2 z-20 bg-primary/95 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-lg transform -rotate-[5deg] shadow-lg group-hover:-rotate-[2deg] group-hover:bg-primary transition-all duration-300">{student.course}</div>
              </div>
              <div className="px-2">
                <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-3 hover:text-primary transition-colors">{student.name}</h3>
                <p className="font-body text-sm md:text-base text-white/70 leading-relaxed mb-6 lg:min-h-[72px]">{student.achievement}</p>
                <button
                  onClick={() => setSelectedScholar(student)}
                  className="text-xs font-bold text-amber-400 tracking-widest uppercase hover:text-amber-300 transition-colors flex items-center gap-2 cursor-pointer group w-fit"
                >
                  FIND OUT MORE
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scholars Mobile Carousel */}
        <div className="md:hidden relative z-10 mb-8 pt-4">
          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveScholar((prev) => (prev - 1 + topStudents.length) % topStudents.length)}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-primary border border-primary/5 active:scale-90 transition-all"
            aria-label="Previous Scholar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button
            onClick={() => setActiveScholar((prev) => (prev + 1) % topStudents.length)}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-primary border border-primary/5 active:scale-90 transition-all"
            aria-label="Next Scholar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
          </button>

          <div className="overflow-hidden px-6">
            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${activeScholar * 100}%)` }}
            >
              {topStudents.map((student, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col group relative bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-sm">
                    <div className="flex justify-center mb-6">
                      <img src={student.img} alt={student.name} className="w-32 h-40 object-cover rounded-t-full rounded-b-2xl border border-white/20" />
                    </div>
                    <div className="text-center">
                      <div className="inline-block px-3 py-1 bg-primary text-[10px] font-bold text-white rounded-full mb-3 uppercase tracking-wider">{student.course}</div>
                      <h3 className="text-xl font-display font-medium text-white mb-2">{student.name}</h3>
                      <p className="font-body text-sm text-white/70 leading-relaxed mb-4">{student.achievement}</p>
                      <button
                        onClick={() => setSelectedScholar(student)}
                        className="text-[10px] font-bold text-amber-400 tracking-widest uppercase flex items-center gap-1 mx-auto hover:text-amber-300 transition-colors"
                      >
                        LEARN MORE<span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-2 mb-8">
          {topStudents.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === activeScholar ? 'w-4 bg-primary' : 'w-1 bg-white/20'}`}></div>
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
