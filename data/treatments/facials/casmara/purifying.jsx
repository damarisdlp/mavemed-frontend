export const casmaraPurifying = {
  slug: "casmara-purifying",
  category: "facials",
  categoryDisplayName: "Facials & Add‑Ons",
  serviceDisplayName: "Casmara Purifying Algae Facial",
  isPopular: false,
  isPromoEligible: false,
  image: "/facials.jpg",
  image2: "/facials2.jpg",
  description: "A detoxifying facial treatment featuring Casmara’s purifying algae mask to target oily, acne-prone, and congested skin. This clarifying facial soothes inflammation and restores skin balance.",
  standardPrice: "$85 USD",
  promoPrice: null,
  notes: [
    "Includes manual extractions and optional high-frequency therapy",
    "Ideal for teens, oily or acne-prone skin, and congested pores",
    "Soothing formula helps calm redness and inflammation"
  ],
  details: "The Casmara Purifying Algae Facial is a professional-grade treatment designed to cleanse and rebalance oily, acne-prone, or inflamed skin. This facial includes steam, manual extractions, and high-frequency therapy when needed. The purifying algae mask helps reduce oil production, calm irritation, and decongest clogged pores for clearer, healthier skin.",
  goals: [
    "Detoxify pores and remove impurities",
    "Calm redness and reduce inflammation",
    "Rebalance oily or congested skin types"
  ],
  treatableAreas: ["Face"],
  pricing: [
    {
      serviceChild: "Face",
      isPromoEligible: false,
      standardPrice: "$85 USD",
      promoPrice: null,
      notes: null
    }
  ],
  addOns: [
    {
      serviceParent: "Wrinkle Reducer - Botox",
      serviceChild:  "Forehead",
      displayName:   "Botox - Forehead",
      link:          "/treatments/wrinkleReducers/botox"
    },
    {
      serviceParent: "Wrinkle Reducer - Botox",
      serviceChild:  "Frown Lines (Glabella)",
      displayName:   "Botox - Frown Lines (Glabella)",
      link:          "/treatments/wrinkleReducers/botox"
    },
    {
      serviceParent: "Wrinkle Reducer - Botox",
      serviceChild:  "Crow’s Feet",
      displayName:   "Botox - Crow’s Feet",
      link:          "/treatments/wrinkleReducers/botox"
    }
  ],
  expectations: {
    preTreatment: [
      "Stop using retinoids, AHAs, or strong exfoliants at least 48 hours before your appointment."
    ],
    postTreatment: [
      "Avoid heavy makeup and direct sun exposure for 24–48 hours after treatment."
    ]
  },
  faq: [
    {
      question: "Is the Casmara facial good for sensitive or acne-prone skin?",
      answer: "Yes. This treatment is gentle yet effective for sensitive, oily, or acne-prone skin and helps reduce inflammation and redness."
    },
    {
      question: "Are extractions included with this facial?",
      answer: "Yes. Manual extractions are performed as needed and followed by high-frequency therapy to reduce bacteria and calm the skin."
    }
  ]
};