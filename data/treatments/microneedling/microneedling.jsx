export const microneedling = {
  urlSlug: "microneedling",
  category: "microneedling & mesotherapy",
  categoryDisplayName: "Microneedling & Mesotherapy",
  serviceDisplayName: "Microneedling Skin Renewal",
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/microneedling.jpg",
    secondary: "/microneedling2.jpg",
  },
  description:
    "Refine texture, shrink pores, and stimulate collagen through precision microneedling using fine sterile needles. Enhance results with powerful infusion options like PRP/PRFM, Rejuran, or Kiara Reju.",
  details:
    "Microneedling uses fine needles to create micro-channels in the skin, triggering the body’s natural healing response and promoting collagen, elastin, and skin cell regeneration. It improves texture, firmness, and reduces scarring over time. Options like PRP, Rejuran, and Kiara Reju can be infused for deeper regenerative benefits.",
  notes: [
    "3–6 sessions recommended for optimal results",
    "Safe for most skin types",
    "Downtime: 1–3 days of redness possible"
  ],
  pricing: {
    startingPrice: "$140",
    startingPriceCurrency: "USD",
    promoPrice: "$120",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Microneedling Only (Base Treatment)",
        isPromoEligible: false,
        optionPrice: "$140",
        optionCurrency: "USD",
        optionPromoPrice: "$120",
        optionPromoPriceCurrency: "USD",
        notes: ["Includes Toskani Lumicen Gel serum infusion only"]
      },
      {
        optionName: "Microneedling - PRP or PRFM",
        isPromoEligible: false,
        optionPrice: "$160",
        optionCurrency: "USD",
        optionPromoPrice: "$160",
        optionPromoPriceCurrency: "USD",
        notes: ["Uses patient's own plasma or fibrin matrix"]
      },
      {
        optionName: "Microneedling - Kiara Reju",
        isPromoEligible: false,
        optionPrice: "$190",
        optionCurrency: "USD",
        optionPromoPrice: "$170",
        optionPromoPriceCurrency: "USD",
        notes: ["PN + HA + Niacinamide booster"]
      },
      {
        optionName: "Microneedling Skin Renewal - Rejuran - Full Face",
        isPromoEligible: false,
        optionPrice: "$300",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: "USD",
        notes: ["Salmon DNA-based cellular regeneration"]
      },
    ],
  },
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
  addOns: [
     {
      serviceParent: "Wrinkle Reducer - Botox",
      serviceChild:  "Any Zone",
      displayName:   "Wrinkle Reducer - Botox",
      link:          "/treatments/wrinkle-reducers-botox"
    },
    {
      serviceParent: "HydraFacial MD",
      serviceChild:  "Hydrafacial MD - Face",
      displayName:   "HydraFacial MD - Face",
      link:          "/treatments/hydrafacial"
    }
  ],
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
      question: "Which infusion option is best for me?",
      answer:
        "PRP/PRFM uses your own plasma for regeneration. Kiara Reju adds hydration and glow. Rejuran deeply repairs at the cellular level. Your provider will recommend based on your skin needs."
    },
    {
      question: "Is this safe for all skin types?",
      answer:
        "Yes, microneedling is safe for most skin tones. Rejuran and Kiara Reju are ideal for sensitive or aging skin."
    },
    {
      question: "Can I combine this with other treatments?",
      answer:
        "Yes, microneedling pairs well with facials, laser, or RF for enhanced results. Always consult your provider."
    }
  ]
};