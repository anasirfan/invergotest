import Link from 'next/link';
import { siteInfo, navLinks, services } from '@/lib/content';
import Icon from '@/components/ui/Icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <img src="/img/logo-head.png" alt={siteInfo.name} width={160} height={42} />
            <p className="text-secondary" style={{ marginTop: 'var(--sp-4)' }}>
              {siteInfo.tagline}
            </p>
            <div className={styles.social}>
              <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="5"/><path d="M17.5 6.5h.01"/></svg>
              </a>
              <a href={siteInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.colList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.colList}>
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.colList}>
              <li>
                <a href={`mailto:${siteInfo.email}`}>
                  <Icon name="mail" size={14} /> {siteInfo.email}
                </a>
              </li>
              <li>
                <a href={siteInfo.phoneHref}>
                  <Icon name="phone" size={14} /> {siteInfo.phone}
                </a>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--sp-2)' }}>
                  <Icon name="map-pin" size={14} />
                  <span>{siteInfo.address}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className="text-muted" style={{ fontSize: 'var(--fs-xs)' }}>{siteInfo.copyright}</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
