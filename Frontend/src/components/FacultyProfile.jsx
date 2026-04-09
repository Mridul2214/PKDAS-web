import React from 'react';

export function FacultyProfile({ name, title, imageUrl }) {
  return (
    <div className="flex items-center gap-6 group mb-12">
      <div className="w-24 h-24 rounded-full overflow-hidden ghost-border p-1 group-hover:border-primary/30 transition-colors duration-500">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-medium text-on-surface font-body">{name}</h4>
        <span className="text-sm text-outline-variant font-body">{title}</span>
      </div>
    </div>
  );
}
