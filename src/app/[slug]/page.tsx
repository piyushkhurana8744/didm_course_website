import TopNav from '@/components/TopNav';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import CourseDescription from '@/components/CourseDescription';
import TrainingSpecification from '@/components/TrainingSpecification';
import ToolsSection from '@/components/ToolsSection';
import TargetAudience from '@/components/TargetAudience';
import CtaBanner from '@/components/CtaBanner';
import WhyUsSection from '@/components/WhyUsSection';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

export default async function Home({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || '';

  if (!slug.startsWith('digital-marketing-')) {
    notFound();
  }

  const type = slug.replace('digital-marketing-', '');
  const validTypes = ['course', 'training', 'institute'];
  if (!validTypes.includes(type)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary overflow-hidden pb-0">
      <TopNav />
      <HeroSection term={type} />
      <StatsSection term={type} />
      <CourseDescription term={type} />
      <TrainingSpecification term={type} />
      <ToolsSection />
      <TargetAudience term={type} />
      <CtaBanner />
      <WhyUsSection term={type} />
      <Footer term={type} />
    </main>
  );
}
