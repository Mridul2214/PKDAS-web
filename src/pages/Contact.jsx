import React from 'react';
import { Button } from '../components/Button';

export function Contact() {
  return (
    <main className="pt-32 pb-24 bg-surface min-h-[80vh]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-display-lg md:text-7xl font-display text-on-surface mb-16">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="flex items-start">
              <span className="w-1.5 h-1.5 mt-2 bg-primary mr-4 block"></span>
              <div>
                <h2 className="text-xl font-display text-on-surface mb-2 font-medium">Address</h2>
                <p className="text-lg font-body text-on-surface-variant leading-relaxed">
                  Nehru Gardens, Thirumalayam Palayam,<br />Coimbatore – 641105
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="w-1.5 h-1.5 mt-2 bg-primary mr-4 block"></span>
              <div>
                <h2 className="text-xl font-display text-on-surface mb-2 font-medium">Phone</h2>
                <p className="text-lg font-body text-on-surface-variant mt-1.5">
                  <span className="font-semibold block mb-1 text-primary">Hotline:</span> +91 887 000 5337
                </p>
                <p className="text-lg font-body text-on-surface-variant mt-3">
                  <span className="font-semibold block mb-1 text-primary">Admissions:</span> +91 73589 99256
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="w-1.5 h-1.5 mt-2 bg-primary mr-4 block"></span>
              <div>
                <h2 className="text-xl font-display text-on-surface mb-2 font-medium">Email</h2>
                <p className="text-lg font-body text-primary hover:underline cursor-pointer">
                  nascoffice@nehrucolleges.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-10 border border-surface-container shadow-sm">
            <h2 className="text-2xl font-display text-on-surface mb-8">Send an Inquiry</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-on-surface-variant font-display uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-on-surface-variant/30 py-3 text-on-surface font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-on-surface-variant font-display uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-on-surface-variant/30 py-3 text-on-surface font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-on-surface-variant font-display uppercase tracking-widest">Message</label>
                <textarea 
                  className="w-full bg-transparent border-b border-on-surface-variant/30 py-3 text-on-surface font-body focus:outline-none focus:border-primary transition-colors resize-none h-24"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full outline-none text-center justify-center">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
