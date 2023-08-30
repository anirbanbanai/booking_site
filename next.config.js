/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
module.exports = {
    // Other Next.js config options...
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(mov|mp4)$/, // You can add other video formats if needed
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next', // Adjust the public path as needed
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      });
  
      return config;
    },
  };
  
