import { useEffect, useRef, useState } from "react";

const DEFAULT_UTM = {
  source: "",
  medium: "",
  campaign: "",
  term: "",
  content: "",
  gclid: "",
};

const useLeadTracking = ({
  utmStorageKey = "mave_treatment_utm",
  referrerStorageKey = "mave_initial_referrer",
  entryUrlStorageKey = "mave_entry_url",
  entryPathStorageKey = "mave_entry_path",
} = {}) => {
  const [utmParams, setUtmParams] = useState(DEFAULT_UTM);
  const initialReferrerRef = useRef("");
  const entryUrlRef = useRef("");
  const entryPathRef = useRef("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ref = document.referrer || "";
    const storedRef = window.sessionStorage.getItem(referrerStorageKey) || "";
    const finalRef = ref || storedRef || "direct";
    initialReferrerRef.current = finalRef;
    if (ref) window.sessionStorage.setItem(referrerStorageKey, ref);

    const entryUrl = window.sessionStorage.getItem(entryUrlStorageKey) || window.location.href;
    const entryPath =
      window.sessionStorage.getItem(entryPathStorageKey) ||
      `${window.location.pathname}${window.location.search}`;

    window.sessionStorage.setItem(entryUrlStorageKey, entryUrl);
    window.sessionStorage.setItem(entryPathStorageKey, entryPath);
    entryUrlRef.current = entryUrl;
    entryPathRef.current = entryPath;
  }, [entryPathStorageKey, entryUrlStorageKey, referrerStorageKey]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getUtmFromSearch = () => {
      const params = new URLSearchParams(window.location.search);
      const utm = {
        source: params.get("utm_source") || "",
        medium: params.get("utm_medium") || "",
        campaign: params.get("utm_campaign") || "",
        term: params.get("utm_term") || "",
        content: params.get("utm_content") || "",
        gclid: params.get("gclid") || "",
      };
      const hasUtm = Object.values(utm).some(Boolean);
      if (hasUtm) {
        window.sessionStorage.setItem(utmStorageKey, JSON.stringify(utm));
      }
      return hasUtm ? utm : null;
    };

    const stored = window.sessionStorage.getItem(utmStorageKey);
    const storedUtm = stored ? JSON.parse(stored) : null;
    const urlUtm = getUtmFromSearch();
    const finalUtm = urlUtm || storedUtm || DEFAULT_UTM;
    setUtmParams(finalUtm);
  }, [utmStorageKey]);

  return {
    utmParams,
    initialReferrerRef,
    entryUrlRef,
    entryPathRef,
  };
};

export default useLeadTracking;
