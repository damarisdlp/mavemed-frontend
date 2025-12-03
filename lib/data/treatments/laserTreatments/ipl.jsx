export const ipl = {
  urlSlug: "ipl",
  category: "laser-resurfacing",
  categoryDisplayName: "Laser Treatments & Skin Resurfacing",
  serviceDisplayName: "IPL Photofacial (Harmony XL)",
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/ipl.jpg",
    secondary: "/ipl2.jpg"
  },
  description:
    "Light-based therapy to reduce sun damage, pigmentation, redness, and boost overall skin clarity.",
  details:
    "IPL (Intense Pulsed Light) delivers broad-spectrum light to target pigment, sun spots, redness, and broken capillaries. It gently resurfaces and revitalizes without damaging the top layer of skin.",
  notes: [
    "Package pricing available for multiple sessions",
    "Requires photo evaluation for clearance",
    "No active tan or self-tanner before session"
  ],
  pricing: {
    startingPrice: "$30",
    startingPriceCurrency: "USD",
    promoPrice: "$",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "IPL Photofacial - Scars (Subject Evaluation)",
        isPromoEligible: false,
        optionPrice: "$30",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "IPL Photofacial - Neck",
        isPromoEligible: false,
        optionPrice: "$35",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "IPL Photofacial - Décolleté",
        isPromoEligible: false,
        optionPrice: "$35",
        optionCurrency: "USD",
        optionPromoPrice: "$350",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "IPL Photofacial - Full Face",
        isPromoEligible: false,
        optionPrice: "$40",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "IPL Photofacial - Hands",
        isPromoEligible: false,
        optionPrice: "$40",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "IPL Photofacial - Chest",
        isPromoEligible: false,
        optionPrice: "$50",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "IPL Photofacial - Full Face + Neck",
        isPromoEligible: false,
        optionPrice: "$70",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "IPL Photofacial - Full Face + Neck + Décolleté",
        isPromoEligible: false,
        optionPrice: "$100",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "IPL Photofacial - Full Legs",
        isPromoEligible: false,
        optionPrice: "$125",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "IPL Photofacial - Full Face + Neck + Décolleté + Chest",
        isPromoEligible: false,
        optionPrice: "$140",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "IPL Photofacial - Hands + Full Legs",
        isPromoEligible: false,
        optionPrice: "$160",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      }
    ]
  },
  goals: [
    "Reduce pigmentation and age spots",
    "Minimize redness and rosacea",
    "Brighten dull skin and improve tone"
  ],
  treatableAreas: [
    "Face",
    "Neck",
    "Chest",
    "Hands",
    "Shoulders",
    "Arms",
    "Other zones available upon request"
  ],
  addOns: [
    {
      serviceParent: "Wrinkle Reducer - Botox",
      serviceChild:  "Any Zone",
      displayName:   "Wrinkle Reducer - Botox",
      link:          "/treatments/wrinkle-reducers-botox"
    },
    {
      serviceParent: "HydraFacial MD",
      serviceChild:  "Hydrafacial MD - Face",
      displayName:   "HydraFacial MD - Face",
      link:          "/treatments/hydrafacial"
    },
    {
      serviceParent: "Relaxing Swedish Massage",
      serviceChild:  "Relaxing Swedish Massage - Full Body",
      displayName:   "Relaxing Swedish Massage - Full Body",
      link:          "/treatments/swedish-massage"
    },
  ],
  expectations: {
    preTreatment: [
      "Avoid sun exposure, tanning beds, and self-tanners for 2 weeks before treatment.",
      "Discontinue retinoids or acids 3–5 days prior to your session."
    ],
    postTreatment: [
      "Pigmented areas may darken temporarily before flaking off over 5–7 days.",
      "Use SPF daily to maintain results and prevent new pigmentation."
    ]
  },
  faq: [
    {
      question: "How many sessions will I need?",
      answer: "Most patients need 3–5 sessions spaced 3–4 weeks apart for best results."
    },
    {
      question: "Is there downtime?",
      answer: "There is no official downtime. However, pigmented areas may darken or flake for a few days post-treatment."
    },
    {
      question: "Can I wear makeup after IPL?",
      answer: "Yes, makeup can be worn immediately unless otherwise advised by your provider."
    },
    {
      question: "Does IPL hurt?",
      answer: "Patients describe it as a warm snap—similar to a rubber band. It’s tolerable and quick."
    }
  ]
};