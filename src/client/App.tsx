import React from 'react';
import {
  renderRoutes,
  RouteConfig,
} from 'react-router-config';
import { hot } from 'react-hot-loader/root';

import styled from 'styled-components';

import GlobalStyles from '@utils/globalStyles';

import Header from '@components/base-ui/header';

const AppContainer = styled.main`
  display: flex;
  flex: 1;
`;
const App: React.FC = (route: RouteConfig) => {
  return (
    <AppContainer>
      <Header />
      <GlobalStyles />
      <AppContainer className="main">
        {renderRoutes(route.routes)}
      </AppContainer>
    </AppContainer>
  );
};

export default {
  component:
    process.env.NODE_ENV === 'development' ? hot(App) : App,
};
