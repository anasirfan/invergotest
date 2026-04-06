import { caseStudyPages } from '@/lib/content';
import CaseStudyPage from '@/components/sections/CaseStudyPage';

export const metadata = { title: 'SOUS Aromatics – Case Study' };

export default function SousPage() {
  const data = caseStudyPages.sous;
  return <CaseStudyPage name={data.name} images={data.images} />;
}
