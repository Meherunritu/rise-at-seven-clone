/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rise-atseven.transforms.svdcdn.com',
      },
    ],
  },
}

module.exports = nextConfig
