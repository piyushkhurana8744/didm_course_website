import React from 'react';
import { Phone, Download } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="bg-[#b32b2b] text-white py-12 px-4 shadow-2xl relative overflow-hidden">
      {/* Decorative patterns or shapes can be added here if needed */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:px-12">
        
        {/* Left: Text */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Still Confused... ??
          </h2>
          <p className="text-white/90 text-sm md:text-base font-bold tracking-widest uppercase">
            GET INSTANT CAREER CLARITY
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <button className="bg-[#fad400] hover:bg-yellow-400 text-black font-bold py-3.5 px-8 rounded-sm shadow-lg flex items-center justify-center space-x-2 w-full sm:w-auto transition-transform hover:scale-105">
            <Phone className="w-5 h-5 fill-current" />
            <span className="uppercase tracking-wide text-sm">TALK TO COUNSELLOR</span>
          </button>
          
          <button className="bg-white hover:bg-gray-100 text-black font-bold py-3.5 px-8 rounded-sm shadow-lg flex items-center justify-center space-x-2 w-full sm:w-auto transition-transform hover:scale-105">
            <span className="uppercase tracking-wide text-sm">DOWNLOAD CURRICULUM</span>
            <div className="border-2 border-black rounded-full p-0.5">
              <Download className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
