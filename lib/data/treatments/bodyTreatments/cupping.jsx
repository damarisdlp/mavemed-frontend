export const cupping = {
  urlSlug: "cupping",
  category: "body-medical-treatments",
  categoryDisplayName: "Body & Medical Treatments",
  serviceDisplayName: "Cupping Therapy - Add‑On",
  isPopular: false,
  isPromoEligible: false,

  images: {
    primary: "/cupping.jpg",
    secondary: "/cupping2.jpg",
  },

  description:
    "Therapeutic cupping paired with massage to enhance circulation, relieve tension, and support detoxification.",
  details:
    "Cupping therapy uses suction to draw blood flow to targeted areas, reducing inflammation and promoting muscle recovery. It is commonly integrated into massage sessions for added therapeutic benefit.",

  notes: [
    "Add-on service only, not available as a standalone treatment",
    "May leave temporary circular marks on the skin",
    "Customizable pressure based on comfort level"
  ],

  pricing: {
    startingPrice: "$10",
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Cupping Add‑On",
        isPromoEligible: false,
        optionPrice: "$10",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: ["Only available as an add-on to Swedish massage"]
      },
    ],
  },

  goals: [
    "Stimulate circulation",
    "Relieve muscle tension",
    "Support lymphatic detox"
  ],

  treatableAreas: ["Back", "Shoulders", "Thighs", "Calves", "Arms"],

  addOns: [
    {
      serviceParent: "Relaxing Swedish Massage - Full Body",
      serviceChild:  "Relaxing Swedish Massage - Full Body",
      displayName:   "Relaxing Swedish Massage - Full Body",
      link:          "/treatments/swedish-massage"
    },
  ],

  expectations: {
    preTreatment: [
      "Wear loose clothing.",
      "Notify your provider of any skin conditions or medications that affect clotting."
    ],
    postTreatment: [
      "Mild soreness or redness is normal.",
      "Stay hydrated to support detox."
    ]
  },

  faq: [
    {
      question: "Does cupping hurt?",
      answer: "Most clients feel a tight pulling sensation, not pain. It’s generally well tolerated."
    },
    {
      question: "Will I have marks afterward?",
      answer: "Yes, cupping often leaves painless circular marks that fade within a few days."
    }
  ]
};