import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  alignment = 'center'
}) => {
  const isCenter = alignment === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-slate-800/80 border border-slate-700/60 text-cyan-400 mb-4 shadow-sm`}>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
        {badge}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
