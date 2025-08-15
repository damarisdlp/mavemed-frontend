export const venusFreeze = {
  slug: "venus-freeze",
  category: "skin-tightening",
  categoryDisplayName: "Skin Tightening & Sculpting",
  serviceDisplayName: "Radio Frequency Body Sculpting",
  isPopular: false,
  isPromoEligible: true,
  image: "/radiofrequency.jpg",
  image2: "/venus-freeze2.jpg",
  description:
    "Non-invasive radiofrequency therapy to smooth skin, reduce localized fat, and improve body contour.",
  standardPrice: "$110USD per session",
  promoPrice: "$95USD per session with package",
  notes: [
    "Painless treatment with no downtime",
    "Multiple sessions recommended for optimal results",
    "Also improves cellulite and lymphatic drainage"
  ],
  details:
    "Venus Freeze uses multi-polar radiofrequency and pulsed electromagnetic fields to deliver heat into the skin, stimulating collagen and elastin while reducing fat deposits. Ideal for patients seeking skin tightening and smoother contours without surgery.",
  goals: [
    "Tighten loose skin on abdomen, arms, or thighs",
    "Reduce appearance of cellulite",
    "Stimulate collagen and lymphatic drainage"
  ],
  treatableAreas: [
    "Abdomen",
    "Arms",
    "Inner Thighs",
    "Outer Thighs",
    "Buttocks",
    "Back (Bra Fat)",
    "Love Handles"
  ],
  pricing: [
    {
      serviceChild:    "Abdomen",
      isPromoEligible: true,
      standardPrice:   "$110USD",
      promoPrice:      "$95USD",
      notes:           null
    },
    {
      serviceChild:    "Arms",
      isPromoEligible: true,
      standardPrice:   "$110USD",
      promoPrice:      "$95USD",
      notes:           null
    },
    {
      serviceChild:    "Thighs (Inner or Outer)",
      isPromoEligible: true,
      standardPrice:   "$120USD",
      promoPrice:      "$105USD",
      notes:           null
    },
    {
      serviceChild:    "Buttocks",
      isPromoEligible: true,
      standardPrice:   "$130USD",
      promoPrice:      "$115USD",
      notes:           null
    }
  ],
  addOns: [
    {
      serviceParent: "Enzymatic Therapy",
      serviceChild:  null,
      displayName:   "Enzymatic Therapy",
      link:          "/treatments/enzymatic-therapy"
    }
  ],
  expectations: {
    preTreatment: [
      "Hydrate well for 24 hours before treatment to aid lymphatic response.",
      "Avoid heavy meals and caffeine 2 hours before session."
    ],
    postTreatment: [
      "Slight redness or warmth may occur and usually resolves within a few hours.",
      "Engage in light physical activity and drink water to help flush toxins.",
      "Multiple sessions (typically 6–8) are recommended for long-term contouring effects."
    ]
  },
  faq: [
    {
      question: "Is Venus Freeze painful?",
      answer:
        "No, it’s a comfortable treatment often described as a hot stone massage."
    },
    {
      question: "How soon will I see results?",
      answer:
        "You may notice some tightening after the first session, but full results develop over 6–8 treatments."
    },
    {
      question: "How long do results last?",
      answer:
        "Results can last several months, especially when paired with healthy habits and maintenance sessions."
    },
    {
      question: "Can this replace liposuction?",
      answer:
        "No, Venus Freeze is ideal for mild to moderate contouring. It is not a substitute for surgical fat removal."
    },
    {
      question: "Is there downtime?",
      answer:
        "No downtime—patients return to normal activities immediately after each session."
    }
  ]
};