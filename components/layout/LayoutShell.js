'use client';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import QuotePopup from './QuotePopup';

export default function LayoutShell({ children }) {
  const [quoteOpen, setQuoteOpen] = useState(false);

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
