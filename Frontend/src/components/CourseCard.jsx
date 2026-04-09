import React from 'react';

export function CourseCard({ category, title, description }) {
  return (
    <div className="bg-surface-container-lowest rounded-lg p-8 transition-colors duration-300 hover:bg-surface-container-highest flex flex-col gap-4">
      {/* Label Chip */}
      <span className="self-start px-3 py-1 bg-tertiary/10 text-tertiary-fixed-dim text-xs font-semibold uppercase tracking-wider rounded-full">
        {category}
      </span>
      
      {/* Typography Overrides (Noto Serif for Title) */}
      <h3 className="font-display text-2xl text-on-surface">
        {title}
      </h3>
      
      {/* Works Sans for Description */}
      <p className="text-on-surface/80 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
