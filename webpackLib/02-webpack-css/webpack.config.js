const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 提取css
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    build: path.join(__dirname, "src", "index.js"),
  },
  output: {
    filename: "[name].[contenthash:6].js",
    path: __dirname + "/dist",
    // package.json 中的
    // "prebuild": "rimraf dist", // 清除dist目录
    clean: true, // remove dist directory
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1, // 1个loader之前有几个loader
              modules: true,
              esModule: false,
            },
          },
          // "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: true,
              esModule: false,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      collapseWhitespace: true, //表示压缩空白字符，
      removeComments: true, // 表示移除注释。整体是对 HTML 处理的一些优化配置。
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:6].css",
    }),
  ],
  resolve: {
    extensions: [".js", ".less", ".css"], // 使 Webpack 能够解析这些扩展名
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
  },
};
