import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { getCollege } from '../data/collegeRegistry';
import '../styles/collegeProfile.css';

// --- Subcomponents for the specific sections ---

const Hero = ({ college }) => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.college-badge', { opacity: 0, y: -20, duration: 0.6, delay: 0.3 });
      gsap.from('.college-title-short', { opacity: 0, y: 80, duration: 1, delay: 0.5, ease: 'power4.out' });
      gsap.from('.college-title-full', { opacity: 0, y: 20, duration: 0.8, delay: 0.85, ease: 'power3.out' });
      gsap.from('.college-sub', { opacity: 0, y: 20, duration: 0.7, delay: 1, ease: 'power3.out' });
      gsap.from('.college-stat', { opacity: 0, y: 30, duration: 0.6, stagger: 0.1, delay: 1.1, ease: 'power2.out' });
    }, heroRef);
    return () => ctx.revert();
  }, [college]);



  return (
    <section ref={heroRef} className="college-hero" style={{ '--college-color': college.color, '--college-color-rgb': hexToRgb(college.color) }}>
      <div className="college-hero-bg" style={{ backgroundImage: `url('${college.img}')` }}></div>
      <div className="college-hero-overlay"></div>
      
      <div className="college-particles" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="college-particle" style={{ '--i': i }}></div>
        ))}
      </div>

      <div className="college-hero-content">
        <span className="college-badge">{college.category}</span>
        
        <h1 className="college-title">
          <span className="college-title-short" style={{ color: college.color }}>{college.shortName}</span>
          <span className="college-title-full">{college.name}</span>
        </h1>
        
        <p className="college-sub">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          {college.location} &nbsp;·&nbsp; Est. {college.established}
        </p>

        <div className="college-stats">
          {[
            { label: 'Students', value: college.students },
            { label: 'Faculty', value: college.faculty },
            { label: 'Programs', value: college.programs },
            { label: 'Accreditation', value: college.badge },
          ].map((s) => (
            <div key={s.label} className="college-stat">
              <div className="college-stat-value">{s.value}</div>
              <div className="college-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Overview = ({ text }) => (
  <div className="college-section" style={{ paddingTop: 0 }}>
    <div className="college-overview">
      <p className="college-overview-text">{text}</p>
    </div>
  </div>
);

const WhyChoose = ({ whyChoose }) => {
  if (!whyChoose) return null;
  return (
    <section className="college-section">
      <div className="college-section-header">
        <h2 className="college-section-title">Why Choose Us</h2>
        <p className="college-section-subtitle">What sets us apart and makes us the perfect destination for your future.</p>
      </div>
      <div className="why-choose-grid">
        {whyChoose.map(item => (
          <div key={item.id} className="why-card">
            <div className="why-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Programs = ({ specializations }) => {
  if (!specializations) return null;
  return (
    <section className="college-section" style={{ background: 'white' }}>
      <div className="college-section-header">
        <h2 className="college-section-title">Programs & Specializations</h2>
        <p className="college-section-subtitle">Discover our highly sought-after degree programs tailored for industry success.</p>
      </div>
      <div className="programs-grid">
        {specializations.map((prog, i) => (
          <div key={i} className="program-card">
            <span className="program-title">{prog.title}</span>
            {prog.flagship && <span className="program-flagship">Flagship</span>}
          </div>
        ))}
      </div>
    </section>
  );
};

const Facilities = ({ facilities }) => {
  if (!facilities) return null;
  return (
    <section className="college-section">
      <div className="college-section-header">
        <h2 className="college-section-title">Labs & Facilities</h2>
        <p className="college-section-subtitle">Experience our state-of-the-art infrastructure designed to foster innovation.</p>
      </div>
      <div className="facilities-grid">
        {facilities.map(fac => (
          <div key={fac.id} className="facility-card">
            <img src={fac.img} alt={fac.title} />
            <div className="facility-overlay">
              <h3 className="facility-title">{fac.title}</h3>
              <p className="facility-desc">{fac.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Placements = ({ placements }) => {
  if (!placements) return null;
  return (
    <section className="college-section">
      <div className="college-placements-wrap">
        <div className="college-section-header" style={{ marginBottom: '3rem' }}>
          <h2 className="college-section-title">Placements</h2>
        </div>
        <div className="placements-stats">
          {[
            { label: 'Placed Students', value: placements.percentage },
            { label: 'Highest Package', value: placements.highest },
            { label: 'Average Package', value: placements.average },
          ].map(s => (
            <div key={s.label} className="place-stat">
              <div className="place-value">{s.value}</div>
              <div className="place-label">{s.label}</div>
            </div>
          ))}
        </div>
        {placements.statement && <p className="place-statement">"{placements.statement}"</p>}
        {placements.logos && (
          <div className="place-logos">
            {placements.logos.map((logo, i) => <div key={i} className="place-logo">{logo}</div>)}
          </div>
        )}
      </div>
    </section>
  );
};

const Achievements = ({ achievements }) => {
  if (!achievements) return null;
  return (
    <section className="college-section" style={{ background: 'white' }}>
      <div className="college-section-header">
        <h2 className="college-section-title">Highlights & Achievements</h2>
      </div>
      <div className="achievements-list">
        {achievements.map((ach, i) => (
          <div key={i} className="achieve-item">
            <div className="achieve-year">{ach.year}</div>
            <div className="achieve-title">{ach.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const StudentLife = ({ studentLife }) => {
  if (!studentLife) return null;
  return (
    <section className="college-section">
      <div className="college-section-header">
        <h2 className="college-section-title">Student Life</h2>
        <p className="college-section-subtitle">A vibrant community beyond academics.</p>
      </div>
      <div className="facilities-grid">
        {studentLife.map(life => (
          <div key={life.id} className="facility-card">
            <img src={life.img} alt={life.title} />
            <div className="facility-overlay">
              <h3 className="facility-title">{life.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Main Page Component ---

// Convert hex color to RGB string for css variables
const hexToRgb = (hex) => {
  if (!hex) return '0, 0, 0';
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

export default function College3DView() {
  const { slug } = useParams();
  const college = getCollege(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <main className="college-profile-page" style={{ '--college-color': college.color, '--college-color-rgb': hexToRgb(college.color) }}>
      <Hero college={college} />
      <Overview text={college.overview || college.description} />
      <WhyChoose whyChoose={college.whyChoose} />
      <Programs specializations={college.specializations} />
      <Facilities facilities={college.facilities} />
      <Placements placements={college.placements} />
      <Achievements achievements={college.achievements} />
      <StudentLife studentLife={college.studentLife} />
      
      {/* FINAL CTA */}
      <section className="college-cta-section">
        <h2>Start Your Journey at {college.shortName}</h2>
        <div className="cta-flex">
          <Link to="/courses" className="college-btn college-btn-primary">Apply Now</Link>
          <Link to="/contact" className="college-btn college-btn-outline">Contact Us</Link>
        </div>
        <div className="pkdas-banner" style={{ marginTop: '4rem' }}>
          {college.shortName} is part of the prestigious PKDAS Group of Institutions.
        </div>
      </section>
    </main>
  );
}
