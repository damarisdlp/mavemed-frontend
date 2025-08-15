export const laserHairRemoval = {
  slug: "laser-hair-removal",
  category: "laser-resurfacing",
  categoryDisplayName: "Laser Treatments & Skin Resurfacing",
  serviceDisplayName: "Laser Hair Removal (Soprano Titanium ICE)",
  isPopular: true,
  isPromoEligible: true,
  image: "/hair-removal.jpg",
  image2: "/hair-removal2.jpg",
  description:
    "Pain-free laser hair removal for all skin types using the Alma Soprano Titanium ICE system.",
  standardPrice: "Starts at $39USD per session",
  promoPrice: "Discounted packages available",
  notes: [
    "6–8 sessions recommended for full clearance",
    "Maintenance touch-ups may be needed 1–2x per year",
    "Safe for tanned and darker skin tones"
  ],
  details:
    "The Alma Soprano Titanium uses triple-wavelength laser energy and ICE cooling to deliver virtually painless, fast, and effective hair reduction. It targets follicles at all growth stages for long-lasting results.",
  goals: [
    "Permanently reduce unwanted hair",
    "Improve skin texture and minimize ingrowns",
    "Provide safe and comfortable treatments for all tones"
  ],
  treatableAreas: [
    "Upper Lip",
    "Chin",
    "Underarms",
    "Bikini Line",
    "Brazilian",
    "Full Legs",
    "Arms",
    "Back",
    "Chest",
    "Face",
    "Neck"
  ],
  pricing: [
    {
      serviceChild: "Upper Lip",
      isPromoEligible: true,
      standardPrice: "$39USD",
      promoPrice: "$35USD",
      notes: null
    },
    {
      serviceChild: "Underarms",
      isPromoEligible: true,
      standardPrice: "$65USD",
      promoPrice: "$55USD",
      notes: null
    },
    {
      serviceChild: "Bikini Line",
      isPromoEligible: true,
      standardPrice: "$89USD",
      promoPrice: "$75USD",
      notes: null
    },
    {
      serviceChild: "Brazilian",
      isPromoEligible: true,
      standardPrice: "$120USD",
      promoPrice: "$105USD",
      notes: null
    },
    {
      serviceChild: "Full Legs",
      isPromoEligible: true,
      standardPrice: "$225USD",
      promoPrice: "$199USD",
      notes: null
    }
  ],
  addOns: [], // You can add any linked services here if applicable
  expectations: {
    preTreatment: [
      "Shave the treatment area the day before your session. Do not wax or pluck.",
      "Avoid sun exposure and tanning for 2 weeks prior to treatment."
    ],
    postTreatment: [
      "You may experience redness or warmth for a few hours. Avoid hot showers, saunas, and exfoliants for 24–48 hours.",
      "Hair will shed gradually over 1–3 weeks. Don't pluck or wax between sessions."
    ]
  },
  faq: [
    {
      question: "Is laser hair removal permanent?",
      answer: "It offers permanent hair reduction. Most clients see 80–90% reduction after completing a full series."
    },
    {
      question: "Does it hurt?",
      answer: "Our system uses ICE cooling for a virtually painless experience. Most patients feel warmth or a mild snap."
    },
    {
      question: "Can I get treated if I have dark skin?",
      answer: "Yes! Soprano Titanium is safe for all Fitzpatrick skin types—including tanned skin."
    },
    {
      question: "How often should I come in?",
      answer: "Sessions are spaced every 4–6 weeks for body and 2–4 weeks for facial areas depending on the growth cycle."
    }
  ]
};