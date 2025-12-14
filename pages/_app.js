import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";
import ScrollToTopButton from "@/components/ScrollToTop";

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
