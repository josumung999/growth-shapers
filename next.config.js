/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig
