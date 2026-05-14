import React from 'react';
import { Link } from 'react-router-dom';

export const HomeEvents = ({ events }) => {
  // We'll use 6 events for this specific asymmetric layout
  const moments = events.slice(0, 6);

  return (
    <section className="relative z-[20] py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header - Centered & Bold */}
        <div className="mb-24 text-center relative">
          {/* Spinning Text Decor (Left) */}
          <div className="absolute left-0 top-0 hidden lg:block">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full text-on-surface-variant/20 fill-current">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[10px] font-bold uppercase tracking-[0.2em]">
                    <textPath xlinkHref="#circlePath">Discover more about us through events &bull; </textPath>
                  </text>
                </svg>
              </div>
              <div className="w-12 h-12 bg-on-surface rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </div>

          {/* Avatars Decor (Right) */}
          <div className="absolute right-0 top-8 hidden lg:flex items-center gap-2 bg-gray-50 p-2 rounded-full border border-gray-100">
             <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="" />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-on-surface flex items-center justify-center text-white text-[10px] font-bold">+</div>
             </div>
          </div>

          <h2 className="gsap-reveal font-display text-5xl md:text-7xl font-bold text-on-surface leading-[1.1] max-w-4xl mx-auto">
            Experience the <br />
            <span className="text-on-surface/40 italic">Bold Legacy</span> of PKDAS
          </h2>
        </div>

        {/* The "New Alignment" Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 items-start">
          
          {/* Column 1 - Tall + Small */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <div className="gsap-reveal group relative h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-lg bg-orange-100">
              <img src={moments[0]?.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>
            <div className="gsap-reveal group relative h-[180px] rounded-[2rem] overflow-hidden shadow-lg bg-orange-200">
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80" alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>
          </div>

          {/* Column 2 - Notched Tall */}
          <div className="md:col-span-1 md:pt-16">
            <div className="gsap-reveal group relative h-[500px] rounded-[2.5rem] rounded-tr-[8rem] overflow-hidden shadow-lg bg-green-100">
              <img src={moments[1]?.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">{moments[1]?.type}</span>
              </div>
            </div>
          </div>

          {/* Column 3 - Center (Medium + Button) */}
          <div className="md:col-span-1 flex flex-col items-center gap-8 md:pt-32">
            <div className="w-8 h-8 text-orange-400 mb-2">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full animate-spin-slow">
                 <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.5-6.2 4.5 2.3-7.3-6.1-4.5h7.6z" />
               </svg>
            </div>
            <div className="gsap-reveal group relative w-full h-[320px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
              <img src={moments[2]?.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>
            <Link to="/events" className="gsap-reveal w-full py-4 px-6 bg-on-surface text-white rounded-full flex items-center justify-center gap-3 font-bold text-xs uppercase tracking-widest hover:bg-primary transition-all duration-300 shadow-xl">
               Explore Gallery <span className="text-primary">&rarr;</span>
            </Link>
          </div>

          {/* Column 4 - Notched Tall (Blue) */}
          <div className="md:col-span-1 md:pt-16">
            <div className="gsap-reveal group relative h-[550px] rounded-[2.5rem] rounded-tl-[8rem] overflow-hidden shadow-lg bg-blue-100">
              <img src={moments[3]?.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/40 to-transparent">
                 <h4 className="text-white font-display font-bold text-lg">{moments[3]?.title}</h4>
              </div>
            </div>
          </div>

          {/* Column 5 - Notched + Small */}
          <div className="md:col-span-1 flex flex-col gap-6">
             <div className="gsap-reveal group relative h-[400px] rounded-[2.5rem] rounded-tl-[6rem] overflow-hidden shadow-lg bg-lime-100">
               <img src={moments[4]?.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
             </div>
             <div className="gsap-reveal group relative h-[180px] rounded-[2.5rem] overflow-hidden shadow-lg bg-teal-800">
               <img src={moments[5]?.image} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
             </div>
          </div>

        </div>

      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
