import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WavyDivider } from './WavyDivider';
import { collegeRegistry } from '../../data/collegeRegistry';
import { useHomeData } from '../../hooks/useHomeData';

export const HomeInterests = () => {
  const [activeTab, setActiveTab] = useState('Undergraduate');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsFocused(false);
    }
  };

  const { news, events } = useHomeData();

  const tabs = ['Undergraduate', 'Postgraduate', 'Doctorate'];

  const suggestions = useMemo(() => {
    const items = [
      { title: 'B.Tech in Computer Science', category: 'Course', path: '/courses' },
      { title: 'Master of Business Administration (MBA)', category: 'Course', path: '/courses' },
      { title: 'B.Sc in Nursing', category: 'Course', path: '/courses' },
      { title: 'B.Arch (Bachelor of Architecture)', category: 'Course', path: '/courses' },
      { title: 'M.Tech in Data Science', category: 'Course', path: '/courses' },
      { title: 'B.Pharm (Pharmacy)', category: 'Course', path: '/courses' },
      { title: 'B.Sc Agriculture', category: 'Course', path: '/courses' },
    ];

    // Add Colleges
    Object.values(collegeRegistry).forEach(c => {
      items.push({ title: c.name, category: 'College', path: `/college/${c.shortName.toLowerCase()}` });
    });

    return items;
  }, []);

  // Normalization function to handle btech vs b.tech
  const normalize = (str) => {
    if (!str) return '';
    return str.toLowerCase().replace(/[.\s-]/g, '');
  };

  const filteredSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const normalizedQuery = normalize(searchQuery);
    return suggestions.filter(item => {
      const originalStr = `${item.title} ${item.category}`.toLowerCase();
      const normalizedStr = normalize(`${item.title} ${item.category}`);
      return originalStr.includes(searchQuery.toLowerCase()) || normalizedStr.includes(normalizedQuery);
    }).slice(0, 8);
  }, [searchQuery, suggestions]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categoryData = {
    'Undergraduate': [
      { name: 'Engineering', icon: '⚙️', count: '12 Courses', slug: 'engineering' },
      { name: 'Management', icon: '💼', count: '8 Courses', slug: 'management' },
      { name: 'Medicine', icon: '🏥', count: '5 Courses', slug: 'medicine' },
      { name: 'Arts & Science', icon: '🎨', count: '15 Courses', slug: 'arts-science' },
      { name: 'Aviation', icon: '✈️', count: '4 Courses', slug: 'aviation' },
      { name: 'Architecture', icon: '🏛️', count: '3 Courses', slug: 'architecture' },
    ],
    'Postgraduate': [
      { name: 'MBA / PGDM', icon: '📊', count: '6 Specializations', slug: 'mba' },
      { name: 'M.Tech', icon: '💻', count: '10 Specializations', slug: 'mtech' },
      { name: 'M.Sc Nursing', icon: '🩺', count: '4 Specializations', slug: 'nursing' },
      { name: 'Pharmacy', icon: '💊', count: '5 Specializations', slug: 'pharmacy' },
      { name: 'Social Work', icon: '🤝', count: '3 Specializations', slug: 'msw' },
      { name: 'Computer Apps', icon: '🖥️', count: '2 Specializations', slug: 'mca' },
    ],
    'Doctorate': [
      { name: 'Ph.D Engineering', icon: '🔬', count: 'Research Labs', slug: 'phd-eng' },
      { name: 'Ph.D Management', icon: '📈', count: 'Research Centers', slug: 'phd-mgmt' },
      { name: 'Ph.D Nursing', icon: '📋', count: 'Clinical Research', slug: 'phd-nursing' },
    ]
  };

  return (
    <section id="interests" className="relative z-[20] py-32 md:py-48 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="section-bg-blob absolute top-0 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px]"></div>
        <div className="section-bg-blob absolute bottom-0 -left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[110px]"></div>
      </div>

      <WavyDivider type="wave2" color="var(--color-surface)" position="top" flipped={true} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="gsap-reveal text-5xl md:text-7xl font-display font-bold text-on-surface leading-tight tracking-tight mb-4">
              What's Your <span className="text-primary italic">Interest?</span>
            </h2>
            <p className="gsap-reveal text-on-surface-variant font-body text-lg opacity-60">
              Discover the perfect academic path tailored to your future goals.
            </p>
          </div>

          {/* Filter Labels */}
          {/* <div className="gsap-reveal flex justify-center items-center gap-4 mb-8">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Search by Level</span>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Search by Degree</span>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Search by Discipline</span>
          </div> */}

          {/* Program Tabs */}
          <div className="gsap-reveal flex justify-center mb-14">
            <div className="inline-flex items-center p-1 bg-gray-100/30 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-inner">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-7 py-3 rounded-[14px] text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 z-10 whitespace-nowrap ${
                    activeTab === tab ? 'text-white' : 'text-on-surface/40 hover:text-on-surface'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute inset-0 bg-primary rounded-[14px] -z-10 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.25)] shadow-primary/30 ring-1 ring-white/10 animate-in fade-in zoom-in-95 duration-500"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box with Suggestions */}
          <div ref={searchRef} className="gsap-reveal relative max-w-3xl mx-auto mb-10 group z-[60]">
             <div className={`absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
             <div className={`relative flex items-center bg-white border-2 rounded-[2.5rem] p-2 pr-4 shadow-xl transition-all duration-500 ${isFocused ? 'border-primary/30' : 'border-gray-100'}`}>
                <div className="flex-shrink-0 pl-6 pr-4">
                   <span className="font-display text-xl font-bold text-on-surface whitespace-nowrap">Global Search</span>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <input 
                  type="text" 
                  placeholder="Search for courses, colleges, news, events..."
                  className="flex-grow px-6 py-4 bg-transparent border-none outline-none text-on-surface font-body text-lg placeholder:text-gray-300"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsFocused(true);
                  }}
                  onFocus={() => setIsFocused(true)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button 
                  onClick={handleSearch}
                  className="flex-shrink-0 w-14 h-14 bg-on-surface text-white rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 shadow-lg shadow-black/10"
                >
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                   </svg>
                </button>
             </div>

             {/* Suggestions Dropdown */}
             {isFocused && (searchQuery.length > 0 || filteredSuggestions.length > 0) && (
               <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-200/50 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="px-6 py-3 bg-gray-50/50 border-b border-gray-100/50">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">Search Suggestions</span>
                  </div>
                  <div className="max-h-[350px] overflow-y-auto">
                    {filteredSuggestions.length > 0 ? (
                      filteredSuggestions.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSearchQuery(item.title);
                            setIsFocused(false);
                            navigate(item.path);
                          }}
                          className="w-full flex items-center justify-between px-6 py-4 hover:bg-primary/[0.03] transition-colors group text-left"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                              <svg className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-[15px] font-medium text-on-surface group-hover:text-primary transition-colors">{item.title}</p>
                              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">{item.category}</p>
                            </div>
                          </div>
                          <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary transform -rotate-45 transition-all opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      ))
                    ) : (
                      <div className="p-10 text-center">
                        <p className="text-gray-400 font-body text-sm">No results found for "{searchQuery}"</p>
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-center">
                    <button 
                      onClick={handleSearch}
                      className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline"
                    >
                      View All Search Results
                    </button>
                  </div>
               </div>
             )}
          </div>

          {/* Filter Links */}
          <div className="gsap-reveal flex flex-wrap justify-center gap-x-12 gap-y-4 mb-16 text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant/40">
             <button className="hover:text-primary transition-colors cursor-pointer border-b border-transparent hover:border-primary/30 pb-1">Search by Level</button>
             <div className="w-1 h-1 bg-gray-300 rounded-full my-auto"></div>
             <button className="hover:text-primary transition-colors cursor-pointer border-b border-transparent hover:border-primary/30 pb-1">Search by Degree</button>
             <div className="w-1 h-1 bg-gray-300 rounded-full my-auto"></div>
             <button className="hover:text-primary transition-colors cursor-pointer border-b border-transparent hover:border-primary/30 pb-1">Search by Discipline / Department</button>
          </div>

          {/* Dynamic Category Cards */}
          <div className="gsap-reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
            {(categoryData[activeTab] || []).map((cat, idx) => (
              <Link 
                key={cat.slug}
                to={`/search?q=${encodeURIComponent(cat.name)}`}
                className="group relative bg-gray-50/50 hover:bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-primary/20 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              >
                <div className="text-4xl mb-6 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {cat.icon}
                </div>
                <h4 className="text-sm font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {cat.name}
                </h4>
                <p className="text-[10px] text-on-surface-variant font-medium opacity-40 uppercase tracking-widest">
                  {cat.count}
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="gsap-reveal text-center">
             <Link 
              to="/admissions" 
              className="inline-flex items-center gap-6 px-12 py-7 bg-primary text-white rounded-[2rem] font-bold text-xs tracking-[0.3em] uppercase shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-300"
             >
               Directorate Of Admissions
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
             </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
