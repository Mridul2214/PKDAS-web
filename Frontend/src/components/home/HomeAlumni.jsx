import React from 'react';

export const HomeAlumni = ({ alumniReviews, activeAlumni, setActiveAlumni }) => {
  return (
    <section className="relative z-[20] py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="gsap-reveal text-4xl md:text-5xl font-display font-bold text-on-surface mb-6">
            Voices of our <span className="text-amber-500 font-cursive text-5xl">Alumni</span>
          </h2>
          <p className="gsap-reveal text-on-surface-variant font-body text-lg">
            Hear from our graduates who are making an impact across the globe.
          </p>
        </div>
      </div>

      {/* Alumni Desktop Marquee (Visible on sm and up) */}
      <div className="hidden sm:flex relative overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-8 py-4">
          {[...Array(2)].flatMap(() => alumniReviews).map((review, i) => (
            <div key={i} className="w-[400px] flex-shrink-0 bg-white border border-primary/10 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <h4 className="text-on-surface font-display font-bold text-lg">{review.name}</h4>
                  <p className="text-primary text-sm font-body">Class of {review.batch} • {review.dept}</p>
                </div>
              </div>
              <p className="text-on-surface-variant font-body leading-relaxed text-balance whitespace-normal italic">
                "{review.text}"
              </p>
              <div className="mt-6 flex text-blue-400 gap-1 text-xs">
                {Array(5).fill(0).map((_, iconIdx) => (
                  <svg key={iconIdx} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:hidden relative z-10">
        <button 
          onClick={() => setActiveAlumni((prev) => (prev - 1 + alumniReviews.length) % alumniReviews.length)}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-primary border border-primary/5 active:scale-90 transition-all"
          aria-label="Previous Testimonial"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button 
          onClick={() => setActiveAlumni((prev) => (prev + 1) % alumniReviews.length)}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-primary border border-primary/5 active:scale-90 transition-all"
          aria-label="Next Testimonial"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
        </button>

        <div className="overflow-hidden px-6">
          <div 
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${activeAlumni * 100}%)` }}
          >
          {alumniReviews.map((review, i) => (
            <div key={i} className="w-full flex-shrink-0 px-2 transition-all duration-300">
              <div className="bg-white border border-primary/10 p-6 rounded-[1.5rem] shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" />
                  <div>
                    <h4 className="text-on-surface font-display font-bold text-base leading-tight">{review.name}</h4>
                    <p className="text-primary text-[10px] font-body">Class of {review.batch} | {review.dept}</p>
                  </div>
                </div>
                <p className="text-on-surface-variant font-body leading-relaxed text-sm italic">
                  "{review.text}"
                </p>
                <div className="mt-4 flex text-blue-400 gap-0.5 text-[10px]">
                  {Array(5).fill(0).map((_, iconIdx) => (
                    <svg key={iconIdx} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Page Indicators */}
      <div className="flex sm:hidden justify-center gap-2 mt-6">
        {alumniReviews.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeAlumni ? 'w-6 bg-primary' : 'w-1.5 bg-primary/20'}`}
          ></div>
        ))}
      </div>
    </div>
    </section>
  );
};
