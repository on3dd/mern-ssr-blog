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

const LoginForgotPassword = styled(Link)`
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

      <LoginForgotPassword to="/password-reset">
        Forgot password?
      </LoginForgotPassword>
    </LoginDiv>
  );
};

export default Login;
