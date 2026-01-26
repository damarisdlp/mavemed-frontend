import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";
import ScrollToTopButton from "@/components/ScrollToTop";
import { Manrope } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function App({ Component, pageProps }) {
  const router = useRouter();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!gaId) return;
    const handleRouteChange = (url) => {
      if (!window.gtag) return;
      window.gtag("config", gaId, { page_path: url });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [gaId, router.events]);

  return (
    <div className={manrope.className}>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </div>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
