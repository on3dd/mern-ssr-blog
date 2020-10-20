import { RouteConfig } from 'react-router-config';

import App from '@client/App';

import Default from '@layouts/Default';
import Home from '@screens/Home';
import NotFound from '@screens/NotFound';

const routes: RouteConfig[] = [
  {
    ...App,
    routes: [
      {
        path: '/',
        exact: true,
        ...Default,
        routes: [
          {
            path: '/',
            exact: true,
            ...Home,
          },
          {
            ...NotFound,
          },
        ],
      },
    ],
  },
];

export default routes;
