import App from '@client/App';

import Default from '@layouts/Default';
import Home from '@screens/Home';
import Post from '@screens/Post';
import Login from '@screens/Login';
import Register from '@screens/Register';
import NotFound from '@screens/NotFound';

const routes = [
  {
    ...App,
    routes: [
      {
        path: '/',
        ...Default,
        routes: [
          {
            path: '/',
            exact: true,
            ...Home,
          },
          {
            path: '/login',
            exact: true,
            ...Login,
          },
          {
            path: '/register',
            exact: true,
            ...Register,
          },
          {
            path: '/posts/:id',
            ...Post,
          },
          {
            path: '*',
            ...NotFound,
          },
        ],
      },
    ],
  },
];

export default routes;
