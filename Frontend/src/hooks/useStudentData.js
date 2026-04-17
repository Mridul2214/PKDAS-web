export function useStudentData() {
  const topStudents = [
    {
      name: "Aisha Rahman",
      course: "B.Sc Computer Science",
      achievement: "Secured University 1st Rank and recruited by Google as a Software Engineer.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      batch: "2023",
      gpa: "9.8 / 10",
      bio: "Aisha is a passionate technologist who graduated top of her class, demonstrating exceptional skill in algorithms, machine learning, and distributed systems. Her relentless curiosity and dedication led her to crack Google's competitive hiring process straight from campus.",
      highlights: [
        "University Gold Medalist – 2023",
        "Recruited by Google as Software Engineer (L3)",
        "Finalist – ACM ICPC India Regionals",
        "Published 2 papers on ML optimization"
      ]
    },
    {
      name: "Rahul Menon",
      course: "BBA",
      achievement: "Founded a successful tech startup while in his final year of studies.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&q=80",
      batch: "2022",
      gpa: "8.9 / 10",
      bio: "Rahul is a driven entrepreneur who identified a market gap in EdTech during his BBA internship. He co-founded 'SkillBridge' in his final year, securing seed funding of ₹50 Lakhs and onboarding 10,000+ users within six months of launch.",
      highlights: [
        "Co-founder & CEO of SkillBridge",
        "Raised ₹50L seed funding in 2022",
        "Featured in Forbes India 30 Under 30",
        "Best Student Entrepreneur Award – PKDAS"
      ]
    },
    {
      name: "Sneha Krishnan",
      course: "BA English",
      achievement: "Published author and winner of the National Youth Literary Award.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      batch: "2023",
      gpa: "9.4 / 10",
      bio: "Sneha is a gifted writer and storyteller whose debut novel 'Echoes of the Monsoon' received critical acclaim across India. Her work explores themes of identity and belonging through a deeply personal lens, connecting with readers of all ages.",
      highlights: [
        "National Youth Literary Award – 2023",
        "Debut novel 'Echoes of the Monsoon' published",
        "Speaker at Oxford South Asian Literature Festival",
        "State-level Debate Championship Winner"
      ]
    },
    {
      name: "Priya Sharma",
      course: "M.Sc Data Science",
      achievement: "Published a research paper on predictive AI models in a top ACM journal.",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
      batch: "2024",
      gpa: "9.6 / 10",
      bio: "Priya's research at the intersection of AI and healthcare has garnered international recognition. Her ACM-published paper on neural prediction models for early disease detection is cited by researchers across 15 countries and is being piloted in two major hospitals.",
      highlights: [
        "Published in ACM SIGKDD 2024",
        "Research cited by 40+ international papers",
        "Best Thesis Award – PKDAS PG Convocation",
        "AI Fellowship – Indian Institute of Science (IISc)"
      ]
    },
    {
      name: "David Chen",
      course: "B.Tech Aerospace",
      achievement: "Won the National Robotics Competition and interned at ISRO.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      batch: "2023",
      gpa: "9.1 / 10",
      bio: "David's passion for aerospace engineering took him from building model rockets in school to designing autonomous drone systems at ISRO. He led his team to a national gold in the Robocon India championship and is now pursuing advanced research in satellite propulsion.",
      highlights: [
        "Gold Medal – Robocon India 2023",
        "Summer Research Intern at ISRO, Thiruvananthapuram",
        "Filed a patent for autonomous UAV navigation",
        "Recipient of the Dr. A.P.J. Abdul Kalam Scholarship"
      ]
    },
    {
      name: "Anita Desai",
      course: "B.Sc Nursing",
      achievement: "Awarded 'Best Student Nurse' for exemplary service during clinicals.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      batch: "2024",
      gpa: "9.3 / 10",
      bio: "Anita's compassion and clinical expertise made her stand out during her hospital rotations. She introduced a streamlined patient-handover checklist that reduced errors by 30% at her placement hospital, earning her the coveted 'Best Student Nurse' award from the State Nursing Council.",
      highlights: [
        "Best Student Nurse – Kerala State Nursing Council 2024",
        "Reduced patient handover errors by 30%",
        "Volunteered 200+ hours at rural health camps",
        "Appointed Junior Clinical Trainer post-graduation"
      ]
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

  return { topStudents, careerSuccessData, cultureSections };
}
