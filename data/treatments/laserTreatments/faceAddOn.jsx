export const serumAddOns = {
  urlSlug: "serum-add-ons",
  category: "laser-resurfacing",
  categoryDisplayName: "Laser Treatments & Skin Resurfacing",
  serviceDisplayName: "Serum Add-Ons",
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/serum.jpg",
    secondary: "/serum2.jpg",
  },
  description:
    "Enhance your treatment results with our specialty serums and boosters. These add-ons are applied immediately after procedures like RF microneedling, or laser resurfacing to deliver targeted actives deep into the skin, amplifying healing and rejuvenation.",
  details:
    "Serum Add‑Ons are concentrated boosters that infuse the skin with powerful ingredients during the optimal post-treatment window. Each option targets different skin needs — from cellular repair and hydration to biostimulation and brightening — for faster recovery and superior outcomes.",
  notes: [
    "Recommended immediately after RF microneedling or CO2 laser",
    "Boosts healing and enhances visible results",
    "Safe for most skin types; select based on provider guidance"
  ],
  pricing: {
    startingPrice: "$95",
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName:
          "Add-On - PRP or PRFM",
        isPromoEligible: false,
        optionPrice: "$90",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: ["Uses patient's own platelet-rich plasma or platelet-rich fibrin matrix for natural healing"]
      },
      {
        optionName: "Add-On - Kiara Reju",
        isPromoEligible: false,
        optionPrice: "$190",
        optionCurrency: "USD",
        optionPromoPrice: "$170",
        optionPromoPriceCurrency: "USD",
        notes: ["PN + HA + Niacinamide booster for hydration and radiance"]
      },
      {
        optionName: "Add-On - Rejuran",
        isPromoEligible: false,
        optionPrice: "$300",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: "USD",
        notes: ["Salmon DNA-based cellular regeneration and repair"]
      },
    ]
  },
  goals: [
    "Firm and lift sagging skin",
    "Hydrate deeply and nourish",
    "Soften fine lines and signs of aging"
  ],
  treatableAreas: [
    "Face",
    "Neck",
    "Décolleté"
  ],
  addOns: [
    {
      serviceParent: "Scarlet S RF Microneedling",
      serviceChild: "Scarlet S RF Microneedling - Face",
      displayName: "Scarlet S RF Microneedling - Face",
      link: "/treatments/rf-microneedling"
    }
  ],
  expectations: {
    preTreatment: [
      "No special preparation needed.",
      "Avoid retinoids or peels for 48 hours prior if possible."
    ],
    postTreatment: [
      "Your skin will look lifted and luminous immediately after application.",
      "Avoid harsh products or exfoliation for 24 hours."
    ]
  },
  faq: [
    {
      question: "Is this add‑on good for mature skin?",
      answer:
        "Yes, it’s specifically designed for aging skin to boost firmness, elasticity, and glow."
    },
    {
      question: "Can I wear makeup after receiving a serum add‑on?",
      answer:
        "Yes, but we recommend letting your skin breathe for a few hours post‑treatment for best results."
    },
    {
      question: "Which serum add‑on should I choose?",
      answer:
        "Your provider will help you select the most effective option based on your skin goals and the treatment performed."
    }
  ]
};