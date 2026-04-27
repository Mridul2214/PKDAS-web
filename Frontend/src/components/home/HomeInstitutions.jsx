import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { WavyDivider } from './WavyDivider';
import { getCollege } from '../../data/collegeRegistry';

/* ─── College Hover Dialog ─── */
function CollegeDialog({ college, slug, anchorEl, onMouseEnter, onMouseLeave }) {
  const [style, setStyle] = useState({ opacity: 0, top: 0, left: 0, width: 300 });
  const navigate = useNavigate();

  useEffect(() => {
    if (!anchorEl) return;
    const rect = anchorEl.getBoundingClientRect();
    const vw = window.innerWidth;
    const dialogW = 300;
    const dialogH = 420;

    // Choose side
    const spaceRight = vw - rect.right;
    const useRight = spaceRight >= dialogW + 16;

    let left = useRight ? rect.right + 8 : rect.left - dialogW - 8;
    // Clamp to screen
    left = Math.max(8, Math.min(left, vw - dialogW - 8));

    let top = rect.top - 8;
    // Keep within viewport vertically
    top = Math.max(8, Math.min(top, window.innerHeight - dialogH - 8));

    setStyle({ opacity: 1, top, left, width: dialogW });
  }, [anchorEl]);

  const dialog = (
    <div
      className="fixed z-[99999] rounded-3xl overflow-hidden shadow-2xl bg-white"
      style={{
        ...style,
        border: '1px solid rgba(0,0,0,0.08)',
        transition: 'opacity 0.15s ease',
        pointerEvents: 'auto',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden flex-shrink-0">
        <img src={college.img} alt={college.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <span
          className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: college.color || '#0145F2' }}
        >
          {college.badge}
        </span>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90">
          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs font-semibold">{college.location}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-sm font-display font-bold text-gray-900 mb-1 leading-snug">{college.name}</h3>
        <p className="text-xs text-gray-500 font-body leading-relaxed mb-3 line-clamp-2">{college.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-1.5 mb-3">
          {[
            { value: college.students,                    label: 'Students' },
            { value: college.programs,                    label: 'Programs' },
            { value: college.placements?.percentage || '90%', label: 'Placed' },
          ].map((s, i) => (
            <div key={i} className="text-center rounded-xl py-2" style={{ background: '#f4f6fb' }}>
              <div className="text-xs font-black text-gray-900">{s.value}</div>
              <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-1 mb-3">
          {(college.highlights || []).slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
              <span
                className="w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black"
                style={{ backgroundColor: college.color || '#0145F2', fontSize: 8 }}
              >✓</span>
              {h}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => navigate(`/college/${slug}`)}
          className="w-full py-2.5 rounded-xl text-white text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
          style={{ backgroundColor: college.color || '#0145F2' }}
        >
          Explore {college.shortName}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(dialog, document.body);
}

/* ─── College list item with hover dialog ─── */
function CollegeListItem({ college, slug }) {
  const [open, setOpen]     = useState(false);
  const [anchor, setAnchor] = useState(null);
  const linkRef             = useRef(null);
  const hideTimer           = useRef(null);
  const collegeData         = getCollege(slug);

  const show = useCallback(() => {
    clearTimeout(hideTimer.current);
    setAnchor(linkRef.current);
    setOpen(true);
  }, []);

  const hide = useCallback(() => {
    hideTimer.current = setTimeout(() => setOpen(false), 150);
  }, []);

  const cancelHide = useCallback(() => {
    clearTimeout(hideTimer.current);
  }, []);

  return (
    <>
      <Link
        ref={linkRef}
        to={`/college/${slug}`}
        className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        <span className="inst-panel-dot" />
        {college.name}
      </Link>

      {open && anchor && (
        <CollegeDialog
          college={collegeData}
          slug={slug}
          anchorEl={anchor}
          onMouseEnter={cancelHide}
          onMouseLeave={hide}
        />
      )}
    </>
  );
}

/* ─── Main HomeInstitutions Component ─── */
export const HomeInstitutions = ({
  institutionCategories,
  instView,
  setInstView,
  instSearch,
  setInstSearch,
  activeCard,
  setActiveCard,
  hoverTimer,
}) => {
  return (
    <section className="relative z-[20] pt-24 pb-32 bg-[#F8FAFC] text-on-surface overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-96 -mt-96" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -ml-72 -mb-72" />
      </div>

      <WavyDivider type="wave1" color="white" position="top" flipped={true} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="gsap-reveal inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
            Educational Ecosystem
          </span>
          <h2 className="gsap-reveal text-4xl md:text-5xl lg:text-6xl font-display font-bold text-on-surface mb-8 leading-tight">
            Our <span className="italic text-primary">Institutions</span>
          </h2>
          <p className="gsap-reveal text-lg md:text-xl text-on-surface-variant font-medium opacity-80 leading-relaxed max-w-2xl mx-auto">
            Discover a diverse network of specialized colleges and research centers, each a leader in its respective field of excellence.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {institutionCategories.map((category, index) => (
            <div 
              key={index} 
              className="gsap-reveal group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 bg-white"
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img 
                  src={category.img} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-10 h-[2px] bg-primary rounded-full" />
                    <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">
                      {category.colleges.length} Institutions
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden italic">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    {category.colleges.slice(0, 3).map((college, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] text-white font-medium">
                        {college.name}
                      </span>
                    ))}
                    {category.colleges.length > 3 && (
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] text-white font-medium">
                        +{category.colleges.length - 3} More
                      </span>
                    )}
                  </div>

                  <Link 
                    to="/institutions-list" 
                    className="inline-flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest hover:text-primary transition-colors group/link"
                  >
                    Explore Category
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="gsap-reveal flex flex-col items-center justify-center space-y-8">
          <div className="h-[1px] w-24 bg-primary/30" />
          
          <div className="text-center">
            <h4 className="text-2xl font-display font-bold text-on-surface mb-4 italic">
              Still looking for the perfect campus?
            </h4>
            <p className="text-on-surface-variant mb-10 max-w-lg mx-auto opacity-70">
              Browse through our complete directory of 25+ specialized institutions across multiple cities and domains.
            </p>
          </div>

          <Link
            to="/institutions-list"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-primary text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">View All Institutions</span>
            <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>
        </div>
      </div>
    </section>
  );
};

