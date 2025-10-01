export const hydrafacial = {
  slug: "hydrafacial",
  category: "facials",
  categoryDisplayName: "Facials & Add‑Ons",
  serviceDisplayName: "HydraFacial MD – Face",
  isPopular: true,
  isPromoEligible: false,
  image: "/hydrafacial.jpg",
  image2: "/hydrafacial2.jpg",
  description: 
  "Experience a medical-grade HydraFacial in Tijuana featuring patented Vortex-Fusion® technology for deep pore cleansing, painless extractions, and intense skin hydration. Perfect for acne-prone, dry, or congested skin.",
  standardPrice: "Starting at $95 USD",
  promoPrice: null,
  notes: [
    "No downtime — makeup can be applied the same day",
    "Safe for all skin tones and sensitive skin types",
    "Includes optional manual extractions when needed"
  ],
  details: 
  "HydraFacial MD is a multi-step, medical-grade facial that uses patented Vortex-Fusion® technology to deeply cleanse, exfoliate, and infuse hydrating serums into the skin. It’s ideal for clients with acne-prone, dull, or congested complexions seeking clearer, more radiant skin.",
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
  pricing: [
    {
      serviceChild: "Face",
      isPromoEligible: false,
      standardPrice: "$95 USD",
      promoPrice: null,
      notes: null
    },
    {
      serviceChild: "Shoulders",
      isPromoEligible: false,
      standardPrice: "$TBD USD",
      promoPrice: null,
      notes: null
    },
    {
      serviceChild: "Upper Back",
      isPromoEligible: false,
      standardPrice: "$TBD USD",
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
      "Avoid using retinol, acids, and exfoliants 48 hours before treatment."
    ],
    postTreatment: [
      "Enjoy immediate glow and hydration. Avoid harsh skincare products for 24 hours and apply sunscreen."
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