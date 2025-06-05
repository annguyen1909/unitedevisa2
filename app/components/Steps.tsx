'use client';

import React from 'react';

interface Step {
  icon: string;
  title: string;
  desc: string;
}

const Steps = () => {
  const steps: Step[] = [
    { icon: '📋', title: 'Fill Application', desc: 'Complete your visa application form online' },
    { icon: '📄', title: 'Upload Documents', desc: 'Submit required documents securely' },
    { icon: '☁️', title: 'Processing', desc: 'We process your application efficiently' },
    { icon: '✅', title: 'Get Visa', desc: 'Receive your approved visa digitally' }
  ];

  return (
    <section className="py-16 bg-[#FAF6E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">4 Easy Steps to Get Your eVisa</h2>
          <p className="text-xl text-gray-600">Simple and straightforward process</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                {step.icon}
              </div>
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-medium text-lg">
            Start Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Steps;
