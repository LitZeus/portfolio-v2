/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-v2', // Replace with your repository name
  assetPrefix: '/portfolio-v2/', // Ensure this matches the basePath
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
