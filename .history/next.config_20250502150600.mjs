/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://fwbhmmimsefigkwbgjtu.supabase.co",
        port: "",
        pathname: "/account123/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
