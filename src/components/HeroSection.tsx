import React from 'react';
import Image from 'next/image';
import HeroForm from './HeroForm';

export default function HeroSection() {
  return (
    <section className="bg-[#8a080c] text-white py-12 lg:py-16 px-4 md:px-12 xl:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start justify-between">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 lg:pr-10 w-full pt-4">
          
          <div className="space-y-1">
            <h2 className="text-[#fad400] font-black text-2xl sm:text-3xl tracking-wide uppercase italic">
              India's 1st HYBRID
            </h2>
            
            <div className="flex items-center space-x-6">
              <span className="text-white text-3xl sm:text-4xl font-medium tracking-tight">Master in</span>
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
                <Image 
                  src="/images/10-year.png" 
                  alt="10 Years of Excellence" 
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            
            <h1 className="text-[36px] sm:text-[50px] lg:text-[64px] font-black leading-none tracking-tighter text-[#fad400] uppercase">
              DIGITAL MARKETING COURSE
            </h1>
          </div>
          
          <p className="text-white text-[15px] sm:text-base max-w-2xl font-semibold leading-relaxed">
            India's best digital marketing course offering industry-relevant training through multiple certifications.
          </p>
          
          {/* Certifications and logos - Single Image Row */}
          <div className="pt-2">
             <Image 
               src="/images/brand-award.png" 
               alt="Awarded By and Certifications" 
               width={800} 
               height={120} 
               className="w-full max-w-[800px] h-auto object-contain object-left"
               priority
             />
          </div>
        </div>

        {/* Right Content / Form */}
        <div className="w-full lg:w-[420px] shrink-0 pt-4">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
