import React from 'react';

import {
  AuthDiv,
  AuthLink,
  AuthHeading,
} from '@components/base-ui/auth';
import LoginForm from '@components/login/LoginForm';

const Login: React.FC = () => {
  return (
    <AuthDiv className="login">
      <AuthHeading className="login__heading">
        Login
      </AuthHeading>

      <LoginForm />

      <AuthLink to="/password-reset">
        Forgot password?
      </AuthLink>

      <AuthLink to="/register">
        Don't have an account yet?
      </AuthLink>
    </AuthDiv>
  );
};

export default Login;
