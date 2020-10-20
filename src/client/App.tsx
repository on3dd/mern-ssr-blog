import React from 'react';
import {
  renderRoutes,
  RouteConfig,
} from 'react-router-config';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

import GlobalStyles from '@utils/globalStyles';

import Header from '@components/base-ui/header';

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const RouterView = styled.main`
  display: flex;
  flex: 1;
`;

type AppProps = {
  route?: RouteConfig;
};

const App: React.FC<AppProps> = ({ route }: AppProps) => {
  return (
    <AppContainer className="app">
      <Header />
      <GlobalStyles />
      <RouterView className="router-view">
        {route && renderRoutes(route.routes)}
      </RouterView>
    </AppContainer>
  );
};

export default {
  component:
    process.env.NODE_ENV === 'development' ? hot(App) : App,
};
