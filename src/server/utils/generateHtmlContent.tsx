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

import App from '@client/App';

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

  try {
    const res = renderToString(
      sheet.collectStyles(renderRoutes(routes)),
    );
    console.log('obama nigger', res);
  } catch (err) {
    console.error('obama nigger error', err);
  }

  const body = renderToString(
    <StoreProvider store={store}>
      <StaticRouter location={req.path} context={context}>
        {/* {sheet.collectStyles(renderRoutes(routes))} */}
        <div>fuck obama</div>
      </StaticRouter>
    </StoreProvider>,
  );

  const styles = sheet.getStyleTags();

  return { body, styles };
};

export default generateHtmlContent;
