import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, Check, Phone, GraduationCap, ShieldCheck } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans relative overflow-hidden">
      {/* Google Ads conversion event – fires when thank-you page loads */}
      <Script id="gtag-form-submit" strategy="afterInteractive">
        {`gtag('event', 'form_submit', { send_to: 'AW-10840521883' });`}
      </Script>
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 -z-10" />

      {/* Header with Logo */}
      <header className="py-6 px-4 md:px-12 flex justify-center bg-white/80 backdrop-blur-md border-b border-slate-100 relative z-10">
        <div className="flex items-center justify-center text-2xl font-black text-gray-800 uppercase tracking-tighter">
          <span className="text-[#b52727]">DIDM</span>
          <span className="ml-2 text-[10px] font-bold text-gray-400 block border-l-2 border-gray-300 pl-2 leading-tight">
            DELHI INSTITUTE OF<br/>DIGITAL MARKETING
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 md:px-8 relative z-10">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 p-8 md:p-10 text-center animate-zoom-in">
          
          {/* Animated Success Badge */}
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-25" />
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
              <Check className="w-8 h-8" strokeWidth={3} />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-3">
            Thank You for Registering!
          </h1>
          <p className="text-slate-500 text-[15px] md:text-base font-normal max-w-lg mx-auto mb-8">
            Your inquiry has been successfully received. We're excited to help you start your career path in Digital Marketing.
          </p>

          {/* Next Steps Timeline */}
          <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-6 mb-8 text-left space-y-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
              What Happens Next?
            </h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-sm font-semibold mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Inquiry Authenticated</h4>
                  <p className="text-[13px] text-slate-500 font-normal leading-relaxed mt-0.5">
                    Your form request is logged. You will receive a SMS/WhatsApp notification shortly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 text-sm font-semibold mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Counseling Matching</h4>
                  <p className="text-[13px] text-slate-500 font-normal leading-relaxed mt-0.5">
                    Our expert coordinator will assign you the best academic advisor for your selected location.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 text-[#b52727] flex items-center justify-center flex-shrink-0 text-sm font-semibold mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Contact & Batch Selection</h4>
                  <p className="text-[13px] text-slate-500 font-normal leading-relaxed mt-0.5">
                    We will call you within 2 hours (during business hours) to schedule your free demo class.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="w-full sm:w-auto bg-[#b52727] hover:bg-[#911f1f] text-white font-semibold text-[14px] py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 active:scale-95"
            >
              <span>Back to Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust badges footer */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-400 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>MSME Certified Institute</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>ISO 9001:2015 Approved</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>100% Secure Submission</span>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-100 bg-white/50 text-center text-xs text-slate-400 font-medium">
        © {new Date().getFullYear()} Delhi Institute of Digital Marketing. All rights reserved.
      </footer>
    </div>
  );
}
