export const janssenRadianceBoost = {
  urlSlug: "facials-janssen-radiance-boost",
  category: "facials",
  categoryDisplayName: "Facials & Add‑Ons",
  serviceDisplayName: "Janssen Radiance Boost Facial",
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/janssen-radiance.jpg",
    secondary: "/janssen-radiance2.jpg"
  },
  description:
    "Brightening antioxidant facial to restore luminosity, even tone, and improve hydration.",
  details:
    "The Radiance Boost Facial uses potent antioxidant serums, hydration masks, and oxygenating techniques to revitalize tired-looking skin. This is your go-to glow facial before any big event or seasonal change.",
  pricing: {
    startingPrice: "$70",
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Face",
        isPromoEligible: false,
        optionPrice: "$70",
        optionCurrency: "USD",
        optionPromoPrice: "$40",
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
  goals: [
    "Re-energize dull skin",
    "Hydrate and plump",
    "Even out skin tone and texture"
  ],
  treatableAreas: ["Full Face"],
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
      "Come with clean skin; no exfoliation needed before your appointment."
    ],
    postTreatment: [
      "No downtime expected.",
      "Skin may look slightly pink from massage but should fade quickly."
    ]
  },
  faq: [
    {
      question: "Will my skin glow immediately after?",
      answer: "Yes, the facial is designed to enhance radiance and hydration instantly."
    },
    {
      question: "Is this safe during pregnancy?",
      answer: "Yes, this facial does not use any harsh acids or retinol, making it safe for pregnant clients."
    }
  ]
};