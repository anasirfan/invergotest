import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

export const metadata = { title: 'VA Consultation — InverGo Design' };

export default function VAConsultationPage() {
  return <ServicePage data={servicePages['va-consultation']} />;
}
