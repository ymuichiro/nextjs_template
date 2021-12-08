import React from "react";
import lightTheme from "../styles/lightTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { AppPropsType } from "next/dist/shared/lib/utils";
import { elementType, object } from "prop-types";
import { Provider } from "react-redux";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { store } from "../stores/store";

export default function App({ Component, pageProps }: AppPropsType) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js");
      });
    }
  }, []);

  return (
    <React.Fragment>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <StyledEngineProvider injectFirst>
        <CssBaseline>
          <ThemeProvider theme={lightTheme}>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </ThemeProvider>
        </CssBaseline>
      </StyledEngineProvider>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: elementType.isRequired,
  pageProps: object.isRequired,
};
