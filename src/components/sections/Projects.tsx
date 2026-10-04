import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { featuredProjects } from '../../data/portfolioData';
import { Github, ShieldAlert, TrendingUp, Layers, CheckCircle, ChevronRight, Activity, Terminal } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedArchLayer, setSelectedArchLayer] = useState<number | null>(null);

  const flagship = featuredProjects.find(p => p.id === 'ai-career-agent');
  const otherProjects = featuredProjects.filter(p => p.id !== 'ai-career-agent');

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="FEATURED PROJECTS"
          title="Engineered AI Systems & Machine Learning Pipelines"
          description="Real-world projects showcasing agentic workflows, imbalanced classification, leakage-safe time-series pipelines, and explainable models."
        />

        {/* FLAGSHIP PROJECT: AI Career Agent */}
        {flagship && (
          <div className="mb-14">
            <div className="glass-card rounded-3xl border border-cyan-500/30 p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl shadow-cyan-950/20">
              
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-8">
                
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
                        {flagship.featuredBadge}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800">
                        {flagship.year}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800">
                        {flagship.type}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                      {flagship.title}
                    </h3>
                    <p className="text-sm sm:text-base text-cyan-300 font-medium">
                      {flagship.subtitle}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {flagship.githubUrl && (
                      <a
                        href={flagship.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 text-white font-mono text-xs transition-all shadow-sm group"
                      >
                        <Github className="w-4 h-4 text-cyan-400" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Main Content Grid: Description & Highlights */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Description & Technical highlights */}
                  <div className="lg:col-span-7 space-y-5">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {flagship.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        <span>Technical Capabilities & Architecture</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {flagship.technicalHighlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Technologies Used
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {flagship.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-950 border border-slate-800 text-slate-300 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Architecture Layer Breakdown Widget */}
                  <div className="lg:col-span-5 bg-dark-950/80 border border-slate-800/90 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                        <Layers className="w-4 h-4" />
                        <span>Layered Architecture</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">Click layer for details</span>
                    </div>

                    <div className="space-y-2">
                      {flagship.architectureLayers?.map((layer, idx) => {
                        const isSelected = selectedArchLayer === idx;
                        return (
                          <button
                            key={layer.name}
                            onClick={() => setSelectedArchLayer(isSelected ? null : idx)}
                            className={`w-full text-left p-3 rounded-xl border transition-all ${
                              isSelected
                                ? 'bg-cyan-950/40 border-cyan-500/50 shadow-sm'
                                : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded bg-slate-800 border border-slate-700 text-cyan-400 text-[10px] font-mono flex items-center justify-center font-bold">
                                  0{idx + 1}
                                </span>
                                <span className="text-xs font-semibold text-white">
                                  {layer.name}
                                </span>
                              </div>
                              <ChevronRight className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isSelected ? 'rotate-90 text-cyan-400' : ''}`} />
                            </div>
                            {isSelected && (
                              <p className="mt-2 pt-2 border-t border-slate-800/60 text-xs text-slate-300 leading-relaxed font-mono">
                                {layer.details}
                              </p>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* PROJECTS 2 & 3: Two-Column Grid with Exact Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {otherProjects.map((project) => {
            const isFraud = project.id === 'fraud-detection';
            const Icon = isFraud ? ShieldAlert : TrendingUp;

            return (
              <div
                key={project.id}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-800/90 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-slate-400">{project.year}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-xs font-mono text-slate-400">{project.type}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mt-0.5">
                          {project.title}
                        </h4>
                      </div>
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                      aria-label="GitHub repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs font-medium text-cyan-300 -mt-2">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Rigorous Benchmark Metrics Grid */}
                  {project.metrics && (
                    <div className="bg-dark-950/80 rounded-2xl border border-slate-800/80 p-4 space-y-3">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Empirical Evaluation Metrics</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="bg-slate-900/60 rounded-xl p-2.5 border border-slate-800/80 text-center">
                            <div className="text-base sm:text-lg font-mono font-bold text-white">
                              {m.value}
                            </div>
                            <div className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights list */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Key Highlights
                    </div>
                    <ul className="space-y-1.5">
                      {project.technicalHighlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-cyan-400 mt-0.5">•</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Tech Stack Pills at Bottom */}
                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-950 border border-slate-800/80 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
