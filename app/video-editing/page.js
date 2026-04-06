import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

const data = servicePages['video-editing'];

export const metadata = {
  title: 'Video Editing Services — Professional Post-Production',
  description: data.description,
  keywords: ['video editing', 'motion graphics', 'promotional video', 'social media reels', 'color grading', 'corporate video'],
  alternates: { canonical: '/video-editing' },
  openGraph: { title: 'Video Editing Services', description: data.description, url: '/video-editing' },
};

export default function VideoEditingPage() {
  return <ServicePage data={data} />;
}
