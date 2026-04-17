import React from 'react';

export function CourseCard({ inst }) {
  return (
    <div className="gsap-stagger-child bg-[#EDF1F5] p-8 rounded-[2.5rem] border border-black/[0.03] flex flex-col h-full hover:shadow-2xl hover:shadow-[#0145F2]/10 transition-all duration-500 group">
      <div className="text-[10px] font-black text-[#0145F2] tracking-widest uppercase mb-4 py-1.5 px-4 bg-white rounded-full self-start shadow-sm">
        {inst.category}
      </div>
      <h3 className="text-2xl font-display font-medium text-on-surface mb-8 leading-snug group-hover:text-[#0145F2] transition-colors">
        {inst.title}
      </h3>
      
      <div className="mt-auto">
        <ul className="space-y-3 pt-6 border-t border-black/5">
          {inst.programs.map((prog, i) => (
            <li key={i} className="flex items-start text-on-surface-variant/80 font-body text-sm hover:text-on-surface transition-colors cursor-default leading-relaxed group/item">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0145F2]/40 mt-1.5 mr-3 group-hover/item:bg-[#0145F2] transition-colors"></div>
              {prog}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
