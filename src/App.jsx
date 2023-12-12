import { ThemeProvider } from "styled-components";
import { Router } from "./Router.jsx";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { UserProvider } from "./context/UserContext.jsx";
import { SkeletonTheme } from 'react-loading-skeleton';

export function App() {

  return (
    <ThemeProvider theme={ defaultTheme }>
      <UserProvider>
        <SkeletonTheme color="#202020" highlightColor="#444">
          <Router />
        </SkeletonTheme>  
      </UserProvider>
    <GlobalStyle />
  </ThemeProvider>
  )
}


