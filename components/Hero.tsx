
import React from 'react';

interface HeroProps {
  scrollToApply: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToApply }) => {
  return (
    <section className="relative bg-white pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-green-100 rounded-full opacity-30"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight">
            Grow Point <span className="text-green-600">Solutions</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 tracking-wider font-medium">
            Internships • Training • Skill Development • Consultancy
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
            Empowering students with real-world skills, IT training, and guided internships.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={scrollToApply} className="w-full sm:w-auto px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-900 transform hover:scale-105 transition-transform duration-300">
              Apply for Internship
            </button>
            <button onClick={scrollToApply} className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105 transition-transform duration-300">
              Apply for Training
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
