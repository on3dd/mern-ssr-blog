import { createGlobalStyle } from 'styled-components';
import { COLORS, BREAKPOINTS } from '@utils/constants';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 14px;

    @media (min-width: ${BREAKPOINTS.tablet}) {
      font-size: 15px;
    }

    @media (min-width: ${BREAKPOINTS.laptop}) {
      font-size: 16px;
    }
  }

  body {
    margin: 0;
    padding: 0 1rem;
    color: ${COLORS.grayDarken};
    background-color: ${COLORS.backgroundColor};
    font-family: Open-Sans, Helvetica, Sans-Serif;

    @media (min-width: ${BREAKPOINTS.tablet}) {
      padding: 0 2rem;
    }

    @media (min-width: ${BREAKPOINTS.laptop}) {
      padding: 0 2.5rem;
    }
  }

  #app {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  h1, h2, h3 {
    color: ${COLORS.black};
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${COLORS.primary};
      text-decoration: underline;
    }
  }

  a, span {
    line-height: 1.25em;
  }

  .screen {
    display: flex;
    justify-content: center;
    flex: 1;
    width: 100%;
  }

  .container {
    position: relative;
    padding: 0.25rem;
    width: 100%;
    max-width: 1032px !important;

    @media (min-width: ${BREAKPOINTS.tablet}) {
      padding: 0.5rem;
    }
  }

  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .truncate-2 {
    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box !important;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
  }
`;

export default GlobalStyle;
