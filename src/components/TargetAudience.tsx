import React from 'react';

const audiences = [
  { label: "Students", percentage: 95 },
  { label: "Job Seekers", percentage: 88 },
  { label: "Working Professionals", percentage: 75 },
  { label: "Entrepreneurs", percentage: 82 },
  { label: "Freelancers", percentage: 90 },
];

export default function TargetAudience({ term = "course" }: { term?: string }) {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="glass-card rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row border border-slate-50 animate-zoom-in">
          
          {/* Left Side: Content */}
          <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center bg-slate-50/50">
            <h2 className="text-2xl md:text-[28px] font-semibold text-[#0f172a] leading-[1.3] mb-6 tracking-tight uppercase">
              Who can join our <span className="text-[#b52727]">most demanding</span> digital marketing {term}?
            </h2>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8 font-normal">
              Digital Marketing is an evolving and highly adaptable field. Whether you are a student looking to start your career, a professional wanting to upgrade, or an entrepreneur eager to scale your business, this {term} is tailored for you.
            </p>
            <div>
              <a href="#enquiry-form" className="bg-[#b52727] hover:bg-[#911f1f] text-white font-semibold py-3.5 px-8 rounded-xl shadow-xl transition-all hover:-translate-y-0.5 active:scale-95 tracking-widest inline-block uppercase text-sm">
                Enroll Now
              </a>
            </div>
          </div>

          {/* Right Side: Progress Bars */}
          <div className="p-8 md:p-12 lg:w-1/2 bg-white flex flex-col justify-center">
            <div className="space-y-6">
              {audiences.map((item, idx) => (
                <div key={idx} className={`animate-fade-in-up stagger-${idx + 1}`}>
                  <div className="flex justify-between mb-2 items-end">
                    <span className="text-[12px] font-semibold text-slate-500 uppercase tracking-[0.15em]">{item.label}</span>
                    <span className="text-xl font-semibold text-[#b52727] leading-none">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 relative overflow-hidden">
                    <div 
                      className="bg-[#b52727] h-2.5 rounded-full relative transition-all duration-1000 ease-out" 
                      style={{ width: `${item.percentage}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
