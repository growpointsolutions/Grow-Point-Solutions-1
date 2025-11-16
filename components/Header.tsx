
import React, { useState, useEffect } from 'react';
import { Logo } from './icons/Logo';

interface HeaderProps {
  scrollToSection: (section: 'home' | 'about' | 'services' | 'programs' | 'apply' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', section: 'home' as const },
    { name: 'About', section: 'about' as const },
    { name: 'Services', section: 'services' as const },
    { name: 'Programs', section: 'programs' as const },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Logo />
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.section)}
                className="text-gray-600 hover:text-blue-800 font-medium transition duration-150 ease-in-out"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('apply')}
              className="px-6 py-2 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 transition duration-300 transform hover:scale-105"
            >
              Apply Now
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[...navLinks, { name: 'Apply Now', section: 'apply' as const }].map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.section);
                  setIsOpen(false);
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-100"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
