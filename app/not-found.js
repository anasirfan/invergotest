import Link from 'next/link';

export default function NotFound() {
  return (
    <section style={{
      minHeight: 'calc(100vh - var(--header-h) - 200px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 'var(--sp-8)',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-7xl)',
        fontWeight: 800,
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        404
      </span>
      <h1 style={{ fontSize: 'var(--fs-2xl)', marginTop: 'var(--sp-4)' }}>Page Not Found</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--sp-3)', maxWidth: '400px' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--sp-8)' }}>
        Back to Home
      </Link>
    </section>
  );
}
