import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#040810] text-white border-t border-white/5 pt-20 pb-10 mt-auto relative z-[20] overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0145F2]/10 blur-[130px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0145F2]/5 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="mx-auto px-6 lg:px-12 relative z-10" style={{ maxWidth: '1320px' }}>

        {/* ── Newsletter Section ── */}
        <div className="bg-[#0b1120] rounded-3xl p-8 lg:p-12 mb-16 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0145F2]/20 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-zinc-400 font-body text-sm md:text-[15px]">Subscribe to our newsletter for the latest academic news, events, and announcements from PKDAS University.</p>
          </div>
          <div className="relative z-10 w-full lg:w-auto flex-1 max-w-md flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-[#0145F2] transition-colors"
            />
            <button className="bg-[#0145F2] hover:bg-blue-600 text-white font-bold tracking-wide rounded-xl px-8 py-4 whitespace-nowrap transition-all shadow-lg shadow-[#0145F2]/30 hover:scale-105 active:scale-95">
              Subscribe
            </button>
          </div>
        </div>

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16 pb-16 border-b border-white/8">

          {/* Column 1: About / Logo */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="inline-block relative z-10 bg-white p-2.5 rounded-xl shadow-xl">
              <img
                src="/PKDAS-DEEMED-TO-BE-UNIVERSITY-image-vector.png"
                alt="PKDAS Deemed to be University"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-zinc-400 font-body text-[15px] leading-relaxed max-w-xs">
              A premier institution dedicated to academic excellence, fostering innovation, and building socially responsible leaders — nationally accredited, globally connected.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-1">
              {[
                {
                  label: 'Twitter',
                  path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
                },
                {
                  label: 'Instagram',
                  path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                },
                {
                  label: 'LinkedIn',
                  path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0145F2] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#0145F2]/30 transition-all duration-250 text-zinc-400 border border-white/10"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[15px] font-bold mb-6 text-white tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About the University' },
                { to: '/courses', label: 'Academic Programmes' },
                { to: '/admissions', label: 'Admissions 2025–26' },
                { to: '/placements', label: 'Placements & Careers' },
                { to: '/facilities', label: 'Campus Facilities' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-zinc-400 hover:text-[#0145F2] transition-colors duration-200 text-[15px] flex items-center group/link"
                  >
                    <span className="mr-2 text-[#0145F2] group-hover/link:translate-x-1 transition-transform duration-200">▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div>
            <h4 className="text-[15px] font-bold mb-6 text-white tracking-wide uppercase">Academics</h4>
            <ul className="space-y-3">
              {[
                { to: '/courses', label: 'Undergraduate Programmes' },
                { to: '/courses', label: 'Postgraduate Programmes' },
                { to: '/faculty', label: 'Faculty & Research' },
                { to: '/campus-life', label: 'Campus Life' },
                { to: '/international', label: 'International Collaborations' },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-zinc-400 hover:text-[#0145F2] transition-colors duration-200 text-[15px] flex items-center group/link"
                  >
                    <span className="mr-2 text-[#0145F2] group-hover/link:translate-x-1 transition-transform duration-200">▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-[15px] font-bold mb-6 text-white tracking-wide uppercase">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start text-[15px] text-zinc-400 hover:text-zinc-200 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-[#0145F2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">PKDAS Deemed to be University,<br />Palakkad Main Road,<br />Kerala 679522, India</span>
              </li>
              <li className="flex items-center text-[15px] text-zinc-400 hover:text-zinc-200 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3 text-[#0145F2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 491 250 1234</span>
              </li>
              <li className="flex items-center text-[15px] text-zinc-400 hover:text-zinc-200 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3 text-[#0145F2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>admissions@pkdas.edu.in</span>
              </li>
              <li className="flex items-center text-[15px] text-zinc-400 hover:text-zinc-200 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3 text-[#0145F2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon–Sat: 9:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[14px] font-body text-zinc-500 text-center md:text-left">
            © {new Date().getFullYear()} PKDAS Deemed to be University. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-5 text-zinc-500 text-[13px]">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <img
              src="/21-KIRF-Ranking-Logos-hoizontal.png"
              alt="NIRF Ranking Logo"
              className="h-10 w-auto opacity-40 hover:opacity-80 transition-opacity duration-300 invert brightness-0"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
