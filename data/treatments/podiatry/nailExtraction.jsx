export const toenailExtraction = {
  slug: "toenail-extraction",
  category: "podiatry",
  categoryDisplayName: "Medical Podiatry Services",
  serviceDisplayName: "Toenail Extraction Procedure",
  isPopular: false,
  isPromoEligible: true,
  image: "/podiatry.jpg",
  image2: "/podiatry2.jpg",
  description: "Partial or total nail removal to treat severely ingrown, infected, or damaged toenails.",
  standardPrice: "$115USD",
  promoPrice: "$95USD",
  notes: [
    "Performed by medical professionals using sterile technique",
    "Antibiotics or topical antifungals may be prescribed as needed"
  ],
  details: "This medical procedure removes part or all of the toenail to relieve pressure, drain infection, and promote healthy regrowth. Often recommended for chronic ingrown nails or trauma.",
  goals: [
    "Eliminate pain or infection",
    "Prevent recurrent ingrown nails",
    "Improve nail health and appearance"
  ],
  treatableAreas: ["Big toe", "Lesser toes"],
  pricing: [
    {
      serviceChild: "Partial Extraction",
      isPromoEligible: true,
      standardPrice: "$115USD",
      promoPrice: "$95USD",
      notes: null
    },
    {
      serviceChild: "Total Extraction",
      isPromoEligible: true,
      standardPrice: "$135USD",
      promoPrice: "$110USD",
      notes: null
    }
  ],
  addOns: [],
  expectations: {
    preTreatment: [
      "Do not trim nails before the appointment. Wear open footwear if possible."
    ],
    postTreatment: [
      "Keep area clean, dry, and covered. Follow wound care instructions and take medication as prescribed."
    ]
  },
  faq: [
    {
      question: "Is the procedure painful?",
      answer: "The area is numbed beforehand, so most patients feel no pain during the procedure. Some mild soreness is expected after."
    },
    {
      question: "Will the nail grow back?",
      answer: "It depends. Partial extractions typically regrow, while full extractions may or may not, depending on matrix involvement."
    }
  ]
};