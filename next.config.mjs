/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "www.shopmahogany.com",
      "cryptoqualitysignals.com",
    ],
  },
};

export default nextConfig;
