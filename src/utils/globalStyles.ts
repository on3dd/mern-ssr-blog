import { createGlobalStyle } from 'styled-components';
import { colors } from '../utils/constants';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: ${colors.gray};
    font-size: 16px;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  h1, h2, h3 {
    color: ${colors.black};
  }

  a {
    color: inherit;
  }

  .container {
    padding: 0 1rem;
    max-width: 1032px !important;
  }
`;

export default GlobalStyle;
