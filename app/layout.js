import './globals.css';
import LayoutShell from '@/components/layout/LayoutShell';

export const metadata = {
  title: {
    default: 'InverGo Design – Premium Web Design & Development',
    template: '%s | InverGo Design',
  },
  description:
    'InverGo Design is a full-service digital agency delivering premium web design, development, branding, and marketing solutions.',
  metadataBase: new URL('https://www.invergodesign.com'),
  openGraph: {
    siteName: 'InverGo Design',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
