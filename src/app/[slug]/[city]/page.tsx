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
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string; city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || '';
  const city = resolvedParams.city || '';

  if (city !== 'gurgaon' || !slug.startsWith('digital-marketing-')) {
    return {};
  }

  const type = slug.replace('digital-marketing-', '');
  const validTypes = ['course', 'training', 'institute'];
  if (!validTypes.includes(type)) {
    return {};
  }

  if (type === 'course') {
    return {
      title: 'Digital Marketing Course in Gurugram & Gurgaon | Best Course & Placement | DIDM',
      description: "Join India's #1 AI-powered Digital Marketing Course in Gurgaon / Gurugram. 100% Placement Assistance, 50+ Modules & Practical Training. Book your free demo class!",
      keywords: [
        "Digital Marketing Course in Gurugram",
        "Digital Marketing Course in Gurgaon",
        "Digital Marketing Institute in Gurugram",
        "Digital Marketing Institute in Gurgaon",
        "Digital Marketing Training in Gurugram",
        "Digital Marketing Training in Gurgaon",
        "Best Digital Marketing Course",
        "Best Digital Marketing Institute"
      ]
    };
  } else if (type === 'training') {
    return {
      title: 'Digital Marketing Training in Gurgaon & Gurugram | DIDM',
      description: "Get the best Digital Marketing Training in Gurgaon / Gurugram. High-quality practical modules with ISO & MSME certification. 100% placements. Book a free demo class today!",
      keywords: [
        "Digital Marketing Course in Gurugram",
        "Digital Marketing Course in Gurgaon",
        "Digital Marketing Institute in Gurugram",
        "Digital Marketing Institute in Gurgaon",
        "Digital Marketing Training in Gurugram",
        "Digital Marketing Training in Gurgaon",
        "Best Digital Marketing Course",
        "Best Digital Marketing Institute"
      ]
    };
  } else { // institute
    return {
      title: 'Best Digital Marketing Institute in Gurgaon & Gurugram | DIDM',
      description: "Join Delhi Institute of Digital Marketing (DIDM), the best Digital Marketing Institute in Gurugram & Gurgaon. 100% placement assist, top-rated mentors. Book free demo session!",
      keywords: [
        "Digital Marketing Course in Gurugram",
        "Digital Marketing Course in Gurgaon",
        "Digital Marketing Institute in Gurugram",
        "Digital Marketing Institute in Gurgaon",
        "Digital Marketing Training in Gurugram",
        "Digital Marketing Training in Gurgaon",
        "Best Digital Marketing Course",
        "Best Digital Marketing Institute"
      ]
    };
  }
}

export default async function CityPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || '';
  const city = resolvedParams.city || '';

  if (city !== 'gurgaon') {
    notFound();
  }

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
      <TopNav location={city} />
      <HeroSection term={type} location="gurgaon" />
      <StatsSection term={type} location="gurgaon" />
      <CourseDescription 
        term={type === "course" ? "course" : type === "training" ? "training" : type === "institute" ? "course" : "course"} 
        location="gurgaon"
      />
      <TrainingSpecification term={type} />
      <ToolsSection />
      <TargetAudience term={type} />
      <CtaBanner />
      <WhyUsSection term={type} location="gurgaon" />
      <Footer term={type} location="gurgaon" />
    </main>
  );
}
