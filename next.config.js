/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "utils", "components"],
  },
  images: {
    imageSizes: [111, 189, 300, 400],
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
