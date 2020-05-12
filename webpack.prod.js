const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const BomPlugin = require("webpack-utf8-bom");

// module.exports = merge(common, {
//   mode: "production",
//   plugins: [new BomPlugin(true)],
// });

module.exports = merge(common);
