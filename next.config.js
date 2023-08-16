/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir:"dist",
  output:"export",
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
