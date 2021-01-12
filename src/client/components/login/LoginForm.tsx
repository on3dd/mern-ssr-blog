import React from 'react';
import styled, { css } from 'styled-components';

import Input from '@components/base-ui/input';
import Button from '@components/base-ui/button';
import Divider from '@components/base-ui/divider';
import GoogleButton from '@components/base-ui/google-button';

const formControl = css`
  width: inherit;
  padding: 0.5rem 1rem;
`;

const Form = styled.form`
  margin: 2rem 0;
`;

const FormGroup = styled.div`
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 0.75rem;
  }
`;

const FormInput = styled(Input)`
  ${formControl}
`;

const FormButton = styled(Button)`
  ${formControl}
`;

const FormGoogleButton = styled(GoogleButton)`
  ${formControl}
`;

const FormDivider = styled(Divider)``;

const LoginForm: React.FC = () => {
  return (
    <Form className="login__form">
      <FormGroup>
        <FormInput
          id="email"
          type="email"
          placeholder="email"
          // value={value}
          // onChange={onChange}
        />
      </FormGroup>

      <FormGroup>
        <FormInput
          id="password"
          type="password"
          placeholder="password"
          // value={value}
          // onChange={onChange}
        />
      </FormGroup>

      <FormGroup>
        <FormButton title="Sign in">Sign in</FormButton>
      </FormGroup>

      <FormGroup>
        <FormDivider />
      </FormGroup>

      <FormGroup>
        <FormGoogleButton title="Sign in with Google">
          Sign in with Google
        </FormGoogleButton>
      </FormGroup>
    </Form>
  );
};

export default LoginForm;
