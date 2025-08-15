export const prp = {
  slug: "prp",
  category: "mesotherapy",
  categoryDisplayName: "Mesotherapy & Growth Factor Infusions",
  serviceParentName: "PRP & PRFM – Platelet Therapy",
  currency: "USD",
  isPopular: true,
  isPromoEligible: true,
  image: "/prp.jpg",
  image2: "/prfm.jpg",
  description:
    "Regenerative skin therapy using your body’s own platelets and fibrin matrix to repair, tighten, and rejuvenate.",
  protocol: {
    recommendedSessions: 3,
    intervalWeeks: [3, 4],
  },
  promoInfo: {
    numberOfSessions: 2,
  },
    notes: [
    "PRFM offers longer-lasting growth factor release compared to PRP",
    "Ideal for dark circles, skin laxity, fine lines, and scarring",
    "Safe and natural – no foreign substances"
  ],
  details:
    "PRP (Platelet-Rich Plasma) and PRFM (Platelet-Rich Fibrin Matrix) are regenerative therapies derived from a small sample of your own blood. After centrifugation, the platelet-rich component is extracted and injected or microneedled into the skin, stimulating collagen production, healing, and rejuvenation.",
  goals: [
    "Reduce fine lines and dark circles",
    "Rejuvenate under eyes and facial skin",
    "Stimulate collagen for long-term skin quality"
  ],
  treatableAreas: [
    "Under Eyes - Mesotherapy Only",
    "Full Face",
    "Neck",
    "Décolleté",
    "Scalp (for hair restoration)",
    "Stretch Marks - Medium Zone (e.g: lower abdomen):",
    "Back of Hands"
  ],
  prices: [
    { serviceChildName: "Full Face", applicationMethod: "Microneedling", priceType: "standard", price: 165 },
    { serviceChildName: "Full Face", applicationMethod: "Mesotherapy", priceType: "standard", price: 180 },
    { serviceChildName: "Full Face", applicationMethod: "Microneedling", priceType: "promo", price: 170 },
    { serviceChildName: "Full Face", applicationMethod: "Mesotherapy", priceType: "promo", price: 160 },

    { serviceChildName: "Full Face & Neck", applicationMethod: "Microneedling", priceType: "standard", price: 180 },
    { serviceChildName: "Full Face & Neck", applicationMethod: "Mesotherapy", priceType: "standard", price: 205 },
    { serviceChildName: "Full Face & Neck", applicationMethod: "Microneedling", priceType: "promo", price: 185 },
    { serviceChildName: "Full Face & Neck", applicationMethod: "Mesotherapy", priceType: "promo", price: 175 },

    { serviceChildName: "Full Face, Neck, & Décolleté", applicationMethod: "Microneedling", priceType: "standard", price: 195 },
    { serviceChildName: "Full Face, Neck, & Décolleté", applicationMethod: "Mesotherapy", priceType: "standard", price: 235 },
    { serviceChildName: "Full Face, Neck, & Décolleté", applicationMethod: "Microneedling", priceType: "promo", price: 215 },
    { serviceChildName: "Full Face, Neck, & Décolleté", applicationMethod: "Mesotherapy", priceType: "promo", price: 205 },

    { serviceChildName: "Back of Hands", applicationMethod: "Microneedling", priceType: "standard", price: 120 },
    { serviceChildName: "Back of Hands", applicationMethod: "Microneedling", priceType: "promo", price: 105 },

    { serviceChildName: "Under Eyes", applicationMethod: "Mesotherapy", priceType: "standard", price: 100 },
    { serviceChildName: "Under Eyes", applicationMethod: "Mesotherapy", priceType: "promo", price: 95 },

    { serviceChildName: "Scalp (for hair restoration)", applicationMethod: "Mesotherapy", priceType: "standard", price: 145 },
    { serviceChildName: "Scalp (for hair restoration)", applicationMethod: "Mesotherapy", priceType: "promo", price: 125 },

    { serviceChildName: "Stretch Marks", applicationMethod: "Microneedling", priceType: "standard", price: 115 },
    { serviceChildName: "Stretch Marks", applicationMethod: "Microneedling", priceType: "promo", price: 105 },
  ],
  addOns: [],
  expectations: {
    preTreatment: [
      "Hydrate well for 24 hours before your appointment to ensure a successful blood draw."
    ],
    postTreatment: [
      "Swelling, redness, or pinpoint bruising may occur and resolve within 1–3 days.",
      "Avoid blood thinners, alcohol, and sun exposure for at least 24 hours."
    ]
  },
  faq: [
    {
      question: "What is the difference between PRP and PRFM?",
      answer:
        "PRFM includes a fibrin matrix that holds growth factors in place longer, allowing extended regeneration over days instead of hours."
    },
    {
      question: "How many treatments will I need?",
      answer:
        "Most patients benefit from 2–3 sessions spaced 4–6 weeks apart, followed by maintenance every 6–12 months."
    },
    {
      question: "Can I do this with microneedling?",
      answer:
        "Yes. Combining PRP or PRFM with microneedling enhances collagen stimulation and helps penetrate growth factors more deeply into the skin."
    }
  ]
};