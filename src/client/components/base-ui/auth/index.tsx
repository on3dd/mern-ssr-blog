import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from '@utils/constants';

export const AuthDiv = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`;

export const AuthHeading = styled.h1`
  margin: 0;
  text-align: center;
`;

export const AuthLink = styled(Link)`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: ${COLORS.primary};

  &:hover,
  &:focus,
  &:active {
    color: ${COLORS.primaryDarken};
  }
`;
