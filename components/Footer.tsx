
import React from 'react';
import { Logo } from './icons/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Logo isWhite />
            <p className="mt-2 text-blue-200">Empowering the next generation of professionals.</p>
          </div>
          <div className="text-sm text-blue-300">
            <p>&copy; {new Date().getFullYear()} Grow Point Solutions. All rights reserved.</p>
            <p>Maharashtra, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
