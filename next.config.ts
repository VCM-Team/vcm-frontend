import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "workninjas.com" },
            { protocol: "https", hostname: "i.ytimg.com" },
        ],

    },
};

export default nextConfig;