import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

const data = servicePages['web-development'];

export const metadata = {
  title: 'Web Development Services — Custom Websites & Web Applications',
  description: data.description,
  keywords: ['web development', 'website design', 'custom website', 'React', 'Next.js', 'WordPress', 'responsive design'],
  alternates: { canonical: '/web-development' },
  openGraph: { title: 'Web Development Services', description: data.description, url: '/web-development' },
};

export default function WebDevPage() {
  return <ServicePage data={data} />;
}
