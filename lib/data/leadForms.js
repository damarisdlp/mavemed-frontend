const leadForms = [
  {
    id: "promo_valentines_spring_2026",
    titleKey: "leadFormPromoValentineSpring2026.title",
    subtitleKey: "leadFormPromoValentineSpring2026.subtitle",
    validFrom: "2026-01-27",
    validTill: "2026-03-14",
  },
  {
    id: "rejuvenation",
    titleKey: "leadForm.title",
    subtitleKey: "leadForm.subtitle",
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

export { leadForms, getActiveLeadForm, isPromoLeadForm };
