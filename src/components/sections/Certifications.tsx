import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { certifications, languages } from '../../data/portfolioData';
import { Award, ExternalLink, Globe2, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certificates" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="CREDENTIALS & PROFICIENCY"
          title="Certifications & Languages"
          description="Verified industry coursework and multilingual communication capabilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-8 space-y-6">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Verified Professional Certifications</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800/80 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-semibold text-cyan-300 mt-1">
                        {cert.issuer}
                      </p>
                      <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                        Year: {cert.year}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80">
                    {cert.verificationUrl ? (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                        <span>Certified • 2026</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Languages */}
          <div className="lg:col-span-4 space-y-6">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-2">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              <span>Language Proficiency</span>
            </div>

            <div className="space-y-4">
              {languages.map((lang) => (
                <div
                  key={lang.language}
                  className="glass-card rounded-2xl p-5 border border-slate-800/80 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">
                      {lang.language}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
                      {lang.proficiency}
                    </span>
                  </div>
                  {lang.nativeNote && (
                    <p className="text-xs font-mono text-slate-400">
                      {lang.nativeNote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
