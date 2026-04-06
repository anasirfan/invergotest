import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

export const metadata = { title: 'Lead Generation — InverGo Design' };

export default function LeadGenPage() {
  return <ServicePage data={servicePages['lead-generation']} />;
}
