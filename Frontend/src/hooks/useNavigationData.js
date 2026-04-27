export function useNavigationData() {
  const navigationData = {
    'About': {
      categories: [
        { 
          title: 'Core Identity', 
          items: [
            { name: 'Our Profile', path: '/about', desc: 'Brief overview of PKDAS' },
            { name: 'Vision & Mission', path: '/about#mission', desc: 'The future we enlighten' },
            { name: 'History & Heritage', path: '/about#heritage', desc: '50 years of academic excellence' },
            { name: 'Core Values', path: '/about#values', desc: 'What drives our culture' }
          ] 
        },
        { 
          title: 'Leadership', 
          items: [
            { name: 'Chairman\'s Message', path: '/about#leadership', desc: 'A personal word from leadership' },
            { name: 'Directors & Deans', path: '/about#leadership', desc: 'Expert governance and management' },
            { name: 'Governing Council', path: '/about#leadership', desc: 'Operational excellence & strategy' }
          ] 
        },
        { 
          title: 'Standards', 
          items: [
             { name: 'NAAC & UGC Accreditation', path: '/about#accreditation', desc: 'Quality recognized nationally' },
             { name: 'Campus Map', path: '/about#map', desc: 'Find your way around' }
          ] 
        }
      ],
      highlight: {
        title: 'Discover Our Legacy',
        desc: 'Over five decades of excellence in building the foundations of future leaders and global innovators.',
        img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80',
        ctaLabel: 'Read History',
        ctaPath: '/about#heritage'
      }
    },
    'Institutions': {
      categories: [
        { 
          title: 'PKDAS Group', 
          items: [
            { name: 'Engineering (NIET/NCERC)', path: '/institutions-list', desc: 'Pioneering technical education' },
            { name: 'Management (NCM/NIITM)', path: '/institutions-list', desc: 'Strategic business leadership' },
            { name: 'Pharmacy & Nursing', path: '/institutions-list', desc: 'Healthcare and clinical expertise' },
            { name: 'Arts & Science', path: '/institutions-list', desc: 'Liberal arts and science majors' }
          ] 
        },
        { 
          title: 'Nehru Group', 
          items: [
            { name: 'Aviation Technology', path: '/institutions-list', desc: 'Sky-high career pathways' },
            { name: 'Hospitality & Management', path: '/institutions-list', desc: 'Global service industry standards' },
            { name: 'Allied Health Sciences', path: '/institutions-list', desc: 'Comprehensive medical training' }
          ] 
        },
        { 
          title: 'Specialized', 
          items: [
             { name: 'Research Centers', path: '/institutions-list', desc: 'Innovative labs and facilities' },
             { name: 'View All 25+ Institutions', path: '/institutions-list', desc: 'The complete PKDAS advantage' }
          ] 
        }
      ],
      highlight: {
        title: 'Empower Your Future',
        desc: 'Choose from over 25 specialized institutions focusing on cutting-edge research and career-driven degrees.',
        img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
        ctaLabel: 'Find Your College',
        ctaPath: '/institutions-list',
        badge: 'Top Ranked'
      }
    },
    'Facilities': {
      categories: [
        { 
          title: 'Academic', 
          items: [
            { name: 'Central Library', path: '/facilities', desc: 'Knowledge at your fingertips' },
            { name: 'Smart Classrooms', path: '/facilities', desc: 'Digitally enhanced learning' },
            { name: 'Research Tech Labs', path: '/facilities', desc: 'State-of-the-art innovation' }
          ] 
        },
        { 
          title: 'Student Life', 
          items: [
            { name: 'Residential Hostels', path: '/facilities', desc: 'A home away from home' },
            { name: 'Dining & Cafeteria', path: '/facilities', desc: 'Nutritious global cuisines' },
            { name: 'Transportation', path: '/facilities', desc: 'Reliable campus connectivity' }
          ] 
        },
        { 
           title: 'Wellness', 
           items: [
              { name: 'Sports Complex', path: '/facilities', desc: 'Indoor/Outdoor facilities' },
              { name: 'Medical Center', path: '/facilities', desc: '24/7 healthcare assistance' },
              { name: 'Counselling Cell', path: '/facilities', desc: 'Mental health & career guidance' }
           ] 
        }
      ],
      highlight: {
        title: 'Premier Campus Life',
        desc: 'Experience a world-class environment with infrastructure designed for hollistic growth and innovation.',
        img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
        ctaLabel: 'Campus Tour',
        ctaPath: '/facilities'
      }
    },
    'Placements': {
      categories: [
        { 
          title: 'Services', 
          items: [
            { name: 'Career Guidance', path: '/placements', desc: 'Pathway to your dream job' },
            { name: 'Recruiter Interface', path: '/placements', desc: 'Connecting with global industry' },
            { name: 'Internship Programs', path: '/placements', desc: 'Early industry exposure' }
          ] 
        },
        { 
          title: 'Statistics', 
          items: [
            { name: 'Success Stories', path: '/placements', desc: 'Real stories from our alumni' },
            { name: 'Top Tier Recruiters', path: '/placements', desc: 'Partnered with over 500+ firms' },
            { name: 'Recent Placements', path: '/placements', desc: 'The 2025 Placement Report' },
            { name: 'Alumni Network', path: '/placements', desc: 'Mentorship and global outreach' }
          ] 
        }
      ],
      highlight: {
        title: 'Fueling Success',
        desc: 'Consistently maintaining over 95% placement rate with Fortune 500 recruiters globally.',
        img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',
        ctaLabel: 'View Placement Report',
        ctaPath: '/placements',
        stat: '98% Placement'
      }
    },
    'Faculty': {
      categories: [
        { 
          title: 'Leadership', 
          items: [
            { name: 'Academic Heads', path: '/faculty', desc: 'Leading our academic strategy' },
            { name: 'Core Professors', path: '/faculty', desc: 'Experts in their respective domains' },
            { name: 'Honorary Faculty', path: '/faculty', desc: 'Distinguished guest lecturers' }
          ] 
        },
        { 
          title: 'Departments', 
          items: [
            { name: 'Engineering & Tech', path: '/faculty', desc: 'Pioneering technical mentors' },
            { name: 'Medical & Nursing', path: '/faculty', desc: 'Healthcare educators' },
            { name: 'Liberal Arts & Comm', path: '/faculty', desc: 'Academic diversity & culture' },
            { name: 'Research Mentors', path: '/faculty', desc: 'Guiding Doctoral candidates' }
          ] 
        }
      ],
      highlight: {
        title: 'Master Educators',
        desc: 'Learn from an elite corps of educators dedicated to academic rigor and transformative research.',
        img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
        ctaLabel: 'Meet Our Experts',
        ctaPath: '/faculty',
        stat: '500+ Scholars'
      }
    }
  };

  return navigationData;
}
