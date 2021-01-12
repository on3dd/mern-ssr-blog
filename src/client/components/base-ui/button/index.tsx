import React, { PropsWithChildren, HTMLProps } from 'react';
import styled from 'styled-components';

import { COLORS } from '@utils/constants';

import Icon from '@root/src/client/components/base-ui/icon';

type ButtonProps = PropsWithChildren<
  HTMLProps<HTMLButtonElement> & { icon?: string }
>;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  border: 2px solid transparent;
  /* transition: all 0.1s ease-out; */

  cursor: pointer;

  color: ${COLORS.white};
  background-color: ${COLORS.primary};

  &:hover,
  &:focus,
  &:active {
    background-color: ${COLORS.primaryDarken};
  }
`;

const Button: React.FC<ButtonProps> = ({
  icon,
  title,
  children,
  disabled,
  className,
  onClick,
}: ButtonProps) => (
  <StyledButton
    title={title}
    disabled={disabled}
    className={className}
    onClick={onClick}
  >
    {icon && (
      <Icon
        size="13.3333px"
        icon={icon}
        color={COLORS.white}
        style={{ marginRight: '1ch' }}
      />
    )}

    {children}
  </StyledButton>
);

export default Button;
