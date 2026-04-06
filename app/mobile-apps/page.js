import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

export const metadata = { title: 'Android/iOS Hybrid Apps — InverGo Design' };

export default function MobileAppsPage() {
  return <ServicePage data={servicePages['mobile-apps']} />;
}
