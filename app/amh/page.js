import { caseStudyPages } from '@/lib/content';
import CaseStudyPage from '@/components/sections/CaseStudyPage';

export const metadata = { title: 'AMH Biotech – Case Study' };

export default function AmhPage() {
  const data = caseStudyPages.amh;
  return <CaseStudyPage name={data.name} images={data.images} />;
}
