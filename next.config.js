/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  i18n: {
    locales: ['en', 'fr', 'es'], // List of locales your application supports
    defaultLocale: 'en', // The default locale used when visiting a non-locale prefixed path
  },
};

module.exports = nextConfig;
