// components/EligibilityCheck.tsx
export default function EligibilityCheck() {
  return (
    <div className="p-6 bg-gray-50 rounded-lg max-w-3xl mx-auto">
      <h2 className="text-xl mb-4 font-semibold">Check your visa eligibility</h2>
      <div className="flex gap-4">
        <select className="border p-2 rounded w-1/2">
          <option>Your Nationality</option>
          {/* Map options */}
        </select>
        <select className="border p-2 rounded w-1/2">
          <option>Your Destination</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Check Now</button>
      </div>
    </div>
  )
}
