import { ThemeProvider } from "styled-components";
import { theme } from "../lib/theme";
import "../styles/globals.css";
import { GlobalStyles } from "../lib/GlobalStyle/globalstyle";
import Nav from "../universal-component/Nav";
import { NavArray } from "../utils/Nav";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState(false);

  const current = state ? theme.ColorDarkMode : theme.ColorLightMode;

  const HandleThemeProvider = () => {
    setState(!state);
  };

  return (
    <ThemeProvider theme={current}>
      <GlobalStyles />
      <Nav navArray={NavArray} />
      <Component {...pageProps} onclick={HandleThemeProvider} />
    </ThemeProvider>
  );
}

export default MyApp;
