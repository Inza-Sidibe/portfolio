/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // GitHub Pages ne supporte pas l'optimisation d'images Next.js
    },
    basePath: "/portfolio/"
}

module.exports = nextConfig
