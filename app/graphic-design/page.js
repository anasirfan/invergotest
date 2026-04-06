import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

export const metadata = { title: 'Graphic Design — InverGo Design' };

export default function GraphicDesignPage() {
  return <ServicePage data={servicePages['graphic-design']} />;
}
