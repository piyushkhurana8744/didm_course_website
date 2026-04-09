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
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Content */}
        <div className="space-y-6">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-12 h-1 bg-[#b32b2b]"></span>
              <h4 className="text-gray-800 font-bold text-sm tracking-widest uppercase">
                <span className="text-[#e2e100] font-black">[</span> DELHI INSTITUTE OF DIGITAL MARKETING <span className="text-[#e2e100] font-black">]</span>
              </h4>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-black text-[#262626] tracking-tight leading-none pt-2">
              Training Specification
            </h2>
          </div>
          
          <div className="space-y-4 max-w-xl">
            <p className="text-gray-800 text-[18px] leading-relaxed font-medium">
              Our best digital marketing course is completely <span className="font-bold">Industry-led</span> and task oriented. Multiple <span className="font-bold">Case studies</span> and <span className="font-bold">live projects</span> providing practical inside and helping effective strategies.
            </p>
          </div>

          <ul className="space-y-3 pt-4">
            {specs.map((spec, idx) => (
              <li key={idx} className="flex items-start space-x-6 group">
                <span className="text-[#b32b2b] font-black text-lg min-w-[70px] flex-shrink-0">
                  <span className="text-orange-500">[</span> {spec.id} <span className="text-orange-500">]</span>
                </span>
                <span className="text-gray-900 font-black text-[15px] sm:text-[17px] tracking-wide leading-tight group-hover:text-[#b32b2b] transition-colors">
                  {spec.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-8">
            <a href="#enquiry-form" className="bg-[#b32b2b] hover:bg-[#a60b0e] w-full sm:w-auto text-white font-bold py-4 px-12 rounded shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-3 uppercase tracking-wider">
              <span>Download Brochure</span>
              <svg className="w-5 h-5 border-2 border-white rounded-full p-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
          </div>
        </div>

        {/* Right Side: Image Layout */}
        <div className="relative w-full h-[600px] lg:h-[800px] rounded-sm overflow-hidden shadow-2xl">
           <Image 
             src="/images/DSC05416.png" 
             alt="Classroom Training Students" 
             fill
             className="object-cover"
             priority
           />
        </div>

      </div>
    </section>
  );
}
