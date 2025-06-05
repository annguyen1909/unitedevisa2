'use client';

import { useState } from "react";

type Nationality = "United States" | "India" | "Canada"; // Add more nationalities here

const ineligibleMap: Record<Nationality, string[]> = {
  "United States": [
    "Kenya",
    "Nigeria",
    "Cuba",
    "Iran",
    "North Korea",
    "Syria",
    "Libya",
    "Sudan",
    "Somalia",
    "Venezuela",
  ],
  India: [
    "Pakistan",
    "Bangladesh",
  ],
  Canada: [
    "Brazil",
    "Argentina",
  ],
};

export default function Hero() {
  const [nationality, setNationality] = useState<Nationality | "">("");
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");

  const checkEligibility = () => {
    if (!nationality || !destination) {
      setMessage("Please select both your nationality and destination.");
      return;
    }

    const ineligibleDestinations = ineligibleMap[nationality];
    if (ineligibleDestinations && ineligibleDestinations.includes(destination)) {
      setMessage(`Sorry, visa from ${nationality} to ${destination} is not available.`);
    } else {
      setMessage("You are eligible! Proceed with your visa application.");
    }
  };

  return (
    <section
      className="bg-cover bg-center min-h-[100vh] flex items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Let Us Get You The Visa To Your Dream Destination
        </h1>
        <p className="text-lg md:text-xl mt-4">Fast – Reliable – Experts Support 24/7</p>

        <div className="bg-white rounded-lg p-2 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
          <select
            className="border border-gray-300 rounded px-3 py-2"
            value={nationality}
            onChange={(e) => setNationality(e.target.value as Nationality)}
          >
            <option value="">Your Nationality</option>
            <option value="United States">United States</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
          </select>

          <select
            className="border border-gray-300 rounded px-3 py-2"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">Which country?</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Kenya">Kenya</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Brazil">Brazil</option>
            <option value="Argentina">Argentina</option>
          </select>

          <button
            onClick={checkEligibility}
            className="bg-green-600 text-white rounded px-4 py-6 hover:bg-green-700"
          >
            Check Now
          </button>
        </div>

        {message && (
          <p className="mt-4 text-white font-semibold">{message}</p>
        )}
      </div>
    </section>
  );
}
