import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './ServiceList.module.css';

export default function ServiceList({ services, bodyParagraphs, accent }) {
  if (bodyParagraphs?.length > 0 && services.length === 0) {
    return (
      <section className="section">
        <div className="container container--narrow">
          {bodyParagraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <p className={styles.bodyPara}>{p}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <div className={styles.grid}>
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className={styles.card} style={{ '--accent': accent }}>
                <div className={styles.number}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.desc}>{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
