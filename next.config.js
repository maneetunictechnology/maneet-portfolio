/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
