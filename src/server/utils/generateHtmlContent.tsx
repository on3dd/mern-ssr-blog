import React from 'react';
import { Store } from 'redux';
import { Request } from 'express';
import { StaticRouterContext } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import StoreProvider from '@utils/storeProvider';

import routes from '@router/index';

type GenerateHtmlContentProps = {
  req: Request;
  store: Store<unknown>;
  context: StaticRouterContext;
};

const generateHtmlContent = ({
  req,
  store,
  context,
}: GenerateHtmlContentProps) => {
  const sheet = new ServerStyleSheet();

  const body = renderToString(
    <StoreProvider store={store}>
      <StaticRouter location={req.path} context={context}>
        {sheet.collectStyles(renderRoutes(routes))}
      </StaticRouter>
    </StoreProvider>,
  );

  const styles = sheet.getStyleTags();

  return { body, styles };
};

export default generateHtmlContent;
