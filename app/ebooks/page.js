import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

export const metadata = { title: 'E-books — InverGo Design' };

export default function EbooksPage() {
  return <ServicePage data={servicePages.ebooks} />;
}
