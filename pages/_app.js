import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";
import ScrollToTopButton from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import OrganizationSchema from "@/components/OrganizationSchema";
import { Manrope } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function App({ Component, pageProps }) {
  const router = useRouter();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("mave_cookie_consent");
    if (saved) setConsent(saved);
  }, []);

  useEffect(() => {
    if (!gaId) return;
    if (consent !== "accepted") return;
    if (!window.gtag) return;
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
    });
    window.gtag("config", gaId, { page_path: window.location.pathname });
  }, [consent, gaId]);

  useEffect(() => {
    if (!gaId) return;
    const handleRouteChange = (url) => {
      if (consent !== "accepted") return;
      if (!window.gtag) return;
      window.gtag("config", gaId, { page_path: url });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [consent, gaId, router.events]);

  return (
    <div className={manrope.className}>
      <OrganizationSchema />
      <Component {...pageProps} />
      <ScrollToTopButton />
      <CookieBanner gaId={gaId} onConsentChange={setConsent} />
    </div>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
