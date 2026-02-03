import { validatePhoneNumber } from "@/lib/utils/phone";
import { getLeadAuthHeaders } from "@/lib/utils/leadAuthClient";
import { useTranslation } from "next-i18next";

const WHATSAPP_NUMBER = "526642077675";

const generateLeadId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `lead_${Date.now()}_${Math.random().toString(16).slice(2)}`;
};

export default function TreatmentLeadModal({
  open,
  locale,
  leadStep,
  leadForm,
  leadFormError,
  leadOptions,
  leadSelectedOptions,
  duplicateMessage,
  leadSnapshot,
  leadService,
  leadCategory,
  countryOptions,
  phoneRef,
  emailRef,
  submitting,
  setSubmitting,
  setLeadStep,
  setLeadFormError,
  setLeadSelectedOptions,
  setLeadForm,
  setLeadSnapshot,
  setDuplicateMessage,
  handleLeadChange,
  handleCloseLead,
  initialLeadForm,
  utmParams,
  initialReferrerRef,
  entryUrlRef,
  entryPathRef,
  trackEvent,
  router,
}) {
  const { t } = useTranslation("treatments");
  const tl = (key, options) => t(`treatmentLeadModal.${key}`, options);
  if (!open) return null;

  return (
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
            aria-label={tl("buttons.close")}
          >
            ✕
          </button>

          {leadStep === "form1" && (
            <>
              <h3 className="text-lg md:text-xl font-semibold text-black text-center leading-snug">
                {tl("requestInfo.title")}
              </h3>
              <p className="text-sm text-gray-600 text-center leading-snug mt-1">
                {tl("requestInfo.subtitle")}
              </p>
            </>
          )}

          {leadStep === "form2" && (
            <>
              <h3 className="text-lg md:text-xl font-semibold text-black text-center leading-snug">
                {tl("additionalDetails.title")}
              </h3>
              <p className="text-sm text-gray-600 text-center leading-snug mt-1">
                {tl("additionalDetails.subtitle")}
              </p>
            </>
          )}

          {leadStep === "channels" && (
            <>
              <h3 className="text-lg md:text-xl font-semibold text-black text-center leading-snug">
                {tl("chooseChat.title")}
              </h3>
              <p className="text-sm text-gray-600 text-center leading-snug mt-1">
                {tl("chooseChat.subtitle")}
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
                      {tl("labels.treatment")}
                    </p>
                    <p className="text-base font-semibold text-black break-words">{leadService}</p>
                  </div>
                  <label className="block text-sm text-gray-700 mb-1 break-words">
                    {tl("labels.serviceOptions")}{" "}
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
                      {tl("messages.selectOptions")}
                    </div>

                    <div className="max-h-40 overflow-y-auto pr-1 space-y-2">
                      {leadOptions.map((opt) => {
                        const checked = leadSelectedOptions.includes(opt.id);
                        return (
                          <label
                            key={opt.id}
                            className="flex items-start gap-3 cursor-pointer select-none"
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => {
                                setLeadFormError("");
                                setLeadSelectedOptions((prev) => {
                                  if (prev.includes(opt.id)) return prev.filter((x) => x !== opt.id);
                                  return [...prev, opt.id];
                                });
                              }}
                              className="mt-1"
                            />
                            <span className="text-sm text-gray-800 whitespace-normal break-words leading-snug">
                              {opt.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    {tl("messages.canChooseMultiple")}
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                    {tl("labels.name")}{" "}
                    <span className="text-[#731a2f]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={leadForm.firstName}
                    onChange={handleLeadChange}
                    placeholder={tl("placeholders.name")}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 placeholder:text-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                    {tl("labels.email")} <span className="text-[#731a2f]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={leadForm.email}
                    onChange={handleLeadChange}
                    placeholder={tl("placeholders.email")}
                    ref={emailRef}
                    onInvalid={(e) =>
                      e.currentTarget.setCustomValidity(
                        tl("messages.invalidEmail")
                      )
                    }
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 placeholder:text-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                    {tl("labels.countryCode")}{" "}
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
                    {tl("labels.phone")}{" "}
                    <span className="text-[#731a2f]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={leadForm.phone}
                    onChange={handleLeadChange}
                    placeholder={tl("placeholders.phone")}
                    ref={phoneRef}
                    pattern="[0-9\\s\\-()+]{7,}"
                    onInvalid={(e) =>
                      e.currentTarget.setCustomValidity(
                        tl("messages.invalidPhone")
                      )
                    }
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 placeholder:text-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                    {tl("labels.visitTiming")}
                    <span className="text-[#731a2f]">*</span>
                  </label>
                  <select
                    name="visitTiming"
                    value={leadForm.visitTiming}
                    onChange={handleLeadChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                    required
                  >
                    <option value="">{tl("options.select")}</option>
                    <option value={tl("options.visitTiming.thisWeek")}>
                      {tl("options.visitTiming.thisWeek")}
                    </option>
                    <option value={tl("options.visitTiming.thisMonth")}>
                      {tl("options.visitTiming.thisMonth")}
                    </option>
                    <option value={tl("options.visitTiming.withinThreeMonths")}>
                      {tl("options.visitTiming.withinThreeMonths")}
                    </option>
                    <option value={tl("options.visitTiming.justGathering")}>
                      {tl("options.visitTiming.justGathering")}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                    {tl("labels.preferredChannel")}
                    <span className="text-[#731a2f]">*</span>
                  </label>
                  <select
                    name="preferredChannel"
                    value={leadForm.preferredChannel}
                    onChange={handleLeadChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                    required
                  >
                    <option value="">{tl("options.select")}</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value={tl("options.preferredChannel.phoneCall")}>
                      {tl("options.preferredChannel.phoneCall")}
                    </option>
                    <option value={tl("options.preferredChannel.textMessage")}>
                      {tl("options.preferredChannel.textMessage")}
                    </option>
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
                    {tl("labels.hadTreatmentBefore")}
                    <span className="text-[#731a2f]">*</span>
                  </label>
                  <select
                    name="hadTreatmentBefore"
                    value={leadForm.hadTreatmentBefore}
                    onChange={handleLeadChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                    required
                  >
                    <option value="">{tl("options.select")}</option>
                    <option value={tl("options.yes")}>{tl("options.yes")}</option>
                    <option value={tl("options.no")}>{tl("options.no")}</option>
                    <option value={tl("options.notSure")}>{tl("options.notSure")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                    {tl("labels.bestDays")}
                    <span className="text-[#731a2f]">*</span>
                  </label>
                  <select
                    name="bestDays"
                    value={leadForm.bestDays}
                    onChange={handleLeadChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                    required
                  >
                    <option value="">{tl("options.select")}</option>
                    <option value={tl("options.bestDays.weekdays")}>
                      {tl("options.bestDays.weekdays")}
                    </option>
                    <option value={tl("options.bestDays.saturdays")}>
                      {tl("options.bestDays.saturdays")}
                    </option>
                    <option value={tl("options.bestDays.openAvailability")}>
                      {tl("options.bestDays.openAvailability")}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
                    {tl("labels.bestTimes")}
                    <span className="text-[#731a2f]">*</span>
                  </label>
                  <select
                    name="bestTimes"
                    value={leadForm.bestTimes}
                    onChange={handleLeadChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                    required
                  >
                    <option value="">{tl("options.select")}</option>
                    <option value={tl("options.bestTimes.mornings")}>
                      {tl("options.bestTimes.mornings")}
                    </option>
                    <option value={tl("options.bestTimes.noon")}>
                      {tl("options.bestTimes.noon")}
                    </option>
                    <option value={tl("options.bestTimes.afternoons")}>
                      {tl("options.bestTimes.afternoons")}
                    </option>
                    <option value={tl("options.bestTimes.openAvailability")}>
                      {tl("options.bestTimes.openAvailability")}
                    </option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-700 mb-1">
                    {tl("labels.mainConcern")}
                  </label>
                  <input
                    type="text"
                    name="mainConcern"
                    value={leadForm.mainConcern}
                    onChange={handleLeadChange}
                    placeholder={tl("placeholders.mainConcern")}
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
                    const msg = [
                      tl("whatsapp.intro", {
                        service: leadSnapshot?.treatmentInterest || leadService,
                      }),
                      leadSnapshot?.firstName || leadForm.firstName
                        ? tl("whatsapp.name", {
                            name: leadSnapshot?.firstName || leadForm.firstName,
                          })
                        : null,
                      leadSnapshot?.bestDay ||
                      leadSnapshot?.bestTime ||
                      leadForm.bestDays ||
                      leadForm.bestTimes
                        ? tl("whatsapp.preference", {
                            day: leadSnapshot?.bestDay || leadForm.bestDays || tl("whatsapp.anyDay"),
                            time:
                              leadSnapshot?.bestTime ||
                              leadForm.bestTimes ||
                              tl("whatsapp.anyTime"),
                          })
                        : null,
                    ]
                      .filter(Boolean)
                      .join(" ");

                    const link = `https://wa.me/+526642077675?text=${encodeURIComponent(msg)}`;
                    window.open(link, "_blank");
                    handleCloseLead();
                  }}
                >
                  {tl("buttons.whatsapp")}
                </button>

                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white py-2 rounded font-medium hover:opacity-90 transition"
                  onClick={() => {
                    window.open("https://www.instagram.com/mavemedicalspa", "_blank");
                    handleCloseLead();
                  }}
                >
                  {tl("buttons.instagram")}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer */}
        {leadStep === "form1" && (
          <div className="sticky bottom-0 bg-white border-t border-gray-100 px-5 py-4">
            {leadFormError && <p className="mb-3 text-sm text-red-600">{leadFormError}</p>}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  if (!leadForm.firstName.trim()) {
                    setLeadFormError(tl("messages.missingName"));
                    return;
                  }
                  if (emailRef.current && !emailRef.current.checkValidity()) {
                    setLeadFormError(tl("messages.invalidEmailShort"));
                    return;
                  }
                  if (!leadSelectedOptions.length) {
                    setLeadFormError(tl("messages.selectServiceOption"));
                    return;
                  }
                  if (!leadForm.visitTiming) {
                    setLeadFormError(tl("messages.requiredFields"));
                    return;
                  }
                  if (!leadForm.preferredChannel) {
                    setLeadFormError(tl("messages.selectPreferredChannel"));
                    return;
                  }
                  if (!validatePhoneNumber(leadForm.phone, leadForm.countryCode)) {
                    if (phoneRef.current) {
                      phoneRef.current.setCustomValidity(tl("messages.invalidPhone"));
                    }
                    setLeadFormError(tl("messages.invalidPhone"));
                    return;
                  }
                  if (phoneRef.current) phoneRef.current.setCustomValidity("");
                  if (emailRef.current) emailRef.current.setCustomValidity("");
                  setLeadFormError("");
                  setLeadStep("form2");
                }}
                className="flex-1 bg-black text-white py-2 rounded hover:bg-[#731a2f] transition"
              >
                {tl("buttons.continue")}
              </button>

              <button
                type="button"
                onClick={handleCloseLead}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:border-black transition"
              >
                {tl("buttons.cancel")}
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
                    tl("messages.duplicateIntro")
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-[#731a2f] transition"
                >
                  {tl("buttons.whatsapp")}
                </a>
              </div>
            )}
            {leadFormError && <p className="mb-3 text-sm text-red-600">{leadFormError}</p>}
            <div className="flex gap-3">
              <button
                type="button"
                disabled={submitting}
                onClick={async () => {
                  if (!leadForm.hadTreatmentBefore || !leadForm.bestDays || !leadForm.bestTimes) {
                    setLeadFormError(tl("messages.requiredFields"));
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
                      initialReferrerRef.current ||
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
                      leadSelectedOptions.length > 0
                        ? leadOptions
                            .filter((opt) => leadSelectedOptions.includes(opt.id))
                            .map((opt) => opt.label)
                            .join(" | ")
                        : "";
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
                      headers: { "Content-Type": "application/json", ...getLeadAuthHeaders() },
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
                            options: leadOptions
                              .filter((opt) => leadSelectedOptions.includes(opt.id))
                              .map((opt) => opt.label),
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
                      setDuplicateMessage(tl("messages.duplicateNotice"));
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
                          options: leadOptions
                            .filter((opt) => leadSelectedOptions.includes(opt.id))
                            .map((opt) => opt.label),
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
                    alert(tl("messages.submitError"));
                  } finally {
                    setSubmitting(false);
                  }
                }}
                className="flex-1 bg-black text-white py-2 rounded hover:bg-[#731a2f] transition"
              >
                {submitting ? tl("buttons.submitting") : tl("buttons.submit")}
              </button>

              <button
                type="button"
                onClick={() => {
                  setLeadFormError("");
                  setLeadStep("form1");
                }}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded hover:border-black transition"
              >
                {tl("buttons.back")}
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
              {tl("buttons.close")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
