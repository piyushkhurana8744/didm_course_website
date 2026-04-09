import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className={`${inter.className} min-h-full flex flex-col pt-0`}>
        {children}
      </body>
    </html>
  );
}
