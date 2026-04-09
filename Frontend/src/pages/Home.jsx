import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from '../components/Hero';
import { StatCounter } from '../components/StatCounter';
import { Link } from 'react-router-dom';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import { BackgroundOverlayCard } from '../components/BackgroundOverlayCard';

gsap.registerPlugin(ScrollTrigger);

function BentoCard({ title, desc, images, spans }) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const intervalRef = React.useRef(null);

  const startCycling = () => {
    intervalRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 1000);
  };

  const stopCycling = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIdx(0);
  };

  return (
    <div
      className={`gsap-stagger-child group relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 hover:border-white/20 transition-all duration-700 cursor-pointer shadow-2xl ${spans}`}
      style={{ isolation: 'isolate' }}
      onMouseEnter={startCycling}
      onMouseLeave={stopCycling}
    >
      {/* Background Layer - Rapid Cycling Images */}
      <div className="absolute inset-0 z-0">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={title}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover will-change-[opacity] transition-opacity duration-500 ${i === activeIdx ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      {/* Gradient overlay — only darken bottom area where text sits */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/5 to-transparent group-hover:from-black/90 group-hover:via-black/30 transition-all duration-500"></div>

      {/* Content Layer */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight drop-shadow-lg">
            {title}
          </h3>
          <p className="text-zinc-300 font-body text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-sm line-clamp-3 md:line-clamp-none">
            {desc}
          </p>
        </div>

        {/* Perspective Line Graphic (Premium detail) */}
        <div className="mt-6 flex items-center gap-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
          <div className="h-px bg-white/60 w-12 group-hover:w-20 transition-all duration-700"></div>
          <span className="text-[10px] font-bold text-white/60 group-hover:text-white tracking-[0.2em] uppercase transition-colors duration-500">VIEW DETAILS</span>
        </div>
      </div>

      {/* Subtle hover glow — contained inside card */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-[2]"></div>
    </div>
  );
}

export function Home() {
  const container = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const hoverTimer = useRef(null);
  const [instView, setInstView] = useState('categories'); // 'categories' | 'all' | category title
  const [instSearch, setInstSearch] = useState('');
  const [expandedStudentCard, setExpandedStudentCard] = useState(null);

  useGSAP(() => {
    const reveals = gsap.utils.toArray('.gsap-reveal');
    gsap.set(reveals, { opacity: 0, y: 30 });
    reveals.forEach((element) => {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Stagger parent blocks (includes bento cards)
    const staggerSections = gsap.utils.toArray('.gsap-stagger-parent');
    staggerSections.forEach((parent) => {
      const children = parent.querySelectorAll('.gsap-stagger-child');
      gsap.set(children, { opacity: 0, y: 20 });
      gsap.to(children, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.out',
        overwrite: 'auto',
        scrollTrigger: {
          trigger: parent,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Scholar cards
    const scholarCards = gsap.utils.toArray('.scholar-wrapper');
    if (scholarCards.length) {
      gsap.set(scholarCards, { opacity: 0, y: 40 });
      gsap.to(scholarCards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        overwrite: true,
        scrollTrigger: {
          trigger: '.scholars-grid',
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Robust multi-stage refresh to handle SPA navigation timing
    // Stage 1: after next paint
    requestAnimationFrame(() => ScrollTrigger.refresh());
    // Stage 2: after images start loading and layout shifts settle
    const t1 = setTimeout(() => ScrollTrigger.refresh(true), 500);
    // Stage 3: final safety net after heavy assets load
    const t2 = setTimeout(() => ScrollTrigger.refresh(true), 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };

  }, { scope: container });

  const institutionCategories = [
    {
      title: "Engineering & Technology",
      description: "Fostering technical excellence across 4 elite engineering campuses.",
      colleges: ["NIET (Coimbatore)", "NIT (Coimbatore)", "NCERC (Kerala)", "JCET (Kerala)"],
      img: "/Buildings/NGI-aerial view - NIET- Entrance.JPG"
    },
    {
      title: "Arts, Science & Commerce",
      description: "Premier programs focusing on literature and core sciences.",
      colleges: ["NASC (Coimbatore)", "PK Das Liberal College (Kerala)"],
      img: "/Buildings/NGI-aerial view - NASC- Front view (2).JPG"
    },
    {
      title: "Management & IT",
      description: "Developing strategic business leaders and leading-edge technologists.",
      colleges: ["NCM (Coimbatore)", "NIITM (Coimbatore)", "NSM (Kerala)"],
      img: "/Buildings/NGI-aerial view - NIITM  (1).JPG"
    },
    {
      title: "Healthcare & Medical",
      description: "Pioneering medical sciences and progressive patient care.",
      colleges: ["PKDIMS Medical College", "Nursing Colleges", "Physiotherapy", "Allied Health Sciences"],
      img: "/Buildings/NGI-aerial view - NASC- front view low angle - birds eye view.JPG"
    },
    {
      title: "Aviation & Specialized",
      description: "Niche, industry-focused training in aeronautical sciences.",
      colleges: ["Aeronautics Institute", "Jawaharlal Aviation", "Design Institute"],
      img: "/Buildings/NGI-aerial view - NIT - Main block tight soht.JPG"
    },
    {
      title: "Group Level Disciplines",
      description: "Specialized schools focusing on legal studies and architectural design.",
      colleges: ["Architecture Schools", "Nehru Academy of Law", "Nehru College of Pharmacy"],
      img: "/Buildings/NGI-aerial view - NASC- Front view (2).JPG"
    }
  ]; const highlights = [
    {
      title: "Industry-Oriented Curriculum",
      desc: "Stay ahead with a curriculum co-created by industry giants and top corporate partners.",
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      title: "Expert Faculty",
      desc: "Learn from Ph.D. scholars and industry veterans with decades of global experience.",
      images: [
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      title: "World-Class Infrastructure",
      desc: "Experience learning in high-tech labs, digital libraries, and modern smart classrooms.",
      images: [
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      title: "Global Placements",
      desc: "Join the elite league with placements in Fortune 500 companies and global tech firms.",
      images: [
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      title: "Skill-Based Training",
      desc: "Master your craft through hands-on workshops, advanced labs, and real-time industry projects.",
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=90",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=90",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=90",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=90",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=90"
      ]
    }
  ];

  const topStudents = [
    {
      name: "Aisha Rahman",
      course: "B.Sc Computer Science",
      achievement: "Secured University 1st Rank and recruited by Google as a Software Engineer.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Rahul Menon",
      course: "BBA",
      achievement: "Founded a successful tech startup while in his final year of studies.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Sneha Krishnan",
      course: "BA English",
      achievement: "Published author and winner of the National Youth Literary Award.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Priya Sharma",
      course: "M.Sc Data Science",
      achievement: "Published a research paper on predictive AI models in a top ACM journal.",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "David Chen",
      course: "B.Tech Aerospace",
      achievement: "Won the National Robotics Competition and interned at ISRO.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Anita Desai",
      course: "B.Sc Nursing",
      achievement: "Awarded 'Best Student Nurse' for exemplary service during clinicals.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
    }
  ];

  const cultureSections = [
    {
      subtitle: "Campus Life",
      title: "A Vibrant Culture",
      description: "Beyond textbooks and classrooms, NASC is a melting pot of diverse cultures, creative expression, and athletic excellence. Experience a dynamic campus life filled with spirited cultural festivals, national-level technical symposiums, and thriving student-led clubs.",
      video: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
      buttonText: "Discover More",
      buttonLink: "/culture",
      reverse: false
    },
    {
      subtitle: "Celebrations",
      title: "Arts & Music Festivals",
      description: "Our campus comes alive with vibrant colors and rhythmic beats during our annual arts and music festivals. It's a platform for students to showcase their extraordinary talents in singing, dancing, fine arts, and theatrical performances.",
      video: "/arts.mp4",
      buttonText: "See Events",
      buttonLink: "/events",
      reverse: true
    },
    {
      subtitle: "Athletics",
      title: "Sports Tournaments",
      description: "Physical fitness and team spirit are integral to the NASC experience. We host premier intra-college and national-level sports tournaments, providing our athletes with top-tier facilities and expert coaching.",
      video: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
      buttonText: "View Athletics",
      buttonLink: "/sports",
      reverse: false
    },
    {
      subtitle: "Student Bodies",
      title: "Innovation Clubs",
      description: "Join over 20 active innovation and technical clubs where theory meets practice. From robotics and coding to entrepreneurship, our clubs host weekly hackathons, seminars, and collaborative projects.",
      video: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
      buttonText: "Join a Club",
      buttonLink: "/clubs",
      reverse: true
    }
  ];

  return (
    <main ref={container} className="bg-black">
      <Hero />

      {/* About Preview Section */}
      <section className="relative z-[20] py-24 bg-transparent overflow-hidden">
        {/* Subtle Background Blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="gsap-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-6 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Discover PKDAS
              </div>
              <h2 className="gsap-reveal text-display-md md:text-5xl lg:text-6xl font-display text-on-surface mb-6 leading-tight">
                Empowering the <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Next Generation</span>
              </h2>
              <p className="gsap-reveal text-lg font-body text-on-surface-variant leading-relaxed mb-8">
                Nehru Arts and Science College (NASC) is a leading autonomous institution dedicated to academic excellence. We provide a dynamic learning environment that nurtures creativity, critical thinking, and leadership skills.
                <br /><br />
                With state-of-the-art facilities and a curriculum co-created with industry leaders, we are shaping the future of over 3,500 students every year.
              </p>

              <div className="gsap-stagger-parent grid grid-cols-2 gap-6 mb-10">
                <div className="gsap-stagger-child border-l-2 border-primary pl-4">
                  <div className="text-3xl font-display font-medium text-on-surface mb-1">20+</div>
                  <div className="text-sm font-body text-on-surface-variant uppercase tracking-wide">Years of Heritage</div>
                </div>
                <div className="gsap-stagger-child border-l-2 border-accent pl-4">
                  <div className="text-3xl font-display font-medium text-on-surface mb-1">3500+</div>
                  <div className="text-sm font-body text-on-surface-variant uppercase tracking-wide">Active Students</div>
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
            <div className="relative h-[600px] w-full hidden md:block">
              {/* Center Main Image */}
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 object-cover rounded-2xl shadow-2xl z-20 border-[6px] border-surface-container-lowest"
              />
              {/* Floating Image Top Left */}
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Campus Life"
                className="absolute top-[10%] left-[5%] w-48 h-56 object-cover rounded-2xl shadow-xl z-10 border-4 border-surface-container-lowest hover:rotate-3 transition-transform duration-500 hover:z-30 hover:scale-105 cursor-pointer"
              />
              {/* Floating Image Bottom Right */}
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="University students"
                className="absolute bottom-[10%] right-[0%] w-60 h-48 object-cover rounded-2xl shadow-xl z-30 border-4 border-surface-container-lowest hover:-rotate-3 transition-transform duration-500 hover:scale-105 cursor-pointer"
              />
              {/* Floating Image Bottom Left */}
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Study group"
                className="absolute bottom-[5%] left-[20%] w-40 h-40 object-cover rounded-2xl shadow-lg z-10 border-4 border-surface-container-lowest hover:rotate-6 transition-transform duration-500 hover:z-30 hover:scale-105 cursor-pointer"
              />
              {/* decorative element */}
              <div className="absolute top-[20%] right-[10%] w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse delay-700 pointer-events-none"></div>
              <div className="absolute bottom-[20%] left-[5%] w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
            </div>

            {/* Mobile Fallback Image List */}
            <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Students" className="w-full h-48 object-cover rounded-2xl shadow-md" />
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Campus Life" className="w-full h-48 object-cover rounded-2xl shadow-md mt-8" />
            </div>

          </div>
        </div>
      </section>

      {/* ── Achievements Section ── */}
      <section className="relative z-[20] py-24 bg-transparent overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="gsap-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold tracking-widest uppercase mb-5 border border-amber-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Milestones
            </div>
            <h2 className="gsap-reveal text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-5">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Achievements</span>
            </h2>
            <p className="gsap-reveal text-zinc-400 font-body text-lg leading-relaxed max-w-2xl mx-auto">
              Decades of excellence reflected in the accomplishments of our students, faculty, and institution. Every milestone fuels our mission to empower the next generation.
            </p>
          </div>

          {/* Achievement Cards — Asymmetric Grid */}
          <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">

            {/* Card 1: Graduation — Wide */}
            <div className="gsap-stagger-child md:col-span-7 group relative rounded-3xl overflow-hidden min-h-[380px] border border-white/10 hover:border-amber-400/30 transition-all duration-700 cursor-pointer">
              <img
                src="/achievements/graduates_celebration.png"
                alt="Graduation Celebration"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">Convocation 2025</div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 leading-tight">
                    3,500+ Graduates Every Year
                  </h3>
                  <p className="text-zinc-300 font-body text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Our graduates go on to become industry leaders, entrepreneurs, and innovators — carrying forward a legacy of excellence across the globe.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Gold Medalist — Tall */}
            <div className="gsap-stagger-child md:col-span-5 group relative rounded-3xl overflow-hidden min-h-[380px] border border-white/10 hover:border-amber-400/30 transition-all duration-700 cursor-pointer">
              <img
                src="/achievements/gold_medalist.png"
                alt="Gold Medalist"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">Academic Excellence</div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight">
                    150+ University Gold Medals
                  </h3>
                  <p className="text-zinc-300 font-body text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Our students consistently secure top university ranks and gold medals across all disciplines — a testament to our academic rigor.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Award Ceremony — Medium */}
            <div className="gsap-stagger-child md:col-span-5 group relative rounded-3xl overflow-hidden min-h-[360px] border border-white/10 hover:border-amber-400/30 transition-all duration-700 cursor-pointer">
              <img
                src="/achievements/award_ceremony.png"
                alt="Award Ceremony"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">National Recognition</div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight">
                    NAAC A++ Accredited
                  </h3>
                  <p className="text-zinc-300 font-body text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Nationally recognized for our outstanding institutional standards, governance, and commitment to quality education.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Placement Success — Wide */}
            <div className="gsap-stagger-child md:col-span-7 group relative rounded-3xl overflow-hidden min-h-[360px] border border-white/10 hover:border-amber-400/30 transition-all duration-700 cursor-pointer">
              <img
                src="/achievements/placement_success.png"
                alt="Placement Success"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">Industry Connect</div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 leading-tight">
                    95% Placement Record
                  </h3>
                  <p className="text-zinc-300 font-body text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Students placed in Fortune 500 companies including TCS, Infosys, Wipro, Amazon, and Deloitte — with packages reaching ₹10 LPA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats Row */}
          <div className="gsap-stagger-parent grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Years of Legacy', icon: '🏛️' },
              { value: '25+', label: 'Institutions', icon: '🎓' },
              { value: '200+', label: 'Awards Won', icon: '🏆' },
              { value: '50K+', label: 'Alumni Network', icon: '🌐' },
            ].map((stat, idx) => (
              <div key={idx} className="gsap-stagger-child group text-center p-8 rounded-2xl border border-white/5 hover:border-amber-400/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-500">
                  {stat.value}
                </div>
                <div className="text-xs font-body text-zinc-500 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions Overview Section */}
      <section className="relative z-[20] py-16 bg-transparent text-on-surface">
        <div className="absolute top-0 left-0 w-full h-px bg-surface-container-high"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-10 mx-auto text-center">
            <h2 className="gsap-reveal text-display-md md:text-5xl font-display mb-6">Our Institutions</h2>
            <p className="gsap-reveal text-lg text-on-surface-variant font-body">
              Explore our diverse ecosystem of specialized colleges and institutes, operating across multiple cutting-edge domains.
            </p>
          </div>

          {/* Filter Tabs + Search */}
          <div className="gsap-reveal flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => { setInstView('categories'); setInstSearch(''); }}
                className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${instView === 'categories' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-high/80'}`}
              >
                Categories
              </button>
              <button
                onClick={() => { setInstView('all'); setInstSearch(''); }}
                className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${instView === 'all' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-high/80'}`}
              >
                All Colleges
              </button>
              {institutionCategories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => { setInstView(cat.title); setInstSearch(''); }}
                  className={`hidden md:inline-block px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${instView === cat.title ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-high/80'}`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Search Input — always visible */}
            <div className="relative w-full md:w-72 flex-shrink-0">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search colleges..."
                value={instSearch}
                onChange={(e) => {
                  setInstSearch(e.target.value);
                  if (e.target.value.trim() && instView === 'categories') setInstView('all');
                }}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface-container-high border border-surface-container-high text-on-surface text-sm font-body placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>

          {/* Categories View (Accordion Panels) */}
          {instView === 'categories' && (
            <>
              {[institutionCategories.slice(0, 3), institutionCategories.slice(3)].map((row, rowIdx) => (
                <div className="inst-row" key={rowIdx} style={{ marginBottom: rowIdx === 0 ? '8px' : 0 }}>
                  {row.map((group, colIdx) => {
                    const idx = rowIdx * 3 + colIdx;
                    return (
                      <div
                        key={idx}
                        className={`gsap-stagger-child inst-panel ${activeCard === idx ? 'inst-panel--active' : ''}`}
                        onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                        onMouseEnter={() => setActiveCard(idx)}
                        onMouseLeave={() => { clearTimeout(hoverTimer.current); setActiveCard(null); }}
                      >
                        <div className="inst-panel-img" style={{ backgroundImage: `url('${group.img}')` }}></div>
                        <div className="inst-panel-gradient"></div>
                        <div className="inst-panel-content">
                          <h3 className="inst-panel-title">{group.title}</h3>
                          <div className="inst-panel-details">
                            <p className="inst-panel-desc">{group.description}</p>
                            <ul className="inst-panel-list">
                              {group.colleges.map((college, i) => (
                                <li key={i}>
                                  <span className="inst-panel-dot"></span>
                                  {college}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </>
          )}

          {/* Colleges Card Grid View */}
          {instView !== 'categories' && (() => {
            // Build flat list of all colleges with category info
            const allColleges = institutionCategories.flatMap((cat) =>
              cat.colleges.map((name) => ({
                name,
                category: cat.title,
                img: cat.img,
                description: cat.description,
              }))
            );

            // Filter by selected category
            const filtered = instView === 'all'
              ? allColleges
              : allColleges.filter((c) => c.category === instView);

            // Filter by search query
            const searched = instSearch.trim()
              ? filtered.filter((c) => c.name.toLowerCase().includes(instSearch.toLowerCase()))
              : filtered;

            return searched.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searched.map((college, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl overflow-hidden border border-white/5 bg-surface-container hover:border-primary/30 transition-all duration-500 cursor-pointer hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={college.img}
                        alt={college.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      {/* Category badge */}
                      <span className="absolute top-3 left-3 text-[10px] font-bold text-white bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-wider">
                        {college.category}
                      </span>
                    </div>
                    {/* Info */}
                    <div className="p-5">
                      <h4 className="text-lg font-display font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">{college.name}</h4>
                      <p className="text-sm font-body text-on-surface-variant leading-relaxed line-clamp-2">{college.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span>Learn More</span>
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-on-surface-variant font-body text-lg">No colleges found matching "<span className="text-primary">{instSearch}</span>"</p>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── What's Your Interest? ── */}
      <section className="relative z-[20] py-14 sm:py-20 md:py-24 bg-transparent overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
            <div>
              <h2 className="gsap-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                What's Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Interest?</span>
              </h2>
              <p className="gsap-reveal text-zinc-400 font-body text-base sm:text-lg mt-2 sm:mt-3 max-w-xl">
                Explore our diverse range of academic disciplines and find your perfect path.
              </p>
            </div>
            <div className="gsap-reveal flex items-center gap-3 flex-shrink-0">
              <Link to="/courses" className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/15 text-white font-semibold text-xs sm:text-sm hover:bg-white/5 transition-all duration-300">
                Search Programs
              </Link>
              <Link to="/contact" className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary text-white font-semibold text-xs sm:text-sm hover:brightness-110 transition-all duration-300 shadow-lg shadow-primary/20">
                Apply Now
              </Link>
            </div>
          </div>

          {/* Disciplines Grid */}
          <div className="gsap-stagger-parent grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              { name: 'Arts & Humanities', slug: 'arts-humanities', icon: '🎨', color: 'from-rose-500/20 to-rose-500/5', border: 'hover:border-rose-400/30' },
              { name: 'Commerce', slug: 'commerce', icon: '📊', color: 'from-blue-500/20 to-blue-500/5', border: 'hover:border-blue-400/30' },
              { name: 'Computer Science', slug: 'computer-science', icon: '💻', color: 'from-violet-500/20 to-violet-500/5', border: 'hover:border-violet-400/30' },
              { name: 'Engineering', slug: 'engineering', icon: '⚙️', color: 'from-zinc-500/20 to-zinc-500/5', border: 'hover:border-zinc-400/30' },
              { name: 'Architecture', slug: 'architecture', icon: '🏛️', color: 'from-amber-500/20 to-amber-500/5', border: 'hover:border-amber-400/30' },
              { name: 'Business & MBA', slug: 'business-mba', icon: '💼', color: 'from-emerald-500/20 to-emerald-500/5', border: 'hover:border-emerald-400/30' },
              { name: 'Medicine', slug: 'medicine', icon: '🩺', color: 'from-red-500/20 to-red-500/5', border: 'hover:border-red-400/30' },
              { name: 'Nursing', slug: 'nursing', icon: '🏥', color: 'from-pink-500/20 to-pink-500/5', border: 'hover:border-pink-400/30' },
              { name: 'Pharmacy', slug: 'pharmacy', icon: '💊', color: 'from-teal-500/20 to-teal-500/5', border: 'hover:border-teal-400/30' },
              { name: 'Aviation', slug: 'aviation', icon: '✈️', color: 'from-sky-500/20 to-sky-500/5', border: 'hover:border-sky-400/30' },
              { name: 'Law', slug: 'law', icon: '⚖️', color: 'from-yellow-500/20 to-yellow-500/5', border: 'hover:border-yellow-400/30' },
              { name: 'Data Science', slug: 'data-science', icon: '📈', color: 'from-indigo-500/20 to-indigo-500/5', border: 'hover:border-indigo-400/30' },
              { name: 'Biotechnology', slug: 'biotechnology', icon: '🧬', color: 'from-lime-500/20 to-lime-500/5', border: 'hover:border-lime-400/30' },
              { name: 'Physical Sciences', slug: 'physical-sciences', icon: '🔬', color: 'from-cyan-500/20 to-cyan-500/5', border: 'hover:border-cyan-400/30' },
              { name: 'Allied Health', slug: 'allied-health', icon: '🫀', color: 'from-orange-500/20 to-orange-500/5', border: 'hover:border-orange-400/30' },
              { name: 'Design', slug: 'design', icon: '🎯', color: 'from-fuchsia-500/20 to-fuchsia-500/5', border: 'hover:border-fuchsia-400/30' },
              { name: 'Physiotherapy', slug: 'physiotherapy', icon: '🦴', color: 'from-green-500/20 to-green-500/5', border: 'hover:border-green-400/30' },
              { name: 'Aeronautics', slug: 'aeronautics', icon: '🚀', color: 'from-blue-600/20 to-blue-600/5', border: 'hover:border-blue-500/30' },
            ].map((discipline, idx) => (
              <Link
                to={`/interest/${discipline.slug}`}
                key={idx}
                className={`gsap-stagger-child group flex items-center gap-3 sm:gap-4 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 ${discipline.border} bg-white/[0.06] backdrop-blur-md shadow-lg shadow-black/20 hover:bg-gradient-to-br ${discipline.color} transition-all duration-300 cursor-pointer hover:-translate-y-1`}
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white/10 border border-white/5 flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-inner">
                  {discipline.icon}
                </div>
                <span className="text-xs sm:text-sm font-body font-semibold text-zinc-100 group-hover:text-white transition-colors duration-300 leading-tight">
                  {discipline.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Students Spotlight */}
      <section className="relative z-[20] py-16 bg-transparent text-on-surface border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12 mx-auto text-center">
            <h2 className="gsap-reveal text-display-md md:text-5xl font-display mb-6">Our Top Scholars</h2>
            <p className="gsap-reveal text-lg text-on-surface-variant font-body">
              Meet some of our brightest minds who are setting new benchmarks in academics, leadership, and innovation.
            </p>
          </div>
          <div className="scholars-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative z-10 w-full mb-8 pt-8">
            {topStudents.map((student, idx) => (
              <div key={idx} className="flex flex-col group relative">
                {/* Visual Card Area */}
                <div className="relative pt-8 px-4 mb-6">
                  {/* Dark Blue Base Card */}
                  <div className="absolute inset-x-0 bottom-0 top-12 bg-[#081b3f] rounded-[2.5rem] z-0 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                    {/* Subtle Repeating Watermark like in screenshot */}
                    <div className="absolute inset-0 opacity-[0.03] text-white font-display text-9xl font-black flex items-center justify-center whitespace-nowrap overflow-hidden tracking-[0.5em] pointer-events-none select-none">
                      P K D A S
                    </div>
                  </div>

                  {/* Image Masked as a Bust */}
                  <div className="relative z-10 flex justify-center h-[260px]">
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-full max-w-[220px] h-full object-cover rounded-t-[140px] rounded-b-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out group-hover:scale-105 group-hover:rounded-t-[100px]"
                    />
                  </div>

                  {/* Floating Frosted Tag */}
                  <div className="absolute top-[40%] -left-2 z-20 bg-blue-500/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-lg transform -rotate-[5deg] shadow-lg group-hover:-rotate-[2deg] group-hover:bg-blue-500/40 transition-all duration-300">
                    {student.course}
                  </div>
                </div>

                {/* Text Info Below */}
                <div className="px-2">
                  <h3 className="text-xl md:text-2xl font-display font-medium text-white flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80"></span>
                    {student.name}
                  </h3>
                  <p className="font-body text-sm md:text-base text-zinc-400 leading-relaxed mb-6 lg:min-h-[72px]">
                    {student.achievement}
                  </p>
                  <button className="text-xs font-bold text-blue-500 tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2 cursor-pointer group/link w-fit">
                    FIND OUT MORE
                    <span className="text-base group-hover/link:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section - Bento Redesign */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: 'transparent', isolation: 'isolate', zIndex: 20 }}>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-20 mx-auto text-center">

            <h2 className="gsap-reveal text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 ">Choose </span>
              Us
            </h2>
            <p className="gsap-reveal text-zinc-400 font-body text-xl max-w-2xl leading-relaxed mx-auto">
              We combine legendary heritage with modern innovation to create an educational experience that is truly world-class.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-6 gsap-stagger-parent">
            {highlights.map((item, idx) => {
              // Bento span logic: Refined for perfect 3-column alignment
              const spans = [
                'md:col-span-2 md:row-span-1', // 1: Wide (Top Left)
                'md:col-span-1 md:row-span-2', // 2: Tall (Right Side)
                'md:col-span-1 md:row-span-1', // 3: Small (Middle Left)
                'md:col-span-1 md:row-span-1', // 4: Small (Middle Center)
                'md:col-span-3 md:row-span-1'  // 5: Full Width (Bottom) - Fills the gap
              ][idx] || 'md:col-span-1';

              return (
                <BentoCard
                  key={idx}
                  title={item.title}
                  desc={item.desc}
                  images={item.images}
                  spans={spans}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus Culture & Additional Sections */}
      <section className="relative z-[20] py-24 bg-transparent overflow-hidden">
        <div className="container mx-auto px-6">

          {/* Section Heading */}
          <div className="mb-20 max-w-3xl mx-auto text-center">
            <div className="gsap-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              Student Experience
            </div>
            <h2 className="gsap-reveal text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-none mb-5">
              Campus
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400"> Life</span>
            </h2>
            <p className="gsap-reveal text-zinc-400 font-body text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
              A world beyond academics — discover the vibrant events, sports, arts, and clubs that make NASC a truly unforgettable place to grow.
            </p>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {cultureSections.map((section, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* 3D Card Image */}
                <CardContainer
                  containerClassName={`w-full ${section.reverse ? 'lg:order-2' : 'lg:order-1'}`}
                  className="w-full"
                >
                  <CardBody className="w-full h-[300px] md:h-[400px] lg:h-[460px] rounded-2xl overflow-hidden relative">
                    <CardItem translateZ={60} className="w-full h-full">
                      <video
                        src={section.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-2xl shadow-2xl"
                      />
                    </CardItem>
                    {/* Floating subtitle badge */}
                    <CardItem
                      translateZ={90}
                      className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full"
                    >
                      {section.subtitle}
                    </CardItem>
                  </CardBody>
                </CardContainer>

                {/* Text Content */}
                <div className={`max-w-xl mx-auto lg:mx-0 ${section.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                  <p className="gsap-reveal text-primary font-cursive text-3xl lg:text-4xl capitalize mb-2 drop-shadow-md">{section.subtitle}</p>
                  <h2 className="gsap-reveal text-4xl md:text-5xl font-display text-white mb-6 font-bold leading-tight">{section.title}</h2>
                  <p className="gsap-reveal text-zinc-400 font-body leading-relaxed mb-10 text-lg md:text-xl">{section.description}</p>
                  <div className="gsap-reveal">
                    <Link to={section.buttonLink} className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-lg">
                      {section.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities — Redesigned */}
      <section className="relative z-[20] py-24 bg-transparent overflow-hidden">
        {/* Decorative accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="gsap-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-5 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Placements
            </div>
            <h2 className="gsap-reveal text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-5">
              Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Opportunities</span>
            </h2>
            <p className="gsap-reveal text-zinc-400 font-body text-lg leading-relaxed max-w-2xl mx-auto">
              Our students are consistently recruited by top-tier companies. Here's a glimpse of the success stories that define our placement track record.
            </p>
          </div>

          {/* Stats Row */}
          <div className="gsap-stagger-parent flex flex-col md:flex-row items-stretch justify-center gap-0 max-w-4xl mx-auto mb-20">
            {[
              { value: 80, suffix: '+', label: 'Students in Single Drive', color: 'from-blue-500 to-blue-400' },
              { value: 10, suffix: ' LPA', label: 'Top Salary Package', color: 'from-amber-500 to-amber-400' },
              { value: 100, suffix: '%', label: 'Placement Assistance', color: 'from-emerald-500 to-emerald-400' },
            ].map((stat, idx) => (
              <div key={idx} className="gsap-stagger-child group relative flex-1 text-center py-10 px-6">
                {/* Top accent line */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] rounded-full bg-gradient-to-r ${stat.color} group-hover:w-20 transition-all duration-500`}></div>
                <div className="text-5xl md:text-6xl font-display font-bold text-white mb-3">
                  <StatCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-body text-zinc-500 uppercase tracking-[0.2em]">{stat.label}</div>
                {/* Vertical divider (not on last) */}
                {idx < 2 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10"></div>}
              </div>
            ))}
          </div>

          {/* Student Success Cards */}
          <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Arjun Nair',
                role: 'Software Engineer',
                company: 'TCS',
                ctc: '₹6.5 LPA',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
                quote: 'The placement cell prepared me with mock interviews and resume workshops that made all the difference.'
              },
              {
                name: 'Meera Krishnan',
                role: 'Data Analyst',
                company: 'Infosys',
                ctc: '₹5.8 LPA',
                img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80',
                quote: 'From campus to corporate — the transition was seamless thanks to the industry exposure I received here.'
              },
              {
                name: 'Rahul Menon',
                role: 'Associate Consultant',
                company: 'Deloitte',
                ctc: '₹8.2 LPA',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
                quote: 'The practical learning approach and expert mentors gave me a competitive edge in every interview.'
              },
              {
                name: 'Sneha Das',
                role: 'Cloud Engineer',
                company: 'Amazon',
                ctc: '₹10 LPA',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
                quote: 'Landing a role at Amazon was a dream — the college\'s placement support made it a reality.'
              },
              {
                name: 'Vishnu Prasad',
                role: 'Business Analyst',
                company: 'Capgemini',
                ctc: '₹7 LPA',
                img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
                quote: 'The internship program was the gateway that connected me directly to my first corporate role.'
              },
              {
                name: 'Ananya Roy',
                role: 'UI/UX Designer',
                company: 'Wipro',
                ctc: '₹6 LPA',
                img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
                quote: 'The design thinking workshops and hackathons sharpened my skills and built my portfolio.'
              },
            ].map((student, idx) => {
              const isExpanded = expandedStudentCard === idx;
              return (
                <div
                  key={idx}
                  className={`gsap-stagger-child group relative bg-white/[0.03] border rounded-2xl p-5 transition-all duration-500 cursor-pointer ${isExpanded ? 'border-primary/30' : 'border-white/10 hover:border-primary/30'}`}
                  onClick={() => setExpandedStudentCard(isExpanded ? null : idx)}
                >
                  {/* Top row: Photo + Info + CTC */}
                  <div className="flex items-center gap-4">
                    <img
                      src={student.img}
                      alt={student.name}
                      className={`w-12 h-12 rounded-full object-cover ring-2 transition-all duration-500 flex-shrink-0 ${isExpanded ? 'ring-primary/40' : 'ring-white/10 group-hover:ring-primary/40'}`}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-display font-semibold text-sm truncate">{student.name}</h4>
                      <p className="text-zinc-500 font-body text-xs">{student.role} · <span className="text-primary">{student.company}</span></p>
                    </div>
                    <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full flex-shrink-0">{student.ctc}</span>
                  </div>

                  {/* Expandable quote — hover on desktop, tap on mobile */}
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100'}`}>
                    <div className="pt-4 mt-4 border-t border-white/5">
                      <p className="text-zinc-400 font-body text-sm leading-relaxed italic">"{student.quote}"</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="gsap-reveal mt-16 text-center">
            <p className="text-zinc-500 font-body italic mb-6 max-w-2xl mx-auto">
              "We are proud of our 2026 Batch achievement: over 80 students successfully placed at RINEX driving innovation."
            </p>
            <Link to="/placements" className="inline-flex items-center gap-2 group px-8 py-4 bg-primary text-white font-bold tracking-wide rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
              View All Placements
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Recruitment Partners Section */}
      <section className="relative overflow-hidden border-t mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-40 rounded-3xl border-white/5" style={{ zIndex: 20 }}>
        {/* Background: dark building photo with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80"
            alt="Campus building"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 w-[92%] sm:w-[90%] lg:w-[70%] max-w-5xl mx-auto py-14 sm:py-20 md:py-28">
          {/* Heading */}
          <div className="mb-10 sm:mb-16">
            <p className="gsap-reveal text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-zinc-400 mb-3">Our Network</p>
            <h2 className="gsap-reveal text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-none">
              <span className="text-white">RECRUITMENT</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">PARTNERS</span>
            </h2>
          </div>

          {/* Logo Grid — 2 cols mobile, 3 cols sm, 4 cols md, 6 cols lg */}
          <div className="gsap-stagger-parent grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl sm:rounded-2xl overflow-hidden">
            {[
              { name: "TCS", logo: null, url: "https://www.tcs.com" },
              { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", url: "https://www.infosys.com" },
              { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", url: "https://www.amazon.jobs" },
              { name: "Deloitte", logo: null, url: "https://www.deloitte.com" },
              { name: "PwC", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg", url: "https://www.pwc.com" },
              { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg", url: "https://www.accenture.com" },
              { name: "KPMG", logo: null, url: "https://www.kpmg.com" },
              { name: "NatWest", logo: null, url: "https://www.natwestgroup.com" },
              { name: "EY", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg", url: "https://www.ey.com" },
              { name: "Capgemini", logo: null, url: "https://www.capgemini.com" },
              { name: "D E Shaw", logo: null, url: "https://www.deshaw.com" },
              { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg", url: "https://www.wipro.com" },
              { name: "Nestlé", logo: null, url: "https://www.nestle.com" },
              { name: "Cipla", logo: null, url: "https://www.cipla.com" },
              { name: "Unilever", logo: null, url: "https://www.unilever.com" },
              { name: "Barclays", logo: null, url: "https://www.barclays.com" },
              { name: "UST", logo: null, url: "https://www.ust.com" },
              { name: "& more", logo: null, url: "/placements" },
            ].map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target={partner.url.startsWith('/') ? '_self' : '_blank'}
                rel={partner.url.startsWith('/') ? undefined : 'noopener noreferrer'}
                className="gsap-stagger-child group relative bg-black/40 hover:bg-white/[0.06] transition-colors duration-300 flex items-center justify-center p-4 sm:p-6 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] cursor-pointer"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-8 sm:max-h-10 md:max-h-12 max-w-[90px] sm:max-w-[120px] object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                ) : (
                  <span className="text-white/50 font-display font-bold text-sm sm:text-lg md:text-2xl group-hover:text-white transition-colors duration-300 text-center">
                    {partner.name}
                  </span>
                )}
                {/* Subtle corner accent on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-300 group-hover:w-full transition-all duration-500 rounded-full" />
              </a>
            ))}
          </div>

          {/* Bottom note */}
          <p className="gsap-reveal mt-6 sm:mt-8 text-center text-zinc-500 font-body text-xs sm:text-sm tracking-wide">
            500+ companies recruit annually from our campuses across the Nehru Group of Institutions.
          </p>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative z-[20] bg-transparent overflow-hidden border-t border-white/5 mt-0 md:mt-10">
        <div className="relative z-10 w-full">
          <div className="gsap-reveal relative overflow-hidden border-y border-white/10 bg-black/40 py-24 md:py-32 px-8 text-center group shadow-2xl backdrop-blur-xl w-full">
            
            {/* Animated Background Mesh/Glow */}
            <div className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-1000 pointer-events-none">
              <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
              <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Noise Texture to make it look premium */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Admissions 2026–2027
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-xl">
                Shape Your Future With <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">PKDAS University</span>
              </h2>
              
              <p className="text-xl md:text-2xl font-body text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                Join a legacy of excellence. Embark on a transformative educational journey that prepares you for global success.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="relative group/btn overflow-hidden rounded-full inline-flex items-center justify-center animate-[pulse_2s_infinite] hover:animate-none hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-100 group-hover/btn:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent blur-xl opacity-40 group-hover/btn:opacity-70 transition-opacity duration-300"></div>
                  <span className="relative z-10 px-10 py-5 text-white font-bold text-lg tracking-wide flex items-center gap-3">
                    Start Your Application
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </Link>
                
                <Link to="/brochure" className="px-10 py-5 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm cursor-pointer">
                  Download Brochure
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
