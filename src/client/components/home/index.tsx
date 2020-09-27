import React from 'react';
import styled from 'styled-components';

import Posts from './Posts';

const HomeDiv = styled.div``;

const Home: React.FC = () => (
  <HomeDiv className="home screen">
    <Posts />
  </HomeDiv>
)

export default Home;
