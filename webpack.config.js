var webpack = require("webpack");
var minimize = process.argv.indexOf("--optimize-minimize") !== -1;

module.exports = {
  /** Build from built js file */
  entry: {
    typestyle: "./lib/index.js"
  },
  output: {
    filename: minimize
      ? "./umd/bagubagu-utils.min.js"
      : "./umd/bagubagu-utils.js",
    libraryTarget: "umd",
    /** The library name on window */
    library: "bagubagu-utils"
  },
  plugins: minimize
    ? [new webpack.optimize.UglifyJsPlugin({ minimize: true })]
    : []
};
