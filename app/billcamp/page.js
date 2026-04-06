import { caseStudyPages } from '@/lib/content';
import CaseStudyPage from '@/components/sections/CaseStudyPage';

export const metadata = { title: 'Bill Campbell – Case Study' };

export default function BillcampPage() {
  const data = caseStudyPages.billcamp;
  return <CaseStudyPage name={data.name} images={data.images} />;
}
