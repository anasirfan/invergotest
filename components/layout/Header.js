'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks, siteInfo } from '@/lib/content';
import Icon from '@/components/ui/Icons';
import styles from './Header.module.css';

export default function Header({ onQuoteClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Hamburger (mobile) */}
          <button
            className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.burgerTop} />
            <span className={styles.burgerMid} />
            <span className={styles.burgerBot} />
          </button>

          {/* Logo */}
          <div className={styles.headerLeft}>
            <Link href="/" className={styles.logo}>
              <img src="/img/logo-head.png" alt={siteInfo.name} />
            </Link>
          </div>

          {/* Right: nav + button */}
          <div className={styles.headerRight}>
            <ul className={styles.nav}>
              {navLinks.map((link, i) => (
                <li key={link.href + i}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${i === 0 ? styles.navLinkActive : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.headerBtn}>
              <a href={siteInfo.phoneHref} className={styles.callNowLink}>
                <button className={styles.callNowBtn} type="button">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Call Now</span>
                </button>
              </a>
              <a
                href="#contact"
                className={styles.discussLink}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <button className={styles.pulse} type="button">
                  <span className={styles.discussText}>Let&apos;s Discuss</span>
                  <div className={styles.iconContainer}>
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="currentColor">
                      <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z" />
                    </svg>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href + i}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteInfo.phoneHref}
            className={styles.mobileCallBtn}
            onClick={() => setMobileOpen(false)}
          >
            📞 Call Now
          </a>
          <a
            href="#contact"
            className={styles.mobileCta}
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}
          >
            Let&apos;s Discuss
          </a>
        </nav>
      </div>
    </>
  );
}
