/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/dsa-guide" : "", // Conditional basePath
  assetPrefix: process.env.NODE_ENV === "production" ? "/dsa-guide/" : "",
  trailingSlash: true
};

export default nextConfig;
