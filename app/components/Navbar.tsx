// components/Navbar.tsx
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import type { User } from '@supabase/supabase-js'
import Image from 'next/image'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline' // Add this for icons

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false) // Add state for mobile menu

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
      setLoading(false)
    }
    fetchUser()
  }, [])

  if (loading) return null

  return (
    <nav className="bg-white/95 sticky top-0 z-50 p-1 backdrop-blur-sm w-full border-b border-gray-100">
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
              src="/images/LogoText.png"
              alt="Logo"
              width={150}
              height={50}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/evisa/apply"
              className="text-[#5A585F] text-lg font-semibold hover:text-[#16610E] transition-colors duration-200 relative group"
            >
              Get Your eVisa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16610E] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/pricing"
              className="text-[#5A585F] text-lg font-semibold hover:text-[#16610E] transition-colors duration-200 relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16610E] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/info"
              className="text-[#5A585F] text-lg font-semibold hover:text-[#16610E] transition-colors duration-200 relative group"
            >
              Info Center
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16610E] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-[#5A585F] text-lg font-semibold hover:text-[#16610E] transition-colors duration-200 relative group"
            >
              Contact Our Expert
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16610E] transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href={user ? "/evisa/apply" : "/login"}>
              <button className="bg-[#16610E] hover:bg-[#1a7a11] text-white font-semibold py-3.5 px-6 rounded-md shadow-sm hover:shadow-md transition-all duration-200 transform cursor-pointer hidden md:inline-block">
                Apply Now
              </button>
            </Link>

            {/* Mobile hamburger button */}
            <button
              className="md:hidden flex items-center p-2 rounded focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open menu"
            >
              {mobileOpen ? (
                <XMarkIcon className="h-7 w-7 text-[#16610E]" />
              ) : (
                <Bars3Icon className="h-7 w-7 text-[#16610E]" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 space-y-2">
          <Link
            href="/evisa/apply"
            className="block text-[#5A585F] font-semibold hover:text-[#16610E] py-2"
            onClick={() => setMobileOpen(false)}
          >
            Get Your eVisa
          </Link>
          <Link
            href="/pricing"
            className="block text-[#5A585F] font-semibold hover:text-[#16610E] py-2"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/info"
            className="block text-[#5A585F] font-semibold hover:text-[#16610E] py-2"
            onClick={() => setMobileOpen(false)}
          >
            Info Center
          </Link>
          <Link
            href="/contact"
            className="block text-[#5A585F] font-semibold hover:text-[#16610E] py-2"
            onClick={() => setMobileOpen(false)}
          >
            Contact Our Expert
          </Link>
          <Link href={user ? "/evisa/apply" : "/login"}>
            <button className="w-full bg-[#16610E] hover:bg-[#1a7a11] text-white font-semibold py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 mt-2">
              Apply Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
}
