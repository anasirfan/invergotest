import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

const data = servicePages['graphic-design'];

export const metadata = {
  title: 'Graphic Design Services — Logo, Branding & Marketing Collateral',
  description: data.description,
  keywords: ['graphic design', 'logo design', 'branding', 'business card design', 'marketing materials', 'packaging design'],
  alternates: { canonical: '/graphic-design' },
  openGraph: { title: 'Graphic Design Services', description: data.description, url: '/graphic-design' },
};

export default function GraphicDesignPage() {
  return <ServicePage data={data} />;
}
