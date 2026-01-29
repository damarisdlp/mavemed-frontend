import { useEffect, useMemo, useState, useRef } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { validatePhoneNumber } from "@/lib/utils/phone";

export default function FreebiePopup() {
  const router = useRouter();
  const { i18n } = useTranslation();

  const isSpanish = useMemo(() => {
    const byRouter =
      typeof router.locale === "string" &&
      router.locale.toLowerCase().startsWith("es");
    if (byRouter) return true;

    const byI18n =
      typeof i18n?.language === "string" &&
      i18n.language.toLowerCase().startsWith("es");
    if (byI18n) return true;

    if (typeof window !== "undefined") {
      const byPath = window.location.pathname.toLowerCase().startsWith("/es");
      if (byPath) return true;

      const htmlLang = document?.documentElement?.lang || "";
      if (htmlLang.toLowerCase().startsWith("es")) return true;
    }

    return false;
  }, [router.locale, i18n?.language]);

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const sessionKey = useMemo(
    () => (isSpanish ? "mave_freebie_popup_seen_es" : "mave_freebie_popup_seen_en"),
    [isSpanish]
  );

  // Lock the language used for submission at the moment the popup opens,
  // so toggling languages mid-flight cannot submit to the wrong endpoint.
  const submitLangRef = useRef("en");

  // Reset UI state on language toggle, prevent stale success message,
  // and allow popup to show again under the other language.
  useEffect(() => {
    setStatus({ type: "", message: "" });
    setIsSubmitting(false);
    setForm({ name: "", email: "", phone: "", company: "" });
    setIsOpen(false);

    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("mave_freebie_popup_seen_en");
      window.sessionStorage.removeItem("mave_freebie_popup_seen_es");
    }
  }, [isSpanish]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasSeen = window.sessionStorage.getItem(sessionKey);
    if (!hasSeen) {
      submitLangRef.current = isSpanish ? "es" : "en";
      setIsOpen(true);
      window.sessionStorage.setItem(sessionKey, "1");
    }
  }, [sessionKey, isSpanish]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setStatus({ type: "", message: "" });
    setIsSubmitting(false);
    setForm({ name: "", email: "", phone: "", company: "" });
    setIsOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const submitLang = submitLangRef.current; // "en" or "es"
    const submitIsSpanish = submitLang === "es";

    if (!form.name || !form.email || !form.phone) {
      setStatus({
        type: "error",
        message: submitIsSpanish
          ? "Por favor completa los campos requeridos."
          : "Please complete all required fields.",
      });
      return;
    }

    const defaultRegion = submitIsSpanish ? "MX" : "US";
    if (!validatePhoneNumber(form.phone, "", defaultRegion)) {
      setStatus({
        type: "error",
        message: submitIsSpanish
          ? "Por favor ingresa un número válido."
          : "Please enter a valid phone number.",
      });
      return;
    }

    if (form.company) {
      setStatus({
        type: "error",
        message: submitIsSpanish ? "Envío bloqueado." : "Submission blocked.",
      });
      return;
    }

    const endpoint = submitIsSpanish
      ? process.env.NEXT_PUBLIC_FREEBIE_FORM_URL_ES
      : process.env.NEXT_PUBLIC_FREEBIE_FORM_URL_EN;

    if (!endpoint) {
      setStatus({
        type: "error",
        message: submitIsSpanish
          ? "El formulario no está configurado. Por favor contáctanos."
          : "Form is not configured yet. Please contact support.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        source: submitIsSpanish
          ? "Homepage Freebie Popup (ES)"
          : "Homepage Freebie Popup (EN)",
        lang: submitLang,
      };

      // IMPORTANT: send JSON (Apps Script is doing JSON.parse on postData.contents)
      // Use text/plain to avoid preflight issues while still sending JSON.
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      const resultText = await response.text();
      let resultJson = null;
      try {
        resultJson = JSON.parse(resultText);
      } catch {
        resultJson = null;
      }

      if (!response.ok || (resultJson && resultJson.ok === false)) {
        const detail =
          resultJson?.error ||
          resultJson?.message ||
          resultText ||
          "Request failed.";
        throw new Error(detail);
      }

      setForm({ name: "", email: "", phone: "", company: "" });
      setStatus({
        type: "success",
        message: submitIsSpanish
          ? "Listo. Revisa tu correo para recibir la guía."
          : "All set. Check your email for the guide.",
      });

      window.setTimeout(() => setIsOpen(false), 1500);
    } catch (error) {
      setStatus({
        type: "error",
        message: submitIsSpanish
          ? "Algo salió mal. Inténtalo de nuevo en un momento."
          : "Something went wrong. Please try again in a moment.",
      });
      console.error("Freebie popup submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 pt-[20vh] sm:items-center sm:pt-0">
      <div className="w-full max-w-[92vw] sm:max-w-lg rounded-2xl bg-white p-4 sm:p-6 shadow-xl text-[98%] scale-[0.97] sm:text-[100%] sm:scale-100">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-[#731a2f]">
              {isSpanish ? "GUÍA EXCLUSIVA" : "EXCLUSIVE GUIDE"}
            </p>

            <h2 className="mt-2 text-xl font-semibold text-black">
              {isSpanish
                ? "Esto es lo que se necesita para lograr un rejuvenecimiento visible y duradero"
                : "Here’s what it takes to achieve lasting, visible skin rejuvenation"}
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              {isSpanish ? (
                <>
                  Ingresa tus datos para recibir una guía exclusiva que presenta{" "}
                  <strong>el enfoque más efectivo</strong> para el rejuvenecimiento,
                  diseñado para <strong>mantenerse con el paso del tiempo</strong>,
                  no solo por semanas o meses.
                </>
              ) : (
                <>
                  Enter your details to receive an exclusive guide that outlines{" "}
                  the <strong>most effective approach</strong> to rejuvenation,
                  one designed to <strong>hold up over time</strong>, not just
                  weeks or months.
                </>
              )}
            </p>

            <p className="mt-3 text-sm text-gray-600">
              {isSpanish ? (
                <>
                  Resultados que no solo se ven en el espejo, sino que se sienten en{" "}
                  <strong>la calidad, resistencia y vitalidad de la piel</strong>.
                </>
              ) : (
                <>
                  Results you don’t just see in the mirror, but{" "}
                  <strong>feel in the quality, resilience, and vitality of your skin</strong>.
                </>
              )}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-700"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <div className="hidden">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700" htmlFor="name">
              {isSpanish ? "Nombre" : "Name"}{" "}
              <span className="text-[#731a2f]">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700" htmlFor="email">
              {isSpanish ? "Correo electrónico" : "Email"}{" "}
              <span className="text-[#731a2f]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700" htmlFor="phone">
              {isSpanish ? "Teléfono" : "Phone"}{" "}
              <span className="text-[#731a2f]">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
              required
            />
          </div>

          {status.message ? (
            <p
              className={`text-sm ${
                status.type === "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {status.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-900 disabled:opacity-60"
          >
            {isSubmitting
              ? isSpanish
                ? "Enviando..."
                : "Sending..."
              : isSpanish
              ? "Recibir mi guía de rejuvenecimiento"
              : "Get My Rejuvenation Guide"}
          </button>

          <p className="text-xs text-gray-500">
            {isSpanish
              ? "Al enviar, aceptas recibir la guía por correo y que te contactemos con información sobre servicios, promociones y actualizaciones."
              : "By submitting, you agree to receive the guide by email and to be contacted with information about services, promotions, and updates."}
          </p>
        </form>
      </div>
    </div>
  );
}
