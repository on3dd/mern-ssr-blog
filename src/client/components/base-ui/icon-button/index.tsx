import React, { CSSProperties } from 'react';
import styled from 'styled-components';

import { COLORS } from '@utils/constants';

import Icon from '@components/base-ui/icon';

interface IconButtonProps {
  icon: string;
  title?: string;
  color?: string;
  size?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: (...args: any[]) => void;
}

type IconButtonButtonProps = {
  size?: string;
};

const IconButtonButton = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: none;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: 0.1s all ease-out;

  color: ${COLORS.gray};

  height: ${(props: IconButtonButtonProps) =>
    props.size || '1rem'};

  width: ${(props: IconButtonButtonProps) =>
    props.size || '1rem'};

  &:hover,
  &:focus,
  &:active {
    color: ${COLORS.grayDarken};
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const IconButton = ({
  icon,
  title,
  color,
  style,
  size = '30px',
  className = '',
  onClick,
}: IconButtonProps) => (
  <IconButtonButton
    size={size}
    title={title}
    onClick={onClick}
    className={className}
  >
    <Icon icon={icon} color={color} style={style} />
  </IconButtonButton>
);

export default IconButton;
