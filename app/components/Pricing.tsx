'use client';

import React from 'react';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  color: string;
  buttonColor: string;
}

const Pricing = () => {
  const pricingPlans: PricingPlan[] = [
    { 
      name: 'Basic', 
      price: '$49.99', 
      features: ['Single destination', 'Email support', 'Basic processing'],
      color: 'border-gray-300',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    { 
      name: 'Standard', 
      price: '$99.99', 
      features: ['Multiple destinations', 'Priority support', 'Fast processing'],
      color: 'border-blue-300',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      name: 'Premium', 
      price: '$199.99', 
      features: ['Unlimited destinations', '24/7 support', 'Express processing'],
      color: 'border-orange-300',
      buttonColor: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  return (
    <section className="py-16 bg-[#FAF6E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">No rush fees. No hidden costs.</h2>
          <p className="text-xl text-gray-600">Just our low-cost fee of $49.99 per passenger</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`border-2 ${plan.color} rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300`}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">{plan.price}</div>
                <p className="text-gray-600">per application</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full ${plan.buttonColor} text-white py-3 rounded-lg font-medium transition-colors duration-200`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
