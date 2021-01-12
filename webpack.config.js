const path = require('path');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '/.env'),
});

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const IS_DEV = process.env.NODE_ENV !== 'production';

const SHARED_MODE = IS_DEV ? 'development' : 'production';

const SHARED_OUTPUT = {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].bundle.js',
};

const SHARED_RESOLVE = {
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
};

const SHARED_PLUGINS = [
  new webpack.DefinePlugin({
    'process.env': dotenv.parsed,
  }),
  new webpack.DefinePlugin({
    'process.env.REACT_APP_SC_ATTR': JSON.stringify(
      'data-styled-mern-ssr-blog',
    ),
    'process.env.SC_ATTR': JSON.stringify(
      'data-styled-mern-ssr-blog',
    ),
    'process.env.REACT_APP_SC_DISABLE_SPEEDY': JSON.stringify(
      true,
    ),
  }),
].filter(Boolean);

const SHARED_MODULE = {
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
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    },
  ],
};

module.exports = [
  {
    name: 'server',
    mode: SHARED_MODE,
    entry: {
      server: ['./src/server/index.ts'],
    },
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    output: Object.assign({}, SHARED_OUTPUT, {
      publicPath: '/',
    }),
    resolve: SHARED_RESOLVE,
    externals: [nodeExternals()],
    plugins: SHARED_PLUGINS,
    module: SHARED_MODULE,
    devServer: {
      compress: true,
      port: 3000,
    },
  },
  {
    name: 'client',
    mode: SHARED_MODE,
    entry: {
      client: ['./src/client/index.tsx'],
    },
    target: 'web',
    output: SHARED_OUTPUT,
    module: SHARED_MODULE,
    plugins: SHARED_PLUGINS.concat([
      () =>
        IS_DEV && new webpack.HotModuleReplacementPlugin(),
    ]),
    resolve: Object.assign({}, SHARED_RESOLVE, {
      extensions: SHARED_RESOLVE.extensions.concat([
        '.css',
      ]),
    }),
  },
];
