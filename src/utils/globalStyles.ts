import { createGlobalStyle } from 'styled-components';
import { colors } from '../utils/constants';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: ${colors.grayDarken};
    font-size: 16px;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
  }

  h1, h2, h3 {
    color: ${colors.black};
  }

  a {
    color: inherit;
  }

  a, span {
    line-height: 1.25em;
  }

  .screen {
    display: flex;
    justify-content: center;
    flex: 1;
  }

  .container {
    position: relative;
    padding: 0 1rem;
    width: 100%;
    max-width: 1032px !important;
  }

  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .truncate-2 {
    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
  }
`;

export default GlobalStyle;
