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

  return { alumniReviews, institutionCategories, highlights };
}
