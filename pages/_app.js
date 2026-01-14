import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";
import ScrollToTopButton from "@/components/ScrollToTop";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function App({ Component, pageProps }) {
  return (
    <div className={manrope.className}>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </div>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
