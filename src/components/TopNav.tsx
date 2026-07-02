import React from 'react';
import { Download, Phone } from 'lucide-react';

export default function TopNav({ location }: { location?: string }) {
  return (
    <nav className="bg-white py-4 px-4 md:px-12 flex justify-center items-center border-b border-gray-100 shadow-sm">
      {location === 'gurgaon' ? (
        <a href="tel:8882366802" className="bg-[#b52727] hover:bg-[#911f1f] text-white font-semibold py-2.5 px-4 sm:px-8 rounded-xl shadow-lg flex items-center space-x-2 sm:space-x-3 transition-all hover:-translate-y-0.5 active:scale-95 text-xs sm:text-sm">
          <span className="uppercase tracking-[0.08em] sm:tracking-[0.15em]">8882366802</span>
          <div className="border-[1.5px] border-white/40 rounded-full p-1 flex-shrink-0">
            <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
          </div>
        </a>
      ) : (
        <a href="#enquiry-form" className="bg-[#b52727] hover:bg-[#911f1f] text-white font-semibold py-2.5 px-4 sm:px-8 rounded-xl shadow-lg flex items-center space-x-2 sm:space-x-3 transition-all hover:-translate-y-0.5 active:scale-95 text-xs sm:text-sm">
          <span className="uppercase tracking-[0.08em] sm:tracking-[0.15em]">Download Brochure</span>
          <div className="border-[1.5px] border-white/40 rounded-full p-1 flex-shrink-0">
            <Download className="w-3.5 h-3.5" strokeWidth={2.5} />
          </div>
        </a>
      )}
    </nav>
  );
}
