import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { EmailIcon } from './icons/EmailIcon';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions? We're here to help. Reach out to us for more information about our programs and services.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg inline-block w-full max-w-md">
            <h3 className="text-xl font-bold text-blue-900">Grow Point Solutions</h3>
            <p className="text-gray-600 mt-1">Maharashtra, India</p>
            <div className="mt-6 space-y-4">
              <a 
                href="https://wa.me/917066609426"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
              >
                <WhatsappIcon className="w-6 h-6 mr-3" />
                <span>Contact on WhatsApp</span>
              </a>
              <a 
                href="mailto:contact@growpointsolutions.com" // Placeholder email
                className="w-full inline-flex items-center justify-center px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 transition-transform duration-300 transform hover:scale-105"
              >
                <EmailIcon className="w-6 h-6 mr-3" />
                <span>Send us an Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;