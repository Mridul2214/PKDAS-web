import React from 'react';

const marqueeItems = [
  "🎓 Admissions Open 2026",
  "🏆 #1 Ranked Deemed University",
  "💼 100% Placement Assistance",
  "🔬 State-of-the-Art Research Labs",
  "🌍 Global Industry Partnerships",
  "📚 50+ Academic Programs",
  "🎯 Excellence in Education Since 1985",
  "💡 Innovation & Entrepreneurship Hub",
  "🏅 NAAC 'A++' Accredited",
  "🚀 Career Development Programs",
  "🌟 15,000+ Alumni Worldwide",
  "📊 95% Student Satisfaction Rate"
];

export function Marquee() {
  return (
    <div className="relative bg-gradient-to-r from-primary via-primary-dark to-primary overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set of items */}
        {marqueeItems.map((item, index) => (
          <span key={`first-${index}`} className="mx-8 text-white font-semibold text-lg inline-flex items-center gap-2">
            {item}
          </span>
        ))}
        {/* Duplicate set for seamless loop */}
        {marqueeItems.map((item, index) => (
          <span key={`second-${index}`} className="mx-8 text-white font-semibold text-lg inline-flex items-center gap-2">
            {item}
          </span>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
