export const kiaraReju = {
  slug: "kiara-reju", //url
  category: "microneedling-mesotherapy", //category, related to filtering
  categoryDisplayName: "Microneedling & Mesotherapy", //category display could go in its own file tbh
  serviceParentName: "PN + Hyaluronic Acid Booster + Niacinamide", //displayed titled
  currency: "USD", //currency of servive
  isPopular: true, //need to code backend to pull data, related to filtering
  isPromoEligible: true, //promo eligible related to filtering
  image: "/kiara-reju.jpg",
  image2: "/kiara-reju2.jpg",
  description:
    "Skin booster combining polynucleotides (PN), hyaluronic acid, and niacinamide for deep hydration, repair, and natural glow.",
  protocol: {
    recommendedSessions: 3,
    intervalWeeks: [3, 4],
  },
  promoInfo: {
    numberOfSessions: 2,
  },
    notes: [
    "Ideal for dull, dry, or tired-looking skin",
    "Can be applied via microneedling, topical infusion, or microinjections"
  ],
  details:
    "Kiara Reju is a next-generation skin rejuvenation product that blends hyaluronic acid and niacinamide with salmon-derived polynucleotides (PN) to enhance skin hydration, elasticity, and cellular regeneration. It is gentle yet highly effective, perfect for sensitive or first-time skin booster patients.",
  goals: [
    "Hydrate and plump the skin",
    "Enhance skin tone and radiance",
    "Repair fine lines and texture damage"
  ],
  treatableAreas: [
    "Back of Hands",
    "Décolleté",
    "Face",
    "Neck"
  ],
  prices: [
    { serviceChildName: "Full Face", applicationMethod: "Microneedling", priceType: "standard", price: 190 },
    { serviceChildName: "Full Face", applicationMethod: "Mesotherapy", priceType: "standard", price: 180 },
    { serviceChildName: "Full Face", applicationMethod: "Microneedling", priceType: "promo", price: 170 },
    { serviceChildName: "Full Face", applicationMethod: "Mesotherapy", priceType: "promo", price: 160 },

    { serviceChildName: "Full Face & Neck", applicationMethod: "Microneedling", priceType: "standard", price: 215 },
    { serviceChildName: "Full Face & Neck", applicationMethod: "Mesotherapy", priceType: "standard", price: 205 },
    { serviceChildName: "Full Face & Neck", applicationMethod: "Microneedling", priceType: "promo", price: 185 },
    { serviceChildName: "Full Face & Neck", applicationMethod: "Mesotherapy", priceType: "promo", price: 175 },

    { serviceChildName: "Full Face, Neck, & Décolleté", applicationMethod: "Microneedling", priceType: "standard", price: 245 },
    { serviceChildName: "Full Face, Neck, & Décolleté", applicationMethod: "Mesotherapy", priceType: "standard", price: 235 },
    { serviceChildName: "Full Face, Neck, & Décolleté", applicationMethod: "Microneedling", priceType: "promo", price: 215 },
    { serviceChildName: "Full Face, Neck, & Décolleté", applicationMethod: "Mesotherapy", priceType: "promo", price: 205 },
  ],
  addOns: [],
  expectations: {
    preTreatment: [
      "Avoid anti-inflammatories and alcohol 24 hours before your appointment."
    ],
    postTreatment: [
      "Expect mild redness or small bumps that subside within 24–48 hours.",
      "Avoid sun exposure and makeup for 24 hours after treatment."
    ]
  },
  faq: [
    {
      question: "How does Kiara Reju compare to Rejuran?",
      answer:
        "Both contain PN for cellular regeneration, but Kiara Reju adds hyaluronic acid for enhanced hydration and glow."
    },
    {
      question: "When will I see results?",
      answer:
        "Most patients notice brighter, smoother skin within 7–10 days, with cumulative improvement after each session."
    },
    {
      question: "Can I combine this with other treatments?",
      answer:
        "Yes, it pairs well with RF microneedling, laser, or facial treatments for enhanced outcomes."
    }
  ]
};