"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter()
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return router.replace("/login")

      const { data } = await supabase.from("profiles").select("*").eq("id", user.id).single()
      setProfile(data)
    }
    load()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  return (
    <div className="max-w-lg mx-auto mt-8 p-4">
      <h2 className="text-xl font-semibold mb-4">Profile Info</h2>
      {profile ? (
        <div className="space-y-2">
          <p><strong>Full Name:</strong> {profile.full_name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> ({profile.area_code}) {profile.phone}</p>
          <p><strong>Joined:</strong> {new Date(profile.joined_at).toLocaleDateString()}</p>
        </div>
      ) : <p>Loading...</p>}
      <button onClick={handleLogout} className="mt-6 bg-red-600 text-white px-4 py-2 rounded">Logout</button>
    </div>
  )
}
