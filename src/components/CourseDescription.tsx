"use client";

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const features = [
  "Offline & Online Trainnig",
  "50+ Modules | 30+ Certifications",
  "02 Months Agency Based Internship",
  "FREE – E-Notes, E-Books, Tools",
  "Recording (LMS) & Live Session",
  "Assignment | Case Studies | Live Projects"
];

export default function CourseDescription({ term = "course" }: { term?: string }) {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-48 h-48 bg-red-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center relative z-10">
        
        {/* Left Side: Overlapping Images */}
        <div className="relative h-[350px] sm:h-[420px] animate-zoom-in">
          {/* Back Image (Top tilted) */}
          <div className="absolute top-0 right-0 w-[85%] h-[80%] z-0 rounded-2xl shadow-2xl overflow-hidden transform rotate-3 border-4 border-white">
            <Image 
              src="/images/DSC07557.png" 
              alt="Digital Marketing Classroom" 
              fill
              className="object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          {/* Front Image (Bottom tilted) */}
          <div className="absolute bottom-0 left-0 w-[85%] h-[80%] z-10 rounded-2xl shadow-2xl overflow-hidden transform -rotate-2 border-4 border-white">
            <Image 
              src="/images/DSC05961.png" 
              alt="Digital Marketing Graduates" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          </div>

        {/* Right Side: Content */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="space-y-3">
            <h4 className="text-[#b52727] font-semibold text-[11px] tracking-[0.3em] uppercase italic bg-red-50/50 inline-block px-4 py-1 rounded-full">HYBRID TRAINING PROGRAM</h4>
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-semibold text-[#0f172a] uppercase tracking-tight leading-[1.2]">
              MASTER <span className="text-[#b52727]">IN DIGITAL</span> MARKETING {term.toUpperCase()}
            </h2>
          </div>
          
          <p className="text-slate-600 text-[15px] leading-relaxed font-normal">
            We are prime and the best institute for a <span className="text-[#b52727] font-medium underline decoration-[#fad400] decoration-2 underline-offset-4">digital marketing {term}</span> in Delhi/NCR & across India. This {term} makes you capable of grabbing a good package as a fresher. Furthermore, it will enhance your skill if you are a working professional.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-3 group">
                <div className="bg-[#b52727]/10 p-2 rounded-lg transition-all duration-300 group-hover:bg-[#b52727]">
                   <Star className="text-[#b52727] group-hover:text-white fill-current" size={12} />
                </div>
                <span className="text-slate-700 font-normal text-[13px] tracking-tight leading-snug">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <a href="#enquiry-form" className="bg-[#b52727] hover:bg-[#911f1f] text-white font-semibold py-3.5 px-8 rounded-xl shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center space-x-3 uppercase tracking-[0.15em] text-sm w-full sm:w-auto active:scale-95">
              <span>Download Curriculum</span>
              <svg className="w-5 h-5 border-[1.5px] border-white/40 rounded-full p-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
