import ScrollReveal from './ScrollReveal';

export default function SectionHeading({ badge, title, description, align = 'center' }) {
  return (
    <ScrollReveal className={`section-heading ${align === 'left' ? 'section-heading--left' : ''}`}>
      {badge && <span className="badge">{badge}</span>}
      <h2 className="heading-lg" style={{ marginTop: badge ? 'var(--sp-4)' : 0 }}>
        {title}
      </h2>
      {description && (
        <p className="text-secondary" style={{ marginTop: 'var(--sp-4)', maxWidth: '600px', margin: align === 'center' ? 'var(--sp-4) auto 0' : 'var(--sp-4) 0 0' }}>
          {description}
        </p>
      )}
      <style jsx>{`
        .section-heading { text-align: ${align}; }
        .section-heading--left { text-align: left; }
      `}</style>
    </ScrollReveal>
  );
}
