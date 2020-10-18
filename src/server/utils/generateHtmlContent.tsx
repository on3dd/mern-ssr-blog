import React from 'react';
import { StaticRouterProps } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

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

export default generateHtmlContent;
