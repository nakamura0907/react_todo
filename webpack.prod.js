const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const BomPlugin = require("webpack-utf8-bom");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [new BomPlugin(true)],
});
