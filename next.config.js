/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ПРОСТОЙ СПОСОБ: разрешаем домены картинок
    domains: ['images.unsplash.com', 'drive.google.com'],
  },
};

module.exports = nextConfig;
