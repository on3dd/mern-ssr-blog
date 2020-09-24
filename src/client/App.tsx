import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;

const App = () => {
  return (
    <AppContainer>
      💅
      <Switch>
        <Route exact path="/">home</Route>
        <Route path="/niggers">niggers</Route>
        <Route>ауе жизнь ворам</Route>
      </Switch>
    </AppContainer>
  )
};

export default App;
