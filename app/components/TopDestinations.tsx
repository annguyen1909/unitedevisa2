'use client';

import React from 'react';
import Link from 'next/link';

interface Destination {
  name: string;
  image: string;
  price: string;
  slug: string; // new field for dynamic path
}

const TopDestinations = () => {
  const destinations: Destination[] = [
    { name: 'New York', image: '🏙️', price: '$299', slug: 'new-york' },
    { name: 'Paris', image: '🗼', price: '$899', slug: 'paris' },
    { name: 'Vietnam', image: '🏯', price: '$1299', slug: 'vietnam' },
    { name: 'Kenya', image: '🏝️', price: '$799', slug: 'kenya' },
    { name: 'London', image: '🎡', price: '$699', slug: 'london' },
  ];

  return (
    <section className="py-13 bg-[#FAF6E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#16610E] mb-4">MOST COMMON VISAS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.slug} // Use a unique identifier here
              href={`/destinations/${dest.slug}`}
            >
              <div className="bg-white rounded-md shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-6xl">
                  {dest.image}
                </div>
                <div className="p-4.5 text-center">
                  <h3 className="font-semibold text-lg">{dest.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopDestinations;
