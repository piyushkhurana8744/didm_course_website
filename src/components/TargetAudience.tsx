import React from 'react';

const audiences = [
  { label: "Students", percentage: 95 },
  { label: "Job Seekers", percentage: 88 },
  { label: "Working Professionals", percentage: 75 },
  { label: "Entrepreneurs", percentage: 82 },
  { label: "Freelancers", percentage: 90 },
];

export default function TargetAudience() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Side: Content */}
          <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
              Who can join our most demanding digital marketing course?
            </h2>
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-8">
              Digital Marketing is an evolving and highly adaptable field. Whether you are a student looking to start your career, a professional wanting to upgrade, or an entrepreneur eager to scale your business, this course is tailored for you.
            </p>
            <div>
              <button className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-10 rounded shadow-lg transition-transform hover:-translate-y-1 tracking-wide">
                ENROLL NOW
              </button>
            </div>
          </div>

          {/* Right Side: Progress Bars */}
          <div className="p-8 md:p-12 lg:w-1/2 bg-gray-50 border-l border-gray-100 flex flex-col justify-center">
            <div className="space-y-6">
              {audiences.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">{item.label}</span>
                    <span className="text-sm font-bold text-primary">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full relative" 
                      style={{ width: `${item.percentage}%` }}
                    >
                      {/* Optional slight gradient or stripe effect */}
                      <div className="absolute inset-0 bg-white/20 rounded-full w-full h-full" style={{ backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem' }}></div>
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
