import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

const data = servicePages.seo;

export const metadata = {
  title: 'SEO Optimization Services — Rank Higher on Google',
  description: data.description,
  keywords: ['SEO', 'search engine optimization', 'Google ranking', 'keyword research', 'on-page SEO', 'off-page SEO', 'technical SEO'],
  alternates: { canonical: '/seo' },
  openGraph: { title: 'SEO Optimization Services', description: data.description, url: '/seo' },
};

export default function SEOPage() {
  return <ServicePage data={data} />;
}
