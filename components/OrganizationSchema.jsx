import Script from "next/script";

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
    "Mave Medical Spa in Tijuana offers expert-level aesthetic services including facial balancing with dermal fillers, microneedling, PLLA, CO2 laser resurfacing, and non-surgical skin lifting.",
  telephone: "+52 664 207 7675",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Blvd Gral Rodolfo Snchez Taboada 10512-Interior 8a, Segundo Piso",
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
  areaServed: [
    { "@type": "Place", name: "Tijuana, Mexico" },
    { "@type": "Place", name: "San Diego, California" },
    { "@type": "Place", name: "Chula Vista, California" },
    { "@type": "Place", name: "Los Angeles, California" },
    { "@type": "Place", name: "East Los Angeles, California" },
    { "@type": "Place", name: "Santa Ana, California" },
    { "@type": "Place", name: "Anaheim, California" },
    { "@type": "Place", name: "Long Beach, California" },
    { "@type": "Place", name: "Riverside, California" },
    { "@type": "Place", name: "Ontario, California" },
    { "@type": "Place", name: "El Centro, California" },
    { "@type": "Place", name: "Calexico, California" },
    { "@type": "Place", name: "Brawley, California" },
    { "@type": "Place", name: "Oxnard, California" },
    { "@type": "Place", name: "Bakersfield, California" },
    { "@type": "Place", name: "Fontana, California" },
    { "@type": "Place", name: "Pomona, California" },
    { "@type": "Place", name: "San Bernardino, California" },
  ],
  sameAs: [
    "https://www.instagram.com/mavemedspa",
    "https://www.facebook.com/mavemedicalspa",
    "https://www.tiktok.com/@mavemedicalspa",
  ],
};

export default function OrganizationSchema() {
  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
