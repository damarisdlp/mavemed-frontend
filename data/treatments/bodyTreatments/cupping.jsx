export const cupping = {
  slug: "cupping",
  category: "body-treatments",
  categoryDisplayName: "Body & Medical Treatments",
  serviceDisplayName: "Cupping Therapy Add‑On",
  isPopular: false,
  isPromoEligible: true,
  image: "/body.jpg",
  image2: "/body2.jpg",
  description: "Therapeutic cupping paired with massage to enhance circulation, relieve tension, and support detoxification.",
  standardPrice: "$25USD",
  promoPrice: "$20USD",
  notes: [
    "Add-on service only, not available as a standalone treatment",
    "May leave temporary circular marks on the skin",
    "Customizable pressure based on comfort level"
  ],
  details: "Cupping therapy uses suction to draw blood flow to targeted areas, reducing inflammation and promoting muscle recovery. It is commonly integrated into massage sessions for added therapeutic benefit.",
  goals: [
    "Stimulate circulation",
    "Relieve muscle tension",
    "Support lymphatic detox"
  ],
  treatableAreas: ["Back", "Shoulders", "Thighs"],
  pricing: [
    {
      serviceChild: "Single Area (Add‑On)",
      isPromoEligible: true,
      standardPrice: "$25USD",
      promoPrice: "$20USD",
      notes: "Only available as an add-on to massage or RF treatments"
    }
  ],
  addOns: [],
  expectations: {
    preTreatment: [
      "Wear loose clothing. Notify your provider of any skin conditions or medications that affect clotting."
    ],
    postTreatment: [
      "Mild soreness or redness is normal. Stay hydrated to support detox."
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