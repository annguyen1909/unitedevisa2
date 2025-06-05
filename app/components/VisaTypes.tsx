'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface VisaType {
  type: string;
  duration: string;
  price: string;
  color: string;
}

const VisaTypes = () => {
  const visaTypes: VisaType[] = [
    { type: 'Tourist Visa', duration: '30 Days', price: '$99', color: 'bg-green-100 border-green-300' },
    { type: 'Business Visa', duration: '90 Days', price: '$199', color: 'bg-blue-100 border-blue-300' },
    { type: 'Transit Visa', duration: '7 Days', price: '$49', color: 'bg-orange-100 border-orange-300' },
    { type: 'Student Visa', duration: '1 Year', price: '$299', color: 'bg-purple-100 border-purple-300' }
  ];

  return (
    <section className="py-16 bg-[#FAF6E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">All eVisa Types. One Place.</h2>
          <p className="text-xl text-gray-600">Choose the visa type that suits your travel needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {visaTypes.map((visa, index) => (
            <div key={index} className={`${visa.color} border-2 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300`}>
              <div className="mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">{visa.type}</h3>
                <p className="text-gray-600 mb-4">{visa.duration}</p>
                <p className="text-2xl font-bold text-gray-900 mb-6">{visa.price}</p>
              </div>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>✓ Fast processing</li>
                <li>✓ 24/7 support</li>
                <li>✓ Secure application</li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-medium">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaTypes;