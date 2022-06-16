const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('node:path');
const common = require('./webpack.common.config.js');

const port = process.env.PORT || 8080;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    host: 'localhost',
    port,
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        include: path.join(__dirname, '../', 'src'),
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                require.resolve('react-refresh/babel'),
              ],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
});
