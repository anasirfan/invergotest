/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index-2.html', destination: '/', permanent: true },
      { source: '/:slug.html', destination: '/:slug', permanent: true },
      { source: '/:slug.shtml', destination: '/:slug', permanent: true },
      // Redirect old service slugs to new ones
      { source: '/web', destination: '/web-development', permanent: true },
      { source: '/logo', destination: '/graphic-design', permanent: true },
      { source: '/uiux', destination: '/graphic-design', permanent: true },
      { source: '/mobile', destination: '/mobile-apps', permanent: true },
      { source: '/wordpress', destination: '/web-development', permanent: true },
      { source: '/support', destination: '/va-consultation', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/img/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
