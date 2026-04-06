'use client';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Icon from '@/components/ui/Icons';
import styles from './CaseStudyPage.module.css';

export default function CaseStudyPage({ name, images }) {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.meshBg} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <ScrollReveal>
            <Link href="/#projects" className={styles.backLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
              Back to Projects
            </Link>
            <span className="badge" style={{ marginTop: 'var(--sp-4)' }}>Case Study</span>
            <h1 className="heading-xl" style={{ marginTop: 'var(--sp-4)' }}>{name}</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className={styles.gallery}>
            {images.map((src, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={styles.imageWrap}>
                  <img
                    src={src}
                    alt={`${name} - Image ${i + 1}`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className={styles.cta}>
              <h2 className="heading-md">Interested in a similar project?</h2>
              <p className="text-secondary" style={{ margin: 'var(--sp-3) 0 var(--sp-6)' }}>
                Let&apos;s discuss how we can bring your vision to life.
              </p>
              <button
                className="btn btn--primary btn--lg"
                onClick={() => document.querySelector('[data-quote-trigger]')?.click()}
              >
                Start Your Project
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
