import React from 'react';

import {
  AuthDiv,
  AuthLink,
  AuthHeading,
} from '@components/base-ui/auth';
import RegisterForm from '@components/register/RegisterForm';

const Register: React.FC = () => {
  return (
    <AuthDiv className="register">
      <AuthHeading className="register__heading">
        Register
      </AuthHeading>

      <RegisterForm />

      <AuthLink to="/login">
        Already have an account?
      </AuthLink>
    </AuthDiv>
  );
};

export default Register;
