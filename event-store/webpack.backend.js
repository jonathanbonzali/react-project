const path = require("path");
const CURRENT_WORKING_DIR = process.cwd();
const nodeExternals = require("webpack-node-externals");
const config = {
  name: "backend",
  entry: [path.join(CURRENT_WORKING_DIR, "./backend/main.js")],
  target: "node",
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist/"),
    filename: "api.js",
    publicPath: "/dist/",
    libraryTarget: "commonjs2",
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ttf|eot|svg|gif|jpeg|jpg|png)(\?[\s\S]+)?$/,
        use: "file-loader",
      },
    ],
  },
};
module.exports = config;