import React from 'react';
import Image from 'next/image';
import HeroForm from './HeroForm';

export default function HeroSection() {
  return (
    <section className="bg-[#930c11] text-white py-12 lg:py-16 px-4 md:px-12 xl:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between">
        
        {/* Left Content */}
        <div className="flex-1 space-y-5 lg:pr-10 w-full">
          
          <div className="flex items-center space-x-4 mb-2">
            <h2 className="text-[#e2e100] font-bold text-2xl sm:text-3xl tracking-tight">
              India's 1st HYBRID
            </h2>
            <Image 
              src="/images/10-year.png" 
              alt="10 Years of Excellence" 
              width={100}
              height={100}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md"
            />
          </div>
          
          <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] font-semibold leading-[1.1] tracking-tight">
            <span className="font-medium text-white block mb-1">Master in</span>
            <span className="text-[#e2e100] font-bold block">DIGITAL MARKETING COURSE</span>
          </h1>
          
          <p className="text-white text-[15px] sm:text-base max-w-2xl font-medium pt-2 pb-4 leading-relaxed">
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
        <div className="w-full lg:w-[400px] flex justify-center lg:justify-end shrink-0">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
