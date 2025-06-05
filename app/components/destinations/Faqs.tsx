'use client'

import React, { useState } from 'react';

interface Props {
  faqs: {
    question: string;
    answer: string;
  }[];
}

export default function Faqs({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-900 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-b-0">
            <button
              className="w-full flex justify-between items-center py-4 text-lg font-semibold text-left text-gray-800 focus:outline-none transition-colors duration-200 hover:text-[#16610E]"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span>Q: {faq.question}</span>
              <span className={`ml-4 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="px-2 pb-4 text-gray-700">A: {faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}