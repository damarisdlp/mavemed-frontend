export const skinvive = {
  slug: "skinvive",
  category: "mesotherapy",
  categoryDisplayName: "Mesotherapy & Growth Factor Infusions",
  serviceDisplayName: "SkinVive by Juvéderm",
  isPopular: true,
  isPromoEligible: true,
  image: "/skinvive.jpg",
  image2: "/skinvive2.jpg",
  description:
    "FDA-approved skin hydration injectable that smooths texture and adds glow using hyaluronic acid microdroplets.",
  standardPrice: "$250USD",
  promoPrice: "$220USD",
  notes: [
    "Perfect for dull, dry, or uneven skin texture",
    "Lasts up to 6 months with visible glow and improved smoothness",
    "Minimal downtime, ideal for busy patients"
  ],
  details:
    "SkinVive by Juvéderm is a microdroplet hyaluronic acid injection that hydrates skin from within. It improves texture, radiance, and moisture retention without adding volume. FDA-approved for the cheeks and safe for most skin types.",
  goals: [
    "Boost skin hydration",
    "Improve texture and glow",
    "Smooth fine lines without adding volume"
  ],
  treatableAreas: [
    "Cheeks",
    "Face",
    "Neck"
  ],
  pricing: [
    {
      serviceChild: "Cheeks",
      isPromoEligible: true,
      standardPrice: "$250USD",
      promoPrice: "$220USD",
      notes: null
    },
    {
      serviceChild: "Cheeks + Neck",
      isPromoEligible: true,
      standardPrice: "$300USD",
      promoPrice: "$265USD",
      notes: null
    }
  ],
  addOns: [],
  expectations: {
    preTreatment: [
      "Avoid alcohol, aspirin, and anti-inflammatories 24 hours before."
    ],
    postTreatment: [
      "Mild swelling or tenderness may occur at injection sites and typically resolves within 48 hours.",
      "Do not massage or apply pressure to the treated area for 24 hours."
    ]
  },
  faq: [
    {
      question: "Is SkinVive the same as dermal fillers?",
      answer:
        "No, SkinVive hydrates and smooths the skin without adding volume. It’s designed for radiance, not contour."
    },
    {
      question: "When will I see results?",
      answer:
        "Glow and skin softness can appear within a few days, with continued improvement over 2–4 weeks."
    },
    {
      question: "How long does SkinVive last?",
      answer:
        "Up to 6 months for most patients. Maintenance every 5–6 months is ideal for best results."
    }
  ]
};