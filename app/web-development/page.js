import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

export const metadata = { title: 'Web Development — InverGo Design' };

export default function WebDevPage() {
  return <ServicePage data={servicePages['web-development']} />;
}
