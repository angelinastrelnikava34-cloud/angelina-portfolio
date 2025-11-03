// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }, // можно оставить
      { protocol: 'https', hostname: 'drive.google.com' }     // добавили Drive
    ],
  },
};

module.exports = nextConfig;
