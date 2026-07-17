import React from 'react';
import { TrendingUp, Briefcase, DollarSign, Eye, Cpu, Landmark } from 'lucide-react';

const benefitsList = [
  {
    icon: <TrendingUp className="w-5 h-5 text-[#b52727]" />,
    title: "Career Growth & Promotion",
    desc: "Qualify for senior roles, leadership positions, and fast-track promotions with advanced AI and performance marketing skills.",
  },
  {
    icon: <Briefcase className="w-5 h-5 text-[#b52727]" />,
    title: "More Job Opportunities",
    desc: "Access multiple career paths such as Digital Marketer, Performance Specialist, SEO Analyst, Growth Strategist, and Freelance Consultant.",
  },
  {
    icon: <DollarSign className="w-5 h-5 text-[#b52727]" />,
    title: "High Salary Potential",
    desc: "Negotiate better salary packages, performance bonuses, and incentives with proof of hands-on experience and live campaign execution.",
  },
  {
    icon: <Eye className="w-5 h-5 text-[#b52727]" />,
    title: "Real-World Experience",
    desc: "Work on live brands, guided campaigns, and agency projects that strengthen your resume and portfolio.",
  },
  {
    icon: <Cpu className="w-5 h-5 text-[#b52727]" />,
    title: "AI & Future-Ready Skills",
    desc: "Master AI tools, automation, analytics, and advanced digital strategies aligned with current and future industry demand.",
  },
  {
    icon: <Landmark className="w-5 h-5 text-[#b52727]" />,
    title: "Freelancing & Business Scope",
    desc: "Start freelancing, consulting, or your own digital marketing agency with strong execution and client-handling capabilities.",
  },
];

export default function DmiCareerBenefits() {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-[34px] font-extrabold text-[#0f172a] uppercase tracking-tight leading-tight">
            Career <span className="text-[#b52727]">Benefits</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Build a high-growth digital marketing career with AI-driven skills, real-world exposure, and industry recognized expertise.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {benefitsList.map((item, idx) => (
            <div key={idx} className="bg-white hover:bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col items-center text-center group cursor-default">
              <div className="bg-red-50 p-3.5 rounded-2xl mb-4 group-hover:scale-115 transition-transform text-[#b52727]">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-[#0f172a] uppercase tracking-tight mb-2.5 leading-snug">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
