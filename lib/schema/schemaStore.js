export const SITE_URL = "https://www.mavemedspa.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const PROVIDER_PERSONS = {
  drNataly: {
    "@type": "Person",
    "@id": `${SITE_URL}/ourteam/dranataly#person`,
    name: "Dr. Nataly",
    jobTitle: "Provider",
    url: `${SITE_URL}/ourteam/dranataly`,
    worksFor: { "@id": ORGANIZATION_ID },
  },
  drJocelyn: {
    "@type": "Person",
    "@id": `${SITE_URL}/ourteam/drajocelyn#person`,
    name: "Dr. Jocelyn",
    jobTitle: "Provider",
    url: `${SITE_URL}/ourteam/drajocelyn`,
    worksFor: { "@id": ORGANIZATION_ID },
  },
};

export const PROVIDER_PERSON_IDS = Object.values(PROVIDER_PERSONS).map(
  (provider) => provider["@id"]
);

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": ORGANIZATION_ID,
  name: "Mave Medical Spa",
  url: SITE_URL,
  logo: `${SITE_URL}/site_icon.png`,
  image: `${SITE_URL}/logo-mave.png`,
  description:
    "Mave Medical Spa in Tijuana offers advanced aesthetic medicine including neuromodulators, dermal fillers, collagen biostimulation, RF microneedling, and laser technologies.",
  telephone: "+52 664 207 7675",
  priceRange: "$$",
  currenciesAccepted: "USD, MXN",
  medicalSpecialty: [
    "https://schema.org/AestheticPlasticSurgery",
    "https://schema.org/Dermatology",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Blvd Gral Rodolfo Sánchez Taboada 10512-Interior 8a, Segundo Piso",
    addressLocality: "Tijuana",
    addressRegion: "Baja California",
    postalCode: "22010",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.521,
    longitude: -117.038,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Tijuana",
      sameAs: "https://www.wikidata.org/wiki/Q36446",
    },
    {
      "@type": "City",
      name: "San Diego",
      sameAs: "https://www.wikidata.org/wiki/Q16552",
    },
    {
      "@type": "City",
      name: "Los Angeles",
      sameAs: "https://www.wikidata.org/wiki/Q65",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/mavemedicalspa",
    "https://www.facebook.com/mavemedicalspa",
    "https://www.tiktok.com/@mavemedicalspa",
  ],
  knowsAbout: [
    {
      "@type": "MedicalProcedure",
      name: "Botox (Botulinum Toxin Type A)",
      description:
        "FDA-approved neuromodulator for the treatment of dynamic wrinkles.",
      sameAs: "https://en.wikipedia.org/wiki/Botulinum_toxin",
      url: `${SITE_URL}/treatments/wrinkle-reducers-neuromodulator`,
    },
    {
      "@type": "MedicalProcedure",
      name: "Neuromodulators",
      url: `${SITE_URL}/treatments/wrinkle-reducers-neuromodulator`,
      description:
        "COFEPRIS-approved neuromodulator for the treatment of dynamic wrinkles.",
      sameAs: "https://en.wikipedia.org/wiki/Botulinum_toxin",
    },
    {
      "@type": "MedicalProcedure",
      name: "Dermal Fillers (Hyaluronic Acid)",
      url: `${SITE_URL}/treatments/facial-balancing-fillers`,
      description:
        "Dermal fillers restore lost volume and facial symmetry using cross-linked hyaluronic acid for structural support and immediate rejuvenation.",
      sameAs: "https://en.wikipedia.org/wiki/Dermal_filler",
    },
    {
      "@type": "MedicalProcedure",
      name: "Lip Rejuvenation & Sculpting",
      url: `${SITE_URL}/treatments/hyaluronic-acid-lip-fillers`,
      description:
        "Lip enhancement uses hyaluronic acid-based fillers to improve volume, define borders, and deeply hydrate the lips with natural-feel results.",
      sameAs: "https://en.wikipedia.org/wiki/Lip_augmentation",
    },
    {
      "@type": "MedicalProcedure",
      name: "Tear Trough (Under-Eye) Correction",
      url: `${SITE_URL}/treatments/facial-balancing-fillers`,
      description:
        "Under-eye treatment addresses dark circles and hollows using low-density, high-purity hyaluronic acid selected for delicate tear trough anatomy.",
    },
    {
      "@type": "MedicalProcedure",
      name: "Collagen Biostimulators (PLLA & CaHA)",
      url: `${SITE_URL}/treatments/collagen-biostimulator-plla`,
      description:
        "Injectable collagen biostimulators such as PLLA and CaHA support gradual structural protein renewal, long-term volume restoration, and skin-quality improvement.",
      sameAs: "https://en.wikipedia.org/wiki/Poly-L-lactic_acid",
    },
    {
      "@type": "MedicalProcedure",
      name: "RF Microneedling (Sylfirm X)",
      url: `${SITE_URL}/treatments/sylfirm-rf-microneedling`,
      description:
        "Dual-wave RF microneedling delivers controlled thermal energy into the dermis to improve skin laxity, scarring, redness, and texture with minimal downtime.",
      sameAs: "https://en.wikipedia.org/wiki/Microneedling",
    },
    {
      "@type": "MedicalProcedure",
      name: "Laser Hair Removal",
      url: `${SITE_URL}/treatments/laser-hair-removal`,
      sameAs: "https://en.wikipedia.org/wiki/Laser_hair_removal",
    },
    {
      "@type": "MedicalProcedure",
      name: "Revolax",
      url: `${SITE_URL}/learn/revolax-cross-linked-hyaluronic-acid-fillers`,
    },
    {
      "@type": "MedicalProcedure",
      name: "NCTF 135 HA",
      url: `${SITE_URL}/learn/nctf-135-ha-skin-quality-guide`,
    },
    {
      "@type": "MedicalProcedure",
      name: "Allergan Aesthetics",
      sameAs: "https://www.allerganaesthetics.com",
    },
    {
      "@type": "MedicalProcedure",
      name: "Galderma",
      sameAs: "https://www.galderma.com",
    },
    {
      "@type": "MedicalProcedure",
      name: "Fillmed Laboratories",
      sameAs: "https://www.fillmed.com",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Damaris",
    jobTitle: "Director",
    url: `${SITE_URL}/ourteam/damaris`,
  },
  employee: [PROVIDER_PERSONS.drNataly, PROVIDER_PERSONS.drJocelyn],
  brand: [
    { "@type": "Brand", name: "Allergan Aesthetics" },
    { "@type": "Brand", name: "Galderma" },
    { "@type": "Brand", name: "Fillmed Laboratories" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "22",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      itemReviewed: { "@id": ORGANIZATION_ID },
      author: { "@type": "Person", name: "Juliana Ordonez" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Our skin has completely transformed thanks to their amazing care. Dr. Nataly has done my lips and her technique is flawless.",
    },
    {
      "@type": "Review",
      itemReviewed: { "@id": ORGANIZATION_ID },
      author: { "@type": "Person", name: "Mariana Bautista" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "The best spa in Tijuana. Affordable prices compared to Los Angeles.",
    },
  ],
};
