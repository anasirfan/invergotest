import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

const data = servicePages.ecommerce;

export const metadata = {
  title: 'Ecommerce Store Development — Shopify, WooCommerce & Custom',
  description: data.description,
  keywords: ['ecommerce development', 'Shopify', 'WooCommerce', 'online store', 'payment integration', 'shopping cart'],
  alternates: { canonical: '/ecommerce' },
  openGraph: { title: 'Ecommerce Development', description: data.description, url: '/ecommerce' },
};

export default function EcommercePage() {
  return <ServicePage data={data} />;
}
