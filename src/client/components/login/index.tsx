import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from '@utils/constants';

import LoginForm from '@components/login/LoginForm';

const LoginDiv = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`;

const LoginHeading = styled.h1`
  margin: 0;
  text-align: center;
`;

const LoginLink = styled(Link)`
  display: block;
  font-size: 0.9rem;
  color: ${COLORS.primary};

  &:hover,
  &:focus,
  &:active {
    color: ${COLORS.primaryDarken};
  }
`;

const Login: React.FC = () => {
  return (
    <LoginDiv className="login">
      <LoginHeading className="login__heading">
        Login
      </LoginHeading>

      <LoginForm />

      <LoginLink to="/password-reset">
        Forgot password?
      </LoginLink>

      <LoginLink to="/register">
        Don't have an account yet?
      </LoginLink>
    </LoginDiv>
  );
};

export default Login;
