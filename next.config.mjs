/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Activer les source maps pour le côté serveur et client
    if (!isServer) {
      config.devtool = "source-map";
    }

    // Pour le serveur, vous pouvez utiliser 'inline-source-map' si nécessaire
    config.devtool = "inline-source-map";

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
