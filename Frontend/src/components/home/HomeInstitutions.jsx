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
          <h2 className="gsap-reveal text-3xl md:text-display-md lg:text-6xl font-bold mb-4 md:mb-6 text-on-surface">Our Institutions</h2>
          <p className="gsap-reveal text-lg md:text-xl text-on-surface-variant font-display  opacity-90">
            Explore our diverse ecosystem of specialized colleges and institutes, operating across multiple cutting-edge domains.
          </p>
        </div>

        {/* Prominent Search Box */}
        <div className="gsap-reveal relative w-full max-w-xl mx-auto mb-8 z-[30] group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative">
            <svg className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search colleges, disciplines, programs..."
              value={instSearch}
              onChange={(e) => { setInstSearch(e.target.value); if (e.target.value.trim() && instView === 'categories') setInstView('all'); }}
              className="w-full pl-16 pr-6 py-4 rounded-full bg-white shadow-2xl shadow-primary/10 border-2 border-transparent text-on-surface text-base md:text-lg font-bold placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Tabs Below Search */}
        <div className="gsap-reveal flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { label: 'Categories', view: 'categories' },
            { label: 'All Colleges', view: 'all' },
          ].map(({ label, view }) => (
            <button
              key={view}
              onClick={() => { setInstView(view); setInstSearch(''); }}
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${instView === view ? 'bg-[#0145F2] text-white shadow-lg shadow-[#0145F2]/20 scale-105' : 'bg-white text-on-surface-variant hover:bg-[#EDF1F5] hover:scale-105 shadow-sm'}`}
            >
              {label}
            </button>
          ))}
          {institutionCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => { setInstView(cat.title); setInstSearch(''); }}
              className={`hidden md:inline-block px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${instView === cat.title ? 'bg-[#0145F2] text-white shadow-lg shadow-[#0145F2]/20 scale-105' : 'bg-white text-on-surface-variant hover:bg-[#EDF1F5] hover:scale-105 shadow-sm'}`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* ── Categories View ── */}
        {instView === 'categories' && (
          <>
            {[institutionCategories.slice(0, 3), institutionCategories.slice(3)].map((row, rowIdx) => (
              <div className="inst-row" key={rowIdx} style={{ marginBottom: rowIdx === 0 ? '8px' : 0 }}>
                {row.map((group, colIdx) => {
                  const idx = rowIdx * 3 + colIdx;
                  return (
                    <div
                      key={idx}
                      className={`gsap-stagger-child inst-panel ${activeCard === idx ? 'inst-panel--active' : ''}`}
                      onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                      onMouseEnter={() => setActiveCard(idx)}
                      onMouseLeave={() => { clearTimeout(hoverTimer.current); setActiveCard(null); }}
                    >
                      <div className="inst-panel-img" style={{ backgroundImage: `url('${group.img}')` }} />
                      <div className="inst-panel-gradient" />
                      <div className="inst-panel-content">
                        <h3 className="inst-panel-title">{group.title}</h3>
                        <div className="inst-panel-details">
                          <p className="inst-panel-desc">{group.description}</p>
                          <ul className="inst-panel-list">
                            {group.colleges.map((college, i) => (
                              <li key={i}>
                                <CollegeListItem college={college} slug={college.slug} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </>
        )}

        {/* ── Grid View ── */}
        {instView !== 'categories' && (() => {
          const allColleges = institutionCategories.flatMap((cat) =>
            cat.colleges.map((c) => ({ name: c.name, slug: c.slug, category: cat.title, img: cat.img, description: cat.description }))
          );
          const filtered = instView === 'all' ? allColleges : allColleges.filter((c) => c.category === instView);
          const searched = instSearch.trim() ? filtered.filter((c) => c.name.toLowerCase().includes(instSearch.toLowerCase())) : filtered;

          return searched.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searched.map((college, idx) => (
                <Link
                  to={`/college/${college.slug}`}
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden border border-white/5 bg-surface-container hover:border-primary/30 transition-all duration-500 cursor-pointer hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={college.img} alt={college.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold text-white bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-wider">{college.category}</span>
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-display font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">{college.name}</h4>
                    <p className="text-sm font-body text-on-surface-variant leading-relaxed line-clamp-2">{college.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span>Explore in 3D</span>
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-on-surface-variant font-body text-lg">No colleges found matching "<span className="text-primary">{instSearch}</span>"</p>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
