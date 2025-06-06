'use client';

import React from 'react';
import type { User } from '@supabase/supabase-js'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

interface Props {
  about: {
    heading: string;
    description: string;
    processTime: string;
    features: string[];
  };
}

export default function AboutEta({ about }: Props) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
      setLoading(false)
    }
    fetchUser()
  }, [])

  if (loading) return null // or a skeleton loader if you prefer
  return (
    <section className="w-full mx-auto p-16 bg-white rounded-2xl shadow-lg border-l-8 transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-3xl text-center font-extrabold mb-4 text-gray-900">{about.heading}</h2>
      <p className="mb-6 text-lg text-center text-gray-700">{about.description}</p>
      <div className="flex text-center justify-center space-x-8 gap-8 m-8">
        <div className="flex flex-col items-center">
          <Image
            src="/images/eta.png"
            alt="ETA Icon"
            width={50}
            height={50}
            className="h-12 w-12 mb-4"
          />
          <p className="font-semibold text-lg text-[#16610E] text-center mb-4">Apply Online In 3 Steps
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/eta.png"
            alt="ETA Icon"
            width={50}
            height={50}
            className="h-12 w-12 mb-4"
          />
          <p className="font-semibold text-lg text-[#16610E] text-center mb-4">Processing Time: {about.processTime}</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/eta.png"
            alt="ETA Icon"
            width={50}
            height={50}
            className="h-12 w-12 mb-4"
          />
          <p className="font-semibold text-lg text-[#16610E] text-center mb-4">Receive Visa by Email</p>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Link href={user ? "/evisa/apply" : "/login"}>
          <button className="bg-[#16610E] hover:bg-[#1a7a11] text-white font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
            Apply Now
          </button>
        </Link>
      </div>
    </section>
  );
}