import styled from 'styled-components';

import { BREAKPOINTS } from '@utils/constants';

export const PlaceholderContainer = styled.div`
  width: 100%;
  text-align: center;
  text-transform: lowercase;
`;

export const PlaceholderHeading = styled.h1`
  display: block;
  margin: 0;
  font-size: 5rem;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 7.5rem;
  }

  @media (min-width: ${BREAKPOINTS.laptop}) {
    font-size: 10rem;
  }
`;

export const PlaceholderText = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: 1.5rem;
`;
