// Full institution data with discipline tags
export const allInstitutions = [
  // ── Tamil Nadu ──
  {
    name: "Nehru College of Aeronautics and Applied Sciences",
    location: "Tamil Nadu",
    programs: ["AME (Aircraft Maintenance Engineering)", "B.Sc Aeronautical Science", "BBA Airline & Airport Management", "MBA Airline & Airport Management"],
    disciplines: ["Aviation", "Aeronautics", "Business & MBA", "Engineering"],
    img: "/Buildings/NGI-aerial view - NIET- Entrance.JPG"
  },
  {
    name: "Nehru College of Management",
    location: "Tamil Nadu",
    programs: ["MBA", "MCA", "Ph.D"],
    disciplines: ["Business & MBA", "Computer Science", "Data Science"],
    img: "/Buildings/NGI-aerial view - NIITM  (1).JPG"
  },
  {
    name: "Nehru Arts and Science College",
    location: "Tamil Nadu",
    programs: ["B.Sc (CS, Maths, Physics, Chemistry)", "B.Com, BBA, BA English", "M.Sc, M.Com, MBA", "Ph.D"],
    disciplines: ["Arts & Humanities", "Commerce", "Computer Science", "Physical Sciences", "Business & MBA", "Data Science"],
    img: "/Buildings/NGI-aerial view - NASC- Front view (2).JPG"
  },
  {
    name: "Nehru Institute of Engineering and Technology",
    location: "Tamil Nadu",
    programs: ["B.E: CSE, Mechanical, Civil, Aeronautical", "M.E / M.Tech", "Ph.D"],
    disciplines: ["Engineering", "Computer Science", "Aeronautics"],
    img: "/Buildings/NGI-aerial view - NIET- Entrance.JPG"
  },
  {
    name: "Nehru Institute of Information Technology and Management",
    location: "Tamil Nadu",
    programs: ["MBA", "MCA"],
    disciplines: ["Business & MBA", "Computer Science", "Data Science"],
    img: "/Buildings/NGI-aerial view - NIITM  (1).JPG"
  },
  {
    name: "Nehru Institute of Technology",
    location: "Tamil Nadu",
    programs: ["B.E (AI, Cyber Security, IT, Civil etc.)", "M.E", "MBA"],
    disciplines: ["Engineering", "Computer Science", "Data Science", "Business & MBA"],
    img: "/Buildings/NGI-aerial view - NIT - Main block tight soht.JPG"
  },
  {
    name: "Nehru School of Architecture",
    location: "Tamil Nadu",
    programs: ["B.Arch"],
    disciplines: ["Architecture", "Design"],
    img: "/Buildings/NGI-aerial view - NASC- Front view (2).JPG"
  },
  {
    name: "Nehru Institute of Health Sciences",
    location: "Tamil Nadu",
    programs: ["B.Sc Allied Health: Cardiac Technology, Radiology, Dialysis, OT & Anaesthesia"],
    disciplines: ["Allied Health", "Medicine"],
    img: "/Buildings/NGI-aerial view - NASC- front view low angle - birds eye view.JPG"
  },
  {
    name: "Nehru College of Physiotherapy",
    location: "Tamil Nadu",
    programs: ["BPT (Bachelor of Physiotherapy)"],
    disciplines: ["Physiotherapy", "Allied Health", "Medicine"],
    img: "/Buildings/NGI-aerial view - NASC- front view low angle - birds eye view.JPG"
  },
  {
    name: "Nehru College of Nursing and Research Institute",
    location: "Tamil Nadu",
    programs: ["B.Sc Nursing", "GNM", "M.Sc Nursing"],
    disciplines: ["Nursing", "Medicine", "Allied Health"],
    img: "/Buildings/NGI-aerial view - NASC- front view low angle - birds eye view.JPG"
  },
  // ── Kerala ──
  {
    name: "Nehru College of Engineering and Research Centre",
    location: "Kerala",
    programs: ["B.Tech (CSE, ECE, ME, Civil)", "M.Tech", "MBA"],
    disciplines: ["Engineering", "Computer Science", "Business & MBA"],
    img: "/Buildings/NGI-aerial view - NIET- Entrance.JPG"
  },
  {
    name: "Nehru College of Pharmacy",
    location: "Kerala",
    programs: ["B.Pharm", "D.Pharm", "M.Pharm"],
    disciplines: ["Pharmacy", "Medicine", "Biotechnology"],
    img: "/Buildings/NGI-aerial view - NASC- front view low angle - birds eye view.JPG"
  },
  {
    name: "Nehru School of Management",
    location: "Kerala",
    programs: ["MBA", "Management courses"],
    disciplines: ["Business & MBA", "Commerce"],
    img: "/Buildings/NGI-aerial view - NIITM  (1).JPG"
  },
  {
    name: "Jawaharlal College of Engineering and Technology",
    location: "Kerala",
    programs: ["B.Tech (CSE, ME, EEE, Civil)", "M.Tech"],
    disciplines: ["Engineering", "Computer Science"],
    img: "/Buildings/NGI-aerial view - NIT - Main block tight soht.JPG"
  },
  {
    name: "PK Das Institute of Medical Sciences (PKDIMS)",
    location: "Kerala",
    programs: ["MBBS", "MD / MS Specializations"],
    disciplines: ["Medicine", "Allied Health"],
    img: "/Buildings/NGI-aerial view - NASC- front view low angle - birds eye view.JPG"
  },
  {
    name: "PK Das College of Nursing",
    location: "Kerala",
    programs: ["B.Sc Nursing", "M.Sc Nursing"],
    disciplines: ["Nursing", "Medicine", "Allied Health"],
    img: "/Buildings/NGI-aerial view - NASC- front view low angle - birds eye view.JPG"
  },
  {
    name: "PK Das Liberal College of Arts and Science",
    location: "Kerala",
    programs: ["BA, BBA, B.Com, BCA", "B.Sc (AI, CS, Data Science)"],
    disciplines: ["Arts & Humanities", "Commerce", "Computer Science", "Data Science", "Business & MBA"],
    img: "/Buildings/NGI-aerial view - NASC- Front view (2).JPG"
  },
  {
    name: "Jawaharlal Aviation Institute",
    location: "Kerala",
    programs: ["AME (DGCA approved)", "B.Sc Aircraft Maintenance"],
    disciplines: ["Aviation", "Aeronautics", "Engineering"],
    img: "/Buildings/NGI-aerial view - NIT - Main block tight soht.JPG"
  },
  {
    name: "Nehru Academy of Law",
    location: "Kerala",
    programs: ["BA LLB", "BBA LLB", "LLB", "LLM"],
    disciplines: ["Law"],
    img: "/Buildings/NGI-aerial view - NASC- Front view (2).JPG"
  },
  {
    name: "Nehru College of Architecture (Kerala Campus)",
    location: "Kerala",
    programs: ["B.Arch", "Diploma in Architecture"],
    disciplines: ["Architecture", "Design"],
    img: "/Buildings/NGI-aerial view - NASC- Front view (2).JPG"
  },
  {
    name: "PK Das Super Speciality Hospital",
    location: "Kerala",
    programs: ["Clinical training for: MBBS, Nursing, Allied Health", "1000+ bed teaching hospital"],
    disciplines: ["Medicine", "Nursing", "Allied Health", "Physiotherapy"],
    img: "/Buildings/NGI-aerial view - NASC- front view low angle - birds eye view.JPG"
  },
];

