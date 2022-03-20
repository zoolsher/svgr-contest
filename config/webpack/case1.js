const path = require("path");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../../src/case1.jsx"),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../../dist/webpack/case1"),
  },
  devtool: false,
  module: { rules: [{ test: /\.svg$/, use: "@svgr/webpack" }] },
};
