import { SITE_URL, PROVIDER_PERSON_IDS } from "@/lib/schema/schemaStore";

const sharedReviews = {
  lipFillers: [
    {
      authorName: "Juliana Ordonez",
      ratingValue: 5,
      reviewBody:
        "Our skin has completely transformed thanks to their amazing care. Dr. Nataly has done my lips and her technique is flawless.",
    },
  ],
};

export const SERVICE_SCHEMA_CATEGORY_MAP = {
  neuromodulators: {
    key: "neuromodulators",
    // Adding "Tijuana" and leading with Botox helps Google index this for local-intent queries.
    name: "Botox and Neuromodulators in Tijuana (Botulinum Toxin Type A)",
    description:
      "Professional Botulinum Toxin Type A treatments (Botox and high-purity generic options) for smoothing dynamic forehead lines, crow's feet, and frown lines in Tijuana.",
    // Updated to match current lowest promotional entry point.
    lowPrice: 5.25,
    highPrice: 320,
    priceCurrency: "USD",
    slugs: ["wrinkle-reducers-neuromodulator"],
  },
  lipFillers: {
    key: "lipFillers",
    name: "Lip Fillers (Stylage, Juvederm, Revolax)",
    description:
      "Hyaluronic acid lip contouring and hydration protocols selected by tissue movement, border definition, and symmetry goals.",
    lowPrice: 290,
    highPrice: 385,
    priceCurrency: "USD",
    slugs: ["hyaluronic-acid-lip-fillers"],
  },
  facialBalancing: {
    key: "facialBalancing",
    name: "Facial Balancing (Juvederm)",
    description:
      "Facial balancing with hyaluronic acid fillers for contour support in cheeks, chin, jawline, and profile harmonization.",
    lowPrice: 390,
    highPrice: 390,
    priceCurrency: "USD",
    slugs: ["facial-balancing-fillers"],
  },
  biostimulators: {
    key: "biostimulators",
    name: "Biostimulators (PLLA and CaHA)",
    description:
      "Injectable collagen stimulation protocols designed for long-term structure support, tissue quality, and progressive remodeling.",
    lowPrice: 575,
    highPrice: 15750,
    priceCurrency: "USD/MXN",
    rangesBySlug: {
      "collagen-biostimulator-plla": {
        lowPrice: 575,
        highPrice: 575,
        priceCurrency: "USD",
      },
      "hybrid-injectable-collagen-biostimulator-ha-caha": {
        lowPrice: 15750,
        highPrice: 15750,
        priceCurrency: "MXN",
      },
    },
    slugs: [
      "collagen-biostimulator-plla",
      "hybrid-injectable-collagen-biostimulator-ha-caha",
    ],
  },
  rfMicroneedling: {
    key: "rfMicroneedling",
    name: "RF Microneedling (Sylfirm X)",
    description:
      "Dual-wave RF microneedling treatment plans for redness, texture, scarring, pores, and skin laxity with staged energy protocols.",
    lowPrice: 400,
    highPrice: 2380,
    priceCurrency: "USD",
    slugs: ["sylfirm-rf-microneedling"],
  },
  skinQuality: {
    key: "skinQuality",
    name: "Skin Quality Injectables (NCTF 135 HA, PN, PDRN)",
    description:
      "Skin-quality protocols focused on hydration, regenerative support, and dermal revitalization using NCTF 135 HA, PN, and PDRN options.",
    lowPrice: 90,
    highPrice: 1850,
    priceCurrency: "USD",
    rangesBySlug: {
      "bio-revitalization-french-glow": {
        lowPrice: 145,
        highPrice: 145,
        priceCurrency: "USD",
      },
      "mesotherapy-infusions": {
        lowPrice: 90,
        highPrice: 1850,
        priceCurrency: "USD",
      },
      "microneedling-skin-renewal-polynucleotides": {
        lowPrice: 285,
        highPrice: 575,
        priceCurrency: "USD",
      },
      "microneedling-skin-renewal-pdrn": {
        lowPrice: 175,
        highPrice: 330,
        priceCurrency: "USD",
      },
    },
    slugs: [
      "bio-revitalization-french-glow",
      "mesotherapy-infusions",
      "microneedling-skin-renewal-polynucleotides",
      "microneedling-skin-renewal-pdrn",
    ],
  },
  facials: {
    key: "facials",
    name: "Facials (Casmara and Hydrafacial)",
    description:
      "Medical-grade facial protocols for hydration, cleansing, and skin barrier support using Casmara and Hydrafacial systems.",
    lowPrice: 90,
    highPrice: 150,
    priceCurrency: "USD",
    // Boosters are excluded from this range so it reflects primary facial sessions.
    rangesBySlug: {
      hydrafacial: {
        lowPrice: 95,
        highPrice: 150,
        priceCurrency: "USD",
      },
      "casmara-infinity": {
        lowPrice: 100,
        highPrice: 100,
        priceCurrency: "USD",
      },
      "casmara-purifying": {
        lowPrice: 90,
        highPrice: 90,
        priceCurrency: "USD",
      },
      "casmara-retinol-proage": {
        lowPrice: 95,
        highPrice: 95,
        priceCurrency: "USD",
      },
    },
    slugs: [
      "hydrafacial",
      "casmara-infinity",
      "casmara-purifying",
      "casmara-retinol-proage",
    ],
  },
};

const createServiceSchemaEntry = ({
  name,
  description,
  slug,
  lowPrice,
  highPrice,
  priceCurrency,
  specificReviews = [],
}) => ({
  name,
  description,
  url: `${SITE_URL}/treatments/${slug}`,
  lowPrice,
  highPrice,
  priceCurrency,
  performerIds: PROVIDER_PERSON_IDS,
  specificReviews,
});

