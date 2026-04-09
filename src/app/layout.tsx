import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

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
        <TopBar />
        {children}
      </body>
    </html>
  );
}
