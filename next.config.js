/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats:['image/webp'],
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/original/**",
      },
    ],
  },
};
module.exports = nextConfig;
