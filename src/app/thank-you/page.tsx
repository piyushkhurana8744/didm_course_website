import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header with Logo */}
      <header className="py-6 px-4 md:px-12 flex justify-center bg-white">
        <div className="relative w-[300px] h-20">
          {/* Logo path derived from institute name, user should ensure this file exists */}
          <div className="flex items-center justify-center h-full text-2xl font-black text-gray-800 uppercase tracking-tighter">
            <span className="text-[#b32b2b]">DIDM</span>
            <span className="ml-2 text-xs font-bold text-gray-400 block border-l-2 border-gray-300 pl-2 leading-tight">
              DELHI INSTITUTE OF<br/>DIGITAL MARKETING
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center bg-[#8b0101] text-white py-16 px-4 text-center">
        <div className="max-w-4xl space-y-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Thank You For Showing Your Interest!
          </h1>
          <p className="text-xl md:text-2xl font-bold opacity-90">
            Our Team Will Contact You Shortly.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="mt-12 flex flex-col space-y-5 w-full max-w-[300px]">
          <a 
            href="/DELHI_INSTITUTE_OF_DIGITAL_MARKETING_DOWNLOAD_BROCHURE.pdf" 
            download 
            className="bg-white text-black font-extrabold py-3 px-6 rounded-md shadow-2xl flex items-center justify-center space-x-3 transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 group"
          >
            <span className="text-[17px]">Download Brochure</span>
            <div className="bg-black rounded-full p-0.5 group-hover:bg-gray-800 transition-colors">
              <Download size={14} className="text-white" strokeWidth={4} />
            </div>
          </a>

          <Link 
            href="/" 
            className="bg-white text-black font-extrabold py-3 px-6 rounded-md shadow-2xl flex items-center justify-center space-x-3 transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 group"
          >
            <span className="text-[17px]">Exit</span>
            <div className="bg-black rounded-full p-0.5 group-hover:bg-gray-800 transition-colors">
              <ArrowRight size={14} className="text-white" strokeWidth={4} />
            </div>
          </Link>
        </div>
      </main>

      {/* Footer whitespace filler to match screenshot height if needed */}
      <div className="h-40 bg-white"></div>
    </div>
  );
}
