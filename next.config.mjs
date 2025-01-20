export const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'demo.themesberg.com',
          port: '',
          pathname: '/**', // Match all paths under this domain
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**', // Match all paths under this domain
        },
      ],
    },
  };
  
  export default nextConfig;