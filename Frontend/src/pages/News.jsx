import React, { useState } from 'react';
import { useHomeData } from '../hooks/useHomeData';
import { Link } from 'react-router-dom';

const News = () => {
  const { news } = useHomeData();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Academic', 'Research', 'Campus', 'Sports', 'Achievements'];
  
  const filteredNews = activeCategory === 'All' 
    ? news 
    : news.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Editorial Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <div className="max-w-3xl">
               <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">The University Bulletin</span>
               <h1 className="font-display text-7xl md:text-9xl font-bold text-on-surface leading-[0.8] tracking-tighter">
                 News & <br />
                 <span className="text-primary italic">Updates.</span>
               </h1>
            </div>
            <div className="flex flex-col items-start gap-6 lg:pb-4">
               <p className="text-sm text-on-surface-variant font-body opacity-60 max-w-xs leading-relaxed">
                 Stay informed with the latest breakthroughs, events, and stories from our vibrant university community.
               </p>
               <div className="flex gap-4">
                  <div className="w-12 h-px bg-on-surface mt-3"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Scroll to Explore</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="sticky top-[80px] z-[40] bg-white/80 backdrop-blur-xl border-y border-gray-100">
        <div className="container mx-auto px-6">
           <div className="flex items-center gap-8 py-6 overflow-x-auto no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all ${
                    activeCategory === cat ? 'text-primary' : 'text-gray-400 hover:text-on-surface'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* Featured & Trending Row */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             
             {/* Large Featured Story */}
             <div className="lg:col-span-8">
                <div className="group relative aspect-[21/10] overflow-hidden rounded-[3rem] bg-gray-100">
                   <img 
                    src={news[0]?.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" 
                    alt="" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                   <div className="absolute bottom-12 left-12 right-12">
                      <span className="px-4 py-1.5 bg-primary rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-6 inline-block">Featured Chronicle</span>
                      <h2 className="text-4xl font-display font-bold text-white mb-6 leading-tight">
                        {news[0]?.title}
                      </h2>
                      <Link to={`/news/${news[0]?.id}`} className="text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-4">
                         Read Deep Dive
                         <span className="w-12 h-px bg-white/40"></span>
                      </Link>
                   </div>
                </div>
             </div>

             {/* Trending Sidebar */}
             <div className="lg:col-span-4 flex flex-col gap-8">
                <h3 className="text-xl font-display font-bold border-b border-gray-100 pb-4">Trending Now</h3>
                {[
                  { title: "Quantum Computing Workshop Series", count: "1.2k Views" },
                  { title: "Campus Green Initiative Wins Award", count: "850 Reads" },
                  { title: "Placement Drive 2025: Record Offers", count: "2.1k Views" }
                ].map((trend, i) => (
                  <div key={i} className="group cursor-pointer">
                     <span className="text-primary font-black text-[10px] uppercase tracking-widest mb-1 block">{trend.count}</span>
                     <h4 className="text-sm font-display font-bold group-hover:text-primary transition-colors leading-snug">{trend.title}</h4>
                  </div>
                ))}
                
                <div className="mt-auto p-8 bg-primary rounded-[2rem] text-white">
                   <h4 className="text-lg font-display font-bold mb-3">Join the Bulletin</h4>
                   <p className="text-[10px] opacity-60 font-body leading-relaxed mb-6">Get weekly research insights and campus updates directly.</p>
                   <button className="w-full py-3 bg-white text-primary rounded-xl font-black text-[9px] uppercase tracking-widest">Subscribe</button>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {filteredNews?.map((item) => (
              <Link key={item.id} to={`/news/${item.id}`} className="group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8">
                   <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                   />
                   <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-on-surface shadow-xl">
                        {item.category}
                      </span>
                   </div>
                </div>
                <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                   <span>{item.date} {item.month} 2025</span>
                   <span className="w-1 h-1 bg-primary rounded-full"></span>
                   <span>5 Min Read</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-on-surface leading-snug group-hover:text-primary transition-colors mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-on-surface-variant opacity-60 font-body leading-relaxed mb-8 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                   <span className="text-[10px] font-black uppercase tracking-widest text-on-surface">Read Full Story</span>
                   <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Load More / Pagination */}
          <div className="mt-32 text-center">
             <button className="px-12 py-5 rounded-full border border-gray-200 font-black text-[10px] uppercase tracking-[0.3em] hover:bg-on-surface hover:text-white transition-all duration-500">
                Load More Chronicles
             </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-[#F8FAFC]">
         <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl font-display font-bold mb-6">Never miss a breakthrough.</h2>
            <p className="text-sm text-gray-500 mb-10 leading-relaxed">
              Subscribe to the PKDAS Bulletin to receive the latest news, research insights, and campus updates directly in your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 p-2 bg-white rounded-2xl shadow-xl">
               <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-6 py-4 bg-transparent outline-none font-body text-sm"
               />
               <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                 Subscribe
               </button>
            </form>
         </div>
      </section>

    </div>
  );
};

export default News;
