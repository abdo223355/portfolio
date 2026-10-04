import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { skillCategories } from '../../data/portfolioData';
import { Search, Code2, Database, BrainCircuit, Bot, Cloud, Users, Sparkles } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'programming': <Code2 className="w-4 h-4" />,
  'ml-ds': <Database className="w-4 h-4" />,
  'dl-nlp': <BrainCircuit className="w-4 h-4" />,
  'genai-agents': <Bot className="w-4 h-4" />,
  'cloud-mlops': <Cloud className="w-4 h-4" />,
  'soft-skills': <Users className="w-4 h-4" />
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter skills according to active tab and query
  const filteredCategories = skillCategories.map(cat => {
    const isMatchingTab = activeTab === 'all' || activeTab === cat.id;
    if (!isMatchingTab) return null;

    const matchingSkills = cat.skills.filter(s =>
      s.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery.trim() && matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: searchQuery.trim() ? matchingSkills : cat.skills
    };
  }).filter(Boolean) as typeof skillCategories;

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="TECHNICAL ARSENAL"
          title="Skills & Engineering Competencies"
          description="A structured breakdown of core programming, machine learning foundations, agentic frameworks, and deployment technologies."
        />

        {/* Tab Selection & Search Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium font-mono whitespace-nowrap transition-all ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-dark-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-dark-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium font-mono whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-cyan-500 text-dark-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-dark-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {categoryIcons[cat.id]}
                  <span>{cat.title.split('&')[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. PyTorch, RAG)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-dark-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    {categoryIcons[category.id] || <Sparkles className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {category.title}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-dark-950 border border-slate-800/90 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
