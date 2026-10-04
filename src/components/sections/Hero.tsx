import React from 'react';
import { ArrowRight, FileDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalData } from '../../data/portfolioData';
import { AgentVisualizer } from '../ui/AgentVisualizer';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Calls to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Early-Career AI Engineer</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {personalData.location}
              </span>
            </div>

            {/* Headline Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {personalData.name}
              </h1>
              <div className="text-xl sm:text-2xl font-semibold text-gradient-accent">
                {personalData.title}
              </div>
            </div>

            {/* Core Focus Tech Tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300 pt-1">
              {personalData.focus.map((item, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CV Sourced Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personalData.summary}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-dark-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 active:scale-[0.98] group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-850 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 font-medium text-sm transition-all shadow-sm active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center gap-4 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Connect:</span>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-all text-slate-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-all text-slate-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-all text-slate-300"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: AI System Visualizer */}
          <div className="lg:col-span-5 flex justify-center">
            <AgentVisualizer />
          </div>

        </div>
      </div>
    </section>
  );
};
