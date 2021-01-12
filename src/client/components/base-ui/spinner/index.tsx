import React from 'react';
import {
  SpinnerCircular,
  SpinnerCircularProps,
} from 'spinners-react';

import { COLORS } from '@utils/constants';

type SpinnerProps = SpinnerCircularProps & {};

const Spinner: React.FC<SpinnerProps> = ({
  size = 75,
  color = COLORS.primary,
  secondaryColor = COLORS.cloud,
  ...props
}: SpinnerProps) => (
  <SpinnerCircular
    size={75}
    color={color}
    secondaryColor={secondaryColor}
    {...props}
  />
);

export default Spinner;
