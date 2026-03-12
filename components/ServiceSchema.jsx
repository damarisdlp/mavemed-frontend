import {
  ORGANIZATION_ID,
  PROVIDER_PERSON_IDS,
  SITE_URL,
} from "@/lib/schema/schemaStore";

const areaServed = [
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
];

const normalizeUrl = (value) => {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  return `${SITE_URL}/${raw.replace(/^\//, "")}`;
};

const toNumber = (value) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
};

export default function ServiceSchema({
  name,
  description,
  url,
  lowPrice,
  highPrice,
  priceCurrency = "USD",
  specificReviews = [],
  performerIds = PROVIDER_PERSON_IDS,
}) {
  const absoluteUrl = normalizeUrl(url);
  if (!name || !description || !absoluteUrl) return null;

  const low = toNumber(lowPrice);
  const high = toNumber(highPrice);
  const hasAggregateOffer =
    low != null && high != null && high >= low && Boolean(priceCurrency);

  const normalizedReviews = Array.isArray(specificReviews)
    ? specificReviews
        .map((review) => {
          const authorName = String(review?.authorName || "").trim();
          const reviewBody = String(review?.reviewBody || "").trim();
          const ratingValue = toNumber(review?.ratingValue) ?? 5;
          if (!authorName || !reviewBody) return null;
          return {
            "@type": "Review",
            itemReviewed: { "@id": `${absoluteUrl}#service` },
            author: { "@type": "Person", name: authorName },
            reviewRating: {
              "@type": "Rating",
              ratingValue: String(ratingValue),
              bestRating: "5",
              worstRating: "1",
            },
            reviewBody,
          };
        })
        .filter(Boolean)
    : [];

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Service", "MedicalProcedure"],
    "@id": `${absoluteUrl}#service`,
    name,
    description,
    url: absoluteUrl,
    provider: { "@id": ORGANIZATION_ID },
    performer: performerIds.map((id) => ({ "@id": id })),
    areaServed,
  };

  if (hasAggregateOffer) {
    schema.offers = {
      "@type": "AggregateOffer",
      lowPrice: String(low),
      highPrice: String(high),
      priceCurrency,
      offerCount: "1",
    };
  }

  if (normalizedReviews.length > 0) {
    schema.review = normalizedReviews;
  }

  return (
    <script
      id={`service-schema-${absoluteUrl.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
