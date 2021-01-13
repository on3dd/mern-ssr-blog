import App from '@client/App';

import Default from '@layouts/Default';
import Home from '@screens/Home';
import Post from '@screens/Post';
import Categories from '@screens/Categories';
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
            path: '/posts/:id',
            ...Post,
          },
          {
            path: '/categories',
            ...Categories,
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
            path: '*',
            ...NotFound,
          },
        ],
      },
    ],
  },
];

export default routes;
