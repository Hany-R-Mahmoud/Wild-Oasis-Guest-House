/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fwbhmmimsefigkwbgjtu.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname:
          "a/ACg8ocIKT1a41M79ERIeelfxS2uGaveQoxjxh1E9NNcukuM_bfM9GWjX=s96-c",
        search: "",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
