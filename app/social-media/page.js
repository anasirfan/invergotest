import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

export const metadata = { title: 'Social Media Marketing — InverGo Design' };

export default function SocialMediaPage() {
  return <ServicePage data={servicePages['social-media']} />;
}
