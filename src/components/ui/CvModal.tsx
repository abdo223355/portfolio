import React from 'react';
import { FileText, Download, X, AlertCircle } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Direct download trigger
    const link = document.createElement('a');
    link.href = personalData.cvUrl;
    link.download = personalData.cvFileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-dark-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Curriculum Vitae</h3>
            <p className="text-xs font-mono text-slate-400">{personalData.name}</p>
          </div>
        </div>

        <div className="bg-dark-950 border border-slate-800 rounded-xl p-4 mb-5 text-sm text-slate-300 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
            <span>File Name</span>
            <span className="text-slate-200">{personalData.cvFileName}</span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
            <span>Specialization</span>
            <span className="text-cyan-400">AI Engineer</span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Configured Path</span>
            <span className="text-slate-300 font-mono text-[11px]">{personalData.cvUrl}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleDownload}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-dark-950 font-semibold text-sm rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
          
          <div className="flex items-start gap-2 text-[11px] text-slate-400 bg-slate-800/40 p-2.5 rounded-lg border border-slate-800">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>To update the CV file, place your PDF in the <code className="text-cyan-300 bg-dark-950 px-1 py-0.5 rounded">public/cv.pdf</code> directory or configure the path in <code className="text-cyan-300 bg-dark-950 px-1 py-0.5 rounded">portfolioData.ts</code>.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
