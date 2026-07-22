"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, Award, Users, Check } from 'lucide-react';
import axios from 'axios';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  email: z.string().email('Invalid email address'),
  location: z.string().min(1, 'Please select a location'),
});

type FormData = z.infer<typeof formSchema>;

export default function DmiHero() {
  const router = useRouter();
  const [apiError, setApiError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: '',
    }
  });

  const onSubmit = async (data: FormData) => {
    setApiError(null);
    try {
      await axios.post('/api/lead', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        location: data.location,
        enquirysource: "DMI",
      });

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'form_submit', { send_to: 'AW-10840521883' });
      }
      
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/thank-you');
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      setApiError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="premium-gradient text-white py-12 lg:py-20 px-4 md:px-10 xl:px-16 relative overflow-hidden min-h-[calc(100vh-90px)] flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-black/5 -skew-x-12 transform translate-x-1/2" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between relative z-10 w-full">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 w-full animate-fade-in-up">
          
          {/* Top Badges */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="flex items-center space-x-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#fad400]" />
              <span>10+ Years Legacy</span>
            </span>
            <span className="flex items-center space-x-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-[#fad400]" />
              <span>50,000+ Alumni</span>
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight uppercase text-white animate-fade-in-up stagger-1">
              Digital Marketing Intelligence <br />
              <span className="text-[#fad400]">(DMI) AI Diploma Program</span>
            </h1>
            
            <p className="text-white/90 text-sm sm:text-base max-w-2xl font-normal leading-relaxed animate-fade-in-up stagger-2">
              India's First 1-Year AI-Integrated Diploma (400+ Hours). Transition from a Marketer to a Growth Strategist with our Intelligence Cycle Powered Digital Marketing Diploma Course.
            </p>
          </div>

          {/* Highlights Checklist */}
          <div className="space-y-3.5 pt-2 animate-fade-in-up stagger-3">
            <div className="flex items-center space-x-3 text-white/95">
              <div className="flex-shrink-0 bg-emerald-500/20 text-emerald-400 p-1 rounded-full border border-emerald-500/30">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="font-medium text-sm sm:text-base"><strong className="text-[#fad400]">PPO:</strong> Pre-Placement Offer (Guaranteed Employment)</span>
            </div>
            <div className="flex items-center space-x-3 text-white/95">
              <div className="flex-shrink-0 bg-emerald-500/20 text-emerald-400 p-1 rounded-full border border-emerald-500/30">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="font-medium text-sm sm:text-base"><strong className="text-[#fad400]">AI-Genesis:</strong> Integration of Generative AI</span>
            </div>
            <div className="flex items-center space-x-3 text-white/95">
              <div className="flex-shrink-0 bg-emerald-500/20 text-emerald-400 p-1 rounded-full border border-emerald-500/30">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="font-medium text-sm sm:text-base"><strong className="text-[#fad400]">Agency Floor:</strong> 3-Months Real-time Experience Certificate</span>
            </div>
          </div>

          {/* Stipend Badge */}
          <div className="pt-2 animate-fade-in-up stagger-4">
             <div className="inline-block px-5 py-2.5 bg-[#fad400] text-[#0f172a] font-bold text-sm sm:text-base rounded-xl shadow-lg border border-[#f0c800] uppercase tracking-wider animate-pulse">
               Get Up to Rs. 10K during Specialization
             </div>
          </div>
        </div>

        {/* Right Content / Form */}
        <div className="w-full lg:w-[420px] shrink-0">
          <div id="enquiry-form" className="bg-white rounded-3xl p-6 sm:p-8 w-full shadow-2xl relative border border-slate-100 text-slate-800 scroll-mt-24">
            <div className="flex flex-col items-center mb-6 text-center">
              <h3 className="text-[#0f172a] text-lg sm:text-xl font-bold uppercase tracking-wide relative pb-1.5 inline-block">
                Book Free Demo Session
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#b52727] rounded-full"></span>
              </h3>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-0.5">Name</label>
                <input
                  id="name"
                  placeholder="Enter your name"
                  {...register('name')}
                  className={`w-full px-4 py-3 text-sm text-[#0f172a] bg-white border-2 rounded-xl focus:outline-none focus:border-[#b52727] focus:ring-4 focus:ring-[#b52727]/10 transition-all font-normal placeholder:text-gray-400 ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
                />
                {errors.name && <p className="text-red-500 text-[11px] font-medium mt-0.5 ml-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-0.5">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register('phone')}
                  maxLength={10}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                  }}
                  className={`w-full px-4 py-3 text-sm text-[#0f172a] bg-white border-2 rounded-xl focus:outline-none focus:border-[#b52727] focus:ring-4 focus:ring-[#b52727]/10 transition-all font-normal placeholder:text-gray-400 ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
                />
                {errors.phone && <p className="text-red-500 text-[11px] font-medium mt-0.5 ml-1">{errors.phone.message}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-0.5">Email ID</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email id"
                  {...register('email')}
                  className={`w-full px-4 py-3 text-sm text-[#0f172a] bg-white border-2 rounded-xl focus:outline-none focus:border-[#b52727] focus:ring-4 focus:ring-[#b52727]/10 transition-all font-normal placeholder:text-gray-400 ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
                />
                {errors.email && <p className="text-red-500 text-[11px] font-medium mt-0.5 ml-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="location" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-0.5">Location</label>
                <div className="relative">
                  <select
                    id="location"
                    {...register('location')}
                    className={`w-full px-4 py-3 text-sm text-[#0f172a] bg-white border-2 rounded-xl appearance-none focus:outline-none focus:border-[#b52727] focus:ring-4 focus:ring-[#b52727]/10 transition-all font-normal ${errors.location ? 'border-red-500' : 'border-slate-300'}`}
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
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                {errors.location && <p className="text-red-500 text-[11px] font-medium mt-0.5 ml-1">{errors.location.message}</p>}
              </div>

              <div className="flex items-start space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="agree"
                  required
                  defaultChecked
                  className="mt-0.5 accent-[#b52727]"
                />
                <label htmlFor="agree" className="text-[11px] text-slate-500 leading-normal font-normal">
                  I agree to the DIDM Terms of Use and Privacy Policy
                </label>
              </div>

              {apiError && (
                <p className="text-red-600 text-xs font-semibold text-center mt-1 bg-red-50 p-2.5 rounded border border-red-100">
                  {apiError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#b52727] hover:bg-[#911f1f] text-white text-sm font-bold py-3.5 mt-2 rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center space-x-2 uppercase tracking-wider"
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
                    <span>SUBMIT &rarr;</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {isSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-sm animate-fade-in"></div>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative z-10 text-center animate-zoom-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6 italic">
              "Your journey to digital excellence starts here."
            </p>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#b52727] uppercase tracking-widest">
                Application Received
              </p>
              <div className="flex items-center justify-center space-x-2 text-gray-400 text-xs">
                <div className="w-1.5 h-1.5 bg-[#b52727] rounded-full animate-ping"></div>
                <span>Redirecting to next step...</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
