import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import StoreProvider from '@utils/storeProvider';
import preloadedStore from '@store/preloadedStore';
import routes from '@router/index';

const store = preloadedStore();

ReactDOM.hydrate(
  <BrowserRouter>
    <StoreProvider store={store}>
      {renderRoutes(routes)}
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
