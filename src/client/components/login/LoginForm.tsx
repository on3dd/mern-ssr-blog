import React from 'react';

import {
  Form,
  FormButton,
  FormDivider,
  FormGroup,
  FormGoogleButton,
  FormLabel,
  FormInput,
} from '@components/base-ui/form';

const LoginForm: React.FC = () => {
  return (
    <Form className="login__form">
      <FormGroup>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          id="email"
          type="email"
          placeholder="enter your email..."
          // value={value}
          // onChange={onChange}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput
          id="password"
          type="password"
          placeholder="enter your password..."
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
