import React from 'react';

interface Props {
  visaTypes: {
    type: string;
    description: string;
  }[];
}

export default function VisaTypeSelection({ visaTypes }: Props) {
  return (
    <section className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <h2 className="text-2xl font-extrabold mb-8 text-gray-900 text-center">Visa Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visaTypes.map((visa, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 shadow transition-all duration-200 hover:bg-[#F0FDF4] hover:shadow-md border border-transparent hover:border-[#16610E]"
          >
            <h3 className="font-bold text-xl mb-2 text-[#16610E]">{visa.type}</h3>
            <p className="text-gray-700 text-base">{visa.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}