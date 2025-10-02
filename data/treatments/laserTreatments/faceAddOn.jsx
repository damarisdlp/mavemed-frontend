export const serumAddOns = {
  urlSlug: "serum-add-ons",
  category: "laser-resurfacing",
  categoryDisplayName: "Laser Treatments & Skin Resurfacing",
  serviceDisplayName: "Serum Add-Ons",
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/serum.jpg",
    secondary: "/serum2.jpg",
  },
  description: "",
  details: "",
  notes: [
        ],
  pricing: {
    startingPrice: "$95",
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "PRP or PRFM",
        isPromoEligible: false,
        optionPrice: "$90",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: ["Uses patient's own plasma or fibrin matrix"]
      },
      {
        optionName: "Kiara Reju",
        isPromoEligible: false,
        optionPrice: "$190",
        optionCurrency: "USD",
        optionPromoPrice: "$170",
        optionPromoPriceCurrency: "USD",
        notes: ["PN + HA + Niacinamide booster"]
      },
      {
        optionName: "Rejuran - Full Face",
        isPromoEligible: false,
        optionPrice: "$300",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: "USD",
        notes: ["Salmon DNA-based cellular regeneration"]
      },
    ]
  },
  goals: [
    "Firm and lift sagging skin",
    "Hydrate deeply and nourish",
    "Soften fine lines and signs of aging"
  ],
  treatableAreas: [
    "Face",
  ],
  addOns: [
    {
      serviceParent: "Wrinkle Reducer - Botox",
      serviceChild:  "Any Zone",
      displayName:   "Wrinkle Reducer - Botox",
      link:          "/treatments/wrinkle-reducers-botox"
    }
  ],
  expectations: {
    preTreatment: [
      "No special preparation needed.",
      "Avoid retinoids or peels for 48 hours prior if possible."
    ],
    postTreatment: [
      "Your skin will look lifted and luminous right after.",
      "Avoid harsh products or exfoliation for 24 hours."
    ]
  },
  faq: [
    {
      question: "Is this facial good for mature skin?",
      answer: "Yes, it’s specifically designed for aging skin to boost firmness, elasticity, and glow."
    },
    {
      question: "Can I wear makeup after this facial?",
      answer: "Yes, but we recommend letting your skin breathe for a few hours post-treatment for best results."
    }
  ]
};