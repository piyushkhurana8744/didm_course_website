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

  let isSouthDelhi = false;
  let type = '';

  if (slug === 'digital-marketing-course-south-delhi') {
    type = 'course';
    isSouthDelhi = true;
  } else {
    if (!slug.startsWith('digital-marketing-')) {
      notFound();
    }

    type = slug.replace('digital-marketing-', '');
    const validTypes = ['course', 'training', 'institute', 'artificial-intelligence'];
    if (!validTypes.includes(type)) {
      notFound();
    }
  }

  const location = isSouthDelhi ? 'south-delhi' : undefined;
  const enquirySource = isSouthDelhi ? 'Messenger' : 'Adword';

  return (
    <main className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary overflow-hidden pb-0">
      <TopNav location={location} />
      <HeroSection term={type} location={location} enquirySource={enquirySource} />
      <StatsSection term={type} location={location} />
      <CourseDescription 
        term={type === "course" ? "course" : type === "training" ? "training" : type === "institute" ? "course" : "course"} 
        location={location}
      />
      <TrainingSpecification term={type} location={location} />
      <ToolsSection />
      <TargetAudience term={type} />
      <CtaBanner />
      <WhyUsSection term={type} location={location} />
      <Footer term={type} location={location} enquirySource={enquirySource} />
    </main>
  );
}
