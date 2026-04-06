import { caseStudyPages } from '@/lib/content';
import CaseStudyPage from '@/components/sections/CaseStudyPage';

export const metadata = { title: 'Dafinger Clothing – Case Study' };

export default function DafingerPage() {
  const data = caseStudyPages.dafinger;
  return <CaseStudyPage name={data.name} images={data.images} />;
}
