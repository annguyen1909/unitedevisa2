import React from 'react';

interface Props {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
}

export default function DestinationHero({ hero }: Props) {
  return (
    <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
      <img src={hero.image} alt={hero.title} className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-500 scale-100 hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">{hero.title}</h1>
        <p className="text-xl md:text-2xl text-white drop-shadow-md">{hero.subtitle}</p>
      </div>
    </section>
  );
}