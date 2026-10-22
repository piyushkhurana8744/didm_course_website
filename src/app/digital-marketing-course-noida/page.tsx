import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import NoidaCourseClient from "./NoidaCourseClient";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://course.didm.in"),
  title: "AI Powered Digital Marketing Course in Noida | DIDM",
  description:
    "Job-oriented AI Powered Digital Marketing Course with live projects, AI tools, 30+ global certifications and 100% placement assistance. Book a free demo class today.",
  alternates: {
    canonical: "https://course.didm.in/digital-marketing-course-noida/",
  },
  icons: {
    icon: "/didmfavicon.png",
  },
  openGraph: {
    title: "AI Powered Digital Marketing Course in Noida | DIDM",
    description:
      "Job-oriented AI Powered Digital Marketing Course with live projects, AI tools, 30+ global certifications and 100% placement assistance. Book a free demo class today.",
    url: "https://course.didm.in/digital-marketing-course-noida/",
    siteName: "DIDM",
    images: [
      {
        url: "/course-dmi.jpg",
        width: 1200,
        height: 630,
        alt: "DIDM AI Powered Digital Marketing Course in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AI Powered Digital Marketing Course",
  description:
    "Job-oriented AI Powered Digital Marketing Course with live projects, AI tools, certifications and placement assistance.",
  provider: {
    "@type": "Organization",
    name: "Delhi Institute of Digital Marketing (DIDM)",
    sameAs: "https://didm.in",
    logo: "https://course.didm.in/digital-marketing-course-noida/didm-logo.jpg",
  },
};

export default function DigitalMarketingCourseNoidaPage() {
  return (
    <div className={poppins.className}>
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NoidaCourseClient />
    </div>
  );
}
