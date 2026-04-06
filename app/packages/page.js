'use client';
import { useState, useRef, useEffect } from 'react';
import { packageCategories } from '@/lib/packages-data';
import styles from './packages.module.css';

const categoryMeta = {
  'graphic-design': { icon: '✦', accent: '#F59E0B', image: '/images/s2.jpg' },
  'video-editing': { icon: '▶', accent: '#EC4899', image: '/images/s7.jpg' },
  'web-development': { icon: '◈', accent: '#8B5CF6', image: '/images/s1.jpg' },
  'mobile-apps': { icon: '◆', accent: '#3B82F6', image: '/images/s6.jpg' },
  ecommerce: { icon: '◉', accent: '#EF4444', image: '/images/s3.jpg' },
  'va-consultation': { icon: '◇', accent: '#14B8A6', image: '/images/s8.jpg' },
  seo: { icon: '◎', accent: '#06D6A0', image: '/images/s4.jpg' },
  'social-media': { icon: '◆', accent: '#6366F1', image: '/images/s9.jpg' },
  'lead-generation': { icon: '◎', accent: '#F97316', image: '/images/leftServ.jpg' },
  ebooks: { icon: '◇', accent: '#A855F7', image: '/images/rightServ.jpg' },
};

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState('graphic-design');
  const [animKey, setAnimKey] = useState(0);
  const category = packageCategories.find((c) => c.id === activeTab);
  const meta = categoryMeta[activeTab] || categoryMeta.logo;
  const gridRef = useRef(null);

  const switchTab = (id) => {
    setActiveTab(id);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('[data-card]');
    if (!cards) return;

    const handleMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -4;
      const ry = ((x - cx) / cx) * 4;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      const glow = card.querySelector('[data-glow]');
      if (glow) glow.style.background = `radial-gradient(circle at ${x}px ${y}px, ${meta.accent}15, transparent 50%)`;
    };

    const handleLeave = (e) => {
      e.currentTarget.style.transform = '';
      const glow = e.currentTarget.querySelector('[data-glow]');
      if (glow) glow.style.background = 'transparent';
    };

    cards.forEach((c) => {
      c.addEventListener('mousemove', handleMove);
      c.addEventListener('mouseleave', handleLeave);
    });
    return () => cards.forEach((c) => {
      c.removeEventListener('mousemove', handleMove);
      c.removeEventListener('mouseleave', handleLeave);
    });
  }, [activeTab, meta.accent]);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOrb1} aria-hidden="true" />
          <div className={styles.heroOrb2} aria-hidden="true" />
          <div className={styles.heroGrid} aria-hidden="true" />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Transparent Pricing</span>
          <h1 className={styles.heroTitle}>
            Our <span className={styles.heroGradient}>Packages</span>
          </h1>
          <p className={styles.heroSub}>
            No hidden fees. One-time pricing for every business size.<br />
            All packages include our satisfaction guarantee.
          </p>
        </div>
        {/* Floating decoration */}
        <div className={styles.heroFloat1} aria-hidden="true">$</div>
        <div className={styles.heroFloat2} aria-hidden="true">✦</div>
        <div className={styles.heroFloat3} aria-hidden="true">◈</div>
      </section>

      {/* Category image banner */}
      <div className={styles.catBanner} style={{ '--cat-accent': meta.accent }}>
        <img key={activeTab} src={meta.image} alt="" className={styles.catBannerImg} />
        <div className={styles.catBannerOverlay} />
        <div className={styles.catBannerContent}>
          <span className={styles.catIcon}>{meta.icon}</span>
          <span className={styles.catLabel}>{category?.label} Packages</span>
        </div>
      </div>

      {/* Tabs */}
      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.tabs}>
            {packageCategories.map((cat) => {
              const cm = categoryMeta[cat.id] || {};
              return (
                <button
                  key={cat.id}
                  className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ''}`}
                  onClick={() => switchTab(cat.id)}
                  style={activeTab === cat.id ? { '--tab-accent': cm.accent } : undefined}
                >
                  <span className={styles.tabIcon}>{cm.icon}</span>
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Cards */}
          {category && (
            <div className={styles.grid} ref={gridRef} key={animKey}>
              {category.packages.map((pkg, i) => (
                <div
                  key={`${category.id}-${i}`}
                  className={`${styles.card} ${pkg.popular ? styles.cardPopular : ''}`}
                  data-card
                  style={{ '--accent': meta.accent, '--i': i }}
                >
                  <div className={styles.cardGlow} data-glow />

                  {pkg.popular && (
                    <div className={styles.popularBadge} style={{ background: meta.accent }}>
                      Most Popular
                    </div>
                  )}

                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardName}>{pkg.name}</h3>
                    <div className={styles.cardPrice} style={{ '--accent': meta.accent }}>
                      {pkg.price}
                    </div>
                  </div>

                  <div className={styles.divider} style={{ '--accent': meta.accent }} />

                  <ul className={styles.features}>
                    {pkg.features.map((f, j) => (
                      <li key={j}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={meta.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`${styles.cardBtn} ${pkg.popular ? styles.cardBtnPrimary : ''}`}
                    style={{ '--accent': meta.accent }}
                    onClick={() => document.querySelector('[data-quote-trigger]')?.click()}
                  >
                    <span>Get Started</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>

                  <div className={styles.cardShine} />
                </div>
              ))}
            </div>
          )}

          <p className={styles.disclaimer}>
            * No monthly or hidden fees. All prices are one-time unless stated otherwise.
          </p>
        </div>
      </section>
    </div>
  );
}
