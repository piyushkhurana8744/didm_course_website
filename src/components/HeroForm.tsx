"use client";

import React, { useState } from 'react';
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
  const [apiError, setApiError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setApiError(null);
    try {
      const params = new URLSearchParams({
        name: data.name,
        email: data.email,
        mobileno: data.phone,
        course: "Digital Marketing Master Course",
        enquirysource: "Adword",
        interestlevel: "High",
        country: "India",
        state: data.location,
        city: "",
        address: "",
        counsellor: ""
      });

      const apiUrl = `http://admin.didm.in/api/lead/custom/0001?${params.toString()}`;
      
      const response = await fetch(apiUrl, { mode: 'no-cors' });
      
      // With no-cors, the response is opaque, but we assume success if it doesn't throw
      router.push('/thank-you');
    } catch (error) {
      console.error("Submission error:", error);
      setApiError("Something went wrong. Please try again or contact support.");
    }
  };

  return (
    <div id="enquiry-form" className="glass-card rounded-2xl p-6 sm:p-7 w-full animate-fade-in-up stagger-2 shadow-2xl">
      <div className="flex flex-col items-center mb-5">
        <h3 className="text-[#0f172a] text-lg font-semibold uppercase tracking-tight relative">
          DOWNLOAD BROCHURE
          <span className="absolute -bottom-1.5 lg:left-0 w-full h-0.5 bg-[#b52727] rounded-full"></span>
        </h3>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
        <div className="space-y-1">
          <label htmlFor="name" className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest ml-1">Name</label>
          <input
            id="name"
            placeholder="Enter your name"
            {...register('name')}
            className={`w-full px-3.5 py-2.5 border-2 text-sm text-[#0f172a] bg-slate-50/50 rounded-lg focus:outline-none focus:border-[#b52727] focus:ring-4 focus:ring-[#b52727]/10 transition-all font-normal placeholder:font-normal placeholder:text-gray-400 ${errors.name ? 'border-red-500' : 'border-slate-100'}`}
          />
          {errors.name && <p className="text-red-500 text-[11px] font-medium mt-0.5 ml-1">{errors.name.message}</p>}
        </div>

        <div className="space-y-1">
          <label htmlFor="phone" className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            {...register('phone')}
            maxLength={10}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
            }}
            className={`w-full px-3.5 py-2.5 border-2 text-sm text-[#0f172a] bg-slate-50/50 rounded-lg focus:outline-none focus:border-[#b52727] focus:ring-4 focus:ring-[#b52727]/10 transition-all font-normal placeholder:font-normal placeholder:text-gray-400 ${errors.phone ? 'border-red-500' : 'border-slate-100'}`}
          />
          {errors.phone && <p className="text-red-500 text-[11px] font-medium mt-0.5 ml-1">{errors.phone.message}</p>}
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest ml-1">Email ID</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email id"
            {...register('email')}
            className={`w-full px-3.5 py-2.5 border-2 text-sm text-[#0f172a] bg-slate-50/50 rounded-lg focus:outline-none focus:border-[#b52727] focus:ring-4 focus:ring-[#b52727]/10 transition-all font-normal placeholder:font-normal placeholder:text-gray-400 ${errors.email ? 'border-red-500' : 'border-slate-100'}`}
          />
          {errors.email && <p className="text-red-500 text-[11px] font-medium mt-0.5 ml-1">{errors.email.message}</p>}
        </div>

        <div className="space-y-1">
          <label htmlFor="location" className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest ml-1">Location</label>
          <div className="relative">
            <select
              id="location"
              {...register('location')}
              className={`w-full px-3.5 py-2.5 border-2 text-sm text-[#0f172a] bg-slate-50/50 rounded-lg appearance-none focus:outline-none focus:border-[#b52727] focus:ring-4 focus:ring-[#b52727]/10 transition-all font-normal ${errors.location ? 'border-red-500' : 'border-slate-100'}`}
            >
              <option value="">Select Location</option>
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
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          {errors.location && <p className="text-red-500 text-[11px] font-medium mt-0.5 ml-1">{errors.location.message}</p>}
        </div>

        {apiError && (
          <p className="text-red-600 text-[12px] font-medium text-center mt-1 bg-red-50 p-2.5 rounded-lg border border-red-200 animate-zoom-in">
            {apiError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#b52727] hover:bg-[#911f1f] text-white text-[14px] font-semibold py-3 mt-2 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center space-x-2 uppercase tracking-widest"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span>Submit Application</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
