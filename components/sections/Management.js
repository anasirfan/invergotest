'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Management.module.css';

const panels = [
  {
    title: 'School Information\nManagement System',
    image: '/images/leftServ.jpg',
    link: '/portfolio',
  },
  {
    title: 'Business\nConsultation',
    image: '/images/rightServ.jpg',
    link: '/portfolio',
  },
];

export default function Management() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="management" className={styles.section} ref={sectionRef}>
      <div className={styles.header}>
        <span className={styles.badge}>what we manage</span>
        <h2 className={styles.title}>Management / Consultation</h2>
      </div>

      <div className={styles.panels}>
        {panels.map((panel, i) => (
          <Link
            key={i}
            href={panel.link}
            className={`${styles.panel} ${visible ? styles.panelVisible : ''}`}
            style={{ '--i': i }}
          >
            <img src={panel.image} alt={panel.title} className={styles.panelImage} loading="lazy" />
            <div className={styles.panelOverlay} />
            <div className={styles.panelContent}>
              <h3 className={styles.panelTitle}>{panel.title}</h3>
              <span className={styles.panelCta}>
                Learn More
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
            <div className={styles.panelShine} />
          </Link>
        ))}
      </div>
    </section>
  );
}
