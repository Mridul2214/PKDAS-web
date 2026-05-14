import React, { useState } from 'react';
import { useHomeData } from '../hooks/useHomeData';
import { Link } from 'react-router-dom';

const Events = () => {
  const { events } = useHomeData();
  const [activeTab, setActiveTab] = useState('Upcoming');

  const filteredEvents = activeTab === 'Upcoming' 
    ? events 
    : [...events].reverse(); // Mocking past events for now

  return (
    <div className="min-h-screen bg-white">
      
      {/* Immersive Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-on-surface">
         <div className="absolute inset-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1540575861501-7c0f110f6f32?auto=format&fit=crop&w=1920&q=80" 
              className="w-full h-full object-cover" 
              alt="" 
            />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/40 to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10 pt-20">
            <div className="max-w-4xl">
               <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">Experience PKDAS</span>
               <h1 className="font-display text-7xl md:text-9xl font-bold text-white leading-[0.8] mb-12">
                 University <br />
                 <span className="text-primary italic">Moments.</span>
               </h1>
               <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col">
                     <span className="text-white text-3xl font-display font-black">25+</span>
                     <span className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">Events Monthly</span>
                  </div>
                  <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                  <div className="flex flex-col">
                     <span className="text-white text-3xl font-display font-black">15K+</span>
                     <span className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">Attendees</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-[80px] z-[40] bg-white border-b border-gray-100">
         <div className="container mx-auto px-6">
            <div className="flex items-center gap-12">
               {['Upcoming', 'Past Moments', 'Calendar'].map(tab => (
                 <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-8 text-[11px] font-black uppercase tracking-[0.3em] relative transition-all ${
                    activeTab === tab ? 'text-on-surface' : 'text-gray-400 hover:text-on-surface'
                  }`}
                 >
                   {tab}
                   {activeTab === tab && (
                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
                   )}
                 </button>
               ))}
            </div>
         </div>
      </section>

      {/* Events List / Grid */}
      <section className="py-24">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-12">
               {filteredEvents?.map((event, idx) => (
                 <div key={event.id} className="group flex flex-col lg:flex-row gap-12 items-center bg-gray-50/50 rounded-[3rem] p-8 lg:p-12 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700">
                    {/* Date Block */}
                    <div className="flex flex-col items-center justify-center min-w-[120px] text-center lg:border-r border-gray-200 lg:pr-12">
                       <span className="text-6xl font-display font-black text-on-surface leading-none mb-2">{event.date}</span>
                       <span className="text-sm font-black uppercase tracking-[0.3em] text-primary">{event.month}</span>
                       <span className="text-[10px] text-gray-400 font-bold mt-2">2025</span>
                    </div>

                    {/* Image Block */}
                    <div className="relative w-full lg:w-[400px] aspect-video overflow-hidden rounded-[2rem]">
                       <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" 
                       />
                       <div className="absolute top-6 left-6">
                          <span className="px-4 py-2 bg-on-surface/80 backdrop-blur-md rounded-full text-[9px] font-black text-white uppercase tracking-widest">
                            {event.type}
                          </span>
                       </div>
                    </div>

                    {/* Info Block */}
                    <div className="flex-grow">
                       <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                          <div className="flex items-center gap-2">
                             <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             {event.time}
                          </div>
                          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                          <div className="flex items-center gap-2">
                             <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                             {event.location}
                          </div>
                       </div>
                       <h3 className="text-3xl font-display font-bold text-on-surface mb-6 group-hover:text-primary transition-colors">
                         {event.title}
                       </h3>
                       <p className="text-sm text-on-surface-variant opacity-60 font-body leading-relaxed mb-10 max-w-2xl">
                         {event.caption} Join us for an immersive experience that celebrates university culture and academic excellence.
                       </p>
                       <Link 
                        to={`/event/${event.id}`} 
                        className="inline-flex items-center gap-4 px-8 py-4 bg-on-surface text-white rounded-2xl font-bold text-xs uppercase tracking-widest group-hover:bg-primary transition-all duration-300"
                       >
                         Secure Your Spot
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                       </Link>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Venue Partners & Infrastructure */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
               <div className="lg:w-1/2">
                  <h2 className="text-4xl font-display font-bold mb-8">Our Venues</h2>
                  <p className="text-gray-500 font-body leading-relaxed mb-12">
                     From high-tech auditoriums to open-air theaters, our campus offers diverse spaces designed for every kind of gathering.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                     {[
                       { name: "Main Auditorium", cap: "1200+ Seats" },
                       { name: "Innovation Hub", cap: "400+ Seats" },
                       { name: "Open Theatre", cap: "3000+ Seats" },
                       { name: "Seminar Halls", cap: "150+ Seats" }
                     ].map((v, i) => (
                       <div key={i} className="border-l border-primary/20 pl-6">
                          <h4 className="text-sm font-black uppercase tracking-widest text-on-surface">{v.name}</h4>
                          <span className="text-[10px] text-gray-400 font-bold">{v.cap}</span>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                  <div className="aspect-[4/5] rounded-[2rem] bg-gray-100 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1517457373958-b7bddde58a4e?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="aspect-[4/5] rounded-[2rem] bg-gray-100 overflow-hidden mt-12">
                     <img src="https://images.unsplash.com/photo-1475721027185-395efcc2875b?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Attendee FAQ */}
      <section className="py-32 bg-[#F8FAFC]">
         <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-display font-bold text-center mb-16">Plan Your Visit</h2>
            <div className="space-y-6">
               {[
                 { q: "How do I register for an event?", a: "Most events can be registered through the individual event pages. Some workshops may require internal department approval." },
                 { q: "Is there guest parking available?", a: "Yes, dedicated visitor parking is available at the North and South gates. Please bring your registration confirmation." },
                 { q: "Are events open to the public?", a: "While many are public, some technical symposiums and placement drives are exclusive to PKDAS students and alumni." }
               ].map((faq, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all">
                    <h4 className="text-sm font-black text-on-surface mb-3 flex items-center gap-4">
                       <span className="text-primary font-display font-black text-lg">0{i+1}</span>
                       {faq.q}
                    </h4>
                    <p className="text-xs text-gray-400 font-body leading-relaxed pl-10">{faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Host an Event CTA */}
      <section className="py-40 bg-gray-50">
         <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
               <div className="flex-grow">
                  <h2 className="text-4xl font-display font-bold mb-6">Have an event in mind?</h2>
                  <p className="text-gray-500 font-body leading-relaxed mb-10">
                    Our campus is home to world-class venues and a vibrant audience. Partner with us to host your next masterpiece.
                  </p>
                  <Link to="/contact" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-on-surface transition-colors flex items-center gap-4">
                     Host with PKDAS
                     <span className="w-12 h-[1px] bg-primary"></span>
                  </Link>
               </div>
               <div className="w-full md:w-80 aspect-square rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="" />
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Events;
