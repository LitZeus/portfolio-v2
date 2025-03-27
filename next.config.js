/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['files.catbox.moe', 'images.unsplash.com'],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    basePath: '/portfolio-v2',
    assetPrefix: '/portfolio-v2/',
  } : {}),
};

module.exports = nextConfig;
