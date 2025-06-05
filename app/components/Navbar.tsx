// components/Navbar.tsx
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import type { User } from '@supabase/supabase-js'
import Image from 'next/image'

export default function Navbar() {
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
    <nav className="bg-white/95 p-2 backdrop-blur-sm w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              width={150}
              height={50}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <Image
              src="/images/logotext.png"
              alt="Logo"
              width={150}
              height={50}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/evisa/apply" 
              className="text-[#5A585F] font-semibold hover:text-[#16610E] transition-colors duration-200 relative group"
            >
              Get Your eVisa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16610E] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/pricing" 
              className="text-[#5A585F] font-semibold hover:text-[#16610E] transition-colors duration-200 relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16610E] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/info" 
              className="text-[#5A585F] font-semibold hover:text-[#16610E] transition-colors duration-200 relative group"
            >
              Info Center
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16610E] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-[#5A585F] font-semibold hover:text-[#16610E] transition-colors duration-200 relative group"
            >
              Contact Our Expert
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16610E] transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>

          <Link href={user ? "/evisa/apply" : "/login"}>
            <button className="bg-[#16610E] hover:bg-[#1a7a11] text-white font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
