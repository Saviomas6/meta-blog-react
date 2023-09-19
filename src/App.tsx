import { ThemeProvider } from "styled-components";
import RoutePath from "./routes/RoutePath";
import { useAppSelector } from "./logic/redux/store/hooks";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyle";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();
  const theme = useAppSelector((state) => state.userReducer.themeValue);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <RoutePath />
    </ThemeProvider>
  );
};

export default App;
