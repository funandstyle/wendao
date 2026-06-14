/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/wendao',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
