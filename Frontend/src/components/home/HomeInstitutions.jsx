import React from 'react';
import { Link } from 'react-router-dom';
import { WavyDivider } from './WavyDivider';

export const HomeInstitutions = ({
  institutionCategories,
  instView,
  setInstView,
  instSearch,
  setInstSearch,
  activeCard,
  setActiveCard,
  hoverTimer
}) => {
  return (
    <section className="relative z-[20] py-40 bg-[#EDF1F5] text-on-surface overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="section-bg-blob absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]"></div>
        <div className="section-bg-blob absolute top-1/2 -left-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]"></div>

        <div className="absolute bottom-20 left-10 opacity-20 hidden md:block">
          <div className="grid grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
            ))}
          </div>
        </div>
      </div>

      <WavyDivider type="wave1" color="white" position="top" flipped={true} />

      <div className="container mx-auto px-6 relative z-10 gsap-stagger-parent">
        <div className="max-w-3xl mb-10 mx-auto text-center">
          <h2 className="gsap-reveal text-3xl md:text-display-md lg:text-5xl font-display mb-4 md:mb-6 text-on-surface">Our Institutions</h2>
          <p className="gsap-reveal text-lg md:text-xl text-on-surface-variant font-display italic opacity-80">
            Explore our diverse ecosystem of specialized colleges and institutes, operating across multiple cutting-edge domains.
          </p>
        </div>

        {/* Filter Tabs + Search */}
        <div className="gsap-reveal flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => { setInstView('categories'); setInstSearch(''); }}
              className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${instView === 'categories' ? 'bg-[#0145F2] text-white shadow-lg shadow-[#0145F2]/20' : 'bg-white text-on-surface-variant hover:bg-[#EDF1F5]'}`}
            >
              Categories
            </button>
            <button
              onClick={() => { setInstView('all'); setInstSearch(''); }}
              className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${instView === 'all' ? 'bg-[#0145F2] text-white shadow-lg shadow-[#0145F2]/20' : 'bg-white text-on-surface-variant hover:bg-[#EDF1F5]'}`}
            >
              All Colleges
            </button>
            {institutionCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => { setInstView(cat.title); setInstSearch(''); }}
                className={`hidden md:inline-block px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${instView === cat.title ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-high/80'}`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72 flex-shrink-0">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search colleges..."
              value={instSearch}
              onChange={(e) => {
                setInstSearch(e.target.value);
                if (e.target.value.trim() && instView === 'categories') setInstView('all');
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface-container-high border border-surface-container-high text-on-surface text-sm font-body placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
            />
          </div>
        </div>

        {/* Categories View */}
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
                      <div className="inst-panel-img" style={{ backgroundImage: `url('${group.img}')` }}></div>
                      <div className="inst-panel-gradient"></div>
                      <div className="inst-panel-content">
                        <h3 className="inst-panel-title">{group.title}</h3>
                        <div className="inst-panel-details">
                          <p className="inst-panel-desc">{group.description}</p>
                          <ul className="inst-panel-list">
                            {group.colleges.map((college, i) => (
                              <li key={i}>
                                <Link
                                  to={`/college/${college.slug}`}
                                  className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <span className="inst-panel-dot"></span>{college.name}
                                </Link>
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

        {/* Colleges Card Grid View */}
        {instView !== 'categories' && (() => {
          const allColleges = institutionCategories.flatMap((cat) =>
            cat.colleges.map((college) => ({ name: college.name, slug: college.slug, category: cat.title, img: cat.img, description: cat.description }))
          );
          const filtered = instView === 'all' ? allColleges : allColleges.filter((c) => c.category === instView);
          const searched = instSearch.trim() ? filtered.filter((c) => c.name.toLowerCase().includes(instSearch.toLowerCase())) : filtered;

          return searched.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searched.map((college, idx) => (
                <Link to={`/college/${college.slug}`} key={idx} className="group relative rounded-2xl overflow-hidden border border-white/5 bg-surface-container hover:border-primary/30 transition-all duration-500 cursor-pointer hover:-translate-y-1">
                  <div className="relative h-44 overflow-hidden">
                    <img src={college.img} alt={college.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
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
