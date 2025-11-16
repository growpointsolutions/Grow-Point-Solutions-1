import React, { useState } from 'react';

type FormType = 'Internship' | 'Training' | 'Consultancy';

const ApplyForm: React.FC<{ type: FormType }> = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, interest, message } = formData;

    let messageBody = `Hello Grow Point Solutions,\n\nI would like to apply for *${type}*.\n\nMy details are as follows:\n`;
    messageBody += `*Name:* ${name}\n`;
    messageBody += `*Email:* ${email}\n`;
    messageBody += `*Phone:* ${phone}\n`;
    messageBody += `*${type === 'Consultancy' ? 'Service of Interest' : 'Domain/Course of Interest'}:* ${interest}\n`;
    if (message) {
        messageBody += `*Message:* ${message}\n`;
    }

    const encodedMessage = encodeURIComponent(messageBody);
    const whatsappUrl = `https://wa.me/917066609426?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };


  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor={`name-${type}`} className="block text-sm font-medium text-gray-700">Full Name</label>
          <input 
            type="text" 
            id={`name-${type}`} 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor={`email-${type}`} className="block text-sm font-medium text-gray-700">Email Address</label>
          <input 
            type="email" 
            id={`email-${type}`} 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor={`phone-${type}`} className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input 
            type="tel" 
            id={`phone-${type}`} 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor={`interest-${type}`} className="block text-sm font-medium text-gray-700">{type === 'Consultancy' ? 'Service of Interest' : 'Domain/Course of Interest'}</label>
          <input 
            type="text" 
            id={`interest-${type}`} 
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
            placeholder={type === 'Internship' ? 'e.g., Web Development' : 'e.g., Python Programming'} 
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>
      <div>
          <label htmlFor={`message-${type}`} className="block text-sm font-medium text-gray-700">Message (Optional)</label>
          <textarea 
            id={`message-${type}`} 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4} 
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
      </div>
      <div>
        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
          Submit Application via WhatsApp
        </button>
      </div>
    </form>
  );
};


const Apply: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FormType>('Internship');

  const tabs: FormType[] = ['Internship', 'Training', 'Consultancy'];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">Apply Now</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Take the next step in your career. Fill out the form below to get started.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center border-b border-gray-200">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-3 font-medium text-sm sm:text-base transition-colors duration-300 -mb-px
                  ${activeTab === tab 
                    ? 'border-b-2 border-blue-800 text-blue-800' 
                    : 'border-b-2 border-transparent text-gray-500 hover:text-blue-700 hover:border-gray-300'}`}
              >
                Apply for {tab}
              </button>
            ))}
          </div>
          
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-inner border border-gray-200">
            <ApplyForm type={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;