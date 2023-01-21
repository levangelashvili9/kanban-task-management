import "./App.css";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./common/themes";
import { Home } from "./pages/home";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { closeBar } from "redux/slices/barSlice";

function App() {
  const { isDarkMode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleResize() {
      dispatch(closeBar());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
