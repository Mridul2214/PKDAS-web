import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from '../components/Hero';
import { StatCounter } from '../components/StatCounter';
import { Link } from 'react-router-dom';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import { BackgroundOverlayCard } from '../components/BackgroundOverlayCard';

gsap.registerPlugin(ScrollTrigger);

// --- Wave Divider Component ---
const WavyDivider = ({ type = 'wave1', color = 'white', position = 'top', flipped = false, opacity = 1 }) => {
  const waves = {
    wave1: "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,112C960,139,1056,181,1152,176C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    wave2: "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,80C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    wave3: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  };

  return (
    <div className={`section-wave wave-${position} ${flipped ? 'wave-flipped' : ''}`} style={{ opacity }}>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill={color} fillOpacity="1" d={waves[type]}></path>
      </svg>
    </div>
  );
};



function BentoCard({ title, desc, images, spans }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const intervalRef = useRef(null);

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
      className={`gsap-stagger-child group relative rounded-3xl overflow-hidden border border-primary/10 bg-white hover:border-primary/30 transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary/15 ${spans}`}
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

      {/* Dark gradient overlay for readability now that white shadow is removed */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500"></div>

      {/* Content Layer */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-white/80 font-body text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-sm line-clamp-3 md:line-clamp-none">
            {desc}
          </p>
        </div>

        {/* Perspective Line Graphic (Premium detail) */}
        <div className="mt-6 flex items-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
          <div className="h-px bg-white/40 w-12 group-hover:w-20 transition-all duration-700"></div>
          <span className="text-[10px] font-bold text-white/90 tracking-[0.2em] uppercase transition-colors duration-500">VIEW DETAILS</span>
        </div>
      </div>
    </div>
  );
}

const alumniReviews = [
  {
    name: "Anjali Menon",
    batch: "2022",
    dept: "Computer Science",
    text: "PKDAS provided me not just an education, but a platform to discover my true potential. The faculty support was exceptional.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Siddharth Nair",
    batch: "2021",
    dept: "Mechanical Engineering",
    text: "The state-of-the-art labs and hands-on projects prepared me perfectly for the challenges in the automotive industry.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Priyanka Das",
    batch: "2023",
    dept: "Management Studies",
    text: "From leadership workshops to corporate internships, the exposure at PKDAS is truly world-class.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Rohan Varma",
    batch: "2020",
    dept: "Commerce",
    text: "The vibrant campus life and the placement cell's dedication helped me land my dream job at a Big Four firm.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Kavya S",
    batch: "2022",
    dept: "Biotechnology",
    text: "Research-driven learning and amazing mentors. I am now pursuing my PhD with full confidence.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  }
];

export function Home() {
  const container = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const hoverTimer = useRef(null);
  const [instView, setInstView] = useState('categories'); // 'categories' | 'all' | category title
  const [instSearch, setInstSearch] = useState('');

  // Mobile & Desktop Carousel States
  const [activeAlumni, setActiveAlumni] = useState(0);
  const [activeScholar, setActiveScholar] = useState(0);
  const [activeCareer, setActiveCareer] = useState(0);
  const [activeAchievement, setActiveAchievement] = useState(0);

  const achievementCount = 4; // Number of cards in total

  // Auto-slide effect for mobile carousels
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAlumni((prev) => (prev + 1) % alumniReviews.length);
      setActiveScholar((prev) => (prev + 1) % topStudents.length);
      setActiveCareer((prev) => (prev + 1) % careerSuccessData.length);
      setActiveAchievement((prev) => (prev + 1) % achievementCount);
    }, 2000);
    return () => clearInterval(timer);
  }, [achievementCount]);

  useGSAP(() => {
    // ── Use gsap.set() + gsap.to() pattern instead of gsap.from() ──
    // gsap.from() immediately sets opacity:0 and relies on ScrollTrigger
    // timing to animate back — this fails on SPA navigation because
    // trigger positions are calculated before layout settles.
    // gsap.to() avoids this: elements start hidden via set(), and
    // animate to visible whenever the trigger fires.

    // Reveal individual elements
    const reveals = gsap.utils.toArray('.gsap-reveal');
    gsap.set(reveals, { opacity: 0, y: 30 });
    reveals.forEach((element) => {
      gsap.to(element, {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 90%', toggleActions: 'play none none none' }
      });
    });

    // Patterned Reveals - Left
    const revealsLeft = gsap.utils.toArray('.gsap-reveal-left');
    gsap.set(revealsLeft, { opacity: 0, x: -50 });
    revealsLeft.forEach((element) => {
      gsap.to(element, {
        opacity: 1, x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: element, start: 'top 90%' }
      });
    });

    // Patterned Reveals - Right
    const revealsRight = gsap.utils.toArray('.gsap-reveal-right');
    gsap.set(revealsRight, { opacity: 0, x: 50 });
    revealsRight.forEach((element) => {
      gsap.to(element, {
        opacity: 1, x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: element, start: 'top 90%' }
      });
    });

    // Stagger parent blocks
    const staggerSections = gsap.utils.toArray('.gsap-stagger-parent');
    staggerSections.forEach((parent) => {
      const children = parent.querySelectorAll('.gsap-stagger-child');
      gsap.set(children, { opacity: 0, y: 30, scale: 0.95 });
      gsap.to(children, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: { trigger: parent, start: 'top 85%' }
      });
    });

    // Parallax effect for image cards
    gsap.utils.toArray('.parallax-img-container').forEach((container) => {
      const img = container.querySelector('img');
      if (!img) return;
      gsap.fromTo(img, 
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          },
          force3D: true
        }
      );
    });

    // Empowering Next Gen Images (Right side)
    const aboutImages = gsap.utils.toArray('.about-floating-img');
    if (aboutImages.length > 0) {
      aboutImages.forEach((img) => {
        const isCentered = img.classList.contains('-translate-x-1/2');
        gsap.set(img, {
          opacity: 0,
          y: 120, // Reduced from 200 for smoother feel
          ...(isCentered ? { xPercent: -50, yPercent: -50 } : {})
        });
      });

      gsap.to(aboutImages, {
        opacity: 1,
        y: 0,
        duration: 1.4,
        stagger: 0.12,
        ease: 'power3.out', // Shifting to power3 for smoother deceleration
        force3D: true,
        scrollTrigger: {
          trigger: '.about-image-grid-trigger',
          start: 'top 85%',
        }
      });
    }

    // About Section Background Elements
    const bgShapes = gsap.utils.toArray('.about-bg-shape');
    if (bgShapes.length > 0) {
      gsap.set(bgShapes, { opacity: 0, scale: 0.7 });
      gsap.to(bgShapes, {
        opacity: 1,
        scale: 1,
        duration: 2.5,
        stagger: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-section-trigger',
          start: 'top 80%',
        }
      });
    }

    const bgDots = container.current.querySelector('.about-bg-dots');
    if (bgDots) {
      gsap.set(bgDots, { opacity: 0, y: 40 });
      gsap.to(bgDots, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section-trigger',
          start: 'top 85%',
        }
      });
    }

    // Generic Section Background Blobs Reveal
    const sectionBlobs = gsap.utils.toArray('.section-bg-blob');
    if (sectionBlobs.length > 0) {
      gsap.set(sectionBlobs, { opacity: 0, scale: 0.8 });
      sectionBlobs.forEach((blob) => {
        gsap.to(blob, {
          opacity: 1,
          scale: 1,
          duration: 3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: blob,
            start: 'top 95%',
          }
        });
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
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=90"
    },
    {
      title: "Arts, Science & Commerce",
      description: "Premier programs focusing on literature and core sciences.",
      colleges: ["NASC (Coimbatore)", "PK Das Liberal College (Kerala)"],
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=90"
    },
    {
      title: "Management & IT",
      description: "Developing strategic business leaders and leading-edge technologists.",
      colleges: ["NCM (Coimbatore)", "NIITM (Coimbatore)", "NSM (Kerala)"],
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=90"
    },
    {
      title: "Healthcare & Medical",
      description: "Pioneering medical sciences and progressive patient care.",
      colleges: ["PKDIMS Medical College", "Nursing Colleges", "Physiotherapy", "Allied Health Sciences"],
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=90"
    },
    {
      title: "Aviation & Specialized",
      description: "Niche, industry-focused training in aeronautical sciences.",
      colleges: ["Aeronautics Institute", "Jawaharlal Aviation", "Design Institute"],
      img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=90"
    },
    {
      title: "Group Level Disciplines",
      description: "Specialized schools focusing on legal studies and architectural design.",
      colleges: ["Architecture Schools", "Nehru Academy of Law", "Nehru College of Pharmacy"],
      img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=90"
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

  const careerSuccessData = [
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
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
      quote: 'Being creative is one thing, but the college taught me how to apply that creativity to solve business problems.'
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
    <main ref={container} className="bg-surface">
      <Hero />

      {/* About Preview Section */}
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
              {/* <div className="gsap-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-6 border border-primary/20">
                Discover PKDAS
              </div> */}
              <h2 className="gsap-reveal text-5xl md:text-6xl lg:text-6xl font-sans font-black text-on-surface mb-6 leading-tight">
                Empowering the <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-primary to-accent font-bold">Next Generation</span>
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

      {/* ── Achievements Section ── */}
      <section className="relative z-[20] pt-24 pb-40 bg-white overflow-hidden">
        {/* Section-Wide Background Image Slot */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/backgrounds/3rd%20section.jpg"
            className="w-full h-full object-cover opacity-100"
            alt="Background"
          />
          {/* Semi-transparent overlay to ensure text contrast while keeping image visible */}
          <div className="absolute inset-0 bg-white/70"></div>
        </div>

        {/* Top Wave (matching Hero surface) */}
        <WavyDivider type="wave1" color="white" position="top" flipped={true} />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="gsap-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-slate-700 text-sm font-semibold mb-5 border border-blue-100">
              Milestones
            </div>
            <h2 className="gsap-reveal text-5xl md:text-6xl font-sans font-bold text-on-surface leading-tight mb-5">
              Our <span className="text-transparent bg-clip-text bg-primary">Achievements</span>
            </h2>
            <p className="gsap-reveal text-on-surface-variant font-sans text-xl leading-relaxed max-w-2xl mx-auto italic opacity-80">
              Decades of excellence reflected in the accomplishments of our students, faculty, and institution. Every milestone fuels our mission to empower the next generation.
            </p>
          </div>


          {/* Desktop View: Asymmetric Grid */}
          <div className="hidden md:grid gsap-stagger-parent grid-cols-12 gap-6 mb-20">
            {/* Card 1 */}
            <div className="md:col-span-7 group relative rounded-3xl overflow-hidden min-h-[380px] border border-white/10 hover:border-amber-400/30 transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl parallax-img-container">
              <img src="/achievements/graduates_celebration.png" alt="Graduation" className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover group-hover:scale-105 transition-all will-change-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-black/20 group-hover:from-black/100 group-hover:via-black/70 transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
                <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">Convocation 2025</div>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-3 leading-tight drop-shadow-md">3,500+ Graduates Every Year</h3>
                <p className="text-zinc-200 text-sm font-body leading-relaxed max-w-lg">Our graduates go on to become industry leaders, entrepreneurs, and innovators across the globe.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="md:col-span-5 group relative rounded-3xl overflow-hidden min-h-[380px] border border-white/10 hover:border-amber-400/30 transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl parallax-img-container">
              <img src="/achievements/gold_medalist.png" alt="Gold Medalist" className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover group-hover:scale-105 transition-all will-change-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-black/20 group-hover:from-black/100 group-hover:via-black/70 transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
                <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">Academic Excellence</div>
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-3 leading-tight drop-shadow-md">150+ University Gold Medals</h3>
                <p className="text-zinc-200 text-sm font-body leading-relaxed">Securing top university ranks and gold medals across all disciplines year after year.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="md:col-span-5 group relative rounded-3xl overflow-hidden min-h-[360px] border border-white/10 hover:border-amber-400/30 transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl parallax-img-container">
              <img src="/achievements/award_ceremony.png" alt="Award Ceremony" className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover group-hover:scale-105 transition-all will-change-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-black/20 group-hover:from-black/100 group-hover:via-black/70 transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
                <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">National Recognition</div>
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-3 leading-tight drop-shadow-md">NAAC  A+ Accredited</h3>
                <p className="text-zinc-200 text-sm font-body leading-relaxed">Recognized for outstanding institutional standards, governance, and commitment to quality.</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="md:col-span-7 group relative rounded-3xl overflow-hidden min-h-[360px] border border-white/10 hover:border-amber-400/30 transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl parallax-img-container">
              <img src="/achievements/placement_success.png" alt="Placement" className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover group-hover:scale-105 transition-all will-change-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-black/20 group-hover:from-black/100 group-hover:via-black/70 transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
                <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">Industry Connect</div>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-3 leading-tight drop-shadow-md">95% Placement Record</h3>
                <p className="text-zinc-200 text-sm font-body leading-relaxed max-w-lg">Students placed in Fortune 500 companies including Amazon, Google, and Deloitte.</p>
              </div>
            </div>
          </div>

          {/* Mobile View: Auto-Scrolling Carousel */}
          <div className="md:hidden relative mb-20 overflow-hidden rounded-3xl shadow-2xl group/achievements">
            {/* Mobile Navigation Arrows */}
            <button 
              onClick={() => setActiveAchievement((prev) => (prev - 1 + achievementCount) % achievementCount)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white transition-opacity opacity-0 group-hover/achievements:opacity-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button 
              onClick={() => setActiveAchievement((prev) => (prev + 1) % achievementCount)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white transition-opacity opacity-0 group-hover/achievements:opacity-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>

            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeAchievement * 100}%)` }}
            >
              {[
                { img: "/achievements/graduates_celebration.png", tag: "Convocation 2025", title: "3,500+ Graduates", desc: "Our graduates go on to become industry leaders across the globe." },
                { img: "/achievements/gold_medalist.png", tag: "Academic Excellence", title: "150+ Gold Medals", desc: "Consistent top ranks and university recognition for research." },
                { img: "/achievements/award_ceremony.png", tag: "National Recognition", title: "NAAC A+ Accredited", desc: "Recognized for institutional excellence and quality governance." },
                { img: "/achievements/placement_success.png", tag: "Industry Connect", title: "95% Placements", desc: "Connecting talent with top-tier Fortune 500 companies." }
              ].map((card, i) => (
                <div key={i} className="w-full flex-shrink-0 relative h-[400px]">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-8 text-center bg-black/20 backdrop-blur-sm">
                    <div className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-1">{card.tag}</div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2 drop-shadow-md">{card.title}</h3>
                    <p className="text-zinc-100 text-xs font-body leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {[...Array(achievementCount)].map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === activeAchievement ? 'w-6 bg-primary' : 'w-1.5 bg-white/30'}`} />
              ))}
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
              <div key={idx} className="gsap-stagger-child group text-center p-8 rounded-2xl border border-primary/5 hover:border-amber-400/20 bg-white hover:bg-slate-50 transition-all duration-500 shadow-sm hover:shadow-lg">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-2 group-hover:text-primary transition-colors duration-500">
                  {stat.value}
                </div>
                <div className="text-xs font-display text-on-surface-variant/70 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Institutions Overview Section */}
      <section className="relative z-[20] py-40 bg-[#EDF1F5] text-on-surface overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="section-bg-blob absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]"></div>
          <div className="section-bg-blob absolute top-1/2 -left-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]"></div>

          <div className="absolute bottom-20 left-10 opacity-20 hidden md:block">
            <div className="grid grid-cols-4 gap-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave matches Achievements (White) */}
        <WavyDivider type="wave1" color="white" position="top" flipped={true} />

        <div className="container mx-auto px-6 relative z-10 gsap-stagger-parent">
          <div className="max-w-3xl mb-10 mx-auto text-center">
           <h2 className="gsap-reveal text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight mb-4 md:mb-6 text-primary">
  Our Institutions
