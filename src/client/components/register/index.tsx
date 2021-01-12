import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from '@utils/constants';

import RegisterForm from '@components/register/RegisterForm';

const RegisterDiv = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`;

const RegisterHeading = styled.h1`
  margin: 0;
  text-align: center;
`;

const RegisterLink = styled(Link)`
  display: block;
  font-size: 0.9rem;
  color: ${COLORS.primary};

  &:hover,
  &:focus,
  &:active {
    color: ${COLORS.primaryDarken};
  }
`;

const Register: React.FC = () => {
  return (
    <RegisterDiv className="login">
      <RegisterHeading className="login__heading">
        Register
      </RegisterHeading>

      <RegisterForm />

      <RegisterLink to="/login">
        Already have an account?
      </RegisterLink>
    </RegisterDiv>
  );
};

export default Register;
