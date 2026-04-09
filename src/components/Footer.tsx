"use client";

import React, { useState } from 'react';
import Image from 'next/image';
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

export default function Footer() {
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
        enquirysource: "Website Footer",
        interestlevel: "Medium",
        country: "India",
        state: data.location,
        city: "",
        remark: "Lead from Footer Form",
        address: "",
        counsellor: ""
      });

      const apiUrl = `http://admin.didm.in/api/lead/custom/0001?${params.toString()}`;
      
      const response = await fetch(apiUrl, { mode: 'no-cors' });
      
      router.push('/thank-you');
    } catch (error) {
      console.error("Submission error:", error);
      setApiError("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="bg-[#b52727] text-white py-14 px-4 md:px-10 xl:px-16 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10">
        
        {/* Column 1: Get In Touch Form */}
        <div id="footer-form" className="md:col-span-12 lg:col-span-5 bg-white text-[#0f172a] rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] transform hover:-translate-y-0.5 transition-all duration-500">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 leading-tight uppercase tracking-tight">
            GET IN TOUCH<br/>
            <span className="text-[#b52727]">TALK TO ADVISOR</span>
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="footer-name" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Name</label>
              <input 
                id="footer-name"
                placeholder="Enter your name"
                {...register('name')}
                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-50 rounded-xl text-sm focus:outline-none focus:border-[#b52727] focus:ring-4 focus:ring-[#b52727]/10 transition-all text-[#0f172a] font-normal placeholder:font-normal" 
              />
              {errors.name && <p className="text-red-500 text-[11px] font-medium mt-1 ml-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="footer-phone" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Phone Number</label>
              <input 
                id="footer-phone"
                type="tel" 
                placeholder="Enter your phone number"
                {...register('phone')}
                maxLength={10}
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                }}
                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-[#b52727] focus:ring-4 focus:ring-[#b52727]/10 transition-all text-[#0f172a] font-normal placeholder:font-normal" 
              />
              {errors.phone && <p className="text-red-500 text-[11px] font-medium mt-1 ml-1">{errors.phone.message}</p>}
            </div>
            <div>
              <label htmlFor="footer-email" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Email ID</label>
              <input 
                id="footer-email"
                type="email" 
                placeholder="Enter your email id"
                {...register('email')}
                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-[#b52727] focus:ring-4 focus:ring-[#b52727]/10 transition-all text-[#0f172a] font-normal placeholder:font-normal" 
              />
              {errors.email && <p className="text-red-500 text-[11px] font-medium mt-1 ml-1">{errors.email.message}</p>}
            </div>
            <div className="relative">
              <label htmlFor="footer-location" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Location</label>
              <select 
                id="footer-location"
                {...register('location')}
                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-50 rounded-xl text-sm focus:outline-none focus:border-[#b52727] transition-all text-[#0f172a] font-normal appearance-none"
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
              <div className="absolute right-5 bottom-4 pointer-events-none">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {errors.location && <p className="text-red-500 text-[11px] font-medium mt-1 ml-1">{errors.location.message}</p>}
            </div>
            
            {apiError && (
              <p className="text-red-600 text-[13px] font-medium text-center mt-2 bg-red-50 p-4 rounded-xl border border-red-100 animate-zoom-in">
                {apiError}
              </p>
            )}

            <div className="pt-4">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#b52727] hover:bg-[#911f1f] text-white font-semibold text-sm py-3.5 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 flex items-center justify-center space-x-3 uppercase tracking-widest"
              >
                 {isSubmitting ? (
                   <>
                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                     <span>Processing...</span>
                   </>
                 ) : (
                  <>
                    <span>Submit Now</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </>
                 )}
              </button>
            </div>
          </form>
        </div>

        {/* Column 2: Centers and Info (Takes 7 cols out of 12) */}
        <div className="md:col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
           <div className="space-y-7">
              <div>
                <h4 className="font-semibold text-base text-[#fad400] mb-2 uppercase tracking-wider">Training Centers</h4>
                <p className="text-[13px] text-white leading-relaxed font-normal">
                  Dwarka | Gurugram | Kalkaji | Pitampura | Preet Vihar | Rajouri Garden | South Extension | Noida | Dehradun | Haldwani | Mumbai | Varanasi | Jaipur
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-base text-[#fad400] mb-2 uppercase tracking-wider">Training Mode</h4>
                <p className="text-[13px] text-white leading-relaxed font-normal">
                  In-Class | Online | Hybrid Mode
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-base text-[#fad400] mb-2 uppercase tracking-wider">Business Hours</h4>
                <p className="text-[13px] text-white leading-relaxed font-normal">
                  Monday – Friday : 9am to 9pm<br/>
                  Saturday & Sunday : 9am to 7pm
                </p>
              </div>
           </div>

           <div className="space-y-7">
              <div>
                <h4 className="font-semibold text-base text-[#fad400] mb-2 uppercase tracking-wider">About DIDM</h4>
                <p className="text-[13px] text-white leading-relaxed font-normal mb-5">
                  Delhi Institute of Digital Marketing makes our candidates gratifying when it comes to infusing skills with practical knowledge and recent trends in the industry. We are a reputed and the best digital marketing institute in Delhi/NCR & across India. By MSME | ISO Certified.
                </p>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                   <Image 
                     src="/images/msme-logo.png" 
                     alt="MSME and ISO 9001 Certified" 
                     width={200} 
                     height={60} 
                     className="object-contain h-10 w-auto opacity-80"
                   />
                </div>
              </div>
           </div>
        </div>
        
      </div>
    </footer>
  );
}
