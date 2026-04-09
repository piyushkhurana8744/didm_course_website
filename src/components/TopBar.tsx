import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-[#b52727] text-white py-1.5 px-4 flex flex-col md:flex-row justify-center items-center text-sm font-normal z-50 relative">
      <div className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-4">
        <span className="text-[13px] sm:text-[14px] font-medium tracking-wide opacity-90">Book Your Free Demo Session</span>
        <a 
          href="tel:8069099901" 
          className="bg-white text-[#b52727] font-semibold px-4 py-0.5 rounded-full text-[14px] hover:bg-white/90 transition-all active:scale-95 shadow-sm"
        >
          8069099901
        </a>
      </div>
    </div>
  );
}
