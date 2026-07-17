import React from 'react';
import Image from 'next/image';
import { Sparkles, Home, Shield, ShoppingBag, Coffee, Rocket, Laptop, Film, GraduationCap } from 'lucide-react';

const industries = [
  { icon: <Sparkles className="w-5 h-5 text-[#b52727]" />, name: "Lifestyle" },
  { icon: <Home className="w-5 h-5 text-[#b52727]" />, name: "Real Estate" },
  { icon: <Shield className="w-5 h-5 text-[#b52727]" />, name: "Insurtech" },
  { icon: <ShoppingBag className="w-5 h-5 text-[#b52727]" />, name: "E-Commerce" },
  { icon: <Coffee className="w-5 h-5 text-[#b52727]" />, name: "Food & Beverages" },
  { icon: <Rocket className="w-5 h-5 text-[#b52727]" />, name: "Startup Ecosystem & Entrepreneurship" },
  { icon: <Laptop className="w-5 h-5 text-[#b52727]" />, name: "Information Technology" },
  { icon: <Film className="w-5 h-5 text-[#b52727]" />, name: "Media & Entertainment" },
  { icon: <GraduationCap className="w-5 h-5 text-[#b52727]" />, name: "Education" },
];

export default function LiveProjectIndustries() {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Image with red offset plate */}
        <div className="lg:col-span-5 relative flex justify-center animate-zoom-in">
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px]">
            {/* Red offset solid plate */}
            <div className="absolute inset-0 bg-[#b52727] rounded-3xl -translate-x-5 translate-y-5 -z-10" />
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative bg-white">
              <Image
                src="/images/live-projects-illustration.png"
                alt="Modern professional working on digital marketing graphics"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-[34px] font-extrabold text-[#0f172a] uppercase tracking-tight leading-tight">
              Live Project <span className="text-[#b52727]">Industries</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              Gain hands-on experience by working on real-world projects across high-growth and in-demand industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
            {industries.map((ind, idx) => (
              <div key={idx} className="bg-slate-50 hover:bg-red-50/30 border border-slate-100/80 rounded-xl p-4 flex items-center space-x-3 transition-all duration-300 hover:scale-[1.02] cursor-default">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 flex-shrink-0">
                  {ind.icon}
                </div>
                <span className="text-xs font-bold text-[#0f172a] tracking-tight uppercase leading-snug">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
