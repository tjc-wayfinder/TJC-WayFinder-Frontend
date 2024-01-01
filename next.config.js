/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your existing configuration options here
  
    // New export configuration
    output: {
      // This will create a static HTML export
      // Other options: 'server', 'both'
      // For more details: https://nextjs.org/docs/advanced-features/output-directory
      html: true,
    },
  };
  
  module.exports = nextConfig;
  