</h2>
            <p className="gsap-reveal text-lg md:text-xl text-on-surface-variant font-sans  opacity-90">
              Explore our diverse ecosystem of specialized colleges and institutes, operating across multiple cutting-edge domains.
            </p>
          </div>


          {/* Filter Tabs + Search */}
          <div className="gsap-reveal flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => { setInstView('categories'); setInstSearch(''); }}
                className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${instView === 'categories' ? 'bg-[#0145F2] text-white shadow-lg shadow-[#0145F2]/20' : 'bg-white text-on-surface-variant hover:bg-[#EDF1F5]'}`}
              >
                Categories
              </button>
              <button
                onClick={() => { setInstView('all'); setInstSearch(''); }}
                className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${instView === 'all' ? 'bg-[#0145F2] text-white shadow-lg shadow-[#0145F2]/20' : 'bg-white text-on-surface-variant hover:bg-[#EDF1F5]'}`}
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

      {/* Mid-Page Quick Enrollment CTA */}
      {/* <div className="relative z-30 bg-surface">
        <div className="container mx-auto px-6 py-16">
          <div className="relative group overflow-hidden bg-primary px-8 py-12 md:py-16 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Ready to start your journey?</h3>
                <p className="text-white/80 text-lg max-w-lg">Get immediate assistance with admissions and take the first step towards a bright career.</p>
             </div>
             
             <div className="relative z-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full sm:w-auto">
                <Link to="/contact" className="w-full sm:w-auto text-center px-6 md:px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-all shadow-lg hover:scale-105">
                   Request Information
                </Link>
                <a href="tel:+914912501234" className="w-full sm:w-auto text-center px-6 md:px-8 py-4 bg-primary-btn text-white font-bold border border-white/20 rounded-xl hover:bg-white/10 transition-all shadow-lg">
                   Call: +91 491 250...
                </a>
             </div>
          </div>
        </div>
      </div> */}


      {/* ── What's Your Interest? ── */}
      <section className="relative z-[20] py-32 md:py-40 bg-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="section-bg-blob absolute top-0 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px]"></div>
          <div className="section-bg-blob absolute bottom-0 -left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[110px]"></div>
        </div>

        {/* Wave matches Institutions (Off-white) */}
        <WavyDivider type="wave2" color="var(--color-surface)" position="top" flipped={true} />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
            <div>
              <h2 className="gsap-reveal text-4xl md:text-5xl lg:text-7xl font-display font-bold text-on-surface leading-tight">
                What's Your <span className="text-transparent bg-clip-text bg-primary">Interest?</span>
              </h2>
              <p className="gsap-reveal text-on-surface-variant font-body text-lg mt-3 max-w-xl">
                Explore our diverse range of academic disciplines and find your perfect path.
              </p>
            </div>
            <div className="gsap-reveal flex items-center gap-3 flex-shrink-0">
              <Link to="/courses" className="relative group overflow-hidden px-6 py-3 rounded-full border border-primary/20 text-primary font-bold text-sm transition-all duration-300 hover:text-white">
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10">Search Programs</span>
              </Link>
              <Link to="/contact" className="relative group overflow-hidden px-6 py-3 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Apply Now
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Disciplines Grid */}
          <div className="gsap-stagger-parent grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { name: 'Arts & Humanities', slug: 'arts-humanities', icon: '🎨', color: 'from-rose-500/10' },
              { name: 'Commerce', slug: 'commerce', icon: '📊', color: 'from-blue-500/10' },
              { name: 'Computer Science', slug: 'computer-science', icon: '💻', color: 'from-violet-500/10' },
              { name: 'Engineering', slug: 'engineering', icon: '⚙️', color: 'from-zinc-500/10' },
              { name: 'Architecture', slug: 'architecture', icon: '🏛️', color: 'from-amber-500/10' },
              { name: 'Business & MBA', slug: 'business-mba', icon: '💼', color: 'from-emerald-500/10' },
              { name: 'Medicine', slug: 'medicine', icon: '🩺', color: 'from-red-500/10' },
              { name: 'Nursing', slug: 'nursing', icon: '🏥', color: 'from-pink-500/10' },
              { name: 'Pharmacy', slug: 'pharmacy', icon: '💊', color: 'from-teal-500/10' },
              { name: 'Aviation', slug: 'aviation', icon: '✈️', color: 'from-sky-500/10' },
              { name: 'Law', slug: 'law', icon: '⚖️', color: 'from-yellow-500/10' },
              { name: 'Data Science', slug: 'data-science', icon: '📈', color: 'from-indigo-500/10' },
              { name: 'Biotechnology', slug: 'biotechnology', icon: '🧬', color: 'from-lime-500/10' },
              { name: 'Physical Sciences', slug: 'physical-sciences', icon: '🔬', color: 'from-cyan-500/10' },
              { name: 'Allied Health', slug: 'allied-health', icon: '🫀', color: 'from-orange-500/10' },
              { name: 'Design', slug: 'design', icon: '🎯', color: 'from-fuchsia-500/10' },
              { name: 'Physiotherapy', slug: 'physiotherapy', icon: '🦴', color: 'from-green-500/10' },
              { name: 'Aeronautics', slug: 'aeronautics', icon: '🚀', color: 'from-blue-600/10' },
            ].map((discipline, idx) => (
              <Link
                to={`/interest/${discipline.slug}`}
                key={idx}
                className={`gsap-stagger-child group flex flex-col items-center text-center gap-4 p-5 rounded-2xl border border-primary/5 bg-white shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:bg-gradient-to-br ${discipline.color} transition-all duration-300 cursor-pointer hover:-translate-y-1`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-sm">
                  {discipline.icon}
                </div>
                <span className="text-sm font-body font-bold text-on-surface group-hover:text-primary transition-colors duration-300 leading-tight">
                  {discipline.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Students Spotlight - DARK BREAK SECTION */}
      <section className="relative z-[20] pt-40 pb-20 bg-[var(--color-section-dark)] text-white overflow-hidden">
        {/* Wave matches Interests (White) */}
        <WavyDivider type="wave3" color="white" position="top" flipped={true} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-12 mx-auto text-center">
            <h2 className="gsap-reveal text-4xl md:text-6xl lg:text-6xl font-sans font-bold mb-6 text-white">
  Our Top Scholars
</h2>
            <p className="gsap-reveal text-lg text-white/70 font-body">
              Meet some of our brightest minds who are setting new benchmarks in academics, leadership, and innovation.
            </p>
          </div>

          {/* Scholars Desktop Grid */}
          <div className="hidden md:grid scholars-grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative z-10 w-full mb-8 pt-8">
            {topStudents.map((student, idx) => (
              <div key={idx} className="flex flex-col group relative">
                <div className="relative pt-8 px-4 mb-6">
                  <div className="absolute inset-x-0 bottom-0 top-12 bg-white border border-primary/10 rounded-[2.5rem] z-0 overflow-hidden shadow-xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/15 hover:border-primary/30">
                    <div className="absolute inset-0 opacity-[0.02] text-primary font-display text-9xl font-black flex items-center justify-center whitespace-nowrap overflow-hidden tracking-[0.5em] pointer-events-none select-none">P K D A S</div>
                  </div>
                  <div className="relative z-10 flex justify-center h-[260px] parallax-img-container overflow-hidden rounded-t-[140px] rounded-b-[40px]">
                    <img src={student.img} alt={student.name} className="absolute inset-0 w-full mb-[-20%] h-[120%] object-cover transition-all duration-700 ease-out group-hover:scale-110 will-change-transform" />
                  </div>
                  <div className="absolute top-[40%] -left-2 z-20 bg-primary/95 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-lg transform -rotate-[5deg] shadow-lg group-hover:-rotate-[2deg] group-hover:bg-primary transition-all duration-300">{student.course}</div>
                </div>
                <div className="px-2">
                  <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-3 hover:text-primary transition-colors">{student.name}</h3>
                  <p className="font-body text-sm md:text-base text-white/70 leading-relaxed mb-6 lg:min-h-[72px]">{student.achievement}</p>
                  <button className="text-xs font-bold text-amber-400 tracking-widest uppercase hover:text-amber-300 transition-colors flex items-center gap-2 cursor-pointer group w-fit">FIND OUT MORE<span className="text-base group-hover:translate-x-1 transition-transform">→</span></button>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden relative z-10 mb-8 pt-4">
            {/* Navigation Arrows */}
            <button 
              onClick={() => setActiveScholar((prev) => (prev - 1 + topStudents.length) % topStudents.length)}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-primary border border-primary/5 active:scale-90 transition-all"
              aria-label="Previous Scholar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button 
              onClick={() => setActiveScholar((prev) => (prev + 1) % topStudents.length)}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-primary border border-primary/5 active:scale-90 transition-all"
              aria-label="Next Scholar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
            </button>

            <div className="overflow-hidden px-6">
              <div 
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${activeScholar * 100}%)` }}
              >
              {topStudents.map((student, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col group relative bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-sm">
                    <div className="flex justify-center mb-6">
                      <img src={student.img} alt={student.name} className="w-32 h-40 object-cover rounded-t-full rounded-b-2xl border border-white/20" />
                    </div>
                    <div className="text-center">
                      <div className="inline-block px-3 py-1 bg-primary text-[10px] font-bold text-white rounded-full mb-3 uppercase tracking-wider">{student.course}</div>
                      <h3 className="text-xl font-display font-medium text-white mb-2">{student.name}</h3>
                      <p className="font-body text-sm text-white/70 leading-relaxed mb-4">{student.achievement}</p>
                      <button className="text-[10px] font-bold text-amber-400 tracking-widest uppercase flex items-center gap-1 mx-auto">LEARN MORE<span>→</span></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex md:hidden justify-center gap-2 mb-8">
            {topStudents.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === activeScholar ? 'w-4 bg-primary' : 'w-1 bg-white/20'}`}></div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Highlights Section - Bento Redesign */}
      <section className="relative pt-24 pb-40 bg-white overflow-hidden" style={{ isolation: 'isolate', zIndex: 20 }}>
        {/* Wave matches Scholar Spotlight (White) */}
        <WavyDivider type="wave1" color="white" position="top" flipped={true} />

        <div className="container mx-auto px-6 relative z-10">

          <div className="max-w-4xl mb-20 mx-auto text-center">

            <h2 className="gsap-reveal text-5xl md:text-7xl font-display font-bold text-on-surface leading-tight mb-6">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 ">Choose </span>
              Us
            </h2>
            <p className="gsap-reveal text-on-surface-variant font-body text-xl max-w-2xl leading-relaxed mx-auto">
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
      <section className="relative z-[20] py-32 bg-surface overflow-hidden">
        {/* Wave matches Highlights (White) */}
        <WavyDivider type="wave2" color="white" position="top" flipped={true} />

        <div className="container mx-auto px-6 relative z-10">


          {/* Section Heading */}
          <div className="mb-20 max-w-3xl mx-auto text-center">
            <div className="gsap-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-5">
              Student Experience
            </div>
            <h2 className="gsap-reveal text-5xl md:text-6xl lg:text-7xl font-display font-bold text-on-surface leading-none mb-5">
              Campus
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600"> Life</span>
            </h2>
            <p className="gsap-reveal text-on-surface-variant font-body text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
              A world beyond academics — discover the vibrant events, sports, arts, and clubs that make NASC a truly unforgettable place to grow.
            </p>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {cultureSections.map((section, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* 3D Card Image */}
                <div className={`gsap-reveal-${section.reverse ? 'right' : 'left'} w-full ${section.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <CardContainer className="w-full">
                    <CardBody className="w-full h-[300px] md:h-[400px] lg:h-[460px] rounded-2xl overflow-hidden relative shadow-2xl">
                      <CardItem translateZ={60} className="w-full h-full">
                        <video
                          src={section.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </CardItem>
                      {/* Floating subtitle badge */}
                      <CardItem
                        translateZ={90}
                        className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full"
                      >
                        {section.subtitle}
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>

                {/* Text Content */}
                <div className={`gsap-reveal-${section.reverse ? 'left' : 'right'} max-w-xl mx-auto lg:mx-0 ${section.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                  <p className="gsap-reveal text-primary font-cursive text-3xl lg:text-4xl capitalize mb-2 drop-shadow-md">{section.subtitle}</p>
                  <h2 className="gsap-reveal text-4xl md:text-5xl font-display text-on-surface mb-6 font-bold leading-tight">{section.title}</h2>
                  <p className="gsap-reveal text-on-surface-variant font-body leading-relaxed mb-10 text-lg md:text-xl">{section.description}</p>
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
      <section className="relative z-[20] py-32 bg-white overflow-hidden">
        {/* Wave matches Campus Life (Off-white) */}
        <WavyDivider type="wave3" color="var(--color-surface)" position="top" flipped={true} />

        {/* Decorative accent */}

        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="gsap-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-slate-700 text-sm font-semibold mb-5 border border-blue-100">
              Placements
            </div>
            <h2 className="gsap-reveal text-5xl md:text-6xl font-display font-bold text-on-surface leading-tight mb-5">
              Career <span className="text-transparent bg-clip-text bg-primary to-accent">Opportunities</span>
            </h2>
            <p className="gsap-reveal text-on-surface-variant font-body text-lg leading-relaxed max-w-2xl mx-auto">
              Our students are consistently recruited by top-tier companies. Here's a glimpse of the success stories that define our placement track record.
            </p>
          </div>

          {/* Stats Row */}
          <div className="gsap-stagger-parent flex flex-col md:flex-row items-stretch justify-center gap-0 max-w-4xl mx-auto mb-20">
            {[
              { value: 80, suffix: '+', label: 'Students in Single Drive', color: 'from-blue-500 to-blue-400' },
              { value: 32, suffix: ' LPA', label: 'Top Salary Package', color: 'from-amber-500 to-amber-400' },
              { value: 100, suffix: '%', label: 'Placement Assistance', color: 'from-emerald-500 to-emerald-400' },
            ].map((stat, idx) => (
              <div key={idx} className="gsap-stagger-child group relative flex-1 text-center py-10 px-6">
                {/* Top accent line */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] rounded-full bg-gradient-to-r ${stat.color} group-hover:w-20 transition-all duration-500`}></div>
                <div className="text-5xl md:text-6xl font-display font-bold text-on-surface mb-3">
                  <StatCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-body text-on-surface-variant/60 uppercase tracking-[0.2em]">{stat.label}</div>
                {/* Vertical divider (not on last) */}
                {idx < 2 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10"></div>}
              </div>
            ))}
          </div>

          {/* Student Success Cards */}
          <div className="gsap-stagger-parent hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
            ].map((student, idx) => (
              <div key={idx} className="gsap-stagger-child group relative bg-white border border-primary/10 rounded-2xl p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-500 cursor-pointer">
                {/* Top row: Photo + Info + CTC */}
                <div className="flex items-center gap-4">
                  <img
                    src={student.img}
                    alt={student.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/5 group-hover:ring-primary/20 transition-all duration-500 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-on-surface font-display font-bold text-base truncate">{student.name}</h4>
                    <p className="text-on-surface-variant/60 font-body text-xs">{student.role} | <span className="text-primary font-bold">{student.company}</span></p>
                  </div>
                  <span className="text-[10px] font-black text-accent bg-accent/10 px-3 py-1.5 rounded-full flex-shrink-0 border border-accent/20 uppercase tracking-tighter">{student.ctc}</span>
                </div>

                {/* Quote details */}
                <div className="mt-4 pt-4 border-t border-primary/5">
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed italic line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    "{student.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden relative z-10">
            {/* Navigation Arrows */}
            <button 
              onClick={() => setActiveCareer((prev) => (prev - 1 + careerSuccessData.length) % careerSuccessData.length)}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-primary border border-primary/5 active:scale-90 transition-all"
              aria-label="Previous Career Success"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button 
              onClick={() => setActiveCareer((prev) => (prev + 1) % careerSuccessData.length)}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-primary border border-primary/5 active:scale-90 transition-all"
              aria-label="Next Career Success"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
            </button>

            <div className="overflow-hidden px-6">
              <div 
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${activeCareer * 100}%)` }}
              >
              {careerSuccessData.map((student, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white border border-primary/10 p-6 rounded-[1.5rem] shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img src={student.img} alt={student.name} className="w-10 h-10 rounded-full object-cover border border-primary/20" />
                        <div>
                          <h4 className="text-on-surface font-display font-bold text-base leading-tight">{student.name}</h4>
                          <p className="text-[10px] text-on-surface-variant/60 font-body uppercase">{student.company}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">{student.ctc}</span>
                    </div>
                    <p className="text-on-surface-variant font-body text-sm leading-relaxed italic">"{student.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex md:hidden justify-center gap-2 mt-6">
            {careerSuccessData.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeCareer ? 'w-4 bg-primary' : 'w-1.5 bg-primary/20'}`}></div>
            ))}
          </div>
        </div>

          {/* Bottom CTA body */}
          <div className="gsap-reveal mt-16 text-center">
            <p className="text-on-surface-variant font-body italic mb-6 max-w-2xl mx-auto">
              "We are proud of our 2026 Batch achievement: over 80 students successfully placed at RINEX driving innovation."
            </p>
            <Link to="/placements" className="inline-flex items-center gap-2 group px-8 py-4 bg-primary text-white font-bold tracking-wide rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
              View All Placements
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Recruitment Partners Section - Redesigned to Full-Width with Dividers */}
      <section className="relative z-[20] py-32 md:py-40 bg-black overflow-hidden">
        {/* Top Wave matches Career (White) */}
        <WavyDivider type="wave2" color="white" position="top" flipped={true} />

        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Corporate Environment"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="max-w-4xl mb-16 md:mb-24">
            <p className="gsap-reveal text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase text-emerald-400 mb-4 bg-emerald-400/10 w-fit px-3 py-1 rounded-full border border-emerald-400/20">Our Global Network</p>
            <h2 className="gsap-reveal text-5xl md:text-8xl lg:text-9xl font-display font-black leading-tight md:leading-none">
              <span className="text-white">RECRUITMENT</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500">PARTNERS</span>
            </h2>
          </div>

          {/* Logo Grid - Original Colors on White Cards */}
          <div className="gsap-stagger-parent grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
            {[
              { name: "TCS", logo: null },
              { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
              { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
              { name: "Deloitte", logo: null },
              { name: "PwC", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg" },
              { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
              { name: "KPMG", logo: null },
              { name: "NatWest", logo: null },
              { name: "EY", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" },
              { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
              { name: "D E Shaw", logo: null },
              { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
              { name: "Nestlé", logo: null },
              { name: "Cipla", logo: null },
              { name: "Unilever", logo: null },
              { name: "Barclays", logo: null },
              { name: "UST", logo: null },
              { name: "& more", logo: null },
            ].map((partner, idx) => (
              <div
                key={idx}
                className="gsap-stagger-child group relative bg-white transition-all duration-300 flex items-center justify-center p-4 md:p-8 min-h-[100px] md:min-h-[140px] cursor-pointer hover:bg-slate-50"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-8 md:max-h-12 max-w-[120px] object-contain transition-all duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-slate-400 font-display font-bold text-lg md:text-2xl group-hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </span>
                )}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-500 rounded-full group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="gsap-reveal mt-12 text-center text-zinc-500 font-body text-sm tracking-widest uppercase opacity-60">
            500+ global recruitment partners across our campus network
          </p>
        </div>
      </section>

      {/* Alumni Testimonials - Auto Scrolling Marquee */}
      <section className="relative z-[20] pt-32 pb-12 bg-white overflow-hidden">
        {/* Transition to Alumni - Clean Cut */}

        <div className="container mx-auto px-6 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="gsap-reveal text-4xl md:text-5xl font-display font-bold text-on-surface mb-6">
              Voices of our <span className="text-amber-500 text-primary font-cursive text-6xl">Alumni</span>
            </h2>
            <p className="gsap-reveal text-on-surface-variant font-body text-lg">
              Hear from our graduates who are making an impact across the globe.
            </p>
          </div>
        </div>

        {/* Alumni Desktop Marquee (Visible on sm and up) */}
        <div className="hidden sm:block relative overflow-hidden group/marquee">
          {/* Desktop Manual Controls */}
          <button 
            onClick={() => setActiveAlumni((prev) => (prev - 1 + alumniReviews.length) % alumniReviews.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/80 hover:text-primary backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover/marquee:opacity-100 shadow-xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button 
            onClick={() => setActiveAlumni((prev) => (prev + 1) % alumniReviews.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/80 hover:text-primary backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover/marquee:opacity-100 shadow-xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
          </button>

          <div 
            className="flex transition-transform duration-1000 ease-in-out py-4 px-10"
            style={{ transform: `translateX(-${activeAlumni * (100 / 3)}%)` }} // Shows roughly 3 at a time
          >
            {[...alumniReviews, ...alumniReviews].map((review, i) => (
              <div key={i} className="w-1/3 flex-shrink-0 px-4">
                <div className="bg-white border border-primary/10 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                    <div>
                      <h4 className="text-on-surface font-display font-bold text-lg">{review.name}</h4>
                      <p className="text-primary text-sm font-body">Class of {review.batch} • {review.dept}</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant font-body leading-relaxed whitespace-normal italic">
                    "{review.text}"
                  </p>
                  <div className="mt-6 flex text-blue-400 gap-1 text-xs">
                    {Array(5).fill(0).map((_, iconIdx) => (
                      <svg key={iconIdx} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sm:hidden relative z-10">
          {/* Navigation Arrows */}
          <button 
            onClick={() => setActiveAlumni((prev) => (prev - 1 + alumniReviews.length) % alumniReviews.length)}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-primary border border-primary/5 active:scale-90 transition-all"
            aria-label="Previous Testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button 
            onClick={() => setActiveAlumni((prev) => (prev + 1) % alumniReviews.length)}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-primary border border-primary/5 active:scale-90 transition-all"
            aria-label="Next Testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
          </button>

          <div className="overflow-hidden px-6">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${activeAlumni * 100}%)` }}
            >
            {alumniReviews.map((review, i) => (
              <div key={i} className="w-full flex-shrink-0 px-2 transition-all duration-300">
                <div className="bg-white border border-primary/10 p-6 rounded-[1.5rem] shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" />
                    <div>
                      <h4 className="text-on-surface font-display font-bold text-base leading-tight">{review.name}</h4>
                      <p className="text-primary text-[10px] font-body">Class of {review.batch} | {review.dept}</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant font-body leading-relaxed text-sm italic">
                    "{review.text}"
                  </p>
                  <div className="mt-4 flex text-blue-400 gap-0.5 text-[10px]">
                    {Array(5).fill(0).map((_, iconIdx) => (
                      <svg key={iconIdx} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Page Indicators */}
        <div className="flex sm:hidden justify-center gap-2 mt-6">
          {alumniReviews.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeAlumni ? 'w-6 bg-primary' : 'w-1.5 bg-primary/20'}`}
            ></div>
          ))}
        </div>
      </div>

      </section>

      {/* Premium CTA Section */}
      <section className="relative z-[20] bg-transparent overflow-hidden border-t border-black/5">
        <div className="relative z-10 w-full">
          <div className="gsap-reveal relative overflow-hidden border-y border-black/5 bg-white py-12 md:py-20 px-6 md:px-8 text-center group shadow-2xl w-full">

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
    </main>
  );
}
