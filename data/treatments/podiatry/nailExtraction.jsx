export const toenailExtraction = {
  urlSlug: "toenail-extraction",
  category: "podiatry",
  categoryDisplayName: "Medical Podiatry Services",
  serviceDisplayName: "Toenail Extraction Procedure",
  isPopular: false,
  isPromoEligible: true,
  images: {
    primary: "/podiatry.jpg",
    secondary: "/podiatry2.jpg",
  },
  description:
    "Partial or total nail removal to treat severely ingrown, infected, or damaged toenails with long-term relief.",
  details:
    "Performed under local anesthesia, this outpatient procedure removes part or all of the toenail to reduce pain, clear infection, and improve overall nail health. It is commonly recommended for chronic ingrown toenails, nail trauma, or persistent infections. Proper sterile technique is followed to ensure safety and healing.",
  notes: [
    "Performed by licensed medical professionals under sterile conditions",
    "Topical antifungals or oral antibiotics may be prescribed post-procedure",
    "Healing varies depending on procedure extent and patient care"
  ],
  pricing: {
    startingPrice: "$115 USD",
    startingPriceCurrency: "USD",
    promoPrice: "$95 USD",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Partial Extraction",
        isPromoEligible: true,
        optionPrice: "$115 USD",
        optionCurrency: "USD",
        optionPromoPrice: "$95 USD",
        optionPromoPriceCurrency: "USD",
        notes: null,
      },
      {
        optionName: "Total Extraction",
        isPromoEligible: true,
        optionPrice: "$135 USD",
        optionCurrency: "USD",
        optionPromoPrice: "$110 USD",
        optionPromoPriceCurrency: "USD",
        notes: null,
      }
    ]
  },
  goals: [
    "Eliminate nail pain or infection",
    "Prevent recurrent ingrown toenails",
    "Improve nail health and appearance"
  ],
  treatableAreas: [
    "Big Toe",
    "Lesser Toes"
  ],
  addOns: [
    {
      serviceParent: "Matrixectomy",
      serviceChild: "Matrixectomy (Permanent Ingrown Nail Removal)",
      displayName: "Add Matrixectomy for Permanent Prevention",
      link: "/treatments/podiatry/matrixectomy"
    },
    {
      serviceParent: "Laser Fungus Therapy",
      serviceChild: "Laser Nail Fungus Treatment",
      displayName: "Laser Fungus Treatment for Infection Control",
      link: "/treatments/podiatry/nail-fungus-laser"
    }
  ],
  expectations: {
    preTreatment: [
      "Do not trim or alter the nail before your appointment.",
      "Wear open-toe or loose footwear to accommodate bandaging post-treatment."
    ],
    postTreatment: [
      "Keep the area dry and covered for 24–48 hours, then follow wound care instructions.",
      "Take any prescribed medications as directed.",
      "Avoid strenuous activity or tight shoes until healing is underway."
    ]
  },
  faq: [
    {
      question: "Is toenail extraction painful?",
      answer: "No. The toe is numbed using local anesthesia. Mild discomfort may occur afterward and can be managed with over-the-counter medication."
    },
    {
      question: "Will the nail grow back?",
      answer: "Partial extractions usually regrow. Total extractions may or may not, depending on whether the nail matrix is also removed."
    },
    {
      question: "How long is the recovery time?",
      answer: "Most patients recover within 1–2 weeks for partial, and up to 3 weeks for total extractions. Proper aftercare speeds up healing."
    }
  ]
};