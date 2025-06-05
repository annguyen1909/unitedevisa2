import React from 'react';

interface Props {
  about: {
    heading: string;
    description: string;
    processTime: string;
    features: string[];
  };
}

export default function AboutEta({ about }: Props) {
  return (
    <section className="max-w-2xl mx-auto p-10 bg-white rounded-2xl shadow-lg border-l-8 border-[#16610E] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <h2 className="text-3xl font-extrabold mb-4 text-gray-900">{about.heading}</h2>
      <p className="mb-6 text-lg text-gray-700">{about.description}</p>
      <p className="font-semibold text-[#16610E] mb-4">Processing Time: {about.processTime}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {about.features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}