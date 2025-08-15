export const matrixectomy = {
  slug: "matrixectomy",
  category: "podiatry",
  categoryDisplayName: "Medical Podiatry Services",
  serviceDisplayName: "Matrixectomy (Permanent Ingrown Nail Removal)",
  isPopular: false,
  isPromoEligible: true,
  image: "/podiatry.jpg",
  image2: "/podiatry2.jpg",
  description: "Surgical removal of part of the nail matrix to permanently prevent ingrown toenails.",
  standardPrice: "$160USD",
  promoPrice: "$130USD",
  notes: [
    "Recommended after repeated ingrown nail infections or failed conservative treatment",
    "Performed under local anesthesia"
  ],
  details: "Matrixectomy involves destroying or removing a portion of the nail matrix (growth center) to prevent regrowth of the problematic nail edge. It offers a permanent solution to chronic ingrown toenails.",
  goals: [
    "Prevent recurrence of ingrown toenail",
    "Reduce chronic inflammation and infection",
    "Improve toe comfort and function"
  ],
  treatableAreas: ["Big toe", "Lesser toes (case-dependent)"],
  pricing: [
    {
      serviceChild: "Single Toe",
      isPromoEligible: true,
      standardPrice: "$160USD",
      promoPrice: "$130USD",
      notes: null
    }
  ],
  addOns: [],
  expectations: {
    preTreatment: [
      "Don’t trim the toenail beforehand. Bring sandals or loose shoes to wear after the procedure."
    ],
    postTreatment: [
      "Keep toe elevated for the first 24 hours. Change dressings as instructed. Avoid tight shoes and intense activity for a few days."
    ]
  },
  faq: [
    {
      question: "Is matrixectomy permanent?",
      answer: "Yes. The goal is to permanently prevent regrowth of the treated nail portion."
    },
    {
      question: "Is the recovery painful?",
      answer: "There may be mild pain for 1–2 days, which can be managed with over-the-counter pain relievers and proper care."
    }
  ]
};