import React from 'react';
import Image from 'next/image';
import HeroForm from './HeroForm';

export default function HeroSection({ term = "course" }: { term?: string }) {
  const upperTerm = term.toUpperCase();
  
  return (
    <section className="premium-gradient text-white py-10 lg:py-14 px-4 md:px-10 xl:px-16 relative overflow-hidden min-h-[calc(100vh-90px)] flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-black/5 -skew-x-12 transform translate-x-1/2" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between relative z-10 w-full">
        
        {/* Left Content */}
        <div className="flex-1 space-y-5 w-full animate-fade-in-up">
          
          <div className="space-y-2">
            <h3 className="text-white font-medium text-base sm:text-lg tracking-wide uppercase animate-fade-in-up stagger-1">
              #1 AI + Master in
            </h3>
            
            <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold leading-[1.2] tracking-tight text-[#fad400] uppercase animate-fade-in-up stagger-2">
              DIGITAL MARKETING<br />
              <span className="text-white">{upperTerm}</span>
            </h1>
          </div>
          
          <p className="text-white/90 text-[15px] sm:text-base max-w-xl font-normal leading-relaxed animate-fade-in-up stagger-3">
            Join DIDM's <span className="text-[#fad400] font-medium">AI-powered</span> Digital Marketing course certification program <span>Delhi NCR</span> and Master SEO, Social Media Marketing, Google Ads, and Performance Marketing.
          </p>

          <div className="flex flex-wrap gap-3 items-center animate-fade-in-up stagger-4">
             <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 font-medium text-[12px] uppercase tracking-widest">
               Online & Offline Modes Available
             </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-4 animate-fade-in-up stagger-4">
            <Image src="/images/brand-award.png" alt="Awards & Certifications" width={500} height={60} className="object-contain opacity-90" />
          </div>
        </div>

        {/* Right Content / Form */}
        <div className="w-full lg:w-[400px] shrink-0">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
