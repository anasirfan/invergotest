import { servicePages } from '@/lib/content';
import ServicePage from '@/components/sections/ServicePage';

const data = servicePages['ai-automation'];

export const metadata = {
  title: 'Automation & AI Integration Services — Chatbots, Workflows & ML',
  description: data.description,
  keywords: ['AI integration', 'automation', 'AI chatbot', 'workflow automation', 'machine learning', 'business automation', 'GPT integration', 'AI consulting'],
  alternates: { canonical: '/ai-automation' },
  openGraph: { title: 'Automation & AI Integration Services', description: data.description, url: '/ai-automation' },
};

export default function AIAutomationPage() {
  return <ServicePage data={data} />;
}
