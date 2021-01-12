import React from 'react';

import {
  Form,
  FormButton,
  FormDivider,
  FormGroup,
  FormGoogleButton,
  FormInput,
} from '@components/base-ui/form';

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
