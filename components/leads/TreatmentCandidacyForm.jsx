import { useEffect, useMemo, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { validatePhoneNumber } from "@/lib/utils/phone";
import { getLeadAuthHeaders } from "@/lib/utils/leadAuthClient";

const WHATSAPP_NUMBER = "526642077675";
const BASE_URL = "https://www.mavemedspa.com";
const BUSINESS_PHONE = "+52-664-207-7675";
const WHATSAPP_LINK = "https://wa.me/526642077675";
const BUSINESS_ADDRESS = {
  streetAddress: "Blvd Gral Rodolfo Sánchez Taboada 10512-Interior 8a, Segundo Piso, Revolución",
  addressLocality: "Tijuana",
  addressRegion: "BC",
  postalCode: "22010",
  addressCountry: "MX",
};

export default function TreatmentCandidacyForm({
  content,
  ogImagePath = "/sylfirmx.jpg",
  funnelType,
  defaultTreatmentInterest,
  sourceLabelEn,
  sourceLabelEs,
  thankYouPathEn,
  thankYouPathEs,
  showDeviceSection = true,
  deviceLinkHref = "/learn/sylfirm-x-rf-microneedling",
  showPackageTiming = false,
  heroVideoSrc = "",
  heroVideoLabel = "Treatment video",
  heroVideoPoster = "",
}) {
  const router = useRouter();
  const { locale = "en" } = router;
  const { t } = useTranslation("treatments");
  const copy = useMemo(() => content[locale] || content.en, [locale, content]);
  const canonicalPath = locale === "es" ? `/es${router.pathname}` : router.pathname;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const ogImage = `${BASE_URL}${ogImagePath}`;
  const countryOptions = [
    { code: "+1", label: t("treatmentLeadModal.countryOptions.usCanada") },
    { code: "+52", label: t("treatmentLeadModal.countryOptions.mexico") },
    { code: "+44", label: t("treatmentLeadModal.countryOptions.uk") },
    { code: "+34", label: t("treatmentLeadModal.countryOptions.spain") },
    { code: "+57", label: t("treatmentLeadModal.countryOptions.colombia") },
    { code: "+506", label: t("treatmentLeadModal.countryOptions.costaRica") },
    { code: "+51", label: t("treatmentLeadModal.countryOptions.peru") },
    { code: "+54", label: t("treatmentLeadModal.countryOptions.argentina") },
    { code: "+55", label: t("treatmentLeadModal.countryOptions.brazil") },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${BASE_URL}/#medicalbusiness`,
        name: "Mave Medical Spa",
        url: BASE_URL,
        image: `${BASE_URL}/logo-mave.png`,
        telephone: BUSINESS_PHONE,
        address: {
          "@type": "PostalAddress",
          ...BUSINESS_ADDRESS,
        },
        sameAs: [WHATSAPP_LINK],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: "Mave Medical Spa",
        url: BASE_URL,
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `${copy.title} | Mave Medical Spa`,
        description: copy.subtitle,
        inLanguage: locale === "es" ? "es" : "en",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        publisher: { "@id": `${BASE_URL}/#medicalbusiness` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: copy.title,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "ContactPoint",
        "@id": `${BASE_URL}/#contact-whatsapp`,
        contactType: "customer support",
        telephone: BUSINESS_PHONE,
        url: WHATSAPP_LINK,
        availableLanguage: ["en", "es"],
      },
    ],
  };

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const submittedOnceRef = useRef(false);
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
  const trackedPageView = useRef(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    countryCode: locale === "es" ? "+52" : "+1",
    phone: "",
    concerns: [],
    duration: "",
    prior: "",
    priorDetails: "",
    tone: "",
    openPlan: "",
    travel: "",
    notes: "",
    packageTiming: "",
  });

  const isPhoneInvalid =
    showErrors && form.phone && !validatePhoneNumber(form.phone, form.countryCode);

  const generateLeadId = () => {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `lead_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  };

  const resolveDefaultCountryCode = (localeValue) => {
    if (typeof navigator !== "undefined") {
      const navLocale = navigator?.language || "";
      if (navLocale.startsWith("en-US") || navLocale.startsWith("en-CA")) return "+1";
      if (navLocale.startsWith("es-MX")) return "+52";
    }
    return localeValue === "es" ? "+52" : "+1";
  };

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
        window.sessionStorage.setItem("mave_candidacy_utm", JSON.stringify(utm));
      }
      return hasUtm ? utm : null;
    };

    const stored = window.sessionStorage.getItem("mave_candidacy_utm");
    const storedUtm = stored ? JSON.parse(stored) : null;
    const urlUtm = getUtmFromSearch();
    const finalUtm =
      urlUtm ||
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
    setForm((prev) => ({
      ...prev,
      countryCode: resolveDefaultCountryCode(locale),
    }));
  }, [locale]);

  useEffect(() => {
    if (!submittedOnceRef.current) return;
    setShowErrors(false);
    setStatus({ type: "", message: "" });
    setForm({
      fullName: "",
      email: "",
      countryCode: resolveDefaultCountryCode(locale),
      phone: "",
      concerns: [],
      duration: "",
      prior: "",
      priorDetails: "",
      tone: "",
      openPlan: "",
      travel: "",
      notes: "",
      packageTiming: "",
    });
  }, [locale]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (trackedPageView.current) return;
    if (!window.gtag) return;
    const consent = window.localStorage.getItem("mave_cookie_consent");
    if (consent !== "accepted") return;

    const leadSource = utmParams.source || "direct";
    window.gtag("event", "rfm_candidacy_page_view", {
      lead_source: leadSource,
      utm_source: utmParams.source,
      utm_medium: utmParams.medium,
      utm_campaign: utmParams.campaign,
      utm_term: utmParams.term,
      utm_content: utmParams.content,
    });
    trackedPageView.current = true;
  }, [utmParams]);

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

  const trackEvent = (name, params = {}) => {
    if (typeof window === "undefined") return;
    if (!window.gtag) return;
    const consent = window.localStorage.getItem("mave_cookie_consent");
    if (consent !== "accepted") return;
    window.gtag("event", name, params);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleConcernToggle = (value) => {
    setForm((prev) => {
      const exists = prev.concerns.includes(value);
      const next = exists ? prev.concerns.filter((c) => c !== value) : [...prev.concerns, value];
      return { ...prev, concerns: next };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowErrors(true);
    setStatus({ type: "", message: "" });

    const countryLabel = t("candidacyForm.labels.countryCode");
    const requiredMissing = [];
    if (!form.concerns.length) requiredMissing.push(copy.fields.concern);
    if (!form.duration) requiredMissing.push(copy.fields.duration);
    if (!form.prior) requiredMissing.push(copy.fields.prior);
    if (!form.tone) requiredMissing.push(copy.fields.tone);
    if (!form.openPlan) requiredMissing.push(copy.fields.openPlan);
    if (!form.travel) requiredMissing.push(copy.fields.travel);
    if (!form.countryCode) requiredMissing.push(countryLabel);
    if (!form.phone) requiredMissing.push(copy.fields.phone);
    if (!form.fullName) requiredMissing.push(copy.fields.name);
    if (!form.email) requiredMissing.push(copy.fields.email);
    if (showPackageTiming && !form.packageTiming) {
      requiredMissing.push(copy.fields.packageTiming);
    }

    if (requiredMissing.length) {
      const message = t("candidacyForm.messages.missing", {
        fields: requiredMissing.join(", "),
      });
      setStatus({ type: "error", message });
      return;
    }

    const defaultRegion =
      form.countryCode === "+1" ? "US" : form.countryCode === "+52" ? "MX" : undefined;
    if (!validatePhoneNumber(form.phone, form.countryCode, defaultRegion)) {
      setStatus({ type: "error", message: copy.errorPhone });
      return;
    }

    setIsSubmitting(true);
    const leadSource = utmParams.source || "direct";
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
    const payload = {
      fullName: form.fullName.trim(),
      name: form.fullName.trim(),
      email: form.email.trim(),
      countryCode: form.countryCode,
      phone: form.phone.trim(),
      phoneNumber: form.phone.trim(),
      preferredChannel: "WhatsApp",
      treatmentInterest: defaultTreatmentInterest,
      funnelType,
      mainConcernGoal: form.concerns.join(", "),
      visitTiming: "",
      hadTreatmentBefore: form.prior,
      bestDays: "",
      bestTimes: "",
      leadSource,
      utm_source: utmParams.source || "",
      utm_medium: utmParams.medium || "",
      utm_campaign: utmParams.campaign || "",
      utm_term: utmParams.term || "",
      utm_content: utmParams.content || "",
      utmSource: utmParams.source,
      utmMedium: utmParams.medium,
      utmCampaign: utmParams.campaign,
      utmTerm: utmParams.term,
      utmContent: utmParams.content,
      gclid: utmParams.gclid,
      landingPagePath,
      referrer,
      entryUrl,
      entryPath,
      notes: [
        `Duration: ${form.duration}`,
        `Skin tone: ${form.tone}`,
        `Open to plan: ${form.openPlan}`,
        `Can travel: ${form.travel}`,
        form.packageTiming ? `Package timing: ${form.packageTiming}` : "",
        form.priorDetails ? `Prior details: ${form.priorDetails}` : "",
        form.notes ? `Notes: ${form.notes}` : "",
      ]
        .filter(Boolean)
        .join(" | "),
      source: locale === "es" ? sourceLabelEs : sourceLabelEn,
    };

    const payloadWithId = { ...payload, leadId: generateLeadId() };
    try {
      const response = await fetch("/api/lead-treatment", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...getLeadAuthHeaders() },
        body: JSON.stringify(payloadWithId),
      });
      const resultText = await response.text().catch(() => "");
      let result;
      try {
        result = JSON.parse(resultText);
      } catch {
        result = { raw: resultText };
      }

      if (!response.ok || !result?.success) {
        setStatus({ type: "error", message: copy.errorSubmit });
        setIsSubmitting(false);
        return;
      }

      if (result?.sheetStatus === "duplicate") {
        setStatus({
          type: "success",
          message: t("candidacyForm.messages.duplicateNotice"),
        });
        setShowErrors(false);
        submittedOnceRef.current = true;
        setForm({
          fullName: "",
          email: "",
          countryCode: resolveDefaultCountryCode(locale),
          phone: "",
          concerns: [],
          duration: "",
          prior: "",
          priorDetails: "",
          tone: "",
          openPlan: "",
          travel: "",
          notes: "",
          packageTiming: "",
        });
        setIsSubmitting(false);
        return;
      }

      trackEvent("rfm_form_submit", {
        lead_source: leadSource,
        primary_concern: form.concerns.join(", "),
        skin_tone: form.tone,
        open_to_plan: form.openPlan,
        can_travel: form.travel,
        utm_source: utmParams.source,
        utm_medium: utmParams.medium,
        utm_campaign: utmParams.campaign,
        utm_term: utmParams.term,
        utm_content: utmParams.content,
      });

      setStatus({ type: "success", message: "" });
      setShowErrors(false);
      submittedOnceRef.current = true;
      setForm({
        fullName: "",
        email: "",
        countryCode: resolveDefaultCountryCode(locale),
        phone: "",
        concerns: [],
        duration: "",
        prior: "",
        priorDetails: "",
        tone: "",
        openPlan: "",
        travel: "",
        notes: "",
        packageTiming: "",
      });

      const thankYouPath = locale === "es" ? thankYouPathEs : thankYouPathEn;
      router.push(thankYouPath);
    } catch (error) {
      setStatus({ type: "error", message: copy.errorSubmit });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>{copy.title} | Mave Medical Spa</title>
        <meta name="description" content={copy.subtitle} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${copy.title} | Mave Medical Spa`} />
        <meta property="og:description" content={copy.subtitle} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Mave Medical Spa" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${copy.title} | Mave Medical Spa`} />
        <meta name="twitter:description" content={copy.subtitle} />
        <meta name="twitter:image" content={ogImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <PromoBanner />
      <Header />
      <main className="bg-white pt-36 md:pt-40">
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif text-black">{copy.title}</h1>
            {copy.deviceLine ? (
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mt-3">
                {copy.deviceLine}
              </p>
            ) : null}
            <p className="text-base text-gray-700 mt-3">{copy.subtitle}</p>
            {heroVideoSrc ? (
              <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm">
                <video
                  className="w-full h-auto"
                  src={heroVideoSrc}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={heroVideoLabel}
                  poster={heroVideoPoster || undefined}
                />
              </div>
            ) : null}
            {copy.support ? <p className="text-sm text-gray-600 mt-2">{copy.support}</p> : null}
            {copy.supportDevice ? (
              <p className="text-sm text-gray-600 mt-2">{copy.supportDevice}</p>
            ) : null}
            <a
              href="#candidacy-form"
              className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-[#731a2f] transition"
            >
              {copy.cta}
            </a>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-10 grid md:grid-cols-[1.05fr_1.25fr] gap-10">
          <div className="space-y-6">
            <div>
              <h2 id="who-this-is-for" className="text-xl font-serif text-black mb-2">
                {copy.sectionFor}
              </h2>
              <ul className="list-disc list-outside pl-5 text-gray-700 text-sm space-y-1">
                {copy.forList.map((item) => {
                  const lower = String(item).toLowerCase();
                  const anchorId = lower.includes("acne") || lower.includes("acné")
                    ? "acne-scars"
                    : lower.includes("laxity") || lower.includes("flacidez") || lower.includes("tightening")
                    ? "skin-tightening"
                    : undefined;
                  return (
                    <li key={item} id={anchorId}>
                      {item}
                    </li>
                  );
                })}
              </ul>
              <p className="text-sm text-gray-600 mt-3">{copy.forNote}</p>
            </div>

            <div>
              <h2 id="what-happens-next" className="text-xl font-serif text-black mb-2">
                {copy.sectionHow}
              </h2>
              <ol className="list-decimal list-outside pl-5 text-gray-700 text-sm space-y-1">
                {copy.howSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="text-sm text-gray-600 mt-3">{copy.howNote}</p>
            </div>

            {showDeviceSection ? (
              <div>
                <h2
                  id="why-device-choice-matters"
                  className="text-xl font-serif text-black mb-2"
                >
                  {copy.sectionDeviceTitle}
                </h2>
                <p className="text-sm text-gray-700">{copy.sectionDeviceCopy}</p>
              </div>
            ) : null}

            <div>
              <h2 className="text-xl font-serif text-black mb-2">{copy.sectionMedical}</h2>
              <p className="text-sm text-gray-700">{copy.medicalCopy}</p>
              <ul className="list-disc list-outside pl-5 text-gray-700 text-sm space-y-1 mt-3">
                {copy.medicalBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div
            id="candidacy-form"
            className="bg-[#f9f9f9] border border-gray-200 rounded-2xl p-6 scroll-mt-24 md:scroll-mt-28"
          >
            <h3 className="text-lg font-semibold text-black mb-2">{copy.formIntro}</h3>
            <form
              onSubmit={handleSubmit}
              onFocusCapture={() => {
                if (hasStarted) return;
                setHasStarted(true);
                const leadSource = utmParams.source || "direct";
                trackEvent("rfm_form_start", {
                  lead_source: leadSource,
                  utm_source: utmParams.source,
                  utm_medium: utmParams.medium,
                  utm_campaign: utmParams.campaign,
                  utm_term: utmParams.term,
                  utm_content: utmParams.content,
                });
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  {copy.fields.concern}
                  <span className="text-red-500"> *</span>
                </label>
                <div
                  className={[
                    "grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-xl p-2",
                    showErrors && form.concerns.length === 0
                      ? "border border-red-400 bg-red-50/40"
                      : "border border-transparent",
                  ].join(" ")}
                >
                  {copy.fields.concernOptions.map((option) => (
                    <label key={option} className="flex items-center gap-2 text-base md:text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={form.concerns.includes(option)}
                        onChange={() => handleConcernToggle(option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  {copy.fields.duration}
                  <span className="text-red-500"> *</span>
                </label>
                <select
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  className={[
                    "w-full border rounded px-3 py-2 text-base md:text-sm",
                    showErrors && !form.duration ? "border-red-400 bg-red-50/40" : "border-gray-300",
                  ].join(" ")}
                  required
                >
                  <option value="">{t("candidacyForm.selectPlaceholder")}</option>
                  {copy.fields.durationOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  {copy.fields.prior}
                  <span className="text-red-500"> *</span>
                </label>
                <select
                  name="prior"
                  value={form.prior}
                  onChange={handleChange}
                  className={[
                    "w-full border rounded px-3 py-2 text-base md:text-sm",
                    showErrors && !form.prior ? "border-red-400 bg-red-50/40" : "border-gray-300",
                  ].join(" ")}
                  required
                >
                  <option value="">{t("candidacyForm.selectPlaceholder")}</option>
                  {copy.fields.priorOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="priorDetails"
                  value={form.priorDetails}
                  onChange={handleChange}
                  placeholder={copy.fields.priorDetails}
                  className="mt-2 w-full border border-gray-300 rounded px-3 py-2 text-base md:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  {copy.fields.tone}
                  <span className="text-red-500"> *</span>
                </label>
                <select
                  name="tone"
                  value={form.tone}
                  onChange={handleChange}
                  className={[
                    "w-full border rounded px-3 py-2 text-base md:text-sm",
                    showErrors && !form.tone ? "border-red-400 bg-red-50/40" : "border-gray-300",
                  ].join(" ")}
                  required
                >
                  <option value="">{t("candidacyForm.selectPlaceholder")}</option>
                  {copy.fields.toneOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  {copy.fields.openPlan}
                  <span className="text-red-500"> *</span>
                </label>
                <select
                  name="openPlan"
                  value={form.openPlan}
                  onChange={handleChange}
                  className={[
                    "w-full border rounded px-3 py-2 text-base md:text-sm",
                    showErrors && !form.openPlan ? "border-red-400 bg-red-50/40" : "border-gray-300",
                  ].join(" ")}
                  required
                >
                  <option value="">{t("candidacyForm.selectPlaceholder")}</option>
                  {copy.fields.openPlanOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  {copy.fields.travel}
                  <span className="text-red-500"> *</span>
                </label>
                <select
                  name="travel"
                  value={form.travel}
                  onChange={handleChange}
                  className={[
                    "w-full border rounded px-3 py-2 text-base md:text-sm",
                    showErrors && !form.travel ? "border-red-400 bg-red-50/40" : "border-gray-300",
                  ].join(" ")}
                  required
                >
                  <option value="">{t("candidacyForm.selectPlaceholder")}</option>
                  {copy.fields.travelOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {showPackageTiming ? (
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    {copy.fields.packageTiming}
                    <span className="text-red-500"> *</span>
                  </label>
                  <select
                    name="packageTiming"
                    value={form.packageTiming}
                    onChange={handleChange}
                    className={[
                      "w-full border rounded px-3 py-2 text-base md:text-sm",
                      showErrors && !form.packageTiming
                        ? "border-red-400 bg-red-50/40"
                        : "border-gray-300",
                    ].join(" ")}
                    required
                  >
                    <option value="">{t("candidacyForm.selectPlaceholder")}</option>
                    {copy.fields.packageTimingOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    {t("candidacyForm.labels.countryCode")}
                    <span className="text-red-500"> *</span>
                  </label>
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className={[
                      "w-full border rounded px-3 py-2 text-base md:text-sm",
                      showErrors && !form.countryCode
                        ? "border-red-400 bg-red-50/40"
                        : "border-gray-300",
                    ].join(" ")}
                    required
                  >
                    {countryOptions.map((opt) => (
                      <option key={opt.code} value={opt.code}>
                        {opt.code} {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    {copy.fields.phone}
                    <span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={[
                      "w-full border rounded px-3 py-2 text-base md:text-sm",
                      showErrors && !form.phone ? "border-red-400 bg-red-50/40" : "border-gray-300",
                      isPhoneInvalid ? "border-red-400 bg-red-50/40" : "",
                    ].join(" ")}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  {copy.fields.name}
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className={[
                    "w-full border rounded px-3 py-2 text-base md:text-sm",
                    showErrors && !form.fullName ? "border-red-400 bg-red-50/40" : "border-gray-300",
                  ].join(" ")}
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  {copy.fields.email}
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={[
                    "w-full border rounded px-3 py-2 text-base md:text-sm",
                    showErrors && !form.email ? "border-red-400 bg-red-50/40" : "border-gray-300",
                  ].join(" ")}
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">{copy.fields.notes}</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-base md:text-sm"
                />
              </div>

              {status.type === "success" && status.message && (
                <div className="mt-2">
                  <p className="text-sm text-green-700">{status.message}</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      t("candidacyForm.messages.whatsappAddDetail")
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-[#731a2f] transition"
                  >
                    {t("treatmentLeadModal.buttons.whatsapp")}
                  </a>
                </div>
              )}
              {status.type === "error" && (
                <p className="text-sm text-red-600">{status.message}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 rounded-full text-sm hover:bg-[#731a2f] transition disabled:opacity-70"
              >
                {isSubmitting ? t("candidacyForm.buttons.submitting") : copy.submit}
              </button>
            </form>
            {copy.travelAdvisory ? (
              <p className="text-xs text-gray-600 mt-4">{copy.travelAdvisory}</p>
            ) : null}
            {showDeviceSection ? (
              <p className="text-xs text-gray-500 mt-4">
                <a href={deviceLinkHref} className="underline underline-offset-4">
                  {copy.sectionDeviceLink}
                </a>
              </p>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
