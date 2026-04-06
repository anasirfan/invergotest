'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { testimonials } from '@/lib/content';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);
  const touchStart = useRef(0);

  const go = useCallback((next) => {
    if (animating) return;
    setAnimating(true);
    setActive(next);
    setTimeout(() => setAnimating(false), 600);
  }, [animating]);

  const next = useCallback(() => go((active + 1) % testimonials.length), [active, go]);
  const prev = useCallback(() => go((active - 1 + testimonials.length) % testimonials.length), [active, go]);

  useEffect(() => {
    timerRef.current = setInterval(next, 8000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 8000);
  };

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className={styles.section}
      onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const diff = touchStart.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          diff > 0 ? next() : prev();
          resetTimer();
        }
      }}
    >
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.badge}>testimonials</span>
          <h2 className={styles.title}>What Our<br />Clients Say</h2>

          {/* Navigation thumbnails */}
          <div className={styles.thumbs}>
            {testimonials.map((item, i) => (
              <button
                key={i}
                className={`${styles.thumb} ${i === active ? styles.thumbActive : ''}`}
                onClick={() => { go(i); resetTimer(); }}
              >
                <span className={styles.thumbLetter}>{item.name[0]}</span>
                <span className={styles.thumbName}>{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          {/* Large decorative quote */}
          <div className={styles.quoteDecor} aria-hidden="true">&ldquo;</div>

          <div key={active} className={styles.card}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, j) => (
                <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>

            <blockquote className={styles.quote}>
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className={styles.author}>
              <div className={styles.avatar}>{t.name[0]}</div>
              <div>
                <strong className={styles.authorName}>{t.name}</strong>
                {t.site && <span className={styles.authorSite}>{t.site}</span>}
              </div>
            </div>
          </div>

          {/* Arrow controls */}
          <div className={styles.controls}>
            <button onClick={() => { prev(); resetTimer(); }} className={styles.arrow} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
            </button>
            <span className={styles.counter}>
              {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
            <button onClick={() => { next(); resetTimer(); }} className={styles.arrow} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
