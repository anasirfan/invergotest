import { caseStudyPages } from '@/lib/content';
import CaseStudyPage from '@/components/sections/CaseStudyPage';

export const metadata = { title: 'Ringed Davits – Case Study' };

export default function RingedPage() {
  const data = caseStudyPages.ringed;
  return <CaseStudyPage name={data.name} images={data.images} />;
}
