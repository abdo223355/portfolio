import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { currentlyBuilding } from '../../data/portfolioData';
import { Hammer, Clock, Terminal, CheckCircle2 } from 'lucide-react';

export const CurrentlyBuilding: React.FC = () => {
  return (
    <section id="currently-building" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="R&D ROADMAP"
          title="Currently Building & Active Exploration"
          description="Active engineering initiatives and ongoing research projects under active development. These represent ongoing work and technical exploration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentlyBuilding.map((item) => {
            const isInProgress = item.status === 'In Progress';

            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Subtle top indicator bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${
                  isInProgress 
                    ? 'bg-gradient-to-r from-amber-500/80 via-cyan-500/80 to-blue-500/80' 
                    : 'bg-gradient-to-r from-violet-500/60 to-purple-500/60'
                }`} />

                <div className="space-y-4">
                  
                  {/* Status header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-dark-950 border border-slate-800 flex items-center justify-center text-slate-300">
                        {isInProgress ? <Hammer className="w-4 h-4 text-amber-400" /> : <Clock className="w-4 h-4 text-violet-400" />}
                      </span>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                    </div>

                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${
                      isInProgress
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                        : 'bg-violet-500/10 text-violet-300 border-violet-500/30'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isInProgress ? 'bg-amber-400 animate-pulse' : 'bg-violet-400'}`} />
                      {item.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        <span>Scope & Key Focus</span>
                      </div>
                      <ul className="space-y-1.5">
                        {item.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

                {/* Tags */}
                <div className="pt-5 mt-5 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-950 border border-slate-800 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
