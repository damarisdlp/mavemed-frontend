import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { AccordionToggle } from "./AccordionToggle";

export default function TreatmentDetails({ treatment }) {
  const { locale: routerLocale } = useRouter();
  const locale = routerLocale || "en";

  const [leadOpen, setLeadOpen] = useState(false);
  const [leadStep, setLeadStep] = useState("form1");
  const [leadService, setLeadService] = useState("");
  const initialLeadForm = {
    firstName: "",
    email: "",
    countryCode: "+52",
    phone: "",
    visitTiming: "",
    locationOrigin: "",
    locationOriginOther: "",
    preferredChannel: "WhatsApp",
    hadTreatmentBefore: "",
    bestDays: "",
    bestTimes: "",
    mainConcern: "",
  };

  const [leadForm, setLeadForm] = useState(initialLeadForm);
  const [leadSnapshot, setLeadSnapshot] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

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
      setLeadForm((prev) => ({ ...prev, countryCode: "+1", preferredChannel: "WhatsApp" }));
    } else if (localeStr.startsWith("es-MX")) {
      setLeadForm((prev) => ({ ...prev, countryCode: "+52", preferredChannel: "WhatsApp" }));
    }
  }, []);

  const getLocalized = (field) => {
    if (field == null) return ""; // handles null and undefined

    // If it is a localized object like { en: "...", es: "..." }
    if (typeof field === "object") {
      if (field[locale]) return field[locale];
      if (field.en) return field.en;
      // Explicitly avoid returning the object itself
      return "";
    }

    // For plain strings or numbers
    return field;
  };

  const getLocalizedPrice = (field) => {
    if (field == null) return "";
    if (typeof field === "object") {
      return getLocalized(field);
    }
    return field;
  };

  const handleLeadChange = (e) => {
    const { name, value } = e.target;
    setLeadForm((prev) => ({ ...prev, [name]: value }));
    if (name === "phone" && phoneRef.current) {
      phoneRef.current.setCustomValidity("");
    }
    if (name === "email" && emailRef.current) {
      emailRef.current.setCustomValidity("");
    }
  };

  const pricing = treatment?.pricing || {};
  const promoDetails =
    treatment?.isPromoActive && treatment?.promoDetails ? treatment.promoDetails : null;

  const parsePriceValue = (priceString) => {
    const priceText = getLocalizedPrice(priceString);
    if (typeof priceText !== "string") return Infinity;
    const numeric = parseFloat(priceText.replace(/[^0-9.]/g, ""));
    return Number.isFinite(numeric) ? numeric : Infinity;
  };

  const priceCandidates = [];
  if (pricing?.startingPrice) {
    priceCandidates.push({
      value: parsePriceValue(pricing.startingPrice),
      display: `${getLocalizedPrice(pricing.startingPrice)} ${
        pricing.startingPriceCurrency || ""
      }`.trim()
    });
  }
  (pricing?.options || []).forEach((opt) => {
    if (opt?.optionPrice) {
      priceCandidates.push({
        value: parsePriceValue(opt.optionPrice),
        display: `${getLocalizedPrice(opt.optionPrice)} ${
          opt.optionCurrency || ""
        }`.trim()
      });
    }
  });

  const sortedPrices = priceCandidates
    .filter((p) => p.value !== Infinity)
    .sort((a, b) => a.value - b.value);
  const lowestPriceDisplay =
    sortedPrices[0]?.display ||
    `${getLocalizedPrice(pricing.startingPrice) || ""} ${pricing.startingPriceCurrency || ""}`.trim();
  const showStartingLabel = sortedPrices.length > 1;
  const startingPriceText = showStartingLabel
    ? `${locale === "es" ? "Desde" : "Starting from"} ${lowestPriceDisplay}`
    : lowestPriceDisplay;

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[50vh]">
        {/* Image */}
        <div className="relative w-full h-[80vh]">
          <Image
            src={treatment.images?.primary || "/placeholder.jpg"}
            alt={`Treatment image for ${getLocalized(
              treatment.serviceDisplayName
            )}`}
            fill
            className="object-cover [object-position:center_55%] [object-position:0%_60%]"
            priority
          />
        </div>

        {/* Content */}
        <div className="w-full text-black px-6 md:px-12 py-5 flex flex-col justify-center">
          <div className="mb-4">
            <p className="text-sm text-gray-500">
              <Link
                href="/treatments"
                className="hover:underline hover:text-black"
              >
                {locale === "es" ? "Tratamientos" : "Treatments"}
              </Link>{" "}
              /{" "}
              <Link
                href={`/treatments/#${getLocalized(
                  treatment.categoryDisplayName
                )
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="hover:underline hover:text-black"
              >
                {getLocalized(treatment.categoryDisplayName)}
              </Link>{" "}
              /{" "}
              <Link
                href={`/treatments/${treatment.urlSlug}`}
                className="text-gray-700 underline"
              >
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
          <div className={`grid ${promoDetails ? "grid-cols-2" : "grid-cols-1"} gap-4 mb-6 items-start`}>
            <div className="border border-gray-200 bg-[#f9f9f9] p-5 rounded-lg shadow-sm flex flex-col items-center text-left space-y-2">
              <h2 className="text-md font-semibold text-black">
                {locale === "es" ? "Precio" : "Price"}
              </h2>
              <p className="text-gray-700">{startingPriceText}</p>
              <button
                type="button"
                onClick={() => {
                  const serviceText = `${getLocalized(treatment.serviceDisplayName)}`;
                  setLeadService(serviceText);
                  setLeadStep("form1");
                  setLeadOpen(true);
                }}
                className="mt-2 inline-block w-full text-center bg-white text-black border border-black hover:bg-black hover:text-white font-medium py-2 rounded transition duration-200"
              >
                {locale === "es" ? "Agendar" : "Book Now"}
              </button>
            </div>

            {promoDetails && (
              <div className="border border-[#731a2f] bg-[#731a2f] text-white p-5 rounded-lg shadow-md flex flex-col items-center text-center space-y-2">
                <h2 className="text-md font-semibold">
                  {getLocalized(promoDetails.headline) ||
                    (locale === "es" ? "Precio Exclusivo" : "Exclusive Pricing")}
                </h2>
                {promoDetails.validTill && (
                  <p className="text-xs text-white/80">
                    {locale === "es" ? "Válido hasta" : "Valid until"}{" "}
                    {getLocalized(promoDetails.validTill)}
                  </p>
                )}
                {promoDetails.description && (
                  <p className="text-white text-sm">
                    {getLocalized(promoDetails.description)}
                  </p>
                )}
                {Array.isArray(promoDetails.options) && promoDetails.options.length > 0 && (
                  <div className="mt-1 space-y-2 w-full text-left">
                    {promoDetails.options.map((opt, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-white border border-white/30 rounded p-2 bg-white/10"
                      >
                        <div className="font-semibold">{getLocalized(opt.optionName)}</div>
                        <div className="text-white">
                          {opt.optionPromoPrice ? opt.optionPromoPrice : ""}
                          {opt.optionPromoPriceCurrency ? ` ${opt.optionPromoPriceCurrency}` : ""}
                        </div>
                        {opt.notes?.length > 0 && (
                          <ul className="text-xs text-white/80 list-disc list-inside mt-1 space-y-1">
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
                  onClick={() => {
                    const firstOptionName = promoDetails.options?.[0]?.optionName
                      ? getLocalized(promoDetails.options[0].optionName)
                      : getLocalized(treatment.serviceDisplayName);
                    const priceText = promoDetails.options?.[0]?.optionPromoPrice
                      ? `${promoDetails.options[0].optionPromoPrice}${
                          promoDetails.options[0].optionPromoPriceCurrency
                            ? ` ${promoDetails.options[0].optionPromoPriceCurrency}`
                            : ""
                        }`
                      : "";
                    const serviceText = priceText
                      ? `${firstOptionName} – ${priceText}`
                      : `${firstOptionName}`;
                    setLeadService(serviceText || getLocalized(treatment.serviceDisplayName));
                    setLeadStep("form1");
                    setLeadOpen(true);
                  }}
                  className="mt-2 inline-block w-full text-center bg-white text-black border border-white hover:bg-transparent hover:text-white font-medium py-2 rounded transition duration-200"
                >
                  {locale === "es" ? "Consultar Promo" : "Inquire about promo"}
                </button>
              </div>
            )}
          </div>

          {/* Notes */}
          {treatment.notes?.length > 0 && (
            <ul className="text-sm text-gray-600 italic mb-4 space-y-1 list-disc list-outside pl-5">
              {treatment.notes.map((note, idx) => (
                <li key={idx}>{getLocalized(note)}</li>
              ))}
            </ul>
          )}

          {/* Accordion Details */}
          {treatment.details && (
            <AccordionToggle
              title={locale === "es" ? "Detalles" : "Details"}
            >
              <p className="text-gray-700">
                {getLocalized(treatment.details)}
              </p>
            </AccordionToggle>
          )}

          {treatment.goals?.length > 0 && (
            <AccordionToggle
              title={locale === "es" ? "Objetivos" : "Goals"}
            >
              <ul className="list-disc list-inside text-gray-700">
                {treatment.goals.map((goal, idx) => (
                  <li key={idx}>{getLocalized(goal)}</li>
                ))}
              </ul>
            </AccordionToggle>
          )}

          {treatment.treatableAreas?.length > 0 && (
            <AccordionToggle
              title={
                locale === "es"
                  ? "Zonas Tratables"
                  : "Treatable Areas"
              }
            >
              <ul className="list-disc list-inside text-gray-700">
                {treatment.treatableAreas.map((area, idx) => (
                  <li key={idx}>{getLocalized(area)}</li>
                ))}
              </ul>
            </AccordionToggle>
          )}

          <AccordionToggle
            title={
              locale === "es"
                ? "Sucursales Disponibles"
                : "Available Locations"
            }
          >
            <p className="text-gray-700">Tijuana, B.C.</p>
          </AccordionToggle>
        </div>
      </div>

      {leadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                setLeadOpen(false);
                setLeadStep("form1");
                setLeadForm(initialLeadForm);
                setLeadSnapshot(null);
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              aria-label="Close"
            >
              ✕
            </button>

            {leadStep === "form1" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-black text-center">
                  {locale === "es" ? "Solicitar información" : "Request information"}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {locale === "es"
                    ? "Comparte tus datos y te contactaremos enseguida."
                    : "Share your details and we’ll reach out right away."}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-700 mb-1">
                      {locale === "es" ? "Tratamiento" : "Treatment"}
                    </label>
                    <input
                      type="text"
                      value={leadService}
                      readOnly
                      className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-700 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                      {locale === "es" ? "Nombre" : "First Name"}
                      <span className="text-[#731a2f]">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={leadForm.firstName}
                      onChange={handleLeadChange}
                      placeholder={locale === "es" ? "Nombre" : "First Name"}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-black placeholder:text-black"
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
                      className="w-full border border-gray-300 rounded px-3 py-2 text-black placeholder:text-black"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                      {locale === "es" ? "Código de país" : "Country code"}
                      <span className="text-[#731a2f]">*</span>
                    </label>
                    <select
                      name="countryCode"
                      value={leadForm.countryCode}
                      onChange={handleLeadChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
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
                      {locale === "es" ? "Teléfono" : "Phone"}
                      <span className="text-[#731a2f]">*</span>
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
                      className="w-full border border-gray-300 rounded px-3 py-2 text-black placeholder:text-black"
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
                      {locale === "es" ? "¿De dónde nos visitas?" : "Are you local or traveling from the U.S.?"}
                      <span className="text-[#731a2f]">*</span>
                    </label>
                    <select
                      name="locationOrigin"
                      value={leadForm.locationOrigin}
                      onChange={handleLeadChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                      required
                    >
                      <option value="">{locale === "es" ? "Selecciona" : "Select"}</option>
                      <option value="Tijuana">Tijuana</option>
                      <option value="San Diego">San Diego</option>
                      <option value="Los Angeles">Los Angeles</option>
                      <option value="Other">{locale === "es" ? "Otro" : "Other"}</option>
                    </select>
                    {leadForm.locationOrigin === "Other" && (
                      <input
                        type="text"
                        name="locationOriginOther"
                        value={leadForm.locationOriginOther}
                        onChange={handleLeadChange}
                        placeholder={locale === "es" ? "¿De dónde nos visitas?" : "Where are you visiting from?"}
                        className="mt-2 w-full border border-gray-300 rounded px-3 py-2 text-black placeholder:text-black"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      {locale === "es" ? "Método de contacto preferido" : "Preferred communication method"}
                    </label>
                    <select
                      name="preferredChannel"
                      value={leadForm.preferredChannel}
                      onChange={handleLeadChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                    >
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone call">{locale === "es" ? "Llamada" : "Phone call"}</option>
                      <option value="Text message">{locale === "es" ? "Mensaje de texto" : "Text message"}</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (!leadForm.firstName.trim()) {
                        alert(locale === "es" ? "Ingresa tu nombre." : "Please enter your name.");
                        return;
                      }
                      if (emailRef.current && !emailRef.current.checkValidity()) {
                        emailRef.current.reportValidity();
                        return;
                      }
                      if (!leadForm.visitTiming || !leadForm.locationOrigin) {
                        alert(
                          locale === "es"
                            ? "Completa los campos requeridos."
                            : "Please fill in the required fields."
                        );
                        return;
                      }
                      const digitsOnly = (leadForm.phone || "").replace(/\D/g, "");
                      if (digitsOnly.length < 7) {
                        if (phoneRef.current) {
                          phoneRef.current.setCustomValidity(
                            locale === "es"
                              ? "Ingresa un número telefónico válido."
                              : "Please enter a valid phone number."
                          );
                          phoneRef.current.reportValidity();
                        }
                        return;
                      }
                      if (phoneRef.current) phoneRef.current.setCustomValidity("");
                      if (emailRef.current) emailRef.current.setCustomValidity("");
                      setLeadStep("form2");
                    }}
                    className="flex-1 bg-black text-white py-2 rounded hover:bg-[#731a2f] transition"
                  >
                    {locale === "es" ? "Continuar" : "Continue"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLeadOpen(false);
                      setLeadStep("form1");
                    }}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:border-black transition"
                  >
                    {locale === "es" ? "Cancelar" : "Cancel"}
                  </button>
                </div>
              </div>
            )}

            {leadStep === "form2" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-black text-center">
                  {locale === "es" ? "Detalles adicionales" : "Additional details"}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {locale === "es"
                    ? "Ayúdanos a preparar tu visita."
                    : "Help us tailor your visit."}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      {locale === "es" ? "¿Has tenido este tratamiento?" : "Have you had this treatment before?"}
                    </label>
                    <select
                      name="hadTreatmentBefore"
                      value={leadForm.hadTreatmentBefore}
                      onChange={handleLeadChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                    >
                      <option value="">{locale === "es" ? "Selecciona" : "Select"}</option>
                      <option value={locale === "es" ? "Sí" : "Yes"}>
                        {locale === "es" ? "Sí" : "Yes"}
                      </option>
                      <option value={locale === "es" ? "No" : "No"}>
                        {locale === "es" ? "No" : "No"}
                      </option>
                      <option value={locale === "es" ? "No estoy seguro" : "Not sure"}>
                        {locale === "es" ? "No estoy seguro" : "Not sure"}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      {locale === "es" ? "Mejores días" : "Best days"}
                    </label>
                    <select
                      name="bestDays"
                      value={leadForm.bestDays}
                      onChange={handleLeadChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                    >
                      <option value="">{locale === "es" ? "Selecciona" : "Select"}</option>
                      <option value={locale === "es" ? "Días de semana" : "Weekdays"}>
                        {locale === "es" ? "Días de semana" : "Weekdays"}
                      </option>
                      <option value={locale === "es" ? "Sábados (día ocupado)" : "Saturdays, busy day"}>
                        {locale === "es" ? "Sábados (día ocupado)" : "Saturdays, busy day"}
                      </option>
                      <option value={locale === "es" ? "Disponibilidad abierta" : "Open availability"}>
                        {locale === "es" ? "Disponibilidad abierta" : "Open availability"}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      {locale === "es" ? "Mejores horarios" : "Best times"}
                    </label>
                    <select
                      name="bestTimes"
                      value={leadForm.bestTimes}
                      onChange={handleLeadChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
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
                      className="w-full border border-gray-300 rounded px-3 py-2 text-black placeholder:text-black"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={async () => {
                      const visitingFrom =
                        leadForm.locationOrigin === "Other"
                          ? leadForm.locationOriginOther || "Other"
                          : leadForm.locationOrigin;
                      setSubmitting(true);
                      try {
                        const payload = {
                          firstName: leadForm.firstName,
                          email: leadForm.email,
                          countryCode: leadForm.countryCode,
                          phone: leadForm.phone,
                          phoneNumber: leadForm.phone,
                          treatmentInterest: leadService,
                          whenToVisit: leadForm.visitTiming,
                          visitingFrom,
                          prefCom: leadForm.preferredChannel,
                          treatmentBefore: leadForm.hadTreatmentBefore,
                          bestDay: leadForm.bestDays,
                          bestTime: leadForm.bestTimes,
                          mainConcernGoal: leadForm.mainConcern,
                          source: "treatment-page",
                          locale,
                        };

                        await fetch("/api/lead-treatment", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(payload),
                        });
                        setLeadSnapshot({
                          firstName: leadForm.firstName,
                          bestDay: leadForm.bestDays,
                          bestTime: leadForm.bestTimes,
                        });
                        setLeadStep("channels");
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
                    onClick={() => setLeadStep("form1")}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:border-black transition"
                  >
                    {locale === "es" ? "Regresar" : "Back"}
                  </button>
                </div>
              </div>
            )}

            {leadStep === "channels" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-black text-center">
                  {locale === "es" ? "Elige cómo chatear" : "Choose how to chat"}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {locale === "es"
                    ? "Selecciona WhatsApp o Instagram para continuar la conversación."
                    : "Pick WhatsApp or Instagram to continue the conversation."}
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    className="w-full bg-[#25D366] text-white py-2 rounded font-medium hover:opacity-90 transition"
                    onClick={() => {
                      const msg =
                        locale === "es"
                          ? [
                              `Hola, me interesa ${leadService}.`,
                              leadSnapshot?.firstName || leadForm.firstName
                                ? `Mi nombre es ${leadSnapshot?.firstName || leadForm.firstName}.`
                                : null,
                              leadSnapshot?.bestDay || leadSnapshot?.bestTime || leadForm.bestDays || leadForm.bestTimes
                                ? `Prefiero ${leadSnapshot?.bestDay || leadForm.bestDays || "cualquier día"} y ${leadSnapshot?.bestTime || leadForm.bestTimes || "cualquier horario"}.`
                                : null,
                            ]
                              .filter(Boolean)
                              .join(" ")
                          : [
                              `Hi, I'm interested in ${leadService}.`,
                              leadSnapshot?.firstName || leadForm.firstName
                                ? `My name is ${leadSnapshot?.firstName || leadForm.firstName}.`
                                : null,
                              leadSnapshot?.bestDay || leadSnapshot?.bestTime || leadForm.bestDays || leadForm.bestTimes
                                ? `I prefer ${leadSnapshot?.bestDay || leadForm.bestDays || "any day"} and ${leadSnapshot?.bestTime || leadForm.bestTimes || "any time"}.`
                                : null,
                            ]
                              .filter(Boolean)
                              .join(" ");
                      const link = `https://wa.me/+526642077675?text=${encodeURIComponent(msg)}`;
                      window.open(link, "_blank");
                      setLeadOpen(false);
                      setLeadForm(initialLeadForm);
                      setLeadSnapshot(null);
                      setLeadStep("form1");
                    }}
                  >
                    WhatsApp
                  </button>
                  <button
                    type="button"
                    className="w-full bg-gradient-to-r from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white py-2 rounded font-medium hover:opacity-90 transition"
                    onClick={() => {
                      window.open("https://www.instagram.com/mavemedicalspa", "_blank");
                      setLeadOpen(false);
                      setLeadForm(initialLeadForm);
                      setLeadSnapshot(null);
                      setLeadStep("form1");
                    }}
                  >
                    Instagram
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
