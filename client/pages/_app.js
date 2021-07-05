// globals
import "styles/globals.css";

// nprogress
import "styles/nprogress.css";

// scroll bar
import "simplebar/src/simplebar.css";

// ----------------------------------------------------------------------
import { useEffect } from "react";
import Head from "next/head";
import NProgress from "nprogress";
import { Router } from "next/router";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ReduxProvider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { PersistGate } from "redux-persist/integration/react";
// redux
import { persistor, store } from "src/redux/store";
// theme
import ThemeConfig from "src/theme";
// components
import LoadingScreen from "src/components/LoadingScreen";
import RtlLayout from "src/components/RtlLayout";
import Settings from "src/components/settings";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// ----------------------------------------------------------------------

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <ThemeConfig>
            <RtlLayout>
              <Settings />
              <>
                <Head>
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                  />
                </Head>
                <CssBaseline />
                <Component {...pageProps} />
              </>
            </RtlLayout>
          </ThemeConfig>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  );
}
