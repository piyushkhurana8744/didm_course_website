import React from 'react';
import Image from 'next/image';

export default function ToolsSection() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl lg:text-[28px] font-semibold text-[#262626] mb-8 tracking-tight uppercase">
          Marketing Tools <span className="text-[#b32b2b]">You'll Master</span>
        </h2>
        
        <div className="w-full flex justify-center">
          <Image 
            src="/images/tools-1.jpg" 
            alt="Digital Marketing Tools" 
            width={1200} 
            height={600} 
            className="w-full max-w-[900px] h-auto object-contain drop-shadow-md rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
