import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

export const metadata = { title: 'Video Editing — InverGo Design' };

export default function VideoEditingPage() {
  return <ServicePage data={servicePages['video-editing']} />;
}
