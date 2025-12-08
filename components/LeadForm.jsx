import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";

export default function LeadForm() {
  const { t } = useTranslation("home");
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
    const locale = navigator?.language || "";
    if (locale.startsWith("en-US") || locale.startsWith("en-CA")) {
      setFormData((prev) => ({ ...prev, countryCode: "+1" }));
    } else if (locale.startsWith("es-MX")) {
      setFormData((prev) => ({ ...prev, countryCode: "+52" }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "phone" && phoneRef.current) {
      phoneRef.current.setCustomValidity("");
    }
    if (name === "email" && emailRef.current) {
      emailRef.current.setCustomValidity("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const phoneEl = phoneRef.current;
      const digitsOnly = (formData.phone || "").replace(/\D/g, "");
      if (digitsOnly.length < 7) {
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
      if (phoneEl) {
        phoneEl.setCustomValidity("");
      }
      if (emailRef.current) {
        emailRef.current.setCustomValidity("");
      }

      const submitData = {
        firstName: formData.firstName,
        email: formData.email,
        countryCode: formData.countryCode,
        phone: formData.phone,
        phoneNumber: formData.phone, // sheet expects phoneNumber without combining country code
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
        headers: { "Content-Type": "application/json" },
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
          t("leadForm.error", {
            defaultValue: "There was an error. Please try again.",
          }) +
            (result?.detail ? ` (${result.detail})` : "")
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        t("leadForm.error", { defaultValue: "There was an error submitting your form." })
      );
    }
  };

  return (
    <>
      <section className="bg-[#efeee7] w-full px-4 sm:px-6 py-6 justify-center items-center text-center relative">
        <div className="w-full max-w-screen-xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2
              className="text-black font-serif font-medium mb-3 leading-snug text-[clamp(1.6rem,4.5vw,2.3rem)] max-w-full break-words"
              style={{ textWrap: "balance" }}
            >
              {t("leadForm.title")}
            </h2>
            <p className="text-gray-700 text-base md:text-m">
              {t("leadForm.subtitle")}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md grid gap-4 text-left"
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
              className="border border-gray-300 text-black placeholder:text-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
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
              className="border border-gray-300 text-black placeholder:text-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3">
              <div className="flex flex-col">
                <label className="text-sm text-gray-700 flex items-center gap-1">
                  {t("leadForm.countryCode") || "Country Code"}
                  <span className="text-[#731a2f]">*</span>
                </label>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                >
                  {countryOptions.map((opt) => (
                    <option key={opt.code} value={opt.code}>
                      {opt.code} — {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
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
              className="border border-gray-300 text-gray-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-700 flex items-center gap-1">
                {t("leadForm.primaryTreatment") || "Primary Treatment of Interest"}
                <span className="text-[#731a2f]">*</span>
              </label>
              <select
                name="primaryTreatment"
                value={formData.primaryTreatment}
                onChange={handleChange}
                className="border border-gray-300 text-gray-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                required
              >
                <option value="" disabled>
                  {t("leadForm.primaryTreatmentPrompt") || "Select one"}
                </option>
                {[
                  "Botox",
                  "Dermal Fillers",
                  "Sculptra",
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
                  className="mt-2 border border-gray-300 text-gray-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-700 flex items-center gap-1">
                {t("leadForm.visitTiming") || "When would you like to visit?"}
                <span className="text-[#731a2f]">*</span>
              </label>
              <select
                name="visitTiming"
                value={formData.visitTiming}
                onChange={handleChange}
                className="border border-gray-300 text-gray-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                required
              >
                <option value="" disabled>
                  {t("leadForm.visitTimingPrompt") || "Select one"}
                </option>
                <option value="This week">This week</option>
                <option value="This month">This month</option>
                <option value="Within 3 months">Within 3 months</option>
                <option value="Just gathering information">Just gathering information</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-700 flex items-center gap-1">
                {t("leadForm.locationOrigin") || "Are you local or traveling?"}
                <span className="text-[#731a2f]">*</span>
              </label>
              <select
                name="locationOrigin"
                value={formData.locationOrigin}
                onChange={handleChange}
                className="border border-gray-300 text-gray-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                required
              >
                <option value="" disabled>
                  {t("leadForm.locationOriginPrompt") || "Select one"}
                </option>
                <option value="Tijuana">Tijuana</option>
                <option value="San Diego">San Diego</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Other">Other</option>
              </select>
              {formData.locationOrigin === "Other" && (
                <input
                  type="text"
                  name="locationOriginOther"
                  value={formData.locationOriginOther}
                  onChange={handleChange}
                  placeholder={t("leadForm.otherLocationPrompt") || "City or region"}
                  className="mt-2 border border-gray-300 text-gray-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              )}
            </div>

            <p className="text-xs text-gray-500 mt-2">
              {t("leadForm.requiredNote", { defaultValue: "Required fields" })}{" "}
              <span className="text-[#731a2f]">*</span>
              <br />
              {t("leadForm.disclaimer")}{" "}
              <a href="/privacy-policy" className="underline">
                {t("leadForm.privacyPolicy")}
              </a>
              .
            </p>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-full hover:bg-[#731a2f] transition"
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
            className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6 relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowThanks(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              aria-label="Close"
            >
              ✕
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
