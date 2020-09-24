import React from 'react';
import express from 'express';
import { StaticRouterProps } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import App from './client/App';
import Html from './client/Html';

const port = 3000;
const server = express();

const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

server.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));

server.use(require("webpack-hot-middleware")(compiler, {
  log: false,
  path: `/__webpack_hmr`,
  heartbeat: 10 * 1000,
}));

const generateHtmlContent = (Component: React.ComponentType, routerProps?: StaticRouterProps) => {
  const sheet = new ServerStyleSheet();
  const body = renderToString((
    <StaticRouter {...routerProps}>
      {sheet.collectStyles(<Component />)}
    </StaticRouter>
  ));
  const styles = sheet.getStyleTags();

  return { body, styles };
}

server.get('/*', (req, res) => {
  const context = {};
  const { body, styles } = generateHtmlContent(App, { location: req.url, context });
  const title = 'Test Server Side Rendering App';

  res.send(
    Html({
      body,
      styles,
      title,
    }),
  );
});

server.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`)
});

