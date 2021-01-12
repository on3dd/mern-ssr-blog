import React, { PropsWithChildren, HTMLProps } from 'react';
import styled from 'styled-components';

import { COLORS } from '@utils/constants';

import Button from '@components/base-ui/button';

type GoogleButtonProps = PropsWithChildren<
  HTMLProps<HTMLButtonElement>
>;

const StyledButton = styled(Button)`
  background-color: ${COLORS.google};

  &:hover,
  &:focus,
  &:active {
    background-color: ${COLORS.googleDarken};
  }
`;

const GoogleButton: React.FC<GoogleButtonProps> = ({
  title,
  children,
  disabled,
  className,
  onClick,
}: GoogleButtonProps) => (
  <StyledButton
    icon="Google"
    title={title}
    disabled={disabled}
    className={className}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default GoogleButton;
