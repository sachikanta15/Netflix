/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // every time react is updated, it will be strict mode so that it will not break the app in future updates of react 
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['assets.stickpng.com','assets.nflxext.com',"image.tmdb.org",],
  },
};
