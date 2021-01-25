import styled, { css } from 'styled-components';

import Input from '@components/base-ui/input';
import Button from '@components/base-ui/button';
import Divider from '@components/base-ui/divider';
import GoogleButton from '@components/base-ui/google-button';

const formControl = css`
  width: inherit;
  padding: 0.5rem 1rem;
`;

export const Form = styled.form`
  margin: 2rem 0;
`;

export const FormGroup = styled.div`
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 0.75rem;
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  text-transform: lowercase;
`;

export const FormInput = styled(Input)`
  ${formControl}
`;

export const FormButton = styled(Button)`
  ${formControl}
`;

export const FormGoogleButton = styled(GoogleButton)`
  ${formControl}
`;

export const FormDivider = styled(Divider)``;
