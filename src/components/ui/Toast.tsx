import React from 'react';
import { Check, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-slate-900/95 border border-cyan-500/40 text-white text-sm font-mono rounded-xl shadow-2xl backdrop-blur-md animate-fade-in">
      <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
        <Check className="w-3.5 h-3.5" />
      </div>
      <span>{message}</span>
      <button 
        onClick={onClose}
        className="text-slate-400 hover:text-white transition-colors ml-2"
        aria-label="Close alert"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
