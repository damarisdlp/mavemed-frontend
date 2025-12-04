import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App, nextI18NextConfig);
