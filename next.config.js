module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["assets.tina.io"],
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};
