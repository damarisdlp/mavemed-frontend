export const hydrafacial = {
  urlSlug: "hydrafacial",
  category: "facials",
  categoryDisplayName: {
    en: "Facials",
    es: "Faciales"
  },
  serviceDisplayName: {
    en: "HydraFacial MD",
    es: "HydraFacial MD"
  },
  isPopular: true,
  isPromoEligible: false,
  images: {
    primary: "/hydrafacial.jpg",
    secondary: "/hydrafacial2.jpg"
  },
  description: {
    en: "Experience a medical-grade HydraFacial in Tijuana featuring patented Vortex-Fusion® technology for deep pore cleansing, painless extractions, and intense skin hydration. Perfect for acne-prone, dry, or congested skin.",
    es: "Experience a medical-grade HydraFacial in Tijuana featuring patented Vortex-Fusion® technology for deep pore cleansing, painless extractions, and intense skin hydration. Perfect for acne-prone, dry, or congested skin."
  },
  details: {
    en: "HydraFacial MD is a multi-step, medical-grade facial that uses patented Vortex-Fusion® technology to deeply cleanse, exfoliate, and infuse hydrating serums into the skin. It’s ideal for clients with acne-prone, dull, or congested complexions seeking clearer, more radiant skin.",
    es: "HydraFacial MD is a multi-step, medical-grade facial that uses patented Vortex-Fusion® technology to deeply cleanse, exfoliate, and infuse hydrating serums into the skin. It’s ideal for clients with acne-prone, dull, or congested complexions seeking clearer, more radiant skin."
  },
  notes: [
    {
      en: "No downtime — makeup can be applied the same day",
      es: "No downtime — makeup can be applied the same day"
    },
    {
      en: "Safe for all skin tones and sensitive skin types",
      es: "Safe for all skin tones and sensitive skin types"
    },
    {
      en: "Includes optional manual extractions when needed",
      es: "Includes optional manual extractions when needed"
    }
  ],
  pricing: {
    startingPrice: { en: "$95", es: "$95" },
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: {
          en: "Hydrafacial MD - Face",
          es: "Hydrafacial MD - Face"
        },
        isPromoEligible: false,
        optionPrice: { en: "$95", es: "$95" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: {
          en: "Hydrafacial MD - Shoulders",
          es: "Hydrafacial MD - Shoulders"
        },
        isPromoEligible: false,
        optionPrice: { en: "$130", es: "$130" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      },
      {
        optionName: {
          en: "Hydrafacial MD - Upper Back",
          es: "Hydrafacial MD - Upper Back"
        },
        isPromoEligible: false,
        optionPrice: { en: "$150", es: "$150" },
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: []
      }
    ]
  },
  goals: [
    {
      en: "Deeply cleanse and exfoliate the skin",
      es: "Deeply cleanse and exfoliate the skin"
    },
    {
      en: "Unclog pores and remove blackheads",
      es: "Unclog pores and remove blackheads"
    },
    {
      en: "Hydrate and brighten dull or uneven skin",
      es: "Hydrate and brighten dull or uneven skin"
    }
  ],
  treatableAreas: [
    {
      en: "Face",
      es: "Face"
    },
    {
      en: "Shoulders",
      es: "Shoulders"
    },
    {
      en: "Upper Back",
      es: "Upper Back"
    }
  ],
  addOns: [
    {
      serviceParent: "Wrinkle Reducer - Botox",
      serviceChild: "Any Zone",
      displayName: {
        en: "Wrinkle Reducer - Botox",
        es: "Wrinkle Reducer - Botox"
      },
      link: "/treatments/wrinkle-reducers-botox"
    }
  ],
  expectations: {
    preTreatment: [
      {
        en: "Avoid using retinol, acids, and exfoliants 48 hours before treatment.",
        es: "Avoid using retinol, acids, and exfoliants 48 hours before treatment."
      }
    ],
    postTreatment: [
      {
        en: "Enjoy immediate glow and hydration.",
        es: "Enjoy immediate glow and hydration."
      },
      {
        en: "Avoid harsh skincare products for 24 hours and apply sunscreen.",
        es: "Avoid harsh skincare products for 24 hours and apply sunscreen."
      }
    ]
  },
  faq: [
    {
      question: {
        en: "How often should I get a HydraFacial?",
        es: "How often should I get a HydraFacial?"
      },
      answer: {
        en: "For optimal results, we recommend a HydraFacial every 4 weeks to maintain clear, glowing skin.",
        es: "For optimal results, we recommend a HydraFacial every 4 weeks to maintain clear, glowing skin."
      }
    },
    {
      question: {
        en: "Is HydraFacial good for acne?",
        es: "Is HydraFacial good for acne?"
      },
      answer: {
        en: "Yes. HydraFacial gently removes impurities, clears pores, and delivers acne-fighting serums for smoother skin.",
        es: "Yes. HydraFacial gently removes impurities, clears pores, and delivers acne-fighting serums for smoother skin."
      }
    },
    {
      question: {
        en: "Can I wear makeup after a HydraFacial?",
        es: "Can I wear makeup after a HydraFacial?"
      },
      answer: {
        en: "Yes. Makeup can be applied the same day, but many patients prefer to enjoy the natural post-treatment glow.",
        es: "Yes. Makeup can be applied the same day, but many patients prefer to enjoy the natural post-treatment glow."
      }
    }
  ]
};
