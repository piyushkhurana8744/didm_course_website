import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-[#5a0000] text-white py-2 px-4 flex flex-col md:flex-row justify-center items-center text-sm font-medium z-50 relative border-b-2 border-[#3d0000]">
      <div className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-3">
        <span className="text-[13px] sm:text-[15px] font-semibold tracking-wide">Book Your Free Demo Session</span>
        <a 
          href="tel:8069099901" 
          className="bg-[#e4e600] text-black font-bold px-4 py-1 rounded text-[15px] hover:bg-yellow-400 transition-colors"
        >
          8069099901
        </a>
      </div>
    </div>
  );
}
