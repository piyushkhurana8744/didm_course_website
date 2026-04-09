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

export default function CourseDescription() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Overlapping Images */}
        <div className="relative h-[400px] sm:h-[500px]">
          {/* Back Image (Top tilted) */}
          <div className="absolute top-0 right-0 w-[85%] h-[80%] z-0 rounded-sm shadow-lg overflow-hidden transform rotate-2">
            <Image 
              src="/images/DSC07557.png" 
              alt="Digital Marketing Classroom" 
              fill
              className="object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          {/* Front Image (Bottom tilted) */}
          <div className="absolute bottom-0 left-0 w-[85%] h-[80%] z-10 rounded-sm shadow-xl overflow-hidden transform -rotate-1">
            <Image 
              src="/images/DSC05961.png" 
              alt="Digital Marketing Graduates" 
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h4 className="text-black font-extrabold text-sm tracking-widest uppercase italic">HYBRID TRAINING PROGRAM</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#b32b2b] uppercase tracking-tighter leading-none">
              MASTER IN DIGITAL MARKETING
            </h2>
          </div>
          
          <p className="text-gray-600 text-base leading-relaxed font-medium">
            We are prime and the best institute for a <span className="font-bold text-gray-800">digital marketing course</span> in Delhi/NCR & across India. This course makes you capable of grabbing a good package as a fresher. Furthermore, it will enhance your skill if you are a working professional and also provide you with ample opportunities to work as a freelancer after completion of the digital marketing course.
          </p>

          <ul className="space-y-4 pt-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-4">
                <div className="bg-[#b32b2b] p-1.5 rounded-full">
                   <Star className="text-white fill-white" size={14} />
                </div>
                <span className="text-gray-950 font-black text-lg tracking-tight">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <button className="bg-[#b32b2b] hover:bg-[#a60b0e] text-white font-bold py-4 px-10 rounded shadow-2xl transition-all hover:scale-105 flex items-center space-x-3 uppercase tracking-wider">
              <span>DOWNLOAD CURRICULUM</span>
              <svg className="w-5 h-5 border-2 border-white rounded-full p-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
