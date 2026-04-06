'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './PortfolioShowcase.module.css';

const portfolioImages = [
  '/images/1.jpg', '/images/3.jpg', '/images/4.jpg', '/images/5.jpg',
  '/images/6.jpg', '/images/7.jpg', '/images/8.jpg', '/images/9.jpg',
  '/images/10.jpg', '/images/11.jpg', '/images/12.jpg', '/images/13.jpg',
  '/images/14.jpg', '/images/15.jpg', '/images/16.jpg', '/images/17.jpg',
  '/images/18.jpg', '/images/19.jpg', '/images/20.jpg',
];

export default function PortfolioShowcase() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const row1 = portfolioImages.slice(0, 10);
  const row2 = portfolioImages.slice(10);

  return (
    <section id="portfolio" className={styles.section} ref={sectionRef}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.badge}>our work</span>
          <h2 className={styles.title}>Portfolio</h2>
          <p className={styles.subtitle}>Every project is our pride</p>
        </div>
        <Link href="/portfolio" className={styles.viewAll}>
          View complete portfolio
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Auto-scrolling rows */}
      <div className={styles.marqueeWrap}>
        <div className={`${styles.marquee} ${visible ? styles.marqueeActive : ''}`}>
          <div className={styles.marqueeTrack}>
            {[...row1, ...row1].map((src, i) => (
              <div key={`r1-${i}`} className={styles.marqueeItem}>
                <img src={src} alt={`Portfolio ${i + 1}`} loading="lazy" />
                <div className={styles.itemOverlay} />
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.marquee} ${styles.marqueeReverse} ${visible ? styles.marqueeActive : ''}`}>
          <div className={styles.marqueeTrack}>
            {[...row2, ...row2].map((src, i) => (
              <div key={`r2-${i}`} className={styles.marqueeItem}>
                <img src={src} alt={`Portfolio ${i + 1}`} loading="lazy" />
                <div className={styles.itemOverlay} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
