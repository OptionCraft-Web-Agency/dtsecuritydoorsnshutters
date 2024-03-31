/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.quocchic.net",
        // You can also add pathname to be more specific, or leave it out to allow all paths
      },
    ],
  },
  i18n: {
    locales: ['en', 'fr', 'es'], // List of locales your application supports
    defaultLocale: 'en', // The default locale used when visiting a non-locale prefixed path
  },
};

module.exports = nextConfig;
