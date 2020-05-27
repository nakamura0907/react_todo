const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
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
    },
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
