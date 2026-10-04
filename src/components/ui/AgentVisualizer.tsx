import React, { useState } from 'react';
import { Bot, Database, Cpu, Terminal, ArrowDown, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

export const AgentVisualizer: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<'memory' | 'retrieval' | 'tools' | 'all'>('all');

  return (
    <div className="w-full max-w-lg mx-auto bg-dark-900/90 rounded-2xl border border-slate-800/80 p-5 md:p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Subtle background glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-slate-400 font-semibold">AGENT ARCHITECTURE</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300 text-[11px]">
          <Activity className="w-3 h-3 text-cyan-400" />
          <span>Stateful Graph</span>
        </div>
      </div>

      {/* Visual Flow Pipeline */}
      <div className="flex flex-col items-center space-y-3 relative z-10">
        
        {/* Step 1: Input Query */}
        <div className="w-full bg-dark-850 border border-slate-800 rounded-xl p-3 flex items-center justify-between hover:border-slate-700 transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Input Stream</div>
              <div className="text-xs font-mono text-slate-200 font-medium">User Prompt & Intent Payload</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">JSON In</span>
        </div>

        {/* Down Arrow */}
        <div className="flex items-center justify-center text-slate-500 py-0.5">
          <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400/70" />
        </div>

        {/* Step 2: Agent Orchestrator */}
        <div className="w-full bg-gradient-to-r from-slate-900 via-dark-850 to-slate-900 border border-cyan-500/30 rounded-xl p-3.5 shadow-lg shadow-cyan-950/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">Agent Router / Orchestrator</div>
                <div className="text-xs font-semibold text-white">LangGraph State Machine</div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-violet-300 bg-violet-950/60 px-2 py-0.5 rounded border border-violet-800/40">Multi-Agent</span>
          </div>
        </div>

        {/* Branch Connectors */}
        <div className="w-full grid grid-cols-3 gap-2 pt-1 text-center">
          
          {/* Branch 1: Memory */}
          <button
            onClick={() => setActiveBranch('memory')}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              activeBranch === 'memory' || activeBranch === 'all'
                ? 'bg-slate-850/90 border-cyan-500/40 shadow-sm'
                : 'bg-dark-900/50 border-slate-800 opacity-60'
            }`}
          >
            <div className="w-6 h-6 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-1.5">
              <Database className="w-3 h-3" />
            </div>
            <div className="text-[11px] font-semibold text-slate-200">Memory</div>
            <div className="text-[10px] font-mono text-slate-400">State & History</div>
          </button>

          {/* Branch 2: Retrieval */}
          <button
            onClick={() => setActiveBranch('retrieval')}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              activeBranch === 'retrieval' || activeBranch === 'all'
                ? 'bg-slate-850/90 border-violet-500/40 shadow-sm'
                : 'bg-dark-900/50 border-slate-800 opacity-60'
            }`}
          >
            <div className="w-6 h-6 rounded bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-1.5">
              <Cpu className="w-3 h-3" />
            </div>
            <div className="text-[11px] font-semibold text-slate-200">Retrieval</div>
            <div className="text-[10px] font-mono text-slate-400">RAG & Embeds</div>
          </button>

          {/* Branch 3: Tools */}
          <button
            onClick={() => setActiveBranch('tools')}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              activeBranch === 'tools' || activeBranch === 'all'
                ? 'bg-slate-850/90 border-emerald-500/40 shadow-sm'
                : 'bg-dark-900/50 border-slate-800 opacity-60'
            }`}
          >
            <div className="w-6 h-6 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-1.5">
              <Terminal className="w-3 h-3" />
            </div>
            <div className="text-[11px] font-semibold text-slate-200">Tools / MCP</div>
            <div className="text-[10px] font-mono text-slate-400">SQL & APIs</div>
          </button>
        </div>

        {/* Down Arrow to Observability & Output */}
        <div className="flex items-center justify-center text-slate-500 py-0.5">
          <ArrowDown className="w-4 h-4 text-violet-400/70" />
        </div>

        {/* Step 3: Observability & Output */}
        <div className="w-full bg-dark-850 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Validated Execution</div>
              <div className="text-xs font-mono text-slate-200 font-medium">LangSmith Traced Output</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">Verified</span>
        </div>

      </div>

      {/* Footer system note */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="truncate">Observable • Modular • Stateful</span>
        <button 
          onClick={() => setActiveBranch('all')}
          className="text-cyan-400 hover:underline flex-shrink-0 ml-2 text-[10px]"
        >
          Reset View
        </button>
      </div>
    </div>
  );
};
