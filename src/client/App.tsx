import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

import Header from './components/base-ui/header';
import GlobalStyles from '../utils/globalStyles';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 40px;
  font-size: 40px;
  flex: 1;
`;

const App = () => {
  return (
    <>
      <Header />
      <GlobalStyles />
      <AppContainer className="body">
        💅
        <Switch>
          <Route exact path="/">home</Route>
          <Route path="/niggers">niggers</Route>
          <Route>ауе жизнь ворам</Route>
        </Switch>
      </AppContainer>
    </>
  )
};

export default hot(App);
