const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// add support for scss
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = {
  env: {
    CMS_API: "http://localhost:1337/",
  },
}

module.exports = nextConfig