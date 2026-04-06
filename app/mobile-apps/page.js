import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

const data = servicePages['mobile-apps'];

export const metadata = {
  title: 'Android & iOS Hybrid App Development — React Native & Flutter',
  description: data.description,
  keywords: ['mobile app development', 'Android app', 'iOS app', 'hybrid app', 'React Native', 'Flutter', 'cross-platform'],
  alternates: { canonical: '/mobile-apps' },
  openGraph: { title: 'Mobile App Development', description: data.description, url: '/mobile-apps' },
};

export default function MobileAppsPage() {
  return <ServicePage data={data} />;
}
