import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

import GlobalStyles from '@utils/globalStyles';

import Header from '@components/base-ui/header';
import Default from '@layouts/Default';
import Home from '@screens/Home';
import NotFound from '@screens/NotFound';

const AppContainer = styled.main`
  display: flex;
  flex: 1;
  padding: 0 40px;
`;

const App = () => {
  return (
    <>
      <Header />
      <GlobalStyles />
      <AppContainer className="body">
        <Switch>
          <Route exact path="/" component={() => Default({ component: Home })} />
          <Route path="/qwe">qwe</Route>
          <Route component={() => Default({ component: NotFound })} />
        </Switch>
      </AppContainer>
    </>
  )
};

export default process.env.NODE_ENV === "development" ? hot(App) : App

