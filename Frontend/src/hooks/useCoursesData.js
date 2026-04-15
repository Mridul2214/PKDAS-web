export function useCoursesData() {
  const tamilNaduInstitutions = [
    {
      title: "Nehru College of Aeronautics and Applied Sciences",
      category: "Aviation",
      programs: ["AME (Aircraft Maintenance Engineering)", "B.Sc Aeronautical Science", "BBA Airline & Airport Management", "MBA Airline & Airport Management"]
    },
    {
      title: "Nehru College of Management",
      category: "Management",
      programs: ["MBA", "MCA", "Ph.D"]
    },
    {
      title: "Nehru Arts and Science College",
      category: "Arts & Science",
      programs: ["UG: B.Sc, B.Com, BBA, BA", "PG: M.Sc, M.Com, MBA", "Ph.D"]
    },
    {
      title: "Nehru Institute of Engineering and Technology",
      category: "Engineering",
      programs: ["B.E: CSE, Mechanical, Civil, Aeronautical", "M.E / M.Tech", "Ph.D"]
    },
    {
      title: "Nehru Institute of Information Technology and Management",
      category: "Management",
      programs: ["MBA", "MCA"]
    },
    {
      title: "Nehru Institute of Technology",
      category: "Engineering",
      programs: ["B.E (AI, Cyber Security, IT, Civil etc.)", "M.E", "MBA"]
    },
    {
      title: "Nehru School of Architecture",
      category: "Architecture",
      programs: ["B.Arch"]
    },
    {
      title: "Nehru Kids Academy",
      category: "Schooling",
      programs: ["Play Group", "Pre-KG", "LKG", "UKG"]
    },
    {
      title: "Nehru International School",
      category: "Schooling",
      programs: ["CBSE (Class 1–12)"]
    },
    {
      title: "Nehru Institute of Health Sciences",
      category: "Health Science",
      programs: ["B.Sc Allied Health: Cardiac Technology, Radiology, Dialysis, OT & Anaesthesia"]
    },
    {
      title: "Nehru College of Physiotherapy",
      category: "Health Science",
      programs: ["BPT (Bachelor of Physiotherapy)"]
    },
    {
      title: "Nehru College of Nursing and Research Institute",
      category: "Health Science",
      programs: ["B.Sc Nursing", "GNM", "M.Sc Nursing"]
    }
  ];

  const keralaInstitutions = [
    {
      title: "Nehru College of Engineering and Research Centre",
      category: "Engineering",
      programs: ["B.Tech", "M.Tech", "MBA"]
    },
    {
      title: "Nehru College of Pharmacy",
      category: "Pharmacy",
      programs: ["B.Pharm", "D.Pharm", "M.Pharm"]
    },
    {
      title: "Nehru School of Management",
      category: "Management",
      programs: ["MBA", "Management courses"]
    },
    {
      title: "Jawaharlal College of Engineering and Technology",
      category: "Engineering",
      programs: ["B.Tech", "M.Tech"]
    },
    {
      title: "PK Das Institute of Medical Sciences (PKDIMS)",
      category: "Medical",
      programs: ["MBBS", "MD / MS Specializations"]
    },
    {
      title: "PK Das College of Nursing",
      category: "Nursing",
      programs: ["B.Sc Nursing", "M.Sc Nursing"]
    },
    {
      title: "PK Das Liberal College of Arts and Science",
      category: "Arts & Science",
      programs: ["BA, BBA, B.Com, BCA", "B.Sc (AI, CS etc.)"]
    },
    {
      title: "Jawaharlal Aviation Institute",
      category: "Aviation",
      programs: ["AME (DGCA approved)", "B.Sc Aircraft Maintenance"]
    },
    {
      title: "Nehru Academy of Law",
      category: "Law",
      programs: ["BA LLB", "BBA LLB", "LLB", "LLM"]
    },
    {
      title: "Nehru College of Architecture (Kerala Campus)",
      category: "Architecture",
      programs: ["B.Arch", "Diploma in Architecture"]
    },
    {
      title: "PK Das Super Speciality Hospital",
      category: "Hospital",
      programs: ["Clinical training for: MBBS, Nursing, Allied Health", "1000+ bed teaching hospital ecosystem"]
    },
    {
      title: "P.K. Das Institute of Social Sciences, Health Sciences & Technology",
      category: "Integrated",
      programs: ["Engineering", "Health Sciences", "Social Sciences", "Proposed Deemed University"]
    }
  ];

  return { tamilNaduInstitutions, keralaInstitutions };
}
