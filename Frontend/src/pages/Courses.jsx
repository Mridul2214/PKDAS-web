import React from 'react';

export function Courses() {
  const tamilNaduInstitutions = [
    {
      title: "Nehru College of Aeronautics and Applied Sciences",
      programs: ["AME (Aircraft Maintenance Engineering)", "B.Sc Aeronautical Science", "BBA Airline & Airport Management", "MBA Airline & Airport Management"]
    },
    {
      title: "Nehru College of Management",
      programs: ["MBA", "MCA", "Ph.D"]
    },
    {
      title: "Nehru Arts and Science College",
      programs: ["UG: B.Sc, B.Com, BBA, BA", "PG: M.Sc, M.Com, MBA", "Ph.D"]
    },
    {
      title: "Nehru Institute of Engineering and Technology",
      programs: ["B.E: CSE, Mechanical, Civil, Aeronautical", "M.E / M.Tech", "Ph.D"]
    },
    {
      title: "Nehru Institute of Information Technology and Management",
      programs: ["MBA", "MCA"]
    },
    {
      title: "Nehru Institute of Technology",
      programs: ["B.E (AI, Cyber Security, IT, Civil etc.)", "M.E", "MBA"]
    },
    {
      title: "Nehru School of Architecture",
      programs: ["B.Arch"]
    },
    {
      title: "Nehru Kids Academy",
      programs: ["Play Group", "Pre-KG", "LKG", "UKG"]
    },
    {
      title: "Nehru International School",
      programs: ["CBSE (Class 1–12)"]
    },
    {
      title: "Nehru Institute of Health Sciences",
      programs: ["B.Sc Allied Health: Cardiac Technology, Radiology, Dialysis, OT & Anaesthesia"]
    },
    {
      title: "Nehru College of Physiotherapy",
      programs: ["BPT (Bachelor of Physiotherapy)"]
    },
    {
      title: "Nehru College of Nursing and Research Institute",
      programs: ["B.Sc Nursing", "GNM", "M.Sc Nursing"]
    }
  ];

  const keralaInstitutions = [
    {
      title: "Nehru College of Engineering and Research Centre",
      programs: ["B.Tech", "M.Tech", "MBA"]
    },
    {
      title: "Nehru College of Pharmacy",
      programs: ["B.Pharm", "D.Pharm", "M.Pharm"]
    },
    {
      title: "Nehru School of Management",
      programs: ["MBA", "Management courses"]
    },
    {
      title: "Jawaharlal College of Engineering and Technology",
      programs: ["B.Tech", "M.Tech"]
    },
    {
      title: "PK Das Institute of Medical Sciences (PKDIMS)",
      programs: ["MBBS", "MD / MS Specializations"]
    },
    {
      title: "PK Das College of Nursing",
      programs: ["B.Sc Nursing", "M.Sc Nursing"]
    },
    {
      title: "PK Das Liberal College of Arts and Science",
      programs: ["BA, BBA, B.Com, BCA", "B.Sc (AI, CS etc.)"]
    },
    {
      title: "Jawaharlal Aviation Institute",
      programs: ["AME (DGCA approved)", "B.Sc Aircraft Maintenance"]
    },
    {
      title: "Nehru Academy of Law",
      programs: ["BA LLB", "BBA LLB", "LLB", "LLM"]
    },
    {
      title: "Nehru College of Architecture (Kerala Campus)",
      programs: ["B.Arch", "Diploma in Architecture"]
    },
    {
      title: "PK Das Super Speciality Hospital",
      programs: ["Clinical training for: MBBS, Nursing, Allied Health", "1000+ bed teaching hospital ecosystem"]
    },
    {
      title: "P.K. Das Institute of Social Sciences, Health Sciences & Technology",
      programs: ["Engineering", "Health Sciences", "Social Sciences", "Proposed Deemed University"]
    }
  ];

  return (
    <main className="pt-32 pb-24 bg-surface min-h-[80vh]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20 text-center">
          <h1 className="text-display-lg md:text-7xl font-display text-on-surface mb-6">Our Institutions</h1>
          <p className="text-xl font-body text-on-surface-variant max-w-4xl mx-auto leading-relaxed">
            The Nehru Group of Institutions operates 24 specialized educational sanctuaries across Tamil Nadu and Kerala, offering a comprehensive ecosystem ranging from K-12 schooling to Medical Sciences, Aeronautics, and Advanced Technologies.
          </p>
        </div>
        
        {/* Tamil Nadu Section */}
        <section className="mb-24">
           <div className="flex items-center gap-4 mb-10">
              <h2 className="text-4xl md:text-5xl font-display text-primary">Tamil Nadu Campuses</h2>
              <div className="h-px bg-surface-container flex-grow mt-2"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {tamilNaduInstitutions.map((inst, idx) => (
               <div key={idx} className="bg-surface-container-lowest border border-surface-container p-8 relative group shadow-sm hover:shadow-ambient transition-all duration-300 flex flex-col h-full">
                  <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500 delay-100"></div>
                  <h3 className="text-2xl font-display text-on-surface mb-6 font-medium leading-snug">{inst.title}</h3>
                  <div className="mt-auto">
                    <h4 className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4 border-b border-surface-container pb-2">Programmes</h4>
                    <ul className="space-y-3">
                       {inst.programs.map((prog, i) => (
                         <li key={i} className="flex items-start text-on-surface-variant font-body text-sm hover:text-primary transition-colors cursor-default leading-relaxed">
                           <span className="text-accent mr-3 font-bold block mt-0.5">•</span> {prog}
                         </li>
                       ))}
                    </ul>
                  </div>
               </div>
             ))}
           </div>
        </section>

        {/* Kerala Section */}
        <section>
           <div className="flex items-center gap-4 mb-10">
              <h2 className="text-4xl md:text-5xl font-display text-primary">Kerala Campuses</h2>
              <div className="h-px bg-surface-container flex-grow mt-2"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {keralaInstitutions.map((inst, idx) => (
               <div key={idx} className="bg-surface-container-lowest border border-surface-container p-8 relative group shadow-sm hover:shadow-ambient transition-all duration-300 flex flex-col h-full">
                  <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500 delay-100"></div>
                  <h3 className="text-2xl font-display text-on-surface mb-6 font-medium leading-snug">{inst.title}</h3>
                  <div className="mt-auto">
                    <h4 className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4 border-b border-surface-container pb-2">Programmes</h4>
                    <ul className="space-y-3">
                       {inst.programs.map((prog, i) => (
                         <li key={i} className="flex items-start text-on-surface-variant font-body text-sm hover:text-primary transition-colors cursor-default leading-relaxed">
                           <span className="text-accent mr-3 font-bold block mt-0.5">•</span> {prog}
                         </li>
                       ))}
                    </ul>
                  </div>
               </div>
             ))}
           </div>
        </section>

      </div>
    </main>
  );
}
