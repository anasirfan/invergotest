import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

const data = servicePages['va-consultation'];

export const metadata = {
  title: 'VA Consultation — Virtual Assistant & Business Strategy',
  description: data.description,
  keywords: ['virtual assistant', 'VA consultation', 'business strategy', 'project management', 'administrative support'],
  alternates: { canonical: '/va-consultation' },
  openGraph: { title: 'VA Consultation Services', description: data.description, url: '/va-consultation' },
};

export default function VAConsultationPage() {
  return <ServicePage data={data} />;
}
