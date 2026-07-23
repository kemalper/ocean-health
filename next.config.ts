import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "dbs.surgicheck.net" }],
        destination: "/treatments/dbs-assessment",
      },
    ];
  },
};

export default nextConfig;
