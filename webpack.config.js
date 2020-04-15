const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const MODE = "development";
// const MODE = "production";
const enabledSourceMap = MODE === "development";

module.exports = {
    mode: MODE,
    entry: './src/main.tsx',
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: [
                    /\.sass/,
                    /\.scss/
                ],
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: enabledSourceMap,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: enabledSourceMap
                        }
                    },
                ]
            }, // css
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            }, // html
        ]
    },
    resolve: {
        extensions: [
            '.tsx', '.ts', '.js', '.json'
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};
