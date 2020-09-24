const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

// const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
// const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  entry: './src/server.tsx',
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
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
