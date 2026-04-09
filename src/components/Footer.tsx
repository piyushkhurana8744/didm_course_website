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
    <footer className="bg-[#b32b2b] text-white py-16 px-4 md:px-12 xl:px-20 border-t border-red-900 border-opacity-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
        
        {/* Column 1: Get In Touch Form (Takes 4 cols out of 12) */}
        <div className="md:col-span-5 lg:col-span-4 bg-white text-gray-900 rounded p-6 sm:p-8 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-serif font-medium text-center mb-6 leading-tight uppercase tracking-wide px-4">
            GET IN TOUCH<br/>TALK TO ADVISOR
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="footer-name" className="block text-[13px] font-bold text-black mb-1.5">Name</label>
              <input 
                id="footer-name"
                placeholder="Enter your name"
                {...register('name')}
                className="w-full px-3 py-2 bg-white border border-gray-200 focus:outline-none focus:border-red-600 transition-colors text-black" 
              />
            </div>
            <div>
              <label htmlFor="footer-phone" className="block text-[13px] font-bold text-black mb-1.5">Phone Number</label>
              <input 
                id="footer-phone"
                type="tel" 
                placeholder="Enter your phone number"
                {...register('phone')}
                maxLength={10}
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                }}
                className="w-full px-3 py-2 bg-white border border-gray-200 focus:outline-none focus:border-red-600 transition-colors text-black" 
              />
            </div>
            <div>
              <label htmlFor="footer-email" className="block text-[13px] font-bold text-black mb-1.5">Email Id</label>
              <input 
                id="footer-email"
                type="email" 
                placeholder="Enter your email id"
                {...register('email')}
                className="w-full px-3 py-2 bg-white border border-gray-200 focus:outline-none focus:border-red-600 transition-colors text-black" 
              />
            </div>
            <div>
              <label htmlFor="footer-location" className="block text-[13px] font-bold text-black mb-1.5">Location</label>
              <select 
                id="footer-location"
                {...register('location')}
                className="w-full px-3 py-2 bg-white border border-gray-200 focus:outline-none focus:border-red-600 transition-colors text-black"
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
            </div>
            {apiError && (
              <p className="text-red-600 text-[12px] font-bold text-center mt-2 bg-red-50 p-2 rounded">
                {apiError}
              </p>
            )}

            <div className="pt-2">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#cb1116] hover:bg-[#a60b0e] text-white font-medium text-[15px] p-2.5 transition-colors disabled:opacity-70 flex items-center justify-center space-x-2"
              >
                 {isSubmitting ? (
                   <>
                     <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                     <span>Processing...</span>
                   </>
                 ) : 'Download Brochure'}
              </button>
            </div>
          </form>
        </div>

        {/* Column 2: Centers and Info (Takes 4 cols out of 12) */}
        <div className="md:col-span-4 lg:col-span-4 space-y-8 pt-4">
          <div>
            <h4 className="font-bold text-[17px] mb-3">Training Centers :</h4>
            <p className="text-[14px] text-white/90 leading-[1.6]">
              Dwarka | Gurugram | Kalkaji | Pitampura | Preet Vihar | Rajouri Garden | South Extension | Noida | Dehradun | Haldwani | Mumbai | Varanasi | Jaipur
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[17px] mb-3">Training Mode :</h4>
            <p className="text-[14px] text-white/90 leading-[1.6]">
              In-Class | Online | Hybrid Mode
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[17px] mb-3">Business Hours:</h4>
            <p className="text-[14px] text-white/90 leading-[1.6]">
              Monday – Friday : 9am to 9pm<br/>
              Saturday & Sunday : 9am to 7pm
            </p>
          </div>
        </div>

        {/* Column 3: About Institute (Takes 4 cols out of 12) */}
        <div className="md:col-span-3 lg:col-span-4 pt-4">
          <h4 className="font-bold text-[17px] mb-3">About DIDM</h4>
          <p className="text-[14px] text-white/90 leading-[1.7] mb-6">
            Delhi Institute of Digital Marketing makes our candidates gratifying when it comes to infusing skills with practical knowledge and recent trends in the industry. We are a reputed and the best digital marketing institute in Delhi/NCR & across India. By MSME | ISO Certified.
          </p>
          
          <div className="flex items-center space-x-4">
             <Image 
               src="/images/msme-logo.png" 
               alt="MSME and ISO 9001 Certified" 
               width={240} 
               height={80} 
               className="object-contain h-14 w-auto"
             />
          </div>
        </div>
        
      </div>
    </footer>
  );
}
