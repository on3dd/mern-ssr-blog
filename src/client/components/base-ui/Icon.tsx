import React from 'react';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { colors } from '../../../utils/constants';

type IconProps = {
  icon: string;
  title?: string;
  color?: string;
  size?: string;
  style?: string;
}

const IconButton = styled("button") <{ size?: string }> `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: none;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: .1s all ease-out;

  height: ${props => props.size || '1rem'};
  width: ${props => props.size || '1rem'};

  color: ${colors.gray};

  &:hover {
    color: ${colors.grayDarken};
    background-color: rgba(0,0,0,.1);
  }
`;

const Icon = ({ icon, title, color, style, size = '30px' }: IconProps) => {
  const iconName = `Fa${icon.trim().replace(/^\w/, (c) => c.toUpperCase())}`;
  const { [iconName]: FaIcon } = require('react-icons/fa');

  return (
    <IconContext.Provider value={{ color, className: "base-icon" }}>
      <IconButton size={size} className="base-icon-button">
        <FaIcon title={title} size={size} style={style} />
      </IconButton>
    </IconContext.Provider>
  );
};

export default Icon;
