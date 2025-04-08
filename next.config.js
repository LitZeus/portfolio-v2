/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.DEPLOY_TARGET === 'github';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './app/image-loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.catbox.moe',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  basePath: isGitHubPages ? '/tejas-athalye-portfolio' : '',
  assetPrefix: isGitHubPages ? '/tejas-athalye-portfolio/' : '',
  trailingSlash: true,
  distDir: 'dist',
  // This is important for GitHub Pages
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
