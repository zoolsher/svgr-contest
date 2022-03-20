const path = require("path");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../../src/case2.jsx"),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../../dist/webpack/case2"),
  },
  devtool: false,
  /**
   * @svgr/webpack auto detect previous input is export default or svg string
   */
  module: { rules: [{ test: /\.svg$/, use: ["@svgr/webpack", "url-loader"] }] },
};
