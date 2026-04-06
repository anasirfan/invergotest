import { caseStudyPages } from '@/lib/content';
import CaseStudyPage from '@/components/sections/CaseStudyPage';

export const metadata = { title: 'Stair Parts Depot – Case Study' };

export default function StairpartsPage() {
  const data = caseStudyPages.stairparts;
  return <CaseStudyPage name={data.name} images={data.images} />;
}
