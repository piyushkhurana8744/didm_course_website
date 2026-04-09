import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import CourseDescription from '@/components/CourseDescription';
import TrainingSpecification from '@/components/TrainingSpecification';
import ToolsSection from '@/components/ToolsSection';
import TargetAudience from '@/components/TargetAudience';
import CtaBanner from '@/components/CtaBanner';
import WhyUsSection from '@/components/WhyUsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary overflow-hidden pb-0">
      <HeroSection />
      <StatsSection />
      <CourseDescription />
      <TrainingSpecification />
      <ToolsSection />
      <TargetAudience />
      <CtaBanner />
      <WhyUsSection />
      <Footer />
    </main>
  );
}
