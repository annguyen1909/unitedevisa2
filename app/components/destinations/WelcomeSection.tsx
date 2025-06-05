import React from 'react';

interface Props {
  welcome: {
    title: string;
    content: string;
  };
}

export default function WelcomeSection({ welcome }: Props) {
  return (
    <section className="max-w-2xl mx-auto p-10 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <h2 className="text-3xl font-extrabold mb-4 text-gray-900">{welcome.title}</h2>
      <p className="text-lg text-gray-700">{welcome.content}</p>
    </section>
  );
}
