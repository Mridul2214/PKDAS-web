import React, { useState, useEffect } from 'react';
import { Button } from './Button';

const slides = [
  {
    id: 1,
    type: 'image',
    src: '/banner.png',
    heading: 'Top-Ranking Deemed University in India',
    subheading: 'A premier institute offering innovative programs in Science, Technology, and holistic development.'
  },
  {
    id: 2,
    type: 'image',
    src: '/Buildings/NGI-aerial view - NASC- Front view (2).JPG',
    heading: 'Excellence in Engineering & Technology',
    subheading: 'Fostering a culture of academic rigor and cutting-edge research to build tomorrow\'s leaders.'
  },
  {
    id: 3,
    type: 'image',
    src: '/Buildings/NGI-aerial view - NIET- Entrance.JPG',
    heading: 'World-Class Science & Management Programs',
    subheading: 'State-of-the-art infrastructure designed to inspire and shape the next generation of global professionals.'
  },
  {
    id: 4,
    type: 'image',
    src: '/Buildings/NGI-aerial view - NASC- front view low angle - birds eye view.JPG',
    heading: 'Global Perspectives & Research Innovation',
    subheading: 'Preparing versatile and visionary leaders equipped for the dynamic challenges of a globalized world.'
  },
  {
    id: 5,
    type: 'video',
    src: '/campus_video.mp4',
    heading: 'Experience Our Vibrant Campus Life',
    subheading: 'Take a virtual tour of our world-class facilities and discover an environment built for success.'
  }
];

