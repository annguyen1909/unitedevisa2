"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm: "",
    area_code: "",
    phone: ""
  })
  const [error, setError] = useState("")

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (form.password !== form.confirm) {
      setError("Passwords do not match")
      return
    }
    setLoading(true)

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password
    })

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    const userId = data.user?.id
    if (userId) {
      const { error: dbError } = await supabase
        .from("profiles")
        .insert({
          id: userId,
          full_name: form.full_name,
          area_code: form.area_code,
          phone: form.phone,
          joined_at: new Date().toISOString()
        })

      if (dbError) setError(dbError.message)
    }

    setLoading(false)
    router.push("/profile")
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-3">
        <input placeholder="Full Name" required className="input" value={form.full_name} onChange={e => setForm({ ...form, full_name: e.target.value })} />
        <input placeholder="Email" type="email" required className="input" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Password" type="password" required className="input" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        <input placeholder="Confirm Password" type="password" required className="input" value={form.confirm} onChange={e => setForm({ ...form, confirm: e.target.value })} />
        <input placeholder="Area Code" className="input" value={form.area_code} onChange={e => setForm({ ...form, area_code: e.target.value })} />
        <input placeholder="Phone Number" className="input" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button disabled={loading} className="bg-blue-600 text-white py-2 rounded">
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  )
}
