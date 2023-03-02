/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS && "/shogi-lake",
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
