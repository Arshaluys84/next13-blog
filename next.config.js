/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos'],
    },
    experimental: {
        serverComponents: true, // Enable Server Components (optional, if you want to use them)
        serverActions: true,   // Enable Server Actions
      },
}

module.exports = nextConfig
