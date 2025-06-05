'use client';

import React from 'react';
import { Headphones } from 'lucide-react';

const Support = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#FED16A] to-[#FFF085]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Headphones className="h-12 w-12 text-yellow-600 mr-4" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">24/7 Customer Support 🎧</h3>
              <p className="text-gray-600">Get help whenever you need it. We're here to assist you every step of the way.</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Support;
