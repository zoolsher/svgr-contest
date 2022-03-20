const path = require("path");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../../src/case3.jsx"),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../../dist/webpack/case3"),
  },
  devtool: false,
  /**
   * @svgr/webpack auto detect previous input is export default or svg string
   */
  module: {
    rules: [
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /react/,
            use: ["@svgr/webpack"],
          },
          {
            resourceQuery: /.*/,
            use: ["url-loader"],
          },
        ],
      },
    ],
  },
};
