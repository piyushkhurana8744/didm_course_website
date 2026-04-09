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

export default function StatsSection() {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-center font-bold text-2xl md:text-3xl text-gray-800 mb-10">
          <span className="text-primary tracking-tight">100% Placement Assistance</span> | #1 Digital Marketing Institute
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center transform hover:-translate-y-1 transition-all hover:shadow-md cursor-pointer">
              <div className="bg-red-50 p-3 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
