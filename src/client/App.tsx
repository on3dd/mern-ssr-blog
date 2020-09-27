import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

import Header from './components/base-ui/header';
import Home from './screens/Home';
import GlobalStyles from '../utils/globalStyles';

const AppContainer = styled.div`
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
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/qwe">qwe</Route>
          <Route>rty</Route>
        </Switch>
      </AppContainer>
    </>
  )
};

export default process.env.NODE_ENV === "development" ? hot(App) : App

