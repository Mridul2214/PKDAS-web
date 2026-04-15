import React from 'react';
import { Link } from 'react-router-dom';

export const HomeCTA = () => {
  return (
    <section className="relative z-[20] bg-transparent overflow-hidden border-t border-black/5 mt-0 md:mt-10">
      <div className="relative z-10 w-full">
        <div className="gsap-reveal relative overflow-hidden border-y border-black/5 bg-white py-16 md:py-32 px-6 md:px-8 text-center group shadow-2xl w-full">

          {/* Animated Background Mesh/Glow */}
          <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-1000 pointer-events-none">
          </div>

          {/* Noise Texture to make it look premium */}
          <div className="absolute inset-0 premium-noise"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="gsap-reveal inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8 backdrop-blur-md shadow-sm">
              Admissions 2026-2027
            </div>

            <h2 className="gsap-reveal text-3xl md:text-5xl lg:text-7xl font-display font-bold text-on-surface mb-6 leading-tight drop-shadow-sm">
              Shape Your Future With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-blue-800">PKDAS University</span>
            </h2>

            <p className="gsap-reveal text-lg md:text-2xl font-body text-on-surface-variant mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Join a legacy of excellence. Embark on a transformative educational journey that prepares you for global success.
            </p>

            <div className="gsap-reveal flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
              <Link to="/contact" className="relative group overflow-hidden rounded-full inline-flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20 w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-700 opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>
                <span className="relative z-10 px-6 py-4 md:px-10 md:py-5 text-white font-bold text-base md:text-lg tracking-wide flex items-center justify-center gap-3 w-full">
                  Start Your Application
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>

              <Link to="/brochure" className="px-6 py-4 md:px-10 md:py-5 rounded-full border border-primary/20 text-primary font-bold text-base md:text-lg hover:bg-primary/5 transition-colors duration-300 backdrop-blur-sm cursor-pointer shadow-lg w-full sm:w-auto text-center">
                Download Brochure
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
