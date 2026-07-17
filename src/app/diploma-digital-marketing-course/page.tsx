import React from 'react';
import { Metadata } from 'next';
import TopNav from '@/components/TopNav';
import DmiHero from '@/components/DmiHero';
import StatsSection from '@/components/StatsSection';
import CourseDescription from '@/components/CourseDescription';
import DmiEcosystem from '@/components/DmiEcosystem';
import ToolsSection from '@/components/ToolsSection';
import TrainingSpecification from '@/components/TrainingSpecification';
import LiveProjectIndustries from '@/components/LiveProjectIndustries';
import ExclusiveDmiBenefits from '@/components/ExclusiveDmiBenefits';
import DmiCtaBanner from '@/components/DmiCtaBanner';
import DmiCareerBenefits from '@/components/DmiCareerBenefits';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Digital Marketing Intelligence (DMI) AI Diploma Program | DIDM",
  description: "India's First 1-Year AI-Integrated Diploma (400+ Hours). Master Digital Marketing with PPO guarantees, 3 months agency floor experience & practical live projects.",
  keywords: [
    "DMI Diploma Program",
    "AI Digital Marketing Course",
    "Digital Marketing Diploma Course",
    "DIDM DMI",
    "1 Year Digital Marketing Diploma",
    "AI Integrated Course",
    "Pre Placement Offer Digital Marketing"
  ]
};

export default function DiplomaCoursePage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary overflow-hidden pb-0">
      <TopNav />
      <DmiHero />
      <StatsSection term="course" />
      <CourseDescription term="course" />
      <DmiEcosystem />
      <ToolsSection />
      <TrainingSpecification term="course" />
      <LiveProjectIndustries />
      <ExclusiveDmiBenefits />
      <DmiCtaBanner />
      <DmiCareerBenefits />
      <Footer term="course" />
    </main>
  );
}
