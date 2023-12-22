/** @type {import('next').NextConfig} */
// import { client_tag } from "@/app/tag";
require("dotenv").config();
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/homepage-" + process.env.CLIENT_TAG,
        destination: "/",
        permanent: true,
      },
      {
        source: "/homepage",
        destination: "/",
        permanent: true,
      },
    ];
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
