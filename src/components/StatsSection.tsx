import React from 'react';
import { Briefcase, Building2, TrendingUp, CheckCircle } from 'lucide-react';

const stats = [
  {
    icon: <Briefcase className="text-primary w-8 h-8" />,
    value: "7.5 LPA",
    label: "Highest Package",
  },
  {
    icon: <Building2 className="text-primary w-8 h-8" />,
    value: "650+",
    label: "Placement Partners",
  },
  {
    icon: <TrendingUp className="text-primary w-8 h-8" />,
    value: "54%",
    label: "Average Salary Hike",
  },
  {
    icon: <CheckCircle className="text-primary w-8 h-8" />,
    value: "100%",
    label: "Placement Assistance",
  },
];

export default function StatsSection({ term = "course" }: { term?: string }) {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const termCap = capitalize(term);

  return (
    <section className="py-12 md:py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-center font-semibold text-2xl md:text-[28px] text-[#0f172a] mb-10 animate-fade-in-up uppercase tracking-tight leading-tight">
          <span className="text-[#b52727]">100% Placement Assistance</span><br className="md:hidden" /> | #1 Digital Marketing {termCap}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className={`bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-slate-100 p-6 flex flex-col items-center justify-center text-center transform hover:-translate-y-1 transition-all duration-500 hover:shadow-xl cursor-default animate-zoom-in stagger-${idx + 1}`}>
              <div className="bg-red-50 p-3.5 rounded-xl mb-5 group-hover:scale-110 transition-transform text-[#b52727]">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#0f172a] mb-2 tracking-tight leading-none">{stat.value}</h3>
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-[0.15em] leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
