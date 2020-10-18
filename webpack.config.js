const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: ['react-hot-loader/patch', './src/server/index.tsx'],
  mode: isDevelopment ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  target: 'node',
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`,
      },
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
      },
    ],
  },
  devServer: {
    compress: true,
    port: 3000,
  },
};
