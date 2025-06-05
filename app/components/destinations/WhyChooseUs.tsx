import React from 'react';
import { CheckCircleIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <BoltIcon className="h-6 w-6 text-[#16610E]" />,
      text: 'Fast Processing Time',
    },
    {
      icon: <CheckCircleIcon className="h-6 w-6 text-[#16610E]" />,
      text: '24/7 Customer Support',
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6 text-[#16610E]" />,
      text: 'Secure and Easy Application',
    },
  ];

  return (
    <section className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-900 text-center">Why Choose Us?</h2>
      <ul className="space-y-5">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-4 text-lg text-gray-800 font-medium">
            <span className="flex-shrink-0">{feature.icon}</span>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}