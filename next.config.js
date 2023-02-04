/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["platform-lookaside.fbsbx.com", "i.scdn.co", "mosaic.scdn.co"],
  },
};

module.exports = nextConfig;
