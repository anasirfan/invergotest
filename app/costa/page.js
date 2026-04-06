import { caseStudyPages } from '@/lib/content';
import CaseStudyPage from '@/components/sections/CaseStudyPage';

export const metadata = { title: 'Costa Rica Fishing – Case Study' };

export default function CostaPage() {
  const data = caseStudyPages.costa;
  return <CaseStudyPage name={data.name} images={data.images} />;
}
