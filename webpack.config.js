const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'react-toy',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  entry: {
    app: [
      './src/index',
    ],
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-refresh/babel',
          ],
        },
      },
    ],
  },
  plugins: [
    new RefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  }, // 출력
  devServer: {
    publicPath: '/dist/',
    hot: true,
    port: 4000,
    disableHostCheck: true,
  },
};