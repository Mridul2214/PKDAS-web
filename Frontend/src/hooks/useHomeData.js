export function useHomeData() {
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

  const institutionCategories = [
    {
      title: "Engineering & Technology",
      description: "Fostering technical excellence across 4 elite engineering campuses.",
      colleges: [
        { name: "NIET (Coimbatore)", slug: "niet-coimbatore" },
        { name: "NIT (Coimbatore)", slug: "nit-coimbatore" },
        { name: "NCERC (Kerala)", slug: "ncerc-kerala" },
        { name: "JCET (Kerala)", slug: "jcet-kerala" }
      ],
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=90"
    },
    {
      title: "Arts, Science & Commerce",
      description: "Premier programs focusing on literature and core sciences.",
      colleges: [
        { name: "NASC (Coimbatore)", slug: "nasc-coimbatore" },
        { name: "PK Das Liberal College (Kerala)", slug: "pk-das-liberal-college" }
      ],
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=90"
    },
    {
      title: "Management & IT",
      description: "Developing strategic business leaders and leading-edge technologists.",
      colleges: [
        { name: "NCM (Coimbatore)", slug: "ncm-coimbatore" },
        { name: "NIITM (Coimbatore)", slug: "niitm-coimbatore" },
        { name: "NSM (Kerala)", slug: "nsm-kerala" }
      ],
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=90"
    },
    {
      title: "Healthcare & Medical",
      description: "Pioneering medical sciences and progressive patient care.",
      colleges: [
        { name: "PKDIMS Medical College", slug: "pkdims-medical-college" },
        { name: "Nursing Colleges", slug: "nursing-colleges" },
        { name: "Physiotherapy", slug: "physiotherapy" },
        { name: "Allied Health Sciences", slug: "allied-health-sciences" }
      ],
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=90"
    },
    {
      title: "Aviation & Specialized",
      description: "Niche, industry-focused training in aeronautical sciences.",
      colleges: [
        { name: "Aeronautics Institute", slug: "aeronautics-institute" },
        { name: "Jawaharlal Aviation", slug: "jawaharlal-aviation" },
        { name: "Design Institute", slug: "design-institute" }
      ],
      img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=90"
    },
    {
      title: "Group Level Disciplines",
      description: "Specialized schools focusing on legal studies and architectural design.",
      colleges: [
        { name: "Architecture Schools", slug: "architecture-schools" },
        { name: "Nehru Academy of Law", slug: "nehru-academy-of-law" },
        { name: "Nehru College of Pharmacy", slug: "nehru-college-of-pharmacy" }
      ],
      img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=90"
    }
  ];

  const highlights = [
    {
      title: "Industry-Oriented Curriculum",
      slug: "industry-oriented-curriculum",
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
      slug: "expert-faculty",
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
      slug: "world-class-infrastructure",
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
      slug: "global-placements",
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
      slug: "skill-based-training",
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

  const news = [
    {
      id: 1,
      title: "PKDAS University Ranks Top 10 in Innovation Index 2025",
      category: "Achievements",
      date: "10",
      month: "MAY",
      excerpt: "Recognized for our groundbreaking research in sustainable engineering and AI-driven healthcare solutions across our global campuses.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "New AI & Robotics Lab Inaugurated by Industry Leaders",
      category: "Campus",
      date: "05",
      month: "MAY",
      excerpt: "State-of-the-art facility designed to bridge the gap between academic theory and industrial application, inaugurated by the Minister of Education.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "International Symposium on Green Energy Announced",
      category: "Academic",
      date: "28",
      month: "APR",
      excerpt: "Global experts to gather at PKDAS to discuss the future of renewable energy, carbon neutrality, and the next generation of power systems.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Medical Institute Breakthrough in Non-Invasive Surgery",
      category: "Research",
      date: "15",
      month: "APR",
      excerpt: "PKDIMS surgeons successfully complete first-of-its-kind robotic-assisted surgery, marking a new milestone in medical excellence.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Alumni Appointed as CEO of Global Tech Giant",
      category: "Achievements",
      date: "02",
      month: "APR",
      excerpt: "Celebrating the success of our 2012 batch graduate who has been named the Chief Executive Officer of a leading Silicon Valley firm.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Campus Sustainability Project Wins National Award",
      category: "Campus",
      date: "20",
      month: "MAR",
      excerpt: "Our zero-waste campus initiative has been recognized by the Ministry of Environment for its innovative approach to circular economy.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Annual Tech Fest 'Quantum 2025'",
      date: "24",
      month: "MAY",
      year: "25",
      time: "09:00 AM - 05:00 PM",
      location: "Main Auditorium",
      type: "Technical",
      image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&w=800&q=80",
      caption: "Our students showcasing their innovative projects during the annual symposium."
    },
    {
      id: 2,
      title: "Alumni Meet: Reconnecting Generations",
      date: "02",
      month: "JUN",
      year: "25",
      time: "11:00 AM - 03:00 PM",
      location: "Grand Lawn",
      type: "Social",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
      caption: "A day of nostalgia and networking as our alumni return to their second home."
    },
    {
      id: 3,
      title: "Workshop: Future of Quantum Computing",
      date: "15",
      month: "JUN",
      year: "25",
      time: "02:00 PM - 04:30 PM",
      location: "Seminar Hall 3",
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      caption: "Interactive sessions with industry experts exploring the next frontier of tech."
    },
    {
      id: 4,
      title: "Cultural Extravaganza: Dhwani 2025",
      date: "10",
      month: "JUL",
      year: "25",
      time: "05:00 PM - 10:00 PM",
      location: "Open Air Theatre",
      type: "Cultural",
      image: "https://images.unsplash.com/photo-1514525253344-991c70969d60?auto=format&fit=crop&w=800&q=80",
      caption: "Celebrating the diverse cultures and talents of our university community."
    },
    {
      id: 5,
      title: "Science Expo: Innovation for Future",
      date: "18",
      month: "AUG",
      year: "25",
      time: "10:00 AM - 04:00 PM",
      location: "Research Center",
      type: "Academic",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      caption: "A showcase of groundbreaking research and scientific discovery."
    },
    {
      id: 6,
      title: "Sports Meet: Champions Trophy",
      date: "05",
      month: "SEP",
      year: "25",
      time: "08:00 AM - 06:00 PM",
      location: "University Stadium",
      type: "Sports",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
      caption: "Pushing limits and celebrating the spirit of sportsmanship."
    },
    {
      id: 7,
      title: "International Hackathon: Code4Climate",
      date: "12",
      month: "OCT",
      year: "25",
      time: "48 Hours Continuous",
      location: "Innovation Hub",
      type: "Technical",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      caption: "Solving global environmental challenges through technological innovation."
    },
    {
      id: 8,
      title: "Medical Conference: Precision Medicine",
      date: "25",
      month: "NOV",
      year: "25",
      time: "09:00 AM - 06:00 PM",
      location: "Medical College Auditorium",
      type: "Academic",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      caption: "Exploring the integration of genomics and personalized therapy."
    }
  ];

  const rankings = [
    {
      id: 1,
      title: "NAAC ACCREDITED",
      value: "A++ Grade",
      desc: "Accredited by NAAC with A++ Grade (Highest Possible)",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/NAAC_Logo.png"
    },
    {
      id: 2,
      title: "UGC RECOGNIZED",
      value: "Category-I",
      desc: "University Grants Commission Ministry of Education Recognition",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/University_Grants_Commission_logo.svg/1200px-University_Grants_Commission_logo.svg.png"
    },
    {
      id: 3,
      title: "IET ACCREDITED",
      value: "Accredited",
      desc: "The Institution of Engineering and Technology (UK)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/The_IET_logo.svg/1200px-The_IET_logo.svg.png"
    },
    {
      id: 4,
      title: "ABET ACCREDITED",
      value: "Accredited",
      desc: "Engineering Accreditation Commission of ABET (USA)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/ABET_logo.svg/1200px-ABET_logo.svg.png"
    },
    {
      id: 5,
      title: "NBA ACCREDITED",
      value: "Accredited",
      desc: "National Board of Accreditation for Technical Education",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/NBA_Logo.png"
    },
    {
      id: 6,
      title: "NABH CERTIFIED",
      value: "Entry Level",
      desc: "National Accreditation Board for Hospitals & Healthcare",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/NABH_Logo.svg/1200px-NABH_Logo.svg.png"
    },
    {
      id: 7,
      title: "ISO CERTIFIED",
      value: "9001:2015",
      desc: "Quality Management System Standards for Education",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ISO_logo.svg/1200px-ISO_logo.svg.png"
    },
    {
      id: 8,
      title: "QS I-GAUGE",
      value: "Diamond",
      desc: "Recognized for Teaching, Employability, and Facilities",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/QS_Quacquarelli_Symonds_Logo.svg/1200px-QS_Quacquarelli_Symonds_Logo.svg.png"
    }
  ];

  const nirfStats = [
    { label: "Dental", value: "39", sub: "(Kattankulathur)" },
    { label: "Research", value: "25", sub: "" },
    { label: "SDG", value: "4", sub: "" },
    { label: "Innovation", value: "11-50", sub: "Band" },
    { label: "Overall", value: "22", sub: "" }
  ];

  return { alumniReviews, institutionCategories, highlights, news, events, rankings, nirfStats };
}
