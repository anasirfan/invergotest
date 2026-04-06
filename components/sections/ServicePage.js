'use client';
import ServiceHero from './ServiceHero';
import ServiceList from './ServiceList';
import Contact from './Contact';

export default function ServicePage({ data }) {
  const handleQuote = () => {
    document.querySelector('[data-quote-trigger]')?.click();
  };

  return (
    <>
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
