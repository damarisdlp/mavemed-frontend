export const hydrafacial = {
  urlSlug: "hydrafacial",
  category: "facials",
  categoryDisplayName: "Facials",
  serviceDisplayName: "HydraFacial MD",
  isPopular: true,
  isPromoEligible: false,
  images: {
    primary: "/hydrafacial.jpg",
    secondary: "/hydrafacial2.jpg",
  },
  description: 
  "Experience a medical-grade HydraFacial in Tijuana featuring patented Vortex-Fusion® technology for deep pore cleansing, painless extractions, and intense skin hydration. Perfect for acne-prone, dry, or congested skin.",
  details: 
  "HydraFacial MD is a multi-step, medical-grade facial that uses patented Vortex-Fusion® technology to deeply cleanse, exfoliate, and infuse hydrating serums into the skin. It’s ideal for clients with acne-prone, dull, or congested complexions seeking clearer, more radiant skin.",
  notes: [
          "No downtime — makeup can be applied the same day",
          "Safe for all skin tones and sensitive skin types",
          "Includes optional manual extractions when needed"
        ],
  pricing: {
    startingPrice: "$95",
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Hydrafacial MD - Face",
        isPromoEligible: false,
        optionPrice: "$95",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "Hydrafacial MD - Shoulders",
        isPromoEligible: false,
        optionPrice: "$TBD",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "Hydrafacial MD - Upper Back",
        isPromoEligible: false,
        optionPrice: "$TBD",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
      }
    ]
  },
  goals: [
    "Deeply cleanse and exfoliate the skin",
    "Unclog pores and remove blackheads",
    "Hydrate and brighten dull or uneven skin"
  ],
  treatableAreas: [
    "Face", 
    "Shoulders",
    "Upper Back",
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
      "Avoid using retinol, acids, and exfoliants 48 hours before treatment."
    ],
    postTreatment: [
      "Enjoy immediate glow and hydration.",
      "Avoid harsh skincare products for 24 hours and apply sunscreen."
    ]
  },
  faq: [
    {
      question: "How often should I get a HydraFacial?",
      answer: "For optimal results, we recommend a HydraFacial every 4 weeks to maintain clear, glowing skin."
    },
    {
      question: "Is HydraFacial good for acne?",
      answer: "Yes. HydraFacial gently removes impurities, clears pores, and delivers acne-fighting serums for smoother skin."
    },
    {
      question: "Can I wear makeup after a HydraFacial?",
      answer: "Yes. Makeup can be applied the same day, but many patients prefer to enjoy the natural post-treatment glow."
    }
  ]
};