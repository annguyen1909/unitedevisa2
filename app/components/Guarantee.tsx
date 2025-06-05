'use client';

import React from 'react';
import { Shield } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-16 bg-[#FAF6E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-xl p-12 shadow-lg">
          <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Rejected? No worries — you get your service fee back.
          </h2>
          <p className="text-xl text-gray-600 mb-8">Guaranteed!</p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're so confident in our service that if your visa application gets rejected, 
            we'll refund your service fee completely. Your satisfaction is our guarantee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;