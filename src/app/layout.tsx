import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Master in Digital Marketing Course | #1 Institute",
  description: "Join India's 1st HYBRID Master in Digital Marketing Course. 100% Placement Assistance. 50+ Modules. Book your free demo session today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NR6S9T5');`}
        </Script>
      </head>
      <body className={`${inter.className} min-h-full flex flex-col pt-0`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NR6S9T5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-10840521883"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5G5NHFFC8F"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-10840521883');
          gtag('config', 'G-5G5NHFFC8F');
        `}
      </Script>
    </html>
  );
}
