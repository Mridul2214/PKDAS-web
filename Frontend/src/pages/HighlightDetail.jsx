import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useHomeData } from '../hooks/useHomeData';

/* ─── Per-slug rich content ─── */
const richContent = {
  'industry-oriented-curriculum': {
    tagline: 'Future-Ready from Day One',
    stats: [
      { value: '200+', label: 'Industry Partners' },
      { value: '85%', label: 'Courses Co-designed' },
      { value: '60+', label: 'Live Projects / Year' },
      { value: '3x', label: 'Higher Employability' },
    ],
    sections: [
      {
        heading: 'Built with Industry, for Industry',
        body: "PKDAS's curriculum is not designed in a vacuum — it is co-created alongside leading corporates like TCS, Infosys, Bosch, and Google. Every module is stress-tested against real hiring benchmarks so students graduate with skills that are immediately valuable in the workforce.",
      },
      {
        heading: 'Continuous Curriculum Refresh',
        body: "A dedicated Academic-Industry Council reviews the syllabus every semester. Emerging domains such as Generative AI, Quantum Computing, Green Energy, and Biomedical Devices are introduced as electives within weeks of industry adoption — ensuring students are never behind the curve.",
      },
      {
        heading: 'Capstone & Live Projects',
        body: "Every final-year student completes at least one industry-sponsored capstone project. This hands-on engagement produces graduates who have shipped real products, solved real business problems, and already built a professional network before convocation.",
      },
    ],
    ctaLabel: 'Explore Our Courses',
    ctaPath: '/courses',
  },
  'expert-faculty': {
    tagline: 'Guided by the Best Minds in India',
    stats: [
      { value: '94%', label: 'Faculty with Ph.D.' },
      { value: '1,200+', label: 'Research Papers' },
      { value: '40+', label: 'Avg. Years Experience' },
      { value: '18', label: 'Nationalities Represented' },
    ],
    sections: [
      {
        heading: 'Academics Who Have Lived It',
        body: "Our faculty combine deep academic credentials with real industry experience. Many have held senior positions at leading firms before choosing to educate the next generation, bringing authentic, practical insights into every lecture.",
      },
      {
        heading: 'A Culture of Mentorship',
        body: "Every student is assigned a dedicated faculty mentor from day one. These relationships extend beyond academics — mentors guide students through internship decisions, research opportunities, career planning, and personal development.",
      },
      {
        heading: 'Research That Matters',
        body: "PKDAS faculty publish regularly in Scopus-indexed and high-impact journals. Active research labs span AI, biomedical engineering, renewable energy, and social sciences. Students are encouraged — and funded — to participate as co-researchers.",
      },
    ],
    ctaLabel: 'Meet Our Faculty',
    ctaPath: '/faculty',
  },
  'world-class-infrastructure': {
    tagline: 'Spaces Designed to Inspire',
    stats: [
      { value: '500+', label: 'Acres of Campus' },
      { value: '120+', label: 'Specialised Labs' },
      { value: '1M+', label: 'Library Volumes' },
      { value: '10 Gbps', label: 'Campus Internet' },
    ],
    sections: [
      {
        heading: 'Smart Classrooms & Digital Studios',
        body: "Every classroom at PKDAS is equipped with interactive smart boards, augmented reality overlays, and dual-stream recording — enabling hybrid learning without compromise. Studios for media production, design thinking, and startup ideation are accessible around the clock.",
      },
      {
        heading: 'Research & Innovation Labs',
        body: "From a fully operational Robotics Arena to a certified Biosafety Level-2 microbiology lab, PKDAS invests heavily in infrastructure that matches or exceeds what students will encounter in industry. Maker-spaces, 3D printing ateliers, and EV testing tracks are open to all enrolled students.",
      },
      {
        heading: 'Campus Life & Wellness',
        body: "Beyond academics, our campuses feature Olympic-standard sports facilities, student wellness centres, cafeterias serving diverse cuisines, and lush green spaces designed for reflection and creativity. We believe the best learning happens in comfortable, inspiring environments.",
      },
    ],
    ctaLabel: 'Explore Facilities',
    ctaPath: '/facilities',
  },
  'global-placements': {
    tagline: 'From Campus to the World Stage',
    stats: [
      { value: '₹42 LPA', label: 'Highest Package' },
      { value: '500+', label: 'Recruiters On Campus' },
      { value: '97%', label: 'Placement Rate' },
      { value: '15+', label: 'Countries Hiring' },
    ],
    sections: [
      {
        heading: 'Fortune 500 on Campus',
        body: "Every year, PKDAS hosts an intensive 3-month placement season that draws recruiters from Google, Amazon, Deloitte, Goldman Sachs, ISRO, and hundreds more. Our dedicated placement cell orchestrates thousands of interviews across engineering, management, healthcare, and design disciplines.",
      },
      {
        heading: 'Year-Round Career Development',
        body: "Placement preparation isn't a last-minute sprint at PKDAS — it's baked into all four years. From aptitude workshops and mock GDs to LinkedIn profile reviews and negotiation clinics, students arrive at placement season fully battle-ready.",
      },
      {
        heading: 'International Opportunities',
        body: "Our tie-ups with universities and corporates in Germany, Japan, Canada, the UAE, and Singapore open doors for international internships and full-time roles. Students who pursue our International Exchange Programs often convert their stints into offers.",
      },
    ],
    ctaLabel: 'View Placements',
    ctaPath: '/placements',
  },
  'skill-based-training': {
    tagline: 'Learn by Doing, Lead by Example',
    stats: [
      { value: '80+', label: 'Certification Programs' },
      { value: '3,000+', label: 'Workshops / Year' },
      { value: '50+', label: 'Industry Trainers' },
      { value: '100%', label: 'Hands-On Projects' },
    ],
    sections: [
      {
        heading: 'Beyond the Classroom',
        body: "Theoretical knowledge alone does not create great engineers, managers, or healthcare professionals. PKDAS's Skill Development Centre runs over 3,000 hands-on workshops annually — covering everything from cloud computing and ethical hacking to surgical simulation and event management.",
      },
      {
        heading: 'Certifications That Count',
        body: "We partner with AWS, Microsoft, Google, NASSCOM, and the NSDC to offer nationally recognised certifications embedded within the degree curriculum. Students graduate not just with a degree but with a portfolio of verified digital credentials.",
      },
      {
        heading: 'Entrepreneurship & Incubation',
        body: "Our on-campus incubator, PKDAS INNOV8, has seeded 40+ student startups with mentorship, seed funding, co-working space, and investor introductions. If you have an idea, we have the ecosystem to help it become a reality.",
      },
    ],
    ctaLabel: 'Discover Courses',
    ctaPath: '/courses',
  },
};

