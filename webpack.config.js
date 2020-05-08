const HtmlWebPackPlugin = require("html-webpack-plugin");
// const BomPlugin = require("webpack-utf8-bom");
const path = require("path");

const MODE = "development";
// const MODE = "production";
const enabledSourceMap = MODE === "development";

module.exports = [
  {
    mode: "production",
    entry: "./desktop/src/electron/index.js",
    output: {
      path: path.join(__dirname, "public/desktop"),
      filename: "electron.js",
    },
    module: {},
    target: "electron-renderer",
    // plugins: [new BomPlugin(true)],
  }, // electron-electron
  {
    mode: "production",
    entry: "./desktop/src/index.tsx",
    output: {
      path: path.join(__dirname, "public/desktop"),
      filename: "index.js",
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
          use: "ts-loader",
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
      extensions: [".tsx", ".ts", ".js", ".json"],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./desktop/src/index.html",
        filename: "./index.html",
      }),
      // new BomPlugin(true),
    ],
  }, // electron-index.js
  {
    mode: MODE,
    entry: "./web/src/index.tsx",
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
          use: "ts-loader",
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
      extensions: [".tsx", ".ts", ".js", ".json"],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./web/src/index.html",
        filename: "./index.html",
      }),
      // new BomPlugin(true),
    ],
  },
];
