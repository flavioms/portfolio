import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home";
import light from "./styles/theme/light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />

      <Home />
    </ThemeProvider>
  );
}

export default App;
