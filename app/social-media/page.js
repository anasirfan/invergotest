import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

const data = servicePages['social-media'];

export const metadata = {
  title: 'Social Media Marketing — Grow Your Brand Online',
  description: data.description,
  keywords: ['social media marketing', 'Facebook ads', 'Instagram marketing', 'LinkedIn', 'TikTok', 'content strategy', 'paid advertising'],
  alternates: { canonical: '/social-media' },
  openGraph: { title: 'Social Media Marketing', description: data.description, url: '/social-media' },
};

export default function SocialMediaPage() {
  return <ServicePage data={data} />;
}
