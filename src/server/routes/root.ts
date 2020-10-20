import { Router } from 'express';
import { matchRoutes } from 'react-router-config';

import Html from '@client/Html.ts';
import createStore from '@client/store';
import clientRoutes from '@client/router';

import generateHtmlContent from '@server/utils/generateHtmlContent';

const router = Router();

router.get('/*', (req, res) => {
  const store = createStore();
  const routes = matchRoutes(clientRoutes, req.path);

  console.log('routes', routes);

  const promises = routes
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(reject);
        });
      }
      return null;
    });

  Promise.all(promises).then(() => {
    const context = {};
    const preloadedState = store.getState();
    console.log('preloadedState', preloadedState);

    const { body, styles } = generateHtmlContent({
      req,
      store,
      context,
    });

    const title = 'Test Server Side Rendering App';

    res.send(
      Html({
        body,
        title,
        styles,
        preloadedState,
      }),
    );
  });
});

export default router;
