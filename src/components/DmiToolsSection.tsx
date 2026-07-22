import React from 'react';

const tools = [
  {
    name: 'SEMrush',
    icon: (
      <svg viewBox="0 0 100 32" className="h-8 w-auto">
        <path fill="#FF642D" d="M16 16c-2-3-1.6-6.8 1-9.3 0 0-4.7 1.6-6 6-1.3-1.6-2-3.7-1.6-6C7.5 8.7 3.5 12 3.5 18c0 6 4.7 10.7 10.7 10.7 6 0 10.7-4.7 10.7-10.7 0-2.9-1.2-5.6-3.1-7.6.7 2.9-0.3 4.9-4.3 6.3z" />
        <text x="32" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="800" fill="#1E293B">SEMrush</text>
      </svg>
    )
  },
  {
    name: 'Canva Pro',
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9">
        <circle cx="20" cy="20" r="18" fill="#00C4CC"/>
        <text x="20" y="25" fontFamily="serif" fontSize="15" fontWeight="bold" fill="white" textAnchor="middle" fontStyle="italic">Canva</text>
      </svg>
    )
  },
  {
    name: 'Google Ads',
    icon: (
      <svg viewBox="0 0 36 36" className="h-9 w-9">
        <path fill="#FBBC04" d="M18 4.5L5.5 26.2c-1.1 1.9-.4 4.3 1.5 5.3 1.9 1.1 4.3.4 5.3-1.5l12.5-21.7c1.1-1.9.4-4.3-1.5-5.3-1.9-1.1-4.3-.4-5.3 1.5z"/>
        <path fill="#4285F4" d="M30.5 26.2l-12.5-21.7c-1.1-1.9-3.4-2.5-5.3-1.5-.7.4-1.2.9-1.5 1.5l12.5 21.7c1.1 1.9 3.4 2.5 5.3 1.5 1.9-1.1 2.5-3.5 1.5-5.3z"/>
        <circle cx="8.8" cy="28.2" r="4.5" fill="#34A853"/>
      </svg>
    )
  },
  {
    name: 'Meta Business Suite',
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9">
        <path fill="#0081FB" d="M30.4 12C27.1 12 24.3 14.3 22.2 17.5 20.1 14.3 17.3 12 14 12 7.4 12 2 17.4 2 24s5.4 12 12 12c3.3 0 6.1-2.3 8.2-5.5 2.1 3.2 4.9 5.5 8.2 5.5 6.6 0 12-5.4 12-12s-5.4-12-12-12zm-16.4 17c-2.8 0-5-2.2-5-5s2.2-5 5-5c1.7 0 3.3 1.2 4.4 3.1-1.1 2-2.7 3.4-4.4 6.9zm16.4 0c-1.7 0-3.3-1.4-4.4-3.4 1.1-1.9 2.7-3.1 4.4-3.1 2.8 0 5 2.2 5 5s-2.2 5-5 5z"/>
      </svg>
    )
  },
  {
    name: 'Gemini',
    icon: (
      <svg viewBox="0 0 32 32" className="h-9 w-9">
        <path fill="url(#gemini-grad-dmi)" d="M16 0C16 8.837 8.837 16 0 16c8.837 0 16 7.163 16 16 0-8.837 7.163-16 16-16C23.163 16 16 8.837 16 0z"/>
        <defs>
          <linearGradient id="gemini-grad-dmi" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0%" stopColor="#1A73E8"/>
            <stop offset="50%" stopColor="#8B5CF6"/>
            <stop offset="100%" stopColor="#EC4899"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'WordPress',
    icon: (
      <svg viewBox="0 0 36 36" className="h-9 w-9">
        <circle cx="18" cy="18" r="17" fill="#1E293B"/>
        <path fill="white" d="M18 4a14 14 0 100 28 14 14 0 000-28zm-2 20.8l-3.5-10h2.5l2 6.5 2.1-5.9-1.5-4.4h4l-1.5 4.4 2.1 5.9 2-6.5h2.4l-3.5 10h-2.3l-2.1-6-2.1 6h-2.6z"/>
      </svg>
    )
  },
  {
    name: 'Hostagle',
    icon: (
      <svg viewBox="0 0 36 36" className="h-9 w-9">
        <path fill="#2563EB" d="M18 3L4.5 8.5v10c0 8.3 5.7 16 13.5 17.5 7.8-1.5 13.5-9.2 13.5-17.5v-10L18 3z"/>
        <path stroke="white" strokeWidth="3" strokeLinecap="round" d="M12.5 12.5v11M23.5 12.5v11M12.5 18h11"/>
      </svg>
    )
  },
  {
    name: 'Chat GPT',
    icon: (
      <svg viewBox="0 0 36 36" className="h-9 w-9">
        <rect width="36" height="36" rx="9" fill="#10A37F"/>
        <path fill="white" d="M25.6 16a5 5 0 00-.5-2.9 5.1 5.1 0 00-4.2-2.5 5 5 0 00-2.7-1 5.1 5.1 0 00-4.8 1.7 5 5 0 00-2.8.5 5.1 5.1 0 00-2.6 4 5 5 0 00-1.1 2.7 5.1 5.1 0 001.8 4.8 5 5 0 00.5 2.9 5.1 5.1 0 004.2 2.5 5 5 0 002.7 1 5.1 5.1 0 004.8-1.7 5 5 0 002.8-.5 5.1 5.1 0 002.6-4 5 5 0 001.1-2.7 5.1 5.1 0 00-1.7-4.8zm-8.8 12.6a3.1 3.1 0 01-2-.8l.1-.1 3.4-1.9a.9.9 0 00.4-.8v-4.7l1.5.9v3.8a3.1 3.1 0 01-3.4 3.6zm-7.6-4.7a3.1 3.1 0 01-.3-2.1l.1.1 3.4-1.9a.9.9 0 00.4-.8V14.5l-1.5.9v3.8a3.1 3.1 0 01-2.1 4.7zm-1.6-9a3.1 3.1 0 011.7-1.3v3.9a.9.9 0 00.4.8l4 2.4-1.5.9-4-2.4a3.1 3.1 0 01-.6-4.3zm12.8-1.8l-4-2.4a.9.9 0 00-.9 0l-4 2.4v-1.7a3.1 3.1 0 015.4-2.2l3.5 3.9zm3.1 4.5a3.1 3.1 0 01-1.7 1.3v-3.9a.9.9 0 00-.4-.8l-4-2.4 1.5-.9 4 2.4a3.1 3.1 0 01.6 4.3zm-2.7 3.8l-3.4 1.9a.9.9 0 00-.4.8v4.7l-1.5-.9v-3.8a3.1 3.1 0 015.3-2.7z"/>
      </svg>
    )
  },
  {
    name: 'ElevenLabs',
    icon: (
      <svg viewBox="0 0 100 32" className="h-7 w-auto">
        <rect x="4" y="4" width="4" height="24" rx="1.5" fill="#000000"/>
        <rect x="12" y="4" width="4" height="24" rx="1.5" fill="#000000"/>
        <text x="24" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="700" fill="#000000">ElevenLabs</text>
      </svg>
    )
  },
  {
    name: 'NotebookLM',
    icon: (
      <svg viewBox="0 0 110 32" className="h-7 w-auto">
        <path fill="#0F172A" d="M4 6h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm2 3v12h12V9H6zm2 2h8v1.5H8V11zm0 3h8v1.5H8V14zm0 3h5v1.5H8V17z"/>
        <text x="26" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="700" fill="#0F172A">NotebookLM</text>
      </svg>
    )
  },
  {
    name: 'GA4',
    icon: (
      <svg viewBox="0 0 36 36" className="h-9 w-9">
        <rect x="5" y="20" width="7" height="11" rx="2.5" fill="#F9AB00"/>
        <rect x="15" y="11" width="7" height="20" rx="2.5" fill="#E37400"/>
        <circle cx="28.5" cy="8.5" r="4.5" fill="#E37400"/>
        <rect x="25" y="15" width="7" height="16" rx="2.5" fill="#E37400"/>
      </svg>
    )
  },
  {
    name: 'GTM',
    icon: (
      <svg viewBox="0 0 36 36" className="h-9 w-9">
        <path fill="#4285F4" d="M18 3L3 18l15 15 15-15L18 3zm0 6.5l10.5 10.5L18 27.5 7.5 19.5 18 9.5z"/>
        <circle cx="18" cy="18.5" r="3.5" fill="#1D4ED8"/>
      </svg>
    )
  }
];

export default function DmiToolsSection() {
  return (
    <section className="py-14 md:py-20 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-slate-800 tracking-tight">
            Tools You Will Master
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2.5 font-normal">
            Industry-standard tools you'll work with during live projects & training
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 justify-center">
          {tools.map((tool, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center justify-center min-h-[120px] sm:min-h-[135px] transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center h-12 w-full transition-transform duration-300 group-hover:scale-105">
                {tool.icon}
              </div>
              <span className="text-slate-600 group-hover:text-slate-900 font-medium text-xs sm:text-sm mt-3 text-center transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
