import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { stats } from '@/lib/content';
import styles from './ServiceHero.module.css';

export default function ServiceHero({ title, subtitle, description, accent, onQuoteClick }) {
  return (
    <section className={styles.hero} style={{ '--accent': accent }}>
      <div className={styles.meshBg} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <ScrollReveal>
          <span className="badge">{subtitle}</span>
          <h1 className={`heading-xl ${styles.title}`}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <button className="btn btn--primary btn--lg" onClick={onQuoteClick}>
              Get A Quote
            </button>
            <a href="/portfolio" className="btn btn--secondary btn--lg">
              View Portfolio
            </a>
          </div>
        </ScrollReveal>

        <div className={styles.stats}>
          {stats.map((stat, i) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statValue}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix || ''} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
