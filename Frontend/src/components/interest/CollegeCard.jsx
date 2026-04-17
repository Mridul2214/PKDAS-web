import React from 'react';

export function CollegeCard({ inst, gradient }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-black/[0.06] hover:border-[#0145F2]/20 bg-[#EDF1F5] hover:shadow-2xl hover:shadow-[#0145F2]/10 transition-all duration-500 cursor-pointer hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={inst.img}
          alt={inst.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <span className="absolute top-3 right-3 text-[10px] font-bold text-white bg-black/30 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
          {inst.location}
        </span>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-display font-semibold text-on-surface mb-4 leading-snug group-hover:text-[#0145F2] transition-colors duration-300">
          {inst.name}
        </h3>

        <h4 className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold mb-3">Programs Offered</h4>
        <ul className="space-y-2">
          {inst.programs.map((prog, i) => (
            <li key={i} className="flex items-start text-sm font-body text-on-surface-variant/80 leading-relaxed">
              <span className="text-[#0145F2] mr-2 mt-0.5 flex-shrink-0">▸</span>
              {prog}
            </li>
          ))}
        </ul>

        {/* Discipline tags */}
        <div className="mt-5 pt-4 border-t border-black/5 flex flex-wrap gap-2">
          {inst.disciplines.slice(0, 3).map((d, i) => (
            <span key={i} className="text-[10px] font-bold text-on-surface-variant/70 bg-white px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {d}
            </span>
          ))}
          {inst.disciplines.length > 3 && (
            <span className="text-[10px] font-bold text-on-surface-variant/70 bg-white px-2.5 py-1 rounded-full shadow-sm">
              +{inst.disciplines.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