// Discipline metadata for header styling
export const disciplineMeta = {
  'arts-humanities': { label: 'Arts & Humanities', icon: '🎨', gradient: 'from-rose-500 to-pink-600' },
  'commerce': { label: 'Commerce', icon: '📊', gradient: 'from-blue-500 to-blue-600' },
  'computer-science': { label: 'Computer Science', icon: '💻', gradient: 'from-violet-500 to-purple-600' },
  'engineering': { label: 'Engineering', icon: '⚙️', gradient: 'from-zinc-400 to-zinc-600' },
  'architecture': { label: 'Architecture', icon: '🏛️', gradient: 'from-amber-500 to-amber-600' },
  'business-mba': { label: 'Business & MBA', icon: '💼', gradient: 'from-emerald-500 to-emerald-600' },
  'medicine': { label: 'Medicine', icon: '🩺', gradient: 'from-red-500 to-red-600' },
  'nursing': { label: 'Nursing', icon: '🏥', gradient: 'from-pink-500 to-pink-600' },
  'pharmacy': { label: 'Pharmacy', icon: '💊', gradient: 'from-teal-500 to-teal-600' },
  'aviation': { label: 'Aviation', icon: '✈️', gradient: 'from-sky-500 to-sky-600' },
  'law': { label: 'Law', icon: '⚖️', gradient: 'from-yellow-500 to-yellow-600' },
  'data-science': { label: 'Data Science', icon: '📈', gradient: 'from-indigo-500 to-indigo-600' },
  'biotechnology': { label: 'Biotechnology', icon: '🧬', gradient: 'from-lime-500 to-lime-600' },
  'physical-sciences': { label: 'Physical Sciences', icon: '🔬', gradient: 'from-cyan-500 to-cyan-600' },
  'allied-health': { label: 'Allied Health', icon: '🫀', gradient: 'from-orange-500 to-orange-600' },
  'design': { label: 'Design', icon: '🎯', gradient: 'from-fuchsia-500 to-fuchsia-600' },
  'physiotherapy': { label: 'Physiotherapy', icon: '🦴', gradient: 'from-green-500 to-green-600' },
  'media-comms': { label: 'Media & Comms', icon: '📡', gradient: 'from-purple-500 to-purple-600' },
  'aeronautics': { label: 'Aeronautics', icon: '🚀', gradient: 'from-blue-600 to-blue-700' },
  'hospitality': { label: 'Hospitality', icon: '🏨', gradient: 'from-amber-400 to-amber-500' },
};

export function useInterestData(slug) {
  const meta = disciplineMeta[slug] || { label: slug, icon: '🎓', gradient: 'from-primary to-accent' };
  
  const matched = allInstitutions.filter((inst) =>
    inst.disciplines.includes(meta.label)
  );

  const tnColleges = matched.filter((c) => c.location === 'Tamil Nadu');
  const klColleges = matched.filter((c) => c.location === 'Kerala');

  return { meta, matched, tnColleges, klColleges };
}
