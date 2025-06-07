'use client'

import { supabase } from '@/lib/supabase'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import dynamic from 'next/dynamic'
import 'react-phone-input-2/lib/style.css'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import type { User } from '@supabase/supabase-js'

// Dynamically imported components (client-side only)
const Select = dynamic(() => import('react-select'), { ssr: false })
const DatePicker = dynamic(() => import('react-datepicker'), { ssr: false })
const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false })

const visaTypes = [
  { value: 'Tourist', label: 'Tourist' },
  { value: 'Business', label: 'Business' },
  { value: 'Transit', label: 'Transit' },
]

const destinations = [
  { value: 'Vietnam', label: 'Vietnam' },
  { value: 'Thailand', label: 'Thailand' },
  { value: 'Cambodia', label: 'Cambodia' },
]

const nationalities = [
  { value: 'USA', label: 'United States' },
  { value: 'CAN', label: 'Canada' },
  { value: 'VNM', label: 'Vietnam' },
]

const paperTypes = [
  { value: 'Passport', label: 'Passport' },
  { value: 'Travel Document', label: 'Travel Document' },
]

type Option = { value: string; label: string }

type Passenger = {
  destination?: Option
  visaType?: Option
  email?: string
  phone?: string
  nationality?: Option
  paperType?: Option
}

type ApplicationFormValues = {
  passengers: Passenger[]
}

export default function ApplicationForm() {
  const { register, handleSubmit, control } = useForm<ApplicationFormValues>({
    defaultValues: {
      passengers: [{}],
    },
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'passengers',
  })

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null])
  const [startDate, endDate] = dateRange

  const onSubmit = async (data: ApplicationFormValues) => {
    if (!startDate || !endDate) {
      alert('Please select a staying time range.')
      return
    }

    const result = await supabase.auth.getUser()
    const user: User | null = result.data.user
    const userError = result.error

    if (userError || !user) {
      alert('You must be signed in to submit an application.')
      return
    }

    const applications = data.passengers.map((p): Record<string, string> => ({
      user_id: user.id,
      destination: p.destination?.value ?? '',
      visa_type: p.visaType?.value ?? '',
      email: p.email ?? '',
      phone: p.phone ?? '',
      nationality: p.nationality?.value ?? '',
      paper_type: p.paperType?.value ?? '',
      staying_from: startDate.toISOString(),
      staying_to: endDate.toISOString(),
      status: 'pending',
      inserted_at: new Date().toISOString(),
    }))

    const { error } = await supabase.from('visa_applications').insert(applications)

    if (error) {
      console.error('Submission error:', error)
      alert('Something went wrong. Please try again.')
    } else {
      alert('Applications submitted successfully!')
    }
  }

  const FEE_PER_PASSENGER = 49.99
  const totalFee = fields.length * FEE_PER_PASSENGER

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 p-8 max-w-4xl mx-auto mt-10 mb-10 bg-white rounded-2xl shadow-lg">
      <div className="space-y-2">
        <label className="block text-lg font-semibold text-gray-800">Staying Time (From - To)</label>
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(update: [Date | null, Date | null]) => setDateRange(update)}
          className="border border-gray-300 px-4 py-3 w-full rounded-xl focus:ring-2 focus:ring-[#16610E] focus:border-transparent transition-all duration-200"
          placeholderText="Select date range"
        />
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="border border-gray-200 rounded-xl p-6 space-y-4 bg-gray-50 hover:bg-gray-100 transition-all duration-200">
          <h3 className="text-xl font-bold text-gray-800">Passenger {index + 1}</h3>

          {/* Destination */}
          <Controller
            name={`passengers.${index}.destination`}
            control={control}
            rules={{ required: 'Destination is required' }}
            render={({ field }) => (
              <Select
                {...field}
                options={destinations}
                placeholder="Select destination"
              />
            )}
          />

          {/* Visa Type */}
          <Controller
            name={`passengers.${index}.visaType`}
            control={control}
            rules={{ required: 'Visa Type is required' }}
            render={({ field }) => (
              <Select
                {...field}
                options={visaTypes}
                placeholder="Select visa type"
              />
            )}
          />

          {/* Email */}
          <input
            type="email"
            {...register(`passengers.${index}.email`, { required: 'Email is required' })}
            placeholder="Email"
            className="border border-gray-300 px-4 py-3 w-full rounded-xl focus:ring-2 focus:ring-[#16610E] focus:border-transparent transition-all duration-200"
          />

          {/* Phone */}
          <Controller
            name={`passengers.${index}.phone`}
            control={control}
            rules={{ required: 'Phone is required' }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country="us"
                inputStyle={{
                  width: '100%',
                  borderRadius: '0.75rem',
                  borderColor: 'rgb(209 213 219)',
                  padding: '0.75rem',
                }}
                enableSearch
              />
            )}
          />

          {/* Nationality */}
          <Controller
            name={`passengers.${index}.nationality`}
            control={control}
            rules={{ required: 'Nationality is required' }}
            render={({ field }) => (
              <Select
                {...field}
                options={nationalities}
                placeholder="Select nationality"
              />
            )}
          />

          {/* Paper Type */}
          <Controller
            name={`passengers.${index}.paperType`}
            control={control}
            rules={{ required: 'Paper type is required' }}
            render={({ field }) => (
              <Select
                {...field}
                options={paperTypes}
                placeholder="Select paper type"
              />
            )}
          />
        </div>
      ))}

      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
        <button
          type="button"
          onClick={() => append({})}
          className="bg-[#16610E] text-white px-6 py-3 rounded-xl hover:bg-[#1a7a11] transition-all duration-200 flex items-center gap-2 font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Another Passenger
        </button>

        <p className="font-semibold text-xl text-gray-800">Total Fee: <span className="text-[#16610E]">${totalFee}</span></p>
      </div>

      <button
        type="submit"
        className="bg-[#16610E] text-white px-8 py-4 rounded-xl font-bold w-full hover:bg-[#1a7a11] transition-all duration-200 text-lg"
      >
        Submit Applications
      </button>
    </form>
  )
}
