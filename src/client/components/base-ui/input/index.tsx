import React, { HTMLProps } from 'react';
import styled from 'styled-components';

import { COLORS } from '@utils/constants';

type InputProps = HTMLProps<HTMLInputElement>;

const StyledInput = styled.input`
  margin: 0;
  padding: 0.25rem;
  border-radius: 4px;
  border: 2px solid ${COLORS.cloud};
`;

const Input: React.FC<InputProps> = ({
  id,
  type,
  value,
  className,
  placeholder,
  onChange,
}: InputProps) => (
  <StyledInput
    id={id}
    type={type}
    value={value}
    className={className}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default Input;
