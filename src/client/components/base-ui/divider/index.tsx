import React, { HTMLProps } from 'react';
import styled from 'styled-components';

import { COLORS } from '@utils/constants';

type DividerProps = HTMLProps<HTMLDivElement> & {};

const StyledDiv = styled.div`
  width: 100%;
  height: 2px;
  margin: 1rem 0;

  background-color: ${COLORS.cloud};
`;

const Divider: React.FC<DividerProps> = ({
  className,
}: DividerProps) => <StyledDiv className={className} />;

export default Divider;
