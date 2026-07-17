"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, BookOpen, FileSpreadsheet, GitPullRequest, Laptop, RotateCcw, Award } from 'lucide-react';
import axios from 'axios';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  email: z.string().email('Invalid email address'),
  location: z.string().min(1, 'Please select a location'),
});

type FormData = z.infer<typeof formSchema>;

const cycleSteps = [
  {
    icon: BookOpen,
    title: "Training (The Academy)",
    desc: "Gather Knowledge",
  },
  {
    icon: FileSpreadsheet,
    title: "Assignments & Assessments",
    desc: "Complete Assignments and take assessments",
  },
  {
    icon: GitPullRequest,
    title: "Mentorship (The Agency Floor)",
    desc: "Work under a mentor on Agency Floor",
  },
  {
    icon: Laptop,
    title: "Live Projects",
    desc: "Work On Real Brands & Submit Marketing Reports",
  },
  {
    icon: RotateCcw,
    title: "Repeat",
    desc: "Go back to the Academy to Learn new chapter",
  },
  {
    icon: Award,
    title: "1-Year Diploma",
    desc: "AI-integrated 1-year (400+ Hours) diploma program",
  },
];

export default function DmiEcosystem() {
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
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 space-y-10">
        
        {/* Intro Section */}
        <div className="space-y-4 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-[38px] font-extrabold text-[#0f172a] leading-tight tracking-tight">
            <span className="text-[#b52727] italic">Digital Marketing Intelligence</span> (DMI) Diploma Program
          </h2>
          <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed font-normal text-center">
            The Digital Marketing Intelligence (DMI) course is India's first 1-year AI-integrated diploma program designed to transition students from traditional marketers into growth strategists. Spanning over 400 hours, the curriculum operates on a unique &ldquo;Intelligence Cycle&rdquo; that builds proficiency through a repetitive loop of academy training, assessments, mentorship on an active agency floor, and live projects with real brands. The syllabus covers seven distinct phases, ranging from Digital Architecture and AI-Genesis to Performance Metrics and E-Commerce Strategic Intelligence, ensuring mastery over tools like Gemini, SEMrush, and Google Ads. To ensure career readiness, the program includes exclusive benefits such as a Pre-Placement Offer (PPO), a 2-month paid internship, 3 months of agency floor experience, and funding to run real paid ad campaigns.
          </p>
        </div>

        {/* Sub-heading — left aligned like screenshot */}
        <div className="pt-2">
          <h3 className="text-lg md:text-xl font-bold text-[#0f172a] leading-tight">
            The DMI Intelligence Cycle <span className="text-[#b52727]">(The Core Ecosystem)</span>
          </h3>
        </div>

        {/* Two Column Layout (3-col Cycle Grid + Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Grid: 6 Steps — 3 columns, centered icon on top */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {cycleSteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={idx} 
                  className="group bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-300 hover:-translate-y-0.5 flex flex-col items-center text-center cursor-default"
                >
                  {/* Circular Icon Container */}
                  <div className="w-14 h-14 rounded-full border-2 border-red-200/60 flex items-center justify-center mb-3 group-hover:border-[#b52727] group-hover:bg-red-50 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-[#b52727]" />
                  </div>

                  <h4 className="text-[13px] font-bold text-[#0f172a] leading-snug mb-1">{step.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-normal font-normal">{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Form with inline icons */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-lg relative text-slate-800 self-start">
            <h3 className="text-[#0f172a] text-lg font-bold mb-5 text-center">
              Download Brochure
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
              {/* Full Name with trailing icon */}
              <div className="relative">
                <input
                  id="eco-name"
                  placeholder="Full Name"
                  {...register('name')}
                  className={`w-full pl-4 pr-10 py-3 text-sm text-[#0f172a] bg-white border rounded-lg focus:outline-none focus:border-[#b52727] focus:ring-2 focus:ring-[#b52727]/10 transition-all placeholder:text-gray-400 ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
                />
                <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                {errors.name && <p className="text-red-500 text-[10px] font-medium mt-0.5 ml-1">{errors.name.message}</p>}
              </div>

              {/* Phone with trailing icon */}
              <div className="relative">
                <input
                  id="eco-phone"
                  type="tel"
                  placeholder="Phone"
                  {...register('phone')}
                  maxLength={10}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                  }}
                  className={`w-full pl-4 pr-10 py-3 text-sm text-[#0f172a] bg-white border rounded-lg focus:outline-none focus:border-[#b52727] focus:ring-2 focus:ring-[#b52727]/10 transition-all placeholder:text-gray-400 ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
                />
                <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                {errors.phone && <p className="text-red-500 text-[10px] font-medium mt-0.5 ml-1">{errors.phone.message}</p>}
              </div>

              {/* Email with trailing icon */}
              <div className="relative">
                <input
                  id="eco-email"
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                  className={`w-full pl-4 pr-10 py-3 text-sm text-[#0f172a] bg-white border rounded-lg focus:outline-none focus:border-[#b52727] focus:ring-2 focus:ring-[#b52727]/10 transition-all placeholder:text-gray-400 ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
                />
                <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                {errors.email && <p className="text-red-500 text-[10px] font-medium mt-0.5 ml-1">{errors.email.message}</p>}
              </div>

              {/* Location Select */}
              <div className="relative">
                <select
                  id="eco-location"
                  {...register('location')}
                  className={`w-full px-4 py-3 text-sm text-[#0f172a] bg-white border rounded-lg appearance-none focus:outline-none focus:border-[#b52727] focus:ring-2 focus:ring-[#b52727]/10 transition-all ${errors.location ? 'border-red-500' : 'border-slate-300'}`}
                >
                  <option value="">Choose Center Near You...</option>
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
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                {errors.location && <p className="text-red-500 text-[10px] font-medium mt-0.5 ml-1">{errors.location.message}</p>}
              </div>

              <div className="flex items-start space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="agree-eco"
                  required
                  defaultChecked
                  className="mt-0.5 accent-[#b52727]"
                />
                <label htmlFor="agree-eco" className="text-[11px] text-slate-500 leading-normal font-normal">
                  I agree to the DIDM <span className="text-[#b52727] font-medium">Terms of Use</span> and <span className="text-[#b52727] font-medium">Privacy Policy</span>
                </label>
              </div>

              {apiError && (
                <p className="text-red-600 text-xs font-semibold text-center mt-1 bg-red-50 p-2 rounded border border-red-100">
                  {apiError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#b52727] hover:bg-[#911f1f] text-white text-sm font-bold py-3.5 mt-2 rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center uppercase tracking-wider"
              >
                {isSubmitting ? 'Processing...' : 'Submit Your Request'}
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
