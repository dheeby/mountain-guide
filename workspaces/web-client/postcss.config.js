module.exports = {
  plugins: {
    autoprefixer: {},
    "@csstools/postcss-global-data": {
      files: ["./app/css/custom-media.css"],
    },
    "postcss-preset-env": {
      stage: 3,
      features: {
        "custom-media-queries": true,
      },
    },
  },
};
