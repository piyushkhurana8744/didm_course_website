import React from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

const benefits = [
  { title: "PPO (Pre-Placement Offer)", desc: "Get hired by top agencies before course completion." },
  { title: "3 Months Agency Floor", desc: "Real-world experience certificate from an active agency." },
  { title: "Paid Ad Campaigns", desc: "Real money provided to run live campaigns." },
  { title: "DMI Power Kit", desc: "Premium laptop bag, diary & pen." },
  { title: "1 Year Web Hosting", desc: "Free hosting plan for practice & projects." },
  { title: "35+ Certifications", desc: "Google, HubSpot & MSME (Skill India)." },
  { title: "Special Sessions", desc: "Personality, Soft Skills, Placement & Freelancing." },
  { title: "2 Month Paid Internship", desc: "Earn while you learn with live assignments." },
  { title: "30+ Premium Paid Tools", desc: "Access industry grade marketing tools." },
];

export default function ExclusiveDmiBenefits() {
  return (
    <section className="py-20 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Copy and Benefits checklist */}
        <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0f172a] uppercase tracking-tight leading-tight">
              Exclusive <span className="text-[#b52727]">DMI Benefits</span>
            </h2>
            <p className="text-slate-600 text-[15px] sm:text-[17px] font-normal leading-relaxed">
              Powerful value add-ons designed to maximize your career outcomes, industry exposure, and placement success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
            {benefits.map((ben, idx) => (
              <div key={idx} className="flex items-start space-x-3.5 group">
                <div className="mt-0.5 text-emerald-600 flex-shrink-0 bg-emerald-50 p-1.5 rounded-lg border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[13px] sm:text-[14px] font-bold text-[#0f172a] uppercase tracking-tight leading-snug group-hover:text-[#b52727] transition-all duration-300">{ben.title}</h4>
                  <p className="text-xs text-slate-500 leading-normal font-normal">{ben.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Stack of three images with circular badges */}
        <div className="lg:col-span-5 flex flex-col space-y-6 items-center animate-zoom-in">
          {[
            { src: "/images/DSC05416.png", alt: "Students in training spec" },
            { src: "/images/DSC05961.png", alt: "Students presenting project" },
            { src: "/images/DSC07557.png", alt: "Students classroom presentation" }
          ].map((img, idx) => (
            <div key={idx} className="relative w-full max-w-[420px] h-[130px] sm:h-[145px] rounded-2xl overflow-hidden shadow-md border border-white hover:scale-105 transition-all duration-300">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
              {/* Overlay with DIDM branding badge */}
              <div className="absolute top-3 right-3 bg-[#b52727] text-white w-7 h-7 rounded-full flex items-center justify-center font-black text-[12px] border border-white shadow-lg uppercase">
                d
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
