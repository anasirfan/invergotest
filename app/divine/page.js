import { caseStudyPages } from '@/lib/content';
import CaseStudyPage from '@/components/sections/CaseStudyPage';

export const metadata = { title: 'Divinity Decor – Case Study' };

export default function DivinePage() {
  const data = caseStudyPages.divine;
  return <CaseStudyPage name={data.name} images={data.images} />;
}
