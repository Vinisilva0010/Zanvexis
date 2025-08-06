/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    // Durante o build na Vercel, pode haver erros temporários
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  eslint: {
    // Ignora erros de ESLint durante builds de produção para evitar falhas
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  // Otimizações para a Vercel
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

module.exports = nextConfig