import React from 'react';
import { Phone, Download } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="premium-gradient text-white py-10 md:py-12 px-6 shadow-xl relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl opacity-30" />
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:px-8 relative z-10 text-center lg:text-left">
        
        {/* Left: Text */}
        <div className="space-y-2 animate-fade-in-up">
          <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight uppercase leading-tight">
            Still Confused... ??
          </h2>
          <p className="text-[#fad400] text-base md:text-lg font-medium tracking-[0.15em] uppercase">
            Get Instant Career Clarity
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto animate-zoom-in">
          <a href="#footer-form" className="bg-[#fad400] hover:bg-yellow-400 text-[#0f172a] font-semibold py-3.5 px-7 rounded-xl shadow-xl flex items-center justify-center space-x-2 w-full sm:w-auto transition-all hover:-translate-y-0.5 active:scale-95 text-sm">
            <Phone className="w-4 h-4 fill-current" />
            <span className="uppercase tracking-widest text-[13px]">Talk to Counsellor</span>
          </a>
          
          <a href="#enquiry-form" className="bg-white hover:bg-slate-50 text-[#0f172a] font-semibold py-3.5 px-7 rounded-xl shadow-lg flex items-center justify-center space-x-3 w-full sm:w-auto transition-all hover:-translate-y-0.5 active:scale-95 text-sm">
            <span className="uppercase tracking-widest text-[13px]">Curriculum</span>
            <div className="border-[1.5px] border-[#0f172a]/30 rounded-full p-1">
              <Download className="w-3.5 h-3.5" strokeWidth={2.5} />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
