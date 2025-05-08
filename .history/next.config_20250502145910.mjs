/** @type {import('next').NextConfig} */
const nextConfig = {

  module.exports = {
    images: {
      remotePatterns: [new URL('https://assets.example.com/account123/**')],
    },
  }
};

export default nextConfig;
