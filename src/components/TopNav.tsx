import React from 'react';
import { Download } from 'lucide-react';

export default function TopNav() {
  return (
    <nav className="bg-white py-2 px-4 md:px-12 flex justify-center items-center border-b border-gray-100">
      <a href="#enquiry-form" className="bg-[#b32b2b] hover:bg-[#a60b0e] text-white font-bold py-1.5 px-6 rounded-sm shadow-md flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95">
        <span className="text-[13px] uppercase tracking-wider">DOWNLOAD CURRICULUM</span>
        <div className="border border-white rounded-full p-0.5">
          <Download className="w-3 h-3" strokeWidth={3} />
        </div>
      </a>
    </nav>
  );
}