export const SERVICE_SCHEMA_BY_SLUG = {
  "wrinkle-reducers-neuromodulator": createServiceSchemaEntry({
    ...SERVICE_SCHEMA_CATEGORY_MAP.neuromodulators,
    slug: "wrinkle-reducers-neuromodulator",
  }),
  "hyaluronic-acid-lip-fillers": createServiceSchemaEntry({
    ...SERVICE_SCHEMA_CATEGORY_MAP.lipFillers,
    slug: "hyaluronic-acid-lip-fillers",
    specificReviews: sharedReviews.lipFillers,
  }),
  "facial-balancing-fillers": createServiceSchemaEntry({
    ...SERVICE_SCHEMA_CATEGORY_MAP.facialBalancing,
    slug: "facial-balancing-fillers",
  }),
  "collagen-biostimulator-plla": createServiceSchemaEntry({
    name: SERVICE_SCHEMA_CATEGORY_MAP.biostimulators.name,
    description: SERVICE_SCHEMA_CATEGORY_MAP.biostimulators.description,
    slug: "collagen-biostimulator-plla",
    ...SERVICE_SCHEMA_CATEGORY_MAP.biostimulators.rangesBySlug[
      "collagen-biostimulator-plla"
    ],
  }),
  "hybrid-injectable-collagen-biostimulator-ha-caha": createServiceSchemaEntry({
    name: SERVICE_SCHEMA_CATEGORY_MAP.biostimulators.name,
    description: SERVICE_SCHEMA_CATEGORY_MAP.biostimulators.description,
    slug: "hybrid-injectable-collagen-biostimulator-ha-caha",
    ...SERVICE_SCHEMA_CATEGORY_MAP.biostimulators.rangesBySlug[
      "hybrid-injectable-collagen-biostimulator-ha-caha"
    ],
  }),
  "sylfirm-rf-microneedling": createServiceSchemaEntry({
    ...SERVICE_SCHEMA_CATEGORY_MAP.rfMicroneedling,
    slug: "sylfirm-rf-microneedling",
  }),
  "bio-revitalization-french-glow": createServiceSchemaEntry({
    name: SERVICE_SCHEMA_CATEGORY_MAP.skinQuality.name,
    description: SERVICE_SCHEMA_CATEGORY_MAP.skinQuality.description,
    slug: "bio-revitalization-french-glow",
    ...SERVICE_SCHEMA_CATEGORY_MAP.skinQuality.rangesBySlug[
      "bio-revitalization-french-glow"
    ],
  }),
  "mesotherapy-infusions": createServiceSchemaEntry({
    name: SERVICE_SCHEMA_CATEGORY_MAP.skinQuality.name,
    description: SERVICE_SCHEMA_CATEGORY_MAP.skinQuality.description,
    slug: "mesotherapy-infusions",
    ...SERVICE_SCHEMA_CATEGORY_MAP.skinQuality.rangesBySlug[
      "mesotherapy-infusions"
    ],
  }),
  "microneedling-skin-renewal-polynucleotides": createServiceSchemaEntry({
    name: SERVICE_SCHEMA_CATEGORY_MAP.skinQuality.name,
    description: SERVICE_SCHEMA_CATEGORY_MAP.skinQuality.description,
    slug: "microneedling-skin-renewal-polynucleotides",
    ...SERVICE_SCHEMA_CATEGORY_MAP.skinQuality.rangesBySlug[
      "microneedling-skin-renewal-polynucleotides"
    ],
  }),
  "microneedling-skin-renewal-pdrn": createServiceSchemaEntry({
    name: SERVICE_SCHEMA_CATEGORY_MAP.skinQuality.name,
    description: SERVICE_SCHEMA_CATEGORY_MAP.skinQuality.description,
    slug: "microneedling-skin-renewal-pdrn",
    ...SERVICE_SCHEMA_CATEGORY_MAP.skinQuality.rangesBySlug[
      "microneedling-skin-renewal-pdrn"
    ],
  }),
  hydrafacial: createServiceSchemaEntry({
    name: SERVICE_SCHEMA_CATEGORY_MAP.facials.name,
    description: SERVICE_SCHEMA_CATEGORY_MAP.facials.description,
    slug: "hydrafacial",
    ...SERVICE_SCHEMA_CATEGORY_MAP.facials.rangesBySlug.hydrafacial,
  }),
  "casmara-infinity": createServiceSchemaEntry({
    name: SERVICE_SCHEMA_CATEGORY_MAP.facials.name,
    description: SERVICE_SCHEMA_CATEGORY_MAP.facials.description,
    slug: "casmara-infinity",
    ...SERVICE_SCHEMA_CATEGORY_MAP.facials.rangesBySlug["casmara-infinity"],
  }),
  "casmara-purifying": createServiceSchemaEntry({
    name: SERVICE_SCHEMA_CATEGORY_MAP.facials.name,
    description: SERVICE_SCHEMA_CATEGORY_MAP.facials.description,
    slug: "casmara-purifying",
    ...SERVICE_SCHEMA_CATEGORY_MAP.facials.rangesBySlug["casmara-purifying"],
  }),
  "casmara-retinol-proage": createServiceSchemaEntry({
    name: SERVICE_SCHEMA_CATEGORY_MAP.facials.name,
    description: SERVICE_SCHEMA_CATEGORY_MAP.facials.description,
    slug: "casmara-retinol-proage",
    ...SERVICE_SCHEMA_CATEGORY_MAP.facials.rangesBySlug[
      "casmara-retinol-proage"
    ],
  }),
};
