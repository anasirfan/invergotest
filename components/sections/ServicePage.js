'use client';
import ServiceHero from './ServiceHero';
import ServiceList from './ServiceList';
import Contact from './Contact';

export default function ServicePage({ data }) {
  const handleQuote = () => {
    document.querySelector('[data-quote-trigger]')?.click();
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    description: data.description,
    provider: {
      '@type': 'Organization',
      name: 'InverGo Design',
      url: 'https://www.invergodesign.com',
    },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    ...(data.services?.length && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: data.title,
        itemListElement: data.services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.desc },
        })),
      },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceHero
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        accent={data.accent}
        onQuoteClick={handleQuote}
      />
      <ServiceList
        services={data.services}
        bodyParagraphs={data.bodyParagraphs}
        accent={data.accent}
      />
      <Contact />
    </>
  );
}
