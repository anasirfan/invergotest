'use client';
import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/Icons';
import styles from './QuotePopup.module.css';

export default function QuotePopup({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

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
        setTimeout(() => { setStatus(null); onClose(); }, 2000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      ref={overlayRef}
      className={`${styles.overlay} ${open ? styles.open : ''}`}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className={styles.panel}>
        <button className={styles.close} onClick={onClose} aria-label="Close">
          <Icon name="x" size={20} />
        </button>

        <h3 className="heading-md" style={{ textAlign: 'center' }}>
          Let&apos;s <span className="text-gradient">Talk</span>
        </h3>
        <p className="text-secondary" style={{ textAlign: 'center', marginTop: 'var(--sp-2)' }}>
          Tell us about your project and we&apos;ll get back to you within 24 hours.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email Address *"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={styles.input}
          />
          <textarea
            placeholder="Tell us about your project *"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={styles.input}
          />
          <button
            type="submit"
            className="btn btn--primary btn--lg"
            style={{ width: '100%' }}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
          </button>
          {status === 'error' && (
            <p style={{ color: 'var(--color-danger)', fontSize: 'var(--fs-sm)', textAlign: 'center' }}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
