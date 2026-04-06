'use client';
import { useState, useEffect } from 'react';
import { hero, siteInfo } from '@/lib/content';
import styles from './Hero.module.css';

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % hero.rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${styles.hero} ${loaded ? styles.loaded : ''}`}>
      <div className={styles.atmosphere} aria-hidden="true">
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gradientOrb3} />
        <div className={styles.noiseOverlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.contentLeft}>
          <div className={styles.rotatingText}>
            <p>Providing</p>
            <p>
              <span key={wordIndex} className={styles.word}>
                {hero.rotatingWords[wordIndex]}
              </span>
            </p>
            <p>Services</p>
          </div>

          <div className={styles.description}>{hero.description}</div>

          <ul className={styles.socialWrapper}>
            <li className={styles.socialIcon} onClick={() => window.open(siteInfo.social.facebook, '_blank')}>
              <span className={styles.tooltip}>Facebook</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </li>
            <li className={styles.socialIcon} onClick={() => window.open(siteInfo.social.instagram, '_blank')}>
              <span className={styles.tooltip}>Instagram</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="5"/><path d="M17.5 6.5h.01"/></svg>
            </li>
            <li className={styles.socialIcon} onClick={() => window.open(siteInfo.social.linkedin, '_blank')}>
              <span className={styles.tooltip}>LinkedIn</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </li>
          </ul>

          <div className={styles.platformsLabel}>We specialize in various platforms:</div>
          <div className={styles.slider}>
            <div className={styles.slideTrack}>
              {[...hero.platformImages, ...hero.platformImages].map((src, i) => (
                <div key={i} className={styles.slide}>
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.contentRight}>
          <div className={styles.floatImgs}>
            <div className={styles.ph}>
              <img src="/img/Phone.png" alt="Mobile showcase" />
            </div>
            <div className={`${styles.inph1} ${styles.floating}`}>
              <img src="/img/T2.png" alt="" className={styles.popout} style={{ animationDelay: '0.2s' }} />
            </div>
            <div className={`${styles.inph2} ${styles.floating} ${styles.animDurb}`}>
              <img src="/img/T1.png" alt="" className={styles.popout} style={{ animationDelay: '0.4s' }} />
            </div>
            <div className={`${styles.inph3} ${styles.floating} ${styles.animDurc}`}>
              <img src="/img/T3.png" alt="" className={styles.popout} style={{ animationDelay: '0.6s' }} />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
