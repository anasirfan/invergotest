'use client';
import { useRef, useEffect, useState } from 'react';
import { stats } from '@/lib/content';
import styles from './Stats.module.css';

function Counter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 2400;
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / dur, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <linearGradient id="statGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#02F6C0" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.glowOrb1} aria-hidden="true" />
      <div className={styles.glowOrb2} aria-hidden="true" />

      <div className={styles.container}>
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
            style={{ '--i': i }}
          >
            <div className={styles.cardInner}>
              <div className={styles.ringWrap}>
                <svg className={styles.ring} viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" className={styles.ringBg} />
                  <circle
                    cx="60" cy="60" r="54"
                    className={styles.ringProgress}
                    style={{ '--progress': visible ? 1 : 0 }}
                  />
                </svg>
                <div className={styles.value}>
                  <Counter value={stat.value} suffix={stat.suffix || ''} />
                </div>
              </div>
              <div className={styles.label}>{stat.label}</div>
              <div className={styles.bar}>
                <div
                  className={styles.barFill}
                  style={{ '--fill': visible ? '100%' : '0%' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