export default function HighlightDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { highlights } = useHomeData();

  const item = highlights.find((h) => h.slug === slug);
  const content = richContent[slug];

  useEffect(() => {
    if (!item || !content) navigate('/', { replace: true });
    window.scrollTo(0, 0);
  }, [slug, item, content, navigate]);

  if (!item || !content) return null;

  return (
    <main className="bg-white min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        {item.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${i === 0 ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: 0 }}
            aria-hidden="true"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" style={{ zIndex: 1 }} />
        {/* Breadcrumb */}
        <div className="absolute top-8 left-0 right-0 px-6 md:px-16" style={{ zIndex: 20 }}>
          <nav className="flex items-center gap-2 text-xs text-white/60 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Why Choose Us</span>
            <span>/</span>
            <span className="text-white font-bold">{item.title}</span>
          </nav>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ zIndex: 20 }}>
          <span
            className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white mb-6"
            style={{ background: 'var(--color-primary, #0145F2)', opacity: 0.9 }}
          >
            Why Choose PKDAS
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 leading-tight max-w-3xl">
            {item.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-body max-w-2xl">{content.tagline}</p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#0145F2] text-white py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {content.stats.map((s, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-display font-black mb-1">{s.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-lg text-gray-600 font-body leading-relaxed mb-16 text-center">{item.desc}</p>

        <div className="space-y-16">
          {content.sections.map((sec, i) => (
            <div key={i} className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              {/* Left accent number */}
              <div className="hidden md:flex items-start pt-1">
                <span className="text-7xl font-black text-[#0145F2]/10 font-display leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">{sec.heading}</h2>
                <p className="text-gray-600 font-body leading-relaxed text-base">{sec.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Image Gallery ── */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-gray-800 mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {item.images.map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl aspect-square ${i === 0 ? 'md:col-span-2 md:row-span-2 md:aspect-auto md:h-full' : ''}`}>
                <img
                  src={img}
                  alt={`${item.title} ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Ready to Experience This?
          </h2>
          <p className="text-gray-500 font-body mb-10">
            Take the next step toward a world-class education at PKDAS Group of Institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={content.ctaPath}
              className="px-10 py-4 bg-[#0145F2] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#0145F2]/30"
            >
              {content.ctaLabel}
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 border-2 border-[#0145F2] text-[#0145F2] font-black text-sm uppercase tracking-widest rounded-xl hover:bg-[#0145F2] hover:text-white transition-all"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
