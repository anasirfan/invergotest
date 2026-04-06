'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { services } from '@/lib/content';
import Icon from '@/components/ui/Icons';
import styles from './Services.module.css';

const serviceImages = [
  '/images/s1.jpg',
  '/images/s2.jpg',
  '/images/s3.jpg',
  '/images/s4.jpg',
  '/images/s6.jpg',
  '/images/s7.jpg',
  '/images/s8.jpg',
  '/images/s9.jpg',
  '/images/leftServ.jpg',
  '/images/rightServ.jpg',
  '/images/s4.jpg',
];

export default function Services() {
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

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('[data-tilt]');
    if (!cards) return;

    const handleMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
      const glow = card.querySelector('[data-glow]');
      if (glow) glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(139, 92, 246, 0.12), transparent 50%)`;
    };

    const handleLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      const glow = card.querySelector('[data-glow]');
      if (glow) glow.style.background = 'transparent';
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMove);
      card.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMove);
        card.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section id="services" className={styles.section} ref={sectionRef}>
      <div className={styles.bgOrb1} aria-hidden="true" />
      <div className={styles.bgOrb2} aria-hidden="true" />

      <div className={styles.header}>
        <span className={styles.badge}>services we offer</span>
        <h2 className={styles.title}>Web Services</h2>
        <p className={styles.subtitle}>
          From concept to launch — full-spectrum digital services
        </p>
      </div>

      <div className={styles.layout}>
        {/* Featured large card */}
        <Link
          href={`/${featured.slug}`}
          className={`${styles.featuredCard} ${visible ? styles.cardVisible : ''}`}
          data-tilt
          style={{ '--accent': featured.accent, '--i': 0 }}
        >
          <div className={styles.cardGlow} data-glow />
          <img src={serviceImages[0]} alt={featured.title} className={styles.featuredImage} loading="lazy" />
          <div className={styles.featuredOverlay} />
          <div className={styles.featuredContent}>
            <div className={styles.featuredIcon}>
              <Icon name={featured.icon} size={32} />
            </div>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.featuredDesc}>
              Front-end development focuses on building the user-facing aspects using HTML, CSS, and JavaScript.
            </p>
            <span className={styles.cardCta}>
              Explore
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </span>
          </div>
        </Link>

        {/* Bento grid */}
        <div className={styles.bento}>
          {rest.map((service, i) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className={`${styles.bentoCard} ${visible ? styles.cardVisible : ''}`}
              data-tilt
              style={{ '--accent': service.accent, '--i': i + 1 }}
            >
              <div className={styles.cardGlow} data-glow />
              <img src={serviceImages[i + 1] || serviceImages[0]} alt={service.title} className={styles.bentoImage} loading="lazy" />
              <div className={styles.bentoOverlay} />
              <div className={styles.bentoContent}>
                <div className={styles.bentoIcon}>
                  <Icon name={service.icon} size={22} />
                </div>
                <h3 className={styles.bentoTitle}>{service.title}</h3>
                <div className={styles.bentoArrow}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
