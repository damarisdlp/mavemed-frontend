export const enzymaticTherapy = {
  urlSlug: "enzymatic-therapy",
  category: "skin-tightening",
  categoryDisplayName: "Skin Tightening & Sculpting",
  serviceDisplayName: "Enzymatic Remodeling Therapy",
  isPopular: false,
  isPromoEligible: true,
  images: {
    primary: "/body.jpg",
    secondary: "/enzymatic2.jpg",
  },
  description:
    "Localized fat reduction and fibrosis breakdown using targeted enzyme therapy for smoother contour and improved skin texture.",
  details:
    "Enzymatic therapy involves injecting lipolytic and anti-fibrotic enzymes into specific areas to break down dense tissue, improve circulation, and support localized fat metabolism. It is especially effective for post-liposuction fibrosis, stubborn fat pockets, and skin tone irregularities. Results build over time with multiple sessions and are enhanced when combined with drainage or radiofrequency therapy.",
  notes: [
    "Non-surgical, injectable fat reduction treatment",
    "Targets fibrosis, localized fat, and texture irregularities",
    "Most effective in a series of 4–6 sessions",
  ],
  pricing: {
    startingPrice: "$130 USD per session",
    startingPriceCurrency: "USD",
    promoPrice: "$110 USD per session (with package)",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Localized Area (any small zone)",
        isPromoEligible: true,
        optionPrice: "$130 USD",
        optionCurrency: "USD",
        optionPromoPrice: "$110 USD",
        optionPromoPriceCurrency: "USD",
        notes: null,
      },
      {
        optionName: "Larger Zones (abdomen, thighs, flanks)",
        isPromoEligible: true,
        optionPrice: "$160 USD",
        optionCurrency: "USD",
        optionPromoPrice: "$140 USD",
        optionPromoPriceCurrency: "USD",
        notes: null,
      },
    ],
  },
  goals: [
    "Break down post-lipo fibrosis",
    "Reduce stubborn localized fat",
    "Smooth and even skin texture"
  ],
  treatableAreas: [
    "Abdomen",
    "Arms",
    "Thighs",
    "Back",
    "Flanks",
    "Under Chin (Submental)"
  ],
  addOns: [
    {
      serviceParent: "RF Body Sculpting",
      serviceChild: null,
      displayName: "RF Body Sculpting",
      link: "/treatments/enzymaticRemodeling"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid alcohol and anti-inflammatory medications for 24 hours prior to reduce the risk of bruising.",
      "Drink plenty of water before treatment to support post-treatment lymphatic drainage."
    ],
    postTreatment: [
      "Expect some soreness, swelling, or bruising in the treated area for 2–5 days.",
      "Wear compression garments if recommended to enhance sculpting results.",
      "Engage in gentle movement or lymphatic massage to accelerate enzyme clearance and optimize results."
    ]
  },
  faq: [
    {
      question: "Is this the same as mesotherapy?",
      answer: "Not exactly. Enzymatic therapy uses specific enzymes designed for fibrosis and post-lipo remodeling, whereas mesotherapy typically uses general lipolytic cocktails."
    },
    {
      question: "How many sessions are needed?",
      answer: "Most patients benefit from 4–6 sessions, spaced 1–2 weeks apart, depending on treatment goals and area size."
    },
    {
      question: "Does the treatment hurt?",
      answer: "You may feel slight stinging during injection and tenderness after. Discomfort is mild and temporary."
    },
    {
      question: "When will I see results?",
      answer: "Some smoothing is visible within 1–2 weeks. More dramatic results appear progressively across multiple sessions."
    },
    {
      question: "Can I combine this with other treatments?",
      answer: "Yes. Combining enzymatic therapy with RF body sculpting or lymphatic massage improves both fat reduction and skin tightening outcomes."
    }
  ]
};