export const sculptra = {
  urlSlug: "sculptra",
  category: "biostimulatory-fillers",
  categoryDisplayName: "Collagen Biostimulators",
  serviceDisplayName: "Sculptra PLLA Collagen Stimulator",
  isPopular: true,
  isPromoEligible: true,
  images: {
    primary: "/sculptra.jpg",
    secondary: "/sculptra2.jpg"
  },
  description:
    "Gradually restore youthful volume and firmness with Sculptra — a poly-L-lactic acid (PLLA) collagen stimulator that enhances skin texture and structure over time.",
  details:
    "Sculptra is an injectable biostimulant composed of poly-L-lactic acid (PLLA), designed to activate your skin’s natural collagen production. It gradually restores lost facial volume, improves skin density, and enhances definition in areas like the cheeks, jawline, and temples. Unlike traditional dermal fillers, Sculptra delivers subtle, progressive improvements that last up to two years.",
  notes: [
    "Treatment plan typically includes 2–3 vials spaced 4–6 weeks apart",
    "Full results build over 2–3 months as collagen regenerates",
    "Excellent for long-term volume restoration without an overfilled look"
  ],
  notes: [
          "Exclusive pricing varies per quantity of sessions needed, listed price is applicable for 3 sessions"
        ],
  pricing: {
    startingPrice: "$575",
    startingPriceCurrency: "USD",
    promoPrice: "$515",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Per Vial",
        isPromoEligible: true,
        optionPrice: "$575",
        optionCurrency: "USD",
        optionPromoPrice: "$515",
        optionPromoPriceCurrency: "USD",
        notes: [
          "Exclusive pricing varies per quantity of sessions needed, listed price is applicable for 3 sessions"
        ]
      }
    ]
  },
  goals: [
    "Stimulate natural collagen growth",
    "Rebuild facial volume lost to aging",
    "Improve skin texture, elasticity, and structure"
  ],
  treatableAreas: [
    "Cheeks",
    "Temples",
    "Jawline",
    "Nasolabial Folds",
    "Marionette Lines",
    "Chin",
    "Neck"
  ],
  addOns: [
    {
      serviceParent: "Ultraformer MPT Ultrasound Lift",
      serviceChild: "360 Contour",
      displayName: "Ultraformer MPT Ultrasound Lift - 360 Contour",
      link: "/treatments/skinTightSculpt/ultraformerMPT"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid alcohol, aspirin, ibuprofen, and fish oil supplements 24–48 hours before treatment to minimize bruising.",
      "Stay well-hydrated and eat a nutritious meal before your appointment."
    ],
    postTreatment: [
      "Massage treated areas for 5 minutes, 5 times a day, for 5 days to support even collagen stimulation.",
      "Mild swelling or bruising may occur and typically resolves in a few days.",
      "Results develop gradually over 4 to 8 weeks, with full improvements visible by 3 months."
    ]
  },
  faq: [
    {
      question: "What makes Sculptra different from traditional fillers?",
      answer:
        "Sculptra stimulates your body’s own collagen production over time, rather than adding immediate volume like hyaluronic acid fillers. The result is longer-lasting, natural rejuvenation."
    },
    {
      question: "How many vials are typically needed?",
      answer:
        "Most patients need 2–3 vials over the course of multiple sessions, depending on age, facial volume loss, and treatment goals."
    },
    {
      question: "Is there any downtime?",
      answer:
        "There may be mild swelling, redness, or bruising, but most patients return to daily activities immediately after treatment."
    },
    {
      question: "When will I see results?",
      answer:
        "Results appear gradually over several weeks as collagen builds, with continued improvement up to 6 months."
    },
    {
      question: "How long do the results last?",
      answer:
        "Sculptra results typically last 2 years or longer with proper treatment and maintenance."
    }
  ]
};