import React from 'react';
import { Button } from '../components/Button';

export function Admissions() {
  return (
    <main className="pb-32">
      <section className="bg-surface-container-low py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-display text-primary mb-4">Admissions Setup</h1>
          <p className="text-xl font-body text-on-surface-variant max-w-2xl">
            Join a community of scholars and innovators. Follow the comprehensive guide below to start your journey.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Steps */}
          <div className="lg:w-1/2 space-y-12">
            <div>
              <h3 className="text-2xl font-display text-primary flex items-center gap-4">
                <span className="text-4xl text-secondary">01</span> Review Requirements
              </h3>
              <p className="mt-4 text-on-surface-variant font-body">Ensure you meet the academic criteria for your chosen program, and prepare your transcripts and identification documents.</p>
            </div>
            <div>
              <h3 className="text-2xl font-display text-primary flex items-center gap-4">
                <span className="text-4xl text-secondary">02</span> Submit Application
              </h3>
              <p className="mt-4 text-on-surface-variant font-body">Fill out the detailed inquiry form. Choose your primary and secondary program of interest.</p>
            </div>
            <div>
              <h3 className="text-2xl font-display text-primary flex items-center gap-4">
                <span className="text-4xl text-secondary">03</span> Faculty Interview
              </h3>
              <p className="mt-4 text-on-surface-variant font-body">Selected candidates will be invited for an academic review session with the department heads.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-10 rounded-xl shadow-ambient">
              <h3 className="text-3xl font-display text-primary mb-8">Begin Your Inquiry</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface uppercase tracking-wide">Full Name</label>
                  <input type="text" className="w-full bg-surface-container-low p-3 outline-none focus:border-b-2 focus:border-primary transition-all duration-300" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface uppercase tracking-wide">Email Address</label>
                  <input type="email" className="w-full bg-surface-container-low p-3 outline-none focus:border-b-2 focus:border-primary transition-all duration-300" placeholder="scholar@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface uppercase tracking-wide">Program of Interest</label>
                  <select className="w-full bg-surface-container-low p-3 outline-none focus:border-b-2 focus:border-primary transition-all duration-300">
                    <option>Select a program...</option>
                    <option>Humanities & Arts</option>
                    <option>Sciences & Tech</option>
                    <option>Commerce & Management</option>
                  </select>
                </div>
                <div className="pt-4">
                  <Button variant="primary" className="w-full">Submit Application</Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
