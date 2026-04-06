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
    ];
  },
};

module.exports = nextConfig;
