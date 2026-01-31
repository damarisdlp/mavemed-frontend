import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { getActiveLeadForm } from "@/lib/data/leadForms";
import { validatePhoneNumber } from "@/lib/utils/phone";

export default function PromoLeadForm() {
  const { t, i18n } = useTranslation("home");
  const locale = (i18n?.language || "en").toString();
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const initialReferrer = useRef("");
  const entryUrlRef = useRef("");
  const entryPathRef = useRef("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+52",
    phone: "",
  });

  const [showThanks, setShowThanks] = useState(false);
  const pendingLeadKey = "promoLeadPending";
  const retryTimerRef = useRef(null);
  const [utmParams, setUtmParams] = useState({
    source: "",
    medium: "",
    campaign: "",
    term: "",
    content: "",
    gclid: "",
  });

  const generateLeadId = () => {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `lead_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  };

  const sendPendingLead = (payloadString) =>
    fetch("/api/lead-promo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payloadString,
      keepalive: true,
    });

  useEffect(() => {
    if (!showThanks) return;
    const onScroll = () => setShowThanks(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showThanks]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const pending = window.localStorage.getItem(pendingLeadKey);
    if (!pending) return;
    sendPendingLead(pending)
      .then(async (response) => {
        if (!response.ok) return;
        window.localStorage.removeItem(pendingLeadKey);
      })
      .catch(() => {
        // Leave pending payload for a future retry.
      });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
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
      window.sessionStorage.setItem("mave_promo_utm", JSON.stringify(utm));
    }
    const stored = window.sessionStorage.getItem("mave_promo_utm");
    const storedUtm = stored ? JSON.parse(stored) : null;
    const finalUtm =
      (hasUtm ? utm : null) ||
      storedUtm || {
        source: "",
        medium: "",
        campaign: "",
        term: "",
        content: "",
        gclid: "",
      };
    setUtmParams(finalUtm);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ref = document.referrer || "";
    const storedRef = window.sessionStorage.getItem("mave_initial_referrer") || "";
    const finalRef = ref || storedRef || "direct";
    initialReferrer.current = finalRef;
    if (ref) window.sessionStorage.setItem("mave_initial_referrer", ref);

    const entryUrl = window.sessionStorage.getItem("mave_entry_url") || window.location.href;
    const entryPath =
      window.sessionStorage.getItem("mave_entry_path") ||
      `${window.location.pathname}${window.location.search}`;
    window.sessionStorage.setItem("mave_entry_url", entryUrl);
    window.sessionStorage.setItem("mave_entry_path", entryPath);
    entryUrlRef.current = entryUrl;
    entryPathRef.current = entryPath;
  }, []);

  const countryOptions = [
    { code: "+1", label: "United States / Canada" },
    { code: "+52", label: "Mexico" },
    { code: "+44", label: "United Kingdom" },
    { code: "+34", label: "Spain" },
    { code: "+57", label: "Colombia" },
    { code: "+506", label: "Costa Rica" },
    { code: "+51", label: "Peru" },
    { code: "+54", label: "Argentina" },
    { code: "+55", label: "Brazil" },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const navLocale = navigator?.language || "";
    if (navLocale.startsWith("en-US") || navLocale.startsWith("en-CA")) {
      setFormData((prev) => ({ ...prev, countryCode: "+1" }));
    } else if (navLocale.startsWith("es-MX")) {
      setFormData((prev) => ({ ...prev, countryCode: "+52" }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "phone" && phoneRef.current) phoneRef.current.setCustomValidity("");
    if (name === "email" && emailRef.current) emailRef.current.setCustomValidity("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (typeof document !== "undefined" && document.activeElement?.blur) {
      document.activeElement.blur();
    }
    try {
      const phoneEl = phoneRef.current;
      const isPhoneValid = validatePhoneNumber(formData.phone, formData.countryCode);
      if (!isPhoneValid) {
        if (phoneEl) {
          phoneEl.setCustomValidity(
            t("leadForm.phoneInvalid", {
              defaultValue: "Please enter a valid phone number.",
            })
          );
          phoneEl.reportValidity();
        }
        return;
      }
      if (phoneEl) phoneEl.setCustomValidity("");
      if (emailRef.current) emailRef.current.setCustomValidity("");

      const activeForm = getActiveLeadForm();
      const landingPagePath =
        typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "";
      const referrer =
        (typeof window !== "undefined" &&
          window.sessionStorage.getItem("mave_initial_referrer")) ||
        initialReferrer.current ||
        "direct";
      const entryUrl =
        (typeof window !== "undefined" && window.sessionStorage.getItem("mave_entry_url")) ||
        entryUrlRef.current ||
        "";
      const entryPath =
        (typeof window !== "undefined" && window.sessionStorage.getItem("mave_entry_path")) ||
        entryPathRef.current ||
        "";
      const normalizedCountryCode = formData.countryCode.startsWith("+")
        ? formData.countryCode
        : `+${formData.countryCode}`;
      const normalizedPhone = normalizedCountryCode && formData.phone
        ? `${normalizedCountryCode}${String(formData.phone).replace(/[^\d]/g, "")}`
        : "";
      const submitData = {
        leadFormId: activeForm?.id || "promo",
        fullName: formData.fullName,
        name: formData.fullName,
        email: formData.email,
        countryCode: formData.countryCode,
        phone: formData.phone,
        phoneNumber: formData.phone,
        normalizedPhone,
        locale,
        source: "Homepage Promo Lead Form",
        funnelType: "promo_lead",
        landingPagePath,
        referrer,
        entryUrl,
        entryPath,
        utm_source: utmParams.source || "",
        utm_medium: utmParams.medium || "",
        utm_campaign: utmParams.campaign || "",
        utm_term: utmParams.term || "",
        utm_content: utmParams.content || "",
        gclid: utmParams.gclid || "",
        utmSource: utmParams.source,
        utmMedium: utmParams.medium,
        utmCampaign: utmParams.campaign,
        utmTerm: utmParams.term,
        utmContent: utmParams.content,
      };

      setShowThanks(true);
      setFormData((prev) => ({ ...prev, fullName: "", email: "", phone: "" }));
      const payloadWithId = { ...submitData, leadId: generateLeadId() };
      if (typeof window !== "undefined") {
        window.localStorage.setItem(pendingLeadKey, JSON.stringify(payloadWithId));
      }

      const payloadString = JSON.stringify(payloadWithId);
      sendPendingLead(payloadString)
        .then(async (response) => {
          if (response.ok) {
            if (typeof window !== "undefined") {
              window.localStorage.removeItem(pendingLeadKey);
            }
            return;
          }
          const resultText = await response.text().catch(() => "");
          let result;
          try {
            result = JSON.parse(resultText);
          } catch {
            result = { raw: resultText };
          }
          console.error("Promo lead submission failed:", result?.detail || result?.raw || resultText);
        })
        .catch((error) => {
          console.error("Promo lead submission error:", error);
        });

      if (retryTimerRef.current) {
        clearTimeout(retryTimerRef.current);
      }
      retryTimerRef.current = setTimeout(() => {
        if (typeof window === "undefined") return;
        const pending = window.localStorage.getItem(pendingLeadKey);
        if (!pending) return;
        sendPendingLead(pending)
          .then((response) => {
            if (response.ok) {
              window.localStorage.removeItem(pendingLeadKey);
            }
          })
          .catch(() => {
            // Keep pending payload for next load retry.
          });
      }, 10000);
    } catch (error) {
      console.error("Promo lead submission error:", error);
      alert(
        t("leadForm.error", {
          defaultValue: "There was an error submitting your form.",
        })
      );
    }
  };

  const inputClass =
    "border border-gray-300 text-black placeholder:text-black rounded px-3 py-2 w-full min-w-0 max-w-full text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-black";
  const inputGrayClass =
    "border border-gray-300 text-gray-700 rounded px-3 py-2 w-full min-w-0 max-w-full text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-black";
  const selectClass =
    "border border-gray-300 text-gray-700 rounded px-3 py-2 w-full min-w-0 max-w-full text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-black";

  const activeForm = getActiveLeadForm();
  const formTitle = t(activeForm?.titleKey || "leadForm.title");
  const formSubtitleKey = activeForm?.subtitleKey || "leadForm.subtitle";

  return (
    <>
      <section
        className="bg-[#efeee7] w-full px-4 sm:px-6 py-3 justify-center items-center text-center relative overflow-x-hidden"
        data-lead-form
      >
        <div className="w-full max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-3 lg:gap-8 items-center min-w-0">
          <div className="min-w-0">
            <h2
              className="text-black font-serif font-medium mb-2 leading-snug text-[clamp(1.5rem,4vw,2.1rem)] max-w-full break-words"
              style={{ textWrap: "balance" }}
            >
              {formTitle}
            </h2>
            <p
              className="text-gray-700 text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: t(formSubtitleKey) }}
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-3 rounded-lg shadow-md grid gap-2.5 text-left w-full min-w-0 overflow-x-hidden lg:justify-self-stretch"
          >
            <label className="text-sm text-gray-700 flex items-center gap-1">
              {t("leadForm.firstName")}
              <span className="text-[#731a2f]">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t("leadForm.firstName")}
              className={inputClass}
              required
            />

            <label className="text-sm text-gray-700 flex items-center gap-1">
              {t("leadForm.email")}
              <span className="text-[#731a2f]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("leadForm.email")}
              ref={emailRef}
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity(
                  t("leadForm.emailInvalid", {
                    defaultValue: "Please enter a valid email address.",
                  })
                )
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
              className={inputClass}
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-3 min-w-0">
              <div className="flex flex-col min-w-0">
                <label className="text-sm text-gray-700 flex items-center gap-1">
                  {t("leadForm.countryCode") || "Country Code"}
                  <span className="text-[#731a2f]">*</span>
                </label>
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className={selectClass}
              required
            >
                  {countryOptions.map((opt) => (
                    <option key={opt.code} value={opt.code}>
                      {opt.code} {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col min-w-0">
                <label className="text-sm text-gray-700 flex items-center gap-1">
                  {t("leadForm.phone")}
                  <span className="text-[#731a2f]">*</span>
                </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("leadForm.phone")}
              ref={phoneRef}
                  onInvalid={(e) =>
                    e.currentTarget.setCustomValidity(
                      t("leadForm.phoneInvalid", {
                        defaultValue: "Please enter a valid phone number.",
                      })
                    )
                  }
                  onInput={(e) => e.currentTarget.setCustomValidity("")}
              className={inputClass}
              required
            />
              </div>
            </div>

            <p className="text-[11px] text-gray-500">
              {t("leadForm.requiredNote", { defaultValue: "Required fields" })}{" "}
              <span className="text-[#731a2f]">*</span>
            </p>
            <p className="text-[11px] text-gray-500">
              {t("leadForm.disclaimer")}{" "}
              <Link href="/privacy" className="underline">
                {t("leadForm.privacyPolicy")}
              </Link>
              .
            </p>

            <button
              type="submit"
              className="bg-black text-white rounded-full py-2 mt-2 text-sm font-medium hover:bg-[#731a2f] transition"
            >
              {t("leadForm.subscribe")}
            </button>
          </form>
        </div>

        {showThanks && (
          <div className="absolute inset-0 bg-black/90 text-white flex items-center justify-center text-center px-6">
            <div>
              <p className="text-2xl font-serif mb-2">
                {t("leadForm.thanksTitle", { defaultValue: "Thank you!" })}
              </p>
              <p className="text-sm">
                {t("leadForm.thanksCopy", {
                  defaultValue: "We received your details and will reach out shortly.",
                })}
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
