export function useNavigationData() {
  const navigationData = {
    'About': {
      categories: [
        {
          title: 'Leadership & Trust',
          items: [
            { name: 'Founder Chairman', path: '/about#leadership', desc: 'Our visionary founder' },
            { name: 'Managing Trustee', path: '/managing-trustee', desc: 'Leading the foundation' },
            { name: 'CEO & Secretary', path: '/ceo-secretary', desc: 'Operational leadership' },
            { name: 'Executive Director', path: '/executive-director', desc: 'Strategic direction' },
            { name: 'Trust', path: '/trust', desc: 'The governing body' },
            { name: 'Institutions Under The Trust', path: '/institutions', desc: 'Our family of colleges' },
            { name: 'Unique Feature Of NGI', path: '/unique-features', desc: 'What sets us apart' }
          ]
        },
        {
          title: 'Institutional Framework',
          items: [
            { name: 'Administrative Heads', path: '/about#admin-heads', desc: 'Leadership in administration' },
            { name: 'Academic Heads', path: '/about#academic-heads', desc: 'Leadership in academics' },
            { name: 'Campus Administration', path: '/about#campus-admin', desc: 'Campus operational management' },
            { name: 'Controller of Examinations', path: '/about#exams', desc: 'Examination & assessment board' },
            { name: 'Alumni Bodies', path: '/about#alumni', desc: 'Global alumni network' },
            { name: 'Accreditations & Rankings', path: '/about#rankings', desc: 'Quality & excellence markers' },
            { name: 'Internal Quality Assurance Cell', path: '/about#iqac', desc: 'IQAC quality standards' },
            { name: 'Research', path: '/about#research', desc: 'Innovation & research cell' },
            { name: 'Learning & Development', path: '/about#l-and-d', desc: 'Skill enhancement programs' },
            { name: 'Admissions', path: '/about#admissions', desc: 'Entry & enrollment process' },
            { name: 'NCPIR', path: '/about#ncpir', desc: 'Placement & corporate relations' },
            { name: 'International Relations', path: '/about#international', desc: 'Global academic partnerships' },
            { name: 'Policy', path: '/about#policy', desc: 'Institutional guidelines' },
            { name: 'Infrastructure', path: '/about#infrastructure', desc: 'World-class facilities' },
            { name: 'Facilities', path: '/about#facilities', desc: 'Student-centric amenities' },
            { name: 'Feedback', path: '/about#feedback', desc: 'Constructive feedback system' },
            { name: 'Holistic Model', path: '/about#holistic', desc: 'Integrated education approach' },
            { name: 'Governance', path: '/about#governance', desc: 'Institutional governing board' }
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
    'Academics': {
      categories: [
        {
          title: 'PKDAS University',
          items: [
            { name: 'School of Engineering (NIET/NCERC)', path: '/institutions-list', desc: 'Pioneering technical education' },
            { name: 'School of Management (NCM/NIITM)', path: '/institutions-list', desc: 'Strategic business leadership' },
            { name: 'School of Pharmacy & Nursing', path: '/institutions-list', desc: 'Healthcare and clinical expertise' },
            { name: 'School of Arts & Science', path: '/institutions-list', desc: 'Liberal arts and science majors' }
          ]
        },
        {
          title: 'NGI Kerala',
          items: [
            { name: 'NCERC (Engineering)', path: '/institutions-list', desc: 'Pambady, Thrissur' },
            { name: 'JCET (Engineering)', path: '/institutions-list', desc: 'Lakkidi, Palakkad' },
            { name: 'PKDIMS (Medical College)', path: '/institutions-list', desc: 'Medical College & Hospital' },
            { name: 'Nehru College of Pharmacy', path: '/institutions-list', desc: 'Pambady, Thrissur' },
            { name: 'Nehru Academy of Law', path: '/institutions-list', desc: 'Lakkidi, Palakkad' },
            { name: 'Nehru College of Architecture', path: '/institutions-list', desc: 'Pambady, Thrissur' }
          ]
        },
        {
          title: 'NGI Tamil Nadu',
          items: [
            { name: 'NIET (Engineering)', path: '/institutions-list', desc: 'Coimbatore, Tamil Nadu' },
            { name: 'NASC (Arts & Science)', path: '/institutions-list', desc: 'Coimbatore, Tamil Nadu' },
            { name: 'NCAAS (Aeronautics)', path: '/institutions-list', desc: 'Aviation Sciences, Coimbatore' },
            { name: 'NIT (Technology)', path: '/institutions-list', desc: 'Coimbatore, Tamil Nadu' },
            { name: 'NCM (Management)', path: '/institutions-list', desc: 'Business & Management' },
            { name: 'NIITM (IT & Management)', path: '/institutions-list', desc: 'IT & Business studies' }
          ]
        },
        // { 
        //   title: 'Specialized', 
        //   items: [
        //      { name: 'Research Centers', path: '/institutions-list', desc: 'Innovative labs and facilities' },
        //      { name: 'View All 25+ Institutions', path: '/institutions-list', desc: 'The complete PKDAS advantage' }
        //   ] 
        // }
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
