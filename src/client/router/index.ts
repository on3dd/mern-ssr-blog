import App from '@client/App';

import Default from '@layouts/Default';
import Home from '@screens/Home';
import NotFound from '@screens/NotFound';

const routes = [
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
