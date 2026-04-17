import React from 'react';
import { Link } from 'react-router-dom';

export const HomeAbout = () => {
  return (
    <section className="relative z-[20] pt-24 pb-8 bg-white overflow-hidden about-section-trigger">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="about-bg-shape absolute -top-20 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="about-bg-shape absolute bottom-0 -right-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"></div>

        {/* Decorative Pattern - Enhanced visibility */}
        <div className="about-bg-dots absolute top-40 right-10 flex flex-wrap w-32 gap-3 opacity-0">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/30"></div>
          ))}
        </div>

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-px h-80 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h2 className="gsap-reveal text-5xl md:text-6xl lg:text-6xl font-sans font-black text-on-surface mb-6 leading-tight">
              Empowering the <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-primary font-bold">Next Generation</span>
            </h2>
            <p className="gsap-reveal text-lg font-body text-on-surface-variant leading-relaxed mb-8">
              Nehru Arts and Science College (NASC) is a leading autonomous institution dedicated to academic excellence. We provide a dynamic learning environment that nurtures creativity, critical thinking, and leadership skills.
              <br /><br />
              With state-of-the-art facilities and a curriculum co-created with industry leaders, we are shaping the future of over 3,500 students every year.
            </p>

            <div className="gsap-stagger-parent grid grid-cols-2 gap-6 mb-10">
              <div className="gsap-stagger-child border-l-2 border-primary pl-4">
                <div className="text-3xl font-display font-medium text-on-surface mb-1">20+</div>
                <div className="text-xs font-display text-on-surface-variant uppercase tracking-widest">Years of Heritage</div>
              </div>
              <div className="gsap-stagger-child border-l-2 border-accent pl-4">
                <div className="text-3xl font-display font-medium text-on-surface mb-1">3500+</div>
                <div className="text-xs font-display text-on-surface-variant uppercase tracking-widest">Active Students</div>
              </div>
            </div>

            <div className="gsap-reveal">
              <Link to="/about" className="inline-flex items-center gap-2 group px-8 py-4 bg-primary text-white font-bold tracking-wide rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
                Read Our Full Story
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>

          {/* Right Interactive Image Grid */}
          <div className="relative h-[600px] w-full hidden md:block about-image-grid-trigger">
            {/* Center Main Image */}
            <div className="about-floating-img parallax-img-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 z-20 overflow-hidden rounded-2xl border-[6px] border-surface-container-lowest shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating"
                className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover hover:scale-110 transition-transform duration-500 cursor-pointer will-change-transform"
              />
            </div>

            {/* Floating Image Top Left */}
            <div className="about-floating-img parallax-img-container absolute top-[10%] left-[5%] w-48 h-56 z-10 hover:z-40 overflow-hidden rounded-2xl border-4 border-surface-container-lowest shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Campus Life"
                className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover hover:scale-110 transition-transform duration-500 cursor-pointer will-change-transform"
              />
            </div>

            {/* Floating Image Bottom Right */}
            <div className="about-floating-img parallax-img-container absolute bottom-[10%] right-[0%] w-60 h-48 z-30 hover:z-40 overflow-hidden rounded-2xl border-4 border-surface-container-lowest shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="University students"
                className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover hover:scale-110 transition-transform duration-500 cursor-pointer will-change-transform"
              />
            </div>

            {/* Floating Image Bottom Left */}
            <div className="about-floating-img parallax-img-container absolute bottom-[5%] left-[20%] w-40 h-40 z-10 hover:z-40 overflow-hidden rounded-2xl border-4 border-surface-container-lowest shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Study group"
                className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover hover:scale-110 transition-transform duration-500 cursor-pointer will-change-transform"
              />
            </div>
          </div>

          {/* Mobile Fallback Image List */}
          <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Students" className="w-full h-48 object-cover rounded-2xl shadow-md" />
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Campus Life" className="w-full h-48 object-cover rounded-2xl shadow-md mt-8" />
          </div>

        </div>
      </div>
    </section>
  );
};
