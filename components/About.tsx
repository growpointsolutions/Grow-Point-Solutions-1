
import React from 'react';
import { LightBulbIcon } from './icons/LightBulbIcon';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { UsersIcon } from './icons/UsersIcon';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center space-x-4 mb-3">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>
    </div>
    <p className="text-gray-600">{children}</p>
  </div>
);


const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">About Grow Point Solutions</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Your partner in professional growth and skill enhancement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-900">Empowering Future Professionals</h3>
            <p className="text-gray-600 leading-relaxed">
              Grow Point Solutions is a premier multi-domain company based in Maharashtra, India, dedicated to bridging the gap between academia and industry. We provide comprehensive internships, cutting-edge training programs, and expert consultancy to help students and professionals achieve their career goals.
            </p>
             <p className="text-gray-600 leading-relaxed">
              Our offerings range from software and IT development guidance to business consultancy and essential skill-based learning, ensuring our participants are well-equipped for the modern workplace.
            </p>
          </div>
          <div className="space-y-8">
            <FeatureCard icon={<LightBulbIcon />} title="Mission & Vision">
              Our mission is to empower individuals with practical knowledge and real-world experience. We envision a future where every student has the skills and confidence to excel in their chosen field.
            </FeatureCard>
            <FeatureCard icon={<UsersIcon />} title="Why Choose Us?">
              We provide hands-on experience, mentorship from industry experts, and a dynamic learning environment. Our performance-based LOR and completion certificates add significant value to your profile.
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
