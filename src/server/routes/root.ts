import { Router } from 'express';
import { createStore } from 'redux';
import { matchRoutes } from 'react-router-config';

import rootReducer from '@reducers/index';

import generateHtmlContent from '@server/utils/generateHtmlContent';

import Html from '@client/Html.ts';
import clientRoutes from '@client/router/index';

const router = Router();

router.get('/*', (req, res) => {
  const store = createStore(rootReducer);
  const routes = matchRoutes(clientRoutes, req.path);

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
      }),
    );
  });
});

export default router;
