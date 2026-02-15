import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { getActiveLeadForm, resolveLeadFormCopy } from "@/lib/data/leadForms";
import { validatePhoneNumber } from "@/lib/utils/phone";
import { getLeadAuthHeaders } from "@/lib/utils/leadAuthClient";

export default function PromoLeadInlinePopupForm() {
  const router = useRouter();
  const { i18n, t } = useTranslation("home");

  const isSpanish = useMemo(() => {
    const byRouter =
      typeof router.locale === "string" && router.locale.toLowerCase().startsWith("es");
    if (byRouter) return true;

    const byI18n =
      typeof i18n?.language === "string" && i18n.language.toLowerCase().startsWith("es");
    if (byI18n) return true;

    if (typeof window !== "undefined") {
      const byPath = window.location.pathname.toLowerCase().startsWith("/es");
      if (byPath) return true;
      const htmlLang = document?.documentElement?.lang || "";
      if (htmlLang.toLowerCase().startsWith("es")) return true;
    }

    return false;
  }, [router.locale, i18n?.language]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [showThanks, setShowThanks] = useState(false);
  const pendingLeadKey = "promoPopupLeadPending";
  const retryTimerRef = useRef(null);
  const initialReferrer = useRef("");
  const entryUrlRef = useRef("");
  const entryPathRef = useRef("");
  const [utmParams, setUtmParams] = useState({
    source: "",
    medium: "",
    campaign: "",
    term: "",
    content: "",
    gclid: "",
  });

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    countryCode: "+52",
    phone: "",
  });

  const submitLangRef = useRef("en");
  const defaultCountryCode = isSpanish ? "+52" : "+1";

  const generateLeadId = () => {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `lead_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  };

  const sendPendingLead = (payloadString) =>
    fetch("/api/lead-promo", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getLeadAuthHeaders() },
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
    submitLangRef.current = isSpanish ? "es" : "en";
    setStatus({ type: "", message: "" });
    setIsSubmitting(false);
    setShowThanks(false);
    setForm({ fullName: "", email: "", countryCode: defaultCountryCode, phone: "" });
  }, [isSpanish, defaultCountryCode]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const pending = window.localStorage.getItem(pendingLeadKey);
    if (!pending) return;
    sendPendingLead(pending)
      .then((response) => {
        if (!response.ok) return;
        window.localStorage.removeItem(pendingLeadKey);
      })
      .catch(() => {
        // Leave pending payload for a future retry.
      });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let isCancelled = false;
    const navLocale = navigator?.language || "";
    let fallbackCode = defaultCountryCode;
    if (navLocale.startsWith("en-US") || navLocale.startsWith("en-CA")) fallbackCode = "+1";
    else if (navLocale.startsWith("es-MX")) fallbackCode = "+52";

    setForm((prev) => ({ ...prev, countryCode: fallbackCode }));

    fetch("/api/geo")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isCancelled || !data?.country) return;
        const code = String(data.country || "").toUpperCase();
        const mappedCode = code === "US" || code === "CA" ? "+1" : code === "MX" ? "+52" : null;
        if (mappedCode) {
          setForm((prev) => ({ ...prev, countryCode: mappedCode }));
        }
      })
      .catch(() => {});

    return () => {
      isCancelled = true;
    };
  }, [defaultCountryCode]);

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (typeof document !== "undefined" && document.activeElement?.blur) {
      document.activeElement.blur();
    }

    const submitLang = submitLangRef.current;
    const submitIsSpanish = submitLang === "es";

    if (!form.fullName || !form.email || !form.phone) {
      setStatus({
        type: "error",
        message: submitIsSpanish
          ? "Por favor completa los campos requeridos."
          : "Please complete all required fields.",
      });
      return;
    }

    if (!validatePhoneNumber(form.phone, form.countryCode)) {
      setStatus({
        type: "error",
        message: submitIsSpanish
          ? "Por favor ingresa un número válido."
          : "Please enter a valid phone number.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
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
      const normalizedCountryCode = form.countryCode.startsWith("+")
        ? form.countryCode
        : `+${form.countryCode}`;
      const normalizedPhone = normalizedCountryCode && form.phone
        ? `${normalizedCountryCode}${String(form.phone).replace(/[^\d]/g, "")}`
        : "";
      const payload = {
        leadFormId: activeForm?.id || "promo",
        fullName: form.fullName.trim(),
        name: form.fullName.trim(),
        email: form.email.trim(),
        countryCode: form.countryCode,
        phone: form.phone.trim(),
        phoneNumber: form.phone.trim(),
        normalizedPhone,
        source: submitIsSpanish ? "Promo Popup (ES)" : "Promo Popup (EN)",
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
        lang: submitLang,
      };
      const payloadWithId = { ...payload, leadId: generateLeadId() };
      const payloadString = JSON.stringify(payloadWithId);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(pendingLeadKey, payloadString);
      }

      setStatus({ type: "success", message: "" });
      setShowThanks(true);
      setIsSubmitting(false);
      setForm({ fullName: "", email: "", countryCode: defaultCountryCode, phone: "" });
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("mave_promo_lead_submitted", "1");
        window.dispatchEvent(new CustomEvent("promo-lead-submitted"));
      }

      sendPendingLead(payloadString)
        .then(async (response) => {
          if (response.ok) {
            if (typeof window !== "undefined") {
              window.localStorage.removeItem(pendingLeadKey);
            }
            return;
          }
          const resultText = await response.text().catch(() => "");
          let resultJson = null;
          try {
            resultJson = JSON.parse(resultText);
          } catch {
            resultJson = { raw: resultText };
          }
          console.error(
            "Promo lead submission failed:",
            resultJson?.detail || resultJson?.raw || resultText
          );
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
      setStatus({
        type: "error",
        message: submitIsSpanish
          ? "Algo salió mal. Inténtalo de nuevo en un momento."
          : "Something went wrong. Please try again in a moment.",
      });
      console.error("Promo popup submission error:", error);
    }
  };

  const activeForm = getActiveLeadForm();
  const { title: formTitle, subtitle: formSubtitle } = resolveLeadFormCopy({
    t,
    form: activeForm,
    locale: isSpanish ? "es" : "en",
  });

  return (
    <div className="w-full max-w-[92vw] sm:max-w-lg lg:max-w-[44rem] rounded-2xl bg-white p-4 sm:p-6 shadow-xl text-[98%] sm:text-[100%] mx-auto relative">
      <div className="min-w-0 text-left">
        <p className="text-sm uppercase tracking-widest text-[#731a2f]">
          {isSpanish ? "PROMOCIÓN DE TEMPORADA" : "SEASONAL PROMO"}
        </p>

        <h2 className="mt-2 text-xl font-semibold text-black">{formTitle}</h2>
        <p
          className="mt-3 text-sm text-gray-600"
          dangerouslySetInnerHTML={{ __html: formSubtitle }}
        />
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <div>
          <label className="text-xs font-medium text-gray-600">
            {t("leadForm.firstName")}
            <span className="text-[#731a2f]"> *</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-sm"
            placeholder={t("leadForm.firstName")}
            required
          />
        </div>

        <div>
          <label className="text-xs font-medium text-gray-600">
            {t("leadForm.email")}
            <span className="text-[#731a2f]"> *</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-sm"
            placeholder={t("leadForm.email")}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div>
            <label className="text-xs font-medium text-gray-600">
              {t("leadForm.countryCode") || "Country Code"}
              <span className="text-[#731a2f]"> *</span>
            </label>
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-sm"
              required
            >
              <option value="+1">+1 United States / Canada</option>
              <option value="+52">+52 Mexico</option>
              <option value="+44">+44 United Kingdom</option>
              <option value="+34">+34 Spain</option>
              <option value="+57">+57 Colombia</option>
              <option value="+506">+506 Costa Rica</option>
              <option value="+51">+51 Peru</option>
              <option value="+54">+54 Argentina</option>
              <option value="+55">+55 Brazil</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-600">
              {t("leadForm.phone")}
              <span className="text-[#731a2f]"> *</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-sm"
              placeholder={t("leadForm.phone")}
              required
            />
          </div>
        </div>

        {status.message && (
          <p
            className={`text-sm ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-[#731a2f] transition"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? isSpanish
              ? "Enviando..."
              : "Submitting..."
            : t("leadForm.subscribe")}
        </button>

        <p className="text-[11px] text-gray-500">
          {t("leadForm.disclaimer")} {""}
          <Link href="/privacy" className="underline">
            {t("leadForm.privacyPolicy")}
          </Link>
          .
        </p>
      </form>

      {showThanks && (
        <div className="absolute inset-0 bg-black/90 text-white flex items-center justify-center text-center px-6 rounded-2xl">
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
    </div>
  );
}
