import { ThemeProvider } from "styled-components";
import { Router } from "./Router.jsx";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { UserProvider } from "./context/UserContext.js";

export function App() {

  return (
    <ThemeProvider theme={ defaultTheme }>
      <UserProvider>
        <Router />
      </UserProvider>
    <GlobalStyle />
  </ThemeProvider>
  )
}


