import React, { CSSProperties, useMemo } from 'react';
import { IconContext } from 'react-icons';

interface IconProps {
  icon: string;
  title?: string;
  color?: string;
  size?: string;
  className?: string;
  style?: CSSProperties;
}

const ICON_STYLES: CSSProperties = {
  margin: 0,
};

const Icon = ({
  icon,
  title,
  color,
  style,
  size = '30px',
}: IconProps) => {
  const iconName = `Fa${icon
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase())}`;

  const { [iconName]: FaIcon } = require('react-icons/fa');

  const value = useMemo(() => {
    return {
      color,
      style: ICON_STYLES,
      className: 'base-icon',
    };
  }, [color]);

  return (
    <IconContext.Provider value={value}>
      <FaIcon title={title} size={size} style={style} />
    </IconContext.Provider>
  );
};

export default Icon;
