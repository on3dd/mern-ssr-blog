import React from 'react';
import {
  SpinnerCircular,
  SpinnerCircularProps,
} from 'spinners-react';

type SpinnerProps = SpinnerCircularProps & {};

const Spinner: React.FC<SpinnerProps> = ({
  size = 75,
  color = 'rgba(41,128,185,1.0)',
  ...props
}: SpinnerProps) => (
  <SpinnerCircular size={75} color={color} {...props} />
);

export default Spinner;
