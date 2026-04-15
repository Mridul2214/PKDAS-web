import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigationData } from '../../hooks/useNavigationData';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

  const navigationData = useNavigationData();

  return (
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

      {/* Mega Menu Panel - Absolute full width */}
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
  );
}
