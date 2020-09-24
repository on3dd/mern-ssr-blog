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

