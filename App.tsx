
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Programs from './components/Programs';
import Apply from './components/Apply';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const applyRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    programs: programsRef,
    apply: applyRef,
    contact: contactRef,
  };

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} />
      <main>
        <div ref={homeRef}>
          <Hero scrollToApply={() => scrollToSection('apply')} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={programsRef}>
          <Programs />
        </div>
        <div ref={applyRef}>
          <Apply />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
