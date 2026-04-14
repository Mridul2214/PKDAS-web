import React from 'react';

export function Contact() {
  return (
    <main className="bg-surface pb-0 overflow-hidden">
      
      {/* Premium Editorial Hero */}
      <section className="relative pt-48 pb-40 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(1,69,242,0.15)_0%,transparent_60%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <h1 className="text-display-lg md:text-8xl font-display text-white leading-tight tracking-tighter mb-8 italic">
              Let's Start a <br /> <span className="text-primary italic">Conversation</span>
            </h1>
            <p className="text-xl md:text-2xl font-display text-white/50 max-w-2xl leading-relaxed italic">
              Reach out to our admissions office, academic coordinators, or international partnerships desk. We're here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="bg-white py-40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

            {/* Left: Contact Info */}
            <div>
              <h2 className="text-4xl font-display text-on-surface mb-16 italic">Find Us</h2>
              
              <div className="space-y-12">
                {[
                  {
                    label: "Campus Address",
                    content: "Nehru Gardens, Thirumalayam Palayam,\nCoimbatore – 641105, Tamil Nadu, India",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  },
                  {
                    label: "Admissions Hotline",
                    content: "+91 887 000 5337\n+91 73589 99256",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )
                  },
                  {
                    label: "Official Email",
                    content: "nascoffice@nehrucolleges.com\nadmissions@pkdas.edu.in",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )
                  }
                ].map((info, idx) => (
                  <div key={idx} className="flex items-start space-x-8 group">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">{info.label}</div>
                      <div className="text-xl font-display text-on-surface leading-relaxed italic whitespace-pre-line opacity-80">
                        {info.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Inquiry Form */}
            <div className="bg-[#EDF1F5] p-12 rounded-[3rem]">
              <h2 className="text-4xl font-display text-on-surface mb-12 italic">Send an Inquiry</h2>
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                {[
                  { label: "Full Name", type: "text", placeholder: "Your full name" },
                  { label: "Email", type: "email", placeholder: "your@email.com" },
                  { label: "Phone Number", type: "tel", placeholder: "+91 00000 00000" }
                ].map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-3">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-white border border-black/5 rounded-2xl px-8 py-5 font-display text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-on-surface-variant/30 placeholder:italic italic"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-3">
                    Message
                  </label>
                  <textarea
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full bg-white border border-black/5 rounded-2xl px-8 py-5 font-display text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none placeholder:text-on-surface-variant/30 placeholder:italic italic"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-widest hover:bg-on-surface transition-all duration-500 shadow-xl shadow-primary/20 hover:shadow-none"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Embed Placeholder */}
      <section className="h-[500px] bg-[#EDF1F5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,69,242,0.05)_0%,transparent_70%)] flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-3xl font-display text-on-surface italic mb-4">Nehru Gardens, Coimbatore</h3>
            <a
              href="https://maps.google.com/?q=Nehru+Gardens+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest hover:bg-on-surface transition-all duration-500"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
