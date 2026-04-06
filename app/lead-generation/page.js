import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

const data = servicePages['lead-generation'];

export const metadata = {
  title: 'Lead Generation — Qualified Leads & Sales Funnels',
  description: data.description,
  keywords: ['lead generation', 'PPC', 'Google Ads', 'landing pages', 'email marketing', 'CRM', 'sales funnel'],
  alternates: { canonical: '/lead-generation' },
  openGraph: { title: 'Lead Generation Services', description: data.description, url: '/lead-generation' },
};

export default function LeadGenPage() {
  return <ServicePage data={data} />;
}
