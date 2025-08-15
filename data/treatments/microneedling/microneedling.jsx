export const microneedling = {
  slug: "microneedling",
  category: "microneedling-rf",
  categoryDisplayName: "Microneedling & RF Skin Rejuvenation",
  serviceDisplayName: "Microneedling Skin Renewal",
  isPopular: false,
  isPromoEligible: true,
  image: "/microneedling.jpg",
  image2: "/microneedling2.jpg",
  description:
    "Refine texture, shrink pores, and stimulate collagen through precision microneedling using fine sterile needles.",
  standardPrice: "$140USD per session",
  promoPrice: "$120USD",
  notes: [
    "3–6 sessions recommended for optimal results",
    "Safe for most skin types",
    "Downtime: 1–3 days of redness possible"
  ],
  details:
    "Microneedling uses fine needles to create micro-channels in the skin, triggering the body’s natural healing response and promoting collagen, elastin, and skin cell regeneration. It improves texture, firmness, and reduces scarring over time.",
  goals: [
    "Improve skin texture and tone",
    "Reduce acne scars and fine lines",
    "Shrink enlarged pores"
  ],
  treatableAreas: [
    "Full Face",
    "Neck",
    "Décolleté",
    "Back",
    "Hands"
  ],
  pricing: [
    {
      serviceChild: "Face",
      isPromoEligible: true,
      standardPrice: "$140USD",
      promoPrice: "$120USD",
      notes: null
    },
    {
      serviceChild: "Face + Neck",
      isPromoEligible: true,
      standardPrice: "$170USD",
      promoPrice: "$150USD",
      notes: null
    },
    {
      serviceChild: "Face + Neck + Décolleté",
      isPromoEligible: true,
      standardPrice: "$190USD",
      promoPrice: "$165USD",
      notes: null
    }
  ],
  addOns: [],

  expectations: {
    preTreatment: [
      "Avoid retinoids, AHAs/BHAs, and exfoliation for 3 days prior.",
      "No active acne, open wounds, or infections at the treatment site."
    ],
    postTreatment: [
      "Expect redness similar to a sunburn for 24–72 hours.",
      "Avoid sun, sweating, and active skincare for 2–3 days post-treatment."
    ]
  },

  faq: [
    {
      question: "How many sessions will I need?",
      answer:
        "Most patients need 3–6 sessions spaced 4–6 weeks apart for best results."
    },
    {
      question: "Can I wear makeup after?",
      answer:
        "It’s recommended to wait 24–48 hours post-treatment before applying makeup."
    },
    {
      question: "Is it safe for darker skin?",
      answer:
        "Yes, microneedling is generally safe for all skin tones with proper protocols."
    }
  ]
};