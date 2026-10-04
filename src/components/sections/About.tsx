import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { personalData } from '../../data/portfolioData';
import { Layers, Terminal, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="ABOUT & TRAJECTORY"
          title="Bridging Statistical Models & Autonomous Agent Workflows"
          description="Developing reliable, end-to-end AI software systems through structured engineering, clean data pipelines, and observable agent orchestration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Bio & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 md:p-8 space-y-5 border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Engineering Mindset</h3>
                  <p className="text-xs font-mono text-cyan-400">Practical AI Systems</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                {personalData.detailedBio.map((paragraph, idx) => (
                  <p key={idx}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Tenet Callout */}
              <div className="bg-dark-950/70 border border-slate-800/80 rounded-xl p-4 text-xs font-mono text-slate-300 space-y-2">
                <div className="text-cyan-400 font-semibold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Primary Guiding Principle</span>
                </div>
                <p className="text-slate-400 text-xs leading-normal">
                  "I build practical AI systems, not just machine-learning notebooks — ensuring every model is backed by disciplined validation, clear interfaces, and observability."
                </p>
              </div>
            </div>

            {/* Quick stats / Highlights from CV */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4 border border-slate-800/80">
                <div className="text-2xl font-bold text-white font-mono">3.4<span className="text-xs text-slate-500 font-normal"> / 4.0</span></div>
                <div className="text-xs text-slate-400 mt-1">Beni-Suef University GPA</div>
              </div>
              <div className="glass-card rounded-xl p-4 border border-slate-800/80">
                <div className="text-2xl font-bold text-cyan-400 font-mono">3+</div>
                <div className="text-xs text-slate-400 mt-1">Intensive Trainee Programs</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Stage Technical Progression */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Technical Evolution & Progression</span>
            </div>

            <div className="space-y-4">
              {personalData.progressionPhases.map((phase) => (
                <div 
                  key={phase.phase} 
                  className="glass-card glass-card-hover rounded-xl p-5 border border-slate-800/90 relative overflow-hidden group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                        PHASE {phase.phase}
                      </span>
                      <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {phase.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-3">
                    {phase.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {phase.technologies.map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-950/60 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
