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
};

module.exports = nextConfig;
