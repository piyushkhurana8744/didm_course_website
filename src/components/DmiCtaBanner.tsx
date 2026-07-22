import React from 'react';
import { Phone, Download, HelpCircle } from 'lucide-react';

export default function DmiCtaBanner() {
  return (
    <section className="bg-[#b52727] text-white py-12 px-6 shadow-xl relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl opacity-30" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 relative z-10 text-center">
        
        {/* Title / Hotline */}
        <div className="space-y-1.5 animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight uppercase leading-tight flex flex-wrap items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#fad400] animate-bounce" />
            <span>Still Confused? Call <a href="tel:9355835635" className="text-[#fad400] underline hover:text-yellow-400 transition-colors">@9355835635</a> for answers</span>
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2 animate-zoom-in">
          <a href="#enquiry-form" className="bg-[#fad400] hover:bg-yellow-400 text-[#0f172a] font-bold py-3 px-8 rounded-xl shadow-xl flex items-center justify-center space-x-2.5 w-full sm:w-auto transition-all hover:-translate-y-0.5 active:scale-95 text-xs uppercase tracking-wider">
            <Download className="w-4 h-4" strokeWidth={2.5} />
            <span>Download Brochure</span>
          </a>
          
          <a href="#enquiry-form" className="bg-white hover:bg-slate-50 text-[#0f172a] font-bold py-3 px-8 rounded-xl shadow-lg flex items-center justify-center space-x-2.5 w-full sm:w-auto transition-all hover:-translate-y-0.5 active:scale-95 text-xs uppercase tracking-wider">
            <Phone className="w-4 h-4" />
            <span>Start With Demo</span>
          </a>
        </div>

      </div>
    </section>
  );
}
