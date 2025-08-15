export const co2Laser = {
  slug: "co2-laser",
  category: "laser-resurfacing",
  categoryDisplayName: "Laser Treatments & Skin Resurfacing",
  serviceDisplayName: "CO₂ Laser Resurfacing (AcuPulse)",
  isPopular: true,
  isPromoEligible: true,
  image: "/laser-co2.jpg",
  image2: "/laser-co2-2.jpg",
  description:
    "Deep fractional CO₂ laser therapy to repair damaged skin, reduce wrinkles, and renew overall texture and tone.",
  standardPrice: "Varies by area",
  promoPrice: "Package pricing available",
  notes: [
    "Requires consultation for clearance and prep",
    "Downtime ranges from 3–7 days depending on intensity",
    "Most patients need 1–3 sessions spaced 2+ months apart"
  ],
  details:
    "CO₂ laser delivers fractional ablative energy to stimulate deep skin regeneration. It vaporizes microcolumns of tissue, triggering collagen production and promoting smoother, healthier skin. Ideal for acne scars, wrinkles, sun damage, and dull skin tone.",
  goals: [
    "Fade deep wrinkles and lines",
    "Smooth acne scars and uneven skin",
    "Brighten tone and rejuvenate texture"
  ],
  treatableAreas: [
    "Full Face",
    "Perioral Lines (Smoker’s Lines)",
    "Eye Area",
    "Neck",
    "Chest (Décolleté)",
    "Stretch Marks",
    "Surgical Scars",
    "Hands"
  ],
  pricing: [
    {
      serviceChild: "Perioral Area",
      isPromoEligible: true,
      standardPrice: "$195USD",
      promoPrice: "$165USD",
      notes: null
    },
    {
      serviceChild: "Under-Eyes",
      isPromoEligible: true,
      standardPrice: "$195USD",
      promoPrice: "$165USD",
      notes: null
    },
    {
      serviceChild: "Full Face",
      isPromoEligible: true,
      standardPrice: "$460USD",
      promoPrice: "$415USD",
      notes: null
    },
    {
      serviceChild: "Neck",
      isPromoEligible: true,
      standardPrice: "$225USD",
      promoPrice: "$200USD",
      notes: null
    },
    {
      serviceChild: "Chest",
      isPromoEligible: true,
      standardPrice: "$260USD",
      promoPrice: "$230USD",
      notes: null
    }
  ],
  addOns: [
    {
      serviceParent: "Platelet-Rich Plasma (PRP)",
      serviceChild: null,
      displayName: "PRP Add-On",
      link: "/treatments/prp"
    }
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