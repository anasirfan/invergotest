'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './PackagesCta.module.css';

const highlights = [
  { label: 'Graphic Design', from: '$34.99' },
  { label: 'Web Development', from: '$229.99' },
  { label: 'Mobile Apps', from: '$1,499.99' },
  { label: 'SEO', from: '$1,299' },
];

export default function PackagesCta() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="packages" className={styles.section} ref={sectionRef}>
      <div className={styles.bgOrb} aria-hidden="true" />

      <div className={styles.container}>
        <div className={`${styles.left} ${visible ? styles.leftVisible : ''}`}>
          <span className={styles.badge}>transparent pricing</span>
          <h2 className={styles.title}>Our Packages</h2>
          <p className={styles.description}>
            No monthly or hidden fees. All packages include our satisfaction guarantee
            and dedicated account manager.
          </p>
          <Link href="/packages" className={styles.cta}>
            <span>View All Packages</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className={`${styles.right} ${visible ? styles.rightVisible : ''}`}>
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className={styles.priceCard}
              style={{ '--i': i }}
            >
              <div className={styles.priceLabel}>{item.label}</div>
              <div className={styles.priceValue}>
                <span className={styles.priceFrom}>from</span>
                {item.from}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
