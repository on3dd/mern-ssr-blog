import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import App from './client/App';
import Html from './client/Html';

const port = 3000;
const server = express();

const generateHtmlProps = (Node: React.ComponentType) => {
  const sheet = new ServerStyleSheet();
  const body = renderToString(sheet.collectStyles(<Node />));
  const styles = sheet.getStyleTags();
  return { body, styles };
}

server.get('/', (req, res) => {
  const { body, styles } = generateHtmlProps(App);
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

