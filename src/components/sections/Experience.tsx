import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { experiences } from '../../data/portfolioData';
import { Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="EXPERIENCE TIMELINE"
          title="Practical Training & Applied Programs"
          description="Hands-on trainee roles across cloud machine learning, data science pipelines, and intelligent agent applications."
        />

        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-slate-800" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-12 sm:pl-20 group">
                
                {/* Timeline Node Dot */}
                <div className="absolute left-2 sm:left-6 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:border-cyan-300 transition-all">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                {/* Experience Card */}
                <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-800/90 space-y-4">
                  
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h4>
                      <div className="text-sm font-medium text-cyan-400 mt-0.5">
                        {exp.organization}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="inline-flex items-center gap-1 bg-dark-950 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </span>
                      {exp.duration && (
                        <span className="inline-flex items-center gap-1 bg-dark-950 px-2.5 py-1 rounded-md border border-slate-800 text-amber-300">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          {exp.duration}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 bg-dark-950 px-2.5 py-1 rounded-md border border-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Responsibilities strictly from CV */}
                  <div className="space-y-2 pt-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-950/80 border border-slate-800 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
