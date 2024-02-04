/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        domains: ["images.ctfassets.net"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net"
            }
        ]
    },
    async rewrites() {
      return [
          {
              source: '/:path*',
              destination: '/'
          }
      ]
    }
}
