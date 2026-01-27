import { useEffect, useState } from "react";

const CONSENT_KEY = "mave_cookie_consent";

export default function CookieBanner({ gaId, onConsentChange }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(CONSENT_KEY);
    if (!saved) setVisible(true);
  }, []);

  const updateConsent = (value) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
    if (onConsentChange) onConsentChange(value);
    if (!window.gtag || !gaId) return;

    const storage = value === "accepted" ? "granted" : "denied";
    window.gtag("consent", "update", {
      analytics_storage: storage,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
    });

    if (value === "accepted") {
      window.gtag("config", gaId, { page_path: window.location.pathname });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] px-4 pb-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-black/10 bg-white/95 p-4 shadow-lg backdrop-blur">
        <p className="text-sm text-gray-700">
          We use cookies to understand site usage and improve your experience.
          You can accept or reject analytics cookies.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => updateConsent("accepted")}
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => updateConsent("rejected")}
            className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-50"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
