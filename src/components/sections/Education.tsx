import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { education } from '../../data/portfolioData';
import { GraduationCap, Award, MapPin, Calendar, BookOpen, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="ACADEMIC FOUNDATION"
          title="Education & Formal Study"
          description="Rigorous academic training in artificial intelligence, computational mathematics, data structures, and statistical machine learning."
        />

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-6 sm:p-9 border border-slate-800 relative overflow-hidden shadow-xl">
            
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {education.degree}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-300 mt-1">
                      {education.institution}
                    </p>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">
                      {education.faculty}
                    </p>
                  </div>
                </div>

                {/* GPA Badge */}
                <div className="flex flex-col items-start md:items-end gap-1 bg-dark-950/80 p-3.5 rounded-2xl border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>Cumulative GPA</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">
                    {education.gpa}
                  </div>
                </div>
              </div>

              {/* Meta Info row */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 bg-dark-950 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{education.graduationYear}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-dark-950 px-3 py-1.5 rounded-lg border border-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{education.location}</span>
                </div>
              </div>

              {/* Core Disciplines */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Core Academic Disciplines</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {education.coreDisciplines.map((discipline, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{discipline}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
