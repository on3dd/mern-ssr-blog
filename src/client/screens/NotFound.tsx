import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
const Code = styled.h1`
  display: block;
  margin: 0;
  font-size: 10rem;
`;

const Text = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: 1.5rem;
  text-transform: lowercase;
`;

const NotFound: React.FC = () => (
  <Div className="not-found">
    <Code className="not-found__code">404</Code>
    <Text className="not-found__text">
      Sorry, this page is unavailable 😔
    </Text>
  </Div>
);

export default {
  component: NotFound,
};
