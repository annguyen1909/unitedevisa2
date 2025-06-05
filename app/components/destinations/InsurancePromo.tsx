import React from 'react';

interface Props {
  insurance: {
    recommended: boolean;
    originalPrice: number;
    discountedPrice: number;
    description: string;
  };
}

export default function InsurancePromo({ insurance }: Props) {
  return (
    <section className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg border-l-8 border-[#16610E] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-extrabold text-gray-900">Travel Insurance</h2>
        {insurance.recommended && (
          <span className="bg-[#16610E] text-white text-xs font-bold px-3 py-1 rounded-full ml-2 animate-pulse">Recommended</span>
        )}
      </div>
      <p className="text-gray-700 mb-4 text-lg">{insurance.description}</p>
      <div className="flex items-baseline gap-3">
        <span className="text-sm text-gray-500 line-through">${insurance.originalPrice}</span>
        <span className="text-2xl font-bold text-[#16610E]">${insurance.discountedPrice}</span>
      </div>
    </section>
  );
}