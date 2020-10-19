import React from 'react';
import { StaticRouterProps } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import StoreProvider from '@utils/storeProvider';

const generateHtmlContent = (Component: React.ComponentType, routerProps?: StaticRouterProps) => {
  const sheet = new ServerStyleSheet();

  const body = renderToString((
    <StoreProvider>
      <StaticRouter {...routerProps}>
        {sheet.collectStyles(<Component />)}
      </StaticRouter>
    </StoreProvider>
  ));

  const styles = sheet.getStyleTags();

  return { body, styles };
}

export default generateHtmlContent;
