'use client';
import { useState, useRef, useEffect } from 'react';
import { siteInfo } from '@/lib/content';
import styles from './Contact.module.css';

const contactItems = [
  { icon: 'M', label: siteInfo.email, href: `mailto:${siteInfo.email}`, iconSvg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
  { icon: 'M', label: siteInfo.emailSecondary, href: `mailto:${siteInfo.emailSecondary}`, iconSvg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
  { icon: 'P', label: siteInfo.phone, href: siteInfo.phoneHref, iconSvg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
  { icon: 'P', label: siteInfo.phoneAlt, href: siteInfo.phoneAltHref, iconSvg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
  { icon: 'L', label: siteInfo.address, iconSvg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.section} ref={sectionRef}>
      <div className={styles.bgMesh} aria-hidden="true" />

      <div className={styles.header}>
        <span className={styles.badge}>get in touch</span>
        <h2 className={styles.title}>Let&apos;s Work Together</h2>
        <p className={styles.subtitle}>Need a quick fix or a full project? We&apos;re here to help.</p>
      </div>

      <div className={styles.layout}>
        {/* Left – contact info */}
        <div className={`${styles.infoSide} ${visible ? styles.infoVisible : ''}`}>
          <div className={styles.infoList}>
            {contactItems.map((item, i) => (
              <div key={i} className={styles.infoCard} style={{ '--delay': `${i * 0.08}s` }}>
                <div className={styles.infoIcon}>{item.iconSvg}</div>
                <div className={styles.infoText}>
                  {item.href ? (
                    <a href={item.href} className={styles.infoLink}>{item.label}</a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative visual */}
          <div className={styles.visual}>
            <div className={styles.visualRing} />
            <div className={styles.visualRing2} />
            <div className={styles.visualCenter}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5">
                <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right – form */}
        <div className={`${styles.formSide} ${visible ? styles.formVisible : ''}`}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Send us a message</h3>
              <p className={styles.formSub}>We&apos;ll get back within 24 hours</p>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email *</label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Message *</label>
              <textarea
                placeholder="Tell us about your project..."
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={styles.input}
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
              <span className={styles.btnText}>
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </span>
              <span className={styles.btnIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </span>
            </button>

            {status === 'error' && (
              <p className={styles.error}>Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
