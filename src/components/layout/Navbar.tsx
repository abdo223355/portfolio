import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileDown } from 'lucide-react';

interface NavbarProps {
  onOpenCvModal: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Currently Building', href: '#currently-building' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Name */}
          <a
            href="#home"
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors group"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 group-hover:border-cyan-500/50 flex items-center justify-center text-cyan-400 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Abdelrahman Ezz
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 tracking-wide uppercase">
                AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 transition-all active:scale-95 shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>CV</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-medium text-dark-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 transition-all font-semibold active:scale-95 shadow-md shadow-cyan-500/20"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono"
              aria-label="Download CV"
            >
              <FileDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-dark-950/95 border-b border-slate-800 px-4 pt-4 pb-6 mt-2 shadow-2xl backdrop-blur-2xl animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-mono text-xs flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                Download CV
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-dark-950 font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
