import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Courses } from './pages/Courses';
import { Facilities } from './pages/Facilities';
import { Contact } from './pages/Contact';
import { InterestPage } from './pages/InterestPage';
import NewsEvents from './pages/NewsEvents';
import International from './pages/International';
// Default Exports
import Institutions from './pages/Institutions';
import Placements from './pages/Placements';
import FacultyPage from './pages/FacultyPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

  const navigationData = {
    'About': {
      categories: [
        { 
          title: 'Core Identity', 
          items: [
            { name: 'Our Profile', path: '/about', desc: 'Brief overview of PKDAS' },
            { name: 'Vision & Mission', path: '/about#mission', desc: 'The future we enlighten' },
            { name: 'History & Heritage', path: '/about#heritage', desc: '50 years of academic excellence' },
            { name: 'Core Values', path: '/about#values', desc: 'What drives our culture' }
          ] 
        },
        { 
          title: 'Leadership', 
          items: [
            { name: 'Chairman\'s Message', path: '/about#leadership', desc: 'A personal word from leadership' },
            { name: 'Directors & Deans', path: '/about#leadership', desc: 'Expert governance and management' },
            { name: 'Governing Council', path: '/about#leadership', desc: 'Operational excellence & strategy' }
          ] 
        },
        { 
          title: 'Standards', 
          items: [
             { name: 'NAAC & UGC Accreditation', path: '/about#accreditation', desc: 'Quality recognized nationally' },
             { name: 'Campus Map', path: '/about#map', desc: 'Find your way around' }
          ] 
        }
      ],
      highlight: {
        title: 'Discover Our Legacy',
        desc: 'Over five decades of excellence in building the foundations of future leaders and global innovators.',
        img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80',
        ctaLabel: 'Read History',
        ctaPath: '/about#heritage'
      }
    },
    'Institutions': {
      categories: [
        { 
          title: 'PKDAS Group', 
          items: [
            { name: 'Engineering (NIET/NCERC)', path: '/institutions', desc: 'Pioneering technical education' },
            { name: 'Management (NCM/NIITM)', path: '/institutions', desc: 'Strategic business leadership' },
            { name: 'Pharmacy & Nursing', path: '/institutions', desc: 'Healthcare and clinical expertise' },
            { name: 'Arts & Science', path: '/institutions', desc: 'Liberal arts and science majors' }
          ] 
        },
        { 
          title: 'Nehru Group', 
          items: [
            { name: 'Aviation Technology', path: '/institutions', desc: 'Sky-high career pathways' },
            { name: 'Hospitality & Management', path: '/institutions', desc: 'Global service industry standards' },
            { name: 'Allied Health Sciences', path: '/institutions', desc: 'Comprehensive medical training' }
          ] 
        },
        { 
          title: 'Specialized', 
          items: [
             { name: 'Research Centers', path: '/institutions', desc: 'Innovative labs and facilities' },
             { name: 'View All 25+ Institutions', path: '/institutions', desc: 'The complete PKDAS advantage' }
          ] 
        }
      ],
      highlight: {
        title: 'Empower Your Future',
        desc: 'Choose from over 25 specialized institutions focusing on cutting-edge research and career-driven degrees.',
        img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
        ctaLabel: 'Find Your College',
        ctaPath: '/institutions',
        badge: 'Top Ranked'
      }
    },
    'Facilities': {
      categories: [
        { 
          title: 'Academic', 
          items: [
            { name: 'Central Library', path: '/facilities', desc: 'Knowledge at your fingertips' },
            { name: 'Smart Classrooms', path: '/facilities', desc: 'Digitally enhanced learning' },
            { name: 'Research Tech Labs', path: '/facilities', desc: 'State-of-the-art innovation' }
          ] 
        },
        { 
          title: 'Student Life', 
          items: [
            { name: 'Residential Hostels', path: '/facilities', desc: 'A home away from home' },
            { name: 'Dining & Cafeteria', path: '/facilities', desc: 'Nutritious global cuisines' },
            { name: 'Transportation', path: '/facilities', desc: 'Reliable campus connectivity' }
          ] 
        },
        { 
           title: 'Wellness', 
           items: [
              { name: 'Sports Complex', path: '/facilities', desc: 'Indoor/Outdoor facilities' },
              { name: 'Medical Center', path: '/facilities', desc: '24/7 healthcare assistance' },
              { name: 'Counselling Cell', path: '/facilities', desc: 'Mental health & career guidance' }
           ] 
        }
      ],
      highlight: {
        title: 'Premier Campus Life',
        desc: 'Experience a world-class environment with infrastructure designed for hollistic growth and innovation.',
        img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
        ctaLabel: 'Campus Tour',
        ctaPath: '/facilities'
      }
    },
    'Placements': {
      categories: [
        { 
          title: 'Services', 
          items: [
            { name: 'Career Guidance', path: '/placements', desc: 'Pathway to your dream job' },
            { name: 'Recruiter Interface', path: '/placements', desc: 'Connecting with global industry' },
            { name: 'Internship Programs', path: '/placements', desc: 'Early industry exposure' }
          ] 
        },
        { 
          title: 'Statistics', 
          items: [
            { name: 'Success Stories', path: '/placements', desc: 'Real stories from our alumni' },
            { name: 'Top Tier Recruiters', path: '/placements', desc: 'Partnered with over 500+ firms' },
            { name: 'Recent Placements', path: '/placements', desc: 'The 2025 Placement Report' },
            { name: 'Alumni Network', path: '/placements', desc: 'Mentorship and global outreach' }
          ] 
        }
      ],
      highlight: {
        title: 'Fueling Success',
        desc: 'Consistently maintaining over 95% placement rate with Fortune 500 recruiters globally.',
        img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',
        ctaLabel: 'View Placement Report',
        ctaPath: '/placements',
        stat: '98% Placement'
      }
    },
    'Faculty': {
      categories: [
        { 
          title: 'Leadership', 
          items: [
            { name: 'Academic Heads', path: '/faculty', desc: 'Leading our academic strategy' },
            { name: 'Core Professors', path: '/faculty', desc: 'Experts in their respective domains' },
            { name: 'Honorary Faculty', path: '/faculty', desc: 'Distinguished guest lecturers' }
          ] 
        },
        { 
          title: 'Departments', 
          items: [
            { name: 'Engineering & Tech', path: '/faculty', desc: 'Pioneering technical mentors' },
            { name: 'Medical & Nursing', path: '/faculty', desc: 'Healthcare educators' },
            { name: 'Liberal Arts & Comm', path: '/faculty', desc: 'Academic diversity & culture' },
            { name: 'Research Mentors', path: '/faculty', desc: 'Guiding Doctoral candidates' }
          ] 
        }
      ],
      highlight: {
        title: 'Master Educators',
        desc: 'Learn from an elite corps of educators dedicated to academic rigor and transformative research.',
        img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
        ctaLabel: 'Meet Our Experts',
        ctaPath: '/faculty',
        stat: '500+ Scholars'
      }
    }
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative bg-surface z-0">


        {/* Premium Super Mega Menu Navigation */}
        <nav 
          className="sticky top-0 w-full z-[100] bg-[#EDF1F5] border-b border-black/5 shadow-sm transition-all duration-500 relative"
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
            {/* Logo area */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/PKDAS-DEEMED-TO-BE-UNIVERSITY-image-vector.png" 
                alt="PKDAS Deemed to be University"
                className="h-10 md:h-12 w-auto"
              />
            </Link>
            
            {/* Main Nav Items */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="relative group py-2 text-sm font-bold text-on-surface hover:text-[#0145F2] transition-colors">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0145F2] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>

              {/* Mega Dropdowns Items */}
              {Object.keys(navigationData).map((menuName) => (
                <div 
                  key={menuName}
                  className="static group"
                  onMouseEnter={() => setHoveredMenu(menuName)}
                >
                  <button className={`flex items-center gap-1 py-1 text-sm font-bold transition-all duration-300 ${hoveredMenu === menuName ? 'text-[#0145F2]' : 'text-on-surface hover:text-[#0145F2]'}`}>
                    {menuName}
                    <svg className={`w-3 h-3 transition-transform duration-300 ${hoveredMenu === menuName ? 'rotate-180 text-primary' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              ))}

              <Link to="/contact" className="ml-4 px-8 py-3 bg-[#0145F2] text-white text-sm font-black tracking-widest uppercase rounded-xl shadow-lg shadow-[#0145F2]/20 hover:scale-105 active:scale-95 transition-all">
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button Group */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-on-surface hover:text-[#0145F2] focus:outline-none z-[110] transition-colors"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
                </div>
              </button>
            </div>

          </div>

          {/* Mega Menu Panel - Absolute full width (Sibling to 1400px container) */}
          <div 
            className={`absolute top-full left-0 right-0 w-full bg-[#EDF1F5] border-b border-black/5 shadow-2x-strong transform origin-top transition-all duration-500 ease-out z-[90] ${hoveredMenu ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}
            onMouseEnter={() => setHoveredMenu(hoveredMenu)}
          >
            {hoveredMenu && (
              <div 
                key={hoveredMenu} 
                className="max-w-[1400px] mx-auto px-12 py-12 grid grid-cols-12 gap-12 mega-menu-content-animate"
              >
                 {/* Left Side: Navigation Links (2 Columns within) */}
                 <div className="col-span-8 grid grid-cols-3 gap-8 border-r border-black/5 pr-12">
                    {navigationData[hoveredMenu].categories.map((cat, idx) => (
                      <div key={idx} className="space-y-6">
                         <h4 className="text-[10px] font-black text-[#0145F2] uppercase tracking-[0.2em]">{cat.title}</h4>
                         <div className="flex flex-col space-y-2">
                            {cat.items.map((item, i) => (
                              <Link 
                                key={i} 
                                to={item.path} 
                                className="group/li py-2 border-b border-transparent hover:border-[#0145F2]/20 transition-all"
                              >
                                 <div className="text-sm font-bold text-on-surface group-hover/li:text-[#0145F2] transition-colors">{item.name}</div>
                                 <div className="text-[10px] text-on-surface-variant font-medium mt-1 line-clamp-1">{item.desc}</div>
                              </Link>
                            ))}
                         </div>
                      </div>
                    ))}
                 </div>

                 {/* Right Side: Featured Highlight Card */}
                 <div className="col-span-4 flex flex-col">
                    <h4 className="text-[10px] font-black text-[#0145F2] uppercase tracking-[0.2em] mb-6">Spotlight</h4>
                    
                    <div className="relative flex-grow rounded-[2rem] overflow-hidden group/feat shadow-2xl">
                       <img 
                         src={navigationData[hoveredMenu].highlight.img} 
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover/feat:scale-110"
                         alt="Highlight"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
                       
                       {navigationData[hoveredMenu].highlight.stat && (
                          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl text-white">
                             <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Success</div>
                             <div className="text-sm font-bold">{navigationData[hoveredMenu].highlight.stat}</div>
                          </div>
                       )}

                       {navigationData[hoveredMenu].highlight.badge && (
                          <div className="absolute top-4 right-4 bg-[#0145F2] px-4 py-2 rounded-2xl text-white text-[10px] font-bold uppercase tracking-widest">
                             {navigationData[hoveredMenu].highlight.badge}
                          </div>
                       )}

                       <div className="absolute inset-0 p-8 flex flex-col justify-end">
                          <h5 className="text-white font-display font-bold text-xl mb-2 leading-tight">
                             {navigationData[hoveredMenu].highlight.title}
                          </h5>
                          <p className="text-white/70 text-xs font-body leading-relaxed mb-6 line-clamp-3">
                             {navigationData[hoveredMenu].highlight.desc}
                          </p>
                          <Link to={navigationData[hoveredMenu].highlight.ctaPath} className="w-full text-center py-4 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-[#0145F2] hover:text-white transition-all shadow-xl">
                             {navigationData[hoveredMenu].highlight.ctaLabel}
                          </Link>
                       </div>
                    </div>
                 </div>
              </div>
            )}
          </div>

          {/* Mobile Fullscreen Navigation Overlay */}
          <div className={`lg:hidden fixed inset-0 top-20 bg-[#EDF1F5] z-[100] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
             <div className="h-full overflow-y-auto p-6 pb-20 font-display">
                <div className="space-y-2">
                   <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="block py-4 text-2xl font-bold border-b border-black/5 text-on-surface">Home</Link>
                   
                   {Object.keys(navigationData).map((menuName) => (
                     <div key={menuName} className="border-b border-black/5 pb-2">
                        <button 
                          onClick={() => setExpandedMobileMenu(expandedMobileMenu === menuName ? null : menuName)}
                          className="w-full text-left py-4 text-2xl font-bold flex items-center justify-between text-on-surface"
                        >
                           {menuName}
                           <span className="text-primary">{expandedMobileMenu === menuName ? '-' : '+'}</span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === menuName ? 'max-h-[800px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                           <div className="pl-4 space-y-4 pb-4">
                              {navigationData[menuName].categories.map((cat, i) => (
                                <div key={i}>
                                   <div className="text-[10px] font-black text-[#0145F2] uppercase tracking-[0.2em] mb-2">{cat.title}</div>
                                   <div className="space-y-3">
                                      {cat.items.map((it, idx) => (
                                        <Link key={idx} to={it.path} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-bold text-on-surface-variant">
                                           {it.name}
                                        </Link>
                                      ))}
                                   </div>
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>
                   ))}

                   <div className="pt-8">
                      <Link onClick={() => setIsMobileMenuOpen(false)} to="/contact" className="block w-full text-center py-5 bg-[#0145F2] text-white text-lg font-black tracking-widest uppercase rounded-[1.5rem] shadow-xl">
                         Apply Now
                      </Link>
                   </div>
                </div>
             </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/news" element={<NewsEvents />} />
            <Route path="/international" element={<International />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/interest/:slug" element={<InterestPage />} />
          </Routes>
        </div>

        {/* Premium Dark Footer */}
        <footer className="bg-[#050505] text-white border-t border-white/5 pt-20 pb-10 mt-auto relative z-[20] overflow-hidden">
          {/* subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0145F2]/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

              {/* Column 1: About / Logo */}
              <div className="space-y-6">
                <Link to="/" className="inline-block relative z-10 bg-white p-2 rounded-xl shadow-xl">
                  <img
                    src="/PKDAS-DEEMED-TO-BE-UNIVERSITY-image-vector.png"
                    alt="PKDAS College Logo"
                    className="h-12 w-auto"
                  />
                </Link>
                <p className="text-zinc-400 font-body text-sm leading-relaxed max-w-xs">
                  A premier institution dedicated to academic excellence, fostering innovation, and building the leaders of tomorrow with international standards.
                </p>
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0145F2] hover:text-white transition-all text-zinc-400 border border-white/10"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0145F2] hover:text-white transition-all text-zinc-400 border border-white/10"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0145F2] hover:text-white transition-all text-zinc-400 border border-white/10"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h4>
                <ul className="space-y-3">
                  <li><Link to="/about" className="text-zinc-400 hover:text-[#0145F2] transition-colors text-sm flex items-center group/link"><span className="mr-2 text-[#0145F2] group-hover/link:translate-x-1 transition-transform">▸</span> About Us</Link></li>
                  <li><Link to="/courses" className="text-zinc-400 hover:text-[#0145F2] transition-colors text-sm flex items-center group/link"><span className="mr-2 text-[#0145F2] group-hover/link:translate-x-1 transition-transform">▸</span> Academic Programs</Link></li>
                  <li><Link to="/placements" className="text-zinc-400 hover:text-[#0145F2] transition-colors text-sm flex items-center group/link"><span className="mr-2 text-[#0145F2] group-hover/link:translate-x-1 transition-transform">▸</span> Placements & Careers</Link></li>
                  <li><Link to="/facilities" className="text-zinc-400 hover:text-[#0145F2] transition-colors text-sm flex items-center group/link"><span className="mr-2 text-[#0145F2] group-hover/link:translate-x-1 transition-transform">▸</span> Campus Facilities</Link></li>
                  <li><Link to="/faculty" className="text-zinc-400 hover:text-[#0145F2] transition-colors text-sm flex items-center group/link"><span className="mr-2 text-[#0145F2] group-hover/link:translate-x-1 transition-transform">▸</span> Our Faculty</Link></li>
                </ul>
              </div>

              {/* Column 3: Contact Info */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Contact Us</h4>
                <ul className="space-y-4">
                  <li className="flex items-start text-sm text-zinc-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-[#0145F2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>PKDAS College Campus,<br />Palakkad Main Road,<br />Kerala 679522, India</span>
                  </li>
                  <li className="flex items-center text-sm text-zinc-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5 mr-3 text-[#0145F2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>+91 491 250 1234</span>
                  </li>
                  <li className="flex items-center text-sm text-zinc-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5 mr-3 text-[#0145F2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>admissions@pkdas.edu.in</span>
                  </li>
                </ul>
              </div>

              {/* Column 4: Campus Life / Search */}
              {/* <div>
                <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Campus Map</h4>
                <div className="w-full h-32 bg-white/5 rounded-xl overflow-hidden relative group border border-white/10">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80" alt="Map Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a href="#" className="px-4 py-2 bg-white text-black rounded-lg text-xs font-bold hover:bg-[#0145F2] hover:text-white transition-all shadow-xl">Get Directions</a>
                  </div>
                </div>
              </div> */}

            </div>

            {/* Bottom Bar */}
            <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-sm font-body text-zinc-500 text-center md:text-left">
                &copy; {new Date().getFullYear()} PKDAS Deemed to be University. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">Nationally Accredited</span>
                <img
                  src="/21-KIRF-Ranking-Logos-hoizontal.png"
                  alt="Accreditation Logos"
                  className="h-10 w-auto opacity-50 hover:opacity-100 transition-opacity invert brightness-0"
                />
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Back to Top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-[120] group flex items-center justify-center w-12 h-12 bg-white text-on-surface rounded-xl shadow-2xl border border-black/5 hover:bg-primary hover:text-white hover:scale-110 active:scale-95 transition-all duration-500 opacity-40 hover:opacity-100 cursor-pointer"
        >
          <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </Router>
  );
}

export default App;
