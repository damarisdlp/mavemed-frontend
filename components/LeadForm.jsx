import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { getActiveLeadForm, resolveLeadFormCopy } from "@/lib/data/leadForms";
import { validatePhoneNumber } from "@/lib/utils/phone";
import { getLeadAuthHeaders } from "@/lib/utils/leadAuthClient";

export default function LeadForm({ useSchedule = true } = {}) {
  const { t, i18n } = useTranslation("home");
  const locale = (i18n?.language || "en").toString();
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    countryCode: "+52",
    phone: "",
    primaryTreatment: "",
    primaryTreatmentOther: "",
    visitTiming: "",
    locationOrigin: "",
    locationOriginOther: "",
  });

  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    if (!showThanks) return;
    const onScroll = () => setShowThanks(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showThanks]);

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

      const submitData = {
        leadFormId: activeForm?.id || "rejuvenation",
        firstName: formData.firstName,
        email: formData.email,
        countryCode: formData.countryCode,
        phone: formData.phone,
        phoneNumber: formData.phone,
        primaryTreatmentInterest:
          formData.primaryTreatment === "Other"
            ? formData.primaryTreatmentOther || "Other"
            : formData.primaryTreatment,
        whenToVisit: formData.visitTiming,
        visitingFrom:
          formData.locationOrigin === "Other"
            ? formData.locationOriginOther || "Other"
            : formData.locationOrigin,
        primaryTreatment: formData.primaryTreatment,
        visitTiming: formData.visitTiming,
        locationOrigin: formData.locationOrigin,
      };

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...getLeadAuthHeaders() },
        body: JSON.stringify(submitData),
      });

      const resultText = await response.text();
      let result;
      try {
        result = JSON.parse(resultText);
      } catch {
        result = { raw: resultText };
      }

      if (response.ok) {
        setFormData({
          firstName: "",
          email: "",
          countryCode: "+52",
          phone: "",
          primaryTreatment: "",
          primaryTreatmentOther: "",
          visitTiming: "",
          locationOrigin: "",
          locationOriginOther: "",
        });
        setShowThanks(true);
      } else {
        alert(
          t("leadForm.error", { defaultValue: "There was an error. Please try again." }) +
            (result?.detail ? ` (${result.detail})` : "")
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        t("leadForm.error", {
          defaultValue: "There was an error submitting your form.",
        })
      );
    }
  };

  const inputClass =
    "border border-gray-300 text-black placeholder:text-black rounded px-3 py-2 w-full min-w-0 max-w-full focus:outline-none focus:ring-2 focus:ring-black";
  const inputGrayClass =
    "border border-gray-300 text-gray-700 rounded px-3 py-2 w-full min-w-0 max-w-full focus:outline-none focus:ring-2 focus:ring-black";
  const selectClass =
    "border border-gray-300 text-gray-700 rounded px-3 py-2 w-full min-w-0 max-w-full truncate focus:outline-none focus:ring-2 focus:ring-black";

  const defaultLeadForm = {
    id: "rejuvenation",
    titleKey: "leadForm.title",
    subtitleKey: "leadForm.subtitle",
  };
  const activeForm = useSchedule ? getActiveLeadForm() : defaultLeadForm;
  const { title: formTitle, subtitle: formSubtitle } = resolveLeadFormCopy({
    t,
    form: activeForm,
    locale,
  });

  return (
    <>
      <section
        className="bg-[#efeee7] w-full px-4 sm:px-6 py-3 justify-center items-center text-center relative overflow-x-hidden"
        data-lead-form
      >
        <div className="w-full max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-3 lg:gap-8 items-center min-w-0">
          <div className="min-w-0">
            <h2
              className="text-black font-serif font-medium mb-2 leading-snug text-[clamp(1.5rem,4vw,2.1rem)] max-w-full break-words"
              style={{ textWrap: "balance" }}
            >
              {formTitle}
            </h2>
            <p
              className="text-gray-700 text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: formSubtitle }}
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
              name="firstName"
              value={formData.firstName}
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
                      {opt.code}  {opt.label}
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
                  pattern="[0-9\\s\\-()+]{7,}"
                  onInvalid={(e) =>
                    e.currentTarget.setCustomValidity(
                      t("leadForm.phoneInvalid", {
                        defaultValue: "Please enter a valid phone number.",
                      })
                    )
                  }
                  onInput={(e) => e.currentTarget.setCustomValidity("")}
                  className={inputGrayClass}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col min-w-0">
              <label className="text-sm text-gray-700 flex items-center gap-1">
                {t("leadForm.primaryTreatment") || "Primary Treatment of Interest"}
                <span className="text-[#731a2f]">*</span>
              </label>
              <select
                name="primaryTreatment"
                value={formData.primaryTreatment}
                onChange={handleChange}
                className={selectClass}
                required
              >
                <option value="" disabled>
                  {t("leadForm.primaryTreatmentPrompt") || "Select one"}
                </option>
                {[
                  "Allergan Aesthetics Neuromodulator",
                  "Dermal Fillers",
                  "PLLA",
                  "RF Microneedling",
                  "Sylfirm X",
                  "Laser Hair Removal",
                  "Ultraformer MPT",
                  "PDO Threads",
                  "CO2 Laser",
                  "Facials",
                  "Body Contouring",
                  "Other",
                ].map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              {formData.primaryTreatment === "Other" && (
                <input
                  type="text"
                  name="primaryTreatmentOther"
                  value={formData.primaryTreatmentOther}
                  onChange={handleChange}
                  placeholder={t("leadForm.otherPrompt") || "Tell us more"}
                  className={`mt-2 ${inputGrayClass}`}
                />
              )}
            </div>

            <p className="text-xs text-gray-500 mt-2">
              {t("leadForm.requiredNote", { defaultValue: "Required fields" })}{" "}
              <span className="text-[#731a2f]">*</span>
              <br />
              {t("leadForm.disclaimer")}{" "}
              <Link href="/privacy" locale={locale} className="underline">
                {t("leadForm.privacyPolicy")}
              </Link>
              .
            </p>

            <button
              type="submit"
              className="bg-black text-white py-2.5 rounded-full hover:bg-[#731a2f] transition w-full"
            >
              {t("leadForm.subscribe")}
            </button>
          </form>
        </div>
      </section>

      {showThanks && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setShowThanks(false)}
        >
          <div
            className="bg-white rounded-xl shadow-xl max-w-sm w-full p-4 relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowThanks(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold text-black mb-2">
              {t("leadForm.thanksTitle", { defaultValue: "Thank you!" })}
            </h3>
            <p className="text-sm text-gray-700">
              {t("leadForm.thanksCopy", {
                defaultValue: "We received your details and will reach out shortly.",
              })}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
