import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Full institution data with discipline tags
const allInstitutions = [
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
const disciplineMeta = {
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

export function InterestPage() {
  const { slug } = useParams();
  const meta = disciplineMeta[slug] || { label: slug, icon: '🎓', gradient: 'from-primary to-accent' };

  // Scroll to top when Navigating via slug
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Filter institutions matching this discipline
  const matched = allInstitutions.filter((inst) =>
    inst.disciplines.includes(meta.label)
  );

  const tnColleges = matched.filter((c) => c.location === 'Tamil Nadu');
  const klColleges = matched.filter((c) => c.location === 'Kerala');

  return (
    <main className="bg-black min-h-screen pt-36 pb-24">
      {/* Hero Header */}
      <div className="container mx-auto px-6 mb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-body mb-8 transition-colors group">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="flex items-center gap-5 mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-3xl shadow-lg`}>
            {meta.icon}
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              {meta.label}
            </h1>
            <p className="text-zinc-400 font-body text-lg mt-1">
              {matched.length} institution{matched.length !== 1 ? 's' : ''} offering programs in this field
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-6">
        {matched.length === 0 ? (
          <div className="text-center py-32">
            <div className="text-6xl mb-6">🔍</div>
            <h2 className="text-2xl font-display text-white mb-3">No institutions found</h2>
            <p className="text-zinc-400 font-body mb-8">We're working on adding programs in this discipline.</p>
            <Link to="/" className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full hover:brightness-110 transition-all">
              Explore Other Interests
            </Link>
          </div>
        ) : (
          <>
            {/* Tamil Nadu */}
            {tnColleges.length > 0 && (
              <section className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white whitespace-nowrap">Tamil Nadu</h2>
                  <div className="h-px bg-white/10 flex-grow"></div>
                  <span className="text-sm font-body text-zinc-500">{tnColleges.length} campuses</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tnColleges.map((inst, idx) => (
                    <CollegeCard key={idx} inst={inst} gradient={meta.gradient} />
                  ))}
                </div>
              </section>
            )}

            {/* Kerala */}
            {klColleges.length > 0 && (
              <section className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white whitespace-nowrap">Kerala</h2>
                  <div className="h-px bg-white/10 flex-grow"></div>
                  <span className="text-sm font-body text-zinc-500">{klColleges.length} campuses</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {klColleges.map((inst, idx) => (
                    <CollegeCard key={idx} inst={inst} gradient={meta.gradient} />
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="mt-16 text-center py-16 border-t border-white/5">
              <h3 className="text-2xl md:text-3xl font-display text-white mb-4">Interested in {meta.label}?</h3>
              <p className="text-zinc-400 font-body mb-8 max-w-lg mx-auto">
                Get in touch with our admissions team to learn more about programs, eligibility, and scholarships.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link to="/contact" className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                  Apply Now
                </Link>
                <Link to="/courses" className="px-8 py-3 border border-white/15 text-white font-semibold rounded-full hover:bg-white/5 transition-all">
                  View All Programs
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function CollegeCard({ inst, gradient }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 cursor-pointer hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={inst.img}
          alt={inst.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <span className="absolute top-3 right-3 text-[10px] font-bold text-white bg-white/10 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
          {inst.location}
        </span>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-display font-semibold text-white mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
          {inst.name}
        </h3>

        <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-3">Programs Offered</h4>
        <ul className="space-y-2">
          {inst.programs.map((prog, i) => (
            <li key={i} className="flex items-start text-sm font-body text-zinc-400 leading-relaxed">
              <span className="text-primary mr-2 mt-0.5 flex-shrink-0">▸</span>
              {prog}
            </li>
          ))}
        </ul>

        {/* Discipline tags */}
        <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-2">
          {inst.disciplines.slice(0, 3).map((d, i) => (
            <span key={i} className="text-[10px] font-bold text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
              {d}
            </span>
          ))}
          {inst.disciplines.length > 3 && (
            <span className="text-[10px] font-bold text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full">
              +{inst.disciplines.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
