const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./client/App.jsx",

  devtool: "cheap-eval-source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [
      "node_modules",
      path.resolve(__dirname, "./"),
      "server",
      path.resolve(__dirname, "./"),
      "public",
      path.resolve(__dirname, "client"),
      "сomponents"
    ]
  },
  devServer: {
    publicPath: "/public/",
    host: "localhost",
    port: 8000,
    historyApiFallback: true,
    hot: true,
    proxy: {
      "/data": {
        target: "http://localhost:3000/data.json",
        pathRewrite: { "^/data": "" }
      }
    }
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
      },
      {
        test: /\.(scss)$/,
        loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    // Specify output file name and path
    new ExtractTextPlugin({
      filename: "public/style2.css"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
