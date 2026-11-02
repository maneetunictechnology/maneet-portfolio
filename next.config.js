/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "gsap",
    "@gsap/react",
    "lenis",
  ],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
