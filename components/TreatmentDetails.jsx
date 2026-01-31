import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import TreatmentInfoTabs from "./TreatmentInfoTabs";
import { getPromoSummary } from "@/lib/utils/promo";
import { formatMoney, formatMoneyRange, getPriceMinValue } from "@/lib/utils/price";
import { validatePhoneNumber } from "@/lib/utils/phone";

export default function TreatmentDetails({ treatment }) {
  const router = useRouter();
  const { locale: routerLocale } = router;
  const locale = routerLocale || "en";

  const [leadOpen, setLeadOpen] = useState(false);
  const [leadStep, setLeadStep] = useState("form1");
  const [leadService, setLeadService] = useState("");
  const [leadCategory, setLeadCategory] = useState("");
  const [leadOptions, setLeadOptions] = useState([]);
  const [leadSelectedOptions, setLeadSelectedOptions] = useState([]);

  const initialLeadForm = {
    firstName: "",
    email: "",
    countryCode: "+52",
    phone: "",
    visitTiming: "",
    preferredChannel: "",
    hadTreatmentBefore: "",
    bestDays: "",
    bestTimes: "",
    mainConcern: "",
  };
  const WHATSAPP_NUMBER = "526642077675";

  const [leadForm, setLeadForm] = useState(initialLeadForm);
  const [leadSnapshot, setLeadSnapshot] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [duplicateMessage, setDuplicateMessage] = useState("");
  const [leadFormError, setLeadFormError] = useState("");
  const [utmParams, setUtmParams] = useState({
    source: "",
    medium: "",
    campaign: "",
    term: "",
    content: "",
    gclid: "",
  });

  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const initialReferrer = useRef("");
  const entryUrlRef = useRef("");
  const entryPathRef = useRef("");

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
    const localeStr = navigator?.language || "";
    if (localeStr.startsWith("en-US") || localeStr.startsWith("en-CA")) {
      setLeadForm((prev) => ({
        ...prev,
        countryCode: "+1",
      }));
    } else if (localeStr.startsWith("es-MX")) {
      setLeadForm((prev) => ({
        ...prev,
        countryCode: "+52",
      }));
    }
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
        window.sessionStorage.setItem("mave_treatment_utm", JSON.stringify(utm));
      }
      return hasUtm ? utm : null;
    };

    const stored = window.sessionStorage.getItem("mave_treatment_utm");
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

  const trackEvent = (name, params = {}) => {
    if (typeof window === "undefined") return;
    if (!window.gtag) return;
    const consent = window.localStorage.getItem("mave_cookie_consent");
    if (consent !== "accepted") return;
    window.gtag("event", name, params);
  };

  const getLocalized = (field) => {
    if (field == null) return "";
    if (typeof field === "object") {
      if (field[locale]) return field[locale];
      if (field.en) return field.en;
      return "";
    }
    return field;
  };

  const generateLeadId = () => {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `lead_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  };

  const getLocalizedPrice = (field) => {
    if (field == null) return "";
    if (typeof field === "object") {
      if (field.text && typeof field.text === "object") {
        return field.text[locale] || field.text.en || "";
      }
      if ("minAmount" in field || "maxAmount" in field) {
        return formatMoneyRange(field.minAmount, field.maxAmount);
      }
      if ("amount" in field) return formatMoney(field.amount);
      return getLocalized(field);
    }
    return field;
  };

  const handleLeadChange = (e) => {
    const { name, value } = e.target;
    setLeadForm((prev) => ({ ...prev, [name]: value }));
    setLeadFormError("");
    if (name === "phone" && phoneRef.current) phoneRef.current.setCustomValidity("");
    if (name === "email" && emailRef.current) emailRef.current.setCustomValidity("");
  };

  const pricing = treatment?.pricing || {};
  const promoSummary = getPromoSummary(treatment, locale);
  const promoDetails = treatment?.promoDetails || null;
  const fallbackPromo = promoSummary.lowestPromo || null;
  const hasMultiplePromoOptions = promoSummary.promoOptions.length > 1;
  const hasSinglePromoOption = promoSummary.promoOptions.length === 1;

  const buildPromoDisplayOptions = () => {
    const cleanNotes = (notes) => {
      if (!Array.isArray(notes)) return [];
      return notes.filter((note) => {
        const text = getLocalized(note);
        return typeof text === "string" && text.trim() !== "";
      });
    };

    const promoOptionNotesByName = new Map(
      promoSummary.promoOptions
        .map((promoOpt) => {
          const name = getLocalized(promoOpt.option?.optionName);
          return name ? [name.toLowerCase(), cleanNotes(promoOpt.option?.notes)] : null;
        })
        .filter(Boolean)
    );

    if (Array.isArray(promoDetails?.options) && promoDetails.options.length > 0) {
      return promoDetails.options.map((opt) => {
        const normalizedName = getLocalized(opt?.optionName).toLowerCase();
        const optNotes = cleanNotes(opt?.notes);
        const matchedNotes = promoOptionNotesByName.get(normalizedName) || [];
        const promoPrice = fallbackPromo?.promoPrice;
        const currency = fallbackPromo?.currency;
        const notes =
          hasMultiplePromoOptions
            ? optNotes
            : hasSinglePromoOption && cleanNotes(fallbackPromo?.option?.notes).length > 0
            ? cleanNotes(fallbackPromo?.option?.notes)
            : optNotes.length === 0 && matchedNotes.length > 0
            ? matchedNotes
            : optNotes;
        return {
          optionName: opt?.optionName,
          promoPrice,
          currency,
          notes,
        };
      });
    }

    return promoSummary.promoOptions.map((promoOpt) => ({
      optionName: promoOpt.option?.optionName,
      promoPrice: promoOpt.promoPrice,
      currency: promoOpt.currency,
      notes: promoOpt.option?.notes,
    }));
  };

  const promoDisplayOptions = buildPromoDisplayOptions();

  const buildLeadOptions = () => {
    const options = [];
    const serviceName = getLocalized(treatment.serviceDisplayName);
    const categoryName = getLocalized(treatment.categoryDisplayName);
    const normalize = (value) =>
      String(value || "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
    const normalizedService = normalize(serviceName);
    const normalizedCategory = normalize(categoryName);
    const stripParens = (value) => String(value || "").replace(/\s*\([^)]*\)\s*/g, " ").trim();
    const baseService = normalize(stripParens(serviceName));
    const serviceKey = baseService.split(" ").slice(0, 2).join(" ");

    if (promoDisplayOptions.length) {
      promoDisplayOptions.forEach((opt) => {
        const name = getLocalized(opt.optionName);
        if (!name) return;
        const normalizedName = normalize(name);
        if (normalizedName === normalizedService || normalizedName === normalizedCategory) return;
        if (serviceKey && normalizedName.includes(serviceKey)) return;
        if (baseService && normalizedName.includes(baseService)) return;
        const price =
          opt.promoPrice != null
            ? `${opt.promoPrice}${opt.currency ? ` ${opt.currency}` : ""}`
            : "";
        const label = price ? `${name} – ${price}` : name;
        options.push(label);
      });
    }

    if (pricing?.options?.length) {
      pricing.options.forEach((opt) => {
        const name = getLocalized(opt.optionName);
        if (!name) return;
        const normalizedName = normalize(name);
        if (normalizedName === normalizedService || normalizedName === normalizedCategory) return;
        if (serviceKey && normalizedName.includes(serviceKey)) return;
        if (baseService && normalizedName.includes(baseService)) return;
        const price =
          opt.optionPrice != null
            ? `${getLocalizedPrice(opt.optionPrice)}${
                opt.optionPrice?.currency ? ` ${opt.optionPrice.currency}` : ""
              }`
            : "";
        const label = price ? `${name} – ${price}` : name;
        options.push(label);
      });
    }

    return options;
  };

  const openLeadForm = (preferPromo = false) => {
    const options = buildLeadOptions();
    setLeadOptions(options);

    const defaultSelection = (() => {
      if (preferPromo && promoDetails?.options?.length) return [options[0]].filter(Boolean);
      return options.length ? [options[0]] : [];
    })();

    setLeadSelectedOptions(defaultSelection);

    const serviceText = `${getLocalized(treatment.serviceDisplayName)}`;
    const categoryText = `${getLocalized(treatment.categoryDisplayName)}`;
    setLeadService(serviceText);
    setLeadCategory(categoryText);

    setDuplicateMessage("");
    setLeadFormError("");
    setLeadStep("form1");
    setLeadOpen(true);
  };

  const handleCloseLead = () => {
    setLeadOpen(false);
    setLeadStep("form1");
    setLeadForm(initialLeadForm);
    setLeadSnapshot(null);
    setLeadSelectedOptions([]);
    setDuplicateMessage("");
    setLeadFormError("");
    setLeadCategory("");
  };

  useEffect(() => {
    if (router?.query?.lead === "open") {
      openLeadForm(false);
      const cleanPath = router.asPath.replace(/\?.*/, "");
      router.replace(cleanPath, undefined, { shallow: true }).catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router?.query?.lead]);

  useEffect(() => {
    if (leadOpen) document.body.classList.add("lead-open");
    else document.body.classList.remove("lead-open");

    const evt = new CustomEvent("lead-open-change", { detail: { open: leadOpen } });
    window.dispatchEvent(evt);

    return () => {
      document.body.classList.remove("lead-open");
    };
  }, [leadOpen]);

  const parsePriceValue = (priceString) => {
    if (priceString && typeof priceString === "object") {
      const value = getPriceMinValue(priceString);
      return Number.isFinite(value) ? value : Infinity;
    }
    const priceText = getLocalizedPrice(priceString);
    if (typeof priceText !== "string") return Infinity;
    const numeric = parseFloat(priceText.replace(/[^0-9.]/g, ""));
    return Number.isFinite(numeric) ? numeric : Infinity;
  };

  const priceCandidates = [];
  (pricing?.options || []).forEach((opt) => {
    if (opt?.optionPrice) {
      const currency = opt.optionPrice?.currency || "";
      priceCandidates.push({
        value: parsePriceValue(opt.optionPrice),
        display: `${getLocalizedPrice(opt.optionPrice)} ${currency}`.trim(),
      });
    }
  });

  const sortedPrices = priceCandidates
    .filter((p) => p.value !== Infinity)
    .sort((a, b) => a.value - b.value);

  const lowestPriceDisplay = sortedPrices[0]?.display || "";

  const showStartingLabel = sortedPrices.length > 1;
  const startingPriceText = showStartingLabel
    ? `${locale === "es" ? "Desde" : "Starting from"} ${lowestPriceDisplay}`
    : lowestPriceDisplay;

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[50vh]">
        {/* Image */}
        <div className="relative w-full h-[50vh] md:h-[80vh] rounded-br-2xl overflow-hidden">
          <Image
            src={treatment.images?.primary || "/placeholder.jpg"}
            alt={`Treatment image for ${getLocalized(treatment.serviceDisplayName)}`}
            fill
            className="object-cover [object-position:center_55%] [object-position:0%_60%]"
            priority
          />
        </div>

        {/* Content */}
        <div className="w-full text-black px-6 md:px-12 py-[15px] flex flex-col justify-start">
          <div className="mb-4">
            <p className="text-sm text-gray-500">
              <Link href="/treatments" className="hover:underline hover:text-black">
                {locale === "es" ? "Tratamientos" : "Treatments"}
              </Link>{" "}
              /{" "}
              <Link
                href={`/treatments/#${getLocalized(treatment.categoryDisplayName)
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="hover:underline hover:text-black"
              >
                {getLocalized(treatment.categoryDisplayName)}
              </Link>{" "}
              /{" "}
              <Link href={`/treatments/${treatment.urlSlug}`} className="text-gray-700 underline">
                {getLocalized(treatment.serviceDisplayName)}
              </Link>{" "}
            </p>

            <h1 className="text-4xl font-serif text-black font-medium mt-2 mb-2">
              {getLocalized(treatment.serviceDisplayName)}
            </h1>
            <p className="text-gray-700 text-base leading-relaxed">
              {getLocalized(treatment.description)}
            </p>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-1 gap-4 mb-6 items-start">
            <div className="border border-gray-200 bg-[#f9f9f9] p-5 rounded-lg shadow-sm flex flex-col text-left space-y-2">
              <h2 className="text-md font-semibold text-black">
                {locale === "es" ? "Precio" : "Price"}
              </h2>
              <p className="text-gray-700">{startingPriceText}</p>
              <button
                type="button"
                onClick={() => openLeadForm(false)}
                className="mt-2 inline-block w-full text-center bg-white text-black border border-black hover:bg-black hover:text-white font-medium py-2 rounded transition duration-200"
              >
                {locale === "es" ? "Agendar" : "Book Now"}
              </button>
            </div>

            {promoSummary.isPromoActive && (
              <div className="border border-[#731a2f] bg-[#731a2f] text-white p-5 rounded-lg shadow-md flex flex-col text-left space-y-2">
                <h2 className="text-md font-semibold">
                  {getLocalized(promoDetails?.headline) ||
                    (locale === "es" ? "Precio Exclusivo" : "Exclusive Pricing")}
                </h2>

                {promoDetails?.validTill && (
                  <p className="text-xs text-white/80">
                    {locale === "es" ? "Válido hasta" : "Valid until"}{" "}
                    {getLocalized(promoDetails.validTill)}
                  </p>
                )}

                {promoDetails?.description && (
                  <p className="text-white text-sm">{getLocalized(promoDetails.description)}</p>
                )}

                {promoDisplayOptions.length > 0 && (
                  <div className="mt-1 space-y-2 w-full text-left">
                    {promoDisplayOptions.map((opt, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-white border border-white/30 rounded p-2 bg-white/10"
                      >
                        <div className="font-semibold">
                          {getLocalized(opt.optionName) ||
                            getLocalized(treatment?.serviceDisplayName)}
                        </div>
                        <div className="text-white">
                          {promoSummary.promoOptions.length > 1
                            ? locale === "es"
                              ? "Desde "
                              : "Starting from "
                            : ""}
                          {opt.promoPrice ? opt.promoPrice : ""}
                          {opt.currency ? ` ${opt.currency}` : ""}
                        </div>
                        {opt.notes?.length > 0 && (
                          <ul className="text-xs text-white/80 list-disc list-outside pl-4 mt-1 space-y-1">
                            {opt.notes.map((note, nIdx) => (
                              <li key={nIdx}>{getLocalized(note)}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => openLeadForm(true)}
                  className="mt-2 inline-block w-full text-center bg-white text-black border border-white hover:bg-transparent hover:text-white font-medium py-2 rounded transition duration-200"
                >
                  {locale === "es" ? "Consultar Promo" : "Inquire"}
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      <TreatmentInfoTabs treatment={treatment} locale={locale} />

      {/* Lead Modal (fixed height + scroll body + sticky footer) */}
      {leadOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
          onClick={handleCloseLead}
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-xl relative max-h-[92vh] sm:max-h-[88vh] md:max-h-[84vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-5 py-4">
              <button
                type="button"
                onClick={handleCloseLead}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
                aria-label="Close"
              >
                ✕
              </button>

              {leadStep === "form1" && (
                <>
                  <h3 className="text-lg md:text-xl font-semibold text-black text-center leading-snug">
                    {locale === "es" ? "Solicitar información" : "Request information"}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-snug mt-1">
                    {locale === "es"
                      ? "Comparte tus datos y te contactaremos enseguida."
                      : "Share your details and we’ll reach out right away."}
                  </p>
                </>
              )}

              {leadStep === "form2" && (
                <>
                  <h3 className="text-lg md:text-xl font-semibold text-black text-center leading-snug">
                    {locale === "es" ? "Detalles adicionales" : "Additional details"}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-snug mt-1">
                    {locale === "es" ? "Ayúdanos a preparar tu visita." : "Help us tailor your visit."}
                  </p>
                </>
              )}

              {leadStep === "channels" && (
                <>
                  <h3 className="text-lg md:text-xl font-semibold text-black text-center leading-snug">
                    {locale === "es" ? "Elige cómo chatear" : "Choose how to chat"}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-snug mt-1">
                    {locale === "es"
                      ? "Selecciona WhatsApp o Instagram para continuar la conversación."
                      : "Pick WhatsApp or Instagram to continue the conversation."}
                  </p>
                </>
              )}
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 min-h-0 overflow-y-auto px-5 py-4">
              {leadStep === "form1" && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="md:col-span-2">
                      <div className="mb-2">
                        <p className="text-sm text-gray-500">
                          {locale === "es" ? "Tratamiento" : "Treatment"}
                        </p>
                        <p className="text-base font-semibold text-black break-words">{leadService}</p>
                      </div>
                      <label className="block text-sm text-gray-700 mb-1 break-words">
                        {locale === "es" ? "Opciones del servicio" : "Service options"}{" "}
                        <span className="text-[#731a2f]">*</span>
                      </label>

                      <div
                        className={[
                          "w-full max-w-full border rounded px-3 py-2 bg-white",
                          leadFormError && leadSelectedOptions.length === 0
                            ? "border-red-400 bg-red-50/40"
                            : "border-gray-300",
                        ].join(" ")}
                      >
                        <div className="text-xs text-gray-500 mb-2">
                          {locale === "es"
                            ? "Selecciona una o varias opciones."
                            : "Select one or multiple options."}
                        </div>

                        <div className="max-h-40 overflow-y-auto pr-1 space-y-2">
                          {leadOptions.map((opt) => {
                            const checked = leadSelectedOptions.includes(opt);
                            return (
                              <label key={opt} className="flex items-start gap-3 cursor-pointer select-none">
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => {
                                    setLeadFormError("");
                                    setLeadSelectedOptions((prev) => {
                                      if (prev.includes(opt)) return prev.filter((x) => x !== opt);
                                      return [...prev, opt];
                                    });
                                  }}
                                  className="mt-1"
                                />
                                <span className="text-sm text-gray-800 whitespace-normal break-words leading-snug">
                                  {opt}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      <p className="text-xs text-gray-500 mt-1">
                        {locale === "es"
                          ? "Puedes elegir una o varias opciones."
                          : "You can choose one or multiple options."}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                        {locale === "es" ? "Nombre" : "Name"} <span className="text-[#731a2f]">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={leadForm.firstName}
                        onChange={handleLeadChange}
                        placeholder={locale === "es" ? "Nombre" : "Name"}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 placeholder:text-gray-400"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                        Email <span className="text-[#731a2f]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={leadForm.email}
                        onChange={handleLeadChange}
                        placeholder="Email"
                        ref={emailRef}
                        onInvalid={(e) =>
                          e.currentTarget.setCustomValidity(
                            locale === "es"
                              ? "Por favor ingresa un correo válido."
                              : "Please enter a valid email address."
                          )
                        }
                        onInput={(e) => e.currentTarget.setCustomValidity("")}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 placeholder:text-gray-400"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                        {locale === "es" ? "Código de país" : "Country code"}{" "}
                        <span className="text-[#731a2f]">*</span>
                      </label>
                      <select
                        name="countryCode"
                        value={leadForm.countryCode}
                        onChange={handleLeadChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
                        required
                      >
                        {countryOptions.map((opt) => (
                          <option key={opt.code} value={opt.code}>
                            {opt.code} — {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                        {locale === "es" ? "Teléfono" : "Phone"} <span className="text-[#731a2f]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={leadForm.phone}
                        onChange={handleLeadChange}
                        placeholder={locale === "es" ? "Teléfono" : "Phone"}
                        ref={phoneRef}
                        pattern="[0-9\\s\\-()+]{7,}"
                        onInvalid={(e) =>
                          e.currentTarget.setCustomValidity(
                            locale === "es"
                              ? "Ingresa un número telefónico válido."
                              : "Please enter a valid phone number."
                          )
                        }
                        onInput={(e) => e.currentTarget.setCustomValidity("")}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 placeholder:text-gray-400"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                        {locale === "es" ? "¿Cuándo deseas visitar?" : "When would you like to visit?"}
                        <span className="text-[#731a2f]">*</span>
                      </label>
                      <select
                        name="visitTiming"
                        value={leadForm.visitTiming}
                        onChange={handleLeadChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                        required
                      >
                        <option value="">{locale === "es" ? "Selecciona" : "Select"}</option>
                        <option value={locale === "es" ? "Esta semana" : "This week"}>
                          {locale === "es" ? "Esta semana" : "This week"}
                        </option>
                        <option value={locale === "es" ? "Este mes" : "This month"}>
                          {locale === "es" ? "Este mes" : "This month"}
                        </option>
                        <option value={locale === "es" ? "Dentro de tres meses" : "Within three months"}>
                          {locale === "es" ? "Dentro de tres meses" : "Within three months"}
                        </option>
                        <option value={locale === "es" ? "Solo investigando" : "Just gathering information"}>
                          {locale === "es" ? "Solo investigando" : "Just gathering information"}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                        {locale === "es" ? "Método de contacto preferido" : "Preferred communication method"}
                        <span className="text-[#731a2f]">*</span>
                      </label>
                      <select
                        name="preferredChannel"
                        value={leadForm.preferredChannel}
                        onChange={handleLeadChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                        required
                      >
                        <option value="">{locale === "es" ? "Selecciona" : "Select"}</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Phone call">{locale === "es" ? "Llamada" : "Phone call"}</option>
                        <option value="Text message">{locale === "es" ? "Mensaje de texto" : "Text message"}</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {leadStep === "form2" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                        {locale === "es"
                          ? "¿Has tenido este tratamiento?"
                          : "Have you had this treatment before?"}
                        <span className="text-[#731a2f]">*</span>
                      </label>
                      <select
                        name="hadTreatmentBefore"
                        value={leadForm.hadTreatmentBefore}
                        onChange={handleLeadChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                        required
                      >
                        <option value="">{locale === "es" ? "Selecciona" : "Select"}</option>
                        <option value={locale === "es" ? "Sí" : "Yes"}>{locale === "es" ? "Sí" : "Yes"}</option>
                        <option value={locale === "es" ? "No" : "No"}>{locale === "es" ? "No" : "No"}</option>
                        <option value={locale === "es" ? "No estoy seguro" : "Not sure"}>
                          {locale === "es" ? "No estoy seguro" : "Not sure"}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                        {locale === "es" ? "Mejores días" : "Best days"}
                        <span className="text-[#731a2f]">*</span>
                      </label>
                      <select
                        name="bestDays"
                        value={leadForm.bestDays}
                        onChange={handleLeadChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                        required
                      >
                        <option value="">{locale === "es" ? "Selecciona" : "Select"}</option>
                        <option value={locale === "es" ? "Días de semana" : "Weekdays"}>
                          {locale === "es" ? "Días de semana" : "Weekdays"}
                        </option>
                        <option value={locale === "es" ? "Sábados" : "Saturdays"}>
                          {locale === "es" ? "Sábados" : "Saturdays"}
                        </option>
                        <option value={locale === "es" ? "Disponibilidad abierta" : "Open availability"}>
                          {locale === "es" ? "Disponibilidad abierta" : "Open availability"}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                        {locale === "es" ? "Mejores horarios" : "Best times"}
                        <span className="text-[#731a2f]">*</span>
                      </label>
                      <select
                        name="bestTimes"
                        value={leadForm.bestTimes}
                        onChange={handleLeadChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                        required
                      >
                        <option value="">{locale === "es" ? "Selecciona" : "Select"}</option>
                        <option value={locale === "es" ? "Mañanas" : "Mornings"}>
                          {locale === "es" ? "Mañanas" : "Mornings"}
                        </option>
                        <option value={locale === "es" ? "Mediodía" : "Noon"}>
                          {locale === "es" ? "Mediodía" : "Noon"}
                        </option>
                        <option value={locale === "es" ? "Tardes" : "Afternoons"}>
                          {locale === "es" ? "Tardes" : "Afternoons"}
                        </option>
                        <option value={locale === "es" ? "Disponibilidad abierta" : "Open availability"}>
                          {locale === "es" ? "Disponibilidad abierta" : "Open availability"}
                        </option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm text-gray-700 mb-1">
                        {locale === "es"
                          ? "¿Cuál es tu principal preocupación u objetivo?"
                          : "What is your main concern or goal?"}
                      </label>
                      <input
                        type="text"
                        name="mainConcern"
                        value={leadForm.mainConcern}
                        onChange={handleLeadChange}
                        placeholder={
                          locale === "es"
                            ? "Ej. líneas de expresión, flacidez mandibular, cicatrices, manchas..."
                            : "E.g., forehead lines, sagging jawline, acne scars, melasma..."
                        }
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>
              )}

              {leadStep === "channels" && (
                <div className="space-y-4">
                  <div className="flex flex-col gap-3">
                    <button
                      type="button"
                      className="w-full bg-[#25D366] text-white py-2 rounded font-medium hover:opacity-90 transition"
                      onClick={() => {
                        const msg =
                          locale === "es"
                            ? [
                                `Hola, me interesa ${leadSnapshot?.treatmentInterest || leadService}.`,
                                leadSnapshot?.firstName || leadForm.firstName
                                  ? `Mi nombre es ${leadSnapshot?.firstName || leadForm.firstName}.`
                                  : null,
                                leadSnapshot?.bestDay || leadSnapshot?.bestTime || leadForm.bestDays || leadForm.bestTimes
                                  ? `Prefiero ${leadSnapshot?.bestDay || leadForm.bestDays || "cualquier día"} y ${
                                      leadSnapshot?.bestTime || leadForm.bestTimes || "cualquier horario"
                                    }.`
                                  : null,
                              ]
                                .filter(Boolean)
                                .join(" ")
                            : [
                                `Hi, I'm interested in ${leadSnapshot?.treatmentInterest || leadService}.`,
                                leadSnapshot?.firstName || leadForm.firstName
                                  ? `My name is ${leadSnapshot?.firstName || leadForm.firstName}.`
                                  : null,
                                leadSnapshot?.bestDay || leadSnapshot?.bestTime || leadForm.bestDays || leadForm.bestTimes
                                  ? `I prefer ${leadSnapshot?.bestDay || leadForm.bestDays || "any day"} and ${
                                      leadSnapshot?.bestTime || leadForm.bestTimes || "any time"
                                    }.`
                                  : null,
                              ]
                                .filter(Boolean)
                                .join(" ");

                        const link = `https://wa.me/+526642077675?text=${encodeURIComponent(msg)}`;
                        window.open(link, "_blank");
                        handleCloseLead();
                      }}
                    >
                      WhatsApp
                    </button>

                    <button
                      type="button"
                      className="w-full bg-gradient-to-r from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white py-2 rounded font-medium hover:opacity-90 transition"
                      onClick={() => {
                        window.open("https://www.instagram.com/mavemedicalspa", "_blank");
                        handleCloseLead();
                      }}
                    >
                      Instagram
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Footer */}
            {leadStep === "form1" && (
              <div className="sticky bottom-0 bg-white border-t border-gray-100 px-5 py-4">
                {leadFormError && (
                  <p className="mb-3 text-sm text-red-600">{leadFormError}</p>
                )}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      if (!leadForm.firstName.trim()) {
                        setLeadFormError(
                          locale === "es" ? "Ingresa tu nombre." : "Please enter your name."
                        );
                        return;
                      }
                      if (emailRef.current && !emailRef.current.checkValidity()) {
                        setLeadFormError(
                          locale === "es"
                            ? "Ingresa un correo válido."
                            : "Please enter a valid email."
                        );
                        return;
                      }
                      if (!leadSelectedOptions.length) {
                        setLeadFormError(
                          locale === "es"
                            ? "Selecciona una opción del servicio."
                            : "Please select a service option."
                        );
                        return;
                      }
                      if (!leadForm.visitTiming) {
                        setLeadFormError(
                          locale === "es"
                            ? "Completa los campos requeridos."
                            : "Please fill in the required fields."
                        );
                        return;
                      }
                      if (!leadForm.preferredChannel) {
                        setLeadFormError(
                          locale === "es"
                            ? "Selecciona un método de contacto."
                            : "Please select a preferred communication method."
                        );
                        return;
                      }
                      if (!validatePhoneNumber(leadForm.phone, leadForm.countryCode)) {
                        if (phoneRef.current) {
                          phoneRef.current.setCustomValidity(
                            locale === "es"
                              ? "Ingresa un número telefónico válido."
                              : "Please enter a valid phone number."
                          );
                        }
                        setLeadFormError(
                          locale === "es"
                            ? "Ingresa un número telefónico válido."
                            : "Please enter a valid phone number."
                        );
                        return;
                      }
                      if (phoneRef.current) phoneRef.current.setCustomValidity("");
                      if (emailRef.current) emailRef.current.setCustomValidity("");
                      setLeadFormError("");
                      setLeadStep("form2");
                    }}
                    className="flex-1 bg-black text-white py-2 rounded hover:bg-[#731a2f] transition"
                  >
                    {locale === "es" ? "Continuar" : "Continue"}
                  </button>

                  <button
                    type="button"
                    onClick={handleCloseLead}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:border-black transition"
                  >
                    {locale === "es" ? "Cancelar" : "Cancel"}
                  </button>
                </div>
              </div>
            )}

            {leadStep === "form2" && (
              <div className="sticky bottom-0 bg-white border-t border-gray-100 px-5 py-4">
                {duplicateMessage && (
                  <div className="mb-4">
                    <p className="text-sm text-green-700">{duplicateMessage}</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        locale === "es"
                          ? "Hola, ya envié mi solicitud para un tratamiento. Quiero agregar un detalle."
                          : "Hi, I already submitted a treatment request. I want to add a detail."
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-3 text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-[#731a2f] transition"
                    >
                      {locale === "es" ? "Enviar WhatsApp" : "Message us on WhatsApp"}
                    </a>
                  </div>
                )}
                {leadFormError && (
                  <p className="mb-3 text-sm text-red-600">{leadFormError}</p>
                )}
                <div className="flex gap-3">
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={async () => {
                      if (!leadForm.hadTreatmentBefore || !leadForm.bestDays || !leadForm.bestTimes) {
                        setLeadFormError(
                          locale === "es"
                            ? "Completa los campos requeridos."
                            : "Please fill in the required fields."
                        );
                        return;
                      }
                      setSubmitting(true);
                      try {
                        setDuplicateMessage("");
                        const leadId = generateLeadId();
                        const landingPagePath =
                          typeof window !== "undefined"
                            ? `${window.location.pathname}${window.location.search}`
                            : "";
                        const referrer =
                          (typeof window !== "undefined" &&
                            window.sessionStorage.getItem("mave_initial_referrer")) ||
                          initialReferrer.current ||
                          "direct";
                        const entryUrl =
                          (typeof window !== "undefined" &&
                            window.sessionStorage.getItem("mave_entry_url")) ||
                          entryUrlRef.current ||
                          "";
                        const entryPath =
                          (typeof window !== "undefined" &&
                            window.sessionStorage.getItem("mave_entry_path")) ||
                          entryPathRef.current ||
                          "";
                        const normalizedCountryCode = leadForm.countryCode.startsWith("+")
                          ? leadForm.countryCode
                          : `+${leadForm.countryCode}`;
                        const selectedOptionsLabel =
                          leadSelectedOptions.length > 0 ? leadSelectedOptions.join(" | ") : "";
                        const treatmentInterest = [leadService, selectedOptionsLabel]
                          .filter(Boolean)
                          .join(" | ");
                        const payload = {
                          leadId,
                          fullName: leadForm.firstName,
                          firstName: leadForm.firstName,
                          email: leadForm.email,
                          countryCode: normalizedCountryCode,
                          phone: leadForm.phone,
                          phoneNumber: leadForm.phone,
                          treatmentInterest,
                          funnelType: "treatment_booking",
                          whenToVisit: leadForm.visitTiming,
                          prefCom: leadForm.preferredChannel,
                          treatmentBefore: leadForm.hadTreatmentBefore,
                          bestDay: leadForm.bestDays,
                          bestTime: leadForm.bestTimes,
                          mainConcernGoal: leadForm.mainConcern,
                          utm_source: utmParams.source || "",
                          utm_medium: utmParams.medium || "",
                          utm_campaign: utmParams.campaign || "",
                          utm_term: utmParams.term || "",
                          utm_content: utmParams.content || "",
                          gclid: utmParams.gclid || "",
                          landingPagePath,
                          referrer,
                          entryUrl,
                          entryPath,
                          source: "treatment-page",
                          locale,
                        };

                        const response = await fetch("/api/lead-treatment", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(payload),
                        });

                        const resultText = await response.text().catch(() => "");
                        let result;
                        try {
                          result = JSON.parse(resultText);
                        } catch {
                          result = { raw: resultText };
                        }

                        if (!response.ok || !result?.success) {
                          throw new Error("Lead submit failed");
                        }

                        if (result?.sheetStatus === "duplicate") {
                          if (typeof window !== "undefined") {
                            window.sessionStorage.setItem(
                              "mave_treatment_inquiry",
                              JSON.stringify({
                                firstName: leadForm.firstName,
                                treatmentInterest,
                                category: leadCategory,
                                service: leadService,
                                options: leadSelectedOptions,
                                visitTiming: leadForm.visitTiming,
                                preferredChannel: leadForm.preferredChannel,
                                hadTreatmentBefore: leadForm.hadTreatmentBefore,
                                bestDays: leadForm.bestDays,
                                bestTimes: leadForm.bestTimes,
                                mainConcern: leadForm.mainConcern,
                                locale,
                              })
                            );
                          }
                          const thankYouPath =
                            locale === "es"
                              ? `/es/thank-you-treatment?service=${encodeURIComponent(
                                  leadService
                                )}&duplicate=1`
                              : `/thank-you-treatment?service=${encodeURIComponent(
                                  leadService
                                )}&duplicate=1`;
                          setDuplicateMessage(
                            locale === "es"
                              ? "Ya recibimos tu solicitud. Te llevaremos a confirmación."
                              : "We already received your request. Redirecting you to confirmation."
                          );
                          setLeadForm(initialLeadForm);
                          handleCloseLead();
                          router.push(thankYouPath);
                          return;
                        }

                        trackEvent("treatment_booking_submit", {
                          lead_source: utmParams.source || "direct",
                          treatment: leadService,
                          utm_source: utmParams.source,
                          utm_medium: utmParams.medium,
                          utm_campaign: utmParams.campaign,
                          utm_term: utmParams.term,
                          utm_content: utmParams.content,
                        });

                        if (typeof window !== "undefined") {
                          window.sessionStorage.setItem(
                            "mave_treatment_inquiry",
                            JSON.stringify({
                              firstName: leadForm.firstName,
                              treatmentInterest,
                              category: leadCategory,
                              service: leadService,
                              options: leadSelectedOptions,
                              visitTiming: leadForm.visitTiming,
                              preferredChannel: leadForm.preferredChannel,
                              hadTreatmentBefore: leadForm.hadTreatmentBefore,
                              bestDays: leadForm.bestDays,
                              bestTimes: leadForm.bestTimes,
                              mainConcern: leadForm.mainConcern,
                              locale,
                            })
                          );
                        }
                        setLeadSnapshot({
                          firstName: leadForm.firstName,
                          bestDay: leadForm.bestDays,
                          bestTime: leadForm.bestTimes,
                          treatmentInterest,
                        });
                        setLeadForm(initialLeadForm);
                        const thankYouPath =
                          locale === "es"
                            ? `/es/thank-you-treatment?service=${encodeURIComponent(leadService)}`
                            : `/thank-you-treatment?service=${encodeURIComponent(leadService)}`;
                        router.push(thankYouPath);
                      } catch (err) {
                        console.error("Lead submit error", err);
                        alert(
                          locale === "es"
                            ? "Hubo un error al enviar tu solicitud."
                            : "There was an error submitting your request."
                        );
                      } finally {
                        setSubmitting(false);
                      }
                    }}
                    className="flex-1 bg-black text-white py-2 rounded hover:bg-[#731a2f] transition"
                  >
                    {submitting
                      ? locale === "es"
                        ? "Enviando..."
                        : "Submitting..."
                      : locale === "es"
                      ? "Enviar"
                      : "Submit"}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setLeadFormError("");
                      setLeadStep("form1");
                    }}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:border-black transition"
                  >
                    {locale === "es" ? "Regresar" : "Back"}
                  </button>
                </div>
              </div>
            )}

            {leadStep === "channels" && (
              <div className="sticky bottom-0 bg-white border-t border-gray-100 px-5 py-4">
                <button
                  type="button"
                  onClick={handleCloseLead}
                  className="w-full border border-gray-300 text-gray-700 py-2 rounded hover:border-black transition"
                >
                  {locale === "es" ? "Cerrar" : "Close"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
