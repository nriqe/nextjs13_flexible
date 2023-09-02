/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'res.cloudinary.com']
    },
    serverComponentsExternalPackages: ['cloudinary', 'graphql-request']
}

module.exports = nextConfig
