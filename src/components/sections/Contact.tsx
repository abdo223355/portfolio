import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { personalData } from '../../data/portfolioData';
import { Mail, Phone, Github, Linkedin, Copy, Check, Send, Sparkles } from 'lucide-react';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`Copied ${label} to clipboard: ${text}`);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${nameInput || 'Recruiter/Collaborator'}`);
    const body = encodeURIComponent(
      `Hi Abdelrahman,\n\n${messageInput}\n\nFrom: ${nameInput} (${emailInput || 'No email provided'})`
    );
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    onShowToast('Opening default email client...');
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's build something intelligent."
          description="Interested in AI, Machine Learning, LLMs, or Agentic AI systems? Let's connect."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (Includes Phone strictly here) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-xs sm:text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalData.email, 'Email')}
                className="p-2 rounded-lg bg-dark-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Copy email to clipboard"
              >
                {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card (Strictly displayed ONLY in Contact section) */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Phone & WhatsApp</div>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="text-xs sm:text-sm font-bold text-white hover:text-violet-300 transition-colors font-mono"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalData.phone, 'Phone number')}
                className="p-2 rounded-lg bg-dark-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Copy phone to clipboard"
              >
                {copiedField === 'Phone number' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* GitHub */}
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-4 border border-slate-800 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-cyan-400">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">GitHub</div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300">abdo223355</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-4 border border-slate-800 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-cyan-400">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">LinkedIn</div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300">Profile</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Send a Direct Message</span>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Hiring Team / Engineer"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email</label>
                    <input
                      type="email"
                      placeholder="your.email@company.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your role, opportunity, or collaboration idea..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-dark-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
