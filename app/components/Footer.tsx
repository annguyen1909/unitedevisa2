'use client';

import React from 'react';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-green-400 mb-4">UnitedeVisa</div>
            <p className="text-black mb-4">
              Your trusted partner for seamless travel experiences worldwide.
            </p>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-black" />
              <span className="text-black">+1 (555) 123-4567</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="hover:text-green-600">Flight Booking</a></li>
              <li><a href="#" className="hover:text-green-600">Hotel Reservation</a></li>
              <li><a href="#" className="hover:text-green-600">Visa Processing</a></li>
              <li><a href="#" className="hover:text-green-600">Travel Insurance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Destinations</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="hover:text-green-600">Europe</a></li>
              <li><a href="#" className="hover:text-green-600">Asia</a></li>
              <li><a href="#" className="hover:text-green-600">Americas</a></li>
              <li><a href="#" className="hover:text-green-600">Africa</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="hover:text-green-600">Help Center</a></li>
              <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-2 pt-4 text-center text-black">
          <p>&copy; 2025 UnitedeVisa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;