const leadForms = [
  {
    id: "promo_valentines_spring_2026",
    titleKey: "leadFormPromoValentineSpring2026.title",
    subtitleKey: "leadFormPromoValentineSpring2026.subtitle",
    titleFallback: {
      en: "Valentine & Spring Rejuvenation Event",
      es: "Evento de Rejuvenecimiento de San Valentín y Primavera",
    },
    subtitleFallback: {
      en: "Join our seasonal list for <strong>limited-time packages and rejuvenation specials</strong> from <strong>Feb 2-Mar 14, 2026</strong>.",
      es: "Únete a nuestra lista estacional para <strong>paquetes por tiempo limitado y especiales de rejuvenecimiento</strong> del <strong>2 de febrero al 14 de marzo</strong>.",
    },
    validFrom: "2026-01-27",
    validTill: "2026-03-14",
  },
  {
    id: "rejuvenation",
    titleKey: "leadForm.title",
    subtitleKey: "leadForm.subtitle",
    titleFallback: {
      en: "Wellness in Every Detail with Mave",
      es: "Bienestar en Cada Detalle con Mave",
    },
    subtitleFallback: {
      en: "Sign up for our newsletter and SMS promos to get 10% off your first facial and exclusive offers, medical insights, and aesthetic trends. Be the first to know.",
      es: "Suscríbete a nuestro newsletter y SMS para obtener 10% de descuento en tu primer facial y recibir ofertas exclusivas, información médica y tendencias estéticas. Sé la primera en enterarte.",
    },
    validFrom: null,
    validTill: null,
  },
];

const isInRange = (validFrom, validTill, now = new Date()) => {
  if (!validFrom && !validTill) return true;
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const fromDate = validFrom ? new Date(`${validFrom}T00:00:00`) : null;
  const tillDate = validTill ? new Date(`${validTill}T00:00:00`) : null;
  if (fromDate && today < fromDate) return false;
  if (tillDate && today > tillDate) return false;
  return true;
};

const getActiveLeadForm = (now) => {
  const active = leadForms.find((form) =>
    isInRange(form.validFrom, form.validTill, now)
  );
  return active || leadForms[leadForms.length - 1];
};

const isPromoLeadForm = (form) => Boolean(form?.id && form.id.startsWith("promo_"));

const getLocalizedFallback = (field, form, locale = "en") => {
  const lang = String(locale || "en").toLowerCase().startsWith("es") ? "es" : "en";
  const source = field === "subtitle" ? form?.subtitleFallback : form?.titleFallback;
  return source?.[lang] || source?.en || "";
};

const resolveLeadFormText = ({ t, form, locale = "en", field = "title" }) => {
  const key = field === "subtitle" ? form?.subtitleKey : form?.titleKey;
  if (!key) return getLocalizedFallback(field, form, locale);
  const translated = typeof t === "function" ? t(key) : key;
  if (translated && translated !== key) return translated;
  return getLocalizedFallback(field, form, locale) || translated || key;
};

const resolveLeadFormCopy = ({ t, form, locale = "en" }) => ({
  title: resolveLeadFormText({ t, form, locale, field: "title" }),
  subtitle: resolveLeadFormText({ t, form, locale, field: "subtitle" }),
});

export { leadForms, getActiveLeadForm, isPromoLeadForm, resolveLeadFormCopy };
