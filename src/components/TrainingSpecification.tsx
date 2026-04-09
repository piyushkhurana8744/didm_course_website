import React from 'react';
import Image from 'next/image';

const specs = [
  { id: "01", text: "LATEST UPDATED COURSE CURRICULUM" },
  { id: "02", text: "ADVANCED LMS TRAINING SUPPORT" },
  { id: "03", text: "EXPERTS SESSIONS AND GUEST LECTURES" },
  { id: "04", text: "GLOBAL RECOGNISED CERTIFICATES" },
  { id: "05", text: "100% PLACEMENT ASSISTANCE" },
  { id: "06", text: "MARKETING AUTOMATION TOOLS" },
  { id: "07", text: "E-BOOKS | E-NOTES | ASSIGNMENTS" },
  { id: "08", text: "CAREER SUPPORT AVAILABLE 24/7" },
  { id: "09", text: "CAPSTONE PROJECT | BACKUP SESSION | 650+ PLACEMENT COMPANIES" },
];

export default function TrainingSpecification() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#b52727]/5 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-0.5 bg-[#b52727] rounded-full"></span>
              <h4 className="text-[#fad400] font-medium text-[11px] tracking-[0.3em] uppercase opacity-80">
                DELHI INSTITUTE OF DIGITAL MARKETING
              </h4>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#0f172a] tracking-tight leading-[1] uppercase">
              TRAINING<br/><span className="text-[#b52727]">SPECIFICATION</span>
            </h2>
          </div>
          
          <div className="max-w-xl">
            <p className="text-slate-600 text-[15px] leading-relaxed font-normal">
              Our best digital marketing course is completely <span className="text-[#b52727] font-medium">Industry-led</span> and task oriented. Multiple <span className="text-[#0f172a] font-medium">Case studies</span> and <span className="text-[#0f172a] font-medium">live projects</span> providing practical insight.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 pt-2">
            {specs.map((spec, idx) => (
              <li key={idx} className={`flex items-start space-x-5 group animate-fade-in-up stagger-${idx + 1}`}>
                <span className="text-[#b52727] font-semibold text-lg min-w-[60px] flex-shrink-0 flex items-center">
                  <span className="text-[#fad400]/40 mr-2 font-normal">/</span> {spec.id}
                </span>
                <span className="text-[#0f172a] font-normal text-[14px] tracking-tight leading-snug group-hover:text-[#b52727] transition-all duration-300 uppercase">
                  {spec.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <a href="#footer-form" className="bg-[#b52727] hover:bg-[#911f1f] w-full sm:w-auto text-white font-semibold py-3.5 px-8 rounded-xl shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center space-x-3 uppercase tracking-[0.15em] text-sm active:scale-95">
              <span>Download Brochure</span>
              <svg className="w-5 h-5 border-[1.5px] border-white/30 rounded-full p-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
          </div>
        </div>

        {/* Right Side: Image Layout */}
        <div className="relative w-full h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border-2 border-white/10 animate-zoom-in">
           <Image 
             src="/images/DSC05416.png" 
             alt="Classroom Training Students" 
             fill
             className="object-cover transition-transform duration-1000 hover:scale-105"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-40" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/10 to-transparent" />
        </div>

      </div>
    </section>
  );
}
