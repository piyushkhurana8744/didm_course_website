"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Download, ArrowRight, CheckCircle2 } from 'lucide-react';

const reasonsLeft = [
  "AI Based Master's Program in Digital Marketing",
  "50+ Advanced Modules | 30+ Certifications",
  "02 Months Agency Based Internship",
  "FREE ( E-Notes | E-Books | LMS )",
  "650+ Placement Partner",
  "Start Earning during Training Program",
];

const reasonsRight = [
  "ISO Certification | MSME Certified",
  "Flexible Timing & Batches",
  "100% Placement Support",
  "100% Practical Training",
  "All Branches with Metro Connectivity",
  "Awarded - ASSOCHAM | IFA | WASME",
];

const searchedLeft = [
  "Best Digital Marketing Institute Across Delhi",
  "Digital Marketing Institute in Delhi & Delhi NCR",
  "Digital Marketing Course in Delhi & Delhi NCR",
  "Digital Marketing Course in Pitampura",
];

const searchedRight = [
  "Digital Marketing Institute in Noida",
  "Digital Marketing Institute in Gurgaon",
  "Digital Marketing Training in Delhi",
  "Digital Marketing Course in Rajouri Garden",
];

const testimonials = [
  {
    name: "Divya Gupta",
    image: "/images/divya-gupta.png",
    text: "I recently completed the digital marketing course at DIDM and I am very impressed with the institute. The curriculum is impressive and up to date. Trainers are experienced and passionate about teaching."
  },
  {
    name: "Arjun Ahuja",
    image: "/images/arjun-ahuja.png",
    text: "I have a wonderful experience with Delhi Institute of Digital Marketing. I recently completed my Master course. If anybody wants to join a digital marketing course, they must go to the Satya Niketan branch."
  },
  {
    name: "Jitender",
    image: "/images/jitender.png",
    text: "Best Digital Marketing Institute in Delhi, they also provide onboard training which helps you get practical experience. If you are looking for a Digital marketing institute then this is the right place."
  },
  {
    name: "Debasis",
    image: "/images/debasis.png",
    text: "I am a student of DIDM. I have never faced any issue regarding anything. All trainers are very cooperative and polite. DIDM is the best digital marketing institute in delhi. I strongly recommend DIDM to everyo"
  },
  {
    name: "Pakhi",
    image: "/images/pakhi.png",
    text: "DIDM is the best Digital Marketing institute as per my opinion because after class 12th I was clueless and DIDM showed me the new way to succeed. Now, I am working with a digital agency in Paid ads."
  }
];

