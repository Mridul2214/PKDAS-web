import React, { useState, useEffect } from 'react';
import { Button } from './Button';

const slides = [
  {
    id: 1,
    type: 'image',
    src: '/banner.png',
    heading: 'Empowering Minds, Inspiring Futures',
    subheading: 'A premier arts and science college offering innovative programs, industry-focused learning, and holistic development.'
  },
  {
    id: 2,
    type: 'image',
    src: '/Buildings/NGI-aerial view - NASC- Front view (2).JPG',
    heading: 'Excellence in Education',
    subheading: 'Fostering a culture of academic rigor and creative exploration.'
  },
  {
    id: 3,
    type: 'image',
    src: '/Buildings/NGI-aerial view - NIET- Entrance.JPG',
    heading: 'Innovation at Heart',
    subheading: 'State-of-the-art infrastructure designed to inspire the next generation of engineers.'
  },
  {
    id: 4,
    type: 'image',
    src: '/Buildings/NGI-aerial view - NASC- front view low angle - birds eye view.JPG',
    heading: 'Global Perspectives',
    subheading: 'Preparing versatile leaders equipped for the dynamic challenges of tomorrow.'
  },
  {
    id: 5,
    type: 'video',
    src: '/campus_video.mp4',
    heading: 'Experience Our Campus',
    subheading: 'Take a virtual tour of our world-class facilities and vibrant campus life.'
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <section className="relative z-[20] h-screen flex items-center overflow-hidden bg-black">
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
            {/* We use a key trick here to re-trigger animations on slide change */}
            <div key={currentSlide} className="space-y-6">
              <h1 className="text-white text-display-lg md:text-6xl lg:text-7xl font-display font-medium leading-tight opacity-0 animate-slide-up">
                {slides[currentSlide].heading}
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-body max-w-md leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
                {slides[currentSlide].subheading}
              </p>
              <div className="flex gap-4 opacity-0 animate-slide-in-right" style={{ animationDelay: '600ms' }}>
                <Button variant="white" className="shadow-ambient">
                  Apply Now
                </Button>
                <Button variant="outline-white">
                  Explore Courses
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators — Premium numbered progress bars */}
      <style>{`
        @keyframes indicator-fill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
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
