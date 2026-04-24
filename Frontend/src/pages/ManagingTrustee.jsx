import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ManagingTrustee() {
  const container = useRef(null);
  const imageCard = useRef(null);

  useGSAP(() => {
    // Page reveal animations
    gsap.fromTo(
      '.gsap-fade-up',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%'
        }
      }
    );

    // Initial 3D pop for the image
    gsap.fromTo(
      imageCard.current,
      { scale: 0.9, rotateX: 10, rotateY: -10, opacity: 0 },
      {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out'
      }
    );
  }, { scope: container });

  const handleMouseMove = (e) => {
    if (!imageCard.current) return;
    const card = imageCard.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-15 to 15 degrees)
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.5,
      ease: 'power2.out',
      transformOrigin: 'center center'
    });
  };

  const handleMouseLeave = () => {
    if (!imageCard.current) return;
    gsap.to(imageCard.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    });
  };

  return (
    <main ref={container} className="min-h-screen bg-[#0b1120] text-white pt-8 pb-24 overflow-hidden relative">
      {/* 3D Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0145F2]/20 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6CA1D1]/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="mx-auto px-6 lg:px-12 relative z-10 w-full" style={{ maxWidth: '1400px' }}>
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="gsap-fade-up text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl">
            Message From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] to-[#6CA1D1]">Managing Trustee</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          
          {/* Left: 3D Image Card */}
          <div className="w-full lg:w-5/12 perspective-1000">
            <div 
              ref={imageCard}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full aspect-[3/4] rounded-[3rem] p-4 bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="w-full h-full rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-gray-200 to-gray-400 relative border border-white/20"
                style={{ transform: 'translateZ(30px)' }}
              >
                <img
                  src="/Adv. Dr. P. Krishnadas,.png"
                  alt="Adv. Dr. P. Krishnadas"
                  className="w-full h-full object-cover object-top"
                  style={{ mixBlendMode: 'darken' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/80 via-transparent to-transparent" />
              </div>

              {/* 3D Floating Nameplate */}
              <div 
                className="absolute -bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl"
                style={{ transform: 'translateZ(60px)' }}
              >
                <h3 className="text-2xl font-display font-bold text-white mb-1">Adv. Dr. P. Krishnadas</h3>
                <p className="text-sm font-bold tracking-wider text-[#6CA1D1] uppercase">Chairman & Managing Trustee</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-7/12 pt-8 lg:pt-0">
            <div className="relative">
              {/* Giant decorative quote mark */}
              <div className="absolute -top-16 -left-12 text-[150px] font-serif leading-none text-white/5 select-none pointer-events-none">
                "
              </div>
              
              <div className="space-y-8 relative z-10 text-[18px] md:text-[20px] font-body text-white/80 leading-relaxed font-light">
                <p className="gsap-fade-up">
                  <span className="text-2xl md:text-3xl font-display font-medium text-white block mb-2">Over five decades ago,</span>
                  Nehru Group of Institutions was established and right from the beginning, the institution has followed a unique approach to serve the community, be it students or the public, in general, with a vision of providing service through education and humanitarian works. Our conglomerate of 20 colleges is one of oldest organizations dedicated in Coimbatore and Kerala that has consistently worked towards empowerment and social change through Aeronautics, Architecture, Arts, Engineering, Science, Medical, Research and Technical education in India.
                </p>
                
                <p className="gsap-fade-up">
                  Being bestowed with the monumental responsibility of leading NGI with such rich heritage is a challenge by itself. I am proud that the rise of our institutions is not from the high rise concrete structures and technological infrastructure, but comes entirely from its intricately intertwined learning process and human resources, which has been the focus on education during its 50 years of existence.
                </p>

                <p className="gsap-fade-up">
                  NGI was established primarily to promote research and collaborative educational programs that would eventually grow and develop into a globally known centre of excellence. It is also my belief that active engagement with corporate industry in the form of internship programs, group discussions, entrepreneur awareness programs and personal interactions with the top brass of the industry is essential for NGI to maintain thought leadership. Effective Teaching Methodology through transformational training, coaching, mentoring, and other instruments of leadership development will definitely see our students transform into entrepreneurs than mere job seekers.
                </p>

                <p className="gsap-fade-up text-xl text-white font-medium italic mt-12 mb-12 border-l-4 border-[#0145F2] pl-6 py-2 bg-gradient-to-r from-[#0145F2]/10 to-transparent">
                  "Wishing you all the best and a great success in taking NGI to the next level of Excellence."
                </p>

                <div className="gsap-fade-up mt-16 pt-12 border-t border-white/10">
                  <h4 className="text-2xl font-display font-bold text-white mb-2">Adv. Dr. P. Krishnadas,</h4>
                  <p className="text-white/60 mb-1">Honorary Trade Commissioner of Mauritius - India,</p>
                  <p className="text-[#6CA1D1] font-medium">Chairman and Managing Trustee, Nehru Group of Institutions</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
