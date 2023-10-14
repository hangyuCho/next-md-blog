// next.config.js
const withPlugins = require("next-compose-plugins")
const { withContentlayer } = require('next-contentlayer')
const withImages = require("next-images")

/** @type {import('next').NextConfig} */
const nextConfig = { 
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["loremflickr.com"]
  },
  env: {
    ROOT: __dirname
  }
}

module.exports = withPlugins([
    withImages,
    withContentlayer(nextConfig)
])

