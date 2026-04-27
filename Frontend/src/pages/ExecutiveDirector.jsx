import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ExecutiveDirector() {
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
    <main ref={container} className="bg-[#0b1120] text-white pt-8 pb-24 overflow-hidden relative">
      {/* 3D Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0145F2]/20 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6CA1D1]/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="mx-auto px-6 lg:px-12 relative z-10 w-full" style={{ maxWidth: '1400px' }}>

        {/* #8 — Breadcrumb */}
        <nav className="gsap-fade-up flex items-center gap-2 text-sm font-medium text-white/50 mb-10">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-white/30">›</span>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <span className="text-white/30">›</span>
          <span className="text-white/80">Executive Director</span>
        </nav>

        {/* #5 — Heading inside the same max-width container */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="gsap-fade-up text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl">
            Message From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] to-[#6CA1D1]">Executive Director</span>
          </h1>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          
          {/* #2 — Left: Sticky 3D Image Card */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-[100px] lg:self-start perspective-1000">
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
                  src="/Prof. Dr. H. N. Nagaraja.png"
                  alt="Prof. Dr. H. N. Nagaraja"
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
                <h3 className="text-2xl font-display font-bold text-white mb-1">Prof. Dr. H. N. Nagaraja</h3>
                <p className="text-sm font-bold tracking-wider text-[#6CA1D1] uppercase">Executive Director</p>
              </div>
            </div>
          </div>

          {/* #3, #6, #7 — Right: Content with max-width and signature inside */}
          <div className="w-full lg:w-7/12 pt-8 lg:pt-0">
            <div className="relative" style={{ maxWidth: '680px' }}>
              {/* Giant decorative quote mark */}
              <div className="absolute -top-16 -left-12 text-[150px] font-serif leading-none text-white/5 select-none pointer-events-none">
                "
              </div>
              
              <div className="space-y-8 relative z-10 text-[16px] md:text-[18px] font-body text-white/80 font-light" style={{ lineHeight: '1.75' }}>
                {/* #7 — Removed duplicate name heading; bio starts directly */}
                <p className="gsap-fade-up">
                  The Executive Director of NGI is an Academician with 37 years of experience as a teacher by choice, an Administrator and a Researcher. With his commitment and dedication, he could able to contribute in getting the institutions he served NAAC and NBA accreditation. He was also instrumental in getting the institution participate and get good rank in NIRF and QS-I-Guage at local & global level. He has published 95+ research papers in national and international reputed journals. He has served in many academic bodies in the states of Karnataka, Gujarat and Uttarakhand.
                </p>
                
                {/* #4 — "Dear stakeholders" with divider after it */}
                <p className="gsap-fade-up font-medium text-white text-xl mt-8">
                  Dear stakeholders,
                </p>
                <div className="w-16 h-px bg-white/20 my-2" />

                <p className="gsap-fade-up">
                  Nehru Group of institutions has a strong legacy of more than five decades in the states of Tamil Nadu and Kerala, by one of the great leaders, an educationist, a philanthropist Sri. Late P.K. Das. The sole intention of establishing these institutions is to help the needy and the aspiring people of Tamil Nadu and Kerala who are deprived of professional education.
                </p>

                <p className="gsap-fade-up">
                  Darwin's theory of struggle for existence and survival of the fittest is the mantra very well suited for the education sector at present. In order to overcome the competition among many elite educational institutions, imparting of quality education to future citizens to build a strong nation with the development of villages and towns in all the basic sectors is very much required. Nehru Group of Institutions, right from its inception is working in this direction through its qualified, experienced, dedicated and committed faculty and staff members. Thus, relentless work in the right direction by all the stake holders with very strong ethical background has led to the existence of more than 20+ educational institutions starting from International school to professional colleges like, Engineering, Aeronautical, Law, Architecture, Arts & Science, Humanities & health sciences, Paramedical and Medical Sciences. Most of the institution and programmes are accredited by NAAC and NBA. Some of them have even got the Autonomous status by UGC.
                </p>
                
                <p className="gsap-fade-up">
                  Our primary goal is to establish center of excellence laboratories to tap the hidden talents of the young budding Engineers / Managers / Executives / Scientists / Bureaucrats etc., to showcase in the form of startups and entrepreneurship. This institute aims to become a research university contributing a great deal of services in Agriculture, Space, Automobile, Health and IT sector at both local & global level. The entire NGI family is working round the clock to leave any stone unturned in creating a strong students' community which can help the country in making Vishwa Guru in every sector.
                </p>
                
                <p className="gsap-fade-up">
                  NGI is aiming to impart multidisciplinary education by incorporating critical thinking, analytical and creative courses with experiential learning for carving & shaping the students into polished pebbles or trimmed diamonds depending upon their ability. NGI aims to impart ethical education to make aware about human values to the society. NEP 2020 shall be incorporated in phased manner so as to make students ready in 360 degrees. We are sure that, in the near future the institutions of Nehru group will create history in most of the sector by fulfilling the students' and parents' dreams into reality.
                </p>

                {/* #3 — Signature inside the text column, directly after last paragraph */}
                <div className="gsap-fade-up mt-8 pt-12 border-t border-white/10">
                  <h4 className="text-2xl font-display font-bold text-white mb-2">Prof. Dr. H. N. Nagaraja,</h4>
                  <p className="text-white/60 mb-1">Executive Director - Academics and Administration</p>
                  <p className="text-[#6CA1D1] font-medium">Nehru Group of Institutions</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