export default function WhyUsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Main "Why Us" Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Left Content */}
          <div className="space-y-5 animate-fade-in-up">
            <div>
              <h2 className="text-2xl md:text-[28px] font-semibold text-slate-800 leading-[1.3] tracking-tight border-l-4 border-[#b52727] pl-5">
                #Why we are Best in Digital Marketing<br/>Training Institute PAN INDIA
              </h2>
              <p className="mt-4 text-slate-600 text-[15px] leading-relaxed font-normal">
                At Delhi Institute of Digital Marketing <span className="text-[#b52727] font-medium">(DIDM)</span>, we stand out as the leaders in the digital marketing training domain. There are more than <span className="text-[#b52727] font-medium">150+</span> reasons to join our program. Our current training rating is <span className="text-[#b52727] font-medium">4.8/5</span>.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-3 animate-fade-in-up stagger-1">
              <ul className="space-y-4">
                {reasonsLeft.map((reason, idx) => (
                  <li key={idx} className="flex items-start space-x-3 group">
                    <CheckCircle2 className="w-5 h-5 text-[#b52727] flex-shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[13px] font-normal text-slate-600 tracking-tight leading-snug">{reason}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {reasonsRight.map((reason, idx) => (
                  <li key={idx} className="flex items-start space-x-3 group">
                    <CheckCircle2 className="w-5 h-5 text-[#b52727] flex-shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[13px] font-normal text-slate-600 tracking-tight leading-snug">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-5 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center animate-fade-in-up stagger-2">
              <a href="#enquiry-form" className="bg-slate-900 text-white font-medium text-[13px] py-3 px-7 rounded-lg shadow-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all active:scale-95">
                 Know More Now
              </a>
              <a href="#enquiry-form" className="bg-[#b52727] text-white font-semibold text-[13px] py-3 px-7 rounded-lg shadow-lg hover:bg-[#911f1f] hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95">
                 Book Free Demo Class <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Testimonial Slider */}
          <div className="relative flex justify-center items-center lg:justify-end animate-zoom-in stagger-2">
            <div className="bg-white rounded-[32px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] w-full max-w-[360px] flex flex-col items-center text-center relative overflow-hidden border border-slate-50 min-h-[400px]">
               
               {/* Top Half (White) */}
               <div className="p-7 pb-8 w-full flex-grow flex flex-col items-center relative z-10">
                 {/* Decorative Quote Mark */}
                 <div className="mb-4 mt-1 text-[#b52727] opacity-20">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto block">
                      <path d="M10 11h-4a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a6 6 0 0 1-6 6h-1"></path>
                      <path d="M22 11h-4a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a6 6 0 0 1-6 6h-1"></path>
                    </svg>
                 </div>
                 
                 <p className="text-[14px] font-normal text-slate-700 leading-relaxed italic">
                   "{testimonials[currentSlide].text}"
                 </p>
                 
                 <div className="flex space-x-1.5 mt-8">
                   {[1,2,3,4,5].map(star => (
                     <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                 </div>
               </div>
               
               {/* Bottom Half (Light Blue) */}
               <div className="bg-slate-50 w-full pt-12 pb-8 flex flex-col items-center relative h-[180px]">
                 {/* Profile Picture overlapping boundary */}
                 <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white w-20 h-20 z-20">
                    <img 
                      src={testimonials[currentSlide].image} 
                      alt={testimonials[currentSlide].name} 
                      className="w-full h-full object-cover transition-transform duration-500 scale-100 hover:scale-110"
                      onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=" + testimonials[currentSlide].name + "&background=b52727&color=fff"; }}
                    />
                 </div>
                 
                 <h4 className="text-[16px] font-semibold text-[#b52727] mt-1">
                   {testimonials[currentSlide].name}
                 </h4>
                 
                 {/* Pagination Dots */}
                 <div className="flex space-x-2 mt-5">
                   {testimonials.map((_, idx) => (
                      <button 
                         key={idx} 
                         onClick={() => setCurrentSlide(idx)}
                         className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-[#b52727] w-8' : 'bg-slate-300 hover:bg-slate-400'}`}
                         aria-label={`Go to slide ${idx + 1}`}
                      />
                   ))}
                 </div>
               </div>
               
            </div>
          </div>
          
        </div>
        
        {/* Keywords Section */}
        <div className="mt-14 pt-8 border-t border-slate-100 animate-fade-in-up stagger-3">
           <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6 text-center lg:text-left">
              #1 Choice of Learners When They Searched For
           </h3>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3">
              <ul className="space-y-4">
                {searchedLeft.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-4 group">
                    <CheckCircle2 className="w-5 h-5 text-[#b52727] flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[14px] text-slate-600 font-normal tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {searchedRight.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-4 group">
                    <CheckCircle2 className="w-5 h-5 text-[#b52727] flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[16px] text-slate-600 font-normal tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
           </div>
           
           <div className="mt-10 flex justify-center">
              <a href="#footer-form" className="bg-[#b52727] text-white font-semibold text-[14px] py-3.5 px-8 rounded-xl shadow-xl hover:bg-[#911f1f] hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95">
                 Book Your Free Demo Class <ArrowRight className="w-4 h-4" />
              </a>
           </div>
        </div>
        
      </div>
    </section>
  );
}
