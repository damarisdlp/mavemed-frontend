export const rfMicroneedling = {
  slug: "rf-microneedling",
  category: "microneedling-rf",
  categoryDisplayName: "Microneedling & RF Skin Rejuvenation",
  serviceDisplayName: "Scarlet RF Microneedling",
  isPopular: true,
  isPromoEligible: true,
  image: "/microneedling.jpg",
  image2: "/scarlet.jpg",
  description:
    "Combines microneedling with fractional radiofrequency to lift, tighten, and resurface skin with minimal downtime.",
  standardPrice: "$265USD per session",
  promoPrice: "$225USD",
  notes: [
    "3–4 sessions spaced 4–6 weeks apart recommended",
    "Safe for all skin types",
    "Mild redness may last 1–2 days"
  ],
  details:
    "Scarlet S uses short-pulse radiofrequency delivered through microneedles to stimulate deeper layers of skin for collagen remodeling, tightening, and scar reduction. It enhances firmness and texture without damaging the skin’s surface.",
  goals: [
    "Lift and tighten sagging skin",
    "Reduce acne scars and large pores",
    "Improve fine lines and skin laxity"
  ],
  treatableAreas: [
    "Face",
    "Neck",
    "Décolleté",
    "Jawline",
    "Acne scars",
    "Stretch marks"
  ],
  pricing: [
    {
      serviceChild: "Face",
      isPromoEligible: true,
      standardPrice: "$265USD",
      promoPrice: "$225USD",
      notes: null
    },
    {
      serviceChild: "Face + Neck",
      isPromoEligible: true,
      standardPrice: "$310USD",
      promoPrice: "$275USD",
      notes: null
    },
    {
      serviceChild: "Face + Neck + Décolleté",
      isPromoEligible: true,
      standardPrice: "$350USD",
      promoPrice: "$310USD",
      notes: null
    }
  ],
  addOns: [],

  expectations: {
    preTreatment: [
      "Avoid blood thinners, alcohol, and caffeine 24 hours before your session.",
      "Discontinue active skincare 3 days prior to treatment."
    ],
    postTreatment: [
      "Expect redness, swelling, or tightness for 1–2 days post-treatment.",
      "Avoid sun exposure and heat-based treatments for 72 hours."
    ]
  },

  faq: [
    {
      question: "How is this different from regular microneedling?",
      answer:
        "Scarlet RF adds radiofrequency energy to microneedling for deeper collagen remodeling and skin tightening."
    },
    {
      question: "Is there downtime?",
      answer:
        "Most patients experience redness and tightness for 24–48 hours, with minimal to no peeling."
    },
    {
      question: "Does it hurt?",
      answer:
        "Topical numbing cream is applied before the procedure for comfort. Most describe it as tolerable."
    }
  ]
};