
import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const InternshipCategoryCard: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-blue-50 border-l-4 border-blue-800 p-4 rounded-r-lg shadow-sm">
    <p className="font-semibold text-blue-900">{title}</p>
  </div>
);

const BenefitItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-center space-x-3">
    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
    <span className="text-gray-700">{children}</span>
  </li>
);


const Programs: React.FC = () => {
  const categories = [
    'Web Development', 'AI/ML', 'Cyber Security', 'HR', 'Digital Marketing', 'Graphic Design', 'Data Science', 'Cloud Computing'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Internship Categories */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">Internship Categories</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore a wide range of domains to find your perfect fit.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {categories.map((cat, index) => (
            <InternshipCategoryCard key={index} title={cat} />
          ))}
        </div>

        {/* Program Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 sm:text-3xl mb-6">Program Structure & Benefits</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our programs are designed to be flexible and impactful, providing you with valuable assets for your career journey.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xl text-blue-900 mb-3">Flexible Duration Options</h4>
                <div className="flex space-x-4">
                  {['1 Month', '2 Months', '3 Months'].map(duration => (
                    <span key={duration} className="bg-green-100 text-green-800 font-medium px-4 py-2 rounded-full">{duration}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h4 className="font-bold text-xl text-blue-900 mb-4">What You Will Receive</h4>
            <ul className="space-y-4">
              <BenefitItem>Internship + Training + Mentorship</BenefitItem>
              <BenefitItem>Official Completion Certificate</BenefitItem>
              <BenefitItem>Letter of Recommendation (Performance-based)</BenefitItem>
              <BenefitItem>Weekly Assignments & Feedback</BenefitItem>
              <BenefitItem>Real-world Project Work</BenefitItem>
              <BenefitItem>Enhanced Professional Portfolio</BenefitItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
