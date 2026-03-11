const SITE_URL = "https://www.mavemedspa.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Mave Medical Spa",
  url: SITE_URL,
  logo: `${SITE_URL}/site_icon.png`,
  image: `${SITE_URL}/logo-mave.png`,
  description:
    "Mave Medical Spa in Tijuana offers advanced aesthetic medicine including neuromodulators, dermal fillers, collagen biostimulation, RF microneedling, and laser technologies.",
  telephone: "+52 664 207 7675",
  priceRange: "$$",
  medicalSpecialty: [
    "https://schema.org/AestheticPlasticSurgery",
    "https://schema.org/Dermatology",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Blvd Gral Rodolfo Sánchez Taboada 10512-Interior 8a, Segundo Piso",
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
    "https://www.instagram.com/mavemedspa",
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
      "@type": "Thing",
      name: "Neuromodulators",
      url: `${SITE_URL}/treatments/wrinkle-reducers-neuromodulator`,
    },
    {
      "@type": "Thing",
      name: "Dermal Fillers (Hyaluronic Acid)",
      url: `${SITE_URL}/treatments/facial-balancing-fillers`,
      description:
        "Dermal fillers restore lost volume and facial symmetry using cross-linked hyaluronic acid for structural support and immediate rejuvenation.",
    },
    {
      "@type": "Thing",
      name: "Lip Rejuvenation & Sculpting",
      url: `${SITE_URL}/treatments/hyaluronic-acid-lip-fillers`,
      description:
        "Lip enhancement uses hyaluronic acid-based fillers to improve volume, define borders, and deeply hydrate the lips with natural-feel results.",
    },
    {
      "@type": "Thing",
      name: "Tear Trough (Under-Eye) Correction",
      url: `${SITE_URL}/treatments/facial-balancing-fillers`,
      description:
        "Under-eye treatment addresses dark circles and hollows using low-density, high-purity hyaluronic acid selected for delicate tear trough anatomy.",
    },
    {
      "@type": "Thing",
      name: "Collagen Biostimulators (PLLA & CaHA)",
      url: `${SITE_URL}/treatments/collagen-biostimulator-plla`,
      description:
        "Injectable collagen biostimulators such as PLLA and CaHA support gradual structural protein renewal, long-term volume restoration, and skin-quality improvement.",
    },
    {
      "@type": "Thing",
      name: "RF Microneedling (Sylfirm X)",
      url: `${SITE_URL}/treatments/sylfirm-rf-microneedling`,
      description:
        "Dual-wave RF microneedling delivers controlled thermal energy into the dermis to improve skin laxity, scarring, redness, and texture with minimal downtime.",
    },
    {
      "@type": "Thing",
      name: "Laser Hair Removal",
      url: `${SITE_URL}/treatments/laser-hair-removal`,
    },
    {
      "@type": "Thing",
      name: "Revolax",
      url: `${SITE_URL}/learn/revolax-cross-linked-hyaluronic-acid-fillers`,
    },
    {
      "@type": "Thing",
      name: "NCTF 135 HA",
      url: `${SITE_URL}/learn/nctf-135-ha-skin-quality-guide`,
    },
    {
      "@type": "Thing",
      name: "Allergan Aesthetics",
    },
    {
      "@type": "Thing",
      name: "Galderma",
    },
    {
      "@type": "Thing",
      name: "Fillmed Laboratories",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Damaris",
    jobTitle: "Director",
    url: `${SITE_URL}/ourteam/damaris`,
  },
  employee: [
    {
      "@type": "Person",
      name: "Dr. Nataly",
      jobTitle: "Provider",
      url: `${SITE_URL}/ourteam/dranataly`,
    },
    {
      "@type": "Person",
      name: "Dr. Jocelyn",
      jobTitle: "Provider",
      url: `${SITE_URL}/ourteam/drajocelyn`,
    },
  ],
  brand: [
    { "@type": "Brand", name: "Allergan Aesthetics" },
    { "@type": "Brand", name: "Galderma" },
    { "@type": "Brand", name: "Fillmed Laboratories" },
  ],
};

export default function OrganizationSchema() {
  return (
    <script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
