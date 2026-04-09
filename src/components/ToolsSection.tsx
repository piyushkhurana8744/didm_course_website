import React from 'react';
import Image from 'next/image';

export default function ToolsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-black text-[#262626] mb-12 tracking-tight uppercase">
          Marketing Tools <span className="text-[#b32b2b]">You'll Master</span>
        </h2>
        
        <div className="w-full flex justify-center">
          <Image 
            src="/images/tools-1.jpg" 
            alt="Digital Marketing Tools" 
            width={1200} 
            height={600} 
            className="w-full max-w-[1000px] h-auto object-contain drop-shadow-md rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
