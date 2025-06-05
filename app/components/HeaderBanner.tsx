// components/HeaderBanner.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { UserRoundPen } from 'lucide-react';

export default function HeaderBanner() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
      setIsLoading(false);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="flex justify-between items-center px-12 py-2 bg-[#16610E] text-sm">
      {/* Left */}
      <div className="flex gap-4 text-white">
        <span>We&apos;re available <span className='text-[#FED16A]'> 24/7</span> — Call +1 (888) 456 1235</span>
        <span>Chat with our Experts!</span>
      </div>

      {/* Right */}
      <div className="flex gap-4">
        <Link href="/evisa/list" className="p-2 font-[800] text-white black hover:text-gray-300 underline transition-all duration-300">
          Check Visa Status
        </Link>

        {!isLoading && (
          user ? (
            <Link href="/profile" className="py-2 px-4 rounded-xl bg-[#2a8021] transition-all duration-300 hover:bg-[#69a862] flex items-center gap-2 text-white">
              <UserRoundPen className="w-4 h-4" />
              Profile
            </Link>
          ) : (
            <>
              <Link href="/login" className="px-10 py-2 rounded-md text-white bg-[#D9D9D966] hover:bg-[#8f8f8f66] transition-all duration-300">
                Login
              </Link>
              <Link href="/signup" className="p-2 text-white hover:underline transition-all duration-300">
                Sign Up
              </Link>
            </>
          )
        )}
      </div>
    </div>
  );
}
