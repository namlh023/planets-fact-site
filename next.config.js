/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "utils", "components"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mercury",
        permanent: true,
      },
    ];
  },
};
