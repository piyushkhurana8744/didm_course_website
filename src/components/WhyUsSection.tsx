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
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main "Why Us" Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-[38px] font-black text-gray-800 leading-[1.2] tracking-tight border-l-4 border-[#b32b2b] pl-4">
                #Why we are Best in Digital Marketing<br/>Training Institute PAN INDIA
              </h2>
              <p className="mt-4 text-gray-800 text-[15px] leading-relaxed">
                At Delhi Institute of Digital Marketing <span className="text-[#b32b2b] font-bold">(DIDM)</span>, we stand out as the leaders in digital marketing training domain and there are more than <span className="font-bold">150+</span> reasons to join our training program. <span className="font-bold">Rating</span> in training and services 4.8/5
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 pt-2">
              <ul className="space-y-4">
                {reasonsLeft.map((reason, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-[#b32b2b] flex-shrink-0 mt-0.5 bg-red-100 rounded-full" />
                    <span className="text-[13px] font-semibold text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {reasonsRight.map((reason, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-[#b32b2b] flex-shrink-0 mt-0.5 bg-red-100 rounded-full" />
                    <span className="text-[13px] font-semibold text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button className="bg-black text-white font-semibold text-sm py-2.5 px-6 rounded shadow hover:bg-gray-800 transition-colors">
                 Know More Now
              </button>
              <button className="bg-[#b32b2b] text-white font-semibold text-sm py-2.5 px-6 rounded shadow hover:bg-[#8f2222] transition-colors flex items-center gap-2">
                 Book Your Free Demo Class <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Right Content - Testimonial Slider */}
          <div className="relative flex justify-center items-center lg:justify-end">
            <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-[420px] flex flex-col items-center text-center relative overflow-hidden border border-gray-100 min-h-[480px]">
               
               {/* Top Half (White) */}
               <div className="p-8 pb-12 w-full flex-grow flex flex-col items-center relative z-10">
                 {/* Decorative Quote Mark */}
                 <div className="mb-4 mt-2 text-[#fca5a5] opacity-50">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto block">
                      <path d="M10 11h-4a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a6 6 0 0 1-6 6h-1"></path>
                      <path d="M22 11h-4a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a6 6 0 0 1-6 6h-1"></path>
                   </svg>
                 </div>
                 
                 <p className="text-[15px] font-medium text-gray-800 leading-[1.6]">
                   {testimonials[currentSlide].text}
                 </p>
                 
                 <div className="flex space-x-1 mt-6">
                   {[1,2,3,4,5].map(star => (
                     <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                 </div>
               </div>
               
               {/* Bottom Half (Light Blue) */}
               <div className="bg-[#eef5fd] w-full pt-12 pb-8 flex flex-col items-center relative h-[200px]">
                 {/* Profile Picture overlapping boundary */}
                 <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 rounded-full border-[6px] border-white shadow-sm overflow-hidden bg-white w-24 h-24 z-20">
                    <img 
                      src={testimonials[currentSlide].image} 
                      alt={testimonials[currentSlide].name} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=" + testimonials[currentSlide].name + "&background=random"; }}
                    />
                 </div>
                 
                 <h4 className="text-[17px] font-bold text-black mt-2 tracking-wide font-sans">
                   {testimonials[currentSlide].name}
                 </h4>
                 
                 {/* Pagination Dots */}
                 <div className="flex space-x-3 mt-6">
                   {testimonials.map((_, idx) => (
                      <button 
                         key={idx} 
                         onClick={() => setCurrentSlide(idx)}
                         className={`w-3.5 h-3.5 rounded-full transition-colors ${idx === currentSlide ? 'bg-[#cc0000]' : 'bg-[#e5ddd5]'}`}
                         aria-label={`Go to slide ${idx + 1}`}
                      />
                   ))}
                 </div>
               </div>
               
            </div>
          </div>
          
        </div>
        
        {/* Keywords Section */}
        <div className="mt-24 pt-4">
           <h3 className="text-3xl md:text-[32px] font-black text-[#262626] mb-8 border-b-[3px] border-[#b32b2b] pb-2 inline-block">
             #1 Choice of Learners When They Searched For
           </h3>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
              <ul className="space-y-4">
                {searchedLeft.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#b32b2b] flex-shrink-0 bg-red-100 rounded-full" />
                    <span className="text-[14px] text-gray-700 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {searchedRight.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#b32b2b] flex-shrink-0 bg-red-100 rounded-full" />
                    <span className="text-[14px] text-gray-700 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
           </div>
           
           <div className="mt-8 flex justify-center">
              <button className="bg-[#b32b2b] text-white font-semibold text-[15px] py-3 px-8 rounded shadow hover:bg-[#8f2222] transition-colors flex items-center gap-2">
                 Book Your Free Demo Class <ArrowRight className="w-4 h-4" />
              </button>
           </div>
        </div>
        
      </div>
    </section>
  );
}
