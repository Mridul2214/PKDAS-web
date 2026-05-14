import { useHomeData } from '../hooks/useHomeData';

const Rankings = () => {
  const { rankings, nirfStats } = useHomeData();

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">Our Global Standing</span>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-on-surface leading-[0.9] mb-8">
              Rankings & <br />
              <span className="text-primary italic">Accreditations.</span>
            </h1>
            <p className="text-xl text-on-surface-variant font-body opacity-60 max-w-2xl leading-relaxed">
              We are defined by our commitment to academic excellence and global quality standards. Explore our comprehensive institutional audit.
            </p>
          </div>
        </div>
      </section>

      {/* NIRF Performance Section */}
      <section className="py-24 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             <div className="lg:w-1/3">
                <h2 className="text-2xl font-display font-bold mb-4">NIRF Performance</h2>
                <p className="text-sm text-gray-500 font-body leading-relaxed">
                  The National Institutional Ranking Framework (NIRF) evaluates our performance across teaching, learning, resources, and research professional practice.
                </p>
             </div>
             <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-5 gap-8">
                {nirfStats?.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-5xl font-display font-black text-on-surface tracking-tighter mb-2">{stat.value}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{stat.label}</span>
                    <span className="text-[8px] text-gray-400 font-bold uppercase">{stat.sub}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Accreditations Detailed List */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {rankings?.map((item) => (
              <div key={item.id} className="group border-b border-gray-100 pb-12 hover:border-primary transition-colors duration-500">
                <div className="flex items-center justify-between mb-8">
                   <div className="text-4xl font-display font-black text-on-surface group-hover:text-primary transition-colors">{item.value}</div>
                   <div className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-gray-50 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all">Verified</div>
                </div>
                <h3 className="text-lg font-display font-bold text-on-surface mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-on-surface-variant opacity-60 font-body leading-relaxed mb-8 italic">
                  "{item.desc}"
                </p>
                <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all">
                   Download Certificate &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Quality Framework */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-6">Our Quality Framework</h2>
            <p className="text-gray-500 font-body leading-relaxed">
              We operate under a rigorous four-pillar evaluation system that ensures every aspect of our institution meets global benchmarks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { title: "Academic Rigor", desc: "Continuous curriculum review by international advisory boards." },
               { title: "Research Impact", desc: "Measuring success through global citations and patent filings." },
               { title: "Student Success", desc: "Tracking employability and leadership outcomes of our alumni." },
               { title: "Social Impact", desc: "Evaluating our contribution to local and global communities." }
             ].map((pillar, i) => (
               <div key={i} className="p-10 bg-[#F8FAFC] rounded-[2.5rem] border border-transparent hover:border-primary/10 transition-all">
                  <span className="text-3xl font-display font-black text-primary/20 mb-4 block">0{i+1}</span>
                  <h3 className="text-lg font-display font-bold mb-3">{pillar.title}</h3>
                  <p className="text-xs text-gray-400 font-body leading-relaxed">{pillar.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Audit Timeline */}
      <section className="py-32 bg-on-surface text-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
              <div className="max-w-xl">
                 <h2 className="text-5xl font-display font-bold mb-6">Evaluation Timeline</h2>
                 <p className="text-white/40 font-body text-sm leading-relaxed">
                   Our journey of excellence is marked by continuous evaluation. Here is our roadmap for the upcoming audit cycle.
                 </p>
              </div>
              <div className="flex gap-4">
                 <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-on-surface transition-all">&larr;</button>
                 <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-on-surface transition-all">&rarr;</button>
              </div>
           </div>

           <div className="flex gap-12 overflow-x-auto no-scrollbar pb-12">
              {[
                { year: "2024", task: "NAAC Re-accreditation Cycle 4", status: "Completed" },
                { year: "2025", task: "QS World Ranking Submission", status: "In Progress" },
                { year: "2025", task: "NBA Technical Audit - Phase 2", status: "Upcoming" },
                { year: "2026", task: "International ABET Review", status: "Scheduled" }
              ].map((item, i) => (
                <div key={i} className="min-w-[300px] p-8 rounded-[2rem] bg-white/5 border border-white/10">
                   <span className="text-primary font-black text-xs uppercase tracking-widest block mb-4">{item.year}</span>
                   <h4 className="text-xl font-display font-bold mb-4">{item.task}</h4>
                   <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                     item.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-primary/20 text-primary'
                   }`}>
                     {item.status}
                   </span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Global Memberships Strip */}
      <section className="py-20 bg-on-surface text-white">
        <div className="container mx-auto px-6">
           <div className="flex flex-wrap justify-center items-center gap-16 opacity-30">
              <div className="text-2xl font-display font-bold italic">UNESCO</div>
              <div className="text-2xl font-display font-bold italic">WHO RECOGNIZED</div>
              <div className="text-2xl font-display font-bold italic">ISO 9001:2015</div>
              <div className="text-2xl font-display font-bold italic">AIMA MEMBER</div>
              <div className="text-2xl font-display font-bold italic">IAU MEMBER</div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Rankings;
