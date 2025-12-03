export const matrixectomy = {
  urlSlug: "matrixectomy",
  category: "podiatry",
  categoryDisplayName: "Medical Podiatry Services",
  serviceDisplayName: "Matrixectomy (Permanent Ingrown Nail Removal)",
  isPopular: false,
  isPromoEligible: true,
  images: {
    primary: "/podiatry.jpg",
    secondary: "/podiatry2.jpg",
  },
  description:
    "Surgical removal of part of the nail matrix to permanently prevent ingrown toenails and recurring infections.",
  details:
    "Matrixectomy is a minor outpatient procedure that permanently removes or destroys part of the nail’s growth center (matrix), preventing the ingrown portion from growing back. It is performed under local anesthesia and is typically recommended for patients with repeated ingrown toenails or infection. Healing is relatively quick, and most patients return to daily activities within a few days.",
  notes: [
    "Performed under local anesthesia by a licensed podiatrist",
    "Recommended after failed conservative treatments or chronic ingrown nails",
    "Typically performed on one or both sides of the nail depending on the severity"
  ],
  pricing: {
    startingPrice: "$160 USD",
    startingPriceCurrency: "USD",
    promoPrice: "$130 USD",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Single Toe Matrixectomy",
        isPromoEligible: true,
        optionPrice: "$160 USD",
        optionCurrency: "USD",
        optionPromoPrice: "$130 USD",
        optionPromoPriceCurrency: "USD",
        notes: null
      }
    ]
  },
  goals: [
    "Permanently resolve chronic ingrown toenails",
    "Eliminate recurring pain and infections",
    "Improve comfort in walking and wearing shoes"
  ],
  treatableAreas: [
    "Big Toe",
    "Lesser Toes (as recommended by provider)"
  ],
  addOns: [
  ],
  expectations: {
    preTreatment: [
      "Do not trim the affected toenail before your appointment.",
      "Bring open-toed sandals or loose footwear to accommodate post-procedure bandaging.",
      "Notify your provider of any medications or circulation issues."
    ],
    postTreatment: [
      "Elevate your foot for 24 hours and rest as much as possible.",
      "Change the dressing daily or as instructed by your provider.",
      "Avoid tight footwear and strenuous activities for at least 3–5 days.",
      "Mild drainage or redness is normal for a few days. Contact us if pain or swelling worsens."
    ]
  },
  faq: [
    {
      question: "Is matrixectomy a permanent solution?",
      answer: "Yes, the goal is to destroy the nail matrix on the affected side so that portion of the nail does not grow back."
    },
    {
      question: "How painful is the procedure?",
      answer: "The procedure itself is painless due to local anesthesia. Post-procedure discomfort is usually mild and manageable with OTC pain relievers."
    },
    {
      question: "How long is recovery?",
      answer: "Most patients return to regular activities in 2–3 days, though full healing may take up to 2 weeks. You’ll receive specific aftercare instructions."
    },
    {
      question: "Can I get both sides of the nail treated?",
      answer: "Yes, bilateral matrixectomy is an option if both edges are affected. Your provider will assess what’s best based on severity."
    }
  ]
};