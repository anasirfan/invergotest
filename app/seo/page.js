import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

export const metadata = { title: 'SEO Optimization — InverGo Design' };

export default function SEOPage() {
  return <ServicePage data={servicePages.seo} />;
}
