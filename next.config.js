const path = require('path');

const basePath = '/portfolio';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/scss')],
  },
};

module.exports = nextConfig;
