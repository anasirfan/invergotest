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
            className={styles.burger}
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
              <a href={`mailto:${siteInfo.email}`} className={styles.discussLink}>
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
            href={`mailto:${siteInfo.email}`}
            className="btn btn--primary btn--lg"
            style={{ marginTop: 'var(--sp-6)', width: '100%', textAlign: 'center' }}
          >
            Let&apos;s Discuss
          </a>
        </nav>
      </div>
    </>
  );
}
