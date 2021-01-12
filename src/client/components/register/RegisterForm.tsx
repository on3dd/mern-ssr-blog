import React from 'react';

import {
  Form,
  FormButton,
  FormDivider,
  FormGroup,
  FormGoogleButton,
  FormInput,
} from '@components/base-ui/form';

const RegisterForm: React.FC = () => {
  return (
    <Form className="register__form">
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
        <FormInput
          id="confirm-password"
          type="password"
          placeholder="confirm password"
          // value={value}
          // onChange={onChange}
        />
      </FormGroup>

      <FormGroup>
        <FormButton title="Sign up">Sign up</FormButton>
      </FormGroup>

      <FormGroup>
        <FormDivider />
      </FormGroup>

      <FormGroup>
        <FormGoogleButton title="Sign up with Google">
          Sign up with Google
        </FormGoogleButton>
      </FormGroup>
    </Form>
  );
};

export default RegisterForm;