const admissionCourses = [
  {
    title: "B.Tech Computing",
    subtitle: "ADMISSIONS 2026",
    badge: "100% Placement",
    desc: "\"The practical learning approach and expert mentors gave me a competitive edge in every interview.\"",
    avatar: "https://ui-avatars.com/api/?name=CS&background=e0e7ff&color=0145F2&rounded=true&bold=true"
  },
  {
    title: "MBA Analytics",
    subtitle: "ADMISSIONS 2026",
    badge: "Top Ranked",
    desc: "\"Developing strategic leadership skills here completely transformed my approach to corporate challenges.\"",
    avatar: "https://ui-avatars.com/api/?name=MA&background=fff7ed&color=ea580c&rounded=true&bold=true"
  },
  {
    title: "B.Sc AI & Robotics",
    subtitle: "ADMISSIONS 2026",
    badge: "Future Ready",
    desc: "\"Diving deep into next-generation technologies equipped me with the skills to build the future.\"",
    avatar: "https://ui-avatars.com/api/?name=AI&background=ecfdf5&color=059669&rounded=true&bold=true"
  },
  {
    title: "B.Pharm Health",
    subtitle: "ADMISSIONS 2026",
    badge: "Clinical Labs",
    desc: "\"State-of-the-art labs and extensive clinical exposure prepared me perfectly for the healthcare industry.\"",
    avatar: "https://ui-avatars.com/api/?name=PH&background=fdf2f8&color=db2777&rounded=true&bold=true"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [courseIndex, setCourseIndex] = useState(0);

  useEffect(() => {
    const courseTimer = setInterval(() => {
      setCourseIndex((prev) => (prev + 1) % admissionCourses.length);
    }, 5000);
    return () => clearInterval(courseTimer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    let timer;
    if (slides[currentSlide].type === 'image') {
      timer = setTimeout(() => {
        nextSlide();
      }, 6000);
    }
    // If it's a video, the onEnded event will trigger the next slide instead!

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentSlide]);

  return (
    <section className="relative z-[20] h-screen flex items-center overflow-hidden bg-surface">
      {/* Background Media */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0 z-0'} ${slide.src === '/banner.png' ? 'bg-white' : ''}`}
            style={{ zIndex: isActive ? 1 : 0 }}
          >
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10"></div>

            {slide.type === 'video' ? (
              <video
                key={`${slide.id}-${isActive}`}
                src={slide.src}
                className="w-full h-full object-cover"
                autoPlay={isActive}
                muted
                playsInline
                onEnded={isActive ? nextSlide : undefined}
              />
            ) : (
              <img
                src={slide.src}
                alt="Background"
                className={`w-full h-full transition-transform duration-[6000ms] ${slide.src === '/banner.png' ? 'object-contain' : 'object-cover'} ${isActive ? 'scale-105' : 'scale-100'}`}
              />
            )}
          </div>
        );
      })}

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start space-y-8 min-h-[300px] justify-center">
            {/* Visually hidden h1 for SEO */}
            <h1 className="sr-only">PKDAS Institute of Science and Technology - One of India's Best Ranked Universities</h1>

            {/* We use a key trick here to re-trigger animations on slide change for text ONLY */}
            <div key={currentSlide} className="space-y-6 min-h-[220px]">
              <h2 className="text-white text-display-lg md:text-5xl lg:text-6xl font-display font-medium leading-tight">
                <span className="block overflow-hidden pb-2">
                  <span className="block animate-mask-reveal">
                    {slides[currentSlide].heading}
                  </span>
                </span>
              </h2>
              <p className="overflow-hidden">
                <span className="block text-white text-xl md:text-2xl font-display italic leading-relaxed animate-mask-reveal" style={{ animationDelay: '300ms' }}>
                  {slides[currentSlide].subheading}
                </span>
              </p>
            </div>

            {/* Sticky Buttons - Enhanced & Cool */}
            <div className="flex gap-4 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '2000ms', animationFillMode: 'forwards' }}>
              <Button variant="white" className="btn-premium px-10 py-5 rounded-2xl text-primary font-black uppercase tracking-widest shadow-2xl">
                Apply Now
              </Button>
              <Button variant="outline-white" className="btn-premium btn-glass px-10 py-5 rounded-2xl text-white font-black uppercase tracking-widest">
                Explore Courses
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Floating Popup */}
      <div className="hidden lg:block absolute right-12 top-[40%] -translate-y-1/2 z-30 w-[360px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] shadow-2xl animate-fade-in-up" style={{ animationDelay: '500ms' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#0145F2] rounded-full border border-white/20 shadow-sm shadow-[#0145F2]/30">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
             <span className="text-[9px] font-bold text-white uppercase tracking-widest">Live Updates</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-display font-bold text-white leading-tight mb-5">Admissions Open 2026</h3>

        {/* The INNER changing card */}
        <div className="relative h-[150px] mb-4 overflow-hidden rounded-2xl">
          <div key={courseIndex} className="absolute inset-0 w-full bg-white p-5 shadow-xl border border-slate-100 animate-[slide-in-right_0.6s_ease-out_forwards]">
             {/* Testimonial layout inside */}
             <div className="flex items-start gap-3">
               <img src={admissionCourses[courseIndex].avatar} alt="Icon" className="w-10 h-10 rounded-full object-cover shadow-sm" />
               <div className="flex-1 pt-0.5">
                 <h4 className="text-slate-900 font-bold text-[14px] leading-tight tracking-tight">{admissionCourses[courseIndex].title}</h4>
                 <p className="text-slate-400 text-[9px] font-semibold uppercase tracking-widest mt-0.5">{admissionCourses[courseIndex].subtitle}</p>
               </div>
               <div className="bg-orange-50 text-orange-500 font-bold text-[9px] px-2 py-0.5 rounded-md whitespace-nowrap">
                 {admissionCourses[courseIndex].badge}
               </div>
             </div>
             
             <div className="mt-4">
               <p className="text-slate-600 italic text-[12px] leading-relaxed font-body">
                 {admissionCourses[courseIndex].desc}
               </p>
             </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mb-5">
          {admissionCourses.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === courseIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`}
            ></div>
          ))}
        </div>

        {/* Small Apply Now button */}
        <button className="w-full py-3 rounded-lg bg-white text-[#0145F2] font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg hover:shadow-[#0145F2]/20 flex justify-center items-center gap-2">
          Apply Now
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </button>
      </div>

      {/* Slide Indicators — Premium numbered progress bars */}
      <style>{`
        @keyframes indicator-fill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative flex items-center gap-0 cursor-pointer"
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Track */}
              <div className={`relative h-[3px] rounded-full overflow-hidden transition-all duration-500 ${isActive ? 'w-16 bg-white/20' : 'w-8 bg-white/15 hover:bg-white/25'}`}>
                {/* Animated fill */}
                {isActive && (
                  <div
                    className="absolute inset-0 bg-white rounded-full origin-left"
                    style={{
                      animation: slide.type === 'video' ? 'none' : 'indicator-fill 6s linear forwards',
                      background: 'linear-gradient(90deg, rgba(255,255,255,0.9), #F59E0B)',
                    }}
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
