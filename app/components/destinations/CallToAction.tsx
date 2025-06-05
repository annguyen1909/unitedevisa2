import React from 'react';

interface Props {
  destination: string;
  applyLink: string;
}

export default function CallToAction({ destination, applyLink }: Props) {
  return (
    <section className="max-w-2xl mx-auto p-10 bg-white rounded-2xl shadow-lg border-l-8 border-[#16610E] text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <h2 className="text-3xl font-extrabold mb-3 text-gray-900">Ready to travel to <span className="text-[#16610E]">{destination}</span>?</h2>
      <p className="mb-6 text-lg text-gray-700">Start your application today in just a few minutes.</p>
      <a
        href={applyLink}
        className="inline-block bg-[#16610E] text-white px-8 py-3 rounded-xl font-bold text-lg shadow-md hover:bg-[#1a7a11] hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#16610E] focus:ring-offset-2"
      >
        Apply Now
      </a>
    </section>
  );
}