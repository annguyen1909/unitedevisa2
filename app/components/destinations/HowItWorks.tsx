import React from 'react';

interface Props {
  steps: string[];
}

export default function HowItWorks({ steps }: Props) {
  return (
    <section className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <h2 className="text-2xl font-extrabold mb-8 text-gray-900 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow transition-all duration-200 hover:bg-[#F0FDF4] hover:shadow-md">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#16610E] text-white text-2xl font-bold mb-4 shadow-md transition-all duration-200">{index + 1}</div>
            <p className="text-lg text-gray-800 text-center font-medium">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}