import React from 'react';
import { Github, Linkedin, Mail, Terminal, ArrowUp } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-850">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-white">{personalData.name}</span>
            </div>
            <p className="text-slate-400 text-xs md:text-sm max-w-md leading-relaxed">
              AI Engineer focused on turning machine learning and deep learning models into practical, modular, and observable agentic systems.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
              <span>Based in {personalData.location} • Available for AI Engineering & Trainee Roles</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About & Trajectory</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a></li>
              <li><a href="#currently-building" className="hover:text-cyan-400 transition-colors">Currently Building</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills & Tech Stack</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience Timeline</a></li>
              <li><a href="#education" className="hover:text-cyan-400 transition-colors">Education & Degrees</a></li>
              <li><a href="#certificates" className="hover:text-cyan-400 transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Connect
            </div>
            <div className="flex flex-col space-y-2.5 text-xs">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors group"
              >
                <Github className="w-4 h-4 group-hover:text-cyan-400" />
                <span>github.com/abdo223355</span>
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors group"
              >
                <Linkedin className="w-4 h-4 group-hover:text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-cyan-400" />
                <span>{personalData.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Built with React, TypeScript & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
