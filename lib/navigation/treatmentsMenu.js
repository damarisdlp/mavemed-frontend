import categoryOrder from "@/lib/data/normalized/categories.json";
import { getLocalized } from "@/lib/i18n/getLocalized";

const CATEGORY_LABEL_KEYS = {
  "laser-resurfacing": "navTreatments.categories.laserResurfacing",
  "wrinkle-reducers": "navTreatments.categories.wrinkleReducers",
  "collagen-biostimulators": "navTreatments.categories.collagenBiostimulators",
  "skin-quality-biostimulation": "navTreatments.categories.skinQualityBiostimulation",
  "skin-tightening": "navTreatments.categories.skinTightening",
  "microneedling-mesotherapy": "navTreatments.categories.microneedlingMesotherapy",
  "dermal-fillers": "navTreatments.categories.dermalFillers",
  facials: "navTreatments.categories.facials",
  "body-medical-treatments": "navTreatments.categories.bodyMedicalTreatments",
  podiatry: "navTreatments.categories.podiatry",
};

const GOAL_DEFINITIONS = [
  {
    slug: "anti-aging",
    labelKey: "navTreatments.goals.antiAging",
    label: { en: "Anti-Aging", es: "Antiedad" },
    description: {
      en: "Treatments selected to soften lines, improve firmness, and support a more refreshed look.",
      es: "Tratamientos seleccionados para suavizar líneas, mejorar la firmeza y favorecer una apariencia más fresca.",
    },
    serviceSlugs: [
      "wrinkle-reducers-neuromodulator",
      "ultraformer-mpt",
      "collagen-biostimulator-plla",
    ],
  },
  {
    slug: "texture-scars",
    labelKey: "navTreatments.goals.textureScars",
    label: { en: "Texture & Acne Scars", es: "Textura y Cicatrices de Acné" },
    description: {
      en: "Services curated to refine uneven texture, support smoother skin, and improve the look of acne scarring.",
      es: "Servicios seleccionados para afinar la textura irregular, favorecer una piel más uniforme y mejorar la apariencia de cicatrices de acné.",
    },
    serviceSlugs: ["microneedling-skin-renewal-prp", "microneedling-skin-renewal-polynucleotides", "microneedling-skin-renewal-pdrn", "microneedling-skin-renewal-toskani", "co2-laser", "sylfirm-rf-microneedling"],
  },
  {
    slug: "volume-contour",
    labelKey: "navTreatments.goals.volumeContour",
    label: { en: "Volume & Facial Contour", es: "Volumen y Contorno Facial" },
    description: {
      en: "A curated set of treatments focused on restoring structure, balance, and collagen support.",
      es: "Una selección de tratamientos enfocada en restaurar estructura, balance y soporte de colágeno.",
    },
    serviceSlugs: [
      "facial-balancing-fillers",
      "hyaluronic-acid-lip-fillers",
      "hybrid-injectable-collagen-biostimulator-ha-caha",
    ],
  },
  {
    slug: "pigment-brightening",
    labelKey: "navTreatments.goals.pigmentBrightening",
    label: { en: "Pigment & Brightening", es: "Pigmentación y Luminosidad" },
    description: {
      en: "Treatments chosen to target visible sun damage, discoloration, and dullness.",
      es: "Tratamientos elegidos para tratar daño solar visible, pigmentación y falta de luminosidad.",
    },
    serviceSlugs: ["ipl", "co2-laser", "hydrafacial"],
  },
  {
    slug: "hydration-glow",
    labelKey: "navTreatments.goals.hydrationGlow",
    label: { en: "Hydration & Glow", es: "Hidratación y Luminosidad" },
    description: {
      en: "Hydration-focused treatments selected to refresh skin, boost glow, and improve surface smoothness.",
      es: "Tratamientos enfocados en hidratación para revitalizar la piel, aumentar la luminosidad y mejorar la suavidad superficial.",
    },
    serviceSlugs: [
      "hydrafacial",
      "facials-janssen-radiance-boost",
      "mesotherapy-infusions",
      "bio-revitalization-french-glow",
    ],
  },
  {
    slug: "body-wellness",
    labelKey: "navTreatments.goals.bodyWellness",
    label: { en: "Body & Wellness", es: "Cuerpo y Bienestar" },
    description: {
      en: "Body-focused services curated for recovery, circulation, and wellness support.",
      es: "Servicios corporales seleccionados para recuperación, circulación y apoyo al bienestar.",
    },
    serviceSlugs: ["swedish-massage", "cupping", "sclerotherapy"],
  },
];

export function getTreatmentTypeDefinitions() {
  return categoryOrder
    .map((category) => {
      const labelKey = CATEGORY_LABEL_KEYS[category.slug];
      if (!labelKey) return null;
      return {
        slug: category.slug,
        labelKey,
      };
    })
    .filter(Boolean);
}

export function getTreatmentTypeDefinition(slug) {
  return getTreatmentTypeDefinitions().find((definition) => definition.slug === slug) || null;
}

export function getSkinGoalDefinitions() {
  return GOAL_DEFINITIONS;
}

export function getSkinGoalDefinition(slug) {
  return GOAL_DEFINITIONS.find((definition) => definition.slug === slug) || null;
}

export function getTreatmentsNavigation(t) {
  const byTypeItems = getTreatmentTypeDefinitions().map((definition) => ({
    id: definition.slug,
    label: t(definition.labelKey),
    href: `/treatments/type/${definition.slug}`,
  }));

  const byGoalItems = getSkinGoalDefinitions().map((definition) => ({
    id: definition.slug,
    label: t(definition.labelKey),
    href: `/treatments/goal/${definition.slug}`,
  }));

  return {
    title: t("nav.treatments"),
    viewAllLabel: t("navTreatments.viewAll"),
    byType: {
      id: "by-type",
      label: t("navTreatments.shopByService"),
      items: byTypeItems,
    },
    byGoal: {
      id: "by-goal",
      label: t("navTreatments.shopByConcern"),
      items: byGoalItems,
    },
    featured: {
      eyebrow: t("navTreatments.featured.eyebrow"),
      title: t("navTreatments.featured.title"),
      copy: t("navTreatments.featured.copy"),
      primaryLabel: t("nav.bookWhatsApp"),
      secondaryLabel: t("navTreatments.viewAll"),
      secondaryHref: "/treatments",
    },
  };
}

export function getLocalizedSkinGoalLabel(goalDefinition, locale = "en") {
  return getLocalized(goalDefinition?.label, locale);
}

export function getLocalizedSkinGoalDescription(goalDefinition, locale = "en") {
  return getLocalized(goalDefinition?.description, locale);
}
