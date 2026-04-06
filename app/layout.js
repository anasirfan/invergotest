import './globals.css';
import LayoutShell from '@/components/layout/LayoutShell';

const SITE_URL = 'https://www.invergodesign.com';
const SITE_NAME = 'InverGo Design';
const SITE_DESC =
  'InverGo Design is a full-service digital agency specializing in graphic design, web development, mobile apps, ecommerce, video editing, SEO, social media marketing, lead generation, VA consultation, and e-books. 10+ years of experience delivering premium solutions.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Premium Digital Agency | Web Design, Development & Marketing`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: [
    'web design', 'web development', 'graphic design', 'logo design',
    'mobile app development', 'ecommerce', 'shopify', 'SEO', 'social media marketing',
    'video editing', 'lead generation', 'e-books', 'branding', 'digital agency',
    'VA consultation', 'virtual assistant', 'UI UX design', 'InverGo Design',
    'Android app', 'iOS app', 'hybrid app', 'React Native', 'Next.js',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    title: `${SITE_NAME} — Premium Digital Agency`,
    description: SITE_DESC,
    url: SITE_URL,
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Pouring Streams of Success`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Premium Digital Agency`,
    description: SITE_DESC,
    images: ['/img/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/img/logo-head.png`,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+1-332-249-4910',
            contactType: 'sales',
            email: 'sales@invergodesign.com',
            areaServed: 'Worldwide',
            availableLanguage: ['English'],
          },
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Office # 503, Fifth floor, Fortune Center, Main Shahrah-e-Faisal',
          addressLocality: 'Karachi',
          addressCountry: 'PK',
        },
        sameAs: [
          'https://www.facebook.com/profile.php?id=61566579066265',
          'https://www.instagram.com/invergodesign/',
          'https://www.linkedin.com/company/invergo-international/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESC,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#service`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/img/logo-head.png`,
        priceRange: '$$',
        description: SITE_DESC,
        areaServed: { '@type': 'Place', name: 'Worldwide' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Editing' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Android/iOS Hybrid Apps' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce Stores' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VA Consultation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lead Generation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-books' } },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0A0A0F" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
