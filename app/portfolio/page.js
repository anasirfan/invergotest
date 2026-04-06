'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { portfolioTabs } from '@/lib/content';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './portfolio.module.css';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('logo');
  const [lightbox, setLightbox] = useState(null);
  const dialogRef = useRef(null);

  const tab = portfolioTabs.find((t) => t.id === activeTab);

  const openLightbox = useCallback((src) => {
    setLightbox(src);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, closeLightbox]);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.meshBg} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <span className="badge">Our Work</span>
          <h1 className="heading-xl" style={{ marginTop: 'var(--sp-4)' }}>
            Portfolio
          </h1>
          <p className="text-secondary" style={{ maxWidth: '500px', margin: 'var(--sp-4) auto 0' }}>
            Every project is our pride. Browse our work across all categories.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.tabs}>
            {portfolioTabs.map((t) => (
              <button
                key={t.id}
                className={`${styles.tab} ${activeTab === t.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab && (
            <div className={styles.grid}>
              {tab.items.map((item, i) => (
                <ScrollReveal key={`${tab.id}-${i}`} delay={i * 50}>
                  <button
                    className={styles.gridItem}
                    onClick={() => openLightbox(item.full)}
                    aria-label={`View ${tab.label} item ${i + 1}`}
                  >
                    <img src={item.thumb} alt={`${tab.label} ${i + 1}`} loading="lazy" />
                    <div className={styles.gridOverlay}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightbox && (
        <div className={styles.lightbox} onClick={closeLightbox} ref={dialogRef}>
          <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          <img
            src={lightbox}
            alt="Portfolio item"
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
