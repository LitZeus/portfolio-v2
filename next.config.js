/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['files.catbox.moe', 'images.unsplash.com'],
    unoptimized: true,
  },
  output: 'export',
  basePath: '/tejas-athalye-portfolio',
  assetPrefix: '/tejas-athalye-portfolio/',
  trailingSlash: true,
};

module.exports = nextConfig;
