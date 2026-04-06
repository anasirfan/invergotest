import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

export const metadata = { title: 'Ecommerce Stores — InverGo Design' };

export default function EcommercePage() {
  return <ServicePage data={servicePages.ecommerce} />;
}
