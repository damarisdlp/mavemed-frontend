export const janssenUltraRenewal = {
  urlSlug: "facials-janssen-ultra-renewal",
  category: "facials",
  categoryDisplayName: "Facials & Add-Ons",
  serviceDisplayName: "Janssen Ultra Renewal Facial",
  isPopular: false,
  isPromoEligible: false,

  images: {
    primary: "/janssen-ultra.jpg",
    secondary: "/janssen-ultra2.jpg",
  },

  description:
    "A gentle yet effective AHA and peptide-based peel that stimulates skin renewal and refines texture.",

  details:
    "This advanced facial combines alpha hydroxy acids (AHAs) with peptides to exfoliate, stimulate cell turnover, and brighten the skin. It’s perfect for those seeking renewal without harsh downtime.",

  pricing: {
    startingPrice: "$TBD",
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Face",
        isPromoEligible: false,
        optionPrice: "$70",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "Face + Neck",
        isPromoEligible: false,
        optionPrice: "$TBD",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "Face + Neck + Décolleté",
        isPromoEligible: false,
        optionPrice: "$TBD",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null
      }
    ]
  },

  notes: [
    "Minimal downtime and safe for most skin types",
    "Ideal for dull or uneven skin tone",
    "Great monthly maintenance option"
  ],

  goals: [
    "Improve skin tone and clarity",
    "Stimulate collagen and cell renewal",
    "Minimize the appearance of pores and fine lines"
  ],

  treatableAreas: ["Face","Neck","Décolleté"],
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
      "Avoid retinol, acids, or exfoliating agents for 3 days prior."
    ],
    postTreatment: [
      "Mild redness may occur.",
      "Use hydrating products and sunscreen",
      "Avoid exfoliating products for 3 days."
    ]
  },

  faq: [
    {
      question: "Is this facial suitable for sensitive skin?",
      answer: "Yes, it’s formulated to be effective yet gentle enough for most skin types."
    },
    {
      question: "How often should I get this facial?",
      answer: "It can be done monthly as part of your regular skincare routine."
    }
  ]
};