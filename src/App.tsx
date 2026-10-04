import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { CurrentlyBuilding } from './components/sections/CurrentlyBuilding';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { CvModal } from './components/ui/CvModal';
import { Toast } from './components/ui/Toast';

export function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const closeToast = () => {
    setToastMessage(null);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 relative flex flex-col font-sans">
      
      {/* Top Navbar */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <Projects />
        <CurrentlyBuilding />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Global Action Toast Notification */}
      <Toast
        message={toastMessage || ''}
        isOpen={!!toastMessage}
        onClose={closeToast}
      />
      
    </div>
  );
}

export default App;
