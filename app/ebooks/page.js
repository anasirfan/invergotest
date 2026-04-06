import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

const data = servicePages.ebooks;

export const metadata = {
  title: 'E-book Design & Publishing — Professional Digital Publications',
  description: data.description,
  keywords: ['e-book design', 'digital publishing', 'Kindle', 'Amazon KDP', 'e-book formatting', 'cover design', 'EPUB'],
  alternates: { canonical: '/ebooks' },
  openGraph: { title: 'E-book Services', description: data.description, url: '/ebooks' },
};

export default function EbooksPage() {
  return <ServicePage data={data} />;
}
