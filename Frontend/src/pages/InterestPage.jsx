import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useInterestData } from '../hooks/useInterestData';
import { CollegeCard } from '../components/interest/CollegeCard';

export function InterestPage() {
  const { slug } = useParams();
  const { meta, matched, tnColleges, klColleges } = useInterestData(slug);

  // Scroll to top when Navigating via slug
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <main className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="bg-[#EDF1F5] pt-10 pb-16">
        <div className="container mx-auto px-6">
          <Link to="/#interests" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface text-sm font-body mb-8 transition-colors group">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-on-surface leading-tight">
                {meta.label}
              </h1>
              <p className="text-on-surface-variant font-body text-lg mt-1">
                {matched.length} institution{matched.length !== 1 ? 's' : ''} offering programs in this field
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-6 py-16">
        {matched.length === 0 ? (
          <div className="text-center py-32">
            <div className="text-6xl mb-6">🔍</div>
            <h2 className="text-2xl font-display text-on-surface mb-3">No institutions found</h2>
            <p className="text-on-surface-variant font-body mb-8">We're working on adding programs in this discipline.</p>
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
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-on-surface whitespace-nowrap">Tamil Nadu</h2>
                  <div className="h-px bg-black/5 flex-grow"></div>
                  <span className="text-sm font-body text-on-surface-variant/60 tracking-widest uppercase">{tnColleges.length} campuses</span>
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
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-on-surface whitespace-nowrap">Kerala</h2>
                  <div className="h-px bg-black/5 flex-grow"></div>
                  <span className="text-sm font-body text-on-surface-variant/60 tracking-widest uppercase">{klColleges.length} campuses</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {klColleges.map((inst, idx) => (
                    <CollegeCard key={idx} inst={inst} gradient={meta.gradient} />
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="mt-16 text-center py-16 border-t border-black/5">
              <h3 className="text-2xl md:text-3xl font-display text-on-surface mb-4">Interested in {meta.label}?</h3>
              <p className="text-on-surface-variant font-body mb-8 max-w-lg mx-auto">
                Get in touch with our admissions team to learn more about programs, eligibility, and scholarships.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link to="/contact" className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                  Apply Now
                </Link>
                <Link to="/courses" className="px-8 py-3 border border-black/10 text-on-surface font-semibold rounded-full hover:bg-black/5 transition-all">
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
