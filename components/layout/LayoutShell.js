'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import QuotePopup from './QuotePopup';

const NO_SHELL_PAGES = ['/landing', '/thank-you'];

export default function LayoutShell({ children }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const pathname = usePathname();
  const noShell = NO_SHELL_PAGES.includes(pathname);

  if (noShell) return <>{children}</>;

  return (
    <>
      <Header onQuoteClick={() => setQuoteOpen(true)} />
      <button
        data-quote-trigger
        onClick={() => setQuoteOpen(true)}
        style={{ display: 'none' }}
        aria-hidden="true"
      />
      <main>{children}</main>
      <Footer />
      <QuotePopup open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
