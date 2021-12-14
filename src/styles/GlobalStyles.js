import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; {/* 10px */}
    font-family: 'Fira Code', monospace;
    scroll-behavior: smooth;
  }

  body {
    background: ${props => props.theme.colors.background};
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    display: block;
    text-decoration: none;
  }
`;

export default GlobalStyle;