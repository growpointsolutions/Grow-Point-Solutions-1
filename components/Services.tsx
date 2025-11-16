
import React from 'react';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { LightBulbIcon } from './icons/LightBulbIcon';
import { UsersIcon } from './icons/UsersIcon';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, items }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-blue-900 mb-4">{title}</h3>
    <ul className="space-y-2 text-gray-600">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  const servicesData = [
    {
      icon: <BriefcaseIcon />,
      title: 'Internships (IT & Non-IT)',
      items: ['Web Development', 'AI/ML & Data Science', 'Cyber Security', 'HR & Digital Marketing', 'Graphic Design & more'],
    },
    {
      icon: <LightBulbIcon />,
      title: 'Training & Skill Development',
      items: ['IT: Python, Java, UI/UX, Cloud', 'Non-IT: Marketing, HR, Business Skills', 'Communication & Soft Skills'],
    },
    {
      icon: <UsersIcon />,
      title: 'Consultancy Services',
      items: ['Career Consultancy', 'Academic/Project Guidance', 'Small Business Strategy', 'IT Guidance & Support'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">Our Core Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of services to fuel your career growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
