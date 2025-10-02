export const mesotherapy = {
  urlSlug: "mesotherapy-infusions",
  category: "microneedling & mesotherapy",
  categoryDisplayName: "Microneedling & Mesotherapy",
  serviceDisplayName: "Mesotherapy Skin Boosters",
  isPopular: true,
  isPromoEligible: true,
  images: {
    primary: "/mesotherapy.jpg",
    secondary: "/mesotherapy2.jpg",
  },
  description:
    "Targeted microinjections of skin-rejuvenating substances like PRP, PDRN, hyaluronic acid, and vitamins to deeply hydrate, heal, and restore radiance.",
  details:
    "Mesotherapy is a minimally invasive treatment that delivers skin-boosting compounds directly into the dermis via microinjections. Common actives include PRP/PRFM (from your blood), polynucleotides (Rejuran), niacinamide boosters (Kiara Reju), and antioxidant-rich cocktails (TKN HA‑3). SkinVive by Juvéderm is also offered for FDA-approved cheek hydration and glow.",
  notes: [
    "Customized per patient’s skin goals and needs",
    "Most options require 2–3 sessions for full results",
    "Minimal downtime – mild redness or swelling may occur"
  ],
  pricing: {
    startingPrice: "$100",
    startingPriceCurrency: "USD",
    promoPrice: "$95",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "PRP or PRFM – 1 Zone",
        isPromoEligible: true,
        optionPrice: "$180",
        optionCurrency: "USD",
        optionPromoPrice: "$160",
        optionPromoPriceCurrency: "USD",
        notes: ["Uses your own plasma or fibrin for natural regeneration"]
      },
      {
        optionName: "Kiara Reju – 1 Zone",
        isPromoEligible: true,
        optionPrice: "$180",
        optionCurrency: "USD",
        optionPromoPrice: "$160",
        optionPromoPriceCurrency: "USD",
        notes: ["PN + HA + Niacinamide for glow and elasticity"]
      },
      {
        optionName: "Rejuran - Full Face",
        isPromoEligible: false,
        optionPrice: "$300",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: "USD",
        notes: ["Salmon DNA-based cellular repair and collagen support"]
      },
      {
        optionName: "SkinVive by Juvéderm – Cheeks",
        isPromoEligible: true,
        optionPrice: "$250",
        optionCurrency: "USD",
        optionPromoPrice: "$220",
        optionPromoPriceCurrency: "USD",
        notes: ["FDA-approved HA microdroplets for glow and smoothness"]
      },
      {
        optionName: "TKN HA‑3 – Full Face",
        isPromoEligible: true,
        optionPrice: "$155",
        optionCurrency: "USD",
        optionPromoPrice: "$135",
        optionPromoPriceCurrency: "USD",
        notes: ["Hydration + antioxidant meso-cocktail ideal for tired or sun-damaged skin"]
      }
    ]
  },
  goals: [
    "Deeply hydrate and brighten skin",
    "Support collagen regeneration",
    "Improve texture, tone, and elasticity"
  ],
  treatableAreas: [
    "Full Face",
    "Neck",
    "Décolleté",
    "Back of Hands",
    "Cheeks",
    "Under Eyes",
    "Scalp (Hair)",
    "Stretch Marks"
  ],
  addOns: [
    {
      serviceParent: "HydraFacial MD",
      serviceChild:  "Hydrafacial MD - Face",
      displayName:   "HydraFacial MD - Face",
      link:          "/treatments/hydrafacial"
    },
    {
      serviceParent: "PDO Thread Lift – Non-Surgical Facial Rejuvenation",
      serviceChild: "Signature Lower Face Lift",
      displayName: "PDO Thread Lift – Non-Surgical Facial Rejuvenation - Signature Lower Face Lift",
      link: "/treatments/pdo-threads"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid alcohol, aspirin, anti-inflammatories, and blood thinners 24–48 hours before your session.",
      "Come with clean skin—no makeup or active skincare on the day of treatment."
    ],
    postTreatment: [
      "Mild redness or small bumps may occur and typically subside within 24–72 hours.",
      "Avoid sun exposure, sweating, and makeup for 24 hours.",
      "Do not exfoliate or use retinoids/acids for 3 days post-treatment."
    ]
  },
  faq: [
    {
      question: "What’s the difference between PRP, Rejuran, and Kiara Reju?",
      answer:
        "PRP/PRFM uses your own plasma for natural regeneration. Rejuran repairs with salmon DNA (PDRN), and Kiara Reju adds glow with niacinamide and hyaluronic acid."
    },
    {
      question: "Is this a filler?",
      answer:
        "No. Most mesotherapy treatments do not add volume—they improve skin quality, hydration, and glow without altering your facial shape."
    },
    {
      question: "How long do results last?",
      answer:
        "Depending on the product and skin concern, results may last 4–6 months or longer with proper maintenance."
    },
    {
      question: "Does it hurt?",
      answer:
        "We use numbing cream and ultra-fine needles. Most patients find it very tolerable, and some treatments like SkinVive are virtually painless."
    },
    {
      question: "How many sessions will I need?",
      answer:
        "Most protocols involve 2–3 sessions spaced 3–4 weeks apart. Results build progressively after each one."
    }
  ]
};