"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  email: z.string().email('Invalid email address'),
  location: z.string().min(1, 'Please select a location'),
});

type FormData = z.infer<typeof formSchema>;

import { useRouter } from 'next/navigation';

export default function HeroForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const params = new URLSearchParams({
        name: data.name,
        email: data.email,
        mobileno: data.phone,
        course: "Digital Marketing Master Course",
        enquirysource: "Landing Page",
        interestlevel: "High",
        country: "India",
        state: data.location,
        city: "",
        remark: "Lead from Hero Form",
        address: "",
        counsellor: ""
      });

      const apiUrl = `http://admin.didm.in/api/lead/custom/0001?${params.toString()}`;
      
      // Sending the request. Using mode: 'no-cors' if needed, but standard fetch first.
      fetch(apiUrl, { mode: 'no-cors' }).catch(err => console.error("API Call Error:", err));
      
      // We redirect anyway to ensure the user gets to the thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error("Submission error:", error);
      router.push('/thank-you');
    }
  };

  return (
    <div className="bg-white rounded p-6 sm:p-8 w-full shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div className="flex justify-center mb-8">
        <h3 className="text-[#102b4e] text-2xl font-black uppercase tracking-tight border-b-[4px] border-[#102b4e] pb-1 inline-block">
          DOWNLOAD BROCHURE
        </h3>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="enquiry-form" className="block text-[14px] font-black text-black mb-1.5 uppercase">Name</label>
          <input
            id="enquiry-form"
            placeholder="Enter your name"
            {...register('name')}
            className={`w-full px-3 py-2.5 border-2 text-black bg-white focus:outline-none focus:border-[#b32b2b] focus:ring-1 focus:ring-[#b32b2b] transition-all font-medium ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-[14px] font-black text-black mb-1.5 uppercase">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            {...register('phone')}
            maxLength={10}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
            }}
            className={`w-full px-3 py-2.5 border text-black bg-white focus:outline-none focus:border-[#b32b2b] transition-colors font-medium ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-[14px] font-black text-black mb-1.5 uppercase">Email Id</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email id"
            {...register('email')}
            className={`w-full px-3 py-2.5 border text-black bg-white focus:outline-none focus:border-[#b32b2b] transition-colors font-medium ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="location" className="block text-[14px] font-black text-black mb-1.5 uppercase">Location</label>
          <select
            id="location"
            {...register('location')}
            className={`w-full px-3 py-2.5 border text-black bg-white focus:outline-none focus:border-[#b32b2b] transition-colors font-medium ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select</option>
            <option value="Dwarka">Dwarka</option>
            <option value="Noida">Noida</option>
            <option value="Kalkaji">Kalkaji</option>
            <option value="Preet Vihar">Preet Vihar</option>
            <option value="Pitampura">Pitampura</option>
            <option value="Dehradun">Dehradun</option>
            <option value="Rajouri Garden">Rajouri Garden</option>
            <option value="South Extension">South Extension</option>
            <option value="Gurgaon">Gurgaon</option>
          </select>
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#cb1116] hover:bg-[#a60b0e] text-white text-[16px] font-bold p-3 mt-4 transition-all hover:shadow-lg active:scale-95 disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : 'Download Brochure'}
        </button>
      </form>
    </div>
  );
}
