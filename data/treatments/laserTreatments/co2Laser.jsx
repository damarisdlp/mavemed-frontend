export const co2Laser = {
  urlSlug: "co2-laser",
  category: "laser-resurfacing",
  categoryDisplayName: "Laser Treatments & Skin Resurfacing",
  serviceDisplayName: "CO₂ Laser Resurfacing (AcuPulse)",
  isPopular: true,
  isPromoEligible: false,
  images: {
    primary: "/laser-co2.jpg",
    secondary: "/laser-co2-2.jpg"
  },
  description:
    "Deep fractional CO₂ laser therapy to repair damaged skin, reduce wrinkles, and renew overall texture and tone.",
  details:
    "CO₂ laser delivers fractional ablative energy to stimulate deep skin regeneration. It vaporizes microcolumns of tissue, triggering collagen production and promoting smoother, healthier skin. Ideal for acne scars, wrinkles, sun damage, and dull skin tone.",
  notes: [
    "Requires consultation for clearance and prep",
    "Downtime ranges from 3–7 days depending on intensity",
    "Most patients need 1–3 sessions spaced 2+ months apart"
  ],
  pricing: {
    startingPrice: "$185",
    startingPriceCurrency: "USD",
    promoPrice: "$",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "CO₂ Laser - Custom Zone Size (Starting Price)",
        isPromoEligible: false,
        optionPrice: "$185",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "CO₂ Laser - Scars (Subject Evaluation)",
        isPromoEligible: false,
        optionPrice: "$200",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "CO₂ Laser - Under Eye",
        isPromoEligible: false,
        optionPrice: "$250",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "CO₂ Laser - Décolleté",
        isPromoEligible: false,
        optionPrice: "$250",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "CO₂ Laser - Hands",
        isPromoEligible: false,
        optionPrice: "$300",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "CO₂ Laser - Neck",
        isPromoEligible: false,
        optionPrice: "$385",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "CO₂ Laser - Chest",
        isPromoEligible: false,
        optionPrice: "$400",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "CO₂ Laser - Full Face",
        isPromoEligible: false,
        optionPrice: "$550",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "CO₂ Laser - Full Face + Neck",
        isPromoEligible: false,
        optionPrice: "$650",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "CO₂ Laser - Full Face + Neck",
        isPromoEligible: false,
        optionPrice: "$650",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "CO₂ Laser - Stretch Marks (Abdomen)",
        isPromoEligible: false,
        optionPrice: "$845",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: ["Other zones treatable, price subject evaluation"]
      },
      {
        optionName: "CO₂ Laser - Full Face + Neck + Décolleté",
        isPromoEligible: false,
        optionPrice: "$850",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      },
      {
        optionName: "CO₂ Laser - Full Face + Neck + Décolleté + Chest",
        isPromoEligible: false,
        optionPrice: "$950",
        optionCurrency: "USD",
        optionPromoPrice: "$",
        optionPromoPriceCurrency: "USD",
        notes: null
      }
    ]
  },
  goals: [
    "Fade deep wrinkles and lines",
    "Smooth acne scars and uneven skin",
    "Brighten tone and rejuvenate texture"
  ],
  treatableAreas: [
    "Perioral Lines (Smoker’s Lines)",
    "Under-Eyes",
    "Full Face",
    "Neck",
    "Décolleté",
    "Stretch Marks",
    "Scars",
    "Hands",
    "Other zones available upon request"
  ],
  addOns: [
    {
      serviceParent: "Serum Add-Ons",
      serviceChild: "Add-On - Platelet-Rich Plasma (PRP) or Platelet-Rich Fibrin Matrix (PRFM)",
      displayName: "Add-On - Platelet-Rich Plasma (PRP) or Platelet-Rich Fibrin Matrix (PRFM)",
      link: "/treatments/serum-add-ons"
    },
    {
      serviceParent: "Serum Add-Ons",
      serviceChild: "Add-On - Rejuran",
      displayName: "Add-On - Rejuran",
      link: "/treatments/serum-add-ons"
    },
    {
      serviceParent: "Casmara Purifying Algae Facial",
      serviceChild:  "Casmara Purifying Algae Facial",
      displayName:   "Casmara Purifying Algae Facial",
      link:          "/treatments/casmara-purifying"
    },
  ],
  expectations: {
    preTreatment: [
      "Avoid sun exposure, retinoids, and acids for 7 days before your session.",
      "Discontinue any exfoliating treatments or harsh products prior to laser."
    ],
    postTreatment: [
      "Redness, swelling, and peeling are expected and part of the healing process.",
      "Keep the area clean and moisturized. Avoid direct sun until fully healed.",
      "Use only provider-recommended skincare during recovery.",
      "Makeup may be worn after 5–7 days, once the skin has fully re-epithelialized."
    ]
  },
  faq: [
    {
      question: "Is CO₂ laser painful?",
      answer:
        "Topical anesthetic is applied prior to the session. Most patients describe it as warm with occasional sharp zaps. Mild discomfort may persist for 1–2 days."
    },
    {
      question: "How long is recovery?",
      answer:
        "Expect 5–7 days of visible healing depending on intensity. Redness may persist for a couple of weeks but can be covered with makeup after peeling stops."
    },
    {
      question: "Can I combine this with PRP or other treatments?",
      answer:
        "Yes! PRP can speed up healing and enhance results. Other treatments like microneedling or injectables should be timed strategically—your provider will guide you."
    },
    {
      question: "How many sessions do I need?",
      answer:
        "Many patients see dramatic results after one session, but deeper scars or advanced aging may benefit from 2–3 treatments spaced out over several months."
    }
  ]
};