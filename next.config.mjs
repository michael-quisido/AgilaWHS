import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  turbopack: {}, // Keep this line
  // Add allowedDevOrigins here
  allowedDevOrigins: ['192.168.2.125'], // Added your local IP
};

export default withContentlayer(nextConfig);