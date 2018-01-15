const path = require("path");
module.exports = {
  context: __dirname,
  entry: "./js/ClientApp.jsx",

  devtool: "cheap-eval-source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  devServer: {
    publicPath: "/public/",
    host: "localhost",
    port: 8080,
    historyApiFallback: true
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: path.resolve(__dirname, "node_modules")
      }
    ]
  }
};
