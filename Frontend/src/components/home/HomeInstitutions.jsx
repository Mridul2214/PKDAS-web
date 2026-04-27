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
    <section className="relative z-[20] py-40 bg-[#EDF1F5] text-on-surface overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="section-bg-blob absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="section-bg-blob absolute top-1/2 -left-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-10 opacity-20 hidden md:block">
          <div className="grid grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40" />)}
          </div>
        </div>
      </div>

      <WavyDivider type="wave1" color="white" position="top" flipped={true} />

      <div className="container mx-auto px-6 relative z-10 gsap-stagger-parent">
        {/* Heading */}
        <div className="max-w-3xl mb-10 mx-auto text-center">
          <h2 className="gsap-reveal text-3xl md:text-display-md lg:text-5xl font-display mb-4 md:mb-6 text-on-surface">Our Institutions</h2>
          <p className="gsap-reveal text-lg md:text-xl text-on-surface-variant font-display italic opacity-80">
            Explore our diverse ecosystem of specialized colleges and institutes, operating across multiple cutting-edge domains.
          </p>
        </div>

        {/* Brief Bio Content */}
        <div className="gsap-reveal max-w-4xl mx-auto text-center mb-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
            <h3 className="text-2xl md:text-3xl font-display text-on-surface mb-6 leading-tight">
              A Legacy of Educational Excellence
            </h3>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              Our institution network spans across multiple disciplines, from cutting-edge engineering and technology to arts, sciences, and healthcare. Each college within our ecosystem is dedicated to fostering innovation, research, and holistic development, preparing students to become leaders in their chosen fields.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">
                  {institutionCategories.reduce((total, cat) => total + cat.colleges.length, 0)}
                </div>
                <div className="text-sm text-on-surface-variant uppercase tracking-wider">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">{institutionCategories.length}</div>
                <div className="text-sm text-on-surface-variant uppercase tracking-wider">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">50k+</div>
                <div className="text-sm text-on-surface-variant uppercase tracking-wider">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-on-surface-variant uppercase tracking-wider">Placement</div>
              </div>
            </div>

            {/* Featured Categories Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {institutionCategories.slice(0, 3).map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={category.img} alt={category.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-on-surface text-sm">{category.title}</h4>
                      <p className="text-xs text-on-surface-variant">{category.colleges.length} Institutions</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/institutions-list"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore All Institutions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
