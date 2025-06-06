'use client'
import React from 'react';

interface Props {
  pricing: {
    baseFee: number;
    serviceFee: number;
    discount: number;
    total: number;
  };
}

export default function FeeCalculator({ pricing }: Props) {
  return (
    <section className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg border-l-8 border-[#16610E] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-900 text-center">Fee Breakdown</h2>
      <ul className="text-gray-700 space-y-2 text-lg">
        <li>Base Visa Fee: <span className="font-semibold">${pricing.baseFee}</span></li>
        <li>Service Fee: <span className="font-semibold">${pricing.serviceFee}</span></li>
        <li>Discount: <span className="text-red-500 font-semibold">-${pricing.discount}</span></li>
        <li className="font-bold text-xl mt-4">Total: <span className="text-[#16610E]">${pricing.total}</span></li>
      </ul>
    </section>
  );
}