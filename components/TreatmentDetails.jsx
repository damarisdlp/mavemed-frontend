import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { AccordionToggle } from "./AccordionToggle";

export default function TreatmentDetails({ treatment }) {
  const { locale: routerLocale } = useRouter();
  const locale = routerLocale || "en";

  const [leadOpen, setLeadOpen] = useState(false);
  const [leadStep, setLeadStep] = useState("form");
  const [leadService, setLeadService] = useState("");
  const [leadForm, setLeadForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsappOptIn: true,
  });
  const [submitting, setSubmitting] = useState(false);

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
                  setLeadService(getLocalized(treatment.serviceDisplayName));
                  setLeadStep("form");
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
                    setLeadService(firstOptionName || getLocalized(treatment.serviceDisplayName));
                    setLeadStep("form");
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
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xl p-6 relative">
            <button
              type="button"
              onClick={() => setLeadOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              aria-label="Close"
            >
              ✕
            </button>

            {leadStep === "form" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-black text-center">
                  {locale === "es" ? "Solicitar información" : "Request information"}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {locale === "es"
                    ? "Comparte tus datos y te contactaremos enseguida."
                    : "Share your details and we’ll reach out right away."}
                </p>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      {locale === "es" ? "Servicio" : "Service"}
                    </label>
                    <input
                      type="text"
                      value={leadService}
                      disabled
                      className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-700 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      {locale === "es" ? "Nombre" : "First Name"}
                    </label>
                    <input
                      type="text"
                      value={leadForm.firstName}
                      onChange={(e) => setLeadForm({ ...leadForm, firstName: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      {locale === "es" ? "Apellido" : "Last Name"}
                    </label>
                    <input
                      type="text"
                      value={leadForm.lastName}
                      onChange={(e) => setLeadForm({ ...leadForm, lastName: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      {locale === "es" ? "Teléfono" : "Phone"}
                    </label>
                    <input
                      type="tel"
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-1">
                      {locale === "es" ? "¿Tiene WhatsApp?" : "Do you have WhatsApp?"}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-700">
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="whatsappOptIn"
                          checked={leadForm.whatsappOptIn === true}
                          onChange={() => setLeadForm({ ...leadForm, whatsappOptIn: true })}
                        />
                        {locale === "es" ? "Sí" : "Yes"}
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="whatsappOptIn"
                          checked={leadForm.whatsappOptIn === false}
                          onChange={() => setLeadForm({ ...leadForm, whatsappOptIn: false })}
                        />
                        {locale === "es" ? "No" : "No"}
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={submitting}
                  onClick={async () => {
                    setSubmitting(true);
                    try {
                      await fetch("/api/lead", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          ...leadForm,
                          whatsapp: leadForm.whatsappOptIn ? "Yes" : "No",
                          whatsappOptIn: leadForm.whatsappOptIn ? "Yes" : "No",
                          fullName: `${leadForm.firstName || ""} ${leadForm.lastName || ""}`.trim(),
                          service: leadService,
                          source: "promo-inquiry",
                          locale,
                        }),
                      });
                      setLeadStep("channels");
                    } catch (err) {
                      console.error("Lead submit error", err);
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                  className="w-full bg-black text-white py-2 rounded hover:bg-[#731a2f] transition"
                >
                  {submitting
                    ? locale === "es"
                      ? "Enviando..."
                      : "Submitting..."
                    : locale === "es"
                    ? "Siguiente"
                    : "Next"}
                </button>
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
                          ? `Hola, me interesa la promo de ${leadService}. Mi nombre es ${`${leadForm.firstName || ""} ${leadForm.lastName || ""}`.trim()}, mi correo es ${leadForm.email || ""} y mi teléfono es ${leadForm.phone || ""}.`
                          : `Hi, I'm interested in the ${leadService} promo. My name is ${`${leadForm.firstName || ""} ${leadForm.lastName || ""}`.trim()}, my email is ${leadForm.email || ""}, and my phone is ${leadForm.phone || ""}.`;
                      const link = `https://wa.me/+526642077675?text=${encodeURIComponent(msg)}`;
                      window.open(link, "_blank");
                      setLeadOpen(false);
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
