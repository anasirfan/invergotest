import { caseStudyPages } from '@/lib/content';
import CaseStudyPage from '@/components/sections/CaseStudyPage';

export const metadata = { title: 'Strategic Growth Solutions – Case Study' };

export default function StrategicPage() {
  const data = caseStudyPages.strategic;
  return <CaseStudyPage name={data.name} images={data.images} />;
}
