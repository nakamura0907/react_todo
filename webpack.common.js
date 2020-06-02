const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: { fix: true },
      },
      {
        test: /\.tsx?$/,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }],
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@atom": path.resolve(__dirname, "src/components/atoms"),
      "@component": path.resolve(__dirname, "src/components"),
      "@container": path.resolve(__dirname, "src/containers"),
      "@module": path.resolve(__dirname, "src/modules"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
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
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new LodashModuleReplacementPlugin({
      collections: true,
      chaining: true,
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
