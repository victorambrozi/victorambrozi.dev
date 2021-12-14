import React from "react";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header/Header";
import GlobalStyle from "./styles/GlobalStyles";

import { dark } from "./styles/theme/index";

function App() {
  return (
    <>
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
    </>
  );
}

export default App